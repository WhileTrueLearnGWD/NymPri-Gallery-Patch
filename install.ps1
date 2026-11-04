# NymPri Gallery Patch installer / uninstaller (Windows PowerShell 5.1+)
# Usage: put this folder anywhere, then run install.bat. It looks for the game
# (a folder containing www\data\System.json) in this folder, its parent, or the path given with -GameDir.
param([string]$GameDir = "", [switch]$Uninstall)
$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
$utf8 = New-Object System.Text.UTF8Encoding($false)
function Join-MapInfos($items) {
  $parts = foreach ($i in $items) { if ($null -eq $i) { "null" } else { ConvertTo-Json -InputObject $i -Depth 6 -Compress } }
  return "[" + ($parts -join ",") + "]"
}

function Find-Game {
  foreach ($c in @($GameDir, $here, (Split-Path -Parent $here))) {
    if ($c -and (Test-Path -LiteralPath (Join-Path $c "www\data\System.json"))) { return (Resolve-Path -LiteralPath $c).Path }
  }
  return $null
}
$game = Find-Game
if (-not $game) { $game = Read-Host "Game folder (the one with Game.exe and www)"; if (-not (Test-Path -LiteralPath (Join-Path $game "www\data\System.json"))) { throw "Not a NymPri game folder: $game" } }
Write-Host "Game: $game"

$pluginsJs = Join-Path $game "www\js\plugins.js"
$mapInfos  = Join-Path $game "www\data\MapInfos.json"
$pluginDst = Join-Path $game "www\js\plugins\KNS_GalerieRoom.js"
$mapDst    = Join-Path $game "www\data\Map434.json"
$bak = Join-Path $game "_gallery_patch_backup"

if ($Uninstall) {
  $t = [IO.File]::ReadAllText($pluginsJs, $utf8)
  $t = [regex]::Replace($t, '(?m)^\{"name":"KNS_GalerieRoom".*\r?\n', '')
  [IO.File]::WriteAllText($pluginsJs, $t, $utf8)
  $mi = ConvertFrom-Json -InputObject ([IO.File]::ReadAllText($mapInfos, $utf8))
  if ($mi.Count -gt 434) {
    $list = New-Object System.Collections.ArrayList; foreach ($e in $mi) { [void]$list.Add($e) }
    if ($list[434] -and $list[434].name -eq "Gallery") { $list[434] = $null }
    while ($list.Count -gt 0 -and $null -eq $list[$list.Count-1]) { $list.RemoveAt($list.Count-1) }
    [IO.File]::WriteAllText($mapInfos, (Join-MapInfos $list), $utf8)
  }
  Remove-Item -LiteralPath $pluginDst, $mapDst -ErrorAction SilentlyContinue
  Write-Host "Gallery patch removed."
  return
}

# 1. backups of the two files we modify
New-Item -ItemType Directory -Force -Path $bak | Out-Null
foreach ($f in @($pluginsJs, $mapInfos)) {
  $b = Join-Path $bak ((Split-Path -Leaf $f) + ".orig")
  if (-not (Test-Path -LiteralPath $b)) { Copy-Item -LiteralPath $f -Destination $b }
}

# 2. copy the new files
Copy-Item -LiteralPath (Join-Path $here "www\js\plugins\KNS_GalerieRoom.js") -Destination $pluginDst -Force
Copy-Item -LiteralPath (Join-Path $here "www\data\Map434.json") -Destination $mapDst -Force

# 3. register the plugin right after KNS_Gallery (idempotent)
$t = [IO.File]::ReadAllText($pluginsJs, $utf8)
if ($t -notmatch '"name":"KNS_GalerieRoom"') {
  $entry = '{"name":"KNS_GalerieRoom","status":true,"description":"Galerie","parameters":{}}'
  $m = [regex]::Match($t, '(?m)^\{"name":"KNS_Gallery".*?\}\}(,?)\r?$')
  if (-not $m.Success) { throw "KNS_Gallery not found in plugins.js (unexpected game version)." }
  $nl = if ($t.Contains("`r`n")) { "`r`n" } else { "`n" }
  $line = $m.Value
  if ($m.Groups[1].Value -ne ",") { $line2 = $line.TrimEnd("`r") + "," } else { $line2 = $line.TrimEnd("`r") }
  $t = $t.Remove($m.Index, $m.Length).Insert($m.Index, $line2 + $nl + $entry + ",")
  [IO.File]::WriteAllText($pluginsJs, $t, $utf8)
}

# 4. add map 434 to MapInfos.json (idempotent)
$mi = ConvertFrom-Json -InputObject ([IO.File]::ReadAllText($mapInfos, $utf8))
$list = New-Object System.Collections.ArrayList; foreach ($e in $mi) { [void]$list.Add($e) }
while ($list.Count -le 434) { [void]$list.Add($null) }
if ($list[434] -and $list[434].name -ne "Gallery") { throw "Map id 434 is already used by '$($list[434].name)' in this game." }
$list[434] = [pscustomobject]@{ id=434; expanded=$false; name="Gallery"; order=383; parentId=0; scrollX=0; scrollY=0 }
[IO.File]::WriteAllText($mapInfos, (Join-MapInfos $list), $utf8)

Write-Host "Done. Start the game: a 'Gallery' command is on the title screen."
Write-Host "Backups of plugins.js and MapInfos.json: $bak"
