/* ============================================================
   KYSGBS – Gestion des Absences
   app.js
   ============================================================ */

// ── DONNÉES ÉLÈVES ─────────────────────────────────────────────
const ELEVES = [

  // ── MINI SECTION (28 élèves) ──────────────────────────────
  { id: 1,  nom: "Mame Diarra Bousso Ciss",              classe: "Mini Section" },
  { id: 2,  nom: "Aissatou Diop Sow",                    classe: "Mini Section" },
  { id: 3,  nom: "Papa Assane Sall",                     classe: "Mini Section" },
  { id: 4,  nom: "Bireume Djiguene Niang",               classe: "Mini Section" },
  { id: 5,  nom: "Binta Laye Lo",                        classe: "Mini Section" },
  { id: 6,  nom: "Mouhamed Rassoul Yade",                classe: "Mini Section" },
  { id: 7,  nom: "Fatou Laye Mbaye",                     classe: "Mini Section" },
  { id: 8,  nom: "Mouhamed Sene",                        classe: "Mini Section" },
  { id: 9,  nom: "Anta Rassoul Diop",                    classe: "Mini Section" },
  { id: 10, nom: "Marieme Noreyni Johnson",               classe: "Mini Section" },
  { id: 11, nom: "Mouhamed Dieng",                       classe: "Mini Section" },
  { id: 12, nom: "Mouhamed Moustapha Diouf",             classe: "Mini Section" },
  { id: 13, nom: "Aicha Diallo",                         classe: "Mini Section" },
  { id: 14, nom: "Serigne Saliou Mbacke Ngom",           classe: "Mini Section" },
  { id: 15, nom: "Seydina Daouda Ben Mamadou Laye Diop", classe: "Mini Section" },
  { id: 16, nom: "Cheikh Sakho",                         classe: "Mini Section" },
  { id: 17, nom: "Mouhamed Wade",                        classe: "Mini Section" },
  { id: 18, nom: "Maman Sokhna Ndiaye",                  classe: "Mini Section" },
  { id: 19, nom: "Al Housseynou Mboup",                  classe: "Mini Section" },
  { id: 20, nom: "Mouhamed Rassoul Diop",                classe: "Mini Section" },
  { id: 21, nom: "Maman Sarre Diop",                     classe: "Mini Section" },
  { id: 22, nom: "Mamadou Dial Diene",                   classe: "Mini Section" },
  { id: 23, nom: "Fatou Sara Ndiaye",                    classe: "Mini Section" },
  { id: 24, nom: "Abou Banel",                           classe: "Mini Section" },
  { id: 25, nom: "Khabane Diongue",                      classe: "Mini Section" },
  { id: 26, nom: "Ndeye Tacko Tall",                     classe: "Mini Section" },
  { id: 27, nom: "Mame Fatou Souare",                    classe: "Mini Section" },
  { id: 28, nom: "Mamadou Mouhamed Ndiaye Diaw",         classe: "Mini Section" },

  // ── PS (37 élèves) ────────────────────────────────────────
  { id: 101, nom: "Maman Arame Niang",              classe: "PS" },
  { id: 102, nom: "Abdoulahi Kane",                 classe: "PS" },
  { id: 103, nom: "Omar Sylla Ba",                  classe: "PS" },
  { id: 104, nom: "Rokhaya Sarr",                   classe: "PS" },
  { id: 105, nom: "Assane Mbaye",                   classe: "PS" },
  { id: 106, nom: "Papa Diouf",                     classe: "PS" },
  { id: 107, nom: "Ibrahima Diallo",                classe: "PS" },
  { id: 108, nom: "Adama Sene",                     classe: "PS" },
  { id: 109, nom: "Seydina Mandione Diagne",        classe: "PS" },
  { id: 110, nom: "Safietou Ba",                    classe: "PS" },
  { id: 111, nom: "Seydina Mouhamed Diouf",         classe: "PS" },
  { id: 112, nom: "Anta Diakhate",                  classe: "PS" },
  { id: 113, nom: "Mbacke Dia",                     classe: "PS" },
  { id: 114, nom: "Mouhamed Rassoul Yatte",         classe: "PS" },
  { id: 115, nom: "Mouhamed Loum",                  classe: "PS" },
  { id: 116, nom: "Zeyna Ciss",                     classe: "PS" },
  { id: 117, nom: "Isseu Fall",                     classe: "PS" },
  { id: 118, nom: "Souleymane Ba",                  classe: "PS" },
  { id: 119, nom: "Amy Leiye Ndiaye",               classe: "PS" },
  { id: 120, nom: "Abdou Aziz Al Amine Diop",       classe: "PS" },
  { id: 121, nom: "Hady Keita",                     classe: "PS" },
  { id: 122, nom: "Bassirou Sane",                  classe: "PS" },
  { id: 123, nom: "Fatou Diop",                     classe: "PS" },
  { id: 124, nom: "Binta Diop",                     classe: "PS" },
  { id: 125, nom: "Thiaba Seny Laye Seye",          classe: "PS" },
  { id: 126, nom: "Coura Ndiaye",                   classe: "PS" },
  { id: 127, nom: "Baye Amar Sarr",                 classe: "PS" },
  { id: 128, nom: "Mame Libasse Seye",              classe: "PS" },
  { id: 129, nom: "Mbene Beye",                     classe: "PS" },
  { id: 130, nom: "Mame Coumba Laye Diop",          classe: "PS" },
  { id: 131, nom: "Libasse Laye Gueye",             classe: "PS" },
  { id: 132, nom: "Mouhamed Rassoul Diop",          classe: "PS" },
  { id: 133, nom: "Seydina Mouhamed Diouf",         classe: "PS" },
  { id: 134, nom: "Ivonne Djitemerou Diatta",       classe: "PS" },
  { id: 135, nom: "Serigne Fallou Ndoye",           classe: "PS" },
  { id: 136, nom: "Mamadou Lamine Cisse",           classe: "PS" },
  { id: 137, nom: "Hamdy Moustapha Seye",           classe: "PS" },

  // ── MS (59 élèves) ────────────────────────────────────────
  { id: 201, nom: "Papa Bilal Bau",                       classe: "MS" },
  { id: 202, nom: "Yakheya Bodian",                       classe: "MS" },
  { id: 203, nom: "Fatimata Dia",                         classe: "MS" },
  { id: 204, nom: "Mame Ndiole Diagne",                   classe: "MS" },
  { id: 205, nom: "Abdou Aziz Dabakh Diallo",             classe: "MS" },
  { id: 206, nom: "Aissatou Diallo",                      classe: "MS" },
  { id: 207, nom: "Halimatou Diallo",                     classe: "MS" },
  { id: 208, nom: "Mariama Balde Diallo",                 classe: "MS" },
  { id: 209, nom: "Awa Diatta",                           classe: "MS" },
  { id: 210, nom: "Abdoulaye Ibnou Birane Diaw",          classe: "MS" },
  { id: 211, nom: "Absatou Dieng",                        classe: "MS" },
  { id: 212, nom: "Baba Demba Diop",                      classe: "MS" },
  { id: 213, nom: "Baye Niasse Diop",                     classe: "MS" },
  { id: 214, nom: "Francois Diop",                        classe: "MS" },
  { id: 215, nom: "Mor Diop",                             classe: "MS" },
  { id: 216, nom: "Mouhamed Diop",                        classe: "MS" },
  { id: 217, nom: "Mouhamed Laye Diop",                   classe: "MS" },
  { id: 218, nom: "Fatou Laye Diop",                      classe: "MS" },
  { id: 219, nom: "Mane Diouf",                           classe: "MS" },
  { id: 220, nom: "Serigne Saliou Diouf",                 classe: "MS" },
  { id: 221, nom: "Mouhamed Rassoul Keba Drame",          classe: "MS" },
  { id: 222, nom: "Awa Fall",                             classe: "MS" },
  { id: 223, nom: "Fatima Fall",                          classe: "MS" },
  { id: 224, nom: "Maman Marie Goudiaby",                 classe: "MS" },
  { id: 225, nom: "Mohamed Gueye",                        classe: "MS" },
  { id: 226, nom: "Soukeyna Gueye",                       classe: "MS" },
  { id: 227, nom: "Mame Dame Ka",                         classe: "MS" },
  { id: 228, nom: "Seydina Mouhamed Kane",                classe: "MS" },
  { id: 229, nom: "Ndeye Marie Konte",                    classe: "MS" },
  { id: 230, nom: "Mame Diarra Mane",                     classe: "MS" },
  { id: 231, nom: "Ndeye Mbengue",                        classe: "MS" },
  { id: 232, nom: "Mame Fatou Mbengue",                   classe: "MS" },
  { id: 233, nom: "Cheikh Ahmadou Bamba Mbcke Ndiaye",   classe: "MS" },
  { id: 234, nom: "Cherif Younouss Ndiaye",               classe: "MS" },
  { id: 235, nom: "Codou Laye Ndiaye",                    classe: "MS" },
  { id: 236, nom: "Fatou Laye Ndiaye",                    classe: "MS" },
  { id: 237, nom: "Aissatou Ngom",                        classe: "MS" },
  { id: 238, nom: "Fatou Ngom",                           classe: "MS" },
  { id: 239, nom: "Khadija Sakho",                        classe: "MS" },
  { id: 240, nom: "Mouhamed Cherif Sarr",                 classe: "MS" },
  { id: 241, nom: "Salifou Sarr",                         classe: "MS" },
  { id: 242, nom: "Ndeye Maguette Sarry",                 classe: "MS" },
  { id: 243, nom: "Aboubacry Seck",                       classe: "MS" },
  { id: 244, nom: "Maty Laye Seck",                       classe: "MS" },
  { id: 245, nom: "Malick Sembarga",                      classe: "MS" },
  { id: 246, nom: "Mame Cheikh Anta Gawane Sene",         classe: "MS" },
  { id: 247, nom: "Ndeye Diama Laye Sene",                classe: "MS" },
  { id: 248, nom: "Wedji Laye Sene",                      classe: "MS" },
  { id: 249, nom: "Soukeyna Christine Tall",               classe: "MS" },
  { id: 250, nom: "Arame Thiam",                          classe: "MS" },
  { id: 251, nom: "Dame Thiam",                           classe: "MS" },
  { id: 252, nom: "Gora Thiam",                           classe: "MS" },
  { id: 253, nom: "Serigne Saliou Thiam",                 classe: "MS" },
  { id: 254, nom: "Mariama Thiare",                       classe: "MS" },
  { id: 255, nom: "Bouchera Aissata Cheikh Tidjane Thiello", classe: "MS" },
  { id: 256, nom: "Sadou Toure",                          classe: "MS" },
  { id: 257, nom: "Baty Wade",                            classe: "MS" },
  { id: 258, nom: "Sokhna Maimouna Wade",                 classe: "MS" },
  { id: 259, nom: "Aminata Aidara Yaffa",                 classe: "MS" },

  // ── GRANDE SECTION B (30 élèves) ──────────────────────────
  { id: 301, nom: "Coumba Bâ",                    classe: "Grande Section B" },
  { id: 302, nom: "Ahmadou B Diaw",               classe: "Grande Section B" },
  { id: 303, nom: "Mouhamed Diaw",                classe: "Grande Section B" },
  { id: 304, nom: "Babacar Laye Diop",            classe: "Grande Section B" },
  { id: 305, nom: "Sathiané Diop",                classe: "Grande Section B" },
  { id: 306, nom: "Soda Diop",                    classe: "Grande Section B" },
  { id: 307, nom: "Seynabou Diop",                classe: "Grande Section B" },
  { id: 308, nom: "Mbéne Laye Diop",              classe: "Grande Section B" },
  { id: 309, nom: "Maman Arame Fall",             classe: "Grande Section B" },
  { id: 310, nom: "Mouhamadoul Fall",             classe: "Grande Section B" },
  { id: 311, nom: "Alimatou S Caye",              classe: "Grande Section B" },
  { id: 312, nom: "Ndeye Binta Mboup",            classe: "Grande Section B" },
  { id: 313, nom: "Adjibalkio Niang",             classe: "Grande Section B" },
  { id: 314, nom: "Kiné Ndiaye",                  classe: "Grande Section B" },
  { id: 315, nom: "Khadidiatou Samb",             classe: "Grande Section B" },
  { id: 316, nom: "Alimatou S Sané",              classe: "Grande Section B" },
  { id: 317, nom: "Khalifa A Seck",               classe: "Grande Section B" },
  { id: 318, nom: "Mamadou B J Seye",             classe: "Grande Section B" },
  { id: 319, nom: "Seydou Souare",                classe: "Grande Section B" },
  { id: 320, nom: "Amy Diobe Thiaw",              classe: "Grande Section B" },
  { id: 321, nom: "Mame Libasse Thiaw",           classe: "Grande Section B" },
  { id: 322, nom: "Binta Ware",                   classe: "Grande Section B" },
  { id: 323, nom: "Home Marra Wade",              classe: "Grande Section B" },
  { id: 324, nom: "Awa Ane",                      classe: "Grande Section B" },
  { id: 325, nom: "Samba Konate",                 classe: "Grande Section B" },
  { id: 326, nom: "Ndeye Sokhna Diagne",          classe: "Grande Section B" },
  { id: 327, nom: "Malick Doumbouja",             classe: "Grande Section B" },
  { id: 328, nom: "Baye Samba Geye",              classe: "Grande Section B" },
  { id: 329, nom: "Mouhamed Ndiaye",              classe: "Grande Section B" },
  { id: 330, nom: "Cheikh I Thiam",               classe: "Grande Section B" },

  // ── CP (60 élèves) ────────────────────────────────────────
  { id: 401, nom: "Sadio Bâ",              classe: "CP" },
  { id: 402, nom: "Fatou Bâ",                     classe: "CP" },
  { id: 403, nom: "El Maedo M Cissé",             classe: "CP" },
  { id: 404, nom: "Fatou K Cissé",                classe: "CP" },
  { id: 405, nom: "Zahra A Camara",               classe: "CP" },
  { id: 406, nom: "Nd Fama Laye Dia",             classe: "CP" },
  { id: 407, nom: "Ndongo Laye Dia",              classe: "CP" },
  { id: 408, nom: "Mamadou L Badiane",            classe: "CP" },
  { id: 409, nom: "Binta Diallo",                 classe: "CP" },
  { id: 411, nom: "Abdoulaye Diop",               classe: "CP" },
  { id: 412, nom: "Adja Anta Diop",               classe: "CP" },
  { id: 413, nom: "Fatou Diop",                   classe: "CP" },
  { id: 414, nom: "Fatou Laye Diop",              classe: "CP" },
  { id: 415, nom: "Adja Dieny Diop",              classe: "CP" },
  { id: 416, nom: "Mouhamed Diop",                classe: "CP" },
  { id: 417, nom: "Omar Mallé Diop",              classe: "CP" },
  { id: 418, nom: "Sellé Diouf",                  classe: "CP" },
  { id: 419, nom: "Mame Diarra Dioné",            classe: "CP" },
  { id: 420, nom: "Nene Tamba Dioum",             classe: "CP" },
  { id: 421, nom: "Fatou Dionck",                 classe: "CP" },
  { id: 422, nom: "Aicha Dang",                   classe: "CP" },
  { id: 423, nom: "Mouhamed Thioen",              classe: "CP" },
  { id: 424, nom: "Cheikh Fall",                  classe: "CP" },
  { id: 425, nom: "Abdounahmane Gueye",           classe: "CP" },
  { id: 426, nom: "Aicha Gueye",                  classe: "CP" },
  { id: 427, nom: "Nd Fatou Gaye",                classe: "CP" },
  { id: 428, nom: "Serigne Saliou Fall",          classe: "CP" },
  { id: 429, nom: "Mouhamed M Gueye",             classe: "CP" },
  { id: 430, nom: "Mouhamed Kane",                classe: "CP" },
  { id: 431, nom: "Ch Abdou Rh Komate",           classe: "CP" },
  { id: 432, nom: "Mouhamed Mbaye",               classe: "CP" },
  { id: 433, nom: "Nd Anta Mbaye",                classe: "CP" },
  { id: 434, nom: "Baba Mbenque",                 classe: "CP" },
  { id: 435, nom: "M Fama Mbodji Diop",           classe: "CP" },
  { id: 436, nom: "Fatou K Ndeye",                classe: "CP" },
  { id: 437, nom: "M Lamyne Ndiaye",              classe: "CP" },
  { id: 438, nom: "Seynabou Ndiaye",              classe: "CP" },
  { id: 439, nom: "Kiné Ndiaye",                  classe: "CP" },
  { id: 440, nom: "Yoummy Ndiaye",                classe: "CP" },
  { id: 441, nom: "Fatou Mbarve Fall",            classe: "CP" },
  { id: 442, nom: "Astou Sy",                     classe: "CP" },
  { id: 443, nom: "Amadou Dioum",                 classe: "CP" },
  { id: 444, nom: "Lamina Para Samb",             classe: "CP" },
  { id: 445, nom: "Oumoul N Samb",               classe: "CP" },
  { id: 446, nom: "Awa Laye Samb",               classe: "CP" },
  { id: 448, nom: "Nd Assatene Mbenque",          classe: "CP" },
  { id: 449, nom: "Rougui B",                     classe: "CP" },
  { id: 450, nom: "Fatima Touré",                 classe: "CP" },
  { id: 451, nom: "Sokhna Touré",                 classe: "CP" },
  { id: 452, nom: "Hadiche Wade",                 classe: "CP" },
  { id: 453, nom: "Mairame Ware",                 classe: "CP" },
  { id: 454, nom: "Awa Traore",                   classe: "CP" },
  { id: 455, nom: "Aminata Thioye",               classe: "CP" },
  { id: 456, nom: "S Mouhamed Thioye",            classe: "CP" },
  { id: 457, nom: "Yakou Wallassaye",              classe: "CP" },
  { id: 458, nom: "Mouhamed Thioye",              classe: "CP" },
  { id: 459, nom: "Bodo Samba",                   classe: "CP" },
  { id: 460, nom: "Ahmadou B Fall",               classe: "CP" },

  // ── CI A (60 élèves) ──────────────────────────────────────
  { id: 501, nom: "Mariama Cire Ba",              classe: "CIA" },
  { id: 502, nom: "Adja Awa Badio",               classe: "CIA" },
  { id: 503, nom: "Seydina Mouhamed Lamine Badji",classe: "CIA" },
  { id: 504, nom: "Mouhamed Moustapha Bau",       classe: "CIA" },
  { id: 505, nom: "Zaccaria Bodian",              classe: "CIA" },
  { id: 506, nom: "Ndeye Mbakhe Camara",          classe: "CIA" },
  { id: 507, nom: "Mariama Binta Cisse",          classe: "CIA" },
  { id: 508, nom: "Maissa Cissokho",              classe: "CIA" },
  { id: 509, nom: "Habibatou Deme",               classe: "CIA" },
  { id: 510, nom: "Mouhamed Dia",                 classe: "CIA" },
  { id: 511, nom: "Al Seyni Diallo",              classe: "CIA" },
  { id: 512, nom: "Mouhamed Moustapha Diallo",    classe: "CIA" },
  { id: 513, nom: "Moustapha Diedhiou",           classe: "CIA" },
  { id: 514, nom: "Abdourahmane Dieng",           classe: "CIA" },
  { id: 515, nom: "Absatou Diop",                 classe: "CIA" },
  { id: 516, nom: "Awa Diop",                     classe: "CIA" },
  { id: 517, nom: "Bassine Diop",                 classe: "CIA" },
  { id: 518, nom: "El Hadji Mousse Laye Diop",    classe: "CIA" },
  { id: 519, nom: "Mame Alassane Laye Diop",      classe: "CIA" },
  { id: 520, nom: "Mariama Diop",                 classe: "CIA" },
  { id: 521, nom: "Ndeye Amy Diop",               classe: "CIA" },
  { id: 522, nom: "Yacine Diop",                  classe: "CIA" },
  { id: 523, nom: "Anta Diop",                    classe: "CIA" },
  { id: 524, nom: "Ibrahima Diop",                classe: "CIA" },
  { id: 525, nom: "Soda Diop",                    classe: "CIA" },
  { id: 526, nom: "Mouhamed Fadel Diouf",         classe: "CIA" },
  { id: 527, nom: "Khoudieu Sarr Diouf",          classe: "CIA" },
  { id: 528, nom: "Bauba Fall",                   classe: "CIA" },
  { id: 529, nom: "Ousmane Faty",                 classe: "CIA" },
  { id: 530, nom: "Daba Faye",                    classe: "CIA" },
  { id: 531, nom: "Fatou Faye",                   classe: "CIA" },
  { id: 532, nom: "Mouhamed Faye",                classe: "CIA" },
  { id: 533, nom: "Habaye Lah",                   classe: "CIA" },
  { id: 534, nom: "Ndeye Soda Kharma",            classe: "CIA" },
  { id: 535, nom: "Anta Koundoul",                classe: "CIA" },
  { id: 536, nom: "Ndeye Mareme Koundoul",        classe: "CIA" },
  { id: 537, nom: "Habbaye Lah",                  classe: "CIA" },
  { id: 538, nom: "Aminata Lo",                   classe: "CIA" },
  { id: 539, nom: "Dieynaba Mbaye",               classe: "CIA" },
  { id: 540, nom: "Justino Mendy",                classe: "CIA" },
  { id: 541, nom: "Mame Diarra Ndiaye",           classe: "CIA" },
  { id: 542, nom: "Mame Fatou Laye Ndiaye",       classe: "CIA" },
  { id: 543, nom: "Mouhamadou Ndiaye",            classe: "CIA" },
  { id: 544, nom: "Mouhamed Matar Laye Ndiaye",   classe: "CIA" },
  { id: 545, nom: "Ndeye Marie Ndiaye",           classe: "CIA" },
  { id: 546, nom: "Ndella Ndoye",                 classe: "CIA" },
  { id: 547, nom: "Maimouna Niang",               classe: "CIA" },
  { id: 548, nom: "Diaga Mansour Sall",           classe: "CIA" },
  { id: 549, nom: "Libasse Laye Samb",            classe: "CIA" },
  { id: 550, nom: "Ndeye Sarr",                   classe: "CIA" },
  { id: 551, nom: "Ndeye Borso Sarr",             classe: "CIA" },
  { id: 552, nom: "Zahra Iyane Sarr",             classe: "CIA" },
  { id: 553, nom: "Khady Yama Sow",               classe: "CIA" },
  { id: 554, nom: "Aminata Sy",                   classe: "CIA" },
  { id: 555, nom: "Abdou Sylla",                  classe: "CIA" },
  { id: 556, nom: "Mouhamadou Tall",              classe: "CIA" },
  { id: 557, nom: "Fatou Lo Thiaw",               classe: "CIA" },
  { id: 558, nom: "Moussa Thiaw",                 classe: "CIA" },
  { id: 559, nom: "Awa Laye Toure",               classe: "CIA" },
  { id: 560, nom: "Mouhamed Yattasaye",           classe: "CIA" },
  { id: 907, nom: "Fatou Gadio Yatte", classe: "CIA" },

  { id: 908, nom: "Matar Mbaye", classe: "CIA" },
  // ── CE1 A (55 élèves) ─────────────────────────────────────
  { id: 601, nom: "Ouley Banel",                          classe: "CE1A" },
  { id: 602, nom: "Seydina Mouhamed Bayo",                classe: "CE1A" },
  { id: 603, nom: "Abou Bocoum",                          classe: "CE1A" },
  { id: 604, nom: "Youssou Camara",                       classe: "CE1A" },
  { id: 605, nom: "Mouhamed Ciss",                        classe: "CE1A" },
  { id: 606, nom: "Ndeye Mbene Ciss",                     classe: "CE1A" },
  { id: 607, nom: "Abdou Khadre Daffe",                   classe: "CE1A" },
  { id: 608, nom: "Kadia Deme",                           classe: "CE1A" },
  { id: 609, nom: "Aly Bachir Dia",                       classe: "CE1A" },
  { id: 610, nom: "Yoro Dia",                             classe: "CE1A" },
  { id: 611, nom: "El Hadji Ammarou Diallo",              classe: "CE1A" },
  { id: 612, nom: "Mariama Diallo",                       classe: "CE1A" },
  { id: 613, nom: "Thierno Malick Diallo",                classe: "CE1A" },
  { id: 614, nom: "Adja Mbarka Diankha",                  classe: "CE1A" },
  { id: 615, nom: "Aissatou Siwoke Diatta",               classe: "CE1A" },
  { id: 616, nom: "Moustapha Diene",                      classe: "CE1A" },
  { id: 617, nom: "Aboubakryne Sadikh Dieng",             classe: "CE1A" },
  { id: 618, nom: "Cheikh Dame Dieng",                    classe: "CE1A" },
  { id: 619, nom: "Maman Aissatou Ti Mbaye Dione",        classe: "CE1A" },
  { id: 620, nom: "Bara Diop",                            classe: "CE1A" },
  { id: 621, nom: "Khadim Diop",                          classe: "CE1A" },
  { id: 622, nom: "Ndeye Yande Diop",                     classe: "CE1A" },
  { id: 623, nom: "Adja Nguane Diop",                     classe: "CE1A" },
  { id: 624, nom: "Cheikh Sidi Mokhtar Diop",             classe: "CE1A" },
  { id: 625, nom: "Ndeye Fatou Diop",                     classe: "CE1A" },
  { id: 626, nom: "Mame Diarra Fall",                     classe: "CE1A" },
  { id: 627, nom: "Fatoumata Gueye",                      classe: "CE1A" },
  { id: 628, nom: "Seydina Mouhamed Rassoul Kande",       classe: "CE1A" },
  { id: 629, nom: "Amadou Koma",                          classe: "CE1A" },
  { id: 630, nom: "Adja Gnagna Konate",                   classe: "CE1A" },
  { id: 631, nom: "Mouhamed Lah",                         classe: "CE1A" },
  { id: 632, nom: "Thiecka Loum",                         classe: "CE1A" },
  { id: 633, nom: "El Hadji Seygoureu Ly",                classe: "CE1A" },
  { id: 634, nom: "Serigne Saliou Mbaye",                 classe: "CE1A" },
  { id: 635, nom: "Jean Alphonse Mendy",                  classe: "CE1A" },
  { id: 636, nom: "Boury Ndiaye",                         classe: "CE1A" },
  { id: 637, nom: "Adama Tidiane Ndiaye",                 classe: "CE1A" },
  { id: 638, nom: "Khadim Ndiaye",                        classe: "CE1A" },
  { id: 639, nom: "Mamadou Lamine Ndiaye",                classe: "CE1A" },
  { id: 640, nom: "Ndeye Astou Ndiaye",                   classe: "CE1A" },
  { id: 641, nom: "Ousmane Ndiaye",                       classe: "CE1A" },
  { id: 642, nom: "Mouhamed Lamine Ndour",                classe: "CE1A" },
  { id: 643, nom: "Mame Abdou Aziz Dabakh Niang",         classe: "CE1A" },
  { id: 644, nom: "Ndeye Fama Niang",                     classe: "CE1A" },
  { id: 645, nom: "Samba Djiguene Pouye",                 classe: "CE1A" },
  { id: 646, nom: "Abdou Seck",                           classe: "CE1A" },
  { id: 647, nom: "Anta Seck",                            classe: "CE1A" },
  { id: 648, nom: "Mamadou Baidy Seye",                   classe: "CE1A" },
  { id: 649, nom: "Sokhna Betor Seye",                    classe: "CE1A" },
  { id: 650, nom: "Bintou Tall",                          classe: "CE1A" },
  { id: 651, nom: "Ndoumbe Tall",                         classe: "CE1A" },
  { id: 652, nom: "Codou Thiam",                          classe: "CE1A" },
  { id: 653, nom: "Serigne Sidi Moukhtar Thiam",          classe: "CE1A" },
  { id: 654, nom: "Lamine Thiare",                        classe: "CE1A" },
  { id: 655, nom: "Racky Thimbo",                         classe: "CE1A" },

  { id: 909, nom: "Ndeye Maguette Yatte", classe: "CE1A" },
  // ── CE2 A (25 élèves) ─────────────────────────────────────
  { id: 701, nom: "Cheikh Ahmeth Tidiane Cherif Ba",      classe: "CE2A" },
  { id: 702, nom: "Anta Niang Badio",                     classe: "CE2A" },
  { id: 703, nom: "Omar Dia",                             classe: "CE2A" },
  { id: 704, nom: "Aicha Diaw",                           classe: "CE2A" },
  { id: 705, nom: "Ndeye Diaw",                           classe: "CE2A" },
  { id: 706, nom: "Seynabou Dieng",                       classe: "CE2A" },
  { id: 707, nom: "Baye Ndiaga Diongue",                  classe: "CE2A" },
  { id: 708, nom: "Adja Fatou Nourou Diop",               classe: "CE2A" },
  { id: 709, nom: "Imame Seydi Diop",                     classe: "CE2A" },
  { id: 710, nom: "Penda Diop",                           classe: "CE2A" },
  { id: 711, nom: "Adama Kane",                           classe: "CE2A" },
  { id: 712, nom: "Fatou Khoule",                         classe: "CE2A" },
  { id: 713, nom: "Baba Koundoul",                        classe: "CE2A" },
  { id: 714, nom: "Abdoul Khadre Ndiaye",                 classe: "CE2A" },
  { id: 715, nom: "Seynabou Ndiaye",                      classe: "CE2A" },
  { id: 716, nom: "Mame Diarra Ndoye",                    classe: "CE2A" },
  { id: 717, nom: "Ngone Niang",                          classe: "CE2A" },
  { id: 718, nom: "Mame Rane Samb",                       classe: "CE2A" },
  { id: 719, nom: "Hamidou Sy",                           classe: "CE2A" },
  { id: 720, nom: "Khadijatou Tall",                      classe: "CE2A" },
  { id: 721, nom: "Bintou Tandine",                       classe: "CE2A" },
  { id: 722, nom: "Fatou Thiam",                          classe: "CE2A" },
  { id: 723, nom: "Mariama Thioye",                       classe: "CE2A" },
  { id: 724, nom: "Mamouth Toure",                        classe: "CE2A" },
  { id: 725, nom: "Mouhamed Yade",                        classe: "CE2A" },

  // ── CM1 A (19 élèves) ─────────────────────────────────────
  { id: 801, nom: "Sokhna Ciss",                classe: "CM1A" },
  { id: 802, nom: "Djibril Diallo",             classe: "CM1A" },
  { id: 803, nom: "Marie Sarr Dieng",           classe: "CM1A" },
  { id: 804, nom: "Aissata Dione",              classe: "CM1A" },
  { id: 805, nom: "Aicha Diop",                 classe: "CM1A" },
  { id: 806, nom: "Adama Laye Gadiaga",         classe: "CM1A" },
  { id: 807, nom: "Awa Laye Gadiaga",           classe: "CM1A" },
  { id: 808, nom: "Nene Galle Goundio",         classe: "CM1A" },
  { id: 809, nom: "Aminata Ciss Kane",          classe: "CM1A" },
  { id: 810, nom: "Louise Aidara Kane",         classe: "CM1A" },
  { id: 811, nom: "Assane Mbaye",               classe: "CM1A" },
  { id: 812, nom: "Mame Dior Laye Ndiaye",      classe: "CM1A" },
  { id: 813, nom: "Ndeye Ndiaye",               classe: "CM1A" },
  { id: 814, nom: "Sokhna Ndiaye",              classe: "CM1A" },
  { id: 815, nom: "Mouhamed Niang",             classe: "CM1A" },
  { id: 816, nom: "Ababacar Sadekh Samb",       classe: "CM1A" },
  { id: 817, nom: "Aissata Sarr",               classe: "CM1A" },
  { id: 818, nom: "Mamadou Sarr",               classe: "CM1A" },
  { id: 819, nom: "Ngone Sarr",                 classe: "CM1A" },

  // ── CM2 A (6 élèves) ──────────────────────────────────────
  { id: 901, nom: "Saalikh Abdourahmane Camara", classe: "CM2A" },
  { id: 902, nom: "Mouhamed Diallo",             classe: "CM2A" },
  { id: 903, nom: "Aicha Dieng",                 classe: "CM2A" },
  { id: 904, nom: "Alassane Makhtar Dieng",      classe: "CM2A" },
  { id: 905, nom: "Ndeye Awa Diop",              classe: "CM2A" },
  { id: 906, nom: "Mame Anta Fall",              classe: "CM2A" }
];

// ── STATE ──────────────────────────────────────────────────────
const dateJour   = new Date().toISOString().split('T')[0];
let elevesData   = [];
let classeActive = '';

// ── STORAGE HELPERS ────────────────────────────────────────────
function storageKey(classe)       { return "appel_" + dateJour + "_" + classe; }
function loadEtats(classe)        { return JSON.parse(localStorage.getItem(storageKey(classe))) || {}; }
function saveEtats(classe, etats) { localStorage.setItem(storageKey(classe), JSON.stringify(etats)); }

// ── DATE DISPLAY ───────────────────────────────────────────────
document.getElementById('date-display').innerText =
  new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

// ── NETTOYAGE DES LOGS > 30 JOURS ──────────────────────────────
function cleanOldLogs() {
  Object.keys(localStorage).forEach(function(key) {
    if (!key.startsWith('appel_')) return;
    var dateStr = key.split('_')[1];
    var diff    = (new Date() - new Date(dateStr)) / 86400000;
    if (diff > 30) localStorage.removeItem(key);
  });
}

// ── INIT ───────────────────────────────────────────────────────
function init() {
  cleanOldLogs();
  elevesData = ELEVES;
  populateClasseSelect();
  render();
}

// ── SÉLECTEUR DE CLASSE ────────────────────────────────────────
function populateClasseSelect() {
  var classes  = [...new Set(elevesData.map(function(e) { return e.classe; }))];
  classeActive = classes[0] || '';

  var sel      = document.getElementById('classe-select');
  sel.innerHTML = classes.map(function(c) {
    return '<option value="' + c + '">' + c + '</option>';
  }).join('');
  sel.value = classeActive;

  sel.addEventListener('change', function() {
    classeActive = sel.value;
    render();
  });
}

// ── CHANGER LE STATUT D'UN ÉLÈVE ──────────────────────────────
function setStatut(id, statut) {
  var etats = loadEtats(classeActive);
  etats[id] = statut;
  saveEtats(classeActive, etats);
  render();
}

// ── RENDU DE LA LISTE ──────────────────────────────────────────
function render() {
  var container     = document.getElementById('liste-eleves');
  var elevesFiltres = elevesData.filter(function(e) { return e.classe === classeActive; });
  var etats         = loadEtats(classeActive);
  var counts        = { p: 0, r: 0, a: 0 };

  if (elevesFiltres.length === 0) {
    container.innerHTML = '<div class="empty"><span>🏫</span>Aucun élève dans cette classe.</div>';
    updateCounts(0, 0, 0, 0);
    return;
  }

  container.innerHTML = '';

  elevesFiltres.forEach(function(eleve, idx) {
    var statut = etats[eleve.id] || 'p';
    counts[statut]++;

    var card       = document.createElement('div');
    card.className = 'eleve-card statut-' + statut;
    card.innerHTML =
      '<div class="eleve-info">' +
        '<span class="eleve-num">' + String(idx + 1).padStart(2, '0') + '</span>' +
        '<span class="eleve-nom">' + eleve.nom + '</span>' +
      '</div>' +
      '<div class="btn-group">' +
        '<button class="btn-statut btn-p ' + (statut === 'p' ? 'active' : '') + '" onclick="setStatut(' + eleve.id + ',\'p\')" title="Présent">P</button>' +
        '<button class="btn-statut btn-r ' + (statut === 'r' ? 'active' : '') + '" onclick="setStatut(' + eleve.id + ',\'r\')" title="Retard">R</button>' +
        '<button class="btn-statut btn-a ' + (statut === 'a' ? 'active' : '') + '" onclick="setStatut(' + eleve.id + ',\'a\')" title="Absent">A</button>' +
      '</div>';

    container.appendChild(card);
  });

  updateCounts(elevesFiltres.length, counts.p, counts.r, counts.a);
}

// ── MISE À JOUR DES COMPTEURS ──────────────────────────────────
function updateCounts(total, p, r, a) {
  document.getElementById('count-total').innerText = total;
  document.getElementById('count-p').innerText     = p;
  document.getElementById('count-r').innerText     = r;
  document.getElementById('count-a').innerText     = a;
}

// ── RAPPORT WHATSAPP ───────────────────────────────────────────
function genererRapport() {
  var etats    = loadEtats(classeActive);
  var filtres  = elevesData.filter(function(e) { return e.classe === classeActive; });
  var absents  = filtres.filter(function(e) { return etats[e.id] === 'a'; }).map(function(e) { return '• ' + e.nom; });
  var retards  = filtres.filter(function(e) { return etats[e.id] === 'r'; }).map(function(e) { return '• ' + e.nom; });
  var presents = filtres.filter(function(e) { return (etats[e.id] || 'p') === 'p'; }).length;

  var dateStr = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  var message =
    "📊 *RAPPORT D'APPEL — KYSGBS*\n" +
    "🏫 Classe : *" + classeActive + "*\n" +
    "📅 " + dateStr + "\n\n" +
    "✅ Présents : *" + presents + "*\n" +
    "⏳ Retards  : *" + retards.length + "*" + (retards.length ? "\n" + retards.join("\n") : "") + "\n" +
    "❌ Absents  : *" + absents.length + "*" + (absents.length ? "\n" + absents.join("\n") : "") + "\n\n" +
    "_Rapport généré via KYSGBS App_";

  window.open('https://wa.me/?text=' + encodeURIComponent(message), '_blank');
  showToast('Rapport envoyé sur WhatsApp ✓');
}

// ── RÉINITIALISATION ───────────────────────────────────────────
function reinitialiserAppel() {
  if (confirm("Réinitialiser l'appel de la classe " + classeActive + " pour aujourd'hui ?")) {
    localStorage.removeItem(storageKey(classeActive));
    render();
    showToast('Appel réinitialisé');
  }
}

// ── TOAST ──────────────────────────────────────────────────────
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 2500);
}


// ── RAPPORT PDF ────────────────────────────────────────────────
function genererPDF() {
  var etats    = loadEtats(classeActive);
  var filtres  = elevesData.filter(function(e) { return e.classe === classeActive; });
  var absents  = filtres.filter(function(e) { return etats[e.id] === 'a'; });
  var retards  = filtres.filter(function(e) { return etats[e.id] === 'r'; });
  var presents = filtres.filter(function(e) { return (etats[e.id] || 'p') === 'p'; });

  var dateStr = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  var doc = new window.jspdf.jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  var W = 210; // largeur A4
  var y = 20;
  var margin = 15;

  // ── En-tête
  doc.setFillColor(232, 97, 10);
  doc.rect(0, 0, W, 30, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('RAPPORT D\'APPEL - KYSGBS', W / 2, 13, { align: 'center' });
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Keur Yaye Sokhna Gueye Bilingual School', W / 2, 22, { align: 'center' });

  y = 40;

  // ── Infos classe / date
  doc.setTextColor(30, 41, 59);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Classe : ' + classeActive, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Date : ' + dateStr, W - margin, y, { align: 'right' });

  y += 6;
  doc.setDrawColor(232, 97, 10);
  doc.setLineWidth(0.5);
  doc.line(margin, y, W - margin, y);
  y += 8;

  // ── Statistiques
  var boxW = (W - margin * 2 - 9) / 4;
  var stats = [
    { label: 'Total',    val: filtres.length, r: 30,  g: 41,  b: 59  },
    { label: 'Presents', val: presents.length, r: 76,  g: 175, b: 37  },
    { label: 'Retards',  val: retards.length,  r: 232, g: 97,  b: 10  },
    { label: 'Absents',  val: absents.length,  r: 220, g: 38,  b: 38  }
  ];
  stats.forEach(function(s, i) {
    var x = margin + i * (boxW + 3);
    doc.setFillColor(s.r, s.g, s.b);
    doc.roundedRect(x, y, boxW, 16, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(String(s.val), x + boxW / 2, y + 9, { align: 'center' });
    doc.setFontSize(7);
    doc.setFont('helvetica', 'normal');
    doc.text(s.label, x + boxW / 2, y + 14, { align: 'center' });
  });

  y += 24;

  // ── Fonction tableau
  function drawTable(title, color, liste, colonnes) {
    if (y > 260) { doc.addPage(); y = 20; }

    // Titre section
    doc.setFillColor(color[0], color[1], color[2]);
    doc.roundedRect(margin, y, W - margin * 2, 8, 1, 1, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text(title + ' (' + liste.length + ')', margin + 4, y + 5.5);
    y += 11;

    if (liste.length === 0) {
      doc.setTextColor(100, 116, 139);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'italic');
      doc.text('Aucun', margin + 4, y);
      y += 8;
      return;
    }

    // En-tête colonnes
    doc.setFillColor(240, 244, 248);
    doc.rect(margin, y, W - margin * 2, 6, 'F');
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'bold');
    var cx = margin + 2;
    colonnes.forEach(function(col) {
      doc.text(col.label, cx, y + 4.2);
      cx += col.w;
    });
    y += 7;

    // Lignes
    liste.forEach(function(eleve, idx) {
      if (y > 270) { doc.addPage(); y = 20; }
      if (idx % 2 === 0) {
        doc.setFillColor(255, 250, 245);
        doc.rect(margin, y, W - margin * 2, 6, 'F');
      }
      doc.setTextColor(30, 41, 59);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      var cx2 = margin + 2;
      colonnes.forEach(function(col) {
        var val = col.key === 'num' ? String(idx + 1) : eleve[col.key] || '';
        doc.text(String(val), cx2, y + 4.2);
        cx2 += col.w;
      });
      y += 6;
    });
    y += 6;
  }

  var cols = [
    { label: 'N°',  key: 'num', w: 12  },
    { label: 'Nom', key: 'nom', w: 168 }
  ];

  drawTable('ABSENTS', [220, 38, 38],  absents,  cols);
  drawTable('RETARDS', [232, 97, 10],  retards,  cols);
  drawTable('PRESENTS', [76, 175, 37], presents, cols);

  // ── Pied de page
  var pageCount = doc.internal.getNumberOfPages();
  for (var i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setDrawColor(230, 230, 230);
    doc.setLineWidth(0.3);
    doc.line(margin, 287, W - margin, 287);
    doc.setFontSize(7);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text('KYSGBS - Rapport genere automatiquement', margin, 292);
    doc.text('Page ' + i + ' / ' + pageCount, W - margin, 292, { align: 'right' });
  }

  // ── Téléchargement
  var filename = 'Appel_' + classeActive + '_' + dateJour + '.pdf';
  doc.save(filename);
  showToast('PDF téléchargé : ' + filename);
}

// ── DÉMARRAGE ──────────────────────────────────────────────────
init();

// ── RAPPORT ODT ────────────────────────────────────────────────
function genererODF() {
  var etats    = loadEtats(classeActive);
  var filtres  = elevesData.filter(function(e) { return e.classe === classeActive; });
  var absents  = filtres.filter(function(e) { return etats[e.id] === 'a'; });
  var retards  = filtres.filter(function(e) { return etats[e.id] === 'r'; });
  var presents = filtres.filter(function(e) { return (etats[e.id] || 'p') === 'p'; });

  var dateStr = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  // Génère les lignes du tableau pour chaque élève
  function lignesTableau(liste, statut, couleur) {
    return liste.map(function(e, i) {
      return (
        '<table:table-row>' +
          '<table:table-cell table:style-name="cell"><text:p text:style-name="p_normal">' + (i + 1) + '</text:p></table:table-cell>' +
          '<table:table-cell table:style-name="cell"><text:p text:style-name="p_normal">' + e.nom + '</text:p></table:table-cell>' +
          '<table:table-cell table:style-name="cell_' + couleur + '"><text:p text:style-name="p_center">' + statut + '</text:p></table:table-cell>' +
        '</table:table-row>'
      );
    }).join('');
  }

  var tousLesEleves = filtres.map(function(e) {
    var s = etats[e.id] || 'p';
    var label   = s === 'p' ? 'Présent'  : s === 'r' ? 'Retard'  : 'Absent';
    var couleur = s === 'p' ? 'green'    : s === 'r' ? 'orange'  : 'red';
    return (
      '<table:table-row>' +
        '<table:table-cell table:style-name="cell"><text:p text:style-name="p_normal">' + (filtres.indexOf(e) + 1) + '</text:p></table:table-cell>' +
        '<table:table-cell table:style-name="cell"><text:p text:style-name="p_normal">' + e.nom + '</text:p></table:table-cell>' +
        '<table:table-cell table:style-name="cell_' + couleur + '"><text:p text:style-name="p_center">' + label + '</text:p></table:table-cell>' +
      '</table:table-row>'
    );
  }).join('');

  var odt = '<?xml version="1.0" encoding="UTF-8"?>' +
  '<office:document-content ' +
    'xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" ' +
    'xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" ' +
    'xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" ' +
    'xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" ' +
    'xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" ' +
    'office:version="1.3">' +

  '<office:automatic-styles>' +
    '<style:style style:name="p_titre" style:family="paragraph"><style:text-properties fo:font-size="16pt" fo:font-weight="bold" fo:color="#E8610A"/></style:style>' +
    '<style:style style:name="p_sous_titre" style:family="paragraph"><style:text-properties fo:font-size="12pt" fo:font-weight="bold" fo:color="#4CAF25"/></style:style>' +
    '<style:style style:name="p_normal" style:family="paragraph"><style:text-properties fo:font-size="11pt"/></style:style>' +
    '<style:style style:name="p_center" style:family="paragraph"><style:paragraph-properties fo:text-align="center"/><style:text-properties fo:font-size="11pt" fo:font-weight="bold"/></style:style>' +
    '<style:style style:name="p_info" style:family="paragraph"><style:text-properties fo:font-size="11pt" fo:color="#64748B"/></style:style>' +
    '<style:style style:name="cell" style:family="table-cell"><style:table-cell-properties fo:border="0.05pt solid #E2E8F0" fo:padding="3pt"/></style:style>' +
    '<style:style style:name="cell_header" style:family="table-cell"><style:table-cell-properties fo:border="0.05pt solid #E2E8F0" fo:padding="3pt" fo:background-color="#E8610A"/></style:style>' +
    '<style:style style:name="cell_green"  style:family="table-cell"><style:table-cell-properties fo:border="0.05pt solid #E2E8F0" fo:padding="3pt" fo:background-color="#D1FAE5"/></style:style>' +
    '<style:style style:name="cell_orange" style:family="table-cell"><style:table-cell-properties fo:border="0.05pt solid #E2E8F0" fo:padding="3pt" fo:background-color="#FEF3C7"/></style:style>' +
    '<style:style style:name="cell_red"    style:family="table-cell"><style:table-cell-properties fo:border="0.05pt solid #E2E8F0" fo:padding="3pt" fo:background-color="#FEE2E2"/></style:style>' +
    '<style:style style:name="col_num"  style:family="table-column"><style:table-column-properties style:column-width="1cm"/></style:style>' +
    '<style:style style:name="col_nom"  style:family="table-column"><style:table-column-properties style:column-width="8cm"/></style:style>' +
    '<style:style style:name="col_stat" style:family="table-column"><style:table-column-properties style:column-width="3cm"/></style:style>' +
  '</office:automatic-styles>' +

  '<office:body><office:text>' +

    // En-tête
    '<text:p text:style-name="p_titre">RAPPORT D\'APPEL — KYSGBS</text:p>' +
    '<text:p text:style-name="p_sous_titre">Classe : ' + classeActive + '</text:p>' +
    '<text:p text:style-name="p_info">Date : ' + dateStr + '</text:p>' +
    '<text:p text:style-name="p_normal"> </text:p>' +

    // Résumé
    '<text:p text:style-name="p_normal">Total : ' + filtres.length + '   |   Présents : ' + presents.length + '   |   Retards : ' + retards.length + '   |   Absents : ' + absents.length + '</text:p>' +
    '<text:p text:style-name="p_normal"> </text:p>' +

    // Tableau complet
    '<text:p text:style-name="p_sous_titre">Liste complète</text:p>' +
    '<table:table>' +
      '<table:table-column table:style-name="col_num"/>' +
      '<table:table-column table:style-name="col_nom"/>' +
      '<table:table-column table:style-name="col_stat"/>' +
      '<table:table-row>' +
        '<table:table-cell table:style-name="cell_header"><text:p text:style-name="p_center"><text:span><fo:color fo:color="#ffffff">N°</fo:color></text:span></text:p></table:table-cell>' +
        '<table:table-cell table:style-name="cell_header"><text:p text:style-name="p_normal">Nom complet</text:p></table:table-cell>' +
        '<table:table-cell table:style-name="cell_header"><text:p text:style-name="p_center">Statut</text:p></table:table-cell>' +
      '</table:table-row>' +
      tousLesEleves +
    '</table:table>' +

  '</office:text></office:body></office:document-content>';

  // Téléchargement
  var blob = new Blob([odt], { type: 'application/vnd.oasis.opendocument.text' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'appel_' + classeActive + '_' + dateJour + '.odt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Rapport ODT téléchargé ✓');
}