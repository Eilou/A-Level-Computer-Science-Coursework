//THIS CODE WAS WRITTEN BY LOUIE BROOKS (as of 09/09/22)
//THIS LOADS IN THE WALL OBJECTS
 
function loadWalls(walls) {
    for (let i = 0; i < 9; i++) {
        walls.push([]);
    }

    //level 1's walls
    walls[0].push(new Wall(0,1080,1920,1,0)); //floor
    walls[0].push(new Wall(0,0,1920,1,1)); //ceiling
    walls[0].push(new Wall(0,0,1,1080,2)); //left wall
    walls[0].push(new Wall(1920,0,1,300,3)); //right walls
    walls[0].push(new Wall(1920,500,1,580,3)); //right walls
    walls[0].push(new Wall(14,825,49,41,7)); //start check
    walls[0].push(new Wall(1839,395,60,50,7)); //end check
    // walls[0].push(new Wall(1910,400,10,10,7)); //exit check
    walls[0].push(new Wall(4,846,247,1,0));
    walls[0].push(new Wall(252,767,1,80,3));
    walls[0].push(new Wall(255,767,248,1,0)); 
    walls[0].push(new Wall(503,727,1,44,3));
    walls[0].push(new Wall(503,727,184,1,0)); 
    walls[0].push(new Wall(687,694,1,36,3)); 
    walls[0].push(new Wall(687,692,172,1,0)); 
    walls[0].push(new Wall(859,652,1,41,3)); 
    walls[0].push(new Wall(860,652,217,1,0)); 
    walls[0].push(new Wall(1077,624,1,29,3)); 
    walls[0].push(new Wall(1077,622,131,1,0));
    walls[0].push(new Wall(1206,579,1,50,3)); 
    walls[0].push(new Wall(1206,579,186,1,0));
    walls[0].push(new Wall(1393,540,1,42,3)); 
    walls[0].push(new Wall(1395,538,225,1,0));
    walls[0].push(new Wall(1620,470,1,69,3)); 
    walls[0].push(new Wall(1619,468,196,1,0));
    walls[0].push(new Wall(1818,423,1,49,3)); 
    walls[0].push(new Wall(1820,421,200,1,0)); 
    // walls[0].push(new Wall(891,629,134,35,4));
    // walls[0].push(new Wall(1259,557,87,42,6));
    // walls[0].push(new Wall(630,483,167,1,1)); 
    // walls[0].push(new Wall(798,415,1,65,2));
    // walls[0].push(new Wall(631,407,163,1,0)); 
    // walls[0].push(new Wall(628,408,1,72,3)); 
    // walls[0].push(new Wall(957,226,92,92,5)); 

    //level 2's walls
    walls[1].push(new Wall(0,1080,1920,1,0)); //floor
    walls[1].push(new Wall(0,0,1920,1,1)); //ceiling
    walls[1].push(new Wall(0,0,1,300,2)); //left walls
    walls[1].push(new Wall(0,500,1,580,2)); //left walls
    walls[1].push(new Wall(1920,0,1,215,3)); //right wall
    walls[1].push(new Wall(1920,377,1,697,3)); //right wall
    walls[1].push(new Wall(16,916,126,49,7)); //start check
    walls[1].push(new Wall(1748,359,152,49,7)); //end check 
    // walls[1].push(new Wall(5,400,10,10,7)); //entry check
    // walls[1].push(new Wall(1915,346,10,10,7));//exit check
    walls[1].push(new Wall(0,928,430,1,0));
    walls[1].push(new Wall(430,935,1,144,2)); 
    walls[1].push(new Wall(737,832,284,1,0)); 
    walls[1].push(new Wall(1021,834,1,113,2)); 
    walls[1].push(new Wall(928,947,99,1,1)); 
    walls[1].push(new Wall(833,949,1,126,3)); 
    walls[1].push(new Wall(736,949,100,1,1)); 
    walls[1].push(new Wall(736,833,1,119,3)); 
    walls[1].push(new Wall(931,949,1,129,2)); 
    walls[1].push(new Wall(1272,654,289,1,0)); 
    walls[1].push(new Wall(1564,655,1,168,2)); 
    walls[1].push(new Wall(1499,820,67,1,1));  
    walls[1].push(new Wall(1267,658,1,165,3)); 
    walls[1].push(new Wall(1271,820,62,1,1)); 
    walls[1].push(new Wall(1333,818,1,255,3)); 
    walls[1].push(new Wall(1505,818,1,258,2)); 
    walls[1].push(new Wall(1652,376,266,1,0)); 
    walls[1].push(new Wall(1656,380,1,142,3)); 
    walls[1].push(new Wall(1667,522,134,1,1)); 
    walls[1].push(new Wall(1804,522,1,557,3)); 
    walls[1].push(new Wall(424,1063,1400,11,6));
    
    //level 3's walls
    walls[2].push(new Wall(0,1079,1920,1,0));
    walls[2].push(new Wall(1920,680,1,413,3)); 
    walls[2].push(new Wall(1918,1,1,467,3)); 
    walls[2].push(new Wall(0,1,1918,1,1)); 
    walls[2].push(new Wall(0,3,1,73,2)); 
    walls[2].push(new Wall(0,373,1,710,2)); 
    walls[2].push(new Wall(11,373,125,15,7)); 
    walls[2].push(new Wall(1808,666,85,17,7)); 
    // walls[2].push(new Wall(0,256,14,15,7)); 
    // walls[2].push(new Wall(1893,563,18,17,7)); 
    walls[2].push(new Wall(0,373,174,1,0)); 
    walls[2].push(new Wall(175,374,1,710,2)); 
    walls[2].push(new Wall(0,74,360,1,1)); 
    walls[2].push(new Wall(361,75,1,730,3)); 
    walls[2].push(new Wall(360,805,199,1,1)); 
    walls[2].push(new Wall(559,76,1,730,2)); 
    walls[2].push(new Wall(559,76,515,1,1)); 
    walls[2].push(new Wall(1076,76,1,613,3)); 
    walls[2].push(new Wall(1078,688,123,1,1)); 
    walls[2].push(new Wall(1201,470,1,218,2)); 
    walls[2].push(new Wall(1205,470,713,1,1)); 
    walls[2].push(new Wall(438,1018,1,60,3)); 
    walls[2].push(new Wall(440,1019,371,1,0)); 
    walls[2].push(new Wall(811,279,1,739,3)); 
    walls[2].push(new Wall(810,276,85,1,0)); 
    walls[2].push(new Wall(895,276,1,798,2)); 
    walls[2].push(new Wall(1096,895,1,179,3)); 
    walls[2].push(new Wall(1096,895,322,1,0)); 
    walls[2].push(new Wall(1418,669,1,226,3)); 
    walls[2].push(new Wall(1419,669,509,1,0)); 
    walls[2].push(new Wall(161,1059,289,27,6));
    walls[2].push(new Wall(888,1060,217,30,6));

    //level 4's walls
    walls[3].push(new Wall(0,1076,1936,1,0)); 
    walls[3].push(new Wall(1920,670,1,414,3)); 
    walls[3].push(new Wall(1919,1,1,312,3)); 
    walls[3].push(new Wall(0,1,1918,1,1)); 
    walls[3].push(new Wall(0,1,1,288,2)); 
    walls[3].push(new Wall(0,666,1,414,2)); 
    walls[3].push(new Wall(16,630,219,35,7)); 
    walls[3].push(new Wall(1681,656,193,54,7));
    // walls[3].push(new Wall(4,478,36,51,7)); 
    // walls[3].push(new Wall(1856,435,54,79,7)); 
    walls[3].push(new Wall(1,665,272,1,0)); 
    walls[3].push(new Wall(273,666,1,407,2)); 
    walls[3].push(new Wall(1568,669,1,404,3)); 
    walls[3].push(new Wall(1570,668,348,1,0)); 
    walls[3].push(new Wall(1731,313,185,1,1)); 
    walls[3].push(new Wall(1731,145,1,168,3)); 
    walls[3].push(new Wall(1056,145,675,1,1)); 
    walls[3].push(new Wall(1056,144,1,592,2)); 
    walls[3].push(new Wall(870,735,191,1,1)); 
    walls[3].push(new Wall(870,143,1,596,3)); 
    walls[3].push(new Wall(244,141,627,1,1)); 
    walls[3].push(new Wall(245,139,1,144,2)); 
    walls[3].push(new Wall(0,284,245,1,1)); 
    walls[3].push(new Wall(505,376,146,138,5)); 
    walls[3].push(new Wall(519,818,149,145,5)); 
    walls[3].push(new Wall(900,834,153,152,5)); 
    walls[3].push(new Wall(1259,833,142,150,5));
    walls[3].push(new Wall(1238,353,155,138,5));
    walls[3].push(new Wall(256,1061,1348,50,6));

    //level 5's walls
    walls[4].push(new Wall(0,665,45,1,0)); 
    walls[4].push(new Wall(1,1080,1917,1,0)); 
    walls[4].push(new Wall(1920,340,1,743,3)); 
    walls[4].push(new Wall(1918,1,1,30,3)); 
    walls[4].push(new Wall(0,1,1919,1,1)); 
    walls[4].push(new Wall(0,0,1,281,2)); 
    walls[4].push(new Wall(0,669,1,406,2)); 
    walls[4].push(new Wall(73,944,136,36,7)); 
    walls[4].push(new Wall(1814,325,89,34,7)); 
    // walls[4].push(new Wall(4,448,34,50,7)); 
    // walls[4].push(new Wall(1869,135,27,49,7)); 
    walls[4].push(new Wall(44,664,1,294,2)); 
    walls[4].push(new Wall(44,958,431,1,0)); 
    walls[4].push(new Wall(475,230,1,741,3)); //
    walls[4].push(new Wall(475,230,91,1,0)); //
    walls[4].push(new Wall(566,230,1,891,2)); //
    walls[4].push(new Wall(1093,1018,1,58,3)); 
    walls[4].push(new Wall(1094,1015,255,1,0)); 
    walls[4].push(new Wall(1349,1021,1,57,2)); 
    walls[4].push(new Wall(1870,483,1,593,3)); 
    walls[4].push(new Wall(1636,483,238,1,1)); 
    walls[4].push(new Wall(1636,338,1,145,3)); 
    walls[4].push(new Wall(1634,339,297,1,0)); 
    walls[4].push(new Wall(1189,30,727,1,1)); 
    walls[4].push(new Wall(1190,30,1,863,2)); 
    walls[4].push(new Wall(1096,893,93,1,1)); 
    walls[4].push(new Wall(1096,33,1,862,3)); 
    walls[4].push(new Wall(74,33,1031,1,1)); 
    walls[4].push(new Wall(93,34,1,246,2)); 
    walls[4].push(new Wall(5,279,90,1,1)); 
    walls[4].push(new Wall(326,879,118,95,4)); 
    walls[4].push(new Wall(1225,938,119,95,4)); 
    walls[4].push(new Wall(550,1056,1336,33,6));

    //level 6's walls
    walls[5].push(new Wall(0,1081,1923,1,0)); 
    walls[5].push(new Wall(1923,700,1,402,3));
    walls[5].push(new Wall(1919,1,1,549,3)); 
    walls[5].push(new Wall(0,1,1920,1,1)); 
    walls[5].push(new Wall(0,3,1,25,2)); 
    walls[5].push(new Wall(0,333,1,746,2)); 
    walls[5].push(new Wall(16,320,79,21,7)); 
    walls[5].push(new Wall(1771,668,123,35,7));
    // walls[5].push(new Wall(3,118,36,77,7)); 
    // walls[5].push(new Wall(1849,575,46,54,7));
    walls[5].push(new Wall(3,331,106,1,0)); 
    walls[5].push(new Wall(109,316,1,23,3)); 
    walls[5].push(new Wall(113,316,117,1,0)); 
    walls[5].push(new Wall(230,290,1,30,3)); 
    walls[5].push(new Wall(231,290,138,1,0)); 
    walls[5].push(new Wall(375,249,1,50,3)); 
    walls[5].push(new Wall(378,249,175,1,0)); 
    walls[5].push(new Wall(558,219,1,35,3)); 
    walls[5].push(new Wall(560,219,140,1,0)); 
    walls[5].push(new Wall(701,223,1,31,2)); 
    walls[5].push(new Wall(703,254,455,1,0)); 
    walls[5].push(new Wall(1158,211,1,40,3)); 
    walls[5].push(new Wall(1159,211,582,1,0));
    walls[5].push(new Wall(1740,209,1,82,2)); 
    walls[5].push(new Wall(836,293,905,1,1)); 
    walls[5].push(new Wall(839,295,1,30,2)); 
    walls[5].push(new Wall(415,325,425,1,1)); 
    walls[5].push(new Wall(415,328,1,33,2)); 
    walls[5].push(new Wall(44,361,375,1,1)); 
    walls[5].push(new Wall(44,360,1,324,2)); 
    walls[5].push(new Wall(44,684,604,1,0)); 
    walls[5].push(new Wall(648,685,1,288,2)); 
    walls[5].push(new Wall(648,973,676,1,0)); 
    walls[5].push(new Wall(1326,945,1,33,0)); 
    walls[5].push(new Wall(1326,945,1,33,3)); 
    walls[5].push(new Wall(1326,945,27,1,0)); 
    walls[5].push(new Wall(1353,946,1,72,2)); 
    walls[5].push(new Wall(1355,1018,429,1,0));
    walls[5].push(new Wall(1786,738,1,285,3));
    walls[5].push(new Wall(1280,735,508,1,1));
    walls[5].push(new Wall(1280,694,1,40,3)); 
    walls[5].push(new Wall(1283,694,637,1,0));
    walls[5].push(new Wall(1005,551,911,1,1));
    walls[5].push(new Wall(1005,550,1,211,2));
    walls[5].push(new Wall(875,761,130,1,1)); 
    walls[5].push(new Wall(875,550,1,210,3)); 
    walls[5].push(new Wall(259,549,616,1,1)); 
    walls[5].push(new Wall(259,495,1,55,3)); 
    walls[5].push(new Wall(259,495,1629,1,0));
    walls[5].push(new Wall(1888,30,1,468,3)); 
    walls[5].push(new Wall(1,30,1888,1,1)); 
    walls[5].push(new Wall(700,210,456,56,6));
    walls[5].push(new Wall(1439,24,441,55,6));
    walls[5].push(new Wall(39,624,154,66,6)); 
    walls[5].push(new Wall(649,930,672,63,6));
    walls[5].push(new Wall(1281,770,160,144,5));
    walls[5].push(new Wall(1764,416,125,99,4));

    //level 7's walls
    walls[6].push(new Wall(3,1079,1915,1,0)); 
    walls[6].push(new Wall(1918,474,1,607,3)); 
    walls[6].push(new Wall(1919,3,1,47,3)); 
    walls[6].push(new Wall(4,1,1915,1,1)); 
    walls[6].push(new Wall(5,0,1,549,2)); 
    walls[6].push(new Wall(1,688,1,388,2)); 
    walls[6].push(new Wall(5,690,116,1,0)); 
    walls[6].push(new Wall(23,674,83,45,7)); 
    // walls[6].push(new Wall(0,596,15,24,7)); 
    walls[6].push(new Wall(1839,430,75,44,7)); 
    // walls[6].push(new Wall(1873,256,23,88,7)); 
    walls[6].push(new Wall(124,690,1,346,2)); 
    walls[6].push(new Wall(126,1036,100,1,0)); 
    walls[6].push(new Wall(226,643,1,396,3));
    walls[6].push(new Wall(229,643,72,1,0)); 
    walls[6].push(new Wall(304,645,1,393,2)); 
    walls[6].push(new Wall(305,1038,150,1,0)); 
    walls[6].push(new Wall(455,851,1,189,3)); 
    walls[6].push(new Wall(456,851,78,1,0)); 
    walls[6].push(new Wall(536,851,1,187,2));
    walls[6].push(new Wall(539,1038,136,1,0)); 
    walls[6].push(new Wall(675,333,1,706,3)); 
    walls[6].push(new Wall(675,331,74,1,2)); 
    walls[6].push(new Wall(751,331,1,708,2)); 
    walls[6].push(new Wall(754,1039,151,1,0)); 
    walls[6].push(new Wall(905,914,1,126,3)); 
    walls[6].push(new Wall(968,915,1,131,2)); 
    walls[6].push(new Wall(905,913,63,1,0)); 
    walls[6].push(new Wall(970,1048,174,1,0)); 
    walls[6].push(new Wall(1144,431,1,615,3)); 
    walls[6].push(new Wall(1146,431,70,1,0)); 
    walls[6].push(new Wall(1219,434,1,607,2)); 
    walls[6].push(new Wall(1224,1040,131,1,0));
    walls[6].push(new Wall(1355,766,1,275,3)); 
    walls[6].push(new Wall(1358,766,65,1,0)); 
    walls[6].push(new Wall(1425,768,1,278,2)); 
    walls[6].push(new Wall(1429,1045,121,1,3));
    walls[6].push(new Wall(1550,615,1,431,3)); 
    walls[6].push(new Wall(1426,1043,125,1,0));
    walls[6].push(new Wall(1550,616,71,1,0)); 
    walls[6].push(new Wall(1623,616,1,424,2)); 
    walls[6].push(new Wall(1624,1040,200,1,0));
    walls[6].push(new Wall(1824,451,1,588,3)); 
    walls[6].push(new Wall(1826,451,157,1,0)); 
    walls[6].push(new Wall(1791,51,132,1,1)); 
    walls[6].push(new Wall(1791,48,1,45,2)); 
    walls[6].push(new Wall(1768,93,27,1,1)); 
    walls[6].push(new Wall(1768,46,1,49,3)); 
    walls[6].push(new Wall(1605,46,166,1,1));
    walls[6].push(new Wall(1605,46,1,217,2));
    walls[6].push(new Wall(1551,263,53,1,1));
    walls[6].push(new Wall(1551,50,1,210,3));
    walls[6].push(new Wall(1418,50,132,1,1));
    walls[6].push(new Wall(1418,51,1,457,2));
    walls[6].push(new Wall(1358,508,62,1,1));
    walls[6].push(new Wall(1358,50,1,455,3));
    walls[6].push(new Wall(1195,46,168,1,1));
    walls[6].push(new Wall(1195,45,1,98,2)); 
    walls[6].push(new Wall(1151,143,43,1,1));
    walls[6].push(new Wall(1151,50,1,90,3)); 
    walls[6].push(new Wall(945,50,209,1,1)); 
    walls[6].push(new Wall(945,48,1,530,2)); 
    walls[6].push(new Wall(903,579,40,1,1)); 
    walls[6].push(new Wall(903,50,1,530,3)); 
    walls[6].push(new Wall(733,46,172,1,1)); 
    walls[6].push(new Wall(731,45,1,99,2)); 
    walls[6].push(new Wall(675,144,58,1,1)); 
    walls[6].push(new Wall(675,48,1,96,3)); 
    walls[6].push(new Wall(518,50,1,470,2)); 
    walls[6].push(new Wall(519,50,159,1,1)); 
    walls[6].push(new Wall(460,519,59,1,1)); 
    walls[6].push(new Wall(460,49,1,474,3)); 
    walls[6].push(new Wall(295,49,169,1,1)); 
    walls[6].push(new Wall(295,50,1,341,2)); 
    walls[6].push(new Wall(231,391,64,1,1)); 
    walls[6].push(new Wall(231,49,1,340,3)); 
    walls[6].push(new Wall(29,49,207,1,1)); 
    walls[6].push(new Wall(31,46,1,504,2)); 
    walls[6].push(new Wall(0,990,1920,100,6));
    walls[6].push(new Wall(20,40,1770,50,6));
    walls[6].push(new Wall(5,555,25,1,1));

    //level 8's walls
    walls[7].push(new Wall(0,1080,1918,1,0)); 
    walls[7].push(new Wall(1918,980,1,106,3)); 
    walls[7].push(new Wall(1918,3,1,675,3)); 
    walls[7].push(new Wall(1,3,1918,1,1)); 
    walls[7].push(new Wall(4,6,1,42,2)); 
    walls[7].push(new Wall(3,441,1,639,2)); 
    walls[7].push(new Wall(26,428,95,27,7)); 
    walls[7].push(new Wall(1706,956,108,30,7)); 
    walls[7].push(new Wall(0,436,138,1,0)); 
    walls[7].push(new Wall(138,438,1,31,2)); 
    walls[7].push(new Wall(45,469,95,1,1)); 
    walls[7].push(new Wall(45,471,1,587,2)); 
    walls[7].push(new Wall(44,1058,750,1,0)); 
    walls[7].push(new Wall(794,750,1,308,3)); 
    walls[7].push(new Wall(794,748,292,1,0)); 
    walls[7].push(new Wall(1086,351,1,418,3));
    walls[7].push(new Wall(1089,350,46,1,2)); 
    walls[7].push(new Wall(1136,350,1,706,2)); 
    walls[7].push(new Wall(1085,348,50,1,0)); 
    walls[7].push(new Wall(1136,1054,417,1,0)); 
    walls[7].push(new Wall(1555,976,1,82,3)); 
    walls[7].push(new Wall(1556,976,362,1,0)); 
    // walls[7].push(new Wall(8,185,30,75,7)); 
    // walls[7].push(new Wall(1885,788,19,55,7)); 
    walls[7].push(new Wall(1486,680,433,1,1)); 
    walls[7].push(new Wall(1486,144,1,536,3)); 
    walls[7].push(new Wall(729,141,760,1,1)); 
    walls[7].push(new Wall(728,140,1,280,2)); 
    walls[7].push(new Wall(418,420,308,1,1)); 
    walls[7].push(new Wall(425,419,1,369,2));
    walls[7].push(new Wall(369,788,62,1,1)); 
    walls[7].push(new Wall(369,46,1,745,3)); 
    walls[7].push(new Wall(4,46,372,1,1)); 
    walls[7].push(new Wall(158,158,143,142,5)); 
    walls[7].push(new Wall(154,510,121,124,5)); 
    walls[7].push(new Wall(180,830,128,135,5)); 
    walls[7].push(new Wall(493,818,145,146,5)); 
    walls[7].push(new Wall(480,486,148,155,5)); 
    walls[7].push(new Wall(820,480,146,140,5)); 
    walls[7].push(new Wall(803,156,151,149,5)); 
    walls[7].push(new Wall(1213,169,146,142,5));
    walls[7].push(new Wall(1209,476,164,148,5));
    walls[7].push(new Wall(1204,794,162,144,5));
    walls[7].push(new Wall(1579,803,149,137,5));
    walls[7].push(new Wall(31,1000,1534,53,6)); 
    walls[7].push(new Wall(316,329,59,452,6)); 
    walls[7].push(new Wall(36,466,72,538,6)); 
    walls[7].push(new Wall(793,690,297,68,6)); 
    walls[7].push(new Wall(1083,303,52,50,6));

    //level 9's walls
    walls[8].push(new Wall(3,1079,1917,1,0));
    walls[8].push(new Wall(1920,264,1,819,3)); 
    walls[8].push(new Wall(1919,1,1,95,3)); 
    walls[8].push(new Wall(0,1,1920,1,1)); 
    walls[8].push(new Wall(1,3,1,676,2)); 
    walls[8].push(new Wall(1,975,1,106,2)); 
    walls[8].push(new Wall(4,973,520,1,0)); 
    walls[8].push(new Wall(89,949,237,57,7)); 
    walls[8].push(new Wall(1599,233,239,60,7)); 
    walls[8].push(new Wall(525,975,1,46,2)); 
    walls[8].push(new Wall(526,1021,595,1,0));
    walls[8].push(new Wall(1121,975,1,49,3)); 
    walls[8].push(new Wall(1123,975,551,1,0)); 
    walls[8].push(new Wall(1675,976,1,44,2)); 
    walls[8].push(new Wall(1678,1020,183,1,0)); 
    walls[8].push(new Wall(1861,973,1,48,3)); 
    walls[8].push(new Wall(1864,973,24,1,0)); 
    walls[8].push(new Wall(1893,349,1,622,3)); 
    walls[8].push(new Wall(1628,349,265,1,1)); 
    walls[8].push(new Wall(1628,349,1,56,2)); 
    walls[8].push(new Wall(396,401,1233,1,1)); 
    walls[8].push(new Wall(399,265,1,139,3)); 
    walls[8].push(new Wall(399,265,440,1,0)); 
    walls[8].push(new Wall(836,263,1,47,2)); 
    walls[8].push(new Wall(1349,263,1,50,3)); 
    walls[8].push(new Wall(833,306,516,1,0)); 
    walls[8].push(new Wall(1350,261,568,1,0)); 
    // walls[8].push(new Wall(6,796,24,67,7)); 
    // walls[8].push(new Wall(1879,143,26,53,7)); 
    walls[8].push(new Wall(388,98,1531,1,1)); 
    walls[8].push(new Wall(388,48,1,55,3)); 
    walls[8].push(new Wall(139,48,252,1,1)); 
    walls[8].push(new Wall(139,48,1,527,2)); 
    walls[8].push(new Wall(144,575,17,1,1)); 
    walls[8].push(new Wall(161,575,1,20,2)); 
    walls[8].push(new Wall(143,575,18,1,0)); 
    walls[8].push(new Wall(160,599,235,1,0)); 
    walls[8].push(new Wall(395,570,1,38,3)); 
    walls[8].push(new Wall(396,570,258,1,0)); 
    walls[8].push(new Wall(654,566,1,47,2)); 
    walls[8].push(new Wall(656,613,463,1,0)); 
    walls[8].push(new Wall(1119,578,1,40,3)); 
    walls[8].push(new Wall(1121,578,499,1,0)); 
    walls[8].push(new Wall(1620,586,1,83,2)); 
    walls[8].push(new Wall(5,675,1621,1,1)); 
    walls[8].push(new Wall(529,973,594,43,6)); 
    walls[8].push(new Wall(656,553,462,51,6)); 
    walls[8].push(new Wall(843,256,502,54,6)); 
    walls[8].push(new Wall(1640,349,246,52,6)); 
    walls[8].push(new Wall(144,43,246,51,6)); 
    walls[8].push(new Wall(1675,919,178,100,4));
    walls[8].push(new Wall(186,498,160,118,4));

    //level 10's walls
    walls[9].push(new Wall(1,1078,1917,1,0)); 
    walls[9].push(new Wall(1918,3,1,1077,3)); 
    walls[9].push(new Wall(3,3,1915,1,1)); 
    walls[9].push(new Wall(3,1,1,92,2)); 
    walls[9].push(new Wall(0,256,1,822,2)); 
    walls[9].push(new Wall(1,254,104,1,0)); 
    walls[9].push(new Wall(31,249,58,27,7)); 
    // walls[9].push(new Wall(3,161,13,34,7));
    walls[9].push(new Wall(105,253,1,62,0)); 
    walls[9].push(new Wall(108,315,136,1,0)); 
    walls[9].push(new Wall(108,254,1,61,2)); 
    walls[9].push(new Wall(243,314,1,582,2)); 
    walls[9].push(new Wall(246,896,200,1,0)); 
    walls[9].push(new Wall(446,899,1,51,2)); 
    walls[9].push(new Wall(448,950,1421,1,0));
    walls[9].push(new Wall(1869,44,1,906,3)); 
    walls[9].push(new Wall(736,44,1134,1,1)); 
    walls[9].push(new Wall(736,44,1,202,2)); 
    walls[9].push(new Wall(544,246,192,1,1)); 
    walls[9].push(new Wall(546,214,1,30,3)); 
    walls[9].push(new Wall(363,214,183,1,1)); 
    walls[9].push(new Wall(363,109,1,106,3)); 
    walls[9].push(new Wall(3,109,361,1,1));
    walls[9].push(new Wall(1400, 390, 300, 150, 8)); //final checkpoint to switch to the leaderboard screen

}