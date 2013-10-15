﻿function imn_get_img_url ( page) {
	if ( page < 1) page=1;
	if ( page > imn.length - 1) page=imn.length - 1;
	cur_imn_page=page;
	var p=page;
	/* 
	var prefixed_page=p;
	if ( p < 10) prefixed_page="0" + p;
	if ( p < 100) prefixed_page="00" + p;
	else if ( p < 1000) prefixed_page="0" + p;
	*/
  var str = "" + p;
  var pad = "0000";
  prefixed_page = pad.substring(0, pad.length - str.length) + str;
	// alert(prefixed_page); 
	return "imn/" + Math.floor(page/100) + "/imn-" + prefixed_page + ".png";
}

var imn=[];

imn[1] = "ابد"
imn[2] = "ابس"
imn[3] = "ابل"
imn[4] = "ابي"
imn[5] = "اتي"
imn[6] = "اثر"
imn[7] = "اثف"
imn[8] = "اجج"
imn[9] = "اجل"
imn[10] = "احح"
imn[11] = "اخذ"
imn[12] = "ادب"
imn[13] = "ادم"
imn[14] = "ادي"
imn[15] = "ارب"
imn[16] = "ارج"
imn[17] = "ارس"
imn[18] = "ارص"
imn[19] = "ارن"
imn[20] = "ازر"
imn[21] = "ازق"
imn[22] = "ازي"
imn[23] = "اسر"
imn[24] = "اسف"
imn[25] = "اسي"
imn[26] = "اشي"
imn[27] = "اصل"
imn[28] = "اضم"
imn[29] = "افت"
imn[30] = "افق"
imn[31] = "اقط"
imn[32] = "اكل"
imn[33] = "الت"
imn[34] = "الف"
imn[35] = "الل"
imn[36] = "الي"
imn[37] = "امد"
imn[38] = "امر"
imn[39] = "امم"
imn[40] = "امن"
imn[41] = "امن"
imn[42] = "انث"
imn[43] = "انف"
imn[44] = "انق"
imn[45] = "اهل"
imn[46] = "اوب"
imn[47] = "اوس"
imn[48] = "اول"
imn[49] = "اون"
imn[50] = "اون"
imn[51] = "اين"
imn[52] = "اين"
imn[53] = "بار"
imn[54] = "باه"
imn[55] = "بتر"
imn[56] = "بثث"
imn[57] = "بجد"
imn[58] = "بجم"
imn[59] = "بحر"
imn[60] = "بحر"
imn[61] = "بخر"
imn[62] = "بخل"
imn[63] = "بدد"
imn[64] = "بدر"
imn[65] = "بدل"
imn[66] = "بده"
imn[67] = "بذخ"
imn[68] = "بذل"
imn[69] = "برا"
imn[70] = "برج"
imn[71] = "برح"
imn[72] = "برد"
imn[73] = "برر"
imn[74] = "برز"
imn[75] = "برش"
imn[76] = "برع"
imn[77] = "برق"
imn[78] = "برك"
imn[79] = "بره"
imn[80] = "بزر"
imn[81] = "بزل"
imn[82] = "بسا"
imn[83] = "بسط"
imn[84] = "بسل"
imn[85] = "بشر"
imn[86] = "بشع"
imn[87] = "بصر"
imn[88] = "بصق"
imn[89] = "بضع"
imn[90] = "بطح"
imn[91] = "بطط"
imn[92] = "بطن"
imn[93] = "بظظ"
imn[94] = "بعد"
imn[95] = "بعق"
imn[96] = "بغت"
imn[97] = "بغض"
imn[98] = "بغي"
imn[99] = "بقط"
imn[100] = "بقل"
imn[101] = "بكر"
imn[102] = "بكل"
imn[103] = "بلج"
imn[104] = "بلد"
imn[105] = "بلص"
imn[106] = "بلع"
imn[107] = "بلق"
imn[108] = "بلل"
imn[109] = "بلي"
imn[110] = "بنق"
imn[111] = "بني"
imn[112] = "بني"
imn[113] = "بهر"
imn[114] = "بهظ"
imn[115] = "بهل"
imn[116] = "بوا"
imn[117] = "بوح"
imn[118] = "بور"
imn[119] = "بوع"
imn[120] = "بول"
imn[121] = "بوي"
imn[122] = "بيد"
imn[123] = "بيض"
imn[124] = "بيع"
imn[125] = "بين"
imn[126] = "بيه"
imn[127] = "تبب"
imn[128] = "تبل"
imn[129] = "تجر"
imn[130] = "ترب"
imn[131] = "ترز"
imn[132] = "ترف"
imn[133] = "تسع"
imn[134] = "تعع"
imn[135] = "تفل"
imn[136] = "تلد"
imn[137] = "تلل"
imn[138] = "تمر"
imn[139] = "تنا"
imn[140] = "توب"
imn[141] = "توه"
imn[142] = "تيع"
imn[143] = "تيه"
imn[144] = "ثاط"
imn[145] = "ثبج"
imn[146] = "ثتن"
imn[147] = "ثرب"
imn[148] = "ثرم"
imn[149] = "ثعب"
imn[150] = "ثغر"
imn[151] = "ثفا"
imn[152] = "ثقل"
imn[153] = "ثكم"
imn[154] = "ثلج"
imn[155] = "ثلم"
imn[156] = "ثمغ"
imn[157] = "ثمم"
imn[158] = "ثني"
imn[159] = "ثوب"
imn[160] = "ثول"
imn[161] = "ثوي"
imn[162] = "جاف"
imn[163] = "جبب"
imn[164] = "جبر"
imn[165] = "جبل"
imn[166] = "جبي"
imn[167] = "جثم"
imn[168] = "جحر"
imn[169] = "جحف"
imn[170] = "جحم"
imn[171] = "جخر"
imn[172] = "جدح"
imn[173] = "جدد"
imn[174] = "جدع"
imn[175] = "جدل"
imn[176] = "جذب"
imn[177] = "جذع"
imn[178] = "جذي"
imn[179] = "جرب"
imn[180] = "جرح"
imn[181] = "جرد"
imn[182] = "جرر"
imn[183] = "جرز"
imn[184] = "جرش"
imn[185] = "جرف"
imn[186] = "جرم"
imn[187] = "جري"
imn[188] = "جزح"
imn[189] = "جزع"
imn[190] = "جزل"
imn[191] = "جسد"
imn[192] = "جشا"
imn[193] = "جشم"
imn[194] = "جعب"
imn[195] = "جعب"
imn[196] = "جفا"
imn[197] = "جفف"
imn[198] = "جفي"
imn[199] = "جلب"
imn[200] = "جلخ"
imn[201] = "جلد"
imn[202] = "جلط"
imn[203] = "جلق"
imn[204] = "جلل"
imn[205] = "جلي"
imn[206] = "جمح"
imn[207] = "جمر"
imn[208] = "جمع"
imn[209] = "جمع"
imn[210] = "جمل"
imn[211] = "جمم"
imn[212] = "جنب"
imn[213] = "جنح"
imn[214] = "جنس"
imn[215] = "جنن"
imn[216] = "جني"
imn[217] = "جهد"
imn[218] = "جهر"
imn[219] = "جهل"
imn[220] = "جوب"
imn[221] = "جود"
imn[222] = "جور"
imn[223] = "جوز"
imn[224] = "جوف"
imn[225] = "جول"
imn[226] = "جوي"
imn[227] = "جيد"
imn[228] = "جيف"
imn[229] = "حبب"
imn[230] = "حبر"
imn[231] = "حبض"
imn[232] = "حبل"
imn[233] = "حبي"
imn[234] = "حتر"
imn[235] = "حتم"
imn[236] = "حثل"
imn[237] = "حجج"
imn[238] = "حجر"
imn[239] = "حجل"
imn[240] = "حجي"
imn[241] = "حدث"
imn[242] = "حدد"
imn[243] = "حدد"
imn[244] = "حدس"
imn[245] = "حدي"
imn[246] = "حذف"
imn[247] = "حذل"
imn[248] = "حرب"
imn[249] = "حرث"
imn[250] = "حرد"
imn[251] = "حرر"
imn[252] = "حرز"
imn[253] = "حرش"
imn[254] = "حرف"
imn[255] = "حرق"
imn[256] = "حرم"
imn[257] = "حرم"
imn[258] = "حزب"
imn[259] = "حزق"
imn[260] = "حزن"
imn[261] = "حسب"
imn[262] = "حسر"
imn[263] = "حسس"
imn[264] = "حسن"
imn[265] = "حشا"
imn[266] = "حشش"
imn[267] = "حشم"
imn[268] = "حصب"
imn[269] = "حصر"
imn[270] = "حصص"
imn[271] = "حصل"
imn[272] = "حضب"
imn[273] = "حضر"
imn[274] = "حطب"
imn[275] = "حطط"
imn[276] = "حظظ"
imn[277] = "حفر"
imn[278] = "حفص"
imn[279] = "حفف"
imn[280] = "حفل"
imn[281] = "حقد"
imn[282] = "حقق"
imn[283] = "حقق"
imn[284] = "حكد"
imn[285] = "حكل"
imn[286] = "حكم"
imn[287] = "حلب"
imn[288] = "حلت"
imn[289] = "حلف"
imn[290] = "حلق"
imn[291] = "حلل"
imn[292] = "حلم"
imn[293] = "حمت"
imn[294] = "حمر"
imn[295] = "حمس"
imn[296] = "حمق"
imn[297] = "حمل"
imn[298] = "حمم"
imn[299] = "حمم"
imn[300] = "حمي"
imn[301] = "حنج"
imn[302] = "حنط"
imn[303] = "حنق"
imn[304] = "حنن"
imn[305] = "حوت"
imn[306] = "حور"
imn[307] = "حوز"
imn[308] = "حوص"
imn[309] = "حوق"
imn[310] = "حول"
imn[311] = "حول"
imn[312] = "حوي"
imn[313] = "حيز"
imn[314] = "حيق"
imn[315] = "حيي"
imn[316] = "حيي"
imn[317] = "خبث"
imn[318] = "خبر"
imn[319] = "خبص"
imn[320] = "خبل"
imn[321] = "ختر"
imn[322] = "ختم"
imn[323] = "خجا"
imn[324] = "خدج"
imn[325] = "خدر"
imn[326] = "خدم"
imn[327] = "خذف"
imn[328] = "خرب"
imn[329] = "خرج"
imn[330] = "خرج"
imn[331] = "خرس"
imn[332] = "خرط"
imn[333] = "خرع"
imn[334] = "خرق"
imn[335] = "خرم"
imn[336] = "خزز"
imn[337] = "خزل"
imn[338] = "خزي"
imn[339] = "خسف"
imn[340] = "خشش"
imn[341] = "خشل"
imn[342] = "خصر"
imn[343] = "خصص"
imn[344] = "خصم"
imn[345] = "خضر"
imn[346] = "خضر"
imn[347] = "خضم"
imn[348] = "خطب"
imn[349] = "خطر"
imn[350] = "خطط"
imn[351] = "خطف"
imn[352] = "خطم"
imn[353] = "خفر"
imn[354] = "خفض"
imn[355] = "خفف"
imn[356] = "خفي"
imn[357] = "خلب"
imn[358] = "خلد"
imn[359] = "خلص"
imn[360] = "خلط"
imn[361] = "خلف"
imn[362] = "خلف"
imn[363] = "خلق"
imn[364] = "خلل"
imn[365] = "خلل"
imn[366] = "خلي"
imn[367] = "خمر"
imn[368] = "خمس"
imn[369] = "خمل"
imn[370] = "خنث"
imn[371] = "خنز"
imn[372] = "خنف"
imn[373] = "خني"
imn[374] = "خور"
imn[375] = "خوض"
imn[376] = "خول"
imn[377] = "خوي"
imn[378] = "خير"
imn[379] = "خيط"
imn[380] = "خيل"
imn[381] = "خيم"
imn[382] = "داظ"
imn[383] = "دبب"
imn[384] = "دبر"
imn[385] = "دبر"
imn[386] = "دبل"
imn[387] = "دثر"
imn[388] = "دجل"
imn[389] = "دحب"
imn[390] = "دحق"
imn[391] = "دخر"
imn[392] = "دخل"
imn[393] = "دخن"
imn[394] = "درب"
imn[395] = "درج"
imn[396] = "درر"
imn[397] = "درس"
imn[398] = "درع"
imn[399] = "درك"
imn[400] = "دره"
imn[401] = "دسس"
imn[402] = "دسم"
imn[403] = "دعب"
imn[404] = "دعس"
imn[405] = "دعل"
imn[406] = "دعي"
imn[407] = "دغر"
imn[408] = "دفا"
imn[409] = "دفع"
imn[410] = "دفق"
imn[411] = "دقر"
imn[412] = "دقق"
imn[413] = "دقل"
imn[414] = "دكن"
imn[415] = "دلص"
imn[416] = "دلق"
imn[417] = "دلل"
imn[418] = "دلي"
imn[419] = "دمج"
imn[420] = "دمس"
imn[421] = "دمغ"
imn[422] = "دمم"
imn[423] = "دمي"
imn[424] = "دنخ"
imn[425] = "دنن"
imn[426] = "دهث"
imn[427] = "دهق"
imn[428] = "دهم"
imn[429] = "دوا"
imn[430] = "دور"
imn[431] = "دور"
imn[432] = "دوس"
imn[433] = "دول"
imn[434] = "دوم"
imn[435] = "دون"
imn[436] = "ديص"
imn[437] = "دين"
imn[438] = "دين"
imn[439] = "ذات"
imn[440] = "ذبب"
imn[441] = "ذبر"
imn[442] = "ذخر"
imn[443] = "ذرح"
imn[444] = "ذرع"
imn[445] = "ذري"
imn[446] = "ذعف"
imn[447] = "ذقط"
imn[448] = "ذكر"
imn[449] = "ذلج"
imn[450] = "ذلي"
imn[451] = "ذمم"
imn[452] = "ذنب"
imn[453] = "ذهل"
imn[454] = "ذوب"
imn[455] = "ذوي"
imn[456] = "ذيل"
imn[457] = "ذيم"
imn[458] = "راس"
imn[459] = "راف"
imn[460] = "راي"
imn[461] = "ربا"
imn[462] = "ربب"
imn[463] = "ربح"
imn[464] = "ربس"
imn[465] = "ربض"
imn[466] = "ربع"
imn[467] = "ربع"
imn[468] = "ربك"
imn[469] = "ربي"
imn[470] = "رتت"
imn[471] = "رتل"
imn[472] = "رثد"
imn[473] = "رثي"
imn[474] = "رجح"
imn[475] = "رجس"
imn[476] = "رجع"
imn[477] = "رجف"
imn[478] = "رجل"
imn[479] = "رجم"
imn[480] = "رجي"
imn[481] = "رحض"
imn[482] = "رحل"
imn[483] = "رخخ"
imn[484] = "رخم"
imn[485] = "ردد"
imn[486] = "ردا"
imn[487] = "ردع"
imn[488] = "ردف"
imn[489] = "ردد"
imn[490] = "رذل"
imn[491] = "رزز"
imn[492] = "رزف"
imn[493] = "رزن"
imn[494] = "رسس"
imn[495] = "رسل"
imn[496] = "رسم"
imn[497] = "رسن"
imn[498] = "رسح"
imn[499] = "رشش"
imn[500] = "رشن"
imn[501] = "رصد"
imn[502] = "رصف"
imn[503] = "رضح"
imn[504] = "رضع"
imn[505] = "رضي"
imn[506] = "رطل"
imn[507] = "رعب"
imn[508] = "رعش"
imn[509] = "رعل"
imn[510] = "رعي"
imn[511] = "رغب"
imn[512] = "رغم"
imn[513] = "رغي"
imn[514] = "رفد"
imn[515] = "رفض"
imn[516] = "رفع"
imn[517] = "رفف"
imn[518] = "رفل"
imn[519] = "رقب"
imn[520] = "رقد"
imn[521] = "رقص"
imn[522] = "رقق"
imn[523] = "رقق"
imn[524] = "رقي"
imn[525] = "ركب"
imn[526] = "ركد"
imn[527] = "ركس"
imn[528] = "ركك"
imn[529] = "ركن"
imn[530] = "ركي"
imn[531] = "رمد"
imn[532] = "رمش"
imn[533] = "رمع"
imn[534] = "رمك"
imn[535] = "رمم"
imn[536] = "رمي"
imn[537] = "رنع"
imn[538] = "رني"
imn[539] = "رهس"
imn[540] = "رهق"
imn[541] = "رهن"
imn[542] = "رهي"
imn[543] = "روب"
imn[544] = "روح"
imn[545] = "روح"
imn[546] = "روح"
imn[547] = "روز"
imn[548] = "روض"
imn[549] = "روغ"
imn[550] = "روق"
imn[551] = "روي"
imn[552] = "ريب"
imn[553] = "ريش"
imn[554] = "ريق"
imn[555] = "رين"
imn[556] = "رين"
imn[557] = "زام"
imn[558] = "زبد"
imn[559] = "زبر"
imn[560] = "زبل"
imn[561] = "زجج"
imn[562] = "زجو"
imn[563] = "زحل"
imn[564] = "زخر"
imn[565] = "زرب"
imn[566] = "زرر"
imn[567] = "زرف"
imn[568] = "زرم"
imn[569] = "زعب"
imn[570] = "زعق"
imn[571] = "زعم"
imn[572] = "زغر"
imn[573] = "زفر"
imn[574] = "زفف"
imn[575] = "زقق"
imn[576] = "زكك"
imn[577] = "زكي"
imn[578] = "زلخ"
imn[579] = "زلف"
imn[580] = "زلل"
imn[581] = "زمج"
imn[582] = "زمر"
imn[583] = "زمك"
imn[584] = "زمم"
imn[585] = "زنا"
imn[586] = "زند"
imn[587] = "زني"
imn[588] = "زهر"
imn[589] = "زهق"
imn[590] = "زهم"
imn[591] = "زوج"
imn[592] = "زور"
imn[593] = "زوع"
imn[594] = "زول"
imn[595] = "زوي"
imn[596] = "زيد"
imn[597] = "زيف"
imn[598] = "زين"
imn[599] = "زيي"
imn[600] = "سال"
imn[601] = "سبب"
imn[602] = "سبت"
imn[603] = "سبخ"
imn[604] = "سبر"
imn[605] = "سبع"
imn[606] = "سبق"
imn[607] = "سبل"
imn[608] = "سبي"
imn[609] = "ستل"
imn[610] = "سجر"
imn[611] = "سجل"
imn[612] = "سجم"
imn[613] = "سحب"
imn[614] = "سحح"
imn[615] = "سحط"
imn[616] = "سحل"
imn[617] = "سحي"
imn[618] = "سخل"
imn[619] = "سدح"
imn[620] = "سدر"
imn[621] = "سدل"
imn[622] = "سدي"
imn[623] = "سرب"
imn[624] = "سرح"
imn[625] = "سرر"
imn[626] = "سرر"
imn[627] = "سرع"
imn[628] = "سرق"
imn[629] = "سري"
imn[630] = "سطر"
imn[631] = "سطم"
imn[632] = "سعد"
imn[633] = "سعف"
imn[634] = "سعي"
imn[635] = "سفر"
imn[636] = "سفر"
imn[637] = "سفف"
imn[638] = "سفن"
imn[639] = "سفي"
imn[640] = "سقط"
imn[641] = "سقف"
imn[642] = "سقي"
imn[643] = "سكت"
imn[644] = "سكر"
imn[645] = "سكك"
imn[646] = "سكن"
imn[647] = "سلت"
imn[648] = "سلخ"
imn[649] = "سلط"
imn[650] = "سلط"
imn[651] = "سلف"
imn[652] = "سلق"
imn[653] = "سلل"
imn[654] = "سلم"
imn[655] = "سلم"
imn[656] = "سمت"
imn[657] = "سمد"
imn[658] = "سمر"
imn[659] = "سمع"
imn[660] = "سمع"
imn[661] = "سمل"
imn[662] = "سمم"
imn[663] = "سمه"
imn[664] = "سمي"
imn[665] = "سنح"
imn[666] = "سند"
imn[667] = "سنف"
imn[668] = "سنن"
imn[669] = "سنن"
imn[670] = "سني"
imn[671] = "سهر"
imn[672] = "سهل"
imn[673] = "سهم"
imn[674] = "سوا"
imn[675] = "سود"
imn[676] = "سود"
imn[677] = "سوس"
imn[678] = "سوغ"
imn[679] = "سوق"
imn[680] = "سوم"
imn[681] = "سوي"
imn[682] = "سوي"
imn[683] = "سيح"
imn[684] = "سير"
imn[685] = "سيف"
imn[686] = "سيل"
imn[687] = "شام"
imn[688] = "شبب"
imn[689] = "شبر"
imn[690] = "شبك"
imn[691] = "شبن"
imn[692] = "شتر"
imn[693] = "شجب"
imn[694] = "شجر"
imn[695] = "شجي"
imn[696] = "شحح"
imn[697] = "شحز"
imn[698] = "شحن"
imn[699] = "شخر"
imn[700] = "شخص"
imn[701] = "شدخ"
imn[702] = "شدد"
imn[703] = "شذب"
imn[704] = "شذذ"
imn[705] = "شرب"
imn[706] = "شرج"
imn[707] = "شرد"
imn[708] = "شرر"
imn[709] = "شرس"
imn[710] = "شرط"
imn[711] = "شرع"
imn[712] = "شرف"
imn[713] = "شرق"
imn[714] = "شرق"
imn[715] = "شرم"
imn[716] = "شري"
imn[717] = "شسس"
imn[718] = "شصص"
imn[719] = "شطر"
imn[720] = "شطط"
imn[721] = "شطن"
imn[722] = "شعب"
imn[723] = "شعث"
imn[724] = "شعر"
imn[725] = "شعف"
imn[726] = "شغب"
imn[727] = "شغل"
imn[728] = "شفر"
imn[729] = "شفف"
imn[730] = "شفه"
imn[731] = "شقذ"
imn[732] = "شقق"
imn[733] = "شقي"
imn[734] = "شكس"
imn[735] = "شكل"
imn[736] = "شكم"
imn[737] = "شلق"
imn[738] = "شمت"
imn[739] = "شمر"
imn[740] = "شمس"
imn[741] = "شمع"
imn[742] = "شمل"
imn[743] = "شنب"
imn[744] = "شنع"
imn[745] = "شنق"
imn[746] = "شهد"
imn[747] = "شهر"
imn[748] = "شهم"
imn[749] = "شوب"
imn[750] = "شور"
imn[751] = "شوظ"
imn[752] = "شوك"
imn[753] = "شول"
imn[754] = "شيا"
imn[755] = "شيد"
imn[756] = "شيع"
imn[757] = "شيم"
imn[758] = "شين"
imn[759] = "صبب"
imn[760] = "صبر"
imn[761] = "صبر"
imn[762] = "صبي"
imn[763] = "صحب"
imn[764] = "صحح"
imn[765] = "صحن"
imn[766] = "صخد"
imn[767] = "صدد"
imn[768] = "صدر"
imn[769] = "صدف"
imn[770] = "صدم"
imn[771] = "صرح"
imn[772] = "صرد"
imn[773] = "صرع"
imn[774] = "صرف"
imn[775] = "صرم"
imn[776] = "صري"
imn[777] = "صعد"
imn[778] = "صعق"
imn[779] = "صفح"
imn[780] = "صفر"
imn[781] = "صفر"
imn[782] = "صفق"
imn[783] = "صفي"
imn[784] = "صقب"
imn[785] = "صقع"
imn[786] = "صكك"
imn[787] = "صلب"
imn[788] = "صلح"
imn[789] = "صلد"
imn[790] = "صلق"
imn[791] = "صلل"
imn[792] = "صمت"
imn[793] = "صمر"
imn[794] = "صمل"
imn[795] = "صمي"
imn[796] = "صنع"
imn[797] = "صنع"
imn[798] = "صنم"
imn[799] = "صهر"
imn[800] = "صوب"
imn[801] = "صوح"
imn[802] = "صور"
imn[803] = "صوغ"
imn[804] = "صوم"
imn[805] = "صيح"
imn[806] = "صير"
imn[807] = "صيف"
imn[808] = "ضبا"
imn[809] = "ضبث"
imn[810] = "ضبط"
imn[811] = "ضجر"
imn[812] = "ضجم"
imn[813] = "ضحي"
imn[814] = "ضدد"
imn[815] = "ضرب"
imn[816] = "ضرب"
imn[817] = "ضرج"
imn[818] = "ضرر"
imn[819] = "ضرس"
imn[820] = "ضرع"
imn[821] = "ضري"
imn[822] = "ضعف"
imn[823] = "ضغط"
imn[824] = "ضفز"
imn[825] = "ضفي"
imn[826] = "ضلل"
imn[827] = "ضمد"
imn[828] = "ضمم"
imn[829] = "ضنا"
imn[830] = "ضهب"
imn[831] = "ضوا"
imn[832] = "ضوي"
imn[833] = "ضيف"
imn[834] = "ضيق"
imn[835] = "ضيم"
imn[836] = "طبب"
imn[837] = "طبز"
imn[838] = "طبع"
imn[839] = "طبق"
imn[840] = "طجن"
imn[841] = "طحم"
imn[842] = "طخخ"
imn[843] = "طرب"
imn[844] = "طرح"
imn[845] = "طرر"
imn[846] = "طرش"
imn[847] = "طرف"
imn[848] = "طرق"
imn[849] = "طرق"
imn[850] = "طرم"
imn[851] = "طسس"
imn[852] = "طعم"
imn[853] = "طعن"
imn[854] = "طفا"
imn[855] = "طفف"
imn[856] = "طفل"
imn[857] = "طلب"
imn[858] = "طلح"
imn[859] = "طلس"
imn[860] = "طلع"
imn[861] = "طلق"
imn[862] = "طلل"
imn[863] = "طلي"
imn[864] = "طمح"
imn[865] = "طمس"
imn[866] = "طمم"
imn[867] = "طنب"
imn[868] = "طهر"
imn[869] = "طوا"
imn[870] = "طور"
imn[871] = "طوع"
imn[872] = "طوق"
imn[873] = "طول"
imn[874] = "طيب"
imn[875] = "طيح"
imn[876] = "طير"
imn[877] = "طين"
imn[878] = "طين"
imn[879] = "ظرف"
imn[880] = "ظلع"
imn[881] = "ظلل"
imn[882] = "ظمي"
imn[883] = "ظهر"
imn[884] = "ظهر"
imn[885] = "ظوي"
imn[886] = "عبد"
imn[887] = "عبر"
imn[888] = "عبر"
imn[889] = "عبط"
imn[890] = "عبم"
imn[891] = "عتب"
imn[892] = "عتر"
imn[893] = "عتل"
imn[894] = "عثث"
imn[895] = "عثل"
imn[896] = "عجب"
imn[897] = "عجر"
imn[898] = "عجز"
imn[899] = "عجز"
imn[900] = "عجل"
imn[901] = "عجم"
imn[902] = "عجن"
imn[903] = "عدد"
imn[904] = "عدس"
imn[905] = "عدل"
imn[906] = "عدم"
imn[907] = "عدي"
imn[908] = "عدي"
imn[909] = "عذر"
imn[910] = "عذف"
imn[911] = "عرب"
imn[912] = "عرب"
imn[913] = "عرد"
imn[914] = "عرر"
imn[915] = "عرش"
imn[916] = "عرض"
imn[917] = "عرض"
imn[918] = "عرض"
imn[919] = "عرف"
imn[920] = "عرف"
imn[921] = "عرق"
imn[922] = "عرق"
imn[923] = "عرن"
imn[924] = "عري"
imn[925] = "عزر"
imn[926] = "عزز"
imn[927] = "عزل"
imn[928] = "عزي"
imn[929] = "عسر"
imn[930] = "عسف"
imn[931] = "عسل"
imn[932] = "عشر"
imn[933] = "عشش"
imn[934] = "عشي"
imn[935] = "عصب"
imn[936] = "عصر"
imn[937] = "عصف"
imn[938] = "عصم"
imn[939] = "عصي"
imn[940] = "عضد"
imn[941] = "عضل"
imn[942] = "عضي"
imn[943] = "عطس"
imn[944] = "عطف"
imn[945] = "عطن"
imn[946] = "عظم"
imn[947] = "عفت"
imn[948] = "عفر"
imn[949] = "عفف"
imn[950] = "عفي"
imn[951] = "عفي"
imn[952] = "عقب"
imn[953] = "عقد"
imn[954] = "عقر"
imn[955] = "عقش"
imn[956] = "عقل"
imn[957] = "عقم"
imn[958] = "عكد"
imn[959] = "عكش"
imn[960] = "عكك"
imn[961] = "علب"
imn[962] = "علز"
imn[963] = "علق"
imn[964] = "علك"
imn[965] = "علم"
imn[966] = "علم"
imn[967] = "عله"
imn[968] = "علي"
imn[969] = "عمد"
imn[970] = "عمر"
imn[971] = "عمر"
imn[972] = "عمل"
imn[973] = "عمل"
imn[974] = "عمم"
imn[975] = "عمي"
imn[976] = "عنج"
imn[977] = "عنش"
imn[978] = "عنق"
imn[979] = "عنن"
imn[980] = "عني"
imn[981] = "عهد"
imn[982] = "عود"
imn[983] = "عود"
imn[984] = "عور"
imn[985] = "عوس"
imn[986] = "عوق"
imn[987] = "عوم"
imn[988] = "عوه"
imn[989] = "عير"
imn[990] = "عيط"
imn[991] = "عين"
imn[992] = "عين"
imn[993] = "عيي"
imn[994] = "غبر"
imn[995] = "غبن"
imn[996] = "غثي"
imn[997] = "غدق"
imn[998] = "غرب"
imn[999] = "غرب"
imn[1000] = "غرر"
imn[1001] = "غرس"
imn[1002] = "غرف"
imn[1003] = "غرم"
imn[1004] = "غزز"
imn[1005] = "غسق"
imn[1006] = "غشش"
imn[1007] = "غصب"
imn[1008] = "غضض"
imn[1009] = "غضي"
imn[1010] = "غطف"
imn[1011] = "غفر"
imn[1012] = "غلب"
imn[1013] = "غلظ"
imn[1014] = "غلل"
imn[1015] = "غلي"
imn[1016] = "غمر"
imn[1017] = "غمس"
imn[1018] = "غمط"
imn[1019] = "غمن"
imn[1020] = "غنن"
imn[1021] = "غور"
imn[1022] = "غوز"
imn[1023] = "غول"
imn[1024] = "غيب"
imn[1025] = "غير"
imn[1026] = "غيظ"
imn[1027] = "غين"
imn[1028] = "غين"
imn[1029] = "فام"
imn[1030] = "فتح"
imn[1031] = "فتش"
imn[1032] = "فتك"
imn[1033] = "فتي"
imn[1034] = "فجج"
imn[1035] = "فجع"
imn[1036] = "فحص"
imn[1037] = "فخت"
imn[1038] = "فخز"
imn[1039] = "فدع"
imn[1040] = "فذذ"
imn[1041] = "فرج"
imn[1042] = "فرد"
imn[1043] = "فرر"
imn[1044] = "فرس"
imn[1045] = "فرش"
imn[1046] = "فرض"
imn[1047] = "فرط"
imn[1048] = "فرع"
imn[1049] = "فرغ"
imn[1050] = "فرق"
imn[1051] = "فرك"
imn[1052] = "فري"
imn[1053] = "فزع"
imn[1054] = "فسخ"
imn[1055] = "فسق"
imn[1056] = "فشش"
imn[1057] = "فصح"
imn[1058] = "فصل"
imn[1059] = "فضح"
imn[1060] = "فضض"
imn[1061] = "فضل"
imn[1062] = "فطح"
imn[1063] = "فطن"
imn[1064] = "فعل"
imn[1065] = "فغي"
imn[1066] = "فقر"
imn[1067] = "فقه"
imn[1068] = "فكك"
imn[1069] = "فلج"
imn[1070] = "فلز"
imn[1071] = "فلق"
imn[1072] = "فلي"
imn[1073] = "فند"
imn[1074] = "فنن"
imn[1075] = "فهم"
imn[1076] = "فود"
imn[1077] = "فوز"
imn[1078] = "فوق"
imn[1079] = "فوه"
imn[1080] = "فوي"
imn[1081] = "فيش"
imn[1082] = "فيل"
imn[1083] = "فين"
imn[1084] = "قبح"
imn[1085] = "قبص"
imn[1086] = "قبض"
imn[1087] = "قبل"
imn[1088] = "قبل"
imn[1089] = "قبي"
imn[1090] = "قتع"
imn[1091] = "قتل"
imn[1092] = "قحط"
imn[1093] = "قحي"
imn[1094] = "قدد"
imn[1095] = "قدر"
imn[1096] = "قدس"
imn[1097] = "قدم"
imn[1098] = "قدم"
imn[1099] = "قدي"
imn[1100] = "قذف"
imn[1101] = "قرا"
imn[1102] = "قرب"
imn[1103] = "قرث"
imn[1104] = "قرد"
imn[1105] = "قرر"
imn[1106] = "قرس"
imn[1107] = "قرص"
imn[1108] = "قرط"
imn[1109] = "قرع"
imn[1110] = "قرع"
imn[1111] = "قرق"
imn[1112] = "قرم"
imn[1113] = "قرن"
imn[1114] = "قرن"
imn[1115] = "قزح"
imn[1116] = "قزم"
imn[1117] = "قسط"
imn[1118] = "قسم"
imn[1119] = "قسي"
imn[1120] = "قشر"
imn[1121] = "قشع"
imn[1122] = "قشي"
imn[1123] = "قصد"
imn[1124] = "قصر"
imn[1125] = "قصر"
imn[1126] = "قصص"
imn[1127] = "قصل"
imn[1128] = "قضا"
imn[1129] = "قضع"
imn[1130] = "قضي"
imn[1131] = "قطب"
imn[1132] = "قطر"
imn[1133] = "قطع"
imn[1134] = "قطع"
imn[1135] = "قطع"
imn[1136] = "قطن"
imn[1137] = "قعد"
imn[1138] = "قعر"
imn[1139] = "قعض"
imn[1140] = "قعف"
imn[1141] = "قفز"
imn[1142] = "قفع"
imn[1143] = "قفل"
imn[1144] = "قفي"
imn[1145] = "قلب"
imn[1146] = "قلب"
imn[1147] = "قلد"
imn[1148] = "قلس"
imn[1149] = "قلع"
imn[1150] = "قلف"
imn[1151] = "قلل"
imn[1152] = "قلل"
imn[1153] = "قلي"
imn[1154] = "قمح"
imn[1155] = "قمر"
imn[1156] = "قمش"
imn[1157] = "قمع"
imn[1158] = "قمع"
imn[1159] = "قمه"
imn[1160] = "قنب"
imn[1161] = "قنح"
imn[1162] = "قنع"
imn[1163] = "قنع"
imn[1164] = "قنن"
imn[1165] = "قني"
imn[1166] = "قهر"
imn[1167] = "قهم"
imn[1168] = "قوح"
imn[1169] = "قور"
imn[1170] = "قوس"
imn[1171] = "قول"
imn[1172] = "قوم"
imn[1173] = "قوم"
imn[1174] = "قوم"
imn[1175] = "قوي"
imn[1176] = "قيا"
imn[1177] = "قيس"
imn[1178] = "قيظ"
imn[1179] = "قين"
imn[1180] = "قين"
imn[1181] = "كاص"
imn[1182] = "كبد"
imn[1183] = "كبر"
imn[1184] = "كبس"
imn[1185] = "كبع"
imn[1186] = "كتت"
imn[1187] = "كتب"
imn[1188] = "كتع"
imn[1189] = "كتم"
imn[1190] = "كثب"
imn[1191] = "كثر"
imn[1192] = "كثف"
imn[1193] = "كحل"
imn[1194] = "كدد"
imn[1195] = "كدش"
imn[1196] = "كدي"
imn[1197] = "كرب"
imn[1198] = "كرب"
imn[1199] = "كرد"
imn[1200] = "كرز"
imn[1201] = "كرش"
imn[1202] = "كرف"
imn[1203] = "كرم"
imn[1204] = "كره"
imn[1205] = "كري"
imn[1206] = "كسب"
imn[1207] = "كسر"
imn[1208] = "كسر"
imn[1209] = "كسف"
imn[1210] = "كشب"
imn[1211] = "كشط"
imn[1212] = "كشف"
imn[1213] = "كظظ"
imn[1214] = "كعب"
imn[1215] = "كعم"
imn[1216] = "كفت"
imn[1217] = "كفر"
imn[1218] = "كفس"
imn[1219] = "كفف"
imn[1220] = "كفل"
imn[1221] = "كلي"
imn[1222] = "كلب"
imn[1223] = "كلب"
imn[1224] = "كلع"
imn[1225] = "كلف"
imn[1226] = "كلل"
imn[1227] = "كلم"
imn[1228] = "كمح"
imn[1229] = "كمش"
imn[1230] = "كمن"
imn[1231] = "كنب"
imn[1232] = "كنز"
imn[1233] = "كنع"
imn[1234] = "كنن"
imn[1235] = "كهر"
imn[1236] = "كهن"
imn[1237] = "كوح"
imn[1238] = "كور"
imn[1239] = "كوف"
imn[1240] = "كوف"
imn[1241] = "كوي"
imn[1242] = "كيس"
imn[1243] = "كيف"
imn[1244] = "كيه"
imn[1245] = "لاف"
imn[1246] = "لبا"
imn[1247] = "لبج"
imn[1248] = "لبد"
imn[1249] = "لبس"
imn[1250] = "لبق"
imn[1251] = "لبن"
imn[1252] = "لتت"
imn[1253] = "لثط"
imn[1254] = "لجا"
imn[1255] = "لجف"
imn[1256] = "لحب"
imn[1257] = "لحز"
imn[1258] = "لحظ"
imn[1259] = "لحك"
imn[1260] = "لحن"
imn[1261] = "لخب"
imn[1262] = "لدد"
imn[1263] = "لدن"
imn[1264] = "لزب"
imn[1265] = "لزم"
imn[1266] = "لسق"
imn[1267] = "لصص"
imn[1268] = "لطس"
imn[1269] = "لطف"
imn[1270] = "لظي"
imn[1271] = "لعج"
imn[1272] = "لعط"
imn[1273] = "لعق"
imn[1274] = "لغد"
imn[1275] = "لغي"
imn[1276] = "لفت"
imn[1277] = "لقع"
imn[1278] = "لفف"
imn[1279] = "لفي"
imn[1280] = "لقص"
imn[1281] = "لقف"
imn[1282] = "لقي"
imn[1283] = "لكا"
imn[1284] = "لكك"
imn[1285] = "لمج"
imn[1286] = "لمس"
imn[1287] = "لمظ"
imn[1288] = "لمك"
imn[1289] = "لمي"
imn[1290] = "لهث"
imn[1291] = "لهز"
imn[1292] = "لهق"
imn[1293] = "لهي"
imn[1294] = "لوث"
imn[1295] = "لوح"
imn[1296] = "لوس"
imn[1297] = "لوع"
imn[1298] = "لوم"
imn[1299] = "لوي"
imn[1300] = "ليت"
imn[1301] = "ليف"
imn[1302] = "لين"
imn[1303] = "ليه"
imn[1304] = "ماس"
imn[1305] = "متا"
imn[1306] = "متع"
imn[1307] = "متل"
imn[1308] = "مثج"
imn[1309] = "مثل"
imn[1310] = "مجح"
imn[1311] = "مجع"
imn[1312] = "محز"
imn[1313] = "محط"
imn[1314] = "محل"
imn[1315] = "محي"
imn[1316] = "مخض"
imn[1317] = "مدد"
imn[1318] = "مدد"
imn[1319] = "مدش"
imn[1320] = "مده"
imn[1321] = "مذل"
imn[1322] = "مرج"
imn[1323] = "مرخ"
imn[1324] = "مرر"
imn[1325] = "مرز"
imn[1326] = "مرض"
imn[1327] = "مرط"
imn[1328] = "مرق"
imn[1329] = "مرن"
imn[1330] = "مزج"
imn[1331] = "مزع"
imn[1332] = "مسا"
imn[1333] = "مسح"
imn[1334] = "مسس"
imn[1335] = "مسك"
imn[1336] = "مشر"
imn[1337] = "مشط"
imn[1338] = "مشق"
imn[1339] = "مشي"
imn[1340] = "مصص"
imn[1341] = "مضر"
imn[1342] = "مضي"
imn[1343] = "مطر"
imn[1344] = "مطل"
imn[1345] = "مظظ"
imn[1346] = "معس"
imn[1347] = "معل"
imn[1348] = "معي"
imn[1349] = "مغط"
imn[1350] = "مقط"
imn[1351] = "مقه"
imn[1352] = "مكل"
imn[1353] = "ملا"
imn[1354] = "ملح"
imn[1355] = "ملح"
imn[1356] = "ملس"
imn[1357] = "ملع"
imn[1358] = "ملك"
imn[1359] = "ملل"
imn[1360] = "ملي"
imn[1361] = "منن"
imn[1362] = "مني"
imn[1363] = "مهش"
imn[1364] = "مهن"
imn[1365] = "موت"
imn[1366] = "موج"
imn[1367] = "موق"
imn[1368] = "موه"
imn[1369] = "ميح"
imn[1370] = "ميز"
imn[1371] = "ميع"
imn[1372] = "ميل"
imn[1373] = "ميه"
imn[1374] = "ناف"
imn[1375] = "نبا"
imn[1376] = "نبج"
imn[1377] = "نبذ"
imn[1378] = "نبش"
imn[1379] = "نبع"
imn[1380] = "نبل"
imn[1381] = "نبي"
imn[1382] = "نتح"
imn[1383] = "نتف"
imn[1384] = "نثث"
imn[1385] = "نثط"
imn[1386] = "نثج"
imn[1387] = "نجد"
imn[1388] = "نجذ"
imn[1389] = "نجس"
imn[1390] = "نجف"
imn[1391] = "نجم"
imn[1392] = "نجي"
imn[1393] = "نجب"
imn[1394] = "نحر"
imn[1395] = "نحض"
imn[1396] = "نحم"
imn[1397] = "نخب"
imn[1398] = "نخر"
imn[1399] = "نخع"
imn[1400] = "ندب"
imn[1401] = "ندد"
imn[1402] = "ندس"
imn[1403] = "ندم"
imn[1404] = "ندي"
imn[1405] = "نذل"
imn[1406] = "نزر"
imn[1407] = "نزع"
imn[1408] = "نزق"
imn[1409] = "نزل"
imn[1410] = "نزي"
imn[1411] = "نسب"
imn[1412] = "نسخ"
imn[1413] = "نسغ"
imn[1414] = "نسف"
imn[1415] = "نسل"
imn[1416] = "نشا"
imn[1417] = "نشد"
imn[1418] = "نشز"
imn[1419] = "نشط"
imn[1420] = "نشغ"
imn[1421] = "نشل"
imn[1422] = "نصا"
imn[1423] = "نصب"
imn[1424] = "نصر"
imn[1425] = "نصع"
imn[1426] = "نصل"
imn[1427] = "نضب"
imn[1428] = "نضد"
imn[1429] = "نضض"
imn[1430] = "نطح"
imn[1431] = "نطف"
imn[1432] = "نطق"
imn[1433] = "نظر"
imn[1434] = "نظر"
imn[1435] = "نعب"
imn[1436] = "نعر"
imn[1437] = "نعق"
imn[1438] = "نعم"
imn[1439] = "نعي"
imn[1440] = "نغض"
imn[1441] = "نفث"
imn[1442] = "نفخ"
imn[1443] = "نفذ"
imn[1444] = "نفر"
imn[1445] = "نفس"
imn[1446] = "نفس"
imn[1447] = "نفض"
imn[1448] = "نفع"
imn[1449] = "نفل"
imn[1450] = "نفي"
imn[1451] = "نقت"
imn[1452] = "نقذ"
imn[1453] = "نقر"
imn[1454] = "نقس"
imn[1455] = "نقض"
imn[1456] = "نقع"
imn[1457] = "نقف"
imn[1458] = "نقل"
imn[1459] = "نكب"
imn[1460] = "نكث"
imn[1461] = "نكر"
imn[1462] = "نكص"
imn[1463] = "نكل"
imn[1464] = "نمس"
imn[1465] = "نمل"
imn[1466] = "نمي"
imn[1467] = "نهج"
imn[1468] = "نهر"
imn[1469] = "نهش"
imn[1470] = "نهل"
imn[1471] = "نهي"
imn[1472] = "نوب"
imn[1473] = "نوح"
imn[1474] = "نور"
imn[1475] = "نوض"
imn[1476] = "نوف"
imn[1477] = "نول"
imn[1478] = "نوم"
imn[1479] = "نوي"
imn[1480] = "نيك"
imn[1481] = "نيه"
imn[1482] = "هبد"
imn[1483] = "هبر"
imn[1484] = "هبغ"
imn[1485] = "هبل"
imn[1486] = "هتف"
imn[1487] = "هتي"
imn[1488] = "هجد"
imn[1489] = "هجر"
imn[1490] = "هجل"
imn[1491] = "هجن"
imn[1492] = "هدا"
imn[1493] = "هدد"
imn[1494] = "هدف"
imn[1495] = "هدن"
imn[1496] = "هدي"
imn[1497] = "هذذ"
imn[1498] = "هذي"
imn[1499] = "هرج"
imn[1500] = "هرز"
imn[1501] = "هرع"
imn[1502] = "هرم"
imn[1503] = "هزا"
imn[1504] = "هزق"
imn[1505] = "هزم"
imn[1506] = "هشم"
imn[1507] = "هضض"
imn[1508] = "هطر"
imn[1509] = "هفف"
imn[1510] = "هقي"
imn[1511] = "هكك"
imn[1512] = "هلج"
imn[1513] = "هلك"
imn[1514] = "هلل"
imn[1515] = "هما"
imn[1516] = "همر"
imn[1517] = "همش"
imn[1518] = "همل"
imn[1519] = "همم"
imn[1520] = "هنا"
imn[1521] = "هنع"
imn[1522] = "هود"
imn[1523] = "هوس"
imn[1524] = "هول"
imn[1525] = "هون"
imn[1526] = "هوي"
imn[1527] = "هيث"
imn[1528] = "هيص"
imn[1529] = "هيف"
imn[1530] = "هيم"
imn[1531] = "وال"
imn[1532] = "وبر"
imn[1533] = "وبل"
imn[1534] = "وتر"
imn[1535] = "وثخ"
imn[1536] = "وثم"
imn[1537] = "وجب"
imn[1538] = "وجد"
imn[1539] = "وجع"
imn[1540] = "وجه"
imn[1541] = "وجه"
imn[1542] = "وحد"
imn[1543] = "وحش"
imn[1544] = "وحم"
imn[1545] = "وخش"
imn[1546] = "ودا"
imn[1547] = "ودع"
imn[1548] = "ودق"
imn[1549] = "وذا"
imn[1550] = "ورث"
imn[1551] = "ورد"
imn[1552] = "ورع"
imn[1553] = "ورق"
imn[1554] = "وري"
imn[1555] = "وزع"
imn[1556] = "عزن"
imn[1557] = "وسط"
imn[1558] = "وسق"
imn[1559] = "وسن"
imn[1560] = "وشك"
imn[1561] = "وشي"
imn[1562] = "وصل"
imn[1563] = "وصي"
imn[1564] = "وضع"
imn[1565] = "وضي"
imn[1566] = "وطف"
imn[1567] = "وعث"
imn[1568] = "وعك"
imn[1569] = "وغب"
imn[1570] = "وفد"
imn[1571] = "وفق"
imn[1572] = "وفي"
imn[1573] = "وقر"
imn[1574] = "وقع"
imn[1575] = "وقع"
imn[1576] = "وقم"
imn[1577] = "وكت"
imn[1578] = "وكع"
imn[1579] = "وكي"
imn[1580] = "ولد"
imn[1581] = "وله"
imn[1582] = "ولي"
imn[1583] = "ومه"
imn[1584] = "وهر"
imn[1585] = "وهم"
imn[1586] = "وهي"
imn[1587] = "يدي"
imn[1588] = "يسر"
imn[1589] = "يقظ"
imn[1590] = "يمن"
imn[1591] = "ينع"
imn[1592] = "end"
imn[1593] = "end"
imn[1594] = "end"
