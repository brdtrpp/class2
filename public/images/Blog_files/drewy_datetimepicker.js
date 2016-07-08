//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var moment = Package['momentjs:moment'].moment;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/drewy_datetimepicker/packages/drewy_datetimepicker.js    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/drewy:datetimepicker/jquery.datetimepicker.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * @preserve jQuery DateTimePicker plugin v2.4.3                                                                       // 2
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/                                                               // 3
 * (c) 2014, Chupurnov Valeriy.                                                                                        // 4
 */                                                                                                                    // 5
/*global document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/                              // 6
(function ($) {                                                                                                        // 7
	'use strict';                                                                                                         // 8
	var default_options  = {                                                                                              // 9
		i18n: {                                                                                                              // 10
			ar: { // Arabic                                                                                                     // 11
				months: [                                                                                                          // 12
					"كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"
				],                                                                                                                 // 14
				dayOfWeek: [                                                                                                       // 15
					"ن", "ث", "ع", "خ", "ج", "س", "ح"                                                                                 // 16
				]                                                                                                                  // 17
			},                                                                                                                  // 18
			ro: { // Romanian                                                                                                   // 19
				months: [                                                                                                          // 20
					"ianuarie", "februarie", "martie", "aprilie", "mai", "iunie", "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"
				],                                                                                                                 // 22
				dayOfWeek: [                                                                                                       // 23
					"l", "ma", "mi", "j", "v", "s", "d"                                                                               // 24
				]                                                                                                                  // 25
			},                                                                                                                  // 26
			id: { // Indonesian                                                                                                 // 27
				months: [                                                                                                          // 28
					"Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
				],                                                                                                                 // 30
				dayOfWeek: [                                                                                                       // 31
					"Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"                                                                   // 32
				]                                                                                                                  // 33
			},                                                                                                                  // 34
			bg: { // Bulgarian                                                                                                  // 35
				months: [                                                                                                          // 36
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],                                                                                                                 // 38
				dayOfWeek: [                                                                                                       // 39
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"                                                                          // 40
				]                                                                                                                  // 41
			},                                                                                                                  // 42
			fa: { // Persian/Farsi                                                                                              // 43
				months: [                                                                                                          // 44
					'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'             // 45
				],                                                                                                                 // 46
				dayOfWeek: [                                                                                                       // 47
					'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'                                              // 48
				]                                                                                                                  // 49
			},                                                                                                                  // 50
			ru: { // Russian                                                                                                    // 51
				months: [                                                                                                          // 52
					'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],                                                                                                                 // 54
				dayOfWeek: [                                                                                                       // 55
					"Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"                                                                         // 56
				]                                                                                                                  // 57
			},                                                                                                                  // 58
			uk: { // Ukrainian                                                                                                  // 59
				months: [                                                                                                          // 60
					'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
				],                                                                                                                 // 62
				dayOfWeek: [                                                                                                       // 63
					"Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"                                                                   // 64
				]                                                                                                                  // 65
			},                                                                                                                  // 66
			en: { // English                                                                                                    // 67
				months: [                                                                                                          // 68
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],                                                                                                                 // 70
				dayOfWeek: [                                                                                                       // 71
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"                                                                   // 72
				]                                                                                                                  // 73
			},                                                                                                                  // 74
			el: { // Ελληνικά                                                                                                   // 75
				months: [                                                                                                          // 76
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],                                                                                                                 // 78
				dayOfWeek: [                                                                                                       // 79
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"                                                                   // 80
				]                                                                                                                  // 81
			},                                                                                                                  // 82
			de: { // German                                                                                                     // 83
				months: [                                                                                                          // 84
					'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
				],                                                                                                                 // 86
				dayOfWeek: [                                                                                                       // 87
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"                                                                          // 88
				]                                                                                                                  // 89
			},                                                                                                                  // 90
			nl: { // Dutch                                                                                                      // 91
				months: [                                                                                                          // 92
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],                                                                                                                 // 94
				dayOfWeek: [                                                                                                       // 95
					"zo", "ma", "di", "wo", "do", "vr", "za"                                                                          // 96
				]                                                                                                                  // 97
			},                                                                                                                  // 98
			tr: { // Turkish                                                                                                    // 99
				months: [                                                                                                          // 100
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"     // 101
				],                                                                                                                 // 102
				dayOfWeek: [                                                                                                       // 103
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"                                                                   // 104
				]                                                                                                                  // 105
			},                                                                                                                  // 106
			fr: { //French                                                                                                      // 107
				months: [                                                                                                          // 108
					"Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
				],                                                                                                                 // 110
				dayOfWeek: [                                                                                                       // 111
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"                                                                   // 112
				]                                                                                                                  // 113
			},                                                                                                                  // 114
			es: { // Spanish                                                                                                    // 115
				months: [                                                                                                          // 116
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],                                                                                                                 // 118
				dayOfWeek: [                                                                                                       // 119
					"Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"                                                                   // 120
				]                                                                                                                  // 121
			},                                                                                                                  // 122
			th: { // Thai                                                                                                       // 123
				months: [                                                                                                          // 124
					'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
				],                                                                                                                 // 126
				dayOfWeek: [                                                                                                       // 127
					'อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'                                                                        // 128
				]                                                                                                                  // 129
			},                                                                                                                  // 130
			pl: { // Polish                                                                                                     // 131
				months: [                                                                                                          // 132
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
				],                                                                                                                 // 134
				dayOfWeek: [                                                                                                       // 135
					"nd", "pn", "wt", "śr", "cz", "pt", "sb"                                                                          // 136
				]                                                                                                                  // 137
			},                                                                                                                  // 138
			pt: { // Portuguese                                                                                                 // 139
				months: [                                                                                                          // 140
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],                                                                                                                 // 142
				dayOfWeek: [                                                                                                       // 143
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"                                                                   // 144
				]                                                                                                                  // 145
			},                                                                                                                  // 146
			ch: { // Simplified Chinese                                                                                         // 147
				months: [                                                                                                          // 148
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"                                          // 149
				],                                                                                                                 // 150
				dayOfWeek: [                                                                                                       // 151
					"日", "一", "二", "三", "四", "五", "六"                                                                                 // 152
				]                                                                                                                  // 153
			},                                                                                                                  // 154
			se: { // Swedish                                                                                                    // 155
				months: [                                                                                                          // 156
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",  "Oktober", "November", "December"
				],                                                                                                                 // 158
				dayOfWeek: [                                                                                                       // 159
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"                                                                   // 160
				]                                                                                                                  // 161
			},                                                                                                                  // 162
			kr: { // Korean                                                                                                     // 163
				months: [                                                                                                          // 164
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"                                         // 165
				],                                                                                                                 // 166
				dayOfWeek: [                                                                                                       // 167
					"일", "월", "화", "수", "목", "금", "토"                                                                                 // 168
				]                                                                                                                  // 169
			},                                                                                                                  // 170
			it: { // Italian                                                                                                    // 171
				months: [                                                                                                          // 172
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],                                                                                                                 // 174
				dayOfWeek: [                                                                                                       // 175
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"                                                                   // 176
				]                                                                                                                  // 177
			},                                                                                                                  // 178
			da: { // Dansk                                                                                                      // 179
				months: [                                                                                                          // 180
					"January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
				],                                                                                                                 // 182
				dayOfWeek: [                                                                                                       // 183
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"                                                                   // 184
				]                                                                                                                  // 185
			},                                                                                                                  // 186
			no: { // Norwegian                                                                                                  // 187
				months: [                                                                                                          // 188
					"Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"
				],                                                                                                                 // 190
				dayOfWeek: [                                                                                                       // 191
					"Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"                                                                   // 192
				]                                                                                                                  // 193
			},                                                                                                                  // 194
			ja: { // Japanese                                                                                                   // 195
				months: [                                                                                                          // 196
					"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"                                         // 197
				],                                                                                                                 // 198
				dayOfWeek: [                                                                                                       // 199
					"日", "月", "火", "水", "木", "金", "土"                                                                                 // 200
				]                                                                                                                  // 201
			},                                                                                                                  // 202
			vi: { // Vietnamese                                                                                                 // 203
				months: [                                                                                                          // 204
					"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
				],                                                                                                                 // 206
				dayOfWeek: [                                                                                                       // 207
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"                                                                          // 208
				]                                                                                                                  // 209
			},                                                                                                                  // 210
			sl: { // Slovenščina                                                                                                // 211
				months: [                                                                                                          // 212
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],                                                                                                                 // 214
				dayOfWeek: [                                                                                                       // 215
					"Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"                                                                   // 216
				]                                                                                                                  // 217
			},                                                                                                                  // 218
			cs: { // Čeština                                                                                                    // 219
				months: [                                                                                                          // 220
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],                                                                                                                 // 222
				dayOfWeek: [                                                                                                       // 223
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So"                                                                          // 224
				]                                                                                                                  // 225
			},                                                                                                                  // 226
			hu: { // Hungarian                                                                                                  // 227
				months: [                                                                                                          // 228
					"Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"
				],                                                                                                                 // 230
				dayOfWeek: [                                                                                                       // 231
					"Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"                                                                        // 232
				]                                                                                                                  // 233
			},                                                                                                                  // 234
			az: { //Azerbaijanian (Azeri)                                                                                       // 235
				months: [                                                                                                          // 236
					"Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"   // 237
				],                                                                                                                 // 238
				dayOfWeek: [                                                                                                       // 239
					"B", "Be", "Ça", "Ç", "Ca", "C", "Ş"                                                                              // 240
				]                                                                                                                  // 241
			},                                                                                                                  // 242
			bs: { //Bosanski                                                                                                    // 243
				months: [                                                                                                          // 244
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],                                                                                                                 // 246
				dayOfWeek: [                                                                                                       // 247
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"                                                                   // 248
				]                                                                                                                  // 249
			},                                                                                                                  // 250
			ca: { //Català                                                                                                      // 251
				months: [                                                                                                          // 252
					"Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"
				],                                                                                                                 // 254
				dayOfWeek: [                                                                                                       // 255
					"Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"                                                                          // 256
				]                                                                                                                  // 257
			},                                                                                                                  // 258
			'en-GB': { //English (British)                                                                                      // 259
				months: [                                                                                                          // 260
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],                                                                                                                 // 262
				dayOfWeek: [                                                                                                       // 263
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"                                                                   // 264
				]                                                                                                                  // 265
			},                                                                                                                  // 266
			et: { //"Eesti"                                                                                                     // 267
				months: [                                                                                                          // 268
					"Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"
				],                                                                                                                 // 270
				dayOfWeek: [                                                                                                       // 271
					"P", "E", "T", "K", "N", "R", "L"                                                                                 // 272
				]                                                                                                                  // 273
			},                                                                                                                  // 274
			eu: { //Euskara                                                                                                     // 275
				months: [                                                                                                          // 276
					"Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"
				],                                                                                                                 // 278
				dayOfWeek: [                                                                                                       // 279
					"Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."                                                                   // 280
				]                                                                                                                  // 281
			},                                                                                                                  // 282
			fi: { //Finnish (Suomi)                                                                                             // 283
				months: [                                                                                                          // 284
					"Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
				],                                                                                                                 // 286
				dayOfWeek: [                                                                                                       // 287
					"Su", "Ma", "Ti", "Ke", "To", "Pe", "La"                                                                          // 288
				]                                                                                                                  // 289
			},                                                                                                                  // 290
			gl: { //Galego                                                                                                      // 291
				months: [                                                                                                          // 292
					"Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"                                // 293
				],                                                                                                                 // 294
				dayOfWeek: [                                                                                                       // 295
					"Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"                                                                   // 296
				]                                                                                                                  // 297
			},                                                                                                                  // 298
			hr: { //Hrvatski                                                                                                    // 299
				months: [                                                                                                          // 300
					"Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
				],                                                                                                                 // 302
				dayOfWeek: [                                                                                                       // 303
					"Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"                                                                   // 304
				]                                                                                                                  // 305
			},                                                                                                                  // 306
			ko: { //Korean (한국어)                                                                                                // 307
				months: [                                                                                                          // 308
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"                                         // 309
				],                                                                                                                 // 310
				dayOfWeek: [                                                                                                       // 311
					"일", "월", "화", "수", "목", "금", "토"                                                                                 // 312
				]                                                                                                                  // 313
			},                                                                                                                  // 314
			lt: { //Lithuanian (lietuvių)                                                                                       // 315
				months: [                                                                                                          // 316
					"Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"
				],                                                                                                                 // 318
				dayOfWeek: [                                                                                                       // 319
					"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"                                                                   // 320
				]                                                                                                                  // 321
			},                                                                                                                  // 322
			lv: { //Latvian (Latviešu)                                                                                          // 323
				months: [                                                                                                          // 324
					"Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"
				],                                                                                                                 // 326
				dayOfWeek: [                                                                                                       // 327
					"Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"                                                                          // 328
				]                                                                                                                  // 329
			},                                                                                                                  // 330
			mk: { //Macedonian (Македонски)                                                                                     // 331
				months: [                                                                                                          // 332
					"јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"
				],                                                                                                                 // 334
				dayOfWeek: [                                                                                                       // 335
					"нед", "пон", "вто", "сре", "чет", "пет", "саб"                                                                   // 336
				]                                                                                                                  // 337
			},                                                                                                                  // 338
			mn: { //Mongolian (Монгол)                                                                                          // 339
				months: [                                                                                                          // 340
					"1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"
				],                                                                                                                 // 342
				dayOfWeek: [                                                                                                       // 343
					"Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"                                                                   // 344
				]                                                                                                                  // 345
			},                                                                                                                  // 346
			'pt-BR': { //Português(Brasil)                                                                                      // 347
				months: [                                                                                                          // 348
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],                                                                                                                 // 350
				dayOfWeek: [                                                                                                       // 351
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"                                                                   // 352
				]                                                                                                                  // 353
			},                                                                                                                  // 354
			sk: { //Slovenčina                                                                                                  // 355
				months: [                                                                                                          // 356
					"Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"
				],                                                                                                                 // 358
				dayOfWeek: [                                                                                                       // 359
					"Ne", "Po", "Ut", "St", "Št", "Pi", "So"                                                                          // 360
				]                                                                                                                  // 361
			},                                                                                                                  // 362
			sq: { //Albanian (Shqip)                                                                                            // 363
				months: [                                                                                                          // 364
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],                                                                                                                 // 366
				dayOfWeek: [                                                                                                       // 367
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"                                                                   // 368
				]                                                                                                                  // 369
			},                                                                                                                  // 370
			'sr-YU': { //Serbian (Srpski)                                                                                       // 371
				months: [                                                                                                          // 372
					"Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"
				],                                                                                                                 // 374
				dayOfWeek: [                                                                                                       // 375
					"Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"                                                                   // 376
				]                                                                                                                  // 377
			},                                                                                                                  // 378
			sr: { //Serbian Cyrillic (Српски)                                                                                   // 379
				months: [                                                                                                          // 380
					"јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"
				],                                                                                                                 // 382
				dayOfWeek: [                                                                                                       // 383
					"нед", "пон", "уто", "сре", "чет", "пет", "суб"                                                                   // 384
				]                                                                                                                  // 385
			},                                                                                                                  // 386
			sv: { //Svenska                                                                                                     // 387
				months: [                                                                                                          // 388
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"
				],                                                                                                                 // 390
				dayOfWeek: [                                                                                                       // 391
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"                                                                   // 392
				]                                                                                                                  // 393
			},                                                                                                                  // 394
			'zh-TW': { //Traditional Chinese (繁體中文)                                                                             // 395
				months: [                                                                                                          // 396
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"                                          // 397
				],                                                                                                                 // 398
				dayOfWeek: [                                                                                                       // 399
					"日", "一", "二", "三", "四", "五", "六"                                                                                 // 400
				]                                                                                                                  // 401
			},                                                                                                                  // 402
			zh: { //Simplified Chinese (简体中文)                                                                                   // 403
				months: [                                                                                                          // 404
					"一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"                                          // 405
				],                                                                                                                 // 406
				dayOfWeek: [                                                                                                       // 407
					"日", "一", "二", "三", "四", "五", "六"                                                                                 // 408
				]                                                                                                                  // 409
			},                                                                                                                  // 410
			he: { //Hebrew (עברית)                                                                                              // 411
				months: [                                                                                                          // 412
					'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'        // 413
				],                                                                                                                 // 414
				dayOfWeek: [                                                                                                       // 415
					'א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'                                                                   // 416
				]                                                                                                                  // 417
			},                                                                                                                  // 418
			hy: { // Armenian                                                                                                   // 419
				months: [                                                                                                          // 420
					"Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"
				],                                                                                                                 // 422
				dayOfWeek: [                                                                                                       // 423
					"Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"                                                                   // 424
				]                                                                                                                  // 425
			},                                                                                                                  // 426
            kg: { // Kyrgyz                                                                                            // 427
                months: [                                                                                              // 428
                    'Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'
                ],                                                                                                     // 430
                dayOfWeek: [                                                                                           // 431
                    "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"                                                    // 432
                ]                                                                                                      // 433
            }                                                                                                          // 434
		},                                                                                                                   // 435
		value: '',                                                                                                           // 436
		lang: 'en',                                                                                                          // 437
                                                                                                                       // 438
		format:	'MM/DD/YYYY h:mm a',                                                                                         // 439
		formatTime:	'h:mm a',                                                                                                // 440
		formatDate:	'MM/DD/YYYY',                                                                                            // 441
                                                                                                                       // 442
		startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',                                          // 443
		step: 30,                                                                                                            // 444
		monthChangeSpinner: true,                                                                                            // 445
                                                                                                                       // 446
		closeOnDateSelect: false,                                                                                            // 447
		closeOnTimeSelect: true,                                                                                             // 448
		closeOnWithoutClick: true,                                                                                           // 449
		closeOnInputClick: true,                                                                                             // 450
                                                                                                                       // 451
		timepicker: true,                                                                                                    // 452
		datepicker: true,                                                                                                    // 453
		weeks: false,                                                                                                        // 454
                                                                                                                       // 455
		defaultTime: false,	// use formatTime format (ex. '10:00' for formatTime:	'H:i')                                     // 456
		defaultDate: false,	// use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')       // 457
                                                                                                                       // 458
		minDate: false,                                                                                                      // 459
		maxDate: false,                                                                                                      // 460
		minTime: false,                                                                                                      // 461
		maxTime: false,                                                                                                      // 462
                                                                                                                       // 463
		allowTimes: [],                                                                                                      // 464
		opened: false,                                                                                                       // 465
		initTime: true,                                                                                                      // 466
		inline: false,                                                                                                       // 467
		theme: '',                                                                                                           // 468
                                                                                                                       // 469
		onSelectDate: function () {},                                                                                        // 470
		onSelectTime: function () {},                                                                                        // 471
		onChangeMonth: function () {},                                                                                       // 472
		onChangeYear: function () {},                                                                                        // 473
		onChangeDateTime: function () {},                                                                                    // 474
		onShow: function () {},                                                                                              // 475
		onClose: function () {},                                                                                             // 476
		onGenerate: function () {},                                                                                          // 477
                                                                                                                       // 478
		withoutCopyright: true,                                                                                              // 479
		inverseButton: false,                                                                                                // 480
		hours12: false,                                                                                                      // 481
		next: 'xdsoft_next',                                                                                                 // 482
		prev : 'xdsoft_prev',                                                                                                // 483
		dayOfWeekStart: 0,                                                                                                   // 484
		parentID: 'body',                                                                                                    // 485
		timeHeightInTimePicker: 25,                                                                                          // 486
		timepickerScrollbar: true,                                                                                           // 487
		todayButton: true,                                                                                                   // 488
		prevButton: true,                                                                                                    // 489
		nextButton: true,                                                                                                    // 490
		defaultSelect: true,                                                                                                 // 491
                                                                                                                       // 492
		scrollMonth: true,                                                                                                   // 493
		scrollTime: true,                                                                                                    // 494
		scrollInput: true,                                                                                                   // 495
                                                                                                                       // 496
		lazyInit: false,                                                                                                     // 497
		mask: false,                                                                                                         // 498
		validateOnBlur: true,                                                                                                // 499
		allowBlank: true,                                                                                                    // 500
		yearStart: 1950,                                                                                                     // 501
		yearEnd: 2050,                                                                                                       // 502
		monthStart: 0,                                                                                                       // 503
		monthEnd: 11,                                                                                                        // 504
		style: '',                                                                                                           // 505
		id: '',                                                                                                              // 506
		fixed: false,                                                                                                        // 507
		roundTime: 'round', // ceil, floor                                                                                   // 508
		className: '',                                                                                                       // 509
		weekends: [],                                                                                                        // 510
		highlightedDates: [],                                                                                                // 511
		highlightedPeriods: [],                                                                                              // 512
		disabledDates : [],                                                                                                  // 513
		yearOffset: 0,                                                                                                       // 514
		beforeShowDay: null,                                                                                                 // 515
                                                                                                                       // 516
		enterLikeTab: true,                                                                                                  // 517
        showApplyButton: false                                                                                         // 518
	};                                                                                                                    // 519
	// fix for ie8                                                                                                        // 520
	if (!Array.prototype.indexOf) {                                                                                       // 521
		Array.prototype.indexOf = function (obj, start) {                                                                    // 522
			var i, j;                                                                                                           // 523
			for (i = (start || 0), j = this.length; i < j; i += 1) {                                                            // 524
				if (this[i] === obj) { return i; }                                                                                 // 525
			}                                                                                                                   // 526
			return -1;                                                                                                          // 527
		};                                                                                                                   // 528
	}                                                                                                                     // 529
	Date.prototype.countDaysInMonth = function () {                                                                       // 530
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();                                               // 531
	};                                                                                                                    // 532
	$.fn.xdsoftScroller = function (percent) {                                                                            // 533
		return this.each(function () {                                                                                       // 534
			var timeboxparent = $(this),                                                                                        // 535
				pointerEventToXY = function (e) {                                                                                  // 536
					var out = {x: 0, y: 0},                                                                                           // 537
						touch;                                                                                                           // 538
					if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {     // 539
						touch  = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];                                        // 540
						out.x = touch.clientX;                                                                                           // 541
						out.y = touch.clientY;                                                                                           // 542
					} else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
						out.x = e.clientX;                                                                                               // 544
						out.y = e.clientY;                                                                                               // 545
					}                                                                                                                 // 546
					return out;                                                                                                       // 547
				},                                                                                                                 // 548
				move = 0,                                                                                                          // 549
				timebox,                                                                                                           // 550
				parentHeight,                                                                                                      // 551
				height,                                                                                                            // 552
				scrollbar,                                                                                                         // 553
				scroller,                                                                                                          // 554
				maximumOffset = 100,                                                                                               // 555
				start = false,                                                                                                     // 556
				startY = 0,                                                                                                        // 557
				startTop = 0,                                                                                                      // 558
				h1 = 0,                                                                                                            // 559
				touchStart = false,                                                                                                // 560
				startTopScroll = 0,                                                                                                // 561
				calcOffset = function () {};                                                                                       // 562
			if (percent === 'hide') {                                                                                           // 563
				timeboxparent.find('.xdsoft_scrollbar').hide();                                                                    // 564
				return;                                                                                                            // 565
			}                                                                                                                   // 566
			if (!$(this).hasClass('xdsoft_scroller_box')) {                                                                     // 567
				timebox = timeboxparent.children().eq(0);                                                                          // 568
				parentHeight = timeboxparent[0].clientHeight;                                                                      // 569
				height = timebox[0].offsetHeight;                                                                                  // 570
				scrollbar = $('<div class="xdsoft_scrollbar"></div>');                                                             // 571
				scroller = $('<div class="xdsoft_scroller"></div>');                                                               // 572
				scrollbar.append(scroller);                                                                                        // 573
                                                                                                                       // 574
				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);                                                   // 575
				calcOffset = function calcOffset(event) {                                                                          // 576
					var offset = pointerEventToXY(event).y - startY + startTopScroll;                                                 // 577
					if (offset < 0) {                                                                                                 // 578
						offset = 0;                                                                                                      // 579
					}                                                                                                                 // 580
					if (offset + scroller[0].offsetHeight > h1) {                                                                     // 581
						offset = h1 - scroller[0].offsetHeight;                                                                          // 582
					}                                                                                                                 // 583
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);            // 584
				};                                                                                                                 // 585
                                                                                                                       // 586
				scroller                                                                                                           // 587
					.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {                                    // 588
						if (!parentHeight) {                                                                                             // 589
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);                                              // 590
						}                                                                                                                // 591
                                                                                                                       // 592
						startY = pointerEventToXY(event).y;                                                                              // 593
						startTopScroll = parseInt(scroller.css('margin-top'), 10);                                                       // 594
						h1 = scrollbar[0].offsetHeight;                                                                                  // 595
                                                                                                                       // 596
						if (event.type === 'mousedown') {                                                                                // 597
							if (document) {                                                                                                 // 598
								$(document.body).addClass('xdsoft_noselect');                                                                  // 599
							}                                                                                                               // 600
							$([document.body, window]).on('mouseup.xdsoft_scroller', function arguments_callee() {                          // 601
								$([document.body, window]).off('mouseup.xdsoft_scroller', arguments_callee)                                    // 602
									.off('mousemove.xdsoft_scroller', calcOffset)                                                                 // 603
									.removeClass('xdsoft_noselect');                                                                              // 604
							});                                                                                                             // 605
							$(document.body).on('mousemove.xdsoft_scroller', calcOffset);                                                   // 606
						} else {                                                                                                         // 607
							touchStart = true;                                                                                              // 608
							event.stopPropagation();                                                                                        // 609
							event.preventDefault();                                                                                         // 610
						}                                                                                                                // 611
					})                                                                                                                // 612
					.on('touchmove', function (event) {                                                                               // 613
						if (touchStart) {                                                                                                // 614
							event.preventDefault();                                                                                         // 615
							calcOffset(event);                                                                                              // 616
						}                                                                                                                // 617
					})                                                                                                                // 618
					.on('touchend touchcancel', function (event) {                                                                    // 619
						touchStart =  false;                                                                                             // 620
						startTopScroll = 0;                                                                                              // 621
					});                                                                                                               // 622
                                                                                                                       // 623
				timeboxparent                                                                                                      // 624
					.on('scroll_element.xdsoft_scroller', function (event, percentage) {                                              // 625
						if (!parentHeight) {                                                                                             // 626
							timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);                                     // 627
						}                                                                                                                // 628
						percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;                        // 629
                                                                                                                       // 630
						scroller.css('margin-top', maximumOffset * percentage);                                                          // 631
                                                                                                                       // 632
						setTimeout(function () {                                                                                         // 633
							timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));                 // 634
						}, 10);                                                                                                          // 635
					})                                                                                                                // 636
					.on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {                              // 637
						var percent, sh;                                                                                                 // 638
						parentHeight = timeboxparent[0].clientHeight;                                                                    // 639
						height = timebox[0].offsetHeight;                                                                                // 640
						percent = parentHeight / height;                                                                                 // 641
						sh = percent * scrollbar[0].offsetHeight;                                                                        // 642
						if (percent > 1) {                                                                                               // 643
							scroller.hide();                                                                                                // 644
						} else {                                                                                                         // 645
							scroller.show();                                                                                                // 646
							scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));                                                        // 647
							maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;                                           // 648
							if (noTriggerScroll !== true) {                                                                                 // 649
								timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
							}                                                                                                               // 651
						}                                                                                                                // 652
					});                                                                                                               // 653
                                                                                                                       // 654
				timeboxparent.on('mousewheel', function (event) {                                                                  // 655
					var top = Math.abs(parseInt(timebox.css('marginTop'), 10));                                                       // 656
                                                                                                                       // 657
					top = top - (event.deltaY * 20);                                                                                  // 658
					if (top < 0) {                                                                                                    // 659
						top = 0;                                                                                                         // 660
					}                                                                                                                 // 661
                                                                                                                       // 662
					timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);                         // 663
					event.stopPropagation();                                                                                          // 664
					return false;                                                                                                     // 665
				});                                                                                                                // 666
                                                                                                                       // 667
				timeboxparent.on('touchstart', function (event) {                                                                  // 668
					start = pointerEventToXY(event);                                                                                  // 669
					startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));                                                      // 670
				});                                                                                                                // 671
                                                                                                                       // 672
				timeboxparent.on('touchmove', function (event) {                                                                   // 673
					if (start) {                                                                                                      // 674
						event.preventDefault();                                                                                          // 675
						var coord = pointerEventToXY(event);                                                                             // 676
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
					}                                                                                                                 // 678
				});                                                                                                                // 679
                                                                                                                       // 680
				timeboxparent.on('touchend touchcancel', function (event) {                                                        // 681
					start = false;                                                                                                    // 682
					startTop = 0;                                                                                                     // 683
				});                                                                                                                // 684
			}                                                                                                                   // 685
			timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);                                                  // 686
		});                                                                                                                  // 687
	};                                                                                                                    // 688
                                                                                                                       // 689
	$.fn.datetimepicker = function (opt) {                                                                                // 690
		var KEY0 = 48,                                                                                                       // 691
			KEY9 = 57,                                                                                                          // 692
			_KEY0 = 96,                                                                                                         // 693
			_KEY9 = 105,                                                                                                        // 694
			CTRLKEY = 17,                                                                                                       // 695
			DEL = 46,                                                                                                           // 696
			ENTER = 13,                                                                                                         // 697
			ESC = 27,                                                                                                           // 698
			BACKSPACE = 8,                                                                                                      // 699
			ARROWLEFT = 37,                                                                                                     // 700
			ARROWUP = 38,                                                                                                       // 701
			ARROWRIGHT = 39,                                                                                                    // 702
			ARROWDOWN = 40,                                                                                                     // 703
			TAB = 9,                                                                                                            // 704
			F5 = 116,                                                                                                           // 705
			AKEY = 65,                                                                                                          // 706
			CKEY = 67,                                                                                                          // 707
			VKEY = 86,                                                                                                          // 708
			ZKEY = 90,                                                                                                          // 709
			YKEY = 89,                                                                                                          // 710
			ctrlDown	=	false,                                                                                                   // 711
			options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
                                                                                                                       // 713
			lazyInitTimer = 0,                                                                                                  // 714
			createDateTimePicker,                                                                                               // 715
			destroyDateTimePicker,                                                                                              // 716
                                                                                                                       // 717
			lazyInit = function (input) {                                                                                       // 718
				input                                                                                                              // 719
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function initOnActionCallback(event) {                         // 720
						if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {                                              // 721
							return;                                                                                                         // 722
						}                                                                                                                // 723
						clearTimeout(lazyInitTimer);                                                                                     // 724
						lazyInitTimer = setTimeout(function () {                                                                         // 725
                                                                                                                       // 726
							if (!input.data('xdsoft_datetimepicker')) {                                                                     // 727
								createDateTimePicker(input);                                                                                   // 728
							}                                                                                                               // 729
							input                                                                                                           // 730
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft', initOnActionCallback)                                      // 731
								.trigger('open.xdsoft');                                                                                       // 732
						}, 100);                                                                                                         // 733
					});                                                                                                               // 734
			};                                                                                                                  // 735
                                                                                                                       // 736
		createDateTimePicker = function (input) {                                                                            // 737
			var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),                                // 738
				xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
				datepicker = $('<div class="xdsoft_datepicker active"></div>'),                                                    // 740
				mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' +
					'<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' +                                             // 742
					'<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' +                                              // 743
					'<button type="button" class="xdsoft_next"></button></div>'),                                                     // 744
				calendar = $('<div class="xdsoft_calendar"></div>'),                                                               // 745
				timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
				timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),                                                         // 747
				timebox = $('<div class="xdsoft_time_variant"></div>'),                                                            // 748
                applyButton = $('<button class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),   // 749
				/*scrollbar = $('<div class="xdsoft_scrollbar"></div>'),                                                           // 750
				scroller = $('<div class="xdsoft_scroller"></div>'),*/                                                             // 751
				monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),                                // 752
				yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),                                  // 753
				triggerAfterOpen = false,                                                                                          // 754
				XDSoft_datetime,                                                                                                   // 755
				//scroll_element,                                                                                                  // 756
				xchangeTimer,                                                                                                      // 757
				timerclick,                                                                                                        // 758
				current_time_index,                                                                                                // 759
				setPos,                                                                                                            // 760
				timer = 0,                                                                                                         // 761
				timer1 = 0,                                                                                                        // 762
				_xdsoft_datetime;                                                                                                  // 763
                                                                                                                       // 764
			if (options.id) datetimepicker.attr('id', options.id);                                                              // 765
			if (options.style) datetimepicker.attr('style', options.style);                                                     // 766
			if (options.weeks) datetimepicker.addClass('xdsoft_showweeks');                                                     // 767
                                                                                                                       // 768
			datetimepicker.addClass('xdsoft_' + options.theme);                                                                 // 769
			datetimepicker.addClass(options.className);                                                                         // 770
                                                                                                                       // 771
			mounth_picker                                                                                                       // 772
				.find('.xdsoft_month span')                                                                                        // 773
					.after(monthselect);                                                                                              // 774
			mounth_picker                                                                                                       // 775
				.find('.xdsoft_year span')                                                                                         // 776
					.after(yearselect);                                                                                               // 777
                                                                                                                       // 778
			mounth_picker                                                                                                       // 779
				.find('.xdsoft_month,.xdsoft_year')                                                                                // 780
					.on('mousedown.xdsoft', function (event) {                                                                        // 781
					var select = $(this).find('.xdsoft_select').eq(0),                                                                // 782
						val = 0,                                                                                                         // 783
						top = 0,                                                                                                         // 784
						visible = select.is(':visible'),                                                                                 // 785
						items,                                                                                                           // 786
						i;                                                                                                               // 787
                                                                                                                       // 788
					mounth_picker                                                                                                     // 789
						.find('.xdsoft_select')                                                                                          // 790
							.hide();                                                                                                        // 791
					if (_xdsoft_datetime.currentTime) {                                                                               // 792
						val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();             // 793
					}                                                                                                                 // 794
                                                                                                                       // 795
					select[visible ? 'hide' : 'show']();                                                                              // 796
					for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {                                 // 797
						if (items.eq(i).data('value') === val) {                                                                         // 798
							break;                                                                                                          // 799
						} else {                                                                                                         // 800
							top += items[0].offsetHeight;                                                                                   // 801
						}                                                                                                                // 802
					}                                                                                                                 // 803
                                                                                                                       // 804
					select.xdsoftScroller(top / (select.children()[0].offsetHeight - (select[0].clientHeight)));                      // 805
					event.stopPropagation();                                                                                          // 806
					return false;                                                                                                     // 807
				});                                                                                                                // 808
                                                                                                                       // 809
			mounth_picker                                                                                                       // 810
				.find('.xdsoft_select')                                                                                            // 811
					.xdsoftScroller()                                                                                                 // 812
				.on('mousedown.xdsoft', function (event) {                                                                         // 813
					event.stopPropagation();                                                                                          // 814
					event.preventDefault();                                                                                           // 815
				})                                                                                                                 // 816
				.on('mousedown.xdsoft', '.xdsoft_option', function (event) {                                                       // 817
                                                                                                                       // 818
					if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {                        // 819
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();                                                           // 820
					}                                                                                                                 // 821
                                                                                                                       // 822
					var year = _xdsoft_datetime.currentTime.getFullYear();                                                            // 823
					if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {                                                           // 824
						_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
					}                                                                                                                 // 826
                                                                                                                       // 827
					$(this).parent().parent().hide();                                                                                 // 828
                                                                                                                       // 829
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 830
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {                                               // 831
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));          // 832
					}                                                                                                                 // 833
                                                                                                                       // 834
					if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {                  // 835
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));           // 836
					}                                                                                                                 // 837
				});                                                                                                                // 838
                                                                                                                       // 839
			datetimepicker.setOptions = function (_options) {                                                                   // 840
				var highlightedDates = {},                                                                                         // 841
					getCaretPos = function (input) {                                                                                  // 842
						try {                                                                                                            // 843
							if (document.selection && document.selection.createRange) {                                                     // 844
								var range = document.selection.createRange();                                                                  // 845
								return range.getBookmark().charCodeAt(2) - 2;                                                                  // 846
							}                                                                                                               // 847
							if (input.setSelectionRange) {                                                                                  // 848
								return input.selectionStart;                                                                                   // 849
							}                                                                                                               // 850
						} catch (e) {                                                                                                    // 851
							return 0;                                                                                                       // 852
						}                                                                                                                // 853
					},                                                                                                                // 854
					setCaretPos = function (node, pos) {                                                                              // 855
						node = (typeof node === "string" || node instanceof String) ? document.getElementById(node) : node;              // 856
						if (!node) {                                                                                                     // 857
							return false;                                                                                                   // 858
						}                                                                                                                // 859
						if (node.createTextRange) {                                                                                      // 860
							var textRange = node.createTextRange();                                                                         // 861
							textRange.collapse(true);                                                                                       // 862
							textRange.moveEnd('character', pos);                                                                            // 863
							textRange.moveStart('character', pos);                                                                          // 864
							textRange.select();                                                                                             // 865
							return true;                                                                                                    // 866
						}                                                                                                                // 867
						if (node.setSelectionRange) {                                                                                    // 868
							node.setSelectionRange(pos, pos);                                                                               // 869
							return true;                                                                                                    // 870
						}                                                                                                                // 871
						return false;                                                                                                    // 872
					},                                                                                                                // 873
					isValidValue = function (mask, value) {                                                                           // 874
						var reg = mask                                                                                                   // 875
							.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1')                                                                // 876
							.replace(/_/g, '{digit+}')                                                                                      // 877
							.replace(/([0-9]{1})/g, '{digit$1}')                                                                            // 878
							.replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}')                                                                  // 879
							.replace(/\{digit[\+]\}/g, '[0-9_]{1}');                                                                        // 880
						return (new RegExp(reg)).test(value);                                                                            // 881
					};                                                                                                                // 882
				options = $.extend(true, {}, options, _options);                                                                   // 883
                                                                                                                       // 884
				if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {                         // 885
					options.allowTimes = $.extend(true, [], _options.allowTimes);                                                     // 886
				}                                                                                                                  // 887
                                                                                                                       // 888
				if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {                               // 889
					options.weekends = $.extend(true, [], _options.weekends);                                                         // 890
				}                                                                                                                  // 891
                                                                                                                       // 892
				if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {       // 893
					$.each(_options.highlightedDates, function (index, value) {                                                       // 894
						var splitData = $.map(value.split(','), $.trim),                                                                 // 895
							exDesc,                                                                                                         // 896
							hDate = new HighlightedDate(Date.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]), // date, desc, style
							keyDate = hDate.date.dateFormat(options.formatDate);                                                            // 898
						if (highlightedDates[keyDate] !== undefined) {                                                                   // 899
							exDesc = highlightedDates[keyDate].desc;                                                                        // 900
							if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {                                               // 901
								highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;                                                   // 902
							}                                                                                                               // 903
						} else {                                                                                                         // 904
							highlightedDates[keyDate] = hDate;                                                                              // 905
						}                                                                                                                // 906
					});                                                                                                               // 907
                                                                                                                       // 908
					options.highlightedDates = $.extend(true, [], highlightedDates);                                                  // 909
				}                                                                                                                  // 910
                                                                                                                       // 911
				if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) { // 912
					highlightedDates = $.extend(true, [], options.highlightedDates);                                                  // 913
					$.each(_options.highlightedPeriods, function (index, value) {                                                     // 914
						var splitData = $.map(value.split(','), $.trim),                                                                 // 915
							dateTest = Date.parseDate(splitData[0], options.formatDate), // start date                                      // 916
							dateEnd = Date.parseDate(splitData[1], options.formatDate),                                                     // 917
							desc = splitData[2],                                                                                            // 918
							hDate,                                                                                                          // 919
							keyDate,                                                                                                        // 920
							exDesc,                                                                                                         // 921
							style = splitData[3];                                                                                           // 922
                                                                                                                       // 923
						while (dateTest <= dateEnd) {                                                                                    // 924
							hDate = new HighlightedDate(dateTest, desc, style);                                                             // 925
							keyDate = dateTest.dateFormat(options.formatDate);                                                              // 926
							dateTest.setDate(dateTest.getDate() + 1);                                                                       // 927
							if (highlightedDates[keyDate] !== undefined) {                                                                  // 928
								exDesc = highlightedDates[keyDate].desc;                                                                       // 929
								if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {                                              // 930
									highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;                                                  // 931
								}                                                                                                              // 932
							} else {                                                                                                        // 933
								highlightedDates[keyDate] = hDate;                                                                             // 934
							}                                                                                                               // 935
						}                                                                                                                // 936
					});                                                                                                               // 937
                                                                                                                       // 938
					options.highlightedDates = $.extend(true, [], highlightedDates);                                                  // 939
				}                                                                                                                  // 940
                                                                                                                       // 941
				if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {                // 942
					options.disabledDates = $.extend(true, [], _options.disabledDates);                                               // 943
				}                                                                                                                  // 944
                                                                                                                       // 945
				if ((options.open || options.opened) && (!options.inline)) {                                                       // 946
					input.trigger('open.xdsoft');                                                                                     // 947
				}                                                                                                                  // 948
                                                                                                                       // 949
				if (options.inline) {                                                                                              // 950
					triggerAfterOpen = true;                                                                                          // 951
					datetimepicker.addClass('xdsoft_inline');                                                                         // 952
					input.after(datetimepicker).hide();                                                                               // 953
				}                                                                                                                  // 954
                                                                                                                       // 955
				if (options.inverseButton) {                                                                                       // 956
					options.next = 'xdsoft_prev';                                                                                     // 957
					options.prev = 'xdsoft_next';                                                                                     // 958
				}                                                                                                                  // 959
                                                                                                                       // 960
				if (options.datepicker) {                                                                                          // 961
					datepicker.addClass('active');                                                                                    // 962
				} else {                                                                                                           // 963
					datepicker.removeClass('active');                                                                                 // 964
				}                                                                                                                  // 965
                                                                                                                       // 966
				if (options.timepicker) {                                                                                          // 967
					timepicker.addClass('active');                                                                                    // 968
				} else {                                                                                                           // 969
					timepicker.removeClass('active');                                                                                 // 970
				}                                                                                                                  // 971
                                                                                                                       // 972
				if (options.value) {                                                                                               // 973
					_xdsoft_datetime.setCurrentTime(options.value);                                                                   // 974
					if (input && input.val) {                                                                                         // 975
						input.val(_xdsoft_datetime.str);                                                                                 // 976
					}                                                                                                                 // 977
				}                                                                                                                  // 978
                                                                                                                       // 979
				if (isNaN(options.dayOfWeekStart)) {                                                                               // 980
					options.dayOfWeekStart = 0;                                                                                       // 981
				} else {                                                                                                           // 982
					options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;                                                // 983
				}                                                                                                                  // 984
                                                                                                                       // 985
				if (!options.timepickerScrollbar) {                                                                                // 986
					timeboxparent.xdsoftScroller('hide');                                                                             // 987
				}                                                                                                                  // 988
                                                                                                                       // 989
				if (options.minDate && /^-(.*)$/.test(options.minDate)) {                                                          // 990
					options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat(options.formatDate);                 // 991
				}                                                                                                                  // 992
                                                                                                                       // 993
				if (options.maxDate &&  /^\+(.*)$/.test(options.maxDate)) {                                                        // 994
					options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat(options.formatDate);                 // 995
				}                                                                                                                  // 996
                                                                                                                       // 997
				applyButton.toggle(options.showApplyButton);                                                                       // 998
                                                                                                                       // 999
				mounth_picker                                                                                                      // 1000
					.find('.xdsoft_today_button')                                                                                     // 1001
						.css('visibility', !options.todayButton ? 'hidden' : 'visible');                                                 // 1002
                                                                                                                       // 1003
				mounth_picker                                                                                                      // 1004
					.find('.' + options.prev)                                                                                         // 1005
						.css('visibility', !options.prevButton ? 'hidden' : 'visible');                                                  // 1006
                                                                                                                       // 1007
				mounth_picker                                                                                                      // 1008
					.find('.' + options.next)                                                                                         // 1009
						.css('visibility', !options.nextButton ? 'hidden' : 'visible');                                                  // 1010
                                                                                                                       // 1011
				if (options.mask) {                                                                                                // 1012
					input.off('keydown.xdsoft');                                                                                      // 1013
                                                                                                                       // 1014
					if (options.mask === true) {                                                                                      // 1015
						options.mask = options.format                                                                                    // 1016
							.replace(/Y/g, '9999')                                                                                          // 1017
							.replace(/F/g, '9999')                                                                                          // 1018
							.replace(/m/g, '19')                                                                                            // 1019
							.replace(/d/g, '39')                                                                                            // 1020
							.replace(/H/g, '29')                                                                                            // 1021
							.replace(/i/g, '59')                                                                                            // 1022
							.replace(/s/g, '59');                                                                                           // 1023
					}                                                                                                                 // 1024
                                                                                                                       // 1025
					if ($.type(options.mask) === 'string') {                                                                          // 1026
						if (!isValidValue(options.mask, input.val())) {                                                                  // 1027
							input.val(options.mask.replace(/[0-9]/g, '_'));                                                                 // 1028
						}                                                                                                                // 1029
                                                                                                                       // 1030
						input.on('keydown.xdsoft', function (event) {                                                                    // 1031
							var val = this.value,                                                                                           // 1032
								key = event.which,                                                                                             // 1033
								pos,                                                                                                           // 1034
								digit;                                                                                                         // 1035
                                                                                                                       // 1036
							if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {   // 1037
								pos = getCaretPos(this);                                                                                       // 1038
								digit = (key !== BACKSPACE && key !== DEL) ? String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key) : '_';
                                                                                                                       // 1040
								if ((key === BACKSPACE || key === DEL) && pos) {                                                               // 1041
									pos -= 1;                                                                                                     // 1042
									digit = '_';                                                                                                  // 1043
								}                                                                                                              // 1044
                                                                                                                       // 1045
								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {                  // 1046
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;                                                           // 1047
								}                                                                                                              // 1048
                                                                                                                       // 1049
								val = val.substr(0, pos) + digit + val.substr(pos + 1);                                                        // 1050
								if ($.trim(val) === '') {                                                                                      // 1051
									val = options.mask.replace(/[0-9]/g, '_');                                                                    // 1052
								} else {                                                                                                       // 1053
									if (pos === options.mask.length) {                                                                            // 1054
										event.preventDefault();                                                                                      // 1055
										return false;                                                                                                // 1056
									}                                                                                                             // 1057
								}                                                                                                              // 1058
                                                                                                                       // 1059
								pos += (key === BACKSPACE || key === DEL) ? 0 : 1;                                                             // 1060
								while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {                  // 1061
									pos += (key === BACKSPACE || key === DEL) ? -1 : 1;                                                           // 1062
								}                                                                                                              // 1063
                                                                                                                       // 1064
								if (isValidValue(options.mask, val)) {                                                                         // 1065
									this.value = val;                                                                                             // 1066
									setCaretPos(this, pos);                                                                                       // 1067
								} else if ($.trim(val) === '') {                                                                               // 1068
									this.value = options.mask.replace(/[0-9]/g, '_');                                                             // 1069
								} else {                                                                                                       // 1070
									input.trigger('error_input.xdsoft');                                                                          // 1071
								}                                                                                                              // 1072
							} else {                                                                                                        // 1073
								if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
									return true;                                                                                                  // 1075
								}                                                                                                              // 1076
							}                                                                                                               // 1077
                                                                                                                       // 1078
							event.preventDefault();                                                                                         // 1079
							return false;                                                                                                   // 1080
						});                                                                                                              // 1081
					}                                                                                                                 // 1082
				}                                                                                                                  // 1083
				if (options.validateOnBlur) {                                                                                      // 1084
					input                                                                                                             // 1085
						.off('blur.xdsoft')                                                                                              // 1086
						.on('blur.xdsoft', function () {                                                                                 // 1087
							if (options.allowBlank && !$.trim($(this).val()).length) {                                                      // 1088
								$(this).val(null);                                                                                             // 1089
								datetimepicker.data('xdsoft_datetime').empty();                                                                // 1090
							} else if (!Date.parseDate($(this).val(), options.format)) {                                                    // 1091
								var splittedHours   = +([$(this).val()[0], $(this).val()[1]].join('')),                                        // 1092
									splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));                                           // 1093
                                                                                                                       // 1094
								// parse the numbers as 0312 => 03:12                                                                          // 1095
								if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
									$(this).val([splittedHours, splittedMinutes].map(function (item) {                                            // 1097
										return item > 9 ? item : '0' + item;                                                                         // 1098
									}).join(':'));                                                                                                // 1099
								} else {                                                                                                       // 1100
									$(this).val((_xdsoft_datetime.now()).dateFormat(options.format));                                             // 1101
								}                                                                                                              // 1102
                                                                                                                       // 1103
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());                                          // 1104
							} else {                                                                                                        // 1105
								datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());                                          // 1106
							}                                                                                                               // 1107
                                                                                                                       // 1108
							datetimepicker.trigger('changedatetime.xdsoft');                                                                // 1109
						});                                                                                                              // 1110
				}                                                                                                                  // 1111
				options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;                      // 1112
                                                                                                                       // 1113
				datetimepicker                                                                                                     // 1114
					.trigger('xchange.xdsoft')                                                                                        // 1115
					.trigger('afterOpen.xdsoft');                                                                                     // 1116
			};                                                                                                                  // 1117
                                                                                                                       // 1118
			datetimepicker                                                                                                      // 1119
				.data('options', options)                                                                                          // 1120
				.on('mousedown.xdsoft', function (event) {                                                                         // 1121
					event.stopPropagation();                                                                                          // 1122
					event.preventDefault();                                                                                           // 1123
					yearselect.hide();                                                                                                // 1124
					monthselect.hide();                                                                                               // 1125
					return false;                                                                                                     // 1126
				});                                                                                                                // 1127
                                                                                                                       // 1128
			//scroll_element = timepicker.find('.xdsoft_time_box');                                                             // 1129
			timeboxparent.append(timebox);                                                                                      // 1130
			timeboxparent.xdsoftScroller();                                                                                     // 1131
                                                                                                                       // 1132
			datetimepicker.on('afterOpen.xdsoft', function () {                                                                 // 1133
				timeboxparent.xdsoftScroller();                                                                                    // 1134
			});                                                                                                                 // 1135
                                                                                                                       // 1136
			datetimepicker                                                                                                      // 1137
				.append(datepicker)                                                                                                // 1138
				.append(timepicker);                                                                                               // 1139
                                                                                                                       // 1140
			if (options.withoutCopyright !== true) {                                                                            // 1141
				datetimepicker                                                                                                     // 1142
					.append(xdsoft_copyright);                                                                                        // 1143
			}                                                                                                                   // 1144
                                                                                                                       // 1145
			datepicker                                                                                                          // 1146
				.append(mounth_picker)                                                                                             // 1147
				.append(calendar)                                                                                                  // 1148
				.append(applyButton);                                                                                              // 1149
                                                                                                                       // 1150
			$(options.parentID)                                                                                                 // 1151
				.append(datetimepicker);                                                                                           // 1152
                                                                                                                       // 1153
			XDSoft_datetime = function () {                                                                                     // 1154
				var _this = this;                                                                                                  // 1155
				_this.now = function (norecursion) {                                                                               // 1156
					var d = new Date(),                                                                                               // 1157
						date,                                                                                                            // 1158
						time;                                                                                                            // 1159
                                                                                                                       // 1160
					if (!norecursion && options.defaultDate) {                                                                        // 1161
						date = _this.strToDateTime(options.defaultDate);                                                                 // 1162
						d.setFullYear(date.getFullYear());                                                                               // 1163
						d.setMonth(date.getMonth());                                                                                     // 1164
						d.setDate(date.getDate());                                                                                       // 1165
					}                                                                                                                 // 1166
                                                                                                                       // 1167
					if (options.yearOffset) {                                                                                         // 1168
						d.setFullYear(d.getFullYear() + options.yearOffset);                                                             // 1169
					}                                                                                                                 // 1170
                                                                                                                       // 1171
					if (!norecursion && options.defaultTime) {                                                                        // 1172
						time = _this.strtotime(options.defaultTime);                                                                     // 1173
						d.setHours(time.getHours());                                                                                     // 1174
						d.setMinutes(time.getMinutes());                                                                                 // 1175
					}                                                                                                                 // 1176
					return d;                                                                                                         // 1177
				};                                                                                                                 // 1178
                                                                                                                       // 1179
				_this.isValidDate = function (d) {                                                                                 // 1180
					if (Object.prototype.toString.call(d) !== "[object Date]") {                                                      // 1181
						return false;                                                                                                    // 1182
					}                                                                                                                 // 1183
					return !isNaN(d.getTime());                                                                                       // 1184
				};                                                                                                                 // 1185
                                                                                                                       // 1186
				_this.setCurrentTime = function (dTime) {                                                                          // 1187
					_this.currentTime = (typeof dTime === 'string') ? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime : _this.now();
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 1189
				};                                                                                                                 // 1190
                                                                                                                       // 1191
				_this.empty = function () {                                                                                        // 1192
					_this.currentTime = null;                                                                                         // 1193
				};                                                                                                                 // 1194
                                                                                                                       // 1195
				_this.getCurrentTime = function (dTime) {                                                                          // 1196
					return _this.currentTime;                                                                                         // 1197
				};                                                                                                                 // 1198
                                                                                                                       // 1199
				_this.nextMonth = function () {                                                                                    // 1200
                                                                                                                       // 1201
					if (_this.currentTime === undefined || _this.currentTime === null) {                                              // 1202
						_this.currentTime = _this.now();                                                                                 // 1203
					}                                                                                                                 // 1204
                                                                                                                       // 1205
					var month = _this.currentTime.getMonth() + 1,                                                                     // 1206
						year;                                                                                                            // 1207
					if (month === 12) {                                                                                               // 1208
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);                                              // 1209
						month = 0;                                                                                                       // 1210
					}                                                                                                                 // 1211
                                                                                                                       // 1212
					year = _this.currentTime.getFullYear();                                                                           // 1213
                                                                                                                       // 1214
					_this.currentTime.setDate(                                                                                        // 1215
						Math.min(                                                                                                        // 1216
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),                                              // 1217
							_this.currentTime.getDate()                                                                                     // 1218
						)                                                                                                                // 1219
					);                                                                                                                // 1220
					_this.currentTime.setMonth(month);                                                                                // 1221
                                                                                                                       // 1222
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {                                               // 1223
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));          // 1224
					}                                                                                                                 // 1225
                                                                                                                       // 1226
					if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {                             // 1227
						options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));           // 1228
					}                                                                                                                 // 1229
                                                                                                                       // 1230
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 1231
					return month;                                                                                                     // 1232
				};                                                                                                                 // 1233
                                                                                                                       // 1234
				_this.prevMonth = function () {                                                                                    // 1235
                                                                                                                       // 1236
					if (_this.currentTime === undefined || _this.currentTime === null) {                                              // 1237
						_this.currentTime = _this.now();                                                                                 // 1238
					}                                                                                                                 // 1239
                                                                                                                       // 1240
					var month = _this.currentTime.getMonth() - 1;                                                                     // 1241
					if (month === -1) {                                                                                               // 1242
						_this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);                                              // 1243
						month = 11;                                                                                                      // 1244
					}                                                                                                                 // 1245
					_this.currentTime.setDate(                                                                                        // 1246
						Math.min(                                                                                                        // 1247
							new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(),                                              // 1248
							_this.currentTime.getDate()                                                                                     // 1249
						)                                                                                                                // 1250
					);                                                                                                                // 1251
					_this.currentTime.setMonth(month);                                                                                // 1252
					if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {                                               // 1253
						options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));          // 1254
					}                                                                                                                 // 1255
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 1256
					return month;                                                                                                     // 1257
				};                                                                                                                 // 1258
                                                                                                                       // 1259
				_this.getWeekOfYear = function (datetime) {                                                                        // 1260
					var onejan = new Date(datetime.getFullYear(), 0, 1);                                                              // 1261
					return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);                                   // 1262
				};                                                                                                                 // 1263
                                                                                                                       // 1264
				_this.strToDateTime = function (sDateTime) {                                                                       // 1265
					var tmpDate = [], timeOffset, currentTime;                                                                        // 1266
                                                                                                                       // 1267
					if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {                                     // 1268
						return sDateTime;                                                                                                // 1269
					}                                                                                                                 // 1270
                                                                                                                       // 1271
					tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);                                                                        // 1272
					if (tmpDate) {                                                                                                    // 1273
						tmpDate[2] = Date.parseDate(tmpDate[2], options.formatDate);                                                     // 1274
					}                                                                                                                 // 1275
					if (tmpDate  && tmpDate[2]) {                                                                                     // 1276
						timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;                                    // 1277
						currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);               // 1278
					} else {                                                                                                          // 1279
						currentTime = sDateTime ? Date.parseDate(sDateTime, options.format) : _this.now();                               // 1280
					}                                                                                                                 // 1281
                                                                                                                       // 1282
					if (!_this.isValidDate(currentTime)) {                                                                            // 1283
						currentTime = _this.now();                                                                                       // 1284
					}                                                                                                                 // 1285
                                                                                                                       // 1286
					return currentTime;                                                                                               // 1287
				};                                                                                                                 // 1288
                                                                                                                       // 1289
				_this.strToDate = function (sDate) {                                                                               // 1290
					if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {                                                 // 1291
						return sDate;                                                                                                    // 1292
					}                                                                                                                 // 1293
                                                                                                                       // 1294
					var currentTime = sDate ? Date.parseDate(sDate, options.formatDate) : _this.now(true);                            // 1295
					if (!_this.isValidDate(currentTime)) {                                                                            // 1296
						currentTime = _this.now(true);                                                                                   // 1297
					}                                                                                                                 // 1298
					return currentTime;                                                                                               // 1299
				};                                                                                                                 // 1300
                                                                                                                       // 1301
				_this.strtotime = function (sTime) {                                                                               // 1302
					if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {                                                 // 1303
						return sTime;                                                                                                    // 1304
					}                                                                                                                 // 1305
					var currentTime = sTime ? Date.parseDate(sTime, options.formatTime) : _this.now(true);                            // 1306
					if (!_this.isValidDate(currentTime)) {                                                                            // 1307
						currentTime = _this.now(true);                                                                                   // 1308
					}                                                                                                                 // 1309
					return currentTime;                                                                                               // 1310
				};                                                                                                                 // 1311
                                                                                                                       // 1312
				_this.str = function () {                                                                                          // 1313
					return _this.currentTime.dateFormat(options.format);                                                              // 1314
				};                                                                                                                 // 1315
				_this.currentTime = this.now();                                                                                    // 1316
			};                                                                                                                  // 1317
                                                                                                                       // 1318
			_xdsoft_datetime = new XDSoft_datetime();                                                                           // 1319
                                                                                                                       // 1320
			applyButton.on('click', function (e) {//pathbrite                                                                   // 1321
                e.preventDefault();                                                                                    // 1322
                datetimepicker.data('changed', true);                                                                  // 1323
                _xdsoft_datetime.setCurrentTime(getCurrentValue());                                                    // 1324
                input.val(_xdsoft_datetime.str());                                                                     // 1325
                datetimepicker.trigger('close.xdsoft');                                                                // 1326
            });                                                                                                        // 1327
			mounth_picker                                                                                                       // 1328
				.find('.xdsoft_today_button')                                                                                      // 1329
				.on('mousedown.xdsoft', function () {                                                                              // 1330
					datetimepicker.data('changed', true);                                                                             // 1331
					_xdsoft_datetime.setCurrentTime(0);                                                                               // 1332
					datetimepicker.trigger('afterOpen.xdsoft');                                                                       // 1333
				}).on('dblclick.xdsoft', function () {                                                                             // 1334
					var currentDate = _xdsoft_datetime.getCurrentTime();                                                              // 1335
					currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());                   // 1336
					var minDate = _xdsoft_datetime.strToDate(options.minDate);                                                        // 1337
					minDate = new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());                                   // 1338
					if(currentDate < minDate) {                                                                                       // 1339
						return;                                                                                                          // 1340
					}                                                                                                                 // 1341
					var maxDate = _xdsoft_datetime.strToDate(options.maxDate);                                                        // 1342
					maxDate = new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate());                                   // 1343
					if(currentDate > maxDate) {                                                                                       // 1344
						return;                                                                                                          // 1345
					}                                                                                                                 // 1346
					input.val(_xdsoft_datetime.str());                                                                                // 1347
					datetimepicker.trigger('close.xdsoft');                                                                           // 1348
				});                                                                                                                // 1349
			mounth_picker                                                                                                       // 1350
				.find('.xdsoft_prev,.xdsoft_next')                                                                                 // 1351
				.on('mousedown.xdsoft', function () {                                                                              // 1352
					var $this = $(this),                                                                                              // 1353
						timer = 0,                                                                                                       // 1354
						stop = false;                                                                                                    // 1355
                                                                                                                       // 1356
					(function arguments_callee1(v) {                                                                                  // 1357
						if ($this.hasClass(options.next)) {                                                                              // 1358
							_xdsoft_datetime.nextMonth();                                                                                   // 1359
						} else if ($this.hasClass(options.prev)) {                                                                       // 1360
							_xdsoft_datetime.prevMonth();                                                                                   // 1361
						}                                                                                                                // 1362
						if (options.monthChangeSpinner) {                                                                                // 1363
							if (!stop) {                                                                                                    // 1364
								timer = setTimeout(arguments_callee1, v || 100);                                                               // 1365
							}                                                                                                               // 1366
						}                                                                                                                // 1367
					}(500));                                                                                                          // 1368
                                                                                                                       // 1369
					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee2() {                                    // 1370
						clearTimeout(timer);                                                                                             // 1371
						stop = true;                                                                                                     // 1372
						$([document.body, window]).off('mouseup.xdsoft', arguments_callee2);                                             // 1373
					});                                                                                                               // 1374
				});                                                                                                                // 1375
                                                                                                                       // 1376
			timepicker                                                                                                          // 1377
				.find('.xdsoft_prev,.xdsoft_next')                                                                                 // 1378
				.on('mousedown.xdsoft', function () {                                                                              // 1379
					var $this = $(this),                                                                                              // 1380
						timer = 0,                                                                                                       // 1381
						stop = false,                                                                                                    // 1382
						period = 110;                                                                                                    // 1383
					(function arguments_callee4(v) {                                                                                  // 1384
						var pheight = timeboxparent[0].clientHeight,                                                                     // 1385
							height = timebox[0].offsetHeight,                                                                               // 1386
							top = Math.abs(parseInt(timebox.css('marginTop'), 10));                                                         // 1387
						if ($this.hasClass(options.next) && (height - pheight) - options.timeHeightInTimePicker >= top) {                // 1388
							timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');                                  // 1389
						} else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {                          // 1390
							timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');                                  // 1391
						}                                                                                                                // 1392
						timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox.css('marginTop'), 10) / (height - pheight))]);
						period = (period > 10) ? 10 : period - 10;                                                                       // 1394
						if (!stop) {                                                                                                     // 1395
							timer = setTimeout(arguments_callee4, v || period);                                                             // 1396
						}                                                                                                                // 1397
					}(500));                                                                                                          // 1398
					$([document.body, window]).on('mouseup.xdsoft', function arguments_callee5() {                                    // 1399
						clearTimeout(timer);                                                                                             // 1400
						stop = true;                                                                                                     // 1401
						$([document.body, window])                                                                                       // 1402
							.off('mouseup.xdsoft', arguments_callee5);                                                                      // 1403
					});                                                                                                               // 1404
				});                                                                                                                // 1405
                                                                                                                       // 1406
			xchangeTimer = 0;                                                                                                   // 1407
			// base handler - generating a calendar and timepicker                                                              // 1408
			datetimepicker                                                                                                      // 1409
				.on('xchange.xdsoft', function (event) {                                                                           // 1410
					clearTimeout(xchangeTimer);                                                                                       // 1411
					xchangeTimer = setTimeout(function () {                                                                           // 1412
                                                                                                                       // 1413
						if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {                       // 1414
							_xdsoft_datetime.currentTime = _xdsoft_datetime.now();                                                          // 1415
						}                                                                                                                // 1416
                                                                                                                       // 1417
						var table =	'',                                                                                                  // 1418
							start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
							i = 0,                                                                                                          // 1420
							j,                                                                                                              // 1421
							today = _xdsoft_datetime.now(),                                                                                 // 1422
							maxDate = false,                                                                                                // 1423
							minDate = false,                                                                                                // 1424
							hDate,                                                                                                          // 1425
							d,                                                                                                              // 1426
							y,                                                                                                              // 1427
							m,                                                                                                              // 1428
							w,                                                                                                              // 1429
							classes = [],                                                                                                   // 1430
							customDateSettings,                                                                                             // 1431
							newRow = true,                                                                                                  // 1432
							time = '',                                                                                                      // 1433
							h = '',                                                                                                         // 1434
							line_time,                                                                                                      // 1435
							description;                                                                                                    // 1436
                                                                                                                       // 1437
						while (start.getDay() !== options.dayOfWeekStart) {                                                              // 1438
							start.setDate(start.getDate() - 1);                                                                             // 1439
						}                                                                                                                // 1440
                                                                                                                       // 1441
						table += '<table><thead><tr>';                                                                                   // 1442
                                                                                                                       // 1443
						if (options.weeks) {                                                                                             // 1444
							table += '<th></th>';                                                                                           // 1445
						}                                                                                                                // 1446
                                                                                                                       // 1447
						for (j = 0; j < 7; j += 1) {                                                                                     // 1448
							table += '<th>' + options.i18n[options.lang].dayOfWeek[(j + options.dayOfWeekStart) % 7] + '</th>';             // 1449
						}                                                                                                                // 1450
                                                                                                                       // 1451
						table += '</tr></thead>';                                                                                        // 1452
						table += '<tbody>';                                                                                              // 1453
                                                                                                                       // 1454
						if (options.maxDate !== false) {                                                                                 // 1455
							maxDate = _xdsoft_datetime.strToDate(options.maxDate);                                                          // 1456
							maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);              // 1457
						}                                                                                                                // 1458
                                                                                                                       // 1459
						if (options.minDate !== false) {                                                                                 // 1460
							minDate = _xdsoft_datetime.strToDate(options.minDate);                                                          // 1461
							minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());                               // 1462
						}                                                                                                                // 1463
                                                                                                                       // 1464
						while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
							classes = [];                                                                                                   // 1466
							i += 1;                                                                                                         // 1467
                                                                                                                       // 1468
							d = start.getDate();                                                                                            // 1469
							y = start.getFullYear();                                                                                        // 1470
							m = start.getMonth();                                                                                           // 1471
							w = _xdsoft_datetime.getWeekOfYear(start);                                                                      // 1472
							description = '';                                                                                               // 1473
                                                                                                                       // 1474
							classes.push('xdsoft_date');                                                                                    // 1475
                                                                                                                       // 1476
							if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {                                        // 1477
								customDateSettings = options.beforeShowDay.call(datetimepicker, start);                                        // 1478
							} else {                                                                                                        // 1479
								customDateSettings = null;                                                                                     // 1480
							}                                                                                                               // 1481
                                                                                                                       // 1482
							if ((maxDate !== false && start > maxDate) || (minDate !== false && start < minDate) || (customDateSettings && customDateSettings[0] === false)) {
								classes.push('xdsoft_disabled');                                                                               // 1484
							} else if (options.disabledDates.indexOf(start.dateFormat(options.formatDate)) !== -1) {                        // 1485
								classes.push('xdsoft_disabled');                                                                               // 1486
							}                                                                                                               // 1487
                                                                                                                       // 1488
							if (customDateSettings && customDateSettings[1] !== "") {                                                       // 1489
								classes.push(customDateSettings[1]);                                                                           // 1490
							}                                                                                                               // 1491
                                                                                                                       // 1492
							if (_xdsoft_datetime.currentTime.getMonth() !== m) {                                                            // 1493
								classes.push('xdsoft_other_month');                                                                            // 1494
							}                                                                                                               // 1495
                                                                                                                       // 1496
							if ((options.defaultSelect || datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {
								classes.push('xdsoft_current');                                                                                // 1498
							}                                                                                                               // 1499
                                                                                                                       // 1500
							if (today.dateFormat(options.formatDate) === start.dateFormat(options.formatDate)) {                            // 1501
								classes.push('xdsoft_today');                                                                                  // 1502
							}                                                                                                               // 1503
                                                                                                                       // 1504
							if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(start.dateFormat(options.formatDate)) !== -1) {
								classes.push('xdsoft_weekend');                                                                                // 1506
							}                                                                                                               // 1507
                                                                                                                       // 1508
							if (options.highlightedDates[start.dateFormat(options.formatDate)] !== undefined) {                             // 1509
								hDate = options.highlightedDates[start.dateFormat(options.formatDate)];                                        // 1510
								classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);                          // 1511
								description = hDate.desc === undefined ? '' : hDate.desc;                                                      // 1512
							}                                                                                                               // 1513
                                                                                                                       // 1514
							if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {                                             // 1515
								classes.push(options.beforeShowDay(start));                                                                    // 1516
							}                                                                                                               // 1517
                                                                                                                       // 1518
							if (newRow) {                                                                                                   // 1519
								table += '<tr>';                                                                                               // 1520
								newRow = false;                                                                                                // 1521
								if (options.weeks) {                                                                                           // 1522
									table += '<th>' + w + '</th>';                                                                                // 1523
								}                                                                                                              // 1524
							}                                                                                                               // 1525
                                                                                                                       // 1526
							table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' +
										'<div>' + d + '</div>' +                                                                                     // 1528
									'</td>';                                                                                                      // 1529
                                                                                                                       // 1530
							if (start.getDay() === options.dayOfWeekStartPrev) {                                                            // 1531
								table += '</tr>';                                                                                              // 1532
								newRow = true;                                                                                                 // 1533
							}                                                                                                               // 1534
                                                                                                                       // 1535
							start.setDate(d + 1);                                                                                           // 1536
						}                                                                                                                // 1537
						table += '</tbody></table>';                                                                                     // 1538
                                                                                                                       // 1539
						calendar.html(table);                                                                                            // 1540
                                                                                                                       // 1541
						mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
						mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());                 // 1543
                                                                                                                       // 1544
						// generate timebox                                                                                              // 1545
						time = '';                                                                                                       // 1546
						h = '';                                                                                                          // 1547
						m = '';                                                                                                          // 1548
						line_time = function line_time(h, m) {                                                                           // 1549
							var now = _xdsoft_datetime.now(), optionDateTime, current_time;                                                 // 1550
							now.setHours(h);                                                                                                // 1551
							h = parseInt(now.getHours(), 10);                                                                               // 1552
							now.setMinutes(m);                                                                                              // 1553
							m = parseInt(now.getMinutes(), 10);                                                                             // 1554
							optionDateTime = new Date(_xdsoft_datetime.currentTime);                                                        // 1555
							optionDateTime.setHours(h);                                                                                     // 1556
							optionDateTime.setMinutes(m);                                                                                   // 1557
							classes = [];                                                                                                   // 1558
							if ((options.minDateTime !== false && options.minDateTime > optionDateTime) || (options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime()) || (options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime())) {
								classes.push('xdsoft_disabled');                                                                               // 1560
							}                                                                                                               // 1561
                                                                                                                       // 1562
							current_time = new Date(_xdsoft_datetime.currentTime);                                                          // 1563
							current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));                                   // 1564
							current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                                                                                                                       // 1566
							if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
								if (options.defaultSelect || datetimepicker.data('changed')) {                                                 // 1568
									classes.push('xdsoft_current');                                                                               // 1569
								} else if (options.initTime) {                                                                                 // 1570
									classes.push('xdsoft_init_time');                                                                             // 1571
								}                                                                                                              // 1572
							}                                                                                                               // 1573
							if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
								classes.push('xdsoft_today');                                                                                  // 1575
							}                                                                                                               // 1576
							time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + now.dateFormat(options.formatTime) + '</div>';
						};                                                                                                               // 1578
                                                                                                                       // 1579
						if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {                       // 1580
							for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {                                                   // 1581
								for (j = 0; j < 60; j += options.step) {                                                                       // 1582
									h = (i < 10 ? '0' : '') + i;                                                                                  // 1583
									m = (j < 10 ? '0' : '') + j;                                                                                  // 1584
									line_time(h, m);                                                                                              // 1585
								}                                                                                                              // 1586
							}                                                                                                               // 1587
						} else {                                                                                                         // 1588
							for (i = 0; i < options.allowTimes.length; i += 1) {                                                            // 1589
								h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();                                              // 1590
								m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();                                            // 1591
								line_time(h, m);                                                                                               // 1592
							}                                                                                                               // 1593
						}                                                                                                                // 1594
                                                                                                                       // 1595
						timebox.html(time);                                                                                              // 1596
                                                                                                                       // 1597
						opt = '';                                                                                                        // 1598
						i = 0;                                                                                                           // 1599
                                                                                                                       // 1600
						for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
						}                                                                                                                // 1603
						yearselect.children().eq(0)                                                                                      // 1604
												.html(opt);                                                                                                // 1605
                                                                                                                       // 1606
						for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {              // 1607
							opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[options.lang].months[i] + '</div>';
						}                                                                                                                // 1609
						monthselect.children().eq(0).html(opt);                                                                          // 1610
						$(datetimepicker)                                                                                                // 1611
							.trigger('generate.xdsoft');                                                                                    // 1612
					}, 10);                                                                                                           // 1613
					event.stopPropagation();                                                                                          // 1614
				})                                                                                                                 // 1615
				.on('afterOpen.xdsoft', function () {                                                                              // 1616
					if (options.timepicker) {                                                                                         // 1617
						var classType, pheight, height, top;                                                                             // 1618
						if (timebox.find('.xdsoft_current').length) {                                                                    // 1619
							classType = '.xdsoft_current';                                                                                  // 1620
						} else if (timebox.find('.xdsoft_init_time').length) {                                                           // 1621
							classType = '.xdsoft_init_time';                                                                                // 1622
						}                                                                                                                // 1623
						if (classType) {                                                                                                 // 1624
							pheight = timeboxparent[0].clientHeight;                                                                        // 1625
							height = timebox[0].offsetHeight;                                                                               // 1626
							top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;                                     // 1627
							if ((height - pheight) < top) {                                                                                 // 1628
								top = height - pheight;                                                                                        // 1629
							}                                                                                                               // 1630
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);              // 1631
						} else {                                                                                                         // 1632
							timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);                                                   // 1633
						}                                                                                                                // 1634
					}                                                                                                                 // 1635
				});                                                                                                                // 1636
                                                                                                                       // 1637
			timerclick = 0;                                                                                                     // 1638
			calendar                                                                                                            // 1639
				.on('click.xdsoft', 'td', function (xdevent) {                                                                     // 1640
					xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap                       // 1641
					timerclick += 1;                                                                                                  // 1642
					var $this = $(this),                                                                                              // 1643
						currentTime = _xdsoft_datetime.currentTime;                                                                      // 1644
                                                                                                                       // 1645
					if (currentTime === undefined || currentTime === null) {                                                          // 1646
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();                                                           // 1647
						currentTime = _xdsoft_datetime.currentTime;                                                                      // 1648
					}                                                                                                                 // 1649
                                                                                                                       // 1650
					if ($this.hasClass('xdsoft_disabled')) {                                                                          // 1651
						return false;                                                                                                    // 1652
					}                                                                                                                 // 1653
                                                                                                                       // 1654
					currentTime.setDate(1);                                                                                           // 1655
					currentTime.setFullYear($this.data('year'));                                                                      // 1656
					currentTime.setMonth($this.data('month'));                                                                        // 1657
					currentTime.setDate($this.data('date'));                                                                          // 1658
                                                                                                                       // 1659
					datetimepicker.trigger('select.xdsoft', [currentTime]);                                                           // 1660
                                                                                                                       // 1661
					input.val(_xdsoft_datetime.str());                                                                                // 1662
					if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === 0 && !options.timepicker))) && !options.inline) {
						datetimepicker.trigger('close.xdsoft');                                                                          // 1664
					}                                                                                                                 // 1665
                                                                                                                       // 1666
					if (options.onSelectDate &&	$.isFunction(options.onSelectDate)) {                                                 // 1667
						options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);  // 1668
					}                                                                                                                 // 1669
                                                                                                                       // 1670
					datetimepicker.data('changed', true);                                                                             // 1671
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 1672
					datetimepicker.trigger('changedatetime.xdsoft');                                                                  // 1673
					setTimeout(function () {                                                                                          // 1674
						timerclick = 0;                                                                                                  // 1675
					}, 200);                                                                                                          // 1676
				});                                                                                                                // 1677
                                                                                                                       // 1678
			timebox                                                                                                             // 1679
				.on('click.xdsoft', 'div', function (xdevent) {                                                                    // 1680
					xdevent.stopPropagation();                                                                                        // 1681
					var $this = $(this),                                                                                              // 1682
						currentTime = _xdsoft_datetime.currentTime;                                                                      // 1683
                                                                                                                       // 1684
					if (currentTime === undefined || currentTime === null) {                                                          // 1685
						_xdsoft_datetime.currentTime = _xdsoft_datetime.now();                                                           // 1686
						currentTime = _xdsoft_datetime.currentTime;                                                                      // 1687
					}                                                                                                                 // 1688
                                                                                                                       // 1689
					if ($this.hasClass('xdsoft_disabled')) {                                                                          // 1690
						return false;                                                                                                    // 1691
					}                                                                                                                 // 1692
					currentTime.setHours($this.data('hour'));                                                                         // 1693
					currentTime.setMinutes($this.data('minute'));                                                                     // 1694
					datetimepicker.trigger('select.xdsoft', [currentTime]);                                                           // 1695
                                                                                                                       // 1696
					datetimepicker.data('input').val(_xdsoft_datetime.str());                                                         // 1697
                                                                                                                       // 1698
                    if (options.inline !== true && options.closeOnTimeSelect === true) {                               // 1699
                        datetimepicker.trigger('close.xdsoft');                                                        // 1700
                    }                                                                                                  // 1701
                                                                                                                       // 1702
					if (options.onSelectTime && $.isFunction(options.onSelectTime)) {                                                 // 1703
						options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);  // 1704
					}                                                                                                                 // 1705
					datetimepicker.data('changed', true);                                                                             // 1706
					datetimepicker.trigger('xchange.xdsoft');                                                                         // 1707
					datetimepicker.trigger('changedatetime.xdsoft');                                                                  // 1708
				});                                                                                                                // 1709
                                                                                                                       // 1710
                                                                                                                       // 1711
			datepicker                                                                                                          // 1712
				.on('mousewheel.xdsoft', function (event) {                                                                        // 1713
					if (!options.scrollMonth) {                                                                                       // 1714
						return true;                                                                                                     // 1715
					}                                                                                                                 // 1716
					if (event.deltaY < 0) {                                                                                           // 1717
						_xdsoft_datetime.nextMonth();                                                                                    // 1718
					} else {                                                                                                          // 1719
						_xdsoft_datetime.prevMonth();                                                                                    // 1720
					}                                                                                                                 // 1721
					return false;                                                                                                     // 1722
				});                                                                                                                // 1723
                                                                                                                       // 1724
			input                                                                                                               // 1725
				.on('mousewheel.xdsoft', function (event) {                                                                        // 1726
					if (!options.scrollInput) {                                                                                       // 1727
						return true;                                                                                                     // 1728
					}                                                                                                                 // 1729
					if (!options.datepicker && options.timepicker) {                                                                  // 1730
						current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0; // 1731
						if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {   // 1732
							current_time_index += event.deltaY;                                                                             // 1733
						}                                                                                                                // 1734
						if (timebox.children().eq(current_time_index).length) {                                                          // 1735
							timebox.children().eq(current_time_index).trigger('mousedown');                                                 // 1736
						}                                                                                                                // 1737
						return false;                                                                                                    // 1738
					}                                                                                                                 // 1739
					if (options.datepicker && !options.timepicker) {                                                                  // 1740
						datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);                                           // 1741
						if (input.val) {                                                                                                 // 1742
							input.val(_xdsoft_datetime.str());                                                                              // 1743
						}                                                                                                                // 1744
						datetimepicker.trigger('changedatetime.xdsoft');                                                                 // 1745
						return false;                                                                                                    // 1746
					}                                                                                                                 // 1747
				});                                                                                                                // 1748
                                                                                                                       // 1749
			datetimepicker                                                                                                      // 1750
				.on('changedatetime.xdsoft', function (event) {                                                                    // 1751
					if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {                                         // 1752
						var $input = datetimepicker.data('input');                                                                       // 1753
						options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);                      // 1754
						delete options.value;                                                                                            // 1755
						$input.trigger('change');                                                                                        // 1756
					}                                                                                                                 // 1757
				})                                                                                                                 // 1758
				.on('generate.xdsoft', function () {                                                                               // 1759
					if (options.onGenerate && $.isFunction(options.onGenerate)) {                                                     // 1760
						options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));             // 1761
					}                                                                                                                 // 1762
					if (triggerAfterOpen) {                                                                                           // 1763
						datetimepicker.trigger('afterOpen.xdsoft');                                                                      // 1764
						triggerAfterOpen = false;                                                                                        // 1765
					}                                                                                                                 // 1766
				})                                                                                                                 // 1767
				.on('click.xdsoft', function (xdevent) {                                                                           // 1768
					xdevent.stopPropagation();                                                                                        // 1769
				});                                                                                                                // 1770
                                                                                                                       // 1771
			current_time_index = 0;                                                                                             // 1772
                                                                                                                       // 1773
			setPos = function () {                                                                                              // 1774
				var offset = datetimepicker.data('input').offset(), top = offset.top + datetimepicker.data('input')[0].offsetHeight - 1, left = offset.left, position = "absolute";
				if (options.fixed) {                                                                                               // 1776
					top -= $(window).scrollTop();                                                                                     // 1777
					left -= $(window).scrollLeft();                                                                                   // 1778
					position = "fixed";                                                                                               // 1779
				} else {                                                                                                           // 1780
					if (top + datetimepicker[0].offsetHeight > $(window).height() + $(window).scrollTop()) {                          // 1781
						top = offset.top - datetimepicker[0].offsetHeight + 1;                                                           // 1782
					}                                                                                                                 // 1783
					if (top < 0) {                                                                                                    // 1784
						top = 0;                                                                                                         // 1785
					}                                                                                                                 // 1786
					if (left + datetimepicker[0].offsetWidth > $(window).width()) {                                                   // 1787
						left = $(window).width() - datetimepicker[0].offsetWidth;                                                        // 1788
					}                                                                                                                 // 1789
				}                                                                                                                  // 1790
				datetimepicker.css({                                                                                               // 1791
					left: left,                                                                                                       // 1792
					top: top,                                                                                                         // 1793
					position: position                                                                                                // 1794
				});                                                                                                                // 1795
			};                                                                                                                  // 1796
			datetimepicker                                                                                                      // 1797
				.on('open.xdsoft', function (event) {                                                                              // 1798
					var onShow = true;                                                                                                // 1799
					if (options.onShow && $.isFunction(options.onShow)) {                                                             // 1800
						onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event); // 1801
					}                                                                                                                 // 1802
					if (onShow !== false) {                                                                                           // 1803
						datetimepicker.show();                                                                                           // 1804
						setPos();                                                                                                        // 1805
						$(window)                                                                                                        // 1806
							.off('resize.xdsoft', setPos)                                                                                   // 1807
							.on('resize.xdsoft', setPos);                                                                                   // 1808
                                                                                                                       // 1809
						if (options.closeOnWithoutClick) {                                                                               // 1810
							$([document.body, window]).on('mousedown.xdsoft', function arguments_callee6() {                                // 1811
								datetimepicker.trigger('close.xdsoft');                                                                        // 1812
								$([document.body, window]).off('mousedown.xdsoft', arguments_callee6);                                         // 1813
							});                                                                                                             // 1814
						}                                                                                                                // 1815
					}                                                                                                                 // 1816
				})                                                                                                                 // 1817
				.on('close.xdsoft', function (event) {                                                                             // 1818
					var onClose = true;                                                                                               // 1819
					mounth_picker                                                                                                     // 1820
						.find('.xdsoft_month,.xdsoft_year')                                                                              // 1821
							.find('.xdsoft_select')                                                                                         // 1822
								.hide();                                                                                                       // 1823
					if (options.onClose && $.isFunction(options.onClose)) {                                                           // 1824
						onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
					}                                                                                                                 // 1826
					if (onClose !== false && !options.opened && !options.inline) {                                                    // 1827
						datetimepicker.hide();                                                                                           // 1828
					}                                                                                                                 // 1829
					event.stopPropagation();                                                                                          // 1830
				})                                                                                                                 // 1831
				.on('toggle.xdsoft', function (event) {                                                                            // 1832
					if (datetimepicker.is(':visible')) {                                                                              // 1833
						datetimepicker.trigger('close.xdsoft');                                                                          // 1834
					} else {                                                                                                          // 1835
						datetimepicker.trigger('open.xdsoft');                                                                           // 1836
					}                                                                                                                 // 1837
				})                                                                                                                 // 1838
				.data('input', input);                                                                                             // 1839
                                                                                                                       // 1840
			timer = 0;                                                                                                          // 1841
			timer1 = 0;                                                                                                         // 1842
                                                                                                                       // 1843
			datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);                                                           // 1844
			datetimepicker.setOptions(options);                                                                                 // 1845
                                                                                                                       // 1846
			function getCurrentValue() {                                                                                        // 1847
				var ct = false, time;                                                                                              // 1848
                                                                                                                       // 1849
				if (options.startDate) {                                                                                           // 1850
					ct = _xdsoft_datetime.strToDate(options.startDate);                                                               // 1851
				} else {                                                                                                           // 1852
					ct = options.value || ((input && input.val && input.val()) ? input.val() : '');                                   // 1853
					if (ct) {                                                                                                         // 1854
						ct = _xdsoft_datetime.strToDateTime(ct);                                                                         // 1855
					} else if (options.defaultDate) {                                                                                 // 1856
						ct = _xdsoft_datetime.strToDateTime(options.defaultDate);                                                        // 1857
						if (options.defaultTime) {                                                                                       // 1858
							time = _xdsoft_datetime.strtotime(options.defaultTime);                                                         // 1859
							ct.setHours(time.getHours());                                                                                   // 1860
							ct.setMinutes(time.getMinutes());                                                                               // 1861
						}                                                                                                                // 1862
					}                                                                                                                 // 1863
				}                                                                                                                  // 1864
                                                                                                                       // 1865
				if (ct && _xdsoft_datetime.isValidDate(ct)) {                                                                      // 1866
					datetimepicker.data('changed', true);                                                                             // 1867
				} else {                                                                                                           // 1868
					ct = '';                                                                                                          // 1869
				}                                                                                                                  // 1870
                                                                                                                       // 1871
				return ct || 0;                                                                                                    // 1872
			}                                                                                                                   // 1873
                                                                                                                       // 1874
			_xdsoft_datetime.setCurrentTime(getCurrentValue());                                                                 // 1875
                                                                                                                       // 1876
			input                                                                                                               // 1877
				.data('xdsoft_datetimepicker', datetimepicker)                                                                     // 1878
				.on('open.xdsoft focusin.xdsoft mousedown.xdsoft', function (event) {                                              // 1879
					if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) { // 1880
						return;                                                                                                          // 1881
					}                                                                                                                 // 1882
					clearTimeout(timer);                                                                                              // 1883
					timer = setTimeout(function () {                                                                                  // 1884
						if (input.is(':disabled')) {                                                                                     // 1885
							return;                                                                                                         // 1886
						}                                                                                                                // 1887
                                                                                                                       // 1888
						triggerAfterOpen = true;                                                                                         // 1889
						_xdsoft_datetime.setCurrentTime(getCurrentValue());                                                              // 1890
                                                                                                                       // 1891
						datetimepicker.trigger('open.xdsoft');                                                                           // 1892
					}, 100);                                                                                                          // 1893
				})                                                                                                                 // 1894
				.on('keydown.xdsoft', function (event) {                                                                           // 1895
					var val = this.value, elementSelector,                                                                            // 1896
						key = event.which;                                                                                               // 1897
					if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {                                                        // 1898
						elementSelector = $("input:visible,textarea:visible");                                                           // 1899
						datetimepicker.trigger('close.xdsoft');                                                                          // 1900
						elementSelector.eq(elementSelector.index(this) + 1).focus();                                                     // 1901
						return false;                                                                                                    // 1902
					}                                                                                                                 // 1903
					if ([TAB].indexOf(key) !== -1) {                                                                                  // 1904
						datetimepicker.trigger('close.xdsoft');                                                                          // 1905
						return true;                                                                                                     // 1906
					}                                                                                                                 // 1907
				});                                                                                                                // 1908
		};                                                                                                                   // 1909
		destroyDateTimePicker = function (input) {                                                                           // 1910
			var datetimepicker = input.data('xdsoft_datetimepicker');                                                           // 1911
			if (datetimepicker) {                                                                                               // 1912
				datetimepicker.data('xdsoft_datetime', null);                                                                      // 1913
				datetimepicker.remove();                                                                                           // 1914
				input                                                                                                              // 1915
					.data('xdsoft_datetimepicker', null)                                                                              // 1916
					.off('.xdsoft');                                                                                                  // 1917
				$(window).off('resize.xdsoft');                                                                                    // 1918
				$([window, document.body]).off('mousedown.xdsoft');                                                                // 1919
				if (input.unmousewheel) {                                                                                          // 1920
					input.unmousewheel();                                                                                             // 1921
				}                                                                                                                  // 1922
			}                                                                                                                   // 1923
		};                                                                                                                   // 1924
		$(document)                                                                                                          // 1925
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')                                                                         // 1926
			.on('keydown.xdsoftctrl', function (e) {                                                                            // 1927
				if (e.keyCode === CTRLKEY) {                                                                                       // 1928
					ctrlDown = true;                                                                                                  // 1929
				}                                                                                                                  // 1930
			})                                                                                                                  // 1931
			.on('keyup.xdsoftctrl', function (e) {                                                                              // 1932
				if (e.keyCode === CTRLKEY) {                                                                                       // 1933
					ctrlDown = false;                                                                                                 // 1934
				}                                                                                                                  // 1935
			});                                                                                                                 // 1936
		return this.each(function () {                                                                                       // 1937
			var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;                                                 // 1938
			if (datetimepicker) {                                                                                               // 1939
				if ($.type(opt) === 'string') {                                                                                    // 1940
					switch (opt) {                                                                                                    // 1941
					case 'show':                                                                                                      // 1942
						$(this).select().focus();                                                                                        // 1943
						datetimepicker.trigger('open.xdsoft');                                                                           // 1944
						break;                                                                                                           // 1945
					case 'hide':                                                                                                      // 1946
						datetimepicker.trigger('close.xdsoft');                                                                          // 1947
						break;                                                                                                           // 1948
					case 'toggle':                                                                                                    // 1949
						datetimepicker.trigger('toggle.xdsoft');                                                                         // 1950
						break;                                                                                                           // 1951
					case 'destroy':                                                                                                   // 1952
						destroyDateTimePicker($(this));                                                                                  // 1953
						break;                                                                                                           // 1954
					case 'reset':                                                                                                     // 1955
						this.value = this.defaultValue;                                                                                  // 1956
						if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format))) {
							datetimepicker.data('changed', false);                                                                          // 1958
						}                                                                                                                // 1959
						datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);                                               // 1960
						break;                                                                                                           // 1961
					case 'validate':                                                                                                  // 1962
						$input = datetimepicker.data('input');                                                                           // 1963
						$input.trigger('blur.xdsoft');                                                                                   // 1964
						break;                                                                                                           // 1965
					}                                                                                                                 // 1966
				} else {                                                                                                           // 1967
					datetimepicker                                                                                                    // 1968
						.setOptions(opt);                                                                                                // 1969
				}                                                                                                                  // 1970
				return 0;                                                                                                          // 1971
			}                                                                                                                   // 1972
			if ($.type(opt) !== 'string') {                                                                                     // 1973
				if (!options.lazyInit || options.open || options.inline) {                                                         // 1974
					createDateTimePicker($(this));                                                                                    // 1975
				} else {                                                                                                           // 1976
					lazyInit($(this));                                                                                                // 1977
				}                                                                                                                  // 1978
			}                                                                                                                   // 1979
		});                                                                                                                  // 1980
	};                                                                                                                    // 1981
	$.fn.datetimepicker.defaults = default_options;                                                                       // 1982
}(jQuery));                                                                                                            // 1983
                                                                                                                       // 1984
function HighlightedDate(date, desc, style) {                                                                          // 1985
	"use strict";                                                                                                         // 1986
	this.date = date;                                                                                                     // 1987
	this.desc = desc;                                                                                                     // 1988
	this.style = style;                                                                                                   // 1989
}                                                                                                                      // 1990
                                                                                                                       // 1991
(function () {                                                                                                         // 1992
                                                                                                                       // 1993
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)                                                         // 1994
 * Licensed under the MIT License (LICENSE.txt).                                                                       // 1995
 *                                                                                                                     // 1996
 * Version: 3.1.12                                                                                                     // 1997
 *                                                                                                                     // 1998
 * Requires: jQuery 1.2.2+                                                                                             // 1999
 */                                                                                                                    // 2000
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
                                                                                                                       // 2002
// Parse and Format Library                                                                                            // 2003
Date.parseDate = function( input, format ){                                                                            // 2004
  return moment(input,format).toDate();                                                                                // 2005
};                                                                                                                     // 2006
Date.prototype.dateFormat = function( format ){                                                                        // 2007
  return moment(this).format(format);                                                                                  // 2008
};                                                                                                                     // 2009
}());                                                                                                                  // 2010
                                                                                                                       // 2011
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 2021
}).call(this);                                                       // 2022
                                                                     // 2023
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['drewy:datetimepicker'] = {};

})();
