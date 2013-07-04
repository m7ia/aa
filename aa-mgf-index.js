﻿function mgf_get_img_url ( page) {
	if ( page < 1) page = 1;
	if ( page > mgf.length - 1) page = mgf.length - 1;
	cur_mgf_page = page;
	var p = page;
	var prefixed_page = p;
	if ( p < 10) prefixed_page = "000" + p;
	else if ( p < 100) prefixed_page = "00" + p;
	else if ( p < 1000) prefixed_page = "0" + p;
	return "mgf/" + Math.floor(page/100) + "/mgf-" + prefixed_page + ".png";
}

var mgf=[];

mgf[33] = "ا"
mgf[34] = "ا"
mgf[35] = "ابق"
mgf[36] = "ابي"
mgf[37] = "اتي"
mgf[38] = "اثم"
mgf[39] = "اج"
mgf[40] = "اجل"
mgf[41] = "اخذ"
mgf[42] = "اخذ"
mgf[43] = "اخر"
mgf[44] = "اخى"
mgf[45] = "اذ"
mgf[46] = "اذا"
mgf[47] = "اذن"
mgf[48] = "ارب"
mgf[49] = "ارك"
mgf[50] = "اسس"
mgf[51] = "اسن"
mgf[52] = "اصر"
mgf[53] = "اف"
mgf[54] = "افك"
mgf[55] = "اكل"
mgf[56] = "ال"
mgf[57] = "ال"
mgf[58] = "الف"
mgf[59] = "اله"
mgf[60] = "الو"
mgf[61] = "الو"
mgf[62] = "ام"
mgf[63] = "ام"
mgf[64] = "ام"
mgf[65] = "اما"
mgf[66] = "امر"
mgf[67] = "امر"
mgf[68] = "امن"
mgf[69] = "امن"
mgf[70] = "ان"
mgf[71] = "ان"
mgf[72] = "انس"
mgf[73] = "انس"
mgf[74] = "اني"
mgf[75] = "اهل"
mgf[76] = "اوب"
mgf[77] = "اول"
mgf[78] = "اوي"
mgf[79] = "اوي"
mgf[80] = "ايا"
mgf[81] = "آم"
mgf[82] = "آم"
mgf[83] = "ب"
mgf[84] = "ب"
mgf[85] = "باس"
mgf[86] = "بتر"
mgf[87] = "بجس"
mgf[88] = "بخس"
mgf[89] = "بدا"
mgf[90] = "بدع"
mgf[91] = "بدن"
mgf[92] = "بذر"
mgf[93] = "بر"
mgf[94] = "برا"
mgf[95] = "برج"
mgf[96] = "برز"
mgf[97] = "برق"
mgf[98] = "برك"
mgf[99] = "بسر"
mgf[100] = "بسق"
mgf[101] = "بشر"
mgf[102] = "بشر"
mgf[103] = "بصر"
mgf[104] = "بضع"
mgf[105] = "بطر"
mgf[106] = "بطل"
mgf[107] = "بطن"
mgf[108] = "بعث"
mgf[109] = "بعد"
mgf[110] = "بعر"
mgf[111] = "بغض"
mgf[112] = "بغي"
mgf[113] = "بقر"
mgf[114] = "بقي"
mgf[115] = "بكر"
mgf[116] = "بل"
mgf[117] = "بلس"
mgf[118] = "بلغ"
mgf[119] = "بلو"
mgf[120] = "بلي"
mgf[121] = "بني"
mgf[122] = "بهج"
mgf[123] = "بهم"
mgf[124] = "بول"
mgf[125] = "بيت"
mgf[126] = "بيع"
mgf[127] = "بين"
mgf[128] = "بين"
mgf[129] = "بين"
mgf[130] = "ت"
mgf[131] = "ت"
mgf[132] = "ت"
mgf[133] = "تب"
mgf[134] = "تبع"
mgf[135] = "ترب"
mgf[136] = "ترك"
mgf[137] = "تل"
mgf[138] = "تم"
mgf[139] = "توب"
mgf[140] = "توه"
mgf[141] = "ث"
mgf[142] = "ث"
mgf[143] = "ثبت"
mgf[144] = "ثبي"
mgf[145] = "ثرب"
mgf[146] = "ثقف"
mgf[147] = "ثقل"
mgf[148] = "ثلث"
mgf[149] = "ثمن"
mgf[150] = "ثنى"
mgf[151] = "ثوب"
mgf[152] = "ثوي"
mgf[153] = "ثيب"
mgf[154] = "ج"
mgf[155] = "ج"
mgf[156] = "جبر"
mgf[157] = "جبل"
mgf[158] = "جث"
mgf[159] = "جحد"
mgf[160] = "جد"
mgf[161] = "جدل"
mgf[162] = "جذا"
mgf[163] = "جرز"
mgf[164] = "جرم"
mgf[165] = "جري"
mgf[166] = "جزي"
mgf[167] = "جس"
mgf[168] = "جعل"
mgf[169] = "جفن"
mgf[170] = "جلب"
mgf[171] = "جلب"
mgf[172] = "جمد"
mgf[173] = "جمع"
mgf[174] = "جمع"
mgf[175] = "جمل"
mgf[176] = "جن"
mgf[177] = "جنب"
mgf[178] = "جنب"
mgf[179] = "جنح"
mgf[180] = "جنف"
mgf[181] = "جهد"
mgf[182] = "جهر"
mgf[183] = "جهل"
mgf[184] = "جهنم"
mgf[185] = "جهنم"
mgf[186] = "جود"
mgf[187] = "جور"
mgf[188] = "جوز"
mgf[189] = "جيد"
mgf[190] = "ح"
mgf[191] = "ح"
mgf[192] = "حبر"
mgf[193] = "حبك"
mgf[194] = "حتي"
mgf[195] = "حج"
mgf[196] = "حجب"
mgf[197] = "حجر"
mgf[198] = "حد"
mgf[199] = "حدث"
mgf[200] = "حذر"
mgf[201] = "حذر"
mgf[202] = "حر"
mgf[203] = "حرب"
mgf[204] = "حرج"
mgf[205] = "حرص"
mgf[206] = "حرف"
mgf[207] = "حرم"
mgf[208] = "حرم"
mgf[209] = "حري"
mgf[210] = "حزن"
mgf[211] = "حسب"
mgf[212] = "حسب"
mgf[213] = "حسر"
mgf[214] = "حسم"
mgf[215] = "حسن"
mgf[216] = "حصب"
mgf[217] = "حصد"
mgf[218] = "حصر"
mgf[219] = "حصن"
mgf[220] = "حضا"
mgf[221] = "حضر"
mgf[222] = "حطم"
mgf[223] = "حطم"
mgf[224] = "حف"
mgf[225] = "حفي"
mgf[226] = "حفي"
mgf[227] = "حقا"
mgf[228] = "حكم"
mgf[229] = "حكم"
mgf[230] = "حلق"
mgf[231] = "حلي"
mgf[232] = "حما"
mgf[233] = "حمر"
mgf[234] = "حمل"
mgf[235] = "حمل"
mgf[236] = "حنث"
mgf[237] = "حنث"
mgf[238] = "حنى"
mgf[239] = "حوج"
mgf[240] = "حور"
mgf[241] = "حوط"
mgf[242] = "حول"
mgf[243] = "حيث"
mgf[244] = "حيص"
mgf[245] = "حيي"
mgf[246] = "حيي"
mgf[247] = "حيي"
mgf[248] = "حيي"
mgf[249] = "خ"
mgf[250] = "خ"
mgf[251] = "خبث"
mgf[252] = "خبز"
mgf[253] = "خبو"
mgf[254] = "ختم"
mgf[255] = "خدع"
mgf[256] = "خذل"
mgf[257] = "خرج"
mgf[258] = "خردل"
mgf[259] = "خزن"
mgf[260] = "خسا"
mgf[261] = "خسر"
mgf[262] = "خسف"
mgf[263] = "خشع"
mgf[264] = "خص"
mgf[265] = "خصم"
mgf[266] = "خضر"
mgf[267] = "خطا"
mgf[268] = "خطب"
mgf[269] = "خطب"
mgf[270] = "خفة"
mgf[271] = "خفض"
mgf[272] = "خفي"
mgf[273] = "خلد"
mgf[274] = "خلص"
mgf[275] = "خلط"
mgf[276] = "خلف"
mgf[277] = "خلف"
mgf[278] = "خلف"
mgf[279] = "خلف"
mgf[280] = "خلق"
mgf[281] = "خلو"
mgf[282] = "خمس"
mgf[283] = "خنس"
mgf[284] = "خوض"
mgf[285] = "خوف"
mgf[286] = "خول"
mgf[287] = "خوي"
mgf[288] = "خيز"
mgf[289] = "خيط"
mgf[290] = "خيم"
mgf[291] = "د"
mgf[292] = "د"
mgf[293] = "دبب"
mgf[294] = "دبر"
mgf[295] = "دحر"
mgf[296] = "دخل"
mgf[297] = "دخل"
mgf[298] = "درا"
mgf[299] = "درس"
mgf[300] = "درك"
mgf[301] = "دري"
mgf[302] = "دعا"
mgf[303] = "دفئ"
mgf[304] = "دكك"
mgf[305] = "دلك"
mgf[306] = "دمم"
mgf[307] = "دمم"
mgf[308] = "دنا"
mgf[309] = "دهر"
mgf[310] = "دهن"
mgf[311] = "دور"
mgf[312] = "دور"
mgf[313] = "دوم"
mgf[314] = "دين"
mgf[315] = "دين"
mgf[316] = "دين"
mgf[317] = "ذ"
mgf[318] = "ذ"
mgf[319] = "ذا"
mgf[320] = "ذبذب"
mgf[321] = "ذرر"
mgf[322] = "ذرع"
mgf[323] = "ذقن"
mgf[324] = "ذكر"
mgf[325] = "ذكر"
mgf[326] = "ذل"
mgf[327] = "ذلل"
mgf[328] = "ذمم"
mgf[329] = "ذهب"
mgf[330] = "ذهل"
mgf[331] = "ذوق"
mgf[332] = "ذيع"
mgf[333] = "ر"
mgf[334] = "ر"
mgf[335] = "راف"
mgf[336] = "راي"
mgf[337] = "راي"
mgf[338] = "ربب"
mgf[339] = "ربب"
mgf[340] = "ربص"
mgf[341] = "ربط"
mgf[342] = "ربو"
mgf[343] = "رتق"
mgf[344] = "رجز"
mgf[345] = "رجع"
mgf[346] = "رجع"
mgf[347] = "رجل"
mgf[348] = "رجم"
mgf[349] = "رجو"
mgf[350] = "رحل"
mgf[351] = "رحم"
mgf[352] = "رخي"
mgf[353] = "ردد"
mgf[354] = "ردي"
mgf[355] = "رزق"
mgf[356] = "رسخ"
mgf[357] = "رسل"
mgf[358] = "رسو"
mgf[359] = "رشد"
mgf[360] = "رضع"
mgf[361] = "رضع"
mgf[362] = "رضي"
mgf[363] = "رعد"
mgf[364] = "رغب"
mgf[365] = "رغم"
mgf[366] = "رفث"
mgf[367] = "رفع"
mgf[368] = "رفق"
mgf[369] = "رقب"
mgf[370] = "رقم"
mgf[371] = "ركب"
mgf[372] = "ركض"
mgf[373] = "ركن"
mgf[374] = "رمح"
mgf[375] = "رمض"
mgf[376] = "رهب"
mgf[377] = "رهق"
mgf[380] = "رهي"
mgf[378] = "روح"
mgf[379] = "روح"
mgf[381] = "رود"
mgf[382] = "ريب"
mgf[383] = "ريش"
mgf[384] = "رين"
mgf[385] = "ز"
mgf[386] = "ز"
mgf[387] = "زبن"
mgf[388] = "زجر"
mgf[389] = "زحف"
mgf[390] = "زرع"
mgf[391] = "زعم"
mgf[392] = "زقق"
mgf[393] = "زكا"
mgf[394] = "زلف"
mgf[395] = "زلم"
mgf[396] = "زنم"
mgf[397] = "زهد"
mgf[398] = "زوج"
mgf[399] = "زور"
mgf[400] = "زيت"
mgf[401] = "زيل"
mgf[402] = "زين"
mgf[403] = "س"
mgf[404] = "س"
mgf[405] = "سأل"
mgf[406] = "سبب"
mgf[407] = "سبت"
mgf[408] = "سبح"
mgf[409] = "سبط"
mgf[410] = "سبغ"
mgf[411] = "سبق"
mgf[412] = "سبل"
mgf[413] = "سجد"
mgf[414] = "سجر"
mgf[415] = "سجو"
mgf[416] = "سحر"
mgf[417] = "سحر"
mgf[418] = "سحل"
mgf[419] = "سخر"
mgf[420] = "سدر"
mgf[421] = "سر"
mgf[422] = "سرب"
mgf[423] = "سرد"
mgf[424] = "سرف"
mgf[425] = "سري"
mgf[426] = "سطر"
mgf[427] = "سعر"
mgf[428] = "سفح"
mgf[429] = "سفر"
mgf[430] = "سفن"
mgf[431] = "سقط"
mgf[432] = "سقي"
mgf[433] = "سكب"
mgf[434] = "سكن"
mgf[435] = "سل"
mgf[436] = "سلخ"
mgf[437] = "سلط"
mgf[438] = "سلك"
mgf[439] = "سلم"
mgf[440] = "سلم"
mgf[441] = "سمر"
mgf[442] = "سمع"
mgf[443] = "سمع"
mgf[444] = "سمن"
mgf[445] = "سمو"
mgf[446] = "سن"
mgf[447] = "سند"
mgf[448] = "سنو"
mgf[449] = "سهل"
mgf[450] = "سوء"
mgf[451] = "سوء"
mgf[452] = "سود"
mgf[453] = "سوط"
mgf[454] = "سوع"
mgf[455] = "سوق"
mgf[456] = "سوم"
mgf[457] = "سوي"
mgf[458] = "سوي"
mgf[459] = "سير"
mgf[460] = "سيل"
mgf[461] = "ش"
mgf[462] = "ش"
mgf[463] = "شبه"
mgf[464] = "شجر"
mgf[465] = "شخص"
mgf[466] = "شدد"
mgf[467] = "شرب"
mgf[468] = "شرح"
mgf[469] = "شرع"
mgf[470] = "شرق"
mgf[471] = "شرك"
mgf[472] = "شطا"
mgf[473] = "شطن"
mgf[474] = "شعب"
mgf[475] = "شعر"
mgf[476] = "شفع"
mgf[477] = "شفق"
mgf[478] = "شفه"
mgf[479] = "شق"
mgf[480] = "شك"
mgf[481] = "شكر"
mgf[482] = "شكس"
mgf[483] = "شمت"
mgf[484] = "شمس"
mgf[485] = "شهد"
mgf[486] = "شهد"
mgf[487] = "شهد"
mgf[488] = "شهى"
mgf[489] = "شور"
mgf[490] = "شوي"
mgf[491] = "شيب"
mgf[492] = "شيد"
mgf[493] = "شيع"
mgf[494] = "شيع"
mgf[495] = "ص"
mgf[496] = "ص"
mgf[497] = "صبا"
mgf[498] = "صبح"
mgf[499] = "صبر"
mgf[500] = "صبع"
mgf[501] = "صبو"
mgf[502] = "صحب"
mgf[503] = "صدد"
mgf[504] = "صدر"
mgf[505] = "صدع"
mgf[506] = "صدف"
mgf[507] = "صدق"
mgf[508] = "صدق"
mgf[509] = "صرر"
mgf[510] = "صرع"
mgf[511] = "صرف"
mgf[512] = "صعد"
mgf[513] = "صعق"
mgf[514] = "صغا"
mgf[515] = "صفح"
mgf[516] = "صفن"
mgf[517] = "صكك"
mgf[518] = "صلح"
mgf[519] = "صلد"
mgf[520] = "صلي"
mgf[521] = "صلي"
mgf[522] = "صمد"
mgf[523] = "صنع"
mgf[524] = "صنع"
mgf[525] = "صهر"
mgf[526] = "صوب"
mgf[527] = "صوب"
mgf[528] = "صوم"
mgf[529] = "صيح"
mgf[530] = "صيف"
mgf[531] = "ض"
mgf[532] = "ض"
mgf[533] = "ضحك"
mgf[534] = "ضر"
mgf[535] = "ضرب"
mgf[536] = "ضرب"
mgf[537] = "ضرع"
mgf[538] = "ضعف"
mgf[539] = "ضغن"
mgf[540] = "ضلل"
mgf[541] = "ضلل"
mgf[542] = "ضنك"
mgf[543] = "ضير"
mgf[544] = "ضيق"
mgf[545] = "ضيق"
mgf[546] = "ضيق"
mgf[547] = "ط"
mgf[548] = "ط"
mgf[549] = "طبق"
mgf[550] = "طرف"
mgf[551] = "طرق"
mgf[552] = "طعم"
mgf[553] = "طغا"
mgf[554] = "طغي"
mgf[555] = "طفل"
mgf[556] = "طلح"
mgf[557] = "طلع"
mgf[558] = "طمس"
mgf[559] = "طمع"
mgf[560] = "طهر"
mgf[561] = "طود"
mgf[562] = "طوع"
mgf[563] = "طوف"
mgf[564] = "طوق"
mgf[565] = "طوي"
mgf[566] = "طيب"
mgf[567] = "طير"
mgf[568] = "طين"
mgf[569] = "ظ"
mgf[570] = "ظ"
mgf[571] = "ظلل"
mgf[572] = "ظلم"
mgf[573] = "ظمئ"
mgf[574] = "ظهر"
mgf[575] = "ظهر"
mgf[576] = "ظهر"
mgf[577] = "ع"
mgf[578] = "ع"
mgf[579] = "عبد"
mgf[580] = "عبر"
mgf[581] = "عبقري"
mgf[582] = "عتب"
mgf[583] = "عتو"
mgf[584] = "عجب"
mgf[585] = "عجز"
mgf[586] = "عجل"
mgf[587] = "عدد"
mgf[588] = "عدد"
mgf[589] = "عدن"
mgf[590] = "عدو"
mgf[591] = "عذب"
mgf[592] = "عذر"
mgf[593] = "عرب"
mgf[594] = "عرش"
mgf[595] = "عرض"
mgf[596] = "عرض"
mgf[597] = "عرف"
mgf[598] = "عرم"
mgf[599] = "عزز"
mgf[600] = "عزز"
mgf[601] = "عزل"
mgf[602] = "عسر"
mgf[603] = "عسي"
mgf[604] = "عشر"
mgf[605] = "عشو"
mgf[606] = "عصر"
mgf[607] = "عصم"
mgf[608] = "عصو"
mgf[609] = "عضد"
mgf[610] = "عطف"
mgf[611] = "عظم"
mgf[612] = "عفف"
mgf[613] = "عفو"
mgf[614] = "عقب"
mgf[615] = "عقب"
mgf[616] = "عقد"
mgf[617] = "عقر"
mgf[618] = "عكف"
mgf[619] = "علم"
mgf[620] = "علم"
mgf[621] = "على"
mgf[622] = "على"
mgf[623] = "علي"
mgf[624] = "عمر"
mgf[625] = "عمر"
mgf[626] = "عمم"
mgf[627] = "عمي"
mgf[628] = "عنت"
mgf[629] = "عند"
mgf[630] = "عهد"
mgf[631] = "عود"
mgf[632] = "عور"
mgf[633] = "عوم"
mgf[634] = "عير"
mgf[635] = "عيل"
mgf[636] = "عين"
mgf[637] = "عين"
mgf[638] = "عين"
mgf[639] = "غ"
mgf[640] = "غ"
mgf[641] = "غدر"
mgf[642] = "غدو"
mgf[643] = "غرب"
mgf[644] = "غرف"
mgf[645] = "غرم"
mgf[646] = "غزا"
mgf[647] = "غسل"
mgf[648] = "غصب"
mgf[649] = "غضب"
mgf[650] = "غفر"
mgf[651] = "غفل"
mgf[652] = "غل"
mgf[653] = "غلظ"
mgf[654] = "غلم"
mgf[655] = "غمم"
mgf[656] = "غنم"
mgf[657] = "غني"
mgf[658] = "غوث"
mgf[659] = "غور"
mgf[660] = "غيب"
mgf[661] = "غيث"
mgf[662] = "غيض"
mgf[663] = "غيظ"
mgf[664] = "غيظ"
mgf[665] = "ف"
mgf[666] = "ف"
mgf[667] = "فأد"
mgf[668] = "فتح"
mgf[669] = "فتر"
mgf[670] = "فتن"
mgf[671] = "فتي"
mgf[672] = "فجر"
mgf[673] = "فحش"
mgf[674] = "فر"
mgf[675] = "فرح"
mgf[676] = "فرش"
mgf[677] = "فرض"
mgf[678] = "فرع"
mgf[679] = "فرق"
mgf[680] = "فرق"
mgf[681] = "فري"
mgf[682] = "فزع"
mgf[683] = "فسد"
mgf[684] = "فسر"
mgf[685] = "فصل"
mgf[686] = "فصل"
mgf[687] = "فضل"
mgf[688] = "فضو"
mgf[689] = "فطر"
mgf[690] = "فعل"
mgf[691] = "فقر"
mgf[692] = "فكك"
mgf[693] = "فكه"
mgf[694] = "فلق"
mgf[695] = "فنن"
mgf[696] = "فهم"
mgf[697] = "فور"
mgf[698] = "فوض"
mgf[699] = "فوق"
mgf[700] = "في"
mgf[701] = "فيء"
mgf[702] = "فيل"
mgf[703] = "فيل"
mgf[704] = "فيل"
mgf[705] = "ق"
mgf[706] = "ق"
mgf[707] = "قبس"
mgf[708] = "قبل"
mgf[709] = "قبل"
mgf[710] = "قتر"
mgf[711] = "قتل"
mgf[712] = "قحم"
mgf[713] = "قدر"
mgf[714] = "قدر"
mgf[715] = "قدر"
mgf[716] = "قدم"
mgf[717] = "قدم"
mgf[718] = "قر"
mgf[719] = "قر"
mgf[720] = "قرا"
mgf[721] = "قرب"
mgf[722] = "قرض"
mgf[723] = "قرن"
mgf[724] = "قسس"
mgf[725] = "قسط"
mgf[726] = "قسو"
mgf[727] = "قصد"
mgf[728] = "قصر"
mgf[729] = "قضب"
mgf[730] = "قطر"
mgf[731] = "قطع"
mgf[732] = "قعد"
mgf[733] = "قلب"
mgf[734] = "قلب"
mgf[735] = "قلل"
mgf[736] = "قمض"
mgf[737] = "قنط"
mgf[738] = "قهر"
mgf[739] = "قوع"
mgf[740] = "قوم"
mgf[741] = "قوم"
mgf[742] = "قيل"
mgf[743] = "ك"
mgf[744] = "ك"
mgf[745] = "كبر"
mgf[746] = "كبر"
mgf[747] = "كثب"
mgf[748] = "كدي"
mgf[749] = "كذب"
mgf[750] = "كره"
mgf[751] = "كسد"
mgf[752] = "كعب"
mgf[753] = "كفر"
mgf[754] = "كفو"
mgf[755] = "كلب"
mgf[756] = "كمل"
mgf[757] = "كنن"
mgf[758] = "كين"
mgf[759] = "كين"
mgf[760] = "كين"
mgf[761] = "ل"
mgf[762] = "ل"
mgf[763] = "لألأ"
mgf[764] = "لبد"
mgf[765] = "لجا"
mgf[766] = "لحن"
mgf[767] = "لزم"
mgf[768] = "لعل"
mgf[769] = "لفت"
mgf[770] = "لقط"
mgf[771] = "لقي"
mgf[772] = "لمز"
mgf[773] = "لها"
mgf[774] = "لوم"
mgf[775] = "ليس"
mgf[776] = "لين"
mgf[777] = "م"
mgf[778] = "م"
mgf[779] = "متن"
mgf[780] = "محق"
mgf[781] = "مدد"
mgf[782] = "مرج"
mgf[783] = "مرض"
mgf[784] = "مسح"
mgf[785] = "مسك"
mgf[786] = "مضي"
mgf[787] = "مكث"
mgf[788] = "مكن"
mgf[789] = "ملك"
mgf[790] = "ملو"
mgf[791] = "منع"
mgf[792] = "منى"
mgf[793] = "مهل"
mgf[794] = "موت"
mgf[795] = "ميد"
mgf[796] = "ميل"
mgf[797] = "ن"
mgf[798] = "ن"
mgf[799] = "نبذ"
mgf[800] = "نجد"
mgf[801] = "نحت"
mgf[802] = "نخل"
mgf[803] = "نذر"
mgf[804] = "نزغ"
mgf[805] = "نزل"
mgf[806] = "نسب"
mgf[807] = "نسك"
mgf[808] = "نشا"
mgf[809] = "نشط"
mgf[810] = "نصت"
mgf[811] = "نصر"
mgf[812] = "نضخ"
mgf[813] = "نطق"
mgf[814] = "نظر"
mgf[815] = "نعق"
mgf[816] = "نعم"
mgf[817] = "نفذ"
mgf[818] = "نفس"
mgf[819] = "نفق"
mgf[820] = "نفي"
mgf[821] = "نقص"
mgf[822] = "نكب"
mgf[823] = "نكد"
mgf[824] = "نكر"
mgf[825] = "نمم"
mgf[826] = "نهر"
mgf[827] = "نور"
mgf[828] = "نوم"
mgf[829] = "نيل"
mgf[830] = "نيل"
mgf[831] = "ه"
mgf[832] = "ه"
mgf[833] = "هجد"
mgf[834] = "هدد"
mgf[835] = "هدي"
mgf[836] = "هشش"
mgf[837] = "هلع"
mgf[838] = "همز"
mgf[839] = "هنؤ"
mgf[840] = "هون"
mgf[841] = "هوي"
mgf[842] = "هيم"
mgf[843] = "هيهات"
mgf[844] = "هيهات"
mgf[845] = "و"
mgf[846] = "و"
mgf[847] = "وتن"
mgf[848] = "وثق"
mgf[849] = "وجف"
mgf[850] = "وجه"
mgf[851] = "وحش"
mgf[852] = "ودع"
mgf[853] = "ورد"
mgf[854] = "وري"
mgf[855] = "وزع"
mgf[856] = "وسع"
mgf[857] = "وسم"
mgf[858] = "وصف"
mgf[859] = "وصي"
mgf[860] = "وطئ"
mgf[861] = "وعي"
mgf[862] = "وفي"
mgf[863] = "وقت"
mgf[864] = "وقر"
mgf[865] = "وقع"
mgf[866] = "وقف"
mgf[867] = "وكل"
mgf[868] = "ولد"
mgf[869] = "ولي"
mgf[870] = "وهب"
mgf[871] = "ويل"
mgf[872] = "ويل"
mgf[873] = "ي"
mgf[874] = "ي"
mgf[875] = "يدي"
mgf[876] = "يسر"
mgf[877] = "يمم"
mgf[878] = "يوم"
mgf[879] = "يوم"
mgf[880] = "يوم"

