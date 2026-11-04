/*:
 * @plugindesc ver.1.0.0 Galerie : map jouable pour rejouer les scenes (ajout local, genere depuis galerie_manifest.csv)
 * @author local
 *
 * @help
 * Ajoute la commande "Galerie" au titre (nouvelle partie dans la map 434,
 * switch 5 "mode galerie" actif). Chaque PNJ ouvre une liste de scenes.
 * A placer apres KNS_Gallery et KNS_EventCall.
 */
const Galerie = {
    mapId: 434, startX: 12, startY: 22, pageSize: 8, active: false, showLogs: false, res: null, sel: -1, page: {},
    npcs: [{"name":"Yarizo (NTR) 1/2","actors":[1,2],"x":2,"y":3,"en":"Yarizo (NTR) 1/2","scenes":[["酒場兼宿屋 『踊る一角獣亭』 : 酒場ヤリゾーイベント [1]",14,61,2,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Tavern Yarizo Event [1]",11,14,[2],0,0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["酒場兼宿屋 『踊る一角獣亭』 : 酒場ヤリゾーイベント [2]",14,61,3,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Tavern Yarizo Event [2]",17,12,[2],0,0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["浴場 : ヤリゾー風呂場イベのやつ",16,41,1,"Bathhouse : Yarizo Bath Bathroom Event",4,16,[2],[6,14,8],0,0,0,{"v":[],"tr":0,"js":["window.$yaba12 = 1;","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false); $gameVariables.setValue(882, 0);"]},0],["宿屋２F : ヤリゾー寝取らせ開始イベント (p2) [Lv0-3]",22,19,2,"Inn 2F : Yarizo NTS Start Event (p2) [Lv0-3]",3,4,0,[3,7,6],[204,3],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["宿屋２F : ヤリゾー寝取らせ開始イベント (p2) [Lv4-5]",22,19,2,"Inn 2F : Yarizo NTS Start Event (p2) [Lv4-5]",3,4,0,[3,7,6],[204,5],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["宿屋２F : ヤリゾー寝取らせ開始イベント [Lv0-3]",22,19,3,"Inn 2F : Yarizo NTS Start Event [Lv0-3]",3,4,0,[3,7,6],[204,3],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["宿屋２F : ヤリゾー寝取らせ開始イベント [Lv4-5]",22,19,3,"Inn 2F : Yarizo NTS Start Event [Lv4-5]",3,4,0,[3,7,6],[204,5],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー系 : ヤリゾー手コキ１",22,19,4,"Yarizo : Yarizo Handjob 1",3,4,0,[3,7,6],0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー系 : ヤリゾー手マン２",22,19,5,"Yarizo : Yarizo Fingering 2",3,4,0,[3,7,6],0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー系 : ヤリゾークンニ",22,19,6,"Yarizo : Yarizo Cunnilingus",3,4,0,[3,7,6],0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー系 : ヤリゾー目隠しフェラ [Lv0-3]",22,19,7,"Yarizo : Yarizo Blindfold Blowjob [Lv0-3]",3,4,0,[3,7,6],[204,3],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー系 : ヤリゾー目隠しフェラ [Lv4-5]",22,19,7,"Yarizo : Yarizo Blindfold Blowjob [Lv4-5]",3,4,0,[3,7,6],[204,5],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ID30:シャイニング・ビーチ : イベント - オイル (p4)",30,35,4,"ID30: Shining Beach : Event - Oil (p4)",26,9,[2],0,[204,3],0,21,0,0],["ID30:シャイニング・ビーチ : イベント - オイル (p5)",30,35,5,"ID30: Shining Beach : Event - Oil (p5)",26,9,[2],0,[204,4],0,21,0,0],["ID30:シャイニング・ビーチ : イベント - オイル (p6)",30,35,6,"ID30: Shining Beach : Event - Oil (p6)",26,9,[2],0,0,0,21,0,0],["ヤリゾー 太ももコキ : ヤリゾー太ももコキ [Lv2]",41,19,1,"Yarizo Thigh Job : Yarizo Thigh Job [Lv2]",4,10,[2],0,[204,2],0,21,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー 太ももコキ : ヤリゾー太ももコキ [Lv3]",41,19,1,"Yarizo Thigh Job : Yarizo Thigh Job [Lv3]",4,10,[2],0,[204,3],0,21,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー 太ももコキ : ヤリゾー太ももコキ [Lv4]",41,19,1,"Yarizo Thigh Job : Yarizo Thigh Job [Lv4]",4,10,[2],0,[204,4],0,21,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾー 太ももコキ : ヤリゾー太ももコキ [Lv5]",41,19,1,"Yarizo Thigh Job : Yarizo Thigh Job [Lv5]",4,10,[2],0,[204,5],0,21,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["コモンＮＰＣ一枚絵系 : ヤリゾー路地裏セックス",137,22,1,"Common NPC Single Images : Yarizo Back Alley Sex",12,3,[2],0,0,0,0,0,0],["ヤリゾー？背後から乳揉み : スケアクロウ",137,25,2,"Yarizo ? From Behind Breast Groping : Scarecrow",7,4,[2],[7,3,8],0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ID137:人通りの少ない路地 : ヤリゾーイベント：ガニ股待機",137,27,3,"ID137: Quiet Alley : Yarizo Event : Bowlegged Waiting",7,4,[2],[9,5,8],0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["カジノ : ヤリゾー (p5)",147,30,5,"Casino : Yarizo (p5)",14,16,[2],[14,17,8],[204,3],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ID196:王都以外の宿屋 : イベント (p3)",196,1,3,"ID196: Royal Capital Outside's Inn : Event (p3)",7,3,[1],[3,3,2],0,0,21,{"v":[],"tr":0,"night":1,"hideFollowers":1},0],["ID196:王都以外の宿屋 : イベント (p4) [Lv0-1]",196,1,4,"ID196: Royal Capital Outside's Inn : Event (p4) [Lv0-1]",2,3,[1],[3,3,2],[204,1],0,21,{"v":[],"tr":0,"night":1,"hideFollowers":1},0],["ID196:王都以外の宿屋 : イベント (p4) [Lv2-3]",196,1,4,"ID196: Royal Capital Outside's Inn : Event (p4) [Lv2-3]",2,3,[1],[3,3,2],[204,3],0,21,{"v":[],"tr":0,"night":1,"hideFollowers":1},0],["ID196:王都以外の宿屋 : イベント (p4) [Lv4-5]",196,1,4,"ID196: Royal Capital Outside's Inn : Event (p4) [Lv4-5]",2,3,[1],[3,3,2],[204,5],0,21,{"v":[],"tr":0,"night":1,"hideFollowers":1},0],["サキュバス : サキュバス　フェラチオ-ヤリゾー",244,21,3,"Succubus : Succubus Blowjob - Yarizo",21,4,[1],[21,6,8],0,0,0,0,0],["サキュバス : サキュバス　ホールド-ヤリゾー",244,21,4,"Succubus : Succubus Hold - Yarizo",21,3,[1],[21,5,8],0,0,0,0,0],["サキュバス : サキュバス　リフトアップセックス-ヤリゾー",244,21,5,"Succubus : Succubus Lift-up Sex - Yarizo",14,10,[1],[18,9,8],0,0,0,0,0],["ダークエルフの集落　宿屋・売春宿 : 仮面乱交会　ヤリゾーイベント (p3)",314,34,3,"Dark Elf Village Inn - Brothel : Masked Orgy Party Yarizo Event (p3)",41,13,[2],[44,17,8],[204,3],0,0,0,0],["ダークエルフの集落 : 仮面パーティ - ヤリゾー",314,34,5,"Dark Elf Village : Masked Party - Yarizo",41,13,0,[44,17,8],0,0,0,0,0],["ダークエルフの集落　屋内 : 初期イベント (p3)",312,1,3,"Dark Elf Village Indoors : Initial Event (p3)",68,63,[1],[68,63,8],0,0,21,0,0],["ID 7:個室トイレ : ヤリゾーイベント (p4)",7,5,4,"ID 7: Private Toilet : Yarizo Event (p4)",2,0,[2],[11,13,2],[204,3],0,21,{"v":[],"tr":0,"followerPos":{"21":[11,14,8]}},0],["ID 7:個室トイレ : ヤリゾーイベント (p5)",7,5,5,"ID 7: Private Toilet : Yarizo Event (p5)",2,0,[2],[11,13,2],[204,4],0,21,{"v":[],"tr":0,"followerPos":{"21":[11,14,8]}},0],["ID053:戦闘イベント倉庫 : [戦闘後閲覧]戦闘中にセクハラされた場合 (p3)",53,10,3,"ID053: Battle Event Warehouse : [ Viewed After Battle ] During Battle If Harassed (p3)",1,11,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : [戦闘後閲覧]戦闘中にセクハラされた場合 (p4)",53,10,4,"ID053: Battle Event Warehouse : [ Viewed After Battle ] During Battle If Harassed (p4)",1,11,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ１[ターン] (p3)",53,16,3,"ID053: Battle Event Warehouse : Yarizo's Harassment 1[ Turn ] (p3)",1,5,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ[司祭ダウン中] (p2) [1]",53,28,2,"ID053: Battle Event Warehouse : Yarizo's Harassment [ Priestess Downed ] (p2) [1]",5,9,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ[司祭ダウン中] (p3)",53,28,3,"ID053: Battle Event Warehouse : Yarizo's Harassment [ Priestess Downed ] (p3)",5,9,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ[司祭ダウン中] (p4)",53,28,4,"ID053: Battle Event Warehouse : Yarizo's Harassment [ Priestess Downed ] (p4)",5,9,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 主人公見張り時-ヤリゾーイベント (p2) [Lv0-3]",61,21,2,"ID:61 Camp Event Warehouse : Hero On Watch - Yarizo Event (p2) [Lv0-3]",7,1,0,0,[204,3],0,21,0,0],["ID:61キャンプイベント倉庫 : 主人公見張り時-ヤリゾーイベント (p2) [Lv4-5]",61,21,2,"ID:61 Camp Event Warehouse : Hero On Watch - Yarizo Event (p2) [Lv4-5]",7,1,0,0,[204,5],0,21,0,0],["ID:61キャンプイベント倉庫 : 主人公見張り時-ヤリゾーイベント (p3)",61,21,3,"ID:61 Camp Event Warehouse : Hero On Watch - Yarizo Event (p3)",1,7,0,0,[204,2],0,21,0,0],["ID:61キャンプイベント倉庫 : 主人公見張り時-ヤリゾーイベント (p5)",61,21,5,"ID:61 Camp Event Warehouse : Hero On Watch - Yarizo Event (p5)",1,7,0,0,[204,3],0,21,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-ヤリゾーイベント (p4)",61,29,4,"ID:61 Camp Event Warehouse : Priestess On Watch - Yarizo Event (p4)",1,9,0,0,[204,3],0,21,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-ヤリゾーイベント (p5) [Lv4]",61,29,5,"ID:61 Camp Event Warehouse : Priestess On Watch - Yarizo Event (p5) [Lv4]",1,9,0,0,[204,4],0,21,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-ヤリゾーイベント (p5) [Lv5]",61,29,5,"ID:61 Camp Event Warehouse : Priestess On Watch - Yarizo Event (p5) [Lv5]",1,9,0,0,[204,5],0,21,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-ヤリゾーイベント (p6)",61,29,6,"ID:61 Camp Event Warehouse : Priestess On Watch - Yarizo Event (p6)",1,9,0,0,0,0,21,0,0],["ID140：Aキー　会話一覧 : 従者Ａキー(司祭編） (p2) [Lv0-1]",140,21,2,"ID140: A-menu Conversation List : Companion A-menu (Priestess Arc) (p2) [Lv0-1]",11,12,0,0,[204,1],0,21,0,0],["ID140：Aキー　会話一覧 : 従者Ａキー(司祭編） (p2) [Lv2]",140,21,2,"ID140: A-menu Conversation List : Companion A-menu (Priestess Arc) (p2) [Lv2]",11,12,0,0,[204,2],0,21,0,0],["ID140：Aキー　会話一覧 : 従者Ａキー(司祭編） (p2) [Lv3]",140,21,2,"ID140: A-menu Conversation List : Companion A-menu (Priestess Arc) (p2) [Lv3]",11,12,0,0,[204,3],0,21,0,0],["ID140：Aキー　会話一覧 : 従者Ａキー(司祭編） (p2) [Lv4]",140,21,2,"ID140: A-menu Conversation List : Companion A-menu (Priestess Arc) (p2) [Lv4]",11,12,0,0,[204,4],0,21,0,0],["ID140：Aキー　会話一覧 : 従者Ａキー(司祭編） (p2) [Lv5]",140,21,2,"ID140: A-menu Conversation List : Companion A-menu (Priestess Arc) (p2) [Lv5]",11,12,0,0,[204,5],0,21,0,0]]},{"name":"Yarizo (NTR) 2/2","actors":[1,2],"x":6,"y":3,"en":"Yarizo (NTR) 2/2","scenes":[["ID141:汎用エロイベ倉庫 : ヤリゾー：暗い時にセクハラ (p2)",141,3,2,"ID141: Generic Erotic Event Warehouse : Yarizo : When Dark Harassment (p2)",5,1,0,0,[204,2],0,21,0,0],["ID141:汎用エロイベ倉庫 : ヤリゾー：絆レベル解放イベント (p1) [Lv0,2-5]",141,4,1,"ID141: Generic Erotic Event Warehouse : Yarizo : Bond Lv Unlocked Event (p1) [Lv0,2-5]",7,1,0,0,[204,5],0,21,0,0],["ID141:汎用エロイベ倉庫 : ヤリゾー：絆レベル解放イベント (p1) [Lv1]",141,4,1,"ID141: Generic Erotic Event Warehouse : Yarizo : Bond Lv Unlocked Event (p1) [Lv1]",7,1,0,0,[204,1],0,21,0,0],["ヤリゾー馬車痴漢 : ヤリゾー馬車痴漢",195,1,4,"Yarizo Carriage Groping : Yarizo Carriage Groping",0,0,[1],[11,10,8],[204,4],0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ID195:馬車内 : イベント (p5)",195,1,5,"ID195: Inside Carriage : Event (p5)",0,0,[1],[11,10,8],0,0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾー 司祭倒れ込み : ヤリゾーに倒れ込み [Lv0-1]",205,13,5,"Yarizo Priestess Collapse : Yarizo Collapse [Lv0-1]",9,3,[2],0,[204,1],0,0,0,0],["ヤリゾー 司祭倒れ込み : ヤリゾーに倒れ込み [Lv2]",205,13,5,"Yarizo Priestess Collapse : Yarizo Collapse [Lv2]",9,3,[2],0,[204,2],0,0,0,0],["ヤリゾー 司祭倒れ込み : ヤリゾーに倒れ込み [Lv3]",205,13,5,"Yarizo Priestess Collapse : Yarizo Collapse [Lv3]",9,3,[2],0,[204,3],0,0,0,0],["ヤリゾー 司祭倒れ込み : ヤリゾーに倒れ込み [Lv4]",205,13,5,"Yarizo Priestess Collapse : Yarizo Collapse [Lv4]",9,3,[2],0,[204,4],0,0,0,0],["ヤリゾー 司祭倒れ込み : ヤリゾーに倒れ込み [Lv5]",205,13,5,"Yarizo Priestess Collapse : Yarizo Collapse [Lv5]",9,3,[2],0,[204,5],0,0,0,0],["陰キャ僧侶 : 陰キャ僧侶-ヤリゾーＢＪ１",369,23,6,"Gloomy Monk : Gloomy Monk - Yarizo BJ 1",56,51,[1],[61,50,2],0,0,0,{"v":[],"tr":0,"js":["$gamePlayer.setTransparent(true);var m=$gameMap,e;e=m.event(2);e.setImage('$heroine',0);e.locate(0,0);e.setDirection(6);e=m.event(3);e.setImage('npc_cleric',0);e.locate(61,51);e.setDirection(2);e=m.event(6);e.setImage('$tent',0);e.locate(61,49);e.setDirection(2);e=m.event(7);e.setImage('!fsm_Flame07n',5);e.locate(61,52);e.setDirection(4);m.event(12).locate(61,52);e=m.event(4);e.setImage('ossan',0);e.locate(60,51);e.setDirection(2);$gameSwitches.setValue(814,true);"]},0],["ヤリゾー系 : ヤリゾー 主人公と３Ｐ　Lvl3",22,19,8,"Yarizo : Yarizo Hero 3P with Lvl3",4,7,0,0,0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);","$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾーLvl3 町中 : ヤリゾー顔コき",22,22,3,"Yarizo Lvl3 In Town : Yarizo Face Job",3,8,[2],0,0,0,0,0,0],["ID30:シャイニング・ビーチ : イベント - 司祭泳ぐ [[絆Lvl]ヤリゾー<=3]",30,27,2,"ID30: Shining Beach : Event - Priestess Swimming [ Yarizo Bond Lv <=3]",4,42,[2],0,[204,3],0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　手マン [Lv0-1,3-5]",196,21,2,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Fingering [Lv0-1,3-5]",2,9,0,[2,3,2],[204,5],0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　手マン [Lv2]",196,21,2,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Fingering [Lv2]",2,9,0,[2,3,2],[204,2],0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーレベル３ : ヤリゾーLvl３　宿屋廊下手マンとセックス",196,21,3,"Yarizo Lv 3 : Yarizo Lvl3 Inn Corridor Fingering and Sex",2,9,0,[2,3,2],0,0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　フェラチオ [Lv0-2]",233,12,6,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Blowjob [Lv0-2]",17,13,[2],0,[204,2],0,21,{"v":[],"tr":0,"followerPos":{"21":[17,12,2]}},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　フェラチオ [Lv3]",233,12,6,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Blowjob [Lv3]",17,13,[2],0,[204,3],0,21,{"v":[],"tr":0,"followerPos":{"21":[21,17,6]}},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　フェラチオ [Lv4]",233,12,6,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Blowjob [Lv4]",17,13,[2],0,[204,4],0,21,{"v":[],"tr":0,"followerPos":{"21":[21,17,6]}},0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　フェラチオ [Lv5]",233,12,6,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Blowjob [Lv5]",17,13,[2],0,[204,5],0,21,{"v":[],"tr":0,"followerPos":{"21":[21,17,6]}},0],["ヤリゾーLvl4 町中 : ヤリゾー宿屋ドギー",22,22,4,"Yarizo Lvl4 In Town : Yarizo Inn Doggy",3,8,[2],0,0,0,0,0,0],["ID30:シャイニング・ビーチ : イベント - 司祭泳ぐ [[絆Lvl]ヤリゾー==4]",30,27,3,"ID30: Shining Beach : Event - Priestess Swimming [ Yarizo Bond Lv ==4]",4,42,[2],0,[204,4],0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーレベル４ : ヤリゾーLvl４　解放　セックス",196,22,2,"Yarizo Lv 4 : Yarizo Lvl4 Unlocked Sex",3,3,0,[3,3,2],0,0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーLvl4 町中 : ぴょんぴょんフェラチオ",7,5,6,"Yarizo Lvl4 In Town : Bouncing Blowjob",2,0,[2],[11,13,2],0,0,21,{"v":[],"tr":0,"followerPos":{"21":[11,14,8]}},0],["ヤリゾーLvl5 町中 : ヤリゾー宿屋 土下座",22,22,5,"Yarizo Lvl5 In Town : Yarizo Inn Dogeza",3,8,[2],0,0,0,0,0,0],["ヤリゾーLvl5 町中 : ヤリゾーLvl5　首絞めっクス",196,23,1,"Yarizo Lvl5 In Town : Yarizo Lvl5 Choking Sex",2,3,0,[3,3,2],0,0,21,{"v":[],"tr":0,"hideFollowers":1},0],["ヤリゾーLvl5 町中 : 司祭-POV 壁の穴から覗くセックス　スラム宿屋",265,57,5,"Yarizo Lvl5 In Town : Priestess -POV Wall's Hole from Peeking Sex Slums Inn",18,64,[1],0,0,0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0]]},{"name":"Bad end","actors":[1,2],"x":10,"y":3,"en":"Bad End","scenes":[["クエスト用キャラ : 魔法学院エリート科　女子学生　バッドエンド１",137,34,2,"Quest Character : Magic Academy Elite Schoolgirl Bad End 1",17,2,0,0,0,0,0,0,0],["ID 235:海上 : 海賊ブルタルエンド (p1)",235,12,1,"ID 235: At Sea : Pirate Brutal End (p1)",0,16,0,0,0,0,0,0,0],["ロケID11:ダークエルフの集落 : バッドエンド (p1)",289,57,1,"Location ID11: Dark Elf Village : Bad End (p1)",53,65,0,0,0,0,0,0,0],["ダークエルフの集落　神殿 : 献上イベント　主人公編 (p2)",313,36,2,"Dark Elf Village Temple : Offering Event Hero Arc (p2)",38,39,0,0,0,0,21,0,0],["ダークエルフの集落　神殿 : 献上イベント　主人公編 (p6)",313,36,6,"Dark Elf Village Temple : Offering Event Hero Arc (p6)",2,0,0,0,0,0,12,0,0],["ダークエルフの集落　神殿 : 献上イベント　主人公編 (p7)",313,36,7,"Dark Elf Village Temple : Offering Event Hero Arc (p7)",2,0,0,0,0,0,19,0,0],["ID273:オークダンジョン洞窟 : 監禁イベント (p5)",273,14,5,"ID273: Orc Dungeon Cave : Confinement Event (p5)",20,7,0,0,0,0,0,0,0],["ID48:ゴブリン家畜小屋 : ゴブリン バッドエンド（司祭）",48,1,4,"ID48: Goblin Livestock Pen : Goblin Bad End (Priestess)",0,0,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : 敗北時のイベント処理 (p1) [no companion]",53,3,1,"ID053: Battle Event Warehouse : Defeat Event (p1) [no companion]",5,1,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : 敗北時のイベント処理 (p1) [with Potion Maker]",53,3,1,"ID053: Battle Event Warehouse : Defeat Event (p1) [with Potion Maker]",5,1,0,0,0,0,10,0,0],["ID053:戦闘イベント倉庫 : 敗北時のイベント処理 (p1) [with Yarizo Lv0-2]",53,3,1,"ID053: Battle Event Warehouse : Defeat Event (p1) [with Yarizo Lv0-2]",5,1,0,0,[204,2],0,21,0,0],["ID053:戦闘イベント倉庫 : 敗北時のイベント処理 (p1) [with Yarizo Lv3-5]",53,3,1,"ID053: Battle Event Warehouse : Defeat Event (p1) [with Yarizo Lv3-5]",5,1,0,0,[204,5],0,21,0,0],["【単発ＥＤ】オーガ : イベント処理 (p1)",90,1,1,"【 One-shot ED】 Ogre : Event Handling (p1)",8,11,0,0,0,0,0,0,0],["ID154:地下下水ホームレス最奥 : 初期イベント (p1)",154,1,1,"ID154: Underground Sewer Deepest Homeless Den : Initial Event (p1)",11,15,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : オーク豚 (p2)",201,1,2,"ID201:【 One-shot Bad Ends 】 : Orc Pig (p2)",1,1,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : ワーウルフ (p2)",201,2,2,"ID201:【 One-shot Bad Ends 】 : Werewolf (p2)",3,1,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : アケパロイ",201,3,1,"ID201:【 One-shot Bad Ends 】 : Akephaloi",5,1,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : ケンちゃん [Lv0-2]",201,4,1,"ID201:【 One-shot Bad Ends 】 : Ken [Lv0-2]",7,1,0,0,[204,2],0,0,0,0],["ID201:【単発系バッドエンド】 : ケンちゃん [Lv3-5]",201,4,1,"ID201:【 One-shot Bad Ends 】 : Ken [Lv3-5]",7,1,0,0,[204,5],0,0,0,0],["ID201:【単発系バッドエンド】 : ドライアド",201,5,1,"ID201:【 One-shot Bad Ends 】 : Dryad",9,1,[1],0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : ラミア",201,6,1,"ID201:【 One-shot Bad Ends 】 : Lamia",11,1,[1],0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : メデューサ",201,7,1,"ID201:【 One-shot Bad Ends 】 : Medusa",13,1,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : ゴブリンライダー",201,8,1,"ID201:【 One-shot Bad Ends 】 : Goblin Rider",15,1,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : リザードマン",201,9,1,"ID201:【 One-shot Bad Ends 】 : Lizardman",1,3,0,0,0,0,0,0,0],["ID201:【単発系バッドエンド】 : レッドキャップ",201,10,1,"ID201:【 One-shot Bad Ends 】 : Red Cap",3,3,0,0,0,0,0,0,0],["Map363 : イベント - バッドエンド (p1)",363,2,1,"Map363 : Event - Bad End (p1)",24,51,0,0,0,0,0,0,0],["パペマ : パペマ-バッドエンド",375,1,10,"Papema : Papema - Bad End",14,16,0,0,0,0,0,0,0]]},{"name":"Combat / Defaite","actors":[1,2],"x":14,"y":3,"en":"Combat / Defeat","scenes":[["敗北時のイベント処理 : パーティをリフレッシュして王都へと戻す処理 [Lv0-2]",315,5,1,"Defeat Event : Refresh Party and Return to Capital [Lv0-2]",13,10,[2],0,[204,2],0,0,0,0],["敗北時のイベント処理 : パーティをリフレッシュして王都へと戻す処理 [Lv3]",315,5,1,"Defeat Event : Refresh Party and Return to Capital [Lv3]",13,10,[2],0,[204,3],0,0,0,0],["敗北時のイベント処理 : パーティをリフレッシュして王都へと戻す処理 [Lv4]",315,5,1,"Defeat Event : Refresh Party and Return to Capital [Lv4]",13,10,[2],0,[204,4],0,0,0,0],["敗北時のイベント処理 : パーティをリフレッシュして王都へと戻す処理 [Lv5]",315,5,1,"Defeat Event : Refresh Party and Return to Capital [Lv5]",13,10,[2],0,[204,5],0,0,0,0],["戦闘終了後イベント : 司祭が感度倍増状態 [no companion]",42,1,1,"Post-battle Event : by the Priestess Doubled Sensitivity [no companion]",1,1,0,0,0,0,0,0,0],["戦闘終了後イベント : 司祭が感度倍増状態 [with Yarizo]",42,1,1,"Post-battle Event : by the Priestess Doubled Sensitivity [with Yarizo]",1,1,0,0,0,0,21,0,0],["ID053:戦闘イベント倉庫 : エネミーセックス固有イベント (p1)",53,14,1,"ID053: Battle Event Warehouse : Enemy Sex Unique Event (p1)",11,3,0,0,0,0,0,0,0],["ダンジョンテスト３ : 初期イベント (p1)",58,1,1,"Dungeon Test 3 : Initial Event (p1)",0,0,0,0,0,0,0,0,0],["ダンジョンテスト５（ボスマップ） : 初期イベント (p1)",71,1,1,"Dungeon Test 5 (Boss Map) : Initial Event (p1)",0,0,0,0,0,0,0,0,0],["ID:339 ゴブリン掃討作戦ダンジョン１ : イベント　ゴブリン戦５ (p2)",339,11,2,"ID:339 Goblin Cleanup Operation Dungeon 1 : Event Goblin Fight 5 (p2)",0,6,0,0,0,0,0,0,0]]},{"name":"NTR - Divers (1)","actors":[1,2],"x":18,"y":3,"en":"NTR - Misc (1)","scenes":[["酒場兼宿屋 『踊る一角獣亭』 : 妻の寝取らせ依頼の後",14,63,1,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Wife's NTS Request's After",18,12,[1],0,0,0,0,0,0],["王都 : 王都教会　ボケジジイ",15,28,4,"Royal Capital : Royal Capital Church Senile Old Man",0,2,[2],0,0,0,0,0,0],["王都 : 王都スラム　ちんしゃぶ屋",20,17,1,"Royal Capital : Royal Capital Slums Cock-sucking Shop",11,4,[2],0,0,0,0,0,0],["各リージョン系 : イチャラブ(寝取らせ） - PoVフェラチオ",20,48,2,"Regions : Lovey-dovey (NTS) - PoV Blowjob",34,4,0,0,0,0,0,0,0],["寝取らせ報告 : 寝取らせ報告後セックス",22,21,1,"NTS Report : NTS Report After Sex",2,5,0,0,0,0,0,0,0],["ビーチナンパ : ビーチナンパ　フェラチオ",30,24,4,"Beach Pickup : Beach Pickup Blowjob",14,12,[2],0,0,1,0,0,0],["王都 : 王都歓楽街　種付けプレス",30,27,4,"Royal Capital : Royal Capital Red-light District Mating Press",4,42,0,0,0,0,21,0,0],["ID137:人通りの少ない路地 : 寝取られた僕の復讐",137,32,6,"ID137: Quiet Alley : NTR Me's Revenge",5,13,0,0,0,0,0,0,0],["カジノ・スロ客セックス : カジノ・スロ客セックス",147,32,2,"Casino Slot Customer Sex : Casino Slot Customer Sex",14,11,0,0,0,0,0,0,0],["王都 : 王都スラム　トリプルフェラ",151,36,3,"Royal Capital : Royal Capital Slums Triple Blowjob",35,36,[2],0,0,0,0,0,0],["ストーリー-ロシタ : ストーリー - ロシタ",164,5,3,"Story - Rosita : Story - Rosita",91,87,[2],0,0,0,0,0,0],["真面目な冒険者　３つ : 真面目な冒険者　ケツ漏れ精子",196,25,2,"Serious Adventurer Three : Serious Adventurer Butt Leaking Cum",2,11,[2],0,0,0,0,0,0],["酔っ払いの看病フェラセックス : 酔っ払いの看病フェラセックス",199,3,1,"Drunkard's Nursing Blowjob Sex : Drunkard's Nursing Blowjob Sex",12,11,0,0,0,0,0,0,0],["他のモブNPC(主人公） : 妻の寝取らせ依頼",211,16,2,"Other Mobs NPC (Hero) : Wife's NTS Request",9,5,[1],0,0,0,0,0,0],["港町 : 司祭-ギャンブル",233,20,2,"Port Town : Priestess - Gambling",13,12,0,0,0,0,0,0,0],["寝取られ : 港町ギャンブル",233,20,3,"NTR : Port Town Gambling",13,12,0,0,0,0,0,{"v":[],"tr":0},0],["港町 : 司祭-3P-セイラー",235,1,2,"Port Town : Priestess -3P- Sailor",33,7,[2],0,0,0,0,0,0],["王都 : 王都歓楽街　素股",242,96,7,"Royal Capital : Royal Capital Red-light District Sumata",45,13,[2],0,0,0,0,0,0],["王都 : 王都歓楽街　アナルセックス",242,96,9,"Royal Capital : Royal Capital Red-light District Anal Sex",45,13,[2],0,0,0,0,0,0],["シルエット : シルエットシーン",242,96,10,"Silhouette : Silhouette Scene",45,13,[2],0,0,0,0,0,0],["王都 : 王都歓楽街　魔改造司祭服セックス",242,97,7,"Royal Capital : Royal Capital Red-light District Heavily Modded Priestess Outfit Sex",65,8,[2],0,0,0,0,0,0],["タイタン・ステップ : タイタン・ステップ　冒険者ＮＴＲ　宿屋",257,22,1,"Titan Step : Titan Step Adventurer NTR Inn",54,45,[2],0,0,0,0,0,0],["王都 : イチャラブ(寝取らせ） -　感覚遮断",265,46,3,"Royal Capital : Lovey-dovey (NTS) - Sensory Deprivation",115,79,[2],0,0,0,0,0,0],["ダークエルフの集落 : 仮面パーティ - 見知らぬ男",314,27,1,"Dark Elf Village : Masked Party - Stranger",44,16,[2],0,0,0,0,0,0],["ダークエルフの集落 : 仮面パーティ - 司祭ｘVP　フェラチオ",314,27,5,"Dark Elf Village : Masked Party - Priestess xVP Blowjob",44,16,0,0,0,0,0,0,0],["真面目な冒険者　３つ : 真面目な冒険者　ダブルフェラ",129,12,4,"Serious Adventurer Three : Serious Adventurer Double Blowjob",7,8,[2],0,0,0,0,0,0],["港町 : 司祭-3P-海賊",236,1,4,"Port Town : Priestess -3P- Pirate",12,7,[2],0,0,0,0,0,0],["ダークエルフの集落 : 粗チンフェラ",289,103,1,"Dark Elf Village : Small Dick Blowjob",54,56,0,0,0,0,0,0,0],["タイタン・ステップ : タイタン・ステップ　寝取らせ ディーラー　（クエスト：ポイズンピン",85,73,5,"Titan Step : Titan Step NTS Dealer (Quest : Poison Pink",75,17,[2],0,0,0,0,0,0],["タイタン・ステップ : タイタン・ステップ　冒険者ＮＴＲ　ファイナルシーン",257,22,2,"Titan Step : Titan Step Adventurer NTR Final Scene",54,43,[2],0,0,0,0,0,0],["エネミー : 司祭-オーク",273,14,3,"Enemy : Priestess - Orc",20,7,[2],0,0,0,0,0,0],["タイタン・ステップ : タイタン・ステップ　冒険者ＮＴＲ　フェラチオ",275,6,3,"Titan Step : Titan Step Adventurer NTR Blowjob",58,74,[2],0,0,0,0,0,0]]},{"name":"NTR - Divers (2)","actors":[1,2],"x":22,"y":3,"en":"NTR - Misc (2)","scenes":[["王都ナンパ野郎-フェラチオ : ナンパ野郎フェラチオ",8,89,3,"Royal Capital Pickup Guy - Blowjob : Pickup Guy Blowjob",20,8,[1,2],0,0,0,0,0,0],["王都中央地区ナンパ野郎 : 司祭ひとり寝取られ（主人公は見ていない）",8,89,4,"Royal Capital Central District Pickup Guy : Priestess Alone NTR (Hero Not Watching)",10,21,[2],0,0,0,0,0,0],["中央地区 : NPC-兵士(全裸追いかけ） (p1)",8,95,1,"Central District : NPC- Soldier (Naked Chase) (p1)",19,24,[2],0,0,0,0,0,0],["歓楽街 : 歓楽街の客 (p3)",11,24,3,"Red-light District : Red-light District's Customer (p3)",17,6,[2],0,0,0,0,0,0],["王都系 : パンツ染みおじさん画像",11,30,3,"Royal Capital : Stained Panties Old Man Image",16,2,0,0,0,0,0,0,0],["酒場兼宿屋 『踊る一角獣亭』 : 寝取らせイベント (p2)",14,58,2,"Tavern & Inn 『 Dancing Unicorn Inn 』 : NTS Event (p2)",14,12,0,0,0,0,0,0,0],["宿屋２F : 司祭自室浮気イベ (p1)",22,17,1,"Inn 2F : Priestess Own Room Cheating Event (p1)",2,6,0,0,0,0,0,0,0],["ID137:人通りの少ない路地 : 露出イベント (p2)",137,20,2,"ID137: Quiet Alley : Exhibition Event (p2)",0,6,0,0,0,0,0,0,0],["ID137:人通りの少ない路地 : 寝取られた僕の復讐 (p4)",137,32,4,"ID137: Quiet Alley : NTR Me's Revenge (p4)",6,7,0,0,0,0,0,0,0],["王都系 : スラム　寝取らせ穴覗き",144,27,5,"Royal Capital : Slums NTS Hole Peeping",4,4,[2],0,0,0,0,0,0],["KatSit Butt fucking",151,34,2,"KatSit Butt fucking",14,8,[1,2],0,0,0,0,0,0],["タイタンステップ編 : タイタン・ステップ　寝取らせ　クエスト：ポイズン・ピンク　ホーム [1]",151,34,3,"Titan Step Arc : Titan Step NTS Quest : Poison Pink Home [1]",14,9,[2],0,0,0,0,0,0],["王都系 : スラム　寝取らせ　4some",151,36,2,"Royal Capital : Slums NTS 4some",34,36,[2],0,0,0,0,0,0],["Gokkun Club 1 (Luxury Tavern Room)",172,1,2,"Gokkun Club 1 (Luxury Tavern Room)",12,11,0,[12,9,2],0,0,0,0,0],["Gokkun Club 2 (Luxury Tavern Room)",172,1,3,"Gokkun Club 2 (Luxury Tavern Room)",12,11,0,[12,9,2],0,0,0,0,0],["宿屋 - 値段交渉 : 1 bg",196,24,1,"Inn - Price Negotiation : 1 bg",2,14,0,0,0,0,0,0,0],["ID196:王都以外の宿屋 : イン・キーパーとのセックス 寝取らせ (p2)",196,24,2,"ID196: Royal Capital Outside's Inn : Innkeeper and's Sex NTS (p2)",2,7,0,0,0,0,0,0,0],["種付けブラザース : 種付けブラザース　フェラチオ",241,12,4,"Breeding Brothers : Breeding Brothers Blowjob",89,0,[2],0,0,0,0,0,0],["ID242: 風俗店 : 司祭用イベント - ダンスホール (p3)",242,94,3,"ID242: Brothel : Priestess for Event - Dance Hall (p3)",18,17,0,0,0,0,0,0,0],["★売春宿編 : 売春宿　手コキ",242,96,3,"★ Brothel Arc : Brothel Handjob",45,14,[2],0,0,0,0,0,0],["★売春宿編 : 売春宿　背面から手マン",242,97,3,"★ Brothel Arc : Brothel From Behind Fingering",40,36,[2],0,0,0,0,0,0],["ID242: 風俗店 : NPC 『財布盗まれる』",242,107,3,"ID242: Brothel : NPC 『 Wallet Stolen 』",20,30,0,0,0,0,0,0,0],["王都系 : スラム　寝取らせチンカスフェラ",265,25,2,"Royal Capital : Slums NTS Smegma Blowjob",6,28,[2],0,0,0,0,0,0],["ID265 : スラム街　屋内 : 睡眠 (p3)",265,57,3,"ID265 : Slums Town Indoors : Sleeping (p3)",20,55,0,0,[204,3],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["タイタンステップ編 : タイタン・ステップ　寝取らせ　クエスト：ポイズン・ピンク　ホーム [2]",85,74,2,"Titan Step Arc : Titan Step NTS Quest : Poison Pink Home [2]",78,24,[2],0,0,0,0,0,0],["タイタンステップ編 : タイタン・ステップ　寝取らせGangbang 顔にちんぽ押し付け",257,19,1,"Titan Step Arc : Titan Step NTS Gangbang Cock Pressed on Face",12,43,[2],0,0,0,0,0,0],["倉庫 : 寝取らせ報告手コキ (p1)",1,18,1,"Warehouse : NTS Report Handjob (p1)",21,3,0,0,0,0,0,0,0],["OP2 (路地） : エロイベ (p1)",25,11,1,"OP2 (Alley) : Erotic Event (p1)",18,5,0,0,0,0,0,0,0],["ID035汎用イベント倉庫 : 寝取らせ報告 (p1)",35,5,1,"ID035 Generic Event Warehouse : NTS Report (p1)",9,1,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 見張りが居ない時のイベント (p1)",61,13,1,"ID:61 Camp Event Warehouse : On Watch When Nobody Is Around's Event (p1)",7,1,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : キャンプ-寝取らせイベント (p2)",61,17,2,"ID:61 Camp Event Warehouse : Camp - NTS Event (p2)",1,22,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-従者無し (p2) [Lv0-4]",61,43,2,"ID:61 Camp Event Warehouse : Priestess On Watch - Companion None (p2) [Lv0-4]",0,9,[2],0,[225,4],0,0,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-従者無し (p2) [Lv5]",61,43,2,"ID:61 Camp Event Warehouse : Priestess On Watch - Companion None (p2) [Lv5]",0,9,[2],0,[225,5],0,0,0,0],["ID:61キャンプイベント倉庫 : ギガチャド主人公　イチャラブ (p1) [Lv0-3]",61,44,1,"ID:61 Camp Event Warehouse : Giga Chad Hero Lovey-dovey (p1) [Lv0-3]",1,28,[1,2],0,[204,3],0,0,0,0],["ID:61キャンプイベント倉庫 : ギガチャド主人公　イチャラブ (p1) [Lv4-5]",61,44,1,"ID:61 Camp Event Warehouse : Giga Chad Hero Lovey-dovey (p1) [Lv4-5]",1,28,[1,2],0,[204,5],0,0,0,0],["ID:61キャンプイベント倉庫 : 寝取らせ　ちんぽ比べ　手コキ編い編 (p7)",61,46,7,"ID:61 Camp Event Warehouse : NTS Cock Comparison Handjob Edition (p7)",3,24,0,0,0,0,0,0,0],["SHOTA : The Place Where It Was",64,3,1,"SHOTA : The Place Where It Was",5,1,0,0,0,0,0,0,0],["Map433 : イベント (p1)",433,1,1,"Map433 : Event (p1)",14,13,0,0,0,0,0,0,0]]},{"name":"Pieges","actors":[1,2],"x":2,"y":6,"en":"Traps","scenes":[["落とし穴 : グラフィック読み込み [no companion]",67,1,1,"Pitfall : Graphic Loading [no companion]",1,1,0,0,0,0,0,0,0],["落とし穴 : グラフィック読み込み [with Yarizo Lv0-3]",67,1,1,"Pitfall : Graphic Loading [with Yarizo Lv0-3]",1,1,0,0,[204,3],0,21,0,0],["落とし穴 : グラフィック読み込み [with Yarizo Lv4]",67,1,1,"Pitfall : Graphic Loading [with Yarizo Lv4]",1,1,0,0,[204,4],0,21,0,0],["落とし穴 : グラフィック読み込み [with Yarizo Lv5]",67,1,1,"Pitfall : Graphic Loading [with Yarizo Lv5]",1,1,0,0,[204,5],0,21,0,0],["ネブリヒル（乳首） : 主人公 [no companion]",67,4,1,"Licking Leech (Nipple) : Hero [no companion]",7,1,0,0,0,0,0,0,0],["ネブリヒル（乳首） : 主人公 [with Yarizo Lv0-3]",67,4,1,"Licking Leech (Nipple) : Hero [with Yarizo Lv0-3]",7,1,0,0,[204,3],0,21,0,0],["ネブリヒル（乳首） : 主人公 [with Yarizo Lv4-5]",67,4,1,"Licking Leech (Nipple) : Hero [with Yarizo Lv4-5]",7,1,0,0,[204,5],0,21,0,0],["スモッグ : ここにグラフィック [no companion]",67,6,1,"Smog : Graphic Here [no companion]",11,1,0,0,0,0,0,0,0],["スモッグ : ここにグラフィック [with Yarizo Lv0-3]",67,6,1,"Smog : Graphic Here [with Yarizo Lv0-3]",11,1,0,0,[204,3],0,21,0,0],["スモッグ : ここにグラフィック [with Yarizo Lv4]",67,6,1,"Smog : Graphic Here [with Yarizo Lv4]",11,1,0,0,[204,4],0,21,0,0],["スモッグ : ここにグラフィック [with Yarizo Lv5]",67,6,1,"Smog : Graphic Here [with Yarizo Lv5]",11,1,0,0,[204,5],0,21,0,0],["イソギンチャク : 本処理 [no companion]",67,7,1,"Sea Anemone : Main Process [no companion]",13,1,0,0,0,0,0,0,0],["イソギンチャク : 本処理 [with Potion Maker]",67,7,1,"Sea Anemone : Main Process [with Potion Maker]",13,1,0,0,0,0,10,0,0],["フラワー : 本処理 [no companion]",67,8,1,"Flower : Main Process [no companion]",15,1,0,0,0,0,0,0,0],["フラワー : 本処理 [with Potion Maker]",67,8,1,"Flower : Main Process [with Potion Maker]",15,1,0,0,0,0,10,0,0]]},{"name":"Potion Maker (PM) 1/2","actors":[1,2],"x":6,"y":6,"en":"Potion Maker (PM) 1/2","scenes":[["PM : アイスを食べる",19,8,5,"PM : Eating Ice Cream",19,0,[1],0,0,0,0,0,0],["PM : 青の洞窟",124,26,1,"PM : Blue Cave",2,8,[1],0,0,0,0,0,0],["PM : 階段パンチラ",41,20,1,"PM : Stairs Panty Shot",16,15,[1],0,0,0,0,0,0],["PM : PMゴロゴロ",19,9,1,"PM : PM Lounging",1,5,[1],0,0,0,0,0,0],["PM : PMアナル舐りスライム",118,17,1,"PM : PM Anal Licking Slime",29,0,[1],0,0,0,0,0,0],["PM : PMご飯屋さん",14,62,1,"PM : PM Restaurant",29,4,[1],0,0,0,0,0,0],["PM : PMコチョコチョ",19,9,4,"PM : PM Tickling",19,1,[1],0,0,0,0,0,0],["PM : PM足ペロ",81,3,1,"PM : PM Foot Licking",2,0,[1],0,0,0,0,0,0],["PM : PM-すやすや",41,20,2,"PM : PM- Sleeping Soundly",12,16,[1],0,0,0,0,0,0],["PM : PM-腋見せ",19,10,2,"PM : PM- Armpit Showing",9,6,[1],0,0,0,0,0,0],["PM : PM-精子しぼり",19,10,5,"PM : PM- Cum Squeezing",19,2,[1],0,0,0,0,0,0],["PM : PM-open_mouth",19,11,5,"PM : PM-open_mouth",19,3,[1],0,0,0,0,0,0],["PM : PM-念写 [Lv0-4]",86,33,3,"PM : PM- Thoughtography [Lv0-4]",6,9,[1],0,[225,4],0,0,0,0],["PM : PM-念写 [Lv5]",86,33,3,"PM : PM- Thoughtography [Lv5]",6,9,[1],0,[225,5],0,0,0,0],["PM : PM-キス",19,11,2,"PM : PM- Kiss",19,3,[1],0,0,0,0,0,0],["PM : フットストンプ",19,8,2,"PM : Foot Stomp",9,4,[1],0,0,0,0,0,0],["PM : PM-フェラチオ",19,11,4,"PM : PM- Blowjob",19,3,[1],0,0,0,0,0,0],["PM : PM-クンニ",19,11,6,"PM : PM- Cunnilingus",19,3,[1],0,0,0,0,0,0],["PM : PM-アナルセックス",19,11,7,"PM : PM- Anal Sex",19,3,[1],0,0,0,0,0,0],["PM : PM-太もも締め",19,11,8,"PM : PM- Thigh Squeeze",19,3,[1],0,0,0,0,0,0],["PM : PM-顔面騎乗",19,11,9,"PM : PM- Facesitting",10,4,[1],0,0,0,0,0,0],["PM : PM-睡眠足コキ",196,18,2,"PM : PM- Sleeping Footjob",0,24,0,0,0,0,0,0,0],["PM : PM-足アップ",19,3,5,"PM : PM- Foot Up",10,4,[1],0,0,0,0,0,0],["PM : 靴脱ぎ",198,4,1,"PM : Taking Off Shoes",42,42,[1],0,0,0,0,0,0],["PM : PM-壁にお手付き",16,42,2,"PM : PM- Wall Hands Against",10,3,[1],0,0,0,0,0,0],["PM : PM-太ももコき",19,12,1,"PM : PM- Thigh Job",19,4,[1],0,0,0,0,0,0],["PM : PM-バキュームフェラ",19,12,2,"PM : PM- Vacuum Blowjob",19,4,[1],0,0,0,0,0,0],["PM : PM-ザーメンジョッキ",19,12,3,"PM : PM- Cum Mug",19,4,[1],0,0,0,0,0,0],["PM : PM-オナニー",19,12,4,"PM : PM- Masturbation",3,6,[1],0,0,0,0,0,0],["PM : PM-腋",19,12,5,"PM : PM- Armpit",3,6,[1],0,0,0,0,0,0],["PM2 (40以降） : PM-授乳手コキ",19,12,6,"PM2 (40 Onward) : PM- Nursing Handjob",19,4,[1],0,0,0,0,0,0],["PM2 (40以降） : PM-パイズリ",19,12,7,"PM2 (40 Onward) : PM- Titjob",19,4,[1],0,0,0,0,0,0],["PM : PM-膣セックス（レベル5解放イベント）",19,11,10,"PM : PM- Vaginal Sex (Lv 5 Unlocked Event)",10,4,[1],0,0,0,0,0,0],["PM2 (40以降） : PM-ヒールジョブ",289,106,1,"PM2 (40 Onward) : PM- Heel Job",26,45,[1],0,0,0,10,0,0],["PM : PM-ヒール脱ぐ",257,5,3,"PM : PM- Taking Off Heels",41,8,0,0,0,0,10,0,0],["PM : PM-疑似フェラ",30,26,1,"PM : PM- Pseudo Blowjob",59,30,[1],0,0,0,0,0,0]]},{"name":"Potion Maker (PM) 2/2","actors":[1,2],"x":10,"y":6,"en":"Potion Maker (PM) 2/2","scenes":[["道具屋 : PM-主人公ソロイベント Lvl1 [1]",19,8,3,"Item Shop : PM- Hero Solo Event Lvl1 [1]",19,0,[1],0,0,0,0,0,0],["道具屋 : PM-主人公ソロイベント Lvl1 [2]",19,8,4,"Item Shop : PM- Hero Solo Event Lvl1 [2]",19,0,[1],0,0,0,0,0,0],["道具屋 : PM-主人公ソロイベント Lvl1 [3]",19,8,6,"Item Shop : PM- Hero Solo Event Lvl1 [3]",19,0,[1],0,0,0,0,0,0],["ID137:人通りの少ない路地 : PMイベント",137,28,1,"ID137: Quiet Alley : PM Event",11,4,[1],0,0,0,0,0,0],["PM : PM-机下フェラ",233,12,3,"PM : PM- Under the Desk Blowjob",17,13,[1],0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : ポーションメーカー (p4)",61,3,4,"ID:61 Camp Event Warehouse : Potion Maker (p4)",5,1,[1],0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 主人公見張り時-PMイベント (p6)",61,23,6,"ID:61 Camp Event Warehouse : Hero On Watch -PM Event (p6)",5,7,[1,2],0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-PMイベント (p2)",61,31,2,"ID:61 Camp Event Warehouse : Priestess On Watch -PM Event (p2)",5,9,[1],0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-PMイベント (p6)",61,31,6,"ID:61 Camp Event Warehouse : Priestess On Watch -PM Event (p6)",5,9,[1,2],0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : ポーションメーカー見張り (p2)",61,39,2,"ID:61 Camp Event Warehouse : Potion Maker On Watch (p2)",5,11,[1,2],0,0,0,0,0,0],["ポーションメーカー１ : PM",115,4,4,"Potion Maker 1 : PM",8,9,[1],0,0,0,0,0,0],["2024 10 Halloween : イベント (p4)",317,1,4,"2024 10 Halloween : Event (p4)",18,41,[1],0,0,0,0,0,0],["PM2 (40以降） : ゴブリン-ブルタルエンディング１",330,9,3,"PM2 (40 Onward) : Goblin - Brutal Ending 1",2,0,[1],0,0,0,0,0,0],["PM2 (40以降） : ゴブリン-ブルタルエンディング２",330,9,4,"PM2 (40 Onward) : Goblin - Brutal Ending 2",2,0,[1],0,0,0,0,0,0],["PM2 (40以降） : ゴブリン-ブルタルエンディング３",330,9,5,"PM2 (40 Onward) : Goblin - Brutal Ending 3",0,2,[1],0,0,0,0,0,0]]},{"name":"POL","actors":[1,2],"x":14,"y":6,"en":"POL","scenes":[["POL : POL フェラチオ１　（ストーリーチャプター１　中間）",152,5,3,"POL : POL Blowjob 1 (Story Chapter 1 Midpoint)",8,29,[1],0,0,0,0,0,0],["POL : POL 肉の宮殿",164,48,5,"POL : POL Palace of Flesh",12,13,[1],0,0,0,0,0,0]]},{"name":"Iris","actors":[1,2,4],"x":18,"y":6,"en":"Iris","scenes":[["アイリス２ : アイリス　バニー　チャプター１　パンチラ",333,1,15,"Iris 2 : Iris Bunny Chapter 1 Panty Shot",0,11,0,0,0,0,0,0,0],["アイリス２ : アイリス　バニー　チャプター１　オナニー１",341,54,2,"Iris 2 : Iris Bunny Chapter 1 Masturbation 1",6,0,0,0,0,0,0,0,0],["アイリス２ : アイリス　バニー　チャプター１　フェラ１",341,54,3,"Iris 2 : Iris Bunny Chapter 1 Blowjob 1",0,8,0,0,0,0,0,0,0],["アイリス２ : アイリス　バニー　チャプター１　セックス１",341,54,4,"Iris 2 : Iris Bunny Chapter 1 Sex 1",6,0,0,0,0,0,0,0,0],["アイリス : チャプター１　ニンフに敗北",341,54,1,"Iris : Chapter 1 Defeated by the Nymph",74,18,[1],[73,13,8],0,0,0,{"v":[[29,0]],"tr":1},0],["アイリス : アイリス過去１　乳揉まれ",223,26,1,"Iris : Iris Past 1 Breast Groping",36,8,0,0,0,0,0,0,0],["アイリス : アイリス　キス",222,1,1,"Iris : Iris Kiss",13,8,0,0,0,0,0,0,0],["アイリス : アイリス　飲み絡み",86,1,1,"Iris : Iris Drunken Flirting",19,9,0,0,0,0,0,0,0],["アイリス : アイリス　魔法",88,1,1,"Iris : Iris Magic",20,17,0,0,0,0,0,0,0],["アイリス : アイリス　チャプ３　魔法撃つ",217,1,3,"Iris : Iris Chap. 3 Magic Shooting",100,23,0,0,0,0,0,0,0],["アイリス : アイリス　アイアン・ジョーにデカチン見せつけられる",217,1,5,"Iris : Iris Iron Jaw Shows Off His Big Dick",100,23,0,0,0,0,0,0,0],["アイリス : アイリス　エステ１",220,61,1,"Iris : Iris Spa 1",62,4,0,0,0,0,0,0,0],["アイリス : アイリス　エステ２",220,61,2,"Iris : Iris Spa 2",62,4,0,0,0,0,0,0,0],["アイリス : アイリス　エステ３",310,1,1,"Iris : Iris Spa 3",29,19,0,0,0,0,0,0,0],["アイリス : アイリス　風呂",221,7,1,"Iris : Iris Bath",23,8,0,0,0,0,0,0,0],["アイリス : アイリス　おしっこ",221,8,1,"Iris : Iris Pee",21,13,0,0,0,0,0,0,0],["アイリス : アイリス　耐久部屋",231,1,5,"Iris : Iris Endurance Room",39,36,0,0,0,0,0,0,0],["アイリス : アイリス　エンディング　カムマグ",220,55,2,"Iris : Iris Ending Cam Mag",34,14,0,0,0,0,0,0,0],["アイリス : アイリス　エンディング　ゴブリン１",262,1,1,"Iris : Iris Ending Goblin 1",1,1,0,0,0,0,0,0,0],["アイリス : アイリス　エンディング　ゴブリン２",262,1,5,"Iris : Iris Ending Goblin 2",1,1,0,0,0,0,0,0,0],[" : エステ",220,61,3,": Spa",62,4,0,0,0,0,0,{"v":[],"tr":0},0],["アイリス : アイリス　バッドエンディング - サグ",262,1,2,"Iris : Iris Bad Ending - Sag",1,1,0,0,0,0,0,0,0],["アイリス : アイリス　バッドエンディング - オークピッグ１",262,1,3,"Iris : Iris Bad Ending - Orc Pig 1",1,1,0,0,0,0,0,0,0],["アイリス : アイリス　バッドエンディング - ミノタウロス１",262,1,4,"Iris : Iris Bad Ending - Minotaur 1",1,1,0,0,0,0,0,0,0]]},{"name":"Gyaru Dwarf","actors":[1,2],"x":22,"y":6,"en":"Gyaru Dwarf","scenes":[["ギャルドワーフ : 大股開き酔っ払い [no companion]",86,41,2,"Gyaru Dwarf : Spread Legs Drunkard [no companion]",29,41,[1],0,0,0,0,0,0],["ギャルドワーフ : 大股開き酔っ払い [with Yarizo]",86,41,2,"Gyaru Dwarf : Spread Legs Drunkard [with Yarizo]",29,41,[1],0,0,0,21,0,0],["ギャルドワーフ : パイズリ１ [Lv0-1,3-5]",86,40,3,"Gyaru Dwarf : Titjob 1 [Lv0-1,3-5]",30,41,[1],0,[233,5],0,0,0,0],["ギャルドワーフ : パイズリ１ [Lv2]",86,40,3,"Gyaru Dwarf : Titjob 1 [Lv2]",30,41,[1],0,[233,2],0,0,0,0],["ギャルドワーフ :  [1]",30,39,1,"Gyaru Dwarf : [1]",20,3,[1],0,0,0,0,0,0],["ID86:荒野の街の酒場 『眠るコヨーテ亭』 : ギャルドワーフ Lvl2 (p2)",86,40,2,"ID86: Wasteland Town's Tavern 『 Sleeping Coyote Tavern 』 : Gyaru Dwarf Lvl2 (p2)",30,41,[1],0,0,0,0,0,0],["ギャルドワーフ :  [2] [no companion]",86,42,2,"Gyaru Dwarf : [2] [no companion]",19,41,[1],0,0,0,0,0,0],["ギャルドワーフ :  [2] [with Yarizo]",86,42,2,"Gyaru Dwarf : [2] [with Yarizo]",19,41,[1],0,0,0,21,0,0],["ID86:荒野の街の酒場 『眠るコヨーテ亭』 : ギャルドワーフ ヤリゾー (p3)",86,44,3,"ID86: Wasteland Town's Tavern 『 Sleeping Coyote Tavern 』 : Gyaru Dwarf Yarizo (p3)",30,41,[1],0,0,0,0,0,0],["329:ギャルドワーフの工房 : 好感度イベントLvl3 (p2) [no companion]",329,17,2,"329: Gyaru Dwarf's Workshop : Affection Event Lvl3 (p2) [no companion]",45,7,[1],0,0,0,0,0,0],["329:ギャルドワーフの工房 : 好感度イベントLvl3 (p2) [with Yarizo]",329,17,2,"329: Gyaru Dwarf's Workshop : Affection Event Lvl3 (p2) [with Yarizo]",45,7,[1],0,0,0,21,0,0]]},{"name":"PNJ communs (images)","actors":[1,2],"x":2,"y":9,"en":"Common NPCs (images)","scenes":[["コモンＮＰＣ一枚絵系 : ガニ股ダンサー",11,38,1,"Common NPC Single Images : Bowlegged Dancer",10,8,0,0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : ノール乱交",78,1,1,"Common NPC Single Images : Gnoll Orgy",5,13,0,0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : ヤリゾー路地裏セックス",137,22,1,"Common NPC Single Images : Yarizo Back Alley Sex",12,3,[2],0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : DEの拠点 - チェキ",289,60,1,"Common NPC Single Images : Dark Elf Base - Cheki",47,45,0,0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : ドゲハーレム",107,1,3,"Common NPC Single Images : Doge Harem",12,10,0,0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : スレイブマーケット",221,9,1,"Common NPC Single Images : Slave Market",49,29,0,0,0,0,0,0,0]]},{"name":"Succube","actors":[1,2],"x":6,"y":9,"en":"Succubus","scenes":[["サキュバス : サキュバス　ポールダンス１",242,90,1,"Succubus : Succubus Pole Dance 1",14,16,[1],0,0,0,0,0,0],["サキュバス : サキュバス　アナル舐め手コキ（手コキ１）",242,47,3,"Succubus : Succubus Anal Licking Handjob (Handjob 1)",41,32,[1],0,0,0,0,0,0],["サキュバス : サキュバス　フェラチオ１",213,1,1,"Succubus : Succubus Blowjob 1",13,7,[1],0,0,0,0,0,0],["サキュバス : サキュバス　セックス　騎乗位",213,1,4,"Succubus : Succubus Sex Cowgirl",13,11,0,0,0,0,0,0,0],["サキュバス : サキュバス　セックス　正常位",213,1,6,"Succubus : Succubus Sex Missionary",14,13,[1],0,0,0,0,0,0],["サキュバス : サキュバス　ポールダンス２",242,90,3,"Succubus : Succubus Pole Dance 2",24,12,[1],0,0,0,0,0,0],["サキュバス : サキュバス　ぐで",242,106,1,"Succubus : Succubus Slumped",65,8,[1],0,0,0,0,0,0],["サキュバス : サキュバス　窓Ａ面",244,22,1,"Succubus : Succubus Window Side A",19,7,[1],0,0,0,0,0,0],["ID213:サキュバスの家 : イベント",213,1,8,"ID213: Succubus House : Event",14,13,[1],0,0,0,0,0,0],["ID242: 風俗店 : サキュバス　１５ (p2)",242,99,2,"ID242: Brothel : Succubus 15 (p2)",13,14,[1],0,0,0,0,0,0],["ID244:街外れの修道院 : サキュバス（売春婦リタイア後） [1]",244,21,2,"ID244: Abbey : Succubus (Prostitute After Retiring) [1]",15,14,[1],0,0,0,0,0,0],["ID244:街外れの修道院 : サキュバス（売春婦リタイア後） [2]",244,21,7,"ID244: Abbey : Succubus (Prostitute After Retiring) [2]",14,10,[1],0,0,0,0,0,0],["サキュバス : サキュバス　フェラチオ-ヤリゾー",244,21,3,"Succubus : Succubus Blowjob - Yarizo",21,4,[1],[21,6,8],0,0,0,0,0],["サキュバス : サキュバス　ホールド-ヤリゾー",244,21,4,"Succubus : Succubus Hold - Yarizo",21,3,[1],[21,5,8],0,0,0,0,0],["サキュバス : サキュバス　リフトアップセックス-ヤリゾー",244,21,5,"Succubus : Succubus Lift-up Sex - Yarizo",14,10,[1],[18,9,8],0,0,0,0,0]]},{"name":"Sally","actors":[1,2],"x":10,"y":9,"en":"Sally","scenes":[["サリー : ＩＦ",343,26,1,"Sally : IF",27,35,[1],[8,73,2],0,0,0,{"v":[],"tr":0},0],["サリー : サリー　IF フェラチオ１",343,26,2,"Sally : Sally IF Blowjob 1",2,0,[1],0,0,0,0,0,0],["サリー : サリー　IF セックス１",343,26,3,"Sally : Sally IF Sex 1",24,84,[1],0,0,0,0,0,0]]},{"name":"Mobs (heros)","actors":[1,2],"x":14,"y":9,"en":"Mobs (Hero)","scenes":[["浴場 : 男側入浴 [1]",16,15,2,"Bathhouse : Men's side Bathing [1]",10,3,0,0,0,0,0,0,0],["浴場 : 男側入浴 [2]",16,15,3,"Bathhouse : Men's side Bathing [2]",10,3,0,0,0,0,0,{"v":[],"tr":0,"js":["window.$bath_pri_kabe = 1;"]},0],["浴場 : 男側入浴 [3]",16,15,4,"Bathhouse : Men's side Bathing [3]",14,8,0,0,0,0,0,{"v":[],"tr":0,"js":["window.$bath_pri_kabe = 1;"]},0],["他のモブNPC(主人公） : グローリーホール",142,7,1,"Other Mobs NPC (Hero) : Glory Hole",8,3,0,0,0,0,0,0,0],["他のモブNPC(主人公） : バニガフェラ",202,11,2,"Other Mobs NPC (Hero) : Bunny Girl Blowjob",9,12,0,0,0,0,0,0,0],["他のモブNPC(主人公） : バニガセックス",202,11,3,"Other Mobs NPC (Hero) : Bunny Girl Sex",9,12,0,0,0,0,0,0,0],["他のモブNPC(主人公） : 寝取られた僕の復讐",211,17,1,"Other Mobs NPC (Hero) : NTR Me's Revenge",8,10,0,0,0,0,0,0,0],["他のモブNPC(主人公） : 寝取られた僕の復讐（堕ち後）",211,17,4,"Other Mobs NPC (Hero) : NTR Me's Revenge (After Falling)",9,11,0,0,0,0,0,0,0],["ID265 : スラム街　屋内 : Healing sick people 姉",265,41,1,"ID265 : Slums Town Indoors : Healing sick people Older Sister",111,13,[1],0,0,0,0,0,0],["他のモブNPC(主人公） : スラム　Healing Sick People",265,41,3,"Other Mobs NPC (Hero) : Slums Healing Sick People",112,13,[1],0,0,0,0,0,0],["他のモブNPC(主人公） : スラムクエスト　花屋",281,9,2,"Other Mobs NPC (Hero) : Slums Quest Flower Shop",16,40,0,0,0,0,0,0,0],["他のモブNPC(主人公） : タイタン・ステップ　売春婦セックス",85,72,3,"Other Mobs NPC (Hero) : Titan Step Prostitute Sex",70,16,[1],0,0,0,0,0,0]]},{"name":"Vampire (吸血姫)","actors":[1,2],"x":18,"y":9,"en":"Vampire Princess","scenes":[["吸血姫 : オナニー",305,27,1,"Vampire Princess : Masturbation",44,58,[1],0,0,0,0,0,0],["吸血姫 : ちん嗅ぎフェラ",305,1,5,"Vampire Princess : Cock-sniffing Blowjob",80,64,[1],0,0,0,0,0,0],["吸血姫 : オナニー２",196,29,2,"Vampire Princess : Masturbation 2",7,3,[1],0,0,0,0,0,0],["吸血姫 : VP 告解室",407,9,3,"Vampire Princess : VP Confessional",0,2,[1],0,0,0,0,0,0],["吸血姫 : VP サポートハンドジョブ（司祭のシルエットセックスを見ながら）",432,2,1,"Vampire Princess : VP Support Handjob (Priestess's Silhouette Sex While Watching)",0,1,[1],0,0,0,0,0,0],["吸血姫 : SEX TRIAL",289,110,1,"Vampire Princess : SEX TRIAL",46,57,[1],0,0,0,19,0,0],["ID196:王都以外の宿屋 : イン・キーパーとのセックス　ＶＰ (p3)",196,32,3,"ID196: Royal Capital Outside's Inn : Innkeeper and's Sex VP (p3)",2,14,[1,2],0,0,0,19,0,0],["ID196:王都以外の宿屋 : イン・キーパーとのセックス　ＶＰ (p4)",196,32,4,"ID196: Royal Capital Outside's Inn : Innkeeper and's Sex VP (p4)",3,14,[1,2],0,0,0,19,0,0],["ID:61キャンプイベント倉庫 : 司祭見張り時-吸血姫 (p2)",61,33,2,"ID:61 Camp Event Warehouse : Priestess On Watch - Vampire Princess (p2)",9,9,[1,2],0,[234,2],0,0,0,0],["Map407 : 吸血姫絆レベル２イベント (p2)",407,9,2,"Map407 : Vampire Princess Bond Lv 2 Event (p2)",11,14,[1],0,0,0,0,0,0],["Map407 : 吸血姫絆レベル２イベント (p4)",407,9,4,"Map407 : Vampire Princess Bond Lv 2 Event (p4)",20,49,[1],0,0,0,0,0,0],["吸血姫 : 司祭xVP ブルタル　ゴブリン１",330,12,3,"Vampire Princess : Priestess xVP Brutal Goblin 1",24,14,0,0,0,0,0,0,0],["吸血姫 : 司祭xVP ブルタル　ゴブリン２",330,12,4,"Vampire Princess : Priestess xVP Brutal Goblin 2",24,14,0,0,0,0,0,0,0],["吸血姫 : 司祭xVP ブルタル　ゴブリン３",330,12,5,"Vampire Princess : Priestess xVP Brutal Goblin 3",25,15,0,0,0,0,0,0,0]]},{"name":"Epeiste d'Orient","actors":[1,2],"x":22,"y":9,"en":"Eastern Swordsman","scenes":[["東方の剣士 : 東方の剣士 [1]",366,16,3,"Eastern Swordsman : Eastern Swordsman [1]",26,36,[1],0,0,0,0,0,0],["東方の剣士 : 東方の剣士 [2]",367,14,1,"Eastern Swordsman : Eastern Swordsman [2]",42,27,[1],0,0,0,0,0,0]]},{"name":"Fille du bain (湯女)","actors":[1,2],"x":2,"y":12,"en":"Bath Girl","scenes":[["湯女 : ケツ穴洗浄",16,35,2,"Bath Girl : Butt Hole Washing",17,6,[1],0,0,0,0,0,0],["湯女 : 座り",304,15,4,"Bath Girl : Sitting",26,25,[1],[25,15,2],0,0,0,0,0],["湯女 : フェラチオ",304,15,3,"Bath Girl : Blowjob",26,15,[2],[25,15,2],0,0,0,0,0],["湯女 : セックス１",309,1,4,"Bath Girl : Sex 1",30,32,[1],0,[232,4],0,0,0,0],["湯女 : アナルセックス１",309,1,3,"Bath Girl : Anal Sex 1",30,32,[1],0,[232,4],0,0,0,0],["特殊 - 湯女が見せる悪夢 : 司祭xPM",311,1,1,"Special - Bath Girl's Nightmare : Priestess xPM",15,13,0,0,0,0,0,0,0],["沼地の小屋 : 絆レベル４のイベント (p2)",304,15,2,"Swamp Hut : Bond Lv 4's Event (p2)",26,15,[1],[25,15,2],0,0,0,0,0]]},{"name":"Moine timide","actors":[1,2],"x":6,"y":12,"en":"Gloomy Monk","scenes":[["陰キャ僧侶 : 陰キャ僧侶-POVセックス",369,23,5,"Gloomy Monk : Gloomy Monk -POV Sex",0,7,[1],0,0,0,0,0,0],["陰キャ僧侶 : 陰キャ僧侶-ヤリゾーＢＪ１",369,23,6,"Gloomy Monk : Gloomy Monk - Yarizo BJ 1",56,51,[1],[61,50,2],0,0,0,{"v":[],"tr":0,"js":["$gamePlayer.setTransparent(true);var m=$gameMap,e;e=m.event(2);e.setImage('$heroine',0);e.locate(0,0);e.setDirection(6);e=m.event(3);e.setImage('npc_cleric',0);e.locate(61,51);e.setDirection(2);e=m.event(6);e.setImage('$tent',0);e.locate(61,49);e.setDirection(2);e=m.event(7);e.setImage('!fsm_Flame07n',5);e.locate(61,52);e.setDirection(4);m.event(12).locate(61,52);e=m.event(4);e.setImage('ossan',0);e.locate(60,51);e.setDirection(2);$gameSwitches.setValue(814,true);"]},0]]},{"name":"Vanilla / Amour","actors":[1,2],"x":10,"y":12,"en":"Vanilla / Love","scenes":[["教会 : 司祭と教会でのセックス",15,30,2,"Church : Priestess and Church's Sex",8,15,0,0,0,0,0,0,0],["宿屋２F : イベント (p2)",22,1,2,"Inn 2F : Event (p2)",4,4,0,0,0,0,0,0,0],["宿屋２F : イベント (p4)",22,1,4,"Inn 2F : Event (p4)",4,5,0,0,0,0,0,0,0],["宿屋２F : イベント",22,1,6,"Inn 2F : Event",4,4,0,0,0,0,0,0,0],["宿屋２F : ベッド (p4)",22,3,4,"Inn 2F : Bed (p4)",4,4,0,0,0,0,0,0,0],["孤児院（通常　内側） : 院長 (p2)",79,6,2,"Orphanage (Normal Inside) : Director (p2)",9,16,[2],0,0,0,0,0,0],["孤児院（通常　内側） : セックスシーン (p1)",79,30,1,"Orphanage (Normal Inside) : Sex Scene (p1)",2,0,0,0,0,0,0,0,0],["各リージョン系 : イチャラブ-青の洞窟",124,15,1,"Regions : Lovey-dovey - Blue Cave",31,13,[2],0,0,0,0,0,0],["露出系 : 露出系　お散歩",137,20,3,"Exhibitionism : Exhibitionism Walk",8,6,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : 戦闘終了後イベント (p3)",53,4,3,"ID053: Battle Event Warehouse : Post-battle Event (p3)",7,1,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : 戦闘終了後イベント (p5)",53,4,5,"ID053: Battle Event Warehouse : Post-battle Event (p5)",7,1,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : イチャイチャ-Fore play (p2)",61,10,2,"ID:61 Camp Event Warehouse : Lovey-dovey -Fore play (p2)",3,3,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : イチャイチャ-Sex (p2)",61,11,2,"ID:61 Camp Event Warehouse : Lovey-dovey -Sex (p2)",5,3,0,0,0,0,0,0,0],["ID:61キャンプイベント倉庫 : イチャイチャ-Sex (p3)",61,11,3,"ID:61 Camp Event Warehouse : Lovey-dovey -Sex (p3)",5,3,0,0,0,0,0,0,0],["OP4(回想　村屋外） : シーン (p1)",93,5,1,"OP4 (Recollection Village Outdoors) : Scene (p1)",15,6,0,0,0,0,0,0,0],["OP5(回想　家の中) : イベント",94,1,2,"OP5 (Recollection Inside the House) : Event",4,5,0,0,0,0,0,0,0],["ID140：Aキー　会話一覧 : 闇のゲーム (p2)",140,17,2,"ID140: A-menu Conversation List : Dark Game (p2)",1,5,0,0,0,0,0,0,0],["ID141:汎用エロイベ倉庫 : 司祭-睡眠中セックス (p1) [Lv0-3]",141,6,1,"ID141: Generic Erotic Event Warehouse : Priestess - While Sleeping Sex (p1) [Lv0-3]",13,11,0,0,[204,3],0,0,0,0],["ID141:汎用エロイベ倉庫 : 司祭-睡眠中セックス (p1) [Lv4-5]",141,6,1,"ID141: Generic Erotic Event Warehouse : Priestess - While Sleeping Sex (p1) [Lv4-5]",13,11,0,0,[204,5],0,0,0,0],["ID141:汎用エロイベ倉庫 : 司祭-睡眠中セックス (p2)",141,6,2,"ID141: Generic Erotic Event Warehouse : Priestess - While Sleeping Sex (p2)",13,11,0,0,0,0,0,0,0],["ID141:汎用エロイベ倉庫 : 主人公との汎用イベント (p1)",141,7,1,"ID141: Generic Erotic Event Warehouse : Hero and's Generic Event (p1)",1,3,0,0,0,0,0,0,0]]},{"name":"Tech Test","actors":[1,2],"x":14,"y":12,"en":"Tech Test","scenes":[["倉庫 : ギルド受付担当 (p3)",1,14,3,"Warehouse : Guild Receptionist (p3)",20,0,0,0,0,0,0,0,0],["王都 : 王都スラム　トラッシュボックス",1,61,3,"Royal Capital : Royal Capital Slums Trash Box",23,24,[2],0,0,0,0,0,0],["中央地区 : イベント (p4)",8,1,4,"Central District : Event (p4)",0,0,0,0,0,0,0,0,0],["宿屋２F : Rando_mob1 (p2)",22,6,2,"Inn 2F : Rando_mob1 (p2)",8,5,0,0,0,0,0,0,0],["宿屋２F : EV023 (p2)",22,23,2,"Inn 2F : EV023 (p2)",4,4,0,0,0,0,0,0,0],["ギャルドワーフ : 扉開き",86,52,4,"Gyaru Dwarf : Door Opening",46,7,0,0,0,0,0,0,0],["ID:236 海賊 : 海賊のおめこ処理 (p1)",236,9,1,"ID:236 Pirate : Pirate's Pussy Processing (p1)",1,0,0,0,0,0,0,0,0],["ID273:オークダンジョン洞窟 : 監禁イベント (p4)",273,14,4,"ID273: Orc Dungeon Cave : Confinement Event (p4)",20,7,0,0,0,0,0,0,0],["倉庫 : EV007 (p1)",1,7,1,"Warehouse : EV007 (p1)",11,8,0,0,0,0,0,0,0],["倉庫 : EV036 (p1)",1,36,1,"Warehouse : EV036 (p1)",2,20,0,0,0,0,0,0,0],["倉庫 : EV040 (p1)",1,40,1,"Warehouse : EV040 (p1)",5,14,0,0,0,0,0,0,0],["倉庫 : EV043 (p1)",1,43,1,"Warehouse : EV043 (p1)",0,13,0,0,0,0,0,0,0],["コモンＮＰＣ一枚絵系 : ニアルディ登場時",1,44,1,"Common NPC Single Images : Niardi Appears",12,22,0,0,0,0,0,0,0],["PM : PM-テントから顔出し",1,46,4,"PM : PM- From the Tent Face Out",8,21,0,0,0,0,0,0,0],["アイリス : アイリス　バッドエンディング - オークピッグ2",1,53,3,"Iris : Iris Bad Ending - Orc Pig 2",8,2,0,0,0,0,0,0,0],["アイリス : アイリス　バッドエンディング - ミノタウロス２",1,53,5,"Iris : Iris Bad Ending - Minotaur 2",8,2,0,0,0,0,0,0,0],["アイリス : アイリス　バニーセックス",1,54,1,"Iris : Iris Bunny Sex",14,19,0,0,0,0,0,0,0],["アイリス : アイリス　バニー 排泄ビンゴ",1,54,2,"Iris : Iris Bunny Excretion Bingo",14,19,0,0,0,0,0,0,0],["PM2 (40以降） : PM-頭おさえつけフェラ",1,62,1,"PM2 (40 Onward) : PM- Head Held Down Blowjob",3,24,0,0,0,0,0,0,0],["ヤリゾー系 : ちんぽ臭いあて",1,69,8,"Yarizo : Cock Smell Guessing",2,22,[2],0,0,0,0,0,0],["ヤリゾー系 : バツゲーム",1,69,10,"Yarizo : Penalty Game",2,22,0,0,0,0,0,0,0],["ヤリゾー系 : ちんぽ目隠しフェラ",1,70,1,"Yarizo : Cock Blindfold Blowjob",22,24,[2],0,0,0,0,0,0],["吸血姫 : 杭打ちピストン",1,73,4,"Vampire Princess : Piston Pounding",0,26,[1],0,0,0,0,0,0],["特殊 - 湯女が見せる悪夢 : 司祭xアイリス",1,73,10,"Special - Bath Girl's Nightmare : Priestess x Iris",0,26,0,0,0,0,0,0,0],["ゴブリン 家畜小屋 : ゴブリンのおめこ処理 (p1)",48,25,1,"Goblin Livestock Pen : Goblin's Pussy Processing (p1)",1,0,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ３[ターン] (p12)",53,18,12,"ID053: Battle Event Warehouse : Yarizo's Harassment 3[ Turn ] (p12)",5,5,0,0,0,0,0,0,0],["ID053:戦闘イベント倉庫 : ヤリゾーのセクハラ[司祭ダウン中] (p2) [2]",53,29,2,"ID053: Battle Event Warehouse : Yarizo's Harassment [ Priestess Downed ] (p2) [2]",7,9,0,0,0,0,0,0,0],["舐りヒル（クリトリス） : ",67,5,1,"Licking Leech (Clitoris) :",9,1,0,0,0,0,0,0,0],["ID091:アニメーション倉庫 : 種付けプレスアニメーション (p3)",91,2,3,"ID091: Animation Warehouse : Mating Press Animation (p3)",3,1,0,0,0,0,0,0,0],["ID091:アニメーション倉庫 : Ｉ字バランスファックアニメーション (p3)",91,3,3,"ID091: Animation Warehouse : I Balance Fuck Animation (p3)",5,1,0,0,0,0,0,0,0],["ID153:地下下水ホームレスたちのたまり場 : ホームレス達のおめこ処理 (p1)",153,16,1,"ID153: Underground Sewer Homeless Hangout : Homeless Men's Pussy Processing (p1)",1,0,0,0,0,0,0,0,0],["ID:205ダンジョンイベント（従者） : ダンジョンイベント：ヤリゾー (p3) [Lv0-4]",205,13,3,"ID:205 Dungeon Event (Companion) : Dungeon Event : Yarizo (p3) [Lv0-4]",9,3,0,0,[204,4],0,0,0,0],["ID:205ダンジョンイベント（従者） : ダンジョンイベント：ヤリゾー (p3) [Lv5]",205,13,3,"ID:205 Dungeon Event (Companion) : Dungeon Event : Yarizo (p3) [Lv5]",9,3,0,0,[204,5],0,0,0,0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　セックス",1,47,2,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Sex",0,24,[2],0,0,0,0,0,0],["ヤリゾーレベル３ : ヤリゾーLvl３　テント内からの隠しビュー",1,47,3,"Yarizo Lv 3 : Yarizo Lvl3 From Inside the Tent Hidden View",0,24,[2],0,0,0,0,0,0],["ヤリゾーレベル３ : ヤリゾーLvl３　解放　おしっこ後手マンとアナルほじくり",1,47,4,"Yarizo Lv 3 : Yarizo Lvl3 Unlocked Pee After Fingering and Anal Poking",0,24,[2],0,0,0,0,0,0],["ヤリゾーLvl4 町中 : 司祭-ガニ股まんずりちんしゃぶ",265,57,4,"Yarizo Lvl4 In Town : Priestess - Bowlegged Masturbating Cock-sucking",22,65,[2],0,[204,4],0,0,{"v":[],"tr":0,"js":["$gameSwitches.setValue(643, true); $gameSwitches.setValue(503, false);"]},0],["ヤリゾーLvl4 町中 : 司祭-壁から出てるちんぽをファック",1,64,2,"Yarizo Lvl4 In Town : Priestess - Sticking out of Wall Cock Fucking",5,24,[2],0,0,0,0,0,0],["ヤリゾーレベル４ : ヤリゾーLvl４　スカート隠しセックス",1,69,12,"Yarizo Lv 4 : Yarizo Lvl4 Hidden Under Skirt Sex",2,22,0,0,0,0,0,0,0]]},{"name":"Taverne Licorne","actors":[1,2],"x":18,"y":12,"en":"Unicorn Tavern","scenes":[["酒場兼宿屋 『踊る一角獣亭』 : 司祭 (p5)",14,9,5,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Priestess (p5)",17,14,[2],0,0,0,0,0,0],["酒場兼宿屋 『踊る一角獣亭』 : 司祭 (p6)",14,9,6,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Priestess (p6)",18,12,0,0,0,0,0,0,0],["酒場兼宿屋 『踊る一角獣亭』 : 司祭 (p7)",14,9,7,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Priestess (p7)",18,12,0,0,0,0,0,0,0],["酒場兼宿屋 『踊る一角獣亭』 : モブ冒険者とケツ揉みおじさん (p3)",14,25,3,"Tavern & Inn 『 Dancing Unicorn Inn 』 : Mob Adventurer and Butt Groping Old Man (p3)",1,15,[2],0,0,0,0,0,0]]},{"name":"Prison et Captivite","actors":[1,2],"x":22,"y":12,"en":"Prison and Captivity","scenes":[["ID144 地下監獄 : 主人公捕まった時の睡眠アイコン (p1)",144,21,1,"ID144 Underground Prison : Hero When Caught's Sleeping Icon (p1)",15,1,0,0,0,0,0,0,0],["ID144 地下監獄 : 司祭収監イベント (p3)",144,27,3,"ID144 Underground Prison : Priestess Imprisonment Event (p3)",15,10,0,0,0,0,0,0,0],["ID:236 海賊 : イベント (p3)",236,1,3,"ID:236 Pirate : Event (p3)",12,7,0,0,0,0,0,0,0],["ID153:地下下水ホームレスたちのたまり場 : 初期イベント (p3)",153,1,3,"ID153: Underground Sewer Homeless Hangout : Initial Event (p3)",17,15,[2],0,0,0,0,0,0]]},{"name":"Ferme et Traite","actors":[1,2],"x":2,"y":15,"en":"Farm and Milking","scenes":[["交易路にある村 : 乳搾りおじさん (p2)",65,3,2,"Trade Route Village : Milking Old Man (p2)",14,12,0,0,0,0,0,0,0],["交易路にある村 : 乳搾りおじさん (p3)",65,3,3,"Trade Route Village : Milking Old Man (p3)",14,12,0,0,0,0,0,0,0],["交易路にある村 : 乳搾りおじさん (p4)",65,3,4,"Trade Route Village : Milking Old Man (p4)",14,12,[1],[13,12,2],0,0,0,{"v":[],"tr":0},0],["交易路にある村 : 乳搾りおじさん (p8)",65,3,8,"Trade Route Village : Milking Old Man (p8)",15,13,0,0,0,0,0,0,0],["牛舎 : イベント [1]",190,1,1,"Cowshed : Event [1]",12,5,0,0,0,0,0,0,0],["牛舎 : イベント [2]",190,1,2,"Cowshed : Event [2]",12,5,0,0,0,0,0,0,0],["牛舎 : イベント [3]",190,1,3,"Cowshed : Event [3]",14,6,0,0,0,0,0,0,0],["牛舎 : イベント [4]",190,1,4,"Cowshed : Event [4]",14,7,0,0,0,0,0,0,0],["ファーマー搾乳 : ファーマー搾乳",190,1,5,"Farmer Milking : Farmer Milking",10,7,0,0,0,0,0,0,0],["農家の家 : イベント [1]",191,1,1,"Farmhouse : Event [1]",2,9,0,0,0,0,0,0,0],["農家の家 : イベント [2]",191,1,2,"Farmhouse : Event [2]",17,8,0,0,0,0,0,0,0],["農家の家 : イベント [3]",191,1,3,"Farmhouse : Event [3]",6,9,0,0,0,0,0,0,0],["農家の家 : イベント [4]",191,1,4,"Farmhouse : Event [4]",16,8,0,0,0,0,0,0,0],["農家の家 : イベント (p5)",191,1,5,"Farmhouse : Event (p5)",5,3,0,0,0,0,0,0,0],["？？？ : イベント (p1)",192,1,1,"??? : Event (p1)",11,13,0,0,0,0,0,0,0]]},{"name":"Elfes Noirs","actors":[1,2],"x":6,"y":15,"en":"Dark Elves","scenes":[["ダークエルフの集落　宿屋・売春宿 : 風俗プレイ (p1)",314,35,1,"Dark Elf Village Inn - Brothel : Brothel Play (p1)",49,44,0,0,0,0,0,0,0],["ロケID11:ダークエルフの集落 : ダークエルフ市民　セリフあり (p1)",289,92,1,"Location ID11: Dark Elf Village : Dark Elf Citizen With Lines (p1)",46,41,0,0,0,0,0,0,0],["ロケID11:ダークエルフの集落 : エルフ (p1)",289,93,1,"Location ID11: Dark Elf Village : Elf (p1)",30,60,0,0,0,0,0,0,0],["ロケID11:ダークエルフの集落 : ダークエルフ（２等級イベント） (p1)",289,101,1,"Location ID11: Dark Elf Village : Dark Elf (2 Rank Event) (p1)",49,36,[1],0,0,0,0,0,0],["Modified Male Sex",289,104,1,"Modified Male Sex",28,37,0,[28,17,8],0,0,0,0,0],["ロケID11:ダークエルフの集落 : 主人公xPM 衣装 (p1)",289,109,1,"Location ID11: Dark Elf Village : Hero xPM Costume (p1)",36,63,[1],0,0,0,10,0,0],["ダークエルフの集落　屋内 : 初期イベント (p2) [no companion]",312,1,2,"Dark Elf Village Indoors : Initial Event (p2) [no companion]",68,61,0,0,0,0,0,0,0],["ダークエルフの集落　屋内 : 初期イベント (p2) [with Yarizo]",312,1,2,"Dark Elf Village Indoors : Initial Event (p2) [with Yarizo]",68,61,0,0,0,0,21,0,0]]},{"name":"Plage","actors":[1,2],"x":10,"y":15,"en":"Beach","scenes":[["ID30:シャイニング・ビーチ : 休む (p2)",30,14,2,"ID30: Shining Beach : Rest (p2)",4,8,[2],0,0,0,0,0,0],["ID30:シャイニング・ビーチ : 休む (p3)",30,14,3,"ID30: Shining Beach : Rest (p3)",4,8,0,0,0,0,0,0,0],["ID30:シャイニング・ビーチ : モブダークエルフ（エロ） (p1)",30,23,1,"ID30: Shining Beach : Mob Dark Elf (Erotic) (p1)",2,11,0,0,0,0,0,0,0],["ID30:シャイニング・ビーチ : ナンパ男１ (p1)",30,24,1,"ID30: Shining Beach : Pickup Guy 1 (p1)",14,12,[2],0,0,0,0,0,0],["ID30:シャイニング・ビーチ : クエスト『貝殻探し』 (p3)",30,34,3,"ID30: Shining Beach : Quest 『 Seashell Hunt 』 (p3)",17,13,0,0,0,0,0,0,0]]},{"name":"Aventuriers","actors":[1,2],"x":14,"y":15,"en":"Adventurers","scenes":[["ID197:森 : 女魔術師 [1]",197,12,1,"ID197: Forest : Female Mage [1]",11,14,0,0,0,0,0,0,0],["ID197:森 : 女魔術師 [2]",197,12,2,"ID197: Forest : Female Mage [2]",11,18,0,0,0,0,0,0,0],["ID 199酒場　部屋　一般 : イベント",199,1,3,"ID 199 Tavern Room Standard : Event",12,12,0,0,0,0,0,0,0],["ID:129 キャンプ-森 : イベント　マジメな冒険者 [淫欲>=50]",129,12,1,"ID:129 Camp - Forest : Event Serious Adventurer [ Lust >=50]",7,8,0,0,0,0,0,0,0],["ID:129 キャンプ-森 : イベント　マジメな冒険者 [淫欲>=150]",129,12,2,"ID:129 Camp - Forest : Event Serious Adventurer [ Lust >=150]",7,8,0,0,0,0,0,0,0],["ID:129 キャンプ-森 : イベント　マジメな冒険者",129,12,3,"ID:129 Camp - Forest : Event Serious Adventurer",7,8,0,0,0,0,0,0,0],["ID206:エロイベ用ダンジョン : 真面目な冒険者２",206,11,1,"ID206: Erotic Event Dungeon : Serious Adventurer 2",2,9,0,0,0,0,0,0,0]]},{"name":"Confessionnal","actors":[1,2],"x":18,"y":15,"en":"Confessional","scenes":[["ID145 懺悔室 : イベント発生",145,3,3,"ID145 Confessional : Event Triggered",10,9,0,0,0,0,0,0,0],["監獄-告解室イベント : 監獄　告解室　フェラチオ",145,3,4,"Prison - Confessional Event : Prison Confessional Blowjob",10,9,[2],0,0,0,0,0,0],["監獄-告解室イベント : 監獄　告解室　壁尻",145,3,5,"Prison - Confessional Event : Prison Confessional Wall Butt",10,9,[2],0,0,0,0,0,0],["監獄-告解室イベント : 監獄　告解室　Gangbang",145,3,6,"Prison - Confessional Event : Prison Confessional Gangbang",10,9,[2],0,0,0,0,0,0]]},{"name":"Persos uniques","actors":[1,2],"x":22,"y":15,"en":"Single Scenes","scenes":[["令嬢 : 令嬢　フェラチオ１",104,3,2,"Noble Lady : Noble Lady Blowjob 1",25,19,0,0,0,0,0,0,0],["Bukkake Man",147,26,2,"Bukkake Man",5,12,[2],0,0,0,0,0,0],["賢者 : ザ・アイ　フォーチュンテラー",265,17,1,"Sage : The Eye Fortune Teller",6,10,0,0,0,0,0,0,0],["DEの巫女 : DEの巫女　フェラチオ",313,38,1,"Dark Elf Shrine Maiden : Dark Elf Shrine Maiden Blowjob",65,65,0,0,0,0,0,0,0],["イヴ : イヴBJ",107,1,2,"Eve : Eve BJ",12,11,0,0,0,0,0,0,0],["アナルねぶりスライム : ヤリゾーがパーティに居る場合 [no companion]",67,2,1,"Anal Licking Slime : Yarizo When in Party [no companion]",3,1,0,0,0,0,0,0,0],["アナルねぶりスライム : ヤリゾーがパーティに居る場合 [with Yarizo]",67,2,1,"Anal Licking Slime : Yarizo When in Party [with Yarizo]",3,1,0,0,0,0,21,0,0],["アナルねぶりスライム : ヤリゾーがパーティに居る場合 [with Potion Maker]",67,2,1,"Anal Licking Slime : Yarizo When in Party [with Potion Maker]",3,1,0,0,0,0,10,0,0],["ヤリゾーLvl4 町中 : ぴょんぴょんセックス",202,13,1,"Yarizo Lvl4 In Town : Bouncing Sex",11,12,[2],0,0,0,0,{"v":[],"tr":0,"js":["var a=$gameActors.actor(2),sl=a.equipSlots();[[2,85],[3,95]].forEach(function(p){var i=sl.indexOf(p[0]);if(i>=0)a.forceChangeEquip(i,$dataArmors[p[1]]);});$gamePlayer.refresh();"]},0]]},{"name":"Bedroom (A menu)","actors":[1,2],"x":2,"y":18,"en":"Bedroom (A menu)","scenes":[["Aキー : キス",170,1,1,"A-menu : Kiss",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : 頭をなでる",170,3,1,"A-menu : Head Pat",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : セクハラ [no companion]",170,2,1,"A-menu : Harassment [no companion]",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : セクハラ [with Yarizo]",170,2,1,"A-menu : Harassment [with Yarizo]",3,4,[1,2],[3,5,8],0,0,21,{"v":[],"tr":0},22],["Aキー : 命令",170,4,1,"A-menu : Orders",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : 前戯　司祭が",139,1,1,"A-menu : Foreplay by the Priestess",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : セックス",139,3,1,"A-menu : Sex",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : アナルセックス",139,4,1,"A-menu : Anal Sex",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : 特殊プレイ　足",139,5,1,"A-menu : Special Play Foot",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22],["Aキー : 特殊プレイ　腋",139,6,1,"A-menu : Special Play Armpit",3,4,[1,2],[3,5,8],0,0,0,{"v":[],"tr":0},22]]}],
    menu: function(i, interp){
        const npc = this.npcs[i];
        const pages = Math.ceil(npc.scenes.length / this.pageSize);
        const pg = Math.min(this.page[i] || 0, pages - 1);
        const from = pg * this.pageSize;
        const items = npc.scenes.slice(from, from + this.pageSize);
        const en = $gameVariables.value(1) === 1;
        const ch = items.map(function(s){ return (en ? s[4] : s[0]) || "(?)"; });
        const nextIdx = pg < pages - 1 ? ch.push((en ? "> Next" : "> Suite")) - 1 : -1;
        const prevIdx = pg > 0 ? ch.push((en ? "< Previous" : "< Precedent")) - 1 : -1;
        const quitIdx = ch.push(en ? "Quit" : "Quitter") - 1;
        $gameMessage.add("\\C[6]" + (i < 9 ? "0" : "") + (i + 1) + " " + npc.en + "\\C[0]  (" + (pg + 1) + "/" + pages + ")");
        $gameMessage.setChoices(ch, 0, quitIdx);
        $gameMessage.setChoiceBackground(0);
        $gameMessage.setChoicePositionType(1);
        const self = this;
        $gameMessage.setChoiceCallback(function(n){
            if (n === nextIdx){ self.page[i] = pg + 1; self.res = 'again'; }
            else if (n === prevIdx){ self.page[i] = pg - 1; self.res = 'again'; }
            else if (n >= 0 && n < items.length){ self.sel = from + n; self.res = 'play'; }
            else { self.res = 'quit'; }
        });
        interp.setWaitMode('message');
    },
    applyNames: function(){
        // same defaults as the opening event (Map002): actor names + the protagonist's wording variables
        const en = $gameVariables.value(1) === 1;
        const def = en ? { 1: "Jimmy", 2: "Kohaku", 21: "Yarizo" } : { 1: "ジミオ", 2: "コハク", 21: "ヤリゾー" };
        Object.keys(def).forEach(function(id){
            const a = $gameActors.actor(Number(id));
            if (a){ a.setName(def[id]); }
        });
        $gameVariables.setValue(49, en ? "I" : "俺");                       // first person
        $gameVariables.setValue(50, en ? "Sir Jimmy" : "ジミオ様");         // how the heroine calls the hero
        $gameVariables.setValue(51, en ? "cock" : "ちんぽ");                // name of the hero's cock
    },
    // day/night system: back to full action points (3/3) and daytime, so that no scene can leave the room in the middle of the night or without AP
    resetTime: function(){
        $gameVariables.setValue(5, 0);    // timeline: 0 = day
        $gameVariables.setValue(6, 3);    // action points 3/3
        $gameVariables.setValue(57, 0);   // time spent
    },
    // ---- semen / stain state ----
    // Gallery mode (switch 5 ON) neutralises the semen accounting twice: the pages wrap it in "if switch 5 OFF" and CE2 (generic stat change) leaves at once when switch 5 is ON.
    // CE2 -> CE44 updates the "current semen" variables and the levels 87-95 that CE60 (standing portrait) reads to draw the cum on the priestess.
    // Here only the stain variables are let through (love / lust / ... stay frozen).
    stainIds: [87,88,89,90,91,92,93,94,95,1701,1702,1703,1704,1705,1720,1721,1722,1723,1724,1725,1726,1727,1728,1729,1730,1731,1732,1739,1740,1741,1742,1743,1744,1747,1748,1751,1752,1753,1754,1756,1757,1758,1759,1781,1800,1801,1802,1803,1804,1805,1820,1821,1822,1823,1824,1825,1826,1827,1828,1829,1830,1831,1832,1839,1840,1841,1842,1843,1844,1847,1848,1851,1852,1853,1854,1856,1857,1858,1859,1900,1901,1902,1903,1904,1905,1920,1921,1922,1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1939,1940,1941,1942,1943,1944,1947,1948,1951,1952,1953,1954,1956,1957,1958,1959,2000,2001,2002,2003,2004,2005,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2039,2040,2041,2042,2043,2044,2047,2048,2051,2052,2053,2054,2056,2057,2058,2059,2100,2101,2102,2103,2104,2105,2120,2121,2122,2123,2124,2125,2126,2127,2128,2129,2130,2131,2132,2139,2140,2141,2142,2143,2144,2147,2148,2151,2152,2153,2154,2156,2157,2158,2159,2200,2201,2202,2203,2204,2205,2220,2221,2222,2223,2224,2225,2226,2227,2228,2229,2230,2231,2232,2239,2240,2241,2242,2243,2244,2247,2248,2251,2252,2253,2254,2256,2257,2258,2259,2300,2301,2302,2303,2304,2305,2320,2321,2322,2323,2324,2325,2326,2327,2328,2329,2330,2331,2332,2339,2340,2341,2342,2343,2344,2347,2348,2351,2352,2353,2354,2356,2357,2358,2359,2400,2401,2402,2403,2404,2405,2420,2421,2422,2423,2424,2425,2426,2427,2428,2429,2430,2431,2432,2439,2440,2441,2442,2443,2444,2447,2448,2451,2452,2453,2454,2456,2457,2458,2459,2500,2501,2502,2503,2504,2505,2520,2521,2522,2523,2524,2525,2526,2527,2528,2529,2530,2531,2532,2539,2540,2541,2542,2543,2544,2547,2548,2551,2552,2553,2554,2556,2557,2558,2559,2600],
    showPics: false,
    isStain: function(id){
        if (!this._stainSet){ this._stainSet = {}; const self = this; this.stainIds.forEach(function(i){ self._stainSet[i] = true; }); }
        return !!this._stainSet[id];
    },
    resetStains: function(){
        const d = $gameVariables._data;
        this.stainIds.forEach(function(i){ d[i] = 0; });
        d[40] = 0;
    },
    patchCE2: function(){
        // the stat-change log lines ("[Increase] ... ml") that CE2 writes for the stain variables crashed in the gallery (TypeError: 'in' operator on undefined): skip them while the gallery runs
        if (!window._galerieMlogWrapped && typeof window.set_mlog === 'function'){
            window._galerieMlogWrapped = true;
            const _sm = window.set_mlog;
            window.set_mlog = function(text){
                if (Galerie.active && typeof text === 'string' && text.indexOf('_log_database_text_sta_') === 0){ return; }
                return _sm.apply(this, arguments);
            };
        }
        const ce = $dataCommonEvents && $dataCommonEvents[2];
        if (!ce || ce._galeriePatched){ return; }
        for (let i = 0; i < ce.list.length; i++){
            const c = ce.list[i];
            if (c.code === 111 && c.parameters[0] === 0 && c.parameters[1] === 5 && c.parameters[2] === 0){   // "if switch 5 is ON" -> exit
                c.parameters = [12, "$gameSwitches.value(5) && !(Galerie.active && Galerie.isStain($gameVariables.value(58)))"];
                ce._galeriePatched = true;
                break;
            }
        }
    },
    enableStainBlocks: function(s){
        const ev = $dataMap.events[s[2]];
        if (!ev || !ev.pages[s[3] - 1]){ return; }
        const list = ev.pages[s[3] - 1].list, self = this;
        for (let i = 0; i < list.length; i++){
            const c = list[i];
            if (!(c.code === 111 && c.parameters[0] === 0 && c.parameters[1] === 5 && c.parameters[2] === 1)){ continue; }   // "if switch 5 is OFF"
            let has = false;
            for (let j = i + 1; j < list.length && list[j].indent > c.indent; j++){
                const z = list[j];
                if (z.code === 122 && z.parameters[0] === 58 && z.parameters[3] === 0 && self.isStain(z.parameters[4])){ has = true; break; }   // v58 <- stain variable (then CE2)
                if (z.code === 122 && self.isStain(z.parameters[0]) && self.isStain(z.parameters[1])){ has = true; break; }                      // direct set of stain levels (wiping the face...)
            }
            if (has){ c.parameters = [12, "true"]; }
        }
    },
    prepare: function(actors){
        this.applyNames();
        this.resetTime();
        this.resetStains();
        $gamePlayer.followers().show();
        $gameSwitches.setValue(5, true);
        $gameSwitches.setValue(222, true);   // 本編開始: lets the day/night system (CE 3) run
        $gameSwitches.setValue(38, true);
        $gameVariables.setValue(287, 1000);
        $gameVariables.setValue(48, 1);
        $gameVariables.setValue(386, 0);
        $gameParty._actors = [];
        (actors || [1, 2]).forEach(function(a){ $gameParty.addActor(a); });
        $gameVariables.setValue(8, 0);
        $gamePlayer.refresh();
    },
    play: function(i, interp){
        // step 1: go to the scene's real map (like the Bonus mode, CE986) so that
        // event ids used by move routes / balloons / animations are the right ones
        const npc = this.npcs[i], s = npc.scenes[this.sel];
        if (!s){ this.res = 'quit'; return; }
        this.prepare((s[7] && s[7].length) ? s[7] : npc.actors);
        this.nightScene = !!s[10];
        if (s[12] && s[12].addEvents){ s[12].addEvents.forEach(function(a){ try { $gameTemp.knsLoadEventCallSubMap(a.map); } catch (e) { console.warn('Galerie preload failed', e); } }); }
        if (s[12] && s[12].night){ $gameVariables.setValue(5, 1); }   // timeline: 1 = night, set before the transfer so that the map is loaded at night
        if (s[11]){   // entry played with a companion in the party (Yarizo = actor 21, Potion Maker = actor 10)
            $gameParty.addActor(s[11]);
            $gameVariables.setValue(8, s[11]);
            $gameSwitches.setValue(({ 21: 643, 10: 650, 19: 659, 11: 651, 12: 652 })[s[11]] || 650, true);
            $gamePlayer.refresh();
        }
        if (s[9]){   // this entry needs a specific relationship level
            this.savedLv = [s[9][0], $gameVariables.value(s[9][0])];
            $gameVariables.setValue(s[9][0], s[9][1]);
        }else{
            this.savedLv = null;
        }
        // destination is read by a real "Transfer Player" command (variables 4297-4299)
        // v41/v42/v43 = map and position where the conversation started (set by CE6/CE31...). Several pages end with a transfer to (v41,v42,v43) when switch 5 is ON
        // (e.g. Gokkun Club 1: "201 [1,41,42,43]"); an unset v41 (map 0) crashed the map fog plugin ("'フォグ1' in undefined"). Point it to the gallery room.
        $gameVariables.setValue(41, $gameMap.mapId());
        $gameVariables.setValue(42, $gamePlayer.x);
        $gameVariables.setValue(43, $gamePlayer.y);
        $gameVariables.setValue(4297, s[13] || s[1]);
        $gameVariables.setValue(4298, s[5] || 0);
        $gameVariables.setValue(4299, s[6] || 0);
    },
    run: function(i, interp){
        // step 2: once on the real map, run the scene page
        const npc = this.npcs[i], s = npc.scenes[this.sel];
        if (!s){ return; }
        if (s[12]){
            (s[12].v || []).forEach(function(p){ $gameVariables.setValue(p[0], p[1]); });
            // JS globals used as flags by some pages (e.g. "$yaba12 == 1" gating a whole scene)
            (s[12].js || []).forEach(function(code){ try { (0, eval)(code); } catch (e) { console.warn('Galerie setup.js failed:', code, e); } });
            if (s[12].tr){ $gamePlayer.setTransparent(true); }
        }
        this.followerPosActive = (s[12] && s[12].followerPos) || null;
        this.place(s);
        if (s[12] && s[12].addEvents){
            s[12].addEvents.forEach(function(a){
                try {
                    interp.knsAddEvent(a.x, a.y, a.ev, a.map, a.dir);
                    window['$' + a.v] = $gameMap._lastSpawnEventId;
                } catch (e) { console.warn('Galerie addEvents failed', a, e); }
            });
        }
        if (s[12] && s[12].hideFollowers){ $gamePlayer.followers().hide(); $gamePlayer.refresh(); }
        this.enableStainBlocks(s);
        if (s[10]){ this.enableApBlocks(s); }   // let the scene spend its action points, like the real game
        interp.knsCallMapEvent(s[1], s[2], s[3]);
    },
    // some pages are run twice by their root page (night part, then morning part with another value of a variable): setup.then
    runNext: function(i, interp){
        const npc = this.npcs[i], s = npc.scenes[this.sel];
        if (!s || !s[12] || !s[12].then){ return; }
        (s[12].then.v || []).forEach(function(p){ $gameVariables.setValue(p[0], p[1]); });
        interp.knsCallMapEvent(s[1], s[2], s[3]);
    },
    enableApBlocks: function(s){
        // the page guards "v6 -= 1 ; CE3 (day-time system)" with "if switch 5 is OFF", so it is skipped in gallery mode.
        // Make exactly those guards always true so the day really turns to night when the action points run out.
        const ev = $dataMap.events[s[2]];
        if (!ev || !ev.pages[s[3] - 1]){ return; }
        const list = ev.pages[s[3] - 1].list;
        for (let i = 0; i < list.length; i++){
            const c = list[i];
            if (c.code === 111 && c.parameters[0] === 0 && c.parameters[1] === 5 && c.parameters[2] === 1){
                let has = false;
                for (let j = i + 1; j < list.length && list[j].indent > c.indent; j++){
                    if (list[j].code === 117 && list[j].parameters[0] === 3){ has = true; break; }
                }
                if (has){ c.parameters = [12, "true"]; }
            }
        }
        $gameVariables.setValue(5, 0);   // start of the day
        $gameVariables.setValue(6, 3);   // 3 action points left
    },
    // the other party members stand BEHIND the player (opposite of the direction he faces), one tile further for each of them; if that tile is not free they stay on his tile
    placeFollowers: function(cx, cy, dir){
        const vec = { 2: [0, 1], 4: [-1, 0], 6: [1, 0], 8: [0, -1] }[dir] || [0, 1];
        let k = 0, lastX = cx, lastY = cy;
        $gamePlayer.followers().forEach(function(f){
            if (!f.isVisible()){ return; }
            k++;
            const tx = cx - vec[0] * k, ty = cy - vec[1] * k;
            let ok = $gameMap.isValid(tx, ty) && $gameMap.isPassable(tx, ty, dir) && $gameMap.isPassable(tx, ty, 10 - dir);
            if (ok){
                ok = !$gameMap.eventsXyNt(tx, ty).some(function(e){ return e.isNormalPriority() && (e.characterName() || e.tileId() > 0); });
            }
            if (ok){ lastX = tx; lastY = ty; }
            f.locate(lastX, lastY);
            f.setDirection(dir);
        });
    },
    place: function(s){
        // like in the real game: the player stands next to the event (below it, facing up)
        const fx = s[5], fy = s[6], o = s[8];
        const cands = o ? [[o[0], o[1], o[2] || 8]] : [[fx, fy + 1, 8], [fx - 1, fy, 6], [fx + 1, fy, 4], [fx, fy - 1, 2]];
        for (let k = 0; k < cands.length; k++){
            const cx = cands[k][0], cy = cands[k][1], dir = cands[k][2];
            if (!$gameMap.isValid(cx, cy)){ continue; }
            if (!o){
                if (!$gameMap.isPassable(cx, cy, dir)){ continue; }
                const blocked = $gameMap.eventsXyNt(cx, cy).some(function(e){
                    return e.isNormalPriority() && (e.characterName() || e.tileId() > 0);
                });
                if (blocked){ continue; }
            }
            $gamePlayer.locate(cx, cy);
            $gamePlayer.setDirection(dir);
            this.placeFollowers(cx, cy, dir);
            if (s[12] && s[12].followerPos){
                $gamePlayer.followers().forEach(function(f){
                    const a = f.actor(), fp = a && s[12].followerPos[a.actorId()];
                    if (fp){ f.locate(fp[0], fp[1]); f.setDirection(fp[2]); }
                });
            }
            return;
        }
    },
    setLogs: function(on){
        // the log window is hidden by default; this lets the user restore it
        this.showLogs = !!on;
        if (on){
            $gameSwitches.setValue(6, true);    // automatic log display
            $gameVariables.setValue(388, 0);    // display type: on the map
        }else if (typeof $LogWindow_CurrentWindow !== 'undefined' && $LogWindow_CurrentWindow){
            $LogWindow_CurrentWindow.hide();
        }
    },
    night: function(){ return !!this.nightScene; },
    // ---- Dressroom ----
    // companions of the game (CE497): actor id -> [English name, contract switch, death switch]
    followers: { 21: ["Yarizo", 643, 503], 10: ["Potion Maker", 650, 510], 19: ["Vampire Princess", 659, 519], 11: ["Barbarian", 651, 511], 12: ["Pussy Cat", 652, 512] },
    follower: 0,
    autoSuccess: true,
    debugCoords: false,
    setDebugCoords: function(on, interp){
        this.debugCoords = !!on;
        this.say(interp, on ? "Debug: tile coordinates ON (F7 to toggle)." : "Debug: tile coordinates OFF.");
    },
    setAutoSuccess: function(on, interp){
        this.autoSuccess = !!on;
        this.say(interp, on ? "Skill checks: auto-success (the scripted impossible ones stay impossible)." : "Skill checks: normal dice rolls.");
    },
    say: function(interp, text){
        $gameMessage.add("\\C[6]" + text + "\\C[0]");
        if (interp){ interp.setWaitMode('message'); }
    },
    // outfits = armors of equip type 2 (outfit), 3 (head outfit), 4 (tights), 5 (underwear) made for the priestess / sub characters / PM / VP / Iris
    giveOutfits: function(interp){
        let n = 0, total = 0;
        $dataArmors.forEach(function(a){
            if (!a || !a.name || a.name.charAt(0) === '☆'){ return; }
            if ([2, 3, 4, 5].indexOf(a.etypeId) < 0 || [8, 9, 10, 13, 14].indexOf(a.atypeId) < 0){ return; }
            total++;
            if ($gameParty.numItems(a) < 1){ $gameParty.gainItem(a, 1); n++; }
        });
        this.say(interp, "Outfits: " + n + " added (" + total + " in total). Use the Equip menu.");
    },
    // one companion at a time, like the game: the actor joins the party, v8 = actor id, contract on / death off
    setFollower: function(id, interp, silent){
        const self = this;
        Object.keys(this.followers).forEach(function(k){ $gameParty.removeActor(Number(k)); });
        $gameVariables.setValue(8, 0);
        this.follower = id || 0;
        if (id && this.followers[id]){
            const f = this.followers[id];
            $gameSwitches.setValue(642, true);
            $gameSwitches.setValue(f[1], true);
            $gameSwitches.setValue(f[2], false);
            $gameParty.addActor(id);
            $gameVariables.setValue(8, id);
            if (!silent){ this.say(interp, f[0] + " joined the party."); }
        }else if (!silent){
            this.say(interp, "No follower in the party.");
        }
        $gamePlayer.refresh();
    },
    restore: function(){
        // back in the room: full action points, daytime, hero + priestess (+ the follower chosen in the Dressroom)
        this.resetTime();
        this.resetStains();
        this.followerPosActive = null;
        $gamePlayer.followers().show();
        $gameParty._actors = [];
        [1, 2].forEach(function(a){ $gameParty.addActor(a); });
        this.setFollower(this.follower, null, true);
        if (this.savedLv){ $gameVariables.setValue(this.savedLv[0], this.savedLv[1]); this.savedLv = null; }
        $gameScreen.clearPictures();
        $gameScreen.startTint([0, 0, 0, 0], 1);
        $gamePlayer.setTransparent(false);
        $gameSwitches.setValue(5, true);
        $gameMessage.clear();
    },
    start: function(){
        DataManager.setupNewGame();
        this.patchCE2();
        this.active = true;
        this.follower = 0;
        this.autoSuccess = true;
        this.showLogs = false;
        this.prepare([1, 2]);
        $gamePlayer.reserveTransfer(this.mapId, this.startX, this.startY);
        $gamePlayer.setTransparent(false);
    }
};

(function(){
    const _su = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function(){
        _su.apply(this, arguments);
        if (!this._galerieLabel && this._character instanceof Game_Event && $gameMap.mapId() === Galerie.mapId){
            this._galerieLabel = true;
            if (this._character.event().name === 'Intro'){ return; }
            const id = this._character.eventId(), npc = Galerie.npcs[id - 1];
            const text = npc ? ((id < 10 ? '0' : '') + id + ' ' + npc.en) : this._character.event().name;
            const bmp = new Bitmap(220, 22);
            bmp.fontSize = 15;
            bmp.outlineWidth = 4;
            bmp.drawText(text, 0, 0, 220, 22, 'center');
            const sp = new Sprite(bmp);
            sp.anchor.set(0.5, 1);
            sp.y = -this.patternHeight();
            this.addChild(sp);
        }
    };
    const _upd = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function(){
        _upd.apply(this, arguments);
        if (Galerie.active && !Galerie.showLogs && typeof $LogWindow_CurrentWindow !== 'undefined' && $LogWindow_CurrentWindow && $LogWindow_CurrentWindow.visible){ $LogWindow_CurrentWindow.hide(); }
    };
    const _tc = Scene_Title.prototype.create;
    Scene_Title.prototype.create = function(){ Galerie.active = false; _tc.apply(this, arguments); };
    const _gfs = Game_Followers.prototype.synchronize;
    Game_Followers.prototype.synchronize = function(){
        _gfs.apply(this, arguments);
        const fp = Galerie.active && Galerie.followerPosActive;
        if (fp){
            this.forEach(function(f){
                const a = f.actor(), q = a && fp[a.actorId()];
                if (q){ f.locate(q[0], q[1]); f.setDirection(q[2]); }
            });
        }
    };
    // ---- Debug: tile coordinates overlay (F7 or Settings) ----
    // draws "x,y" on every visible tile plus a small HUD (map id, player x,y and direction, tile under the mouse, party)
    Input.keyMapper[118] = 'galerieCoords';   // F7
    Input.keyMapper[117] = 'galeriePics';     // F6: list of the pictures on screen (diagnostic)
    function Sprite_GalerieCoords(){ this.initialize.apply(this, arguments); }
    Sprite_GalerieCoords.prototype = Object.create(Sprite.prototype);
    Sprite_GalerieCoords.prototype.constructor = Sprite_GalerieCoords;
    Sprite_GalerieCoords.prototype.initialize = function(){
        Sprite.prototype.initialize.call(this);
        this._grid = new Sprite(new Bitmap(Graphics.width + 96, Graphics.height + 96));
        this._hud = new Sprite(new Bitmap(Graphics.width, 52));
        this.addChild(this._grid);
        this.addChild(this._hud);
        this._pics = new Sprite(new Bitmap(560, 420));
        this._pics.y = 56;
        this.addChild(this._pics);
        this._picsKey = '';
        this._gridKey = '';
        this._hudKey = '';
    };
    Sprite_GalerieCoords.prototype.drawPics = function(){
        const lines = [], v = function(i){ return $gameVariables.value(i); };
        lines.push('sw5=' + $gameSwitches.value(5) + '  v40(cum stage)=' + v(40) + '  v23(face)=' + v(23) + '  v33(skin)=' + v(33) + '  v90(face lvl)=' + v(90) + '  v2020=' + v(2020));
        for (let id = 1; id <= 100; id++){
            const pic = $gameScreen.picture(id);
            if (pic){ lines.push('#' + id + ' ' + pic.name() + '  x' + Math.round(pic.x()) + ' y' + Math.round(pic.y()) + '  scale ' + pic.scaleX() + '/' + pic.scaleY() + '  opacity ' + pic.opacity()); }
        }
        const key = lines.join('\n');
        if (key === this._picsKey){ return; }
        this._picsKey = key;
        console.log('[Galerie] pictures\n' + key);
        const b = this._pics.bitmap;
        b.clear();
        b.fillRect(0, 0, b.width, b.height, 'rgba(0, 0, 0, 0.7)');
        b.fontSize = 13;
        b.textColor = '#ffffff';
        lines.slice(0, 24).forEach(function(t, k){ b.drawText(t, 6, 4 + k * 17, b.width - 12, 17, 'left'); });
    };
    Sprite_GalerieCoords.prototype.update = function(){
        Sprite.prototype.update.call(this);
        const want = !!(Galerie.active && $gameMap && (Galerie.debugCoords || Galerie.showPics));
        this.visible = want;
        if (!want){ return; }
        this._grid.visible = this._hud.visible = !!Galerie.debugCoords;
        this._pics.visible = !!Galerie.showPics;
        if (Galerie.showPics){ this.drawPics(); }
        if (!Galerie.debugCoords){ return; }
        const tw = $gameMap.tileWidth(), th = $gameMap.tileHeight();
        const dx = $gameMap.displayX(), dy = $gameMap.displayY();
        const fx = Math.floor(dx), fy = Math.floor(dy);
        this._grid.x = -(dx - fx) * tw;
        this._grid.y = -(dy - fy) * th;
        const key = $gameMap.mapId() + ':' + fx + ':' + fy;
        if (key !== this._gridKey){
            this._gridKey = key;
            const b = this._grid.bitmap;
            b.clear();
            b.fontSize = 12;
            b.outlineWidth = 3;
            b.outlineColor = 'rgba(0, 0, 0, 0.9)';
            const cols = Math.ceil(Graphics.width / tw) + 2, rows = Math.ceil(Graphics.height / th) + 2;
            for (let iy = 0; iy < rows; iy++){
                for (let ix = 0; ix < cols; ix++){
                    const mx = $gameMap.roundX(fx + ix), my = $gameMap.roundY(fy + iy);
                    if (!$gameMap.isValid(mx, my)){ continue; }
                    b.fillRect(ix * tw, iy * th, tw, 1, 'rgba(255, 255, 255, 0.35)');
                    b.fillRect(ix * tw, iy * th, 1, th, 'rgba(255, 255, 255, 0.35)');
                    b.textColor = (mx % 5 === 0 && my % 5 === 0) ? '#ffe066' : '#ffffff';
                    b.drawText(mx + ',' + my, ix * tw, iy * th + th / 2 - 10, tw, 20, 'center');
                }
            }
        }
        // HUD
        const p = $gamePlayer, dirs = { 2: 'down', 4: 'left', 6: 'right', 8: 'up' };
        const mx = $gameMap.canvasToMapX(TouchInput.x), my = $gameMap.canvasToMapY(TouchInput.y);
        const party = $gameParty.members().map(function(a){ return a.actorId(); }).join(',');
        const hud = 'Map ' + $gameMap.mapId() + '   Player ' + p.x + ',' + p.y + ' (' + (dirs[p.direction()] || p.direction()) + ', dir ' + p.direction() + ')'
            + '   Mouse ' + mx + ',' + my + '   Party [' + party + ']';
        if (hud !== this._hudKey){
            this._hudKey = hud;
            const b = this._hud.bitmap;
            b.clear();
            b.fillRect(0, 0, Graphics.width, 52, 'rgba(0, 0, 0, 0.75)');
            b.fontSize = 18;
            b.textColor = '#ffffff';
            b.drawText(hud, 8, 2, Graphics.width - 16, 24, 'left');
            b.fontSize = 14;
            b.textColor = '#bbbbbb';
            b.drawText('F7: show/hide coordinates   |   yellow = x and y multiple of 5   |   the corrected position goes in the Excel as x,y,dir (2 down, 4 left, 6 right, 8 up)', 8, 28, Graphics.width - 16, 20, 'left');
        }
    };
    const _cdo = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function(){
        _cdo.apply(this, arguments);
        this._galerieCoords = new Sprite_GalerieCoords();
        const idx = this._windowLayer ? this.children.indexOf(this._windowLayer) : -1;
        if (idx >= 0){ this.addChildAt(this._galerieCoords, idx); } else { this.addChild(this._galerieCoords); }
    };
    const _smu = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function(){
        _smu.apply(this, arguments);
        if (Galerie.active && Input.isTriggered('galerieCoords')){ Galerie.debugCoords = !Galerie.debugCoords; }
        if (Galerie.active && Input.isTriggered('galeriePics')){ Galerie.showPics = !Galerie.showPics; }
    };
    // no saving from the gallery (it is a throw-away new game): hide the menu command and refuse any save at the lowest level
    const _se = Game_System.prototype.isSaveEnabled;
    Game_System.prototype.isSaveEnabled = function(){ return Galerie.active ? false : _se.apply(this, arguments); };
    // "Skill checks: Auto-success": the game's dice check (CE20 -> CE13) succeeds when $hantei (player roll) >= $mokuhyou (target).
    // Raising $hantei just before that test makes the check pass, except for the scripted impossible ones (target >= 60, e.g. the pitfall escapes).
    const _c355 = Game_Interpreter.prototype.command355;
    Game_Interpreter.prototype.command355 = function(){
        if (Galerie.active){
            // Ruby leftover in the original data (Map116 ev34 p4, used by the Gnoll Orgy image): "while i < 21 / eval(\"$layer#{i} = i\") / end" is a SyntaxError in JS; rewritten to its JS equivalent
            const c0 = this.currentCommand();
            if (c0 && typeof c0.parameters[0] === 'string' && c0.parameters[0] === 'n = 1' && this._list[this._index + 3] && String(this._list[this._index + 3].parameters[0]).indexOf('while i < 21') === 0){
                c0.parameters[0] = 'for (var i = 1; i < 21; i++){ window["$layer" + i] = i; }';
                for (let k = this._index + 1; this._list[k] && this._list[k].code === 655; k++){ this._list[k].parameters[0] = ''; }
            }
        }
        if (Galerie.active && Galerie.autoSuccess){
            let script = this.currentCommand().parameters[0] + '\n', i = this._index;
            while (this._list[i + 1] && this._list[i + 1].code === 655){ i++; script += this._list[i].parameters[0] + '\n'; }
            if (script.indexOf('$hantei >= $mokuhyou') >= 0){
                const h = Number(window.$hantei), t = Number(window.$mokuhyou);
                if (!isNaN(h) && !isNaN(t) && t < 60){ window.$hantei = Math.max(h, t); }
            }
        }
        return _c355.apply(this, arguments);
    };
    ['saveGame', 'saveGameWithoutRescue'].forEach(function(k){
        const o = DataManager[k];
        DataManager[k] = function(){ return Galerie.active ? false : o.apply(this, arguments); };
    });
    const _make = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function(){
        _make.apply(this, arguments);
        const idx = this._list.findIndex(function(it){ return it.symbol === 'options'; });
        const last = this._list.slice(idx);
        this._list = this._list.slice(0, idx);
        this.addCommand("Gallery", 'galerie_room');
        this._list = this._list.concat(last);
    };
    const _create = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function(){
        _create.apply(this, arguments);
        this._commandWindow.setHandler('galerie_room', function(){
            this._commandWindow.close();
            Galerie.start();
            this.fadeOutAll();
            SceneManager.goto(Scene_Map);
        }.bind(this));
    };
})();
