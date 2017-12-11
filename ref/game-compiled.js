var tilegames = tilegames || {};
tilegames.Map = function(a, e) {
    this.MIN_SCALE_FOR_LABELS = .8;
    this.canvasSize = a;
    this.scale = e;
    this.playerDescriptions = {
        Austria: {
            possessive: "Austrian"
        },
        England: {
            possessive: "English"
        },
        France: {
            possessive: "French"
        },
        Germany: {
            possessive: "German"
        },
        Italy: {
            possessive: "Italian"
        },
        Russia: {
            possessive: "Russian"
        },
        Turkey: {
            possessive: "Turkish"
        }
    };
    this.unitNames = {
        F: "Fleet",
        A: "Army"
    };
    this.renderAttrs = {
        l: {
            fill: "#dfddc9",
            "fill-opacity": "0",
            stroke: "#fff",
            "stroke-width": 1
        },
        w: {
            fill: "#d0d0f0",
            "fill-opacity": "0",
            stroke: "#fff",
            "stroke-width": 1
        },
        highlight_fills: {
            l: "#f9f9cc",
            w: "#bbc"
        },
        text: {
            "font-family": "Verdana",
            "font-size": "9pt",
            fill: "#000",
            "fill-opacity": 1
        },
        redline: {
            stroke: "#f33",
            "stroke-width": 1,
            "fill-opacity": 0
        },
        shape: {
            fill: "#000",
            "fill-opacity": 0,
            "stroke-width": 0
        },
        selected_shape: {
            fill: "#fa481c",
            "fill-opacity": .3
        },
        selected_shape_secondary: {
            fill: "#fa481c",
            "fill-opacity": .1
        }
    };
    this.territories = {
        Tus: {
            name: "Tuscany",
            center: {
                x: 240,
                y: 425
            },
            l_neighbors: {
                Pie: 1,
                Rom: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 247,
                y: 430
            },
            w_neighbors: {
                Pie: 1,
                LYO: 1,
                TYS: 1,
                Rom: 1
            },
            path: "M233,415 L238,431 L247,442 L250,438 L263,434 L253,418 L246,416 L240,415 L236,411Z"
        },
        Con: {
            name: "Constantinople",
            center: {
                x: 437,
                y: 486
            },
            sc: {
                x: 424,
                y: 475
            },
            l_neighbors: {
                Bul: 1,
                Ank: 1,
                Smy: 1
            },
            type: "l",
            unit_center: {
                x: 444,
                y: 471
            },
            w_neighbors: {
                BLA: 1,
                Bulsc: 1,
                AEG: 1,
                Bulec: 1,
                Ank: 1,
                Smy: 1
            },
            path: "M408,470 L410,473 L414,475 L410,482 L409,487 L417,486 L417,489 L423,487 L432,493 L452,495 L466,491 L468,479 L468,461 L464,457 L442,460 L440,458 L430,455 L426,450 L420,451 L412,454 L413,464Z"
        },
        Nap: {
            name: "Naples",
            center: {
                x: 294,
                y: 492
            },
            sc: {
                x: 278,
                y: 469
            },
            l_neighbors: {
                Rom: 1,
                Apu: 1
            },
            type: "l",
            unit_center: {
                x: 299,
                y: 505
            },
            w_neighbors: {
                TYS: 1,
                Rom: 1,
                Apu: 1,
                ION: 1
            },
            path: "M271,464 L276,474 L290,487 L294,502 L289,511 L290,514 L295,515 L308,500 L311,491 L304,484 L293,481 L279,458Z"
        },
        ADR: {
            name: "Adriatic Sea",
            center: {
                x: 308,
                y: 460
            },
            l_neighbors: {
                Tri: 1,
                Alb: 1,
                Apu: 1,
                Ven: 1
            },
            type: "w",
            unit_center: {
                x: 296,
                y: 441
            },
            w_neighbors: {
                ION: 1
            },
            path: "M322,480 L297,456 L300,453 L290,453 L278,443 L272,424 L260,417 L261,401 L270,398 L276,399 L275,403 L278,410 L282,401 L286,402 L289,418 L306,436 L331,454 L331,477 L335,480Z"
        },
        TYS: {
            name: "Tyrrhenian Sea",
            center: {
                x: 245,
                y: 495
            },
            l_neighbors: {
                Tun: 1,
                Rom: 1,
                Tus: 1,
                Nap: 1
            },
            type: "w",
            unit_center: {
                x: 246,
                y: 483
            },
            w_neighbors: {
                LYO: 1,
                WES: 1,
                ION: 1
            },
            path: "M238,431 L247,442 L248,447 L256,458 L271,464 L276,474 L290,487 L294,502 L289,511 L285,511 L285,508 L276,510 L263,510 L257,507 L252,508 L247,513 L236,524 L233,523 L224,527 L223,518 L218,516 L218,490 L220,490 L224,468 L222,458 L218,458 L218,454 L223,450 L225,444 L225,436 L224,431Z"
        },
        Tri: {
            name: "Trieste",
            center: {
                x: 305,
                y: 425
            },
            sc: {
                x: 284,
                y: 396
            },
            l_neighbors: {
                Ser: 1,
                Alb: 1,
                Tyr: 1,
                Bud: 1,
                Vie: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 305,
                y: 412
            },
            w_neighbors: {
                Alb: 1,
                ADR: 1,
                Ven: 1
            },
            path: "M276,399 L275,403 L278,410 L282,401 L286,402 L289,418 L306,436 L331,454 L330,445 L337,446 L330,437 L327,429 L331,424 L330,416 L332,410 L323,408 L321,398 L311,394 L308,383 L299,385 L294,380 L289,385 L276,386 L279,389Z"
        },
        Bel: {
            name: "Belgium",
            center: {
                x: 192,
                y: 321
            },
            sc: {
                x: 186,
                y: 305
            },
            l_neighbors: {
                Hol: 1,
                Ruh: 1,
                Bur: 1,
                Pic: 1
            },
            type: "l",
            unit_center: {
                x: 197,
                y: 317
            },
            w_neighbors: {
                NTH: 1,
                Hol: 1,
                ENG: 1,
                Pic: 1
            },
            path: "M191,299 L194,303 L206,306 L205,311 L208,315 L210,326 L205,331 L192,323 L184,315 L169,311 L173,301Z"
        },
        NWG: {
            name: "Norwegian Sea",
            center: {
                x: 220,
                y: 70
            },
            l_neighbors: {
                Cly: 1,
                Nwy: 1,
                Edi: 1
            },
            type: "w",
            unit_center: {
                x: 220,
                y: 90
            },
            w_neighbors: {
                NTH: 1,
                NAO: 1,
                BAR: 1
            },
            path: "M362,33 L357,39 L343,44 L324,54 L320,64 L310,75 L309,84 L303,86 L292,111 L277,132 L269,134 L264,142 L258,141 L236,154 L198,154 L171,181 L171,197 L158,193 L152,194 L154,188 L161,185 L162,181 L148,177 L148,0 L362,0Z"
        },
        Mar: {
            name: "Marseilles",
            center: {
                x: 173,
                y: 412
            },
            sc: {
                x: 186,
                y: 417
            },
            l_neighbors: {
                Pie: 1,
                Gas: 1,
                Spa: 1,
                Bur: 1
            },
            type: "l",
            unit_center: {
                x: 184,
                y: 402
            },
            w_neighbors: {
                Spasc: 1,
                Pie: 1,
                LYO: 1
            },
            path: "M142,417 L149,403 L157,397 L168,395 L173,396 L178,390 L178,381 L194,382 L197,385 L203,379 L207,386 L204,390 L207,396 L201,399 L204,402 L203,410 L211,416 L198,421 L188,422 L176,417 L169,412 L158,418 L158,425 L154,427Z"
        },
        Kie: {
            name: "Kiel",
            center: {
                x: 237,
                y: 285
            },
            sc: {
                x: 254,
                y: 278
            },
            l_neighbors: {
                Den: 1,
                Ber: 1,
                Hol: 1,
                Ruh: 1,
                Mun: 1
            },
            type: "l",
            unit_center: {
                x: 243,
                y: 295
            },
            w_neighbors: {
                BAL: 1,
                Den: 1,
                HEL: 1,
                Ber: 1,
                Hol: 1
            },
            path: "M244,254 L243,257 L245,263 L244,270 L244,273 L235,277 L234,274 L230,273 L226,275 L227,280 L225,292 L220,298 L215,297 L213,302 L232,308 L241,316 L243,322 L263,310 L261,296 L264,293 L262,287 L266,283 L266,275 L261,274 L260,269 L256,266 L256,263 L254,255Z"
        },
        MAO: {
            name: "Mid-Atlantic Ocean",
            center: {
                x: 50,
                y: 355
            },
            l_neighbors: {
                Spasc: 1,
                Gas: 1,
                Spanc: 1,
                Naf: 1,
                Por: 1,
                Bre: 1
            },
            type: "w",
            unit_center: {
                x: 23,
                y: 355
            },
            w_neighbors: {
                IRI: 1,
                WES: 1,
                NAO: 1,
                ENG: 1
            },
            path: "M102,317 L100,322 L103,328 L109,329 L123,344 L122,350 L123,357 L128,363 L121,382 L122,384 L112,399 L101,396 L96,397 L72,384 L59,381 L54,375 L48,374 L46,378 L39,375 L33,381 L35,384 L32,396 L30,406 L17,427 L14,427 L10,433 L13,440 L15,441 L12,450 L13,454 L8,462 L19,469 L27,468 L33,475 L34,484 L37,490 L37,495 L33,496 L17,518 L0,520 L0,273 L58,273Z"
        },
        Gre: {
            name: "Greece",
            center: {
                x: 352,
                y: 490
            },
            sc: {
                x: 378,
                y: 507
            },
            l_neighbors: {
                Ser: 1,
                Alb: 1,
                Bul: 1
            },
            type: "l",
            unit_center: {
                x: 366,
                y: 515
            },
            w_neighbors: {
                Alb: 1,
                Bulsc: 1,
                AEG: 1,
                ION: 1
            },
            path: "M339,487 L346,498 L350,498 L347,500 L352,508 L367,507 L371,511 L355,510 L350,514 L357,521 L359,533 L360,528 L367,536 L368,531 L376,537 L371,520 L378,521 L377,513 L386,516 L385,509 L370,494 L371,491 L378,494 L368,483 L371,477 L379,484 L382,483 L381,477 L386,478 L380,472 L392,472 L388,460 L376,464 L369,464 L361,467 L356,471 L350,471 L350,477Z"
        },
        NAO: {
            name: "North Atlantic Ocean",
            center: {
                x: 65,
                y: 180
            },
            l_neighbors: {
                Cly: 1,
                Lvp: 1
            },
            type: "w",
            unit_center: {
                x: 65,
                y: 200
            },
            w_neighbors: {
                IRI: 1,
                MAO: 1,
                NWG: 1
            },
            path: "M70,261 L64,250 L67,242 L71,245 L81,234 L74,228 L80,225 L78,218 L82,217 L89,220 L94,220 L95,218 L94,216 L97,216 L101,212 L110,212 L119,217 L120,227 L130,227 L130,223 L138,217 L138,214 L130,208 L129,197 L139,189 L140,182 L148,177 L148,0 L0,0 L0,273 L58,273Z"
        },
        Cly: {
            name: "Clyde",
            center: {
                x: 133,
                y: 201
            },
            l_neighbors: {
                Lvp: 1,
                Edi: 1
            },
            type: "l",
            unit_center: {
                x: 139,
                y: 188
            },
            w_neighbors: {
                NAO: 1,
                Lvp: 1,
                NWG: 1,
                Edi: 1
            },
            path: "M138,214 L130,208 L129,197 L139,189 L140,182 L148,177 L162,181 L161,185 L154,188 L152,194 L146,200 L144,213Z"
        },
        Hol: {
            name: "Holland",
            center: {
                x: 210,
                y: 290
            },
            sc: {
                x: 205,
                y: 284
            },
            l_neighbors: {
                Ruh: 1,
                Kie: 1,
                Bel: 1
            },
            type: "l",
            unit_center: {
                x: 205,
                y: 297
            },
            w_neighbors: {
                NTH: 1,
                HEL: 1,
                Kie: 1,
                Bel: 1
            },
            path: "M226,275 L227,280 L225,292 L220,298 L215,297 L213,302 L210,313 L208,315 L205,311 L206,306 L194,303 L191,299 L198,289 L205,276 L205,279 L207,279 L211,274Z"
        },
        Swe: {
            name: "Sweden",
            center: {
                x: 300,
                y: 170
            },
            sc: {
                x: 323,
                y: 196
            },
            l_neighbors: {
                Fin: 1,
                Den: 1,
                Nwy: 1
            },
            type: "l",
            unit_center: {
                x: 315,
                y: 140
            },
            w_neighbors: {
                Fin: 1,
                BAL: 1,
                Den: 1,
                Nwy: 1,
                BOT: 1,
                SKA: 1
            },
            path: "M275,203 L277,218 L276,224 L282,236 L279,240 L279,243 L282,253 L289,254 L294,245 L305,244 L312,229 L311,220 L314,209 L322,206 L328,203 L331,193 L326,183 L320,182 L321,161 L330,146 L343,138 L351,128 L347,121 L349,112 L355,104 L362,107 L356,71 L342,61 L341,65 L330,64 L332,74 L324,71 L311,101 L308,104 L309,115 L300,126 L301,132 L292,133 L290,164 L285,170 L287,177 L279,204Z"
        },
        Ank: {
            name: "Ankara",
            center: {
                x: 510,
                y: 455
            },
            sc: {
                x: 482,
                y: 469
            },
            l_neighbors: {
                Con: 1,
                Arm: 1,
                Smy: 1
            },
            type: "l",
            unit_center: {
                x: 500,
                y: 460
            },
            w_neighbors: {
                BLA: 1,
                Con: 1,
                Arm: 1
            },
            path: "M555,438 L551,437 L520,441 L514,438 L511,440 L502,433 L481,438 L470,447 L464,457 L468,461 L468,479 L466,491 L473,491 L490,480 L501,482 L508,480 L531,460 L546,462 L555,460 L557,449Z"
        },
        Arm: {
            name: "Armenia",
            center: {
                x: 585,
                y: 467
            },
            l_neighbors: {
                Syr: 1,
                Sev: 1,
                Ank: 1,
                Smy: 1
            },
            type: "l",
            unit_center: {
                x: 576,
                y: 456
            },
            w_neighbors: {
                BLA: 1,
                Sev: 1,
                Ank: 1
            },
            path: "M609,493 L584,478 L563,479 L562,471 L556,467 L555,460 L557,449 L555,438 L570,427 L589,442 L594,439 L603,441 L609,440Z"
        },
        Bud: {
            name: "Budapest",
            center: {
                x: 350,
                y: 390
            },
            sc: {
                x: 326,
                y: 376
            },
            l_neighbors: {
                Tri: 1,
                Ser: 1,
                Gal: 1,
                Vie: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 353,
                y: 378
            },
            w_neighbors: {},
            path: "M394,376 L395,382 L401,385 L406,396 L401,402 L387,402 L367,406 L365,412 L360,413 L342,410 L338,412 L335,410 L332,410 L323,408 L321,398 L311,394 L308,383 L311,375 L322,370 L335,354 L337,350 L350,347 L360,351 L368,353 L377,360 L378,363 L384,365Z"
        },
        Pic: {
            name: "Picardy",
            center: {
                x: 168,
                y: 326
            },
            l_neighbors: {
                Par: 1,
                Bur: 1,
                Bel: 1,
                Bre: 1
            },
            type: "l",
            unit_center: {
                x: 168,
                y: 319
            },
            w_neighbors: {
                ENG: 1,
                Bel: 1,
                Bre: 1
            },
            path: "M169,311 L153,315 L155,320 L150,319 L148,329 L159,331 L165,331 L172,328 L188,332 L192,323 L184,315Z"
        },
        Ven: {
            name: "Venice",
            center: {
                x: 245,
                y: 407
            },
            sc: {
                x: 261,
                y: 397
            },
            l_neighbors: {
                Tri: 1,
                Pie: 1,
                Tyr: 1,
                Rom: 1,
                Apu: 1,
                Tus: 1
            },
            type: "l",
            unit_center: {
                x: 250,
                y: 408
            },
            w_neighbors: {
                Tri: 1,
                ADR: 1,
                Apu: 1
            },
            path: "M278,443 L272,424 L260,417 L261,401 L270,398 L276,399 L279,389 L276,386 L268,385 L259,388 L255,394 L250,397 L246,392 L233,404 L236,411 L240,415 L246,416 L253,418 L263,434 L274,447Z"
        },
        Ukr: {
            name: "Ukraine",
            center: {
                x: 420,
                y: 340
            },
            l_neighbors: {
                Sev: 1,
                Mos: 1,
                Gal: 1,
                War: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 427,
                y: 327
            },
            w_neighbors: {},
            path: "M383,327 L385,332 L399,338 L404,354 L403,360 L411,361 L414,372 L423,376 L432,372 L434,360 L445,350 L460,345 L466,307 L470,303 L468,295 L456,292 L390,306 L386,309Z"
        },
        Ruh: {
            name: "Ruhr",
            center: {
                x: 215,
                y: 330
            },
            l_neighbors: {
                Hol: 1,
                Mun: 1,
                Kie: 1,
                Bel: 1,
                Bur: 1
            },
            type: "l",
            unit_center: {
                x: 223,
                y: 320
            },
            w_neighbors: {},
            path: "M213,302 L210,313 L208,315 L210,326 L205,331 L204,338 L211,346 L219,344 L237,322 L243,322 L241,316 L232,308Z"
        },
        Stp: {
            name: "St Petersburg",
            coasts: {
                sc: {
                    x: 418,
                    y: 205,
                    path: "M414,147 L410,152 L412,161 L402,177 L403,183 L411,184 L414,187 L408,187 L400,192 L399,197 L387,196 L371,198 L369,202 L372,205 L382,206 L394,205 L405,217 L409,228 L421,229 L428,225 L439,211 L447,209 L451,213 L457,210 L456,207 L458,194 L476,183Z"
                },
                nc: {
                    x: 472,
                    y: 122,
                    path: "M534,164 L564,159 L573,143 L598,132 L609,117 L609,0 L540,0 L535,9 L530,6 L517,19 L516,33 L513,38 L513,23 L507,20 L505,26 L499,33 L492,48 L495,58 L488,60 L479,57 L477,55 L481,50 L473,43 L466,45 L472,62 L478,66 L478,74 L472,72 L468,74 L457,91 L469,100 L467,106 L462,109 L444,101 L442,110 L447,115 L454,119 L452,122 L434,118 L426,103 L426,94 L414,88 L412,83 L445,84 L457,79 L459,66 L453,61 L417,47 L405,49 L401,45 L397,48 L388,61 L387,68 L393,73 L392,92 L401,110 L402,118 L410,130 L414,147 L476,183 L489,184 L515,169Z"
                }
            },
            center: {
                x: 460,
                y: 149
            },
            sc: {
                x: 418,
                y: 187
            },
            l_neighbors: {
                Fin: 1,
                Lvn: 1,
                Nwy: 1,
                Mos: 1
            },
            type: "l",
            unit_center: {
                x: 500,
                y: 140
            },
            w_neighbors: {
                sc: {
                    Fin: 1,
                    Lvn: 1,
                    BOT: 1
                },
                nc: {
                    Nwy: 1,
                    BAR: 1
                }
            },
            path: "M534,164 L564,159 L573,143 L598,132 L609,117 L609,0 L540,0 L535,9 L530,6 L517,19 L516,33 L513,38 L513,23 L507,20 L505,26 L499,33 L492,48 L495,58 L488,60 L479,57 L477,55 L481,50 L473,43 L466,45 L472,62 L478,66 L478,74 L472,72 L468,74 L457,91 L469,100 L467,106 L462,109 L444,101 L442,110 L447,115 L454,119 L452,122 L434,118 L426,103 L426,94 L414,88 L412,83 L445,84 L457,79 L459,66 L453,61 L417,47 L405,49 L401,45 L397,48 L388,61 L387,68 L393,73 L392,92 L401,110 L402,118 L410,130 L414,147 L410,152 L412,161 L402,177 L403,183 L411,184 L414,187 L408,187 L400,192 L399,197 L387,196 L371,198 L369,202 L372,205 L382,206 L394,205 L405,217 L409,228 L421,229 L428,225 L439,211 L447,209 L451,213 L457,210 L456,207 L458,194 L476,183 L489,184 L515,169Z"
        },
        Den: {
            name: "Denmark",
            center: {
                x: 250,
                y: 235
            },
            sc: {
                x: 272,
                y: 252
            },
            l_neighbors: {
                Swe: 1,
                Kie: 1
            },
            type: "l",
            unit_center: {
                x: 256,
                y: 245
            },
            w_neighbors: {
                Swe: 1,
                BAL: 1,
                NTH: 1,
                HEL: 1,
                Kie: 1,
                SKA: 1
            },
            path: "M279,243 L275,242 L269,243 L266,240 L267,234 L266,221 L263,223 L248,224 L245,237 L243,247 L244,254 L254,255 L266,255 L271,260 L278,254 L277,250 L280,248Z"
        },
        Par: {
            name: "Paris",
            center: {
                x: 155,
                y: 358
            },
            sc: {
                x: 173,
                y: 334
            },
            l_neighbors: {
                Gas: 1,
                Bur: 1,
                Pic: 1,
                Bre: 1
            },
            type: "l",
            unit_center: {
                x: 162,
                y: 346
            },
            w_neighbors: {},
            path: "M146,365 L149,372 L156,374 L165,365 L185,344 L188,332 L172,328 L165,331 L159,331 L148,329 L146,337Z"
        },
        Fin: {
            name: "Finland",
            center: {
                x: 375,
                y: 160
            },
            l_neighbors: {
                Swe: 1,
                Stp: 1,
                Nwy: 1
            },
            type: "l",
            unit_center: {
                x: 385,
                y: 143
            },
            w_neighbors: {
                Stpsc: 1,
                Swe: 1,
                BOT: 1
            },
            path: "M362,107 L368,108 L372,120 L366,121 L359,136 L345,151 L347,160 L350,165 L348,178 L349,184 L357,186 L365,191 L384,185 L402,177 L412,161 L410,152 L414,147 L410,130 L402,118 L401,110 L392,92 L393,73 L387,68 L388,61 L386,58 L388,54 L379,48 L370,49 L369,61 L355,62 L346,54 L342,61 L356,71Z"
        },
        ENG: {
            name: "English Channel",
            center: {
                x: 135,
                y: 306
            },
            l_neighbors: {
                Lon: 1,
                Wal: 1,
                Bel: 1,
                Bre: 1,
                Pic: 1
            },
            type: "w",
            unit_center: {
                x: 119,
                y: 307
            },
            w_neighbors: {
                IRI: 1,
                NTH: 1,
                MAO: 1
            },
            path: "M173,301 L169,311 L153,315 L155,320 L150,319 L144,318 L142,312 L136,310 L136,326 L124,323 L122,318 L102,317 L88,303 L100,291 L110,292 L120,295 L124,291 L134,294 L147,295 L160,298 L168,296Z"
        },
        Yor: {
            name: "Yorkshire",
            center: {
                x: 155,
                y: 254
            },
            l_neighbors: {
                Lon: 1,
                Wal: 1,
                Lvp: 1,
                Edi: 1
            },
            type: "l",
            unit_center: {
                x: 161,
                y: 254
            },
            w_neighbors: {
                Lon: 1,
                NTH: 1,
                Edi: 1
            },
            path: "M163,226 L163,239 L168,246 L170,252 L169,265 L166,269 L153,271 L150,264 L151,248 L155,239 L155,228Z"
        },
        Mun: {
            name: "Munich",
            center: {
                x: 235,
                y: 360
            },
            sc: {
                x: 258,
                y: 359
            },
            l_neighbors: {
                Sil: 1,
                Tyr: 1,
                Ber: 1,
                Boh: 1,
                Ruh: 1,
                Kie: 1,
                Bur: 1
            },
            type: "l",
            unit_center: {
                x: 243,
                y: 347
            },
            w_neighbors: {},
            path: "M234,366 L243,370 L246,369 L250,371 L267,368 L271,370 L269,362 L275,362 L281,356 L276,346 L268,343 L264,329 L266,325 L278,326 L288,321 L284,314 L288,305 L263,310 L243,322 L237,322 L219,344 L211,346 L213,352 L209,363 L222,365 L225,362 L232,363Z"
        },
        Wal: {
            name: "Wales",
            center: {
                x: 130,
                y: 275
            },
            l_neighbors: {
                Lon: 1,
                Lvp: 1,
                Yor: 1
            },
            type: "l",
            unit_center: {
                x: 125,
                y: 285
            },
            w_neighbors: {
                IRI: 1,
                Lon: 1,
                Lvp: 1,
                ENG: 1
            },
            path: "M100,291 L112,287 L122,281 L130,282 L127,276 L119,272 L116,272 L115,265 L128,262 L143,262 L150,264 L153,271 L150,277 L145,281 L147,295 L134,294 L124,291 L120,295 L110,292Z"
        },
        BAL: {
            name: "Baltic Sea",
            center: {
                x: 308,
                y: 260
            },
            l_neighbors: {
                Swe: 1,
                Den: 1,
                Lvn: 1,
                Ber: 1,
                Kie: 1,
                Pru: 1
            },
            type: "w",
            unit_center: {
                x: 323,
                y: 250
            },
            w_neighbors: {
                BOT: 1,
                SKA: 1
            },
            path: "M266,255 L271,260 L278,254 L277,250 L280,248 L279,243 L282,253 L289,254 L294,245 L305,244 L312,229 L311,220 L359,220 L349,229 L347,243 L347,248 L348,254 L344,262 L337,264 L334,273 L328,274 L326,265 L314,266 L307,273 L294,275 L286,274 L287,267 L280,266 L266,275 L261,274 L260,269 L256,266 L256,263 L254,255Z"
        },
        Pie: {
            name: "Piedmont",
            center: {
                x: 215,
                y: 408
            },
            l_neighbors: {
                Tyr: 1,
                Tus: 1,
                Mar: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 220,
                y: 399
            },
            w_neighbors: {
                LYO: 1,
                Tus: 1,
                Mar: 1
            },
            path: "M207,386 L204,390 L207,396 L201,399 L204,402 L203,410 L211,416 L222,410 L233,415 L236,411 L233,404 L246,392 L243,388 L229,385 L227,390 L221,385 L213,387Z"
        },
        Ser: {
            name: "Serbia",
            center: {
                x: 350,
                y: 450
            },
            sc: {
                x: 343,
                y: 419
            },
            l_neighbors: {
                Tri: 1,
                Alb: 1,
                Bul: 1,
                Gre: 1,
                Bud: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 351,
                y: 438
            },
            w_neighbors: {},
            path: "M365,412 L360,413 L342,410 L338,412 L335,410 L332,410 L330,416 L331,424 L327,429 L330,437 L337,446 L346,452 L346,466 L350,471 L356,471 L361,467 L369,464 L365,461 L371,456 L366,439 L371,438 L368,433 L365,425 L367,421Z"
        },
        SKA: {
            name: "Skagerrak",
            center: {
                x: 255,
                y: 220
            },
            l_neighbors: {
                Swe: 1,
                Den: 1,
                Nwy: 1
            },
            type: "w",
            unit_center: {
                x: 260,
                y: 212
            },
            w_neighbors: {
                NTH: 1,
                BAL: 1
            },
            path: "M241,209 L246,210 L266,201 L270,193 L275,203 L277,218 L276,224 L282,236 L279,240 L279,243 L275,242 L269,243 L266,240 L267,234 L266,221 L263,223 L248,224 L241,224Z"
        },
        BOT: {
            name: "Gulf of Bothnia",
            center: {
                x: 328,
                y: 175
            },
            l_neighbors: {
                Fin: 1,
                Stpsc: 1,
                Swe: 1,
                Lvn: 1
            },
            type: "w",
            unit_center: {
                x: 348,
                y: 199
            },
            w_neighbors: {
                BAL: 1
            },
            path: "M311,220 L314,209 L322,206 L328,203 L331,193 L326,183 L320,182 L321,161 L330,146 L343,138 L351,128 L347,121 L349,112 L355,104 L362,107 L368,108 L372,120 L366,121 L359,136 L345,151 L347,160 L350,165 L348,178 L349,184 L357,186 L365,191 L384,185 L402,177 L403,183 L411,184 L414,187 L408,187 L400,192 L399,197 L387,196 L371,198 L369,202 L365,204 L368,210 L372,213 L373,221 L377,227 L373,229 L366,228 L359,220Z"
        },
        Ber: {
            name: "Berlin",
            center: {
                x: 272,
                y: 292
            },
            sc: {
                x: 281,
                y: 298
            },
            l_neighbors: {
                Sil: 1,
                Mun: 1,
                Kie: 1,
                Pru: 1
            },
            type: "l",
            unit_center: {
                x: 279,
                y: 283
            },
            w_neighbors: {
                BAL: 1,
                Kie: 1,
                Pru: 1
            },
            path: "M294,275 L286,274 L287,267 L280,266 L266,275 L266,283 L262,287 L264,293 L261,296 L263,310 L288,305 L296,300 L297,296 L292,290Z"
        },
        LYO: {
            name: "Gulf of Lyon",
            center: {
                x: 170,
                y: 457
            },
            l_neighbors: {
                Spasc: 1,
                Pie: 1,
                Tus: 1,
                Mar: 1
            },
            type: "w",
            unit_center: {
                x: 180,
                y: 444
            },
            w_neighbors: {
                TYS: 1,
                WES: 1
            },
            path: "M115,469 L110,461 L124,444 L131,439 L146,438 L157,432 L158,425 L158,418 L169,412 L176,417 L188,422 L198,421 L211,416 L222,410 L233,415 L238,431 L224,431 L221,434 L211,436 L213,451 L218,454 L218,458 L214,461 L206,462 L205,466 L154,466 L148,463 L142,469Z"
        },
        Smy: {
            name: "Smyrna",
            center: {
                x: 460,
                y: 510
            },
            sc: {
                x: 424,
                y: 502
            },
            l_neighbors: {
                Syr: 1,
                Con: 1,
                Arm: 1,
                Ank: 1
            },
            type: "l",
            unit_center: {
                x: 490,
                y: 505
            },
            w_neighbors: {
                EAS: 1,
                Syr: 1,
                Con: 1,
                AEG: 1
            },
            path: "M417,489 L420,495 L417,498 L417,507 L423,510 L427,524 L435,523 L435,530 L441,526 L447,528 L453,534 L464,531 L466,521 L475,520 L485,528 L491,530 L505,526 L511,514 L520,517 L527,508 L530,509 L536,494 L545,486 L555,484 L563,479 L562,471 L556,467 L555,460 L546,462 L531,460 L508,480 L501,482 L490,480 L473,491 L466,491 L452,495 L432,493 L423,487Z"
        },
        ION: {
            name: "Ionian Sea",
            center: {
                x: 315,
                y: 520
            },
            l_neighbors: {
                Alb: 1,
                Tun: 1,
                Gre: 1,
                Apu: 1,
                Nap: 1
            },
            type: "w",
            unit_center: {
                x: 324,
                y: 540
            },
            w_neighbors: {
                EAS: 1,
                AEG: 1,
                TYS: 1,
                ADR: 1
            },
            path: "M289,511 L290,514 L295,515 L308,500 L311,491 L304,484 L310,480 L318,485 L322,485 L322,480 L335,480 L339,487 L346,498 L350,498 L347,500 L352,508 L367,507 L371,511 L355,510 L350,514 L357,521 L359,533 L360,528 L367,536 L368,531 L376,537 L383,544 L380,547 L383,550 L400,554 L400,559 L232,559 L234,551 L232,544 L225,535 L231,531 L236,524 L247,513 L258,519 L273,531 L281,532 L282,521 L285,513 L285,511Z"
        },
        Pru: {
            name: "Prussia",
            center: {
                x: 335,
                y: 283
            },
            l_neighbors: {
                Sil: 1,
                Lvn: 1,
                Ber: 1,
                War: 1
            },
            type: "l",
            unit_center: {
                x: 315,
                y: 283
            },
            w_neighbors: {
                BAL: 1,
                Ber: 1,
                Lvn: 1
            },
            path: "M347,243 L347,248 L348,254 L344,262 L337,264 L334,273 L328,274 L326,265 L314,266 L307,273 L294,275 L292,290 L297,296 L296,300 L320,303 L324,299 L326,292 L341,287 L345,289 L359,286 L365,281 L367,265 L362,260 L356,261 L354,251Z"
        },
        Gal: {
            name: "Galicia",
            center: {
                x: 355,
                y: 343
            },
            l_neighbors: {
                Sil: 1,
                Boh: 1,
                Bud: 1,
                Ukr: 1,
                Vie: 1,
                Gal: 1,
                War: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 377,
                y: 343
            },
            w_neighbors: {},
            path: "M333,330 L341,330 L344,332 L353,327 L356,323 L361,324 L367,329 L374,327 L379,324 L383,327 L385,332 L399,338 L404,354 L403,360 L404,371 L394,376 L384,365 L378,363 L377,360 L368,353 L360,351 L350,347 L337,350 L329,346 L322,347 L321,339 L322,347 L321,339 L325,340 L329,338Z"
        },
        Lon: {
            name: "London",
            center: {
                x: 160,
                y: 280
            },
            sc: {
                x: 162,
                y: 290
            },
            l_neighbors: {
                Wal: 1,
                Yor: 1
            },
            type: "l",
            unit_center: {
                x: 162,
                y: 281
            },
            w_neighbors: {
                NTH: 1,
                Wal: 1,
                Yor: 1,
                ENG: 1
            },
            path: "M166,269 L168,270 L171,268 L177,270 L178,274 L176,283 L165,293 L172,294 L168,296 L160,298 L147,295 L145,281 L150,277 L153,271Z"
        },
        Naf: {
            name: "North Africa",
            center: {
                x: 130,
                y: 536
            },
            l_neighbors: {
                Tun: 1
            },
            type: "l",
            unit_center: {
                x: 100,
                y: 536
            },
            w_neighbors: {
                Tun: 1,
                WES: 1,
                MAO: 1
            },
            path: "M203,520 L179,515 L169,518 L150,511 L117,509 L106,511 L99,515 L89,512 L84,518 L79,520 L68,516 L68,511 L64,514 L46,509 L42,502 L41,494 L37,495 L33,496 L17,518 L0,520 L0,559 L195,559 L197,527Z"
        },
        Rum: {
            name: "Rumania",
            center: {
                x: 410,
                y: 415
            },
            sc: {
                x: 402,
                y: 413
            },
            l_neighbors: {
                Ser: 1,
                Bul: 1,
                Sev: 1,
                Ukr: 1,
                Bud: 1,
                Gal: 1
            },
            type: "l",
            unit_center: {
                x: 415,
                y: 405
            },
            w_neighbors: {
                BLA: 1,
                Sev: 1,
                Bulec: 1
            },
            path: "M403,360 L404,371 L394,376 L395,382 L401,385 L406,396 L401,402 L387,402 L367,406 L365,412 L367,421 L370,425 L375,423 L382,427 L390,425 L398,427 L404,422 L410,420 L422,420 L430,423 L432,409 L439,404 L438,397 L427,399 L422,382 L423,376 L414,372 L411,361Z"
        },
        Boh: {
            name: "Bohemia",
            center: {
                x: 283,
                y: 347
            },
            l_neighbors: {
                Sil: 1,
                Tyr: 1,
                Mun: 1,
                Vie: 1,
                Gal: 1
            },
            type: "l",
            unit_center: {
                x: 289,
                y: 336
            },
            w_neighbors: {},
            path: "M281,356 L276,346 L268,343 L264,329 L266,325 L278,326 L288,321 L297,322 L311,334 L314,332 L321,339 L322,347 L316,348 L303,346 L295,349 L292,357Z"
        },
        HEL: {
            name: "Helgoland Bight",
            center: {
                x: 220,
                y: 265
            },
            l_neighbors: {
                Den: 1,
                Hol: 1,
                Kie: 1
            },
            type: "w",
            unit_center: {
                x: 226,
                y: 252
            },
            w_neighbors: {
                NTH: 1
            },
            path: "M245,237 L243,247 L244,254 L243,257 L245,263 L244,270 L244,273 L235,277 L234,274 L230,273 L226,275 L211,274 L211,237Z"
        },
        Sev: {
            name: "Sevastopol",
            center: {
                x: 540,
                y: 350
            },
            sc: {
                x: 483,
                y: 396
            },
            l_neighbors: {
                Ukr: 1,
                Mos: 1,
                Arm: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 515,
                y: 330
            },
            w_neighbors: {
                BLA: 1,
                Arm: 1,
                Rum: 1
            },
            path: "M438,397 L446,378 L459,375 L461,377 L459,379 L465,383 L476,381 L478,383 L472,385 L468,392 L477,396 L477,401 L486,404 L488,397 L494,396 L497,392 L507,389 L506,384 L494,387 L485,378 L503,364 L526,351 L527,354 L514,365 L517,371 L520,371 L515,384 L511,383 L510,386 L517,393 L528,394 L554,406 L567,408 L573,417 L570,427 L589,442 L594,439 L603,441 L609,440 L609,330 L597,330 L569,321 L564,305 L554,304 L549,284 L533,283 L526,287 L516,286 L505,280 L494,295 L477,289 L468,295 L470,303 L466,307 L460,345 L445,350 L434,360 L432,372 L423,376 L422,382 L427,399Z"
        },
        Edi: {
            name: "Edinburgh",
            center: {
                x: 152,
                y: 202
            },
            sc: {
                x: 154,
                y: 219
            },
            l_neighbors: {
                Cly: 1,
                Lvp: 1,
                Yor: 1
            },
            type: "l",
            unit_center: {
                x: 157,
                y: 210
            },
            w_neighbors: {
                NTH: 1,
                Cly: 1,
                Yor: 1,
                NWG: 1
            },
            path: "M152,194 L158,193 L171,197 L170,202 L165,210 L158,214 L151,215 L157,216 L161,218 L163,226 L155,228 L145,217 L144,213 L146,200Z"
        },
        Spa: {
            name: "Spain",
            coasts: {
                sc: {
                    x: 52,
                    y: 475,
                    path: "M134,417 L40,441 L34,447 L36,457 L27,468 L33,475 L34,484 L37,490 L47,488 L52,489 L60,486 L78,491 L83,494 L86,485 L90,483 L98,484 L107,474 L113,473 L115,469 L110,461 L124,444 L131,439 L146,438 L157,432 L158,425 L154,427 L142,417 L135,414Z"
                },
                nc: {
                    x: 80,
                    y: 404,
                    path: "M134,417 L123,412 L113,407 L112,399 L101,396 L96,397 L72,384 L59,381 L54,375 L48,374 L46,378 L39,375 L33,381 L35,384 L32,396 L43,395 L42,399 L55,400 L62,407 L61,411 L52,412 L42,432 L37,431 L40,441"
                }
            },
            center: {
                x: 85,
                y: 450
            },
            sc: {
                x: 80,
                y: 432
            },
            l_neighbors: {
                Gas: 1,
                Spa: 1,
                Mar: 1,
                Por: 1
            },
            type: "l",
            unit_center: {
                x: 64,
                y: 439
            },
            w_neighbors: {
                sc: {
                    LYO: 1,
                    MAO: 1,
                    WES: 1,
                    Por: 1,
                    Mar: 1
                },
                nc: {
                    Gas: 1,
                    MAO: 1,
                    Por: 1
                }
            },
            path: "M134,417 L123,412 L113,407 L112,399 L101,396 L96,397 L72,384 L59,381 L54,375 L48,374 L46,378 L39,375 L33,381 L35,384 L32,396 L43,395 L42,399 L55,400 L62,407 L61,411 L52,412 L42,432 L37,431 L40,441 L40,441 L34,447 L36,457 L27,468 L33,475 L34,484 L37,490 L47,488 L52,489 L60,486 L78,491 L83,494 L86,485 L90,483 L98,484 L107,474 L113,473 L115,469 L110,461 L124,444 L131,439 L146,438 L157,432 L158,425 L154,427 L142,417 L135,414Z"
        },
        Bul: {
            name: "Bulgaria",
            coasts: {
                sc: {
                    x: 399,
                    y: 462,
                    path: "M413,464 L412,454 L371,438 L366,439 L371,456 L365,461 L369,464 L376,464 L388,460 L392,472 L400,468 L408,470 L413,464 L412,454Z"
                },
                ec: {
                    x: 410,
                    y: 440,
                    path: "M412,454 L420,451 L426,450 L422,441 L425,427 L429,426 L430,423 L422,420 L410,420 L404,422 L398,427 L390,425 L382,427 L375,423 L370,425 L367,421 L365,425 L368,433 L371,438Z"
                }
            },
            center: {
                x: 395,
                y: 443
            },
            sc: {
                x: 377,
                y: 444
            },
            l_neighbors: {
                Ser: 1,
                Con: 1,
                Bul: 1,
                Gre: 1,
                Rum: 1
            },
            type: "l",
            unit_center: {
                x: 395,
                y: 443
            },
            w_neighbors: {
                sc: {
                    Con: 1,
                    AEG: 1,
                    Gre: 1
                },
                ec: {
                    BLA: 1,
                    Con: 1,
                    Rum: 1
                }
            },
            path: "M413,464 L412,454 L420,451 L426,450 L422,441 L425,427 L429,426 L430,423 L422,420 L410,420 L404,422 L398,427 L390,425 L382,427 L375,423 L370,425 L367,421 L365,425 L368,433 L371,438 L366,439 L371,456 L365,461 L369,464 L376,464 L388,460 L392,472 L400,468 L408,470 L413,464 L412,454Z"
        },
        IRI: {
            name: "Irish Sea",
            center: {
                x: 95,
                y: 270
            },
            l_neighbors: {
                Wal: 1,
                Lvp: 1
            },
            type: "w",
            unit_center: {
                x: 90,
                y: 276
            },
            w_neighbors: {
                MAO: 1,
                NAO: 1,
                ENG: 1
            },
            path: "M100,291 L112,287 L122,281 L130,282 L127,276 L119,272 L116,272 L115,265 L128,262 L126,256 L121,257 L132,250 L135,250 L139,240 L136,229 L130,227 L120,227 L110,232 L109,246 L98,259 L87,257 L70,261 L58,273 L88,303Z"
        },
        War: {
            name: "Warsaw",
            center: {
                x: 355,
                y: 304
            },
            sc: {
                x: 346,
                y: 302
            },
            l_neighbors: {
                Sil: 1,
                Lvn: 1,
                Ukr: 1,
                Mos: 1,
                Gal: 1,
                Pru: 1
            },
            type: "l",
            unit_center: {
                x: 361,
                y: 315
            },
            w_neighbors: {},
            path: "M333,330 L326,327 L323,322 L320,303 L324,299 L326,292 L341,287 L345,289 L359,286 L365,281 L372,283 L379,290 L386,309 L383,327 L379,324 L374,327 L367,329 L361,324 L356,323 L353,327 L344,332 L341,330Z"
        },
        BAR: {
            name: "Barents Sea",
            center: {
                x: 440,
                y: 15
            },
            l_neighbors: {
                Nwy: 1,
                Stpnc: 1
            },
            type: "w",
            unit_center: {
                x: 445,
                y: 41
            },
            w_neighbors: {
                NWG: 1
            },
            path: "M540,0 L535,9 L530,6 L517,19 L516,33 L513,38 L513,23 L507,20 L505,26 L499,33 L492,48 L495,58 L488,60 L479,57 L477,55 L481,50 L473,43 L466,45 L472,62 L478,66 L478,74 L472,72 L468,74 L457,91 L469,100 L467,106 L462,109 L444,101 L442,110 L447,115 L454,119 L452,122 L434,118 L426,103 L426,94 L414,88 L412,83 L445,84 L457,79 L459,66 L453,61 L417,47 L405,49 L401,45 L397,48 L391,47 L395,41 L394,38 L384,33 L382,40 L380,33 L377,31 L374,38 L371,33 L366,42 L366,33 L362,33 L362,0Z"
        },
        Vie: {
            name: "Vienna",
            center: {
                x: 307,
                y: 370
            },
            sc: {
                x: 301,
                y: 363
            },
            l_neighbors: {
                Tri: 1,
                Tyr: 1,
                Boh: 1,
                Bud: 1,
                Gal: 1
            },
            type: "l",
            unit_center: {
                x: 314,
                y: 360
            },
            w_neighbors: {},
            path: "M292,357 L295,349 L303,346 L316,348 L322,347 L329,346 L337,350 L335,354 L322,370 L311,375 L308,383 L299,385 L294,380 L295,362Z"
        },
        Apu: {
            name: "Apulia",
            center: {
                x: 291,
                y: 470
            },
            l_neighbors: {
                Rom: 1,
                Nap: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 302,
                y: 472
            },
            w_neighbors: {
                ADR: 1,
                Nap: 1,
                ION: 1,
                Ven: 1
            },
            path: "M304,484 L310,480 L318,485 L322,485 L322,480 L297,456 L300,453 L290,453 L278,443 L274,447 L279,451 L280,455 L279,458 L293,481Z"
        },
        Rom: {
            name: "Rome",
            center: {
                x: 262,
                y: 457
            },
            sc: {
                x: 268,
                y: 448
            },
            l_neighbors: {
                Apu: 1,
                Nap: 1,
                Tus: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 255,
                y: 445
            },
            w_neighbors: {
                TYS: 1,
                Tus: 1,
                Nap: 1
            },
            path: "M247,442 L248,447 L256,458 L271,464 L279,458 L280,455 L279,451 L274,447 L263,434 L250,438Z"
        },
        Tun: {
            name: "Tunis",
            center: {
                x: 210,
                y: 555
            },
            sc: {
                x: 220,
                y: 529
            },
            l_neighbors: {
                Naf: 1
            },
            type: "l",
            unit_center: {
                x: 212,
                y: 542
            },
            w_neighbors: {
                TYS: 1,
                WES: 1,
                ION: 1,
                Naf: 1
            },
            path: "M232,559 L234,551 L232,544 L225,535 L231,531 L236,524 L233,523 L224,527 L223,518 L218,516 L212,517 L208,521 L203,520 L197,527 L195,559Z"
        },
        Mos: {
            name: "Moscow",
            center: {
                x: 460,
                y: 265
            },
            sc: {
                x: 481,
                y: 234
            },
            l_neighbors: {
                Stp: 1,
                Sev: 1,
                Lvn: 1,
                Ukr: 1,
                War: 1
            },
            type: "l",
            unit_center: {
                x: 505,
                y: 226
            },
            w_neighbors: {},
            path: "M609,117 L598,132 L573,143 L564,159 L534,164 L515,169 L489,184 L476,183 L458,194 L456,207 L457,210 L451,213 L447,209 L439,211 L428,225 L421,229 L409,228 L405,239 L404,275 L392,278 L389,285 L379,290 L386,309 L390,306 L456,292 L468,295 L477,289 L494,295 L505,280 L516,286 L526,287 L533,283 L549,284 L554,304 L564,305 L569,321 L597,330 L609,330Z"
        },
        WES: {
            name: "Western Mediterranean",
            center: {
                x: 160,
                y: 491
            },
            l_neighbors: {
                Spasc: 1,
                Tun: 1,
                Naf: 1
            },
            type: "w",
            unit_center: {
                x: 140,
                y: 492
            },
            w_neighbors: {
                LYO: 1,
                TYS: 1,
                MAO: 1
            },
            path: "M37,490 L47,488 L52,489 L60,486 L78,491 L83,494 L86,485 L90,483 L98,484 L107,474 L113,473 L115,469 L142,469 L150,471 L154,466 L205,466 L206,476 L204,485 L208,492 L212,492 L217,489 L218,490 L218,516 L212,517 L208,521 L203,520 L179,515 L169,518 L150,511 L117,509 L106,511 L99,515 L89,512 L84,518 L79,520 L68,516 L68,511 L64,514 L46,509 L42,502 L41,494 L37,495Z"
        },
        Lvn: {
            name: "Livonia",
            center: {
                x: 380,
                y: 260
            },
            l_neighbors: {
                Stp: 1,
                Mos: 1,
                Pru: 1,
                War: 1
            },
            type: "l",
            unit_center: {
                x: 382,
                y: 245
            },
            w_neighbors: {
                Stpsc: 1,
                BAL: 1,
                BOT: 1,
                Pru: 1
            },
            path: "M369,202 L365,204 L368,210 L372,213 L373,221 L377,227 L373,229 L366,228 L359,220 L349,229 L347,243 L354,251 L356,261 L362,260 L367,265 L365,281 L372,283 L379,290 L389,285 L392,278 L404,275 L405,239 L409,228 L405,217 L394,205 L382,206 L372,205Z"
        },
        NTH: {
            name: "North Sea",
            center: {
                x: 190,
                y: 230
            },
            l_neighbors: {
                Lon: 1,
                Den: 1,
                Nwy: 1,
                Hol: 1,
                Yor: 1,
                Bel: 1,
                Edi: 1
            },
            type: "w",
            unit_center: {
                x: 204,
                y: 215
            },
            w_neighbors: {
                HEL: 1,
                ENG: 1,
                NWG: 1,
                SKA: 1
            },
            path: "M245,237 L248,224 L241,224 L241,209 L231,201 L229,192 L233,186 L231,180 L233,167 L237,160 L236,154 L198,154 L171,181 L171,197 L170,202 L165,210 L158,214 L151,215 L157,216 L161,218 L163,226 L163,239 L168,246 L170,252 L169,265 L166,269 L168,270 L171,268 L177,270 L178,274 L176,283 L165,293 L172,294 L168,296 L173,301 L191,299 L198,289 L205,276 L205,279 L207,279 L211,274 L211,237Z"
        },
        Alb: {
            name: "Albania",
            center: {
                x: 333,
                y: 460
            },
            l_neighbors: {
                Tri: 1,
                Ser: 1,
                Gre: 1
            },
            type: "l",
            unit_center: {
                x: 339,
                y: 469
            },
            w_neighbors: {
                Tri: 1,
                ADR: 1,
                Gre: 1,
                ION: 1
            },
            path: "M331,454 L331,477 L335,480 L339,487 L350,477 L350,471 L346,466 L346,452 L337,446 L330,445Z"
        },
        Syr: {
            name: "Syria",
            center: {
                x: 570,
                y: 535
            },
            l_neighbors: {
                Arm: 1,
                Smy: 1
            },
            type: "l",
            unit_center: {
                x: 570,
                y: 520
            },
            w_neighbors: {
                EAS: 1,
                Smy: 1
            },
            path: "M530,509 L536,494 L545,486 L555,484 L563,479 L584,478 L609,493 L609,559 L528,559 L532,535 L526,530 L525,518Z"
        },
        Gas: {
            name: "Gascony",
            center: {
                x: 130,
                y: 400
            },
            l_neighbors: {
                Par: 1,
                Spa: 1,
                Mar: 1,
                Bur: 1,
                Bre: 1
            },
            type: "l",
            unit_center: {
                x: 137,
                y: 388
            },
            w_neighbors: {
                MAO: 1,
                Spanc: 1,
                Bre: 1
            },
            path: "M128,363 L121,382 L122,384 L112,399 L113,407 L123,412 L134,417 L135,414 L142,417 L149,403 L157,397 L168,395 L163,387 L165,383 L158,380 L156,374 L149,372 L146,365Z"
        },
        Bre: {
            name: "Brest",
            center: {
                x: 130,
                y: 345
            },
            sc: {
                x: 106,
                y: 322
            },
            l_neighbors: {
                Par: 1,
                Gas: 1,
                Pic: 1
            },
            type: "l",
            unit_center: {
                x: 125,
                y: 334
            },
            w_neighbors: {
                Gas: 1,
                MAO: 1,
                ENG: 1,
                Pic: 1
            },
            path: "M150,319 L144,318 L142,312 L136,310 L136,326 L124,323 L122,318 L102,317 L100,322 L103,328 L109,329 L123,344 L122,350 L123,357 L128,363 L146,365 L146,337 L148,329Z"
        },
        Tyr: {
            name: "Tyrolia",
            center: {
                x: 255,
                y: 380
            },
            l_neighbors: {
                Tri: 1,
                Pie: 1,
                Boh: 1,
                Mun: 1,
                Vie: 1,
                Ven: 1
            },
            type: "l",
            unit_center: {
                x: 277,
                y: 378
            },
            w_neighbors: {},
            path: "M234,366 L243,370 L246,369 L250,371 L267,368 L271,370 L269,362 L275,362 L281,356 L292,357 L295,362 L294,380 L289,385 L276,386 L268,385 L259,388 L255,394 L250,397 L246,392 L243,388 L245,384 L241,378 L234,374Z"
        },
        Sil: {
            name: "Silesia",
            center: {
                x: 304,
                y: 325
            },
            l_neighbors: {
                Ber: 1,
                Boh: 1,
                Mun: 1,
                Gal: 1,
                Pru: 1,
                War: 1
            },
            type: "l",
            unit_center: {
                x: 304,
                y: 314
            },
            w_neighbors: {},
            path: "M288,321 L297,322 L311,334 L314,332 L321,339 L325,340 L329,338 L333,330 L326,327 L323,322 L320,303 L296,300 L288,305 L284,314Z"
        },
        EAS: {
            name: "Eastern Mediterranean",
            center: {
                x: 455,
                y: 550
            },
            l_neighbors: {
                Syr: 1,
                Smy: 1
            },
            type: "w",
            unit_center: {
                x: 474,
                y: 546
            },
            w_neighbors: {
                AEG: 1,
                ION: 1
            },
            path: "M435,530 L441,526 L447,528 L453,534 L464,531 L466,521 L475,520 L485,528 L491,530 L505,526 L511,514 L520,517 L527,508 L530,509 L525,518 L526,530 L532,535 L528,559 L400,559 L400,554 L414,552 L416,549Z"
        },
        Lvp: {
            name: "Liverpool",
            center: {
                x: 138,
                y: 230
            },
            sc: {
                x: 144,
                y: 257
            },
            l_neighbors: {
                Wal: 1,
                Cly: 1,
                Yor: 1,
                Edi: 1
            },
            type: "l",
            unit_center: {
                x: 142,
                y: 241
            },
            w_neighbors: {
                IRI: 1,
                Wal: 1,
                Cly: 1,
                NAO: 1
            },
            path: "M128,262 L126,256 L121,257 L132,250 L135,250 L139,240 L136,229 L130,227 L130,223 L138,217 L138,214 L144,213 L145,217 L155,228 L155,239 L151,248 L150,264 L143,262Z"
        },
        Por: {
            name: "Portugal",
            center: {
                x: 22,
                y: 440
            },
            sc: {
                x: 15,
                y: 434
            },
            l_neighbors: {
                Spa: 1
            },
            type: "l",
            unit_center: {
                x: 34,
                y: 417
            },
            w_neighbors: {
                Spasc: 1,
                MAO: 1,
                Spanc: 1
            },
            path: "M32,396 L30,406 L17,427 L14,427 L10,433 L13,440 L15,441 L12,450 L13,454 L8,462 L19,469 L27,468 L36,457 L34,447 L40,441 L37,431 L42,432 L52,412 L61,411 L62,407 L55,400 L42,399 L43,395Z"
        },
        BLA: {
            name: "Black Sea",
            center: {
                x: 500,
                y: 418
            },
            l_neighbors: {
                Con: 1,
                Sev: 1,
                Bulec: 1,
                Arm: 1,
                Ank: 1,
                Rum: 1
            },
            type: "w",
            unit_center: {
                x: 484,
                y: 420
            },
            w_neighbors: {
                AEG: 1
            },
            path: "M440,458 L430,455 L426,450 L422,441 L425,427 L429,426 L430,423 L432,409 L439,404 L438,397 L446,378 L459,375 L461,377 L459,379 L465,383 L476,381 L478,383 L472,385 L468,392 L477,396 L477,401 L486,404 L488,397 L494,396 L497,392 L507,389 L506,384 L494,387 L485,378 L503,364 L526,351 L527,354 L514,365 L517,371 L520,371 L515,384 L511,383 L510,386 L517,393 L528,394 L554,406 L567,408 L573,417 L570,427 L555,438 L551,437 L520,441 L514,438 L511,440 L502,433 L481,438 L470,447 L464,457 L442,460Z"
        },
        AEG: {
            name: "Aegean Sea",
            center: {
                x: 392,
                y: 510
            },
            l_neighbors: {
                Con: 1,
                Bulsc: 1,
                Gre: 1,
                Smy: 1
            },
            type: "w",
            unit_center: {
                x: 403,
                y: 524
            },
            w_neighbors: {
                EAS: 1,
                BLA: 1,
                ION: 1
            },
            path: "M376,537 L371,520 L378,521 L377,513 L386,516 L385,509 L370,494 L371,491 L378,494 L368,483 L371,477 L379,484 L382,483 L381,477 L386,478 L380,472 L392,472 L400,468 L408,470 L410,473 L414,475 L410,482 L409,487 L417,486 L417,489 L420,495 L417,498 L417,507 L423,510 L427,524 L435,523 L435,530 L416,549 L412,547 L387,546 L383,544Z"
        },
        Nwy: {
            name: "Norway",
            center: {
                x: 250,
                y: 175
            },
            sc: {
                x: 270,
                y: 187
            },
            l_neighbors: {
                Fin: 1,
                Swe: 1,
                Stp: 1
            },
            type: "l",
            unit_center: {
                x: 264,
                y: 160
            },
            w_neighbors: {
                Swe: 1,
                NTH: 1,
                Stpnc: 1,
                NWG: 1,
                BAR: 1,
                SKA: 1
            },
            path: "M397,48 L391,47 L395,41 L394,38 L384,33 L382,40 L380,33 L377,31 L374,38 L371,33 L366,42 L366,33 L362,33 L357,39 L343,44 L324,54 L320,64 L310,75 L309,84 L303,86 L292,111 L277,132 L269,134 L264,142 L258,141 L236,154 L237,160 L233,167 L231,180 L233,186 L229,192 L231,201 L241,209 L246,210 L266,201 L270,193 L275,203 L279,204 L287,177 L285,170 L290,164 L292,133 L301,132 L300,126 L309,115 L308,104 L311,101 L324,71 L332,74 L330,64 L341,65 L342,61 L346,54 L355,62 L369,61 L370,49 L379,48 L388,54 L386,58 L388,61Z"
        },
        Bur: {
            name: "Burgundy",
            center: {
                x: 185,
                y: 371
            },
            l_neighbors: {
                Par: 1,
                Gas: 1,
                Ruh: 1,
                Mun: 1,
                Mar: 1,
                Bel: 1,
                Pic: 1
            },
            type: "l",
            unit_center: {
                x: 191,
                y: 360
            },
            w_neighbors: {},
            path: "M192,323 L205,331 L204,338 L211,346 L213,352 L209,363 L208,367 L194,382 L178,381 L178,390 L173,396 L168,395 L163,387 L165,383 L158,380 L156,374 L165,365 L185,344 L188,332Z"
        }
    }
}
;
tilegames = tilegames || {};
tilegames.Game = function(a, e, l, n, y, z, B, L, O, Z, x, m) {
    this.events_ = {};
    this.map_ = new tilegames.Map({
        x: 560,
        y: 610
    },1);
    this.gamestate_ = new tilegames.GameState(a,e,l,n,B,L,O,Z,x);
    this.disableEngine_ = m;
    this.unsavedChanges_ = !1;
    this.mapRenderer_ = new MapRenderer(this.events_,this.map_);
    this.textRenderer_ = new TextRenderer(this.events_,this.map_,this.disableEngine_,z);
    this.toolTipRenderer_ = new ToolTipRenderer(this.events_,this.map_);
    this.disableEngine_ || (this.mapEventHandler = new MapEventHandler(this.events_,this.map_,this.mapRenderer_.getMapShapes()),
    this.keyboardEventHandler = new KeyboardEventHandler(this.events_),
    this.textEventHandler = new TextEventHandler(this.events_));
    this.orderEventHandler = new tilegames.OrderEventHandler(this.events_,this.gamestate_,this.map_,z)
}
;
$(function() {
    $("#btn_adjudicate_now").click(function(a) {
        a = $(a.target).data("fullstage");
        confirm("This will immediately process adjudication for " + a + ". Adjudicate now?") && $("form#adjudicate_now").submit()
    })
});
tilegames = tilegames || {};
tilegames.GameState = function(a, e, l, n, y, z, B, L, O) {
    this.stage_ = a;
    this.orders_ = e;
    this.unitsByPlayer_ = l;
    this.territories_ = n;
    this.unitChangeCount_ = y;
    this.buildableTerritories_ = z;
    this.unbuildableTerritories_ = B;
    this.retreatOptions_ = L;
    this.playerRetreatOrders_ = O;
    this.unitsByTerritory_ = {};
    for (var Z in this.unitsByPlayer_) {
        a = this.unitsByPlayer_[Z];
        for (var x in a)
            this.unitsByTerritory_[x] = {
                type: a[x],
                owner: Z
            }
    }
}
;
tilegames.GameState.prototype.buildableTerritories = function() {
    return this.buildableTerritories_
}
;
tilegames.GameState.prototype.unbuildableTerritories = function() {
    return this.unbuildableTerritories_
}
;
tilegames.GameState.prototype.orders = function() {
    return this.orders_
}
;
tilegames.GameState.prototype.playerAt = function(a) {
    return a && (a = this.unitsByTerritory_[a]) ? a.owner : null
}
;
tilegames.GameState.prototype.playerUnits = function(a) {
    return this.unitsByPlayer_[a]
}
;
tilegames.GameState.prototype.retreatOptions = function(a) {
    var e = this.playerAt(a);
    if (e && this.retreatOptions_[e])
        return this.retreatOptions_[e][a]
}
;
tilegames.GameState.prototype.stage = function() {
    return this.stage_
}
;
tilegames.GameState.prototype.territoryOwnedBy = function(a) {
    return this.territories_[a]
}
;
tilegames.GameState.prototype.unitsByPlayer = function() {
    return this.unitsByPlayer_
}
;
tilegames.GameState.prototype.unitChangeCount = function() {
    return this.unitChangeCount_
}
;
tilegames.GameState.prototype.unitTypeAt = function(a) {
    return a && (a = this.unitsByTerritory_[a]) ? a.type : null
}
;
//This is identical to the begining of raphael.js
(function(a) {
    var e = /[\.\/]/, l = function() {}, n = function(a, e) {
        return a - e
    }, y, z, B = {
        n: {}
    }, L = function(a, e) {
        var l = z, m = Array.prototype.slice.call(arguments, 2), p = L.listeners(a), d = 0, P, B = [], K = {}, E = [], D = y;
        y = a;
        for (var u = z = 0, R = p.length; u < R; u++)
            "zIndex"in p[u] && (B.push(p[u].zIndex),
            0 > p[u].zIndex && (K[p[u].zIndex] = p[u]));
        for (B.sort(n); 0 > B[d]; )
            if (P = K[B[d++]],
            E.push(P.apply(e, m)),
            z)
                return z = l,
                E;
        for (u = 0; u < R; u++)
            if (P = p[u],
            "zIndex"in P)
                if (P.zIndex == B[d]) {
                    E.push(P.apply(e, m));
                    if (z)
                        break;
                    do
                        if (d++,
                        (P = K[B[d]]) && E.push(P.apply(e, m)),
                        z)
                            break;
                    while (P)
                } else
                    K[P.zIndex] = P;
            else if (E.push(P.apply(e, m)),
            z)
                break;
        z = l;
        y = D;
        return E.length ? E : null
    };
    L.listeners = function(a) {
        a = a.split(e);
        var l = B, x, m, p, d, n, y, z, E = [l], D = [];
        p = 0;
        for (d = a.length; p < d; p++) {
            z = [];
            n = 0;
            for (y = E.length; n < y; n++)
                for (l = E[n].n,
                x = [l[a[p]], l["*"]],
                m = 2; m--; )
                    (l = x[m]) && (z.push(l),
                    D = D.concat(l.f || []));
            E = z
        }
        return D
    }
    ;
    L.on = function(a, n) {
        for (var x = a.split(e), m = B, p = 0, d = x.length; p < d; p++)
            m = m.n,
            !m[x[p]] && (m[x[p]] = {
                n: {}
            }),
            m = m[x[p]];
        m.f = m.f || [];
        p = 0;
        for (d = m.f.length; p < d; p++)
            if (m.f[p] == n)
                return l;
        m.f.push(n);
        return function(a) {
            +a == +a && (n.zIndex = +a)
        }
    }
    ;
    L.stop = function() {
        z = 1
    }
    ;
    L.nt = function(a) {
        return a ? (new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")).test(y) : y
    }
    ;
    L.off = L.unbind = function(a, l) {
        var n = a.split(e), m, p, d, z, y, K, E = [B];
        z = 0;
        for (y = n.length; z < y; z++)
            for (K = 0; K < E.length; K += d.length - 2) {
                d = [K, 1];
                m = E[K].n;
                if ("*" != n[z])
                    m[n[z]] && d.push(m[n[z]]);
                else
                    for (p in m)
                        m.hasOwnProperty(p) && d.push(m[p]);
                E.splice.apply(E, d)
            }
        z = 0;
        for (y = E.length; z < y; z++)
            for (m = E[z]; m.n; ) {
                if (l) {
                    if (m.f) {
                        K = 0;
                        for (n = m.f.length; K < n; K++)
                            if (m.f[K] == l) {
                                m.f.splice(K, 1);
                                break
                            }
                        !m.f.length && delete m.f
                    }
                    for (p in m.n)
                        if (m.n.hasOwnProperty(p) && m.n[p].f) {
                            d = m.n[p].f;
                            K = 0;
                            for (n = d.length; K < n; K++)
                                if (d[K] == l) {
                                    d.splice(K, 1);
                                    break
                                }
                            !d.length && delete m.n[p].f
                        }
                } else
                    for (p in delete m.f,
                    m.n)
                        m.n.hasOwnProperty(p) && m.n[p].f && delete m.n[p].f;
                m = m.n
            }
    }
    ;
    L.once = function(a, e) {
        var l = function() {
            var m = e.apply(this, arguments);
            L.unbind(a, l);
            return m
        };
        return L.on(a, l)
    }
    ;
    L.version = "0.3.4";
    L.toString = function() {
        return "You are running Eve 0.3.4"
    }
    ;
    "undefined" != typeof module && module.exports ? module.exports = L : "undefined" != typeof define ? define("eve", [], function() {
        return L
    }) : a.eve = L
}
)(this);
(function() {
    function a(b) {
        for (var g = 0; g < M.length; g++)
            M[g].el.paper == b && M.splice(g--, 1)
    }
    function e(b, g, t, w, c, h) {
        t = U(t);
        var a, ja, r, q, e, F, C = b.ms, p = {}, m = {}, A = {};
        if (w)
            for (F = 0,
            J = M.length; F < J; F++) {
                var l = M[F];
                if (l.el.id == g.id && l.anim == b) {
                    l.percent != t ? (M.splice(F, 1),
                    r = 1) : ja = l;
                    g.attr(l.totalOrigin);
                    break
                }
            }
        else
            w = +m;
        F = 0;
        for (var J = b.percents.length; F < J; F++) {
            if (b.percents[F] == t || b.percents[F] > w * b.top) {
                t = b.percents[F];
                e = b.percents[F - 1] || 0;
                C = C / b.top * (t - e);
                q = b.percents[F + 1];
                a = b.anim[t];
                break
            }
            w && g.attr(b.anim[b.percents[F]])
        }
        if (a) {
            if (ja)
                ja.initstatus = w,
                ja.start = new Date - ja.ms * w;
            else {
                for (var u in a)
                    if (a[D](u) && (va[D](u) || g.paper.customAttributes[D](u)))
                        switch (p[u] = g.attr(u),
                        null == p[u] && (p[u] = $a[u]),
                        m[u] = a[u],
                        va[u]) {
                        case V:
                            A[u] = (m[u] - p[u]) / C;
                            break;
                        case "colour":
                            p[u] = d.getRGB(p[u]);
                            F = d.getRGB(m[u]);
                            A[u] = {
                                r: (F.r - p[u].r) / C,
                                g: (F.g - p[u].g) / C,
                                b: (F.b - p[u].b) / C
                            };
                            break;
                        case "path":
                            F = ma(p[u], m[u]);
                            l = F[1];
                            p[u] = F[0];
                            A[u] = [];
                            F = 0;
                            for (J = p[u].length; F < J; F++) {
                                A[u][F] = [0];
                                for (var G = 1, H = p[u][F].length; G < H; G++)
                                    A[u][F][G] = (l[F][G] - p[u][F][G]) / C
                            }
                            break;
                        case "transform":
                            F = g._;
                            if (J = ab(F[u], m[u]))
                                for (p[u] = J.from,
                                m[u] = J.to,
                                A[u] = [],
                                A[u].real = !0,
                                F = 0,
                                J = p[u].length; F < J; F++)
                                    for (A[u][F] = [p[u][F][0]],
                                    G = 1,
                                    H = p[u][F].length; G < H; G++)
                                        A[u][F][G] = (m[u][F][G] - p[u][F][G]) / C;
                            else
                                J = g.matrix || new z,
                                F = {
                                    _: {
                                        transform: F.transform
                                    },
                                    getBBox: function() {
                                        return g.getBBox(1)
                                    }
                                },
                                p[u] = [J.a, J.b, J.c, J.d, J.e, J.f],
                                Ka(F, m[u]),
                                m[u] = F._.transform,
                                A[u] = [(F.matrix.a - J.a) / C, (F.matrix.b - J.b) / C, (F.matrix.c - J.c) / C, (F.matrix.d - J.d) / C, (F.matrix.e - J.e) / C, (F.matrix.f - J.f) / C];
                            break;
                        case "csv":
                            J = f(a[u])[k](Q);
                            l = f(p[u])[k](Q);
                            if ("clip-rect" == u)
                                for (p[u] = l,
                                A[u] = [],
                                F = l.length; F--; )
                                    A[u][F] = (J[F] - p[u][F]) / C;
                            m[u] = J;
                            break;
                        default:
                            for (J = [][v](a[u]),
                            l = [][v](p[u]),
                            A[u] = [],
                            F = g.paper.customAttributes[u].length; F--; )
                                A[u][F] = ((J[F] || 0) - (l[F] || 0)) / C
                        }
                F = a.easing;
                u = d.easing_formulas[F];
                if (!u)
                    if ((u = f(F).match(bb)) && 5 == u.length) {
                        var x = u;
                        u = function(b) {
                            return n(b, +x[1], +x[2], +x[3], +x[4], C)
                        }
                    } else
                        u = cb;
                F = a.start || b.start || +new Date;
                l = {
                    anim: b,
                    percent: t,
                    timestamp: F,
                    start: F + (b.del || 0),
                    status: 0,
                    initstatus: w || 0,
                    stop: !1,
                    ms: C,
                    easing: u,
                    from: p,
                    diff: A,
                    to: m,
                    el: g,
                    callback: a.callback,
                    prev: e,
                    next: q,
                    repeat: h || b.times,
                    origin: g.attr(),
                    totalOrigin: c
                };
                M.push(l);
                if (w && !ja && !r && (l.stop = !0,
                l.start = new Date - C * w,
                1 == M.length))
                    return wa();
                r && (l.start = new Date - l.ms * w);
                1 == M.length && La(wa)
            }
            eve("raphael.anim.start." + g.id, g, b)
        }
    }
    function l(b, g) {
        var t = []
          , w = {};
        this.ms = g;
        this.times = 1;
        if (b) {
            for (var c in b)
                b[D](c) && (w[U(c)] = b[c],
                t.push(U(c)));
            t.sort(db)
        }
        this.anim = w;
        this.top = t[t.length - 1];
        this.percents = t
    }
    function n(b, g, t, w, c, a) {
        function h(b, g) {
            var t, w, c, a;
            c = b;
            for (w = 0; 8 > w; w++) {
                a = ((d * c + k) * c + f) * c - b;
                if (ba(a) < g)
                    return c;
                t = (3 * d * c + 2 * k) * c + f;
                if (1E-6 > ba(t))
                    break;
                c -= a / t
            }
            t = 0;
            w = 1;
            c = b;
            if (c < t)
                return t;
            if (c > w)
                return w;
            for (; t < w; ) {
                a = ((d * c + k) * c + f) * c;
                if (ba(a - b) < g)
                    break;
                b > a ? t = c : w = c;
                c = (w - t) / 2 + t
            }
            return c
        }
        var f = 3 * g
          , k = 3 * (w - g) - f
          , d = 1 - f - k
          , r = 3 * t
          , q = 3 * (c - t) - r
          , e = 1 - r - q;
        return function(b, g) {
            var t = h(b, g);
            return ((e * t + q) * t + r) * t
        }(b, 1 / (200 * a))
    }
    function y() {
        return this.x + h + this.y + h + this.width + " \u00d7 " + this.height
    }
    function z(b, g, t, w, c, a) {
        null != b ? (this.a = +b,
        this.b = +g,
        this.c = +t,
        this.d = +w,
        this.e = +c,
        this.f = +a) : (this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.e = 0,
        this.f = 0)
    }
    function B(b, g, t) {
        b = d._path2curve(b);
        g = d._path2curve(g);
        for (var w, c, a, h, f, k, r, q, e, v, C = t ? 0 : [], p = 0, u = b.length; p < u; p++) {
            var l = b[p];
            if ("M" == l[0])
                w = f = l[1],
                c = k = l[2];
            else {
                "C" == l[0] ? (e = [w, c].concat(l.slice(1)),
                w = e[6],
                c = e[7]) : (e = [w, c, w, c, f, k, f, k],
                w = f,
                c = k);
                for (var l = 0, A = g.length; l < A; l++) {
                    var m = g[l];
                    if ("M" == m[0])
                        a = r = m[1],
                        h = q = m[2];
                    else {
                        "C" == m[0] ? (v = [a, h].concat(m.slice(1)),
                        a = v[6],
                        h = v[7]) : (v = [a, h, a, h, r, q, r, q],
                        a = r,
                        h = q);
                        var n = e
                          , G = v
                          , m = t
                          , x = d.bezierBBox(n)
                          , z = d.bezierBBox(G);
                        if (d.isBBoxIntersect(x, z)) {
                            for (var x = O.apply(0, n), z = O.apply(0, G), x = ~~(x / 5), z = ~~(z / 5), y = [], R = [], I = {}, T = m ? 0 : [], E = 0; E < x + 1; E++) {
                                var B = d.findDotsAtSegment.apply(d, n.concat(E / x));
                                y.push({
                                    x: B.x,
                                    y: B.y,
                                    t: E / x
                                })
                            }
                            for (E = 0; E < z + 1; E++)
                                B = d.findDotsAtSegment.apply(d, G.concat(E / z)),
                                R.push({
                                    x: B.x,
                                    y: B.y,
                                    t: E / z
                                });
                            for (E = 0; E < x; E++)
                                for (n = 0; n < z; n++) {
                                    var D = y[E], P = y[E + 1], G = R[n], B = R[n + 1], Z = .001 > ba(P.x - D.x) ? "y" : "x", K = .001 > ba(B.x - G.x) ? "y" : "x", N;
                                    N = D.x;
                                    var L = D.y
                                      , V = P.x
                                      , Q = P.y
                                      , W = G.x
                                      , M = G.y
                                      , Y = B.x
                                      , X = B.y;
                                    if (H(N, V) < aa(W, Y) || aa(N, V) > H(W, Y) || H(L, Q) < aa(M, X) || aa(L, Q) > H(M, X))
                                        N = void 0;
                                    else {
                                        var S = (N * Q - L * V) * (W - Y) - (N - V) * (W * X - M * Y)
                                          , U = (N * Q - L * V) * (M - X) - (L - Q) * (W * X - M * Y)
                                          , fa = (N - V) * (M - X) - (L - Q) * (W - Y);
                                        if (fa) {
                                            var S = S / fa
                                              , U = U / fa
                                              , fa = +S.toFixed(2)
                                              , ca = +U.toFixed(2);
                                            N = fa < +aa(N, V).toFixed(2) || fa > +H(N, V).toFixed(2) || fa < +aa(W, Y).toFixed(2) || fa > +H(W, Y).toFixed(2) || ca < +aa(L, Q).toFixed(2) || ca > +H(L, Q).toFixed(2) || ca < +aa(M, X).toFixed(2) || ca > +H(M, X).toFixed(2) ? void 0 : {
                                                x: S,
                                                y: U
                                            }
                                        } else
                                            N = void 0
                                    }
                                    N && I[N.x.toFixed(4)] != N.y.toFixed(4) && (I[N.x.toFixed(4)] = N.y.toFixed(4),
                                    D = D.t + ba((N[Z] - D[Z]) / (P[Z] - D[Z])) * (P.t - D.t),
                                    G = G.t + ba((N[K] - G[K]) / (B[K] - G[K])) * (B.t - G.t),
                                    0 <= D && 1 >= D && 0 <= G && 1 >= G && (m ? T++ : T.push({
                                        x: N.x,
                                        y: N.y,
                                        t1: D,
                                        t2: G
                                    })))
                                }
                            m = T
                        } else
                            m = m ? 0 : [];
                        if (t)
                            C += m;
                        else {
                            x = 0;
                            for (z = m.length; x < z; x++)
                                m[x].segment1 = p,
                                m[x].segment2 = l,
                                m[x].bez1 = e,
                                m[x].bez2 = v;
                            C = C.concat(m)
                        }
                    }
                }
            }
        }
        return C
    }
    function L(b, g, t, w, c, a, h, f, k) {
        if (!(0 > k || O(b, g, t, w, c, a, h, f) < k)) {
            var d = .5, r = 1 - d, q;
            for (q = O(b, g, t, w, c, a, h, f, r); .01 < ba(q - k); )
                d /= 2,
                r += (q < k ? 1 : -1) * d,
                q = O(b, g, t, w, c, a, h, f, r);
            return r
        }
    }
    function O(b, g, t, w, c, a, h, f, k) {
        null == k && (k = 1);
        k = (1 < k ? 1 : 0 > k ? 0 : k) / 2;
        for (var d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], r = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], q = 0, e = 0; 12 > e; e++)
            var v = k * d[e] + k
              , C = v * (v * (-3 * b + 9 * t - 9 * c + 3 * h) + 6 * b - 12 * t + 6 * c) - 3 * b + 3 * t
              , v = v * (v * (-3 * g + 9 * w - 9 * a + 3 * f) + 6 * g - 12 * w + 6 * a) - 3 * g + 3 * w
              , q = q + r[e] * A.sqrt(C * C + v * v);
        return k * q
    }
    function Z(b, g) {
        for (var t = [], w = 0, c = b.length; c - 2 * !g > w; w += 2) {
            var a = [{
                x: +b[w - 2],
                y: +b[w - 1]
            }, {
                x: +b[w],
                y: +b[w + 1]
            }, {
                x: +b[w + 2],
                y: +b[w + 3]
            }, {
                x: +b[w + 4],
                y: +b[w + 5]
            }];
            g ? w ? c - 4 == w ? a[3] = {
                x: +b[0],
                y: +b[1]
            } : c - 2 == w && (a[2] = {
                x: +b[0],
                y: +b[1]
            },
            a[3] = {
                x: +b[2],
                y: +b[3]
            }) : a[0] = {
                x: +b[c - 2],
                y: +b[c - 1]
            } : c - 4 == w ? a[3] = a[2] : w || (a[0] = {
                x: +b[w],
                y: +b[w + 1]
            });
            t.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
        }
        return t
    }
    function x() {
        return this.hex
    }
    function m(b, g, t) {
        function w() {
            var a = Array.prototype.slice.call(arguments, 0)
              , h = a.join("\u2400")
              , f = w.cache = w.cache || {}
              , k = w.count = w.count || [];
            if (f[D](h)) {
                a: for (var a = k, k = h, d = 0, r = a.length; d < r; d++)
                    if (a[d] === k) {
                        a.push(a.splice(d, 1)[0]);
                        break a
                    }
                return t ? t(f[h]) : f[h]
            }
            1E3 <= k.length && delete f[k.shift()];
            k.push(h);
            f[h] = b[c](g, a);
            return t ? t(f[h]) : f[h]
        }
        return w
    }
    function p(b) {
        if (Object(b) !== b)
            return b;
        var g = new b.constructor, t;
        for (t in b)
            b[D](t) && (g[t] = p(b[t]));
        return g
    }
    function d(b) {
        if (d.is(b, "function"))
            return P ? b() : eve.on("raphael.DOMload", b);
        if (d.is(b, X))
            return d._engine.create[c](d, b.splice(0, 3 + d.is(b[0], V))).add(b);
        var g = Array.prototype.slice.call(arguments, 0);
        if (d.is(g[g.length - 1], "function")) {
            var t = g.pop();
            return P ? t.call(d._engine.create[c](d, g)) : eve.on("raphael.DOMload", function() {
                t.call(d._engine.create[c](d, g))
            })
        }
        return d._engine.create[c](d, arguments)
    }
    d.version = "2.1.0";
    d.eve = eve;
    var P, Q = /[, ]+/, K = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
    }, E = /\{(\d+)\}/g, D = "hasOwnProperty", u = {
        doc: document,
        win: window
    }, R = Object.prototype[D].call(u.win, "Raphael"), T = u.win.Raphael, N = function() {
        this.ca = this.customAttributes = {}
    }, I, c = "apply", v = "concat", C = "createTouch"in u.doc, h = " ", f = String, k = "split", r = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[k](h), q = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
    }, G = f.prototype.toLowerCase, A = Math, H = A.max, aa = A.min, ba = A.abs, Y = A.pow, W = A.PI, V = "number", X = "array", fa = Object.prototype.toString;
    d._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i;
    var eb = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i
      , fb = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
    }
      , bb = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/
      , xa = A.round
      , U = parseFloat
      , ga = parseInt
      , Ma = f.prototype.toUpperCase
      , $a = d._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
    }
      , va = d._availableAnimAttrs = {
        blur: V,
        "clip-rect": "csv",
        cx: V,
        cy: V,
        fill: "colour",
        "fill-opacity": V,
        "font-size": V,
        height: V,
        opacity: V,
        path: "path",
        r: V,
        rx: V,
        ry: V,
        stroke: "colour",
        "stroke-opacity": V,
        "stroke-width": V,
        transform: "transform",
        width: V,
        x: V,
        y: V
    }
      , ya = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/
      , gb = {
        hs: 1,
        rg: 1
    }
      , hb = /,?([achlmqrstvxz]),?/gi
      , ib = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig
      , jb = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig
      , Na = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;
    d._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/;
    var na = {}
      , db = function(b, g) {
        return U(b) - U(g)
    }
      , kb = function() {}
      , cb = function(b) {
        return b
    }
      , za = d._rectPath = function(b, g, t, w, c) {
        return c ? [["M", b + c, g], ["l", t - 2 * c, 0], ["a", c, c, 0, 0, 1, c, c], ["l", 0, w - 2 * c], ["a", c, c, 0, 0, 1, -c, c], ["l", 2 * c - t, 0], ["a", c, c, 0, 0, 1, -c, -c], ["l", 0, 2 * c - w], ["a", c, c, 0, 0, 1, c, -c], ["z"]] : [["M", b, g], ["l", t, 0], ["l", 0, w], ["l", -t, 0], ["z"]]
    }
      , Oa = function(b, g, t, w) {
        null == w && (w = t);
        return [["M", b, g], ["m", 0, -w], ["a", t, w, 0, 1, 1, 0, 2 * w], ["a", t, w, 0, 1, 1, 0, -2 * w], ["z"]]
    }
      , oa = d._getPath = {
        path: function(b) {
            return b.attr("path")
        },
        circle: function(b) {
            b = b.attrs;
            return Oa(b.cx, b.cy, b.r)
        },
        ellipse: function(b) {
            b = b.attrs;
            return Oa(b.cx, b.cy, b.rx, b.ry)
        },
        rect: function(b) {
            b = b.attrs;
            return za(b.x, b.y, b.width, b.height, b.r)
        },
        image: function(b) {
            b = b.attrs;
            return za(b.x, b.y, b.width, b.height)
        },
        text: function(b) {
            b = b._getBBox();
            return za(b.x, b.y, b.width, b.height)
        }
    }
      , Aa = d.mapPath = function(b, g) {
        if (!g)
            return b;
        var t, w, c, a, h, f, k;
        b = ma(b);
        c = 0;
        for (h = b.length; c < h; c++)
            for (k = b[c],
            a = 1,
            f = k.length; a < f; a += 2)
                t = g.x(k[a], k[a + 1]),
                w = g.y(k[a], k[a + 1]),
                k[a] = t,
                k[a + 1] = w;
        return b
    }
    ;
    d._g = u;
    d.type = u.win.SVGAngle || u.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if ("VML" == d.type) {
        var Ba = u.doc.createElement("div"), pa;
        Ba.innerHTML = '<v:shape adj="1"/>';
        pa = Ba.firstChild;
        pa.style.behavior = "url(#default#VML)";
        if (!pa || "object" != typeof pa.adj)
            return d.type = "";
        Ba = null
    }
    d.svg = !(d.vml = "VML" == d.type);
    d._Paper = N;
    d.fn = I = N.prototype = d.prototype;
    d._id = 0;
    d._oid = 0;
    d.is = function(b, g) {
        g = G.call(g);
        return "finite" == g ? !fb[D](+b) : "array" == g ? b instanceof Array : "null" == g && null === b || g == typeof b && null !== b || "object" == g && b === Object(b) || "array" == g && Array.isArray && Array.isArray(b) || fa.call(b).slice(8, -1).toLowerCase() == g
    }
    ;
    d.angle = function(b, g, t, w, c, a) {
        return null == c ? (b -= t,
        g -= w,
        b || g ? (180 * A.atan2(-g, -b) / W + 540) % 360 : 0) : d.angle(b, g, c, a) - d.angle(t, w, c, a)
    }
    ;
    d.rad = function(b) {
        return b % 360 * W / 180
    }
    ;
    d.deg = function(b) {
        return 180 * b / W % 360
    }
    ;
    d.snapTo = function(b, g, t) {
        t = d.is(t, "finite") ? t : 10;
        if (d.is(b, X))
            for (var w = b.length; w--; ) {
                if (ba(b[w] - g) <= t)
                    return b[w]
            }
        else {
            b = +b;
            w = g % b;
            if (w < t)
                return g - w;
            if (w > b - t)
                return g - w + b
        }
        return g
    }
    ;
    d.createUUID = function(b, g) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(b, g).toUpperCase()
        }
    }(/[xy]/g, function(b) {
        var g = 16 * A.random() | 0;
        return ("x" == b ? g : g & 3 | 8).toString(16)
    });
    d.setWindow = function(b) {
        eve("raphael.setWindow", d, u.win, b);
        u.win = b;
        u.doc = u.win.document;
        d._engine.initWin && d._engine.initWin(u.win)
    }
    ;
    var qa = function(b) {
        if (d.vml) {
            var g = /^\s+|\s+$/g, t;
            try {
                var w = new ActiveXObject("htmlfile");
                w.write("<body>");
                w.close();
                t = w.body
            } catch (c) {
                t = createPopup().document.body
            }
            var a = t.createTextRange();
            qa = m(function(b) {
                try {
                    t.style.color = f(b).replace(g, "");
                    var w = a.queryCommandValue("ForeColor");
                    return "#" + ("000000" + ((w & 255) << 16 | w & 65280 | (w & 16711680) >>> 16).toString(16)).slice(-6)
                } catch (c) {
                    return "none"
                }
            })
        } else {
            var h = u.doc.createElement("i");
            h.title = "Rapha\u00ebl Colour Picker";
            h.style.display = "none";
            u.doc.body.appendChild(h);
            qa = m(function(b) {
                h.style.color = b;
                return u.doc.defaultView.getComputedStyle(h, "").getPropertyValue("color")
            })
        }
        return qa(b)
    }
      , lb = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
    }
      , mb = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
    }
      , Pa = function() {
        return this.hex
    }
      , Qa = function(b, g, t) {
        null == g && d.is(b, "object") && "r"in b && "g"in b && "b"in b && (t = b.b,
        g = b.g,
        b = b.r);
        null == g && d.is(b, "string") && (t = d.getRGB(b),
        b = t.r,
        g = t.g,
        t = t.b);
        if (1 < b || 1 < g || 1 < t)
            b /= 255,
            g /= 255,
            t /= 255;
        return [b, g, t]
    }
      , Ra = function(b, g, t, w) {
        b *= 255;
        g *= 255;
        t *= 255;
        b = {
            r: b,
            g: g,
            b: t,
            hex: d.rgb(b, g, t),
            toString: Pa
        };
        d.is(w, "finite") && (b.opacity = w);
        return b
    };
    d.color = function(b) {
        var g;
        d.is(b, "object") && "h"in b && "s"in b && "b"in b ? (g = d.hsb2rgb(b),
        b.r = g.r,
        b.g = g.g,
        b.b = g.b,
        b.hex = g.hex) : d.is(b, "object") && "h"in b && "s"in b && "l"in b ? (g = d.hsl2rgb(b),
        b.r = g.r,
        b.g = g.g,
        b.b = g.b,
        b.hex = g.hex) : (d.is(b, "string") && (b = d.getRGB(b)),
        d.is(b, "object") && "r"in b && "g"in b && "b"in b ? (g = d.rgb2hsl(b),
        b.h = g.h,
        b.s = g.s,
        b.l = g.l,
        g = d.rgb2hsb(b),
        b.v = g.b) : (b = {
            hex: "none"
        },
        b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1));
        b.toString = Pa;
        return b
    }
    ;
    d.hsb2rgb = function(b, g, t, w) {
        this.is(b, "object") && "h"in b && "s"in b && "b"in b && (t = b.b,
        g = b.s,
        b = b.h,
        w = b.o);
        var c, a, h;
        b = 360 * b % 360 / 60;
        h = t * g;
        g = h * (1 - ba(b % 2 - 1));
        t = c = a = t - h;
        b = ~~b;
        t += [h, g, 0, 0, g, h][b];
        c += [g, h, h, g, 0, 0][b];
        a += [0, 0, g, h, h, g][b];
        return Ra(t, c, a, w)
    }
    ;
    d.hsl2rgb = function(b, g, t, w) {
        this.is(b, "object") && "h"in b && "s"in b && "l"in b && (t = b.l,
        g = b.s,
        b = b.h);
        if (1 < b || 1 < g || 1 < t)
            b /= 360,
            g /= 100,
            t /= 100;
        var c, a, h;
        b = 360 * b % 360 / 60;
        h = 2 * g * (.5 > t ? t : 1 - t);
        g = h * (1 - ba(b % 2 - 1));
        t = c = a = t - h / 2;
        b = ~~b;
        t += [h, g, 0, 0, g, h][b];
        c += [g, h, h, g, 0, 0][b];
        a += [0, 0, g, h, h, g][b];
        return Ra(t, c, a, w)
    }
    ;
    d.rgb2hsb = function(b, g, t) {
        t = Qa(b, g, t);
        b = t[0];
        g = t[1];
        t = t[2];
        var w, c;
        w = H(b, g, t);
        c = w - aa(b, g, t);
        b = ((0 == c ? null : w == b ? (g - t) / c : w == g ? (t - b) / c + 2 : (b - g) / c + 4) + 360) % 6 * 60 / 360;
        return {
            h: b,
            s: 0 == c ? 0 : c / w,
            b: w,
            toString: lb
        }
    }
    ;
    d.rgb2hsl = function(b, g, t) {
        t = Qa(b, g, t);
        b = t[0];
        g = t[1];
        t = t[2];
        var w, c, a;
        w = H(b, g, t);
        c = aa(b, g, t);
        a = w - c;
        b = ((0 == a ? null : w == b ? (g - t) / a : w == g ? (t - b) / a + 2 : (b - g) / a + 4) + 360) % 6 * 60 / 360;
        w = (w + c) / 2;
        return {
            h: b,
            s: 0 == a ? 0 : .5 > w ? a / (2 * w) : a / (2 - 2 * w),
            l: w,
            toString: mb
        }
    }
    ;
    d._path2string = function() {
        return this.join(",").replace(hb, "$1")
    }
    ;
    d._preload = function(b, g) {
        var t = u.doc.createElement("img");
        t.style.cssText = "position:absolute;left:-9999em;top:-9999em";
        t.onload = function() {
            g.call(this);
            this.onload = null;
            u.doc.body.removeChild(this)
        }
        ;
        t.onerror = function() {
            u.doc.body.removeChild(this)
        }
        ;
        u.doc.body.appendChild(t);
        t.src = b
    }
    ;
    d.getRGB = m(function(b) {
        if (!b || (b = f(b)).indexOf("-") + 1)
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: x
            };
        if ("none" == b)
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: x
            };
        !gb[D](b.toLowerCase().substring(0, 2)) && "#" != b.charAt() && (b = qa(b));
        var g, t, w, c, a, h;
        if (b = b.match(eb)) {
            b[2] && (w = ga(b[2].substring(5), 16),
            t = ga(b[2].substring(3, 5), 16),
            g = ga(b[2].substring(1, 3), 16));
            b[3] && (w = ga((a = b[3].charAt(3)) + a, 16),
            t = ga((a = b[3].charAt(2)) + a, 16),
            g = ga((a = b[3].charAt(1)) + a, 16));
            b[4] && (h = b[4][k](ya),
            g = U(h[0]),
            "%" == h[0].slice(-1) && (g *= 2.55),
            t = U(h[1]),
            "%" == h[1].slice(-1) && (t *= 2.55),
            w = U(h[2]),
            "%" == h[2].slice(-1) && (w *= 2.55),
            "rgba" == b[1].toLowerCase().slice(0, 4) && (c = U(h[3])),
            h[3] && "%" == h[3].slice(-1) && (c /= 100));
            if (b[5])
                return h = b[5][k](ya),
                g = U(h[0]),
                "%" == h[0].slice(-1) && (g *= 2.55),
                t = U(h[1]),
                "%" == h[1].slice(-1) && (t *= 2.55),
                w = U(h[2]),
                "%" == h[2].slice(-1) && (w *= 2.55),
                "deg" != h[0].slice(-3) && "\u00b0" != h[0].slice(-1) || (g /= 360),
                "hsba" == b[1].toLowerCase().slice(0, 4) && (c = U(h[3])),
                h[3] && "%" == h[3].slice(-1) && (c /= 100),
                d.hsb2rgb(g, t, w, c);
            if (b[6])
                return h = b[6][k](ya),
                g = U(h[0]),
                "%" == h[0].slice(-1) && (g *= 2.55),
                t = U(h[1]),
                "%" == h[1].slice(-1) && (t *= 2.55),
                w = U(h[2]),
                "%" == h[2].slice(-1) && (w *= 2.55),
                "deg" != h[0].slice(-3) && "\u00b0" != h[0].slice(-1) || (g /= 360),
                "hsla" == b[1].toLowerCase().slice(0, 4) && (c = U(h[3])),
                h[3] && "%" == h[3].slice(-1) && (c /= 100),
                d.hsl2rgb(g, t, w, c);
            b = {
                r: g,
                g: t,
                b: w,
                toString: x
            };
            b.hex = "#" + (16777216 | w | t << 8 | g << 16).toString(16).slice(1);
            d.is(c, "finite") && (b.opacity = c);
            return b
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: x
        }
    }, d);
    d.hsb = m(function(b, g, t) {
        return d.hsb2rgb(b, g, t).hex
    });
    d.hsl = m(function(b, g, t) {
        return d.hsl2rgb(b, g, t).hex
    });
    d.rgb = m(function(b, g, t) {
        return "#" + (16777216 | t | g << 8 | b << 16).toString(16).slice(1)
    });
    d.getColor = function(b) {
        b = this.getColor.start = this.getColor.start || {
            h: 0,
            s: 1,
            b: b || .75
        };
        var g = this.hsb2rgb(b.h, b.s, b.b);
        b.h += .075;
        1 < b.h && (b.h = 0,
        b.s -= .2,
        0 >= b.s && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        }));
        return g.hex
    }
    ;
    d.getColor.reset = function() {
        delete this.start
    }
    ;
    d.parsePathString = function(b) {
        if (!b)
            return null;
        var g = ha(b);
        if (g.arr)
            return ea(g.arr);
        var t = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }
          , w = [];
        d.is(b, X) && d.is(b[0], X) && (w = ea(b));
        w.length || f(b).replace(ib, function(b, g, c) {
            var a = [];
            b = g.toLowerCase();
            c.replace(Na, function(b, g) {
                g && a.push(+g)
            });
            "m" == b && 2 < a.length && (w.push([g][v](a.splice(0, 2))),
            b = "l",
            g = "m" == g ? "l" : "L");
            if ("r" == b)
                w.push([g][v](a));
            else
                for (; a.length >= t[b] && (w.push([g][v](a.splice(0, t[b]))),
                t[b]); )
                    ;
        });
        w.toString = d._path2string;
        g.arr = ea(w);
        return w
    }
    ;
    d.parseTransformString = m(function(b) {
        if (!b)
            return null;
        var g = [];
        d.is(b, X) && d.is(b[0], X) && (g = ea(b));
        g.length || f(b).replace(jb, function(b, w, c) {
            var a = [];
            G.call(w);
            c.replace(Na, function(b, g) {
                g && a.push(+g)
            });
            g.push([w][v](a))
        });
        g.toString = d._path2string;
        return g
    });
    var ha = function(b) {
        var g = ha.ps = ha.ps || {};
        g[b] ? g[b].sleep = 100 : g[b] = {
            sleep: 100
        };
        setTimeout(function() {
            for (var t in g)
                g[D](t) && t != b && (g[t].sleep--,
                !g[t].sleep && delete g[t])
        });
        return g[b]
    };
    d.findDotsAtSegment = function(b, g, t, c, a, h, f, k, d) {
        var r = 1 - d
          , q = Y(r, 3)
          , e = Y(r, 2)
          , v = d * d
          , C = v * d
          , p = q * b + 3 * e * d * t + 3 * r * d * d * a + C * f
          , q = q * g + 3 * e * d * c + 3 * r * d * d * h + C * k
          , e = b + 2 * d * (t - b) + v * (a - 2 * t + b)
          , C = g + 2 * d * (c - g) + v * (h - 2 * c + g)
          , m = t + 2 * d * (a - t) + v * (f - 2 * a + t)
          , v = c + 2 * d * (h - c) + v * (k - 2 * h + c);
        b = r * b + d * t;
        g = r * g + d * c;
        a = r * a + d * f;
        h = r * h + d * k;
        k = 90 - 180 * A.atan2(e - m, C - v) / W;
        (e > m || C < v) && (k += 180);
        return {
            x: p,
            y: q,
            m: {
                x: e,
                y: C
            },
            n: {
                x: m,
                y: v
            },
            start: {
                x: b,
                y: g
            },
            end: {
                x: a,
                y: h
            },
            alpha: k
        }
    }
    ;
    d.bezierBBox = function(b, g, t, c, a, h, f, k) {
        d.is(b, "array") || (b = [b, g, t, c, a, h, f, k]);
        b = Sa.apply(null, b);
        return {
            x: b.min.x,
            y: b.min.y,
            x2: b.max.x,
            y2: b.max.y,
            width: b.max.x - b.min.x,
            height: b.max.y - b.min.y
        }
    }
    ;
    d.isPointInsideBBox = function(b, g, t) {
        return g >= b.x && g <= b.x2 && t >= b.y && t <= b.y2
    }
    ;
    d.isBBoxIntersect = function(b, g) {
        var t = d.isPointInsideBBox;
        return t(g, b.x, b.y) || t(g, b.x2, b.y) || t(g, b.x, b.y2) || t(g, b.x2, b.y2) || t(b, g.x, g.y) || t(b, g.x2, g.y) || t(b, g.x, g.y2) || t(b, g.x2, g.y2) || (b.x < g.x2 && b.x > g.x || g.x < b.x2 && g.x > b.x) && (b.y < g.y2 && b.y > g.y || g.y < b.y2 && g.y > b.y)
    }
    ;
    d.pathIntersection = function(b, g) {
        return B(b, g)
    }
    ;
    d.pathIntersectionNumber = function(b, g) {
        return B(b, g, 1)
    }
    ;
    d.isPointInsidePath = function(b, g, t) {
        var c = d.pathBBox(b);
        return d.isPointInsideBBox(c, g, t) && 1 == B(b, [["M", g, t], ["H", c.x2 + 10]], 1) % 2
    }
    ;
    d._removedFactory = function(b) {
        return function() {
            eve("raphael.log", null, "Rapha\u00ebl: you are calling to method \u201c" + b + "\u201d of removed object", b)
        }
    }
    ;
    var Ca = d.pathBBox = function(b) {
        var g = ha(b);
        if (g.bbox)
            return g.bbox;
        if (!b)
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
        b = ma(b);
        for (var t = 0, w = 0, a = [], h = [], f, k = 0, d = b.length; k < d; k++)
            f = b[k],
            "M" == f[0] ? (t = f[1],
            w = f[2],
            a.push(t),
            h.push(w)) : (t = Sa(t, w, f[1], f[2], f[3], f[4], f[5], f[6]),
            a = a[v](t.min.x, t.max.x),
            h = h[v](t.min.y, t.max.y),
            t = f[5],
            w = f[6]);
        b = aa[c](0, a);
        f = aa[c](0, h);
        a = H[c](0, a);
        h = H[c](0, h);
        h = {
            x: b,
            y: f,
            x2: a,
            y2: h,
            width: a - b,
            height: h - f
        };
        g.bbox = p(h);
        return h
    }
      , ea = function(b) {
        b = p(b);
        b.toString = d._path2string;
        return b
    }
      , nb = d._pathToRelative = function(b) {
        var g = ha(b);
        if (g.rel)
            return ea(g.rel);
        d.is(b, X) && d.is(b && b[0], X) || (b = d.parsePathString(b));
        var t = []
          , c = 0
          , a = 0
          , h = 0
          , f = 0
          , k = 0;
        "M" == b[0][0] && (c = b[0][1],
        a = b[0][2],
        h = c,
        f = a,
        k++,
        t.push(["M", c, a]));
        for (var r = b.length; k < r; k++) {
            var q = t[k] = []
              , e = b[k];
            if (e[0] != G.call(e[0]))
                switch (q[0] = G.call(e[0]),
                q[0]) {
                case "a":
                    q[1] = e[1];
                    q[2] = e[2];
                    q[3] = e[3];
                    q[4] = e[4];
                    q[5] = e[5];
                    q[6] = +(e[6] - c).toFixed(3);
                    q[7] = +(e[7] - a).toFixed(3);
                    break;
                case "v":
                    q[1] = +(e[1] - a).toFixed(3);
                    break;
                case "m":
                    h = e[1],
                    f = e[2];
                default:
                    for (var v = 1, C = e.length; v < C; v++)
                        q[v] = +(e[v] - (v % 2 ? c : a)).toFixed(3)
                }
            else
                for (t[k] = [],
                "m" == e[0] && (h = e[1] + c,
                f = e[2] + a),
                q = 0,
                v = e.length; q < v; q++)
                    t[k][q] = e[q];
            e = t[k].length;
            switch (t[k][0]) {
            case "z":
                c = h;
                a = f;
                break;
            case "h":
                c += +t[k][e - 1];
                break;
            case "v":
                a += +t[k][e - 1];
                break;
            default:
                c += +t[k][e - 2],
                a += +t[k][e - 1]
            }
        }
        t.toString = d._path2string;
        g.rel = ea(t);
        return t
    }
      , Ta = d._pathToAbsolute = function(b) {
        var g = ha(b);
        if (g.abs)
            return ea(g.abs);
        d.is(b, X) && d.is(b && b[0], X) || (b = d.parsePathString(b));
        if (!b || !b.length)
            return [["M", 0, 0]];
        var t = []
          , c = 0
          , a = 0
          , h = 0
          , f = 0
          , k = 0;
        "M" == b[0][0] && (c = +b[0][1],
        a = +b[0][2],
        h = c,
        f = a,
        k++,
        t[0] = ["M", c, a]);
        for (var r = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), e, q = k, C = b.length; q < C; q++) {
            t.push(k = []);
            e = b[q];
            if (e[0] != Ma.call(e[0]))
                switch (k[0] = Ma.call(e[0]),
                k[0]) {
                case "A":
                    k[1] = e[1];
                    k[2] = e[2];
                    k[3] = e[3];
                    k[4] = e[4];
                    k[5] = e[5];
                    k[6] = +(e[6] + c);
                    k[7] = +(e[7] + a);
                    break;
                case "V":
                    k[1] = +e[1] + a;
                    break;
                case "H":
                    k[1] = +e[1] + c;
                    break;
                case "R":
                    for (var m = [c, a][v](e.slice(1)), p = 2, u = m.length; p < u; p++)
                        m[p] = +m[p] + c,
                        m[++p] = +m[p] + a;
                    t.pop();
                    t = t[v](Z(m, r));
                    break;
                case "M":
                    h = +e[1] + c,
                    f = +e[2] + a;
                default:
                    for (p = 1,
                    u = e.length; p < u; p++)
                        k[p] = +e[p] + (p % 2 ? c : a)
                }
            else if ("R" == e[0])
                m = [c, a][v](e.slice(1)),
                t.pop(),
                t = t[v](Z(m, r)),
                k = ["R"][v](e.slice(-2));
            else
                for (m = 0,
                p = e.length; m < p; m++)
                    k[m] = e[m];
            switch (k[0]) {
            case "Z":
                c = h;
                a = f;
                break;
            case "H":
                c = k[1];
                break;
            case "V":
                a = k[1];
                break;
            case "M":
                h = k[k.length - 2],
                f = k[k.length - 1];
            default:
                c = k[k.length - 2],
                a = k[k.length - 1]
            }
        }
        t.toString = d._path2string;
        g.abs = ea(t);
        return t
    }
      , ra = function(b, g, c, a) {
        return [b, g, c, a, c, a]
    }
      , Ua = function(b, g, c, a, h, f) {
        var k = 1 / 3
          , d = 2 / 3;
        return [k * b + d * c, k * g + d * a, k * h + d * c, k * f + d * a, h, f]
    }
      , Va = function(b, g, c, a, h, f, d, e, r, q) {
        var p = 120 * W / 180, C = W / 180 * (+h || 0), u = [], l, G = m(function(b, g, c) {
            var a = b * A.cos(c) - g * A.sin(c);
            b = b * A.sin(c) + g * A.cos(c);
            return {
                x: a,
                y: b
            }
        });
        if (q)
            J = q[0],
            l = q[1],
            f = q[2],
            n = q[3];
        else {
            l = G(b, g, -C);
            b = l.x;
            g = l.y;
            l = G(e, r, -C);
            e = l.x;
            r = l.y;
            A.cos(W / 180 * h);
            A.sin(W / 180 * h);
            l = (b - e) / 2;
            J = (g - r) / 2;
            n = l * l / (c * c) + J * J / (a * a);
            1 < n && (n = A.sqrt(n),
            c *= n,
            a *= n);
            var n = c * c
              , x = a * a
              , n = (f == d ? -1 : 1) * A.sqrt(ba((n * x - n * J * J - x * l * l) / (n * J * J + x * l * l)));
            f = n * c * J / a + (b + e) / 2;
            var n = n * -a * l / c + (g + r) / 2
              , J = A.asin(((g - n) / a).toFixed(9));
            l = A.asin(((r - n) / a).toFixed(9));
            J = b < f ? W - J : J;
            l = e < f ? W - l : l;
            0 > J && (J = 2 * W + J);
            0 > l && (l = 2 * W + l);
            d && J > l && (J -= 2 * W);
            !d && l > J && (l -= 2 * W)
        }
        if (ba(l - J) > p) {
            var u = l
              , x = e
              , H = r;
            l = J + p * (d && l > J ? 1 : -1);
            e = f + c * A.cos(l);
            r = n + a * A.sin(l);
            u = Va(e, r, c, a, h, 0, d, x, H, [l, u, f, n])
        }
        f = l - J;
        h = A.cos(J);
        p = A.sin(J);
        d = A.cos(l);
        l = A.sin(l);
        f = A.tan(f / 4);
        c = 4 / 3 * c * f;
        f *= 4 / 3 * a;
        a = [b, g];
        b = [b + c * p, g - f * h];
        g = [e + c * l, r - f * d];
        e = [e, r];
        b[0] = 2 * a[0] - b[0];
        b[1] = 2 * a[1] - b[1];
        if (q)
            return [b, g, e][v](u);
        u = [b, g, e][v](u).join()[k](",");
        q = [];
        e = 0;
        for (r = u.length; e < r; e++)
            q[e] = e % 2 ? G(u[e - 1], u[e], C).y : G(u[e], u[e + 1], C).x;
        return q
    }
      , sa = function(b, g, c, a, h, f, k, d, e) {
        var r = 1 - e;
        return {
            x: Y(r, 3) * b + 3 * Y(r, 2) * e * c + 3 * r * e * e * h + Y(e, 3) * k,
            y: Y(r, 3) * g + 3 * Y(r, 2) * e * a + 3 * r * e * e * f + Y(e, 3) * d
        }
    }
      , Sa = m(function(b, g, a, h, f, k, e, d) {
        var r = f - 2 * a + b - (e - 2 * f + a), q = 2 * (a - b) - 2 * (f - a), v = b - a, l = (-q + A.sqrt(q * q - 4 * r * v)) / 2 / r, r = (-q - A.sqrt(q * q - 4 * r * v)) / 2 / r, p = [g, d], C = [b, e], m;
        "1e12" < ba(l) && (l = .5);
        "1e12" < ba(r) && (r = .5);
        0 < l && 1 > l && (m = sa(b, g, a, h, f, k, e, d, l),
        C.push(m.x),
        p.push(m.y));
        0 < r && 1 > r && (m = sa(b, g, a, h, f, k, e, d, r),
        C.push(m.x),
        p.push(m.y));
        r = k - 2 * h + g - (d - 2 * k + h);
        q = 2 * (h - g) - 2 * (k - h);
        v = g - h;
        l = (-q + A.sqrt(q * q - 4 * r * v)) / 2 / r;
        r = (-q - A.sqrt(q * q - 4 * r * v)) / 2 / r;
        "1e12" < ba(l) && (l = .5);
        "1e12" < ba(r) && (r = .5);
        0 < l && 1 > l && (m = sa(b, g, a, h, f, k, e, d, l),
        C.push(m.x),
        p.push(m.y));
        0 < r && 1 > r && (m = sa(b, g, a, h, f, k, e, d, r),
        C.push(m.x),
        p.push(m.y));
        return {
            min: {
                x: aa[c](0, C),
                y: aa[c](0, p)
            },
            max: {
                x: H[c](0, C),
                y: H[c](0, p)
            }
        }
    })
      , ma = d._path2curve = m(function(b, g) {
        var a = !g && ha(b);
        if (!g && a.curve)
            return ea(a.curve);
        var h = Ta(b)
          , f = g && Ta(g)
          , k = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }
          , e = {
            x: 0,
            y: 0,
            bx: 0,
            by: 0,
            X: 0,
            Y: 0,
            qx: null,
            qy: null
        }
          , r = function(b, g) {
            var a, h;
            if (!b)
                return ["C", g.x, g.y, g.x, g.y, g.x, g.y];
            b[0]in {
                T: 1,
                Q: 1
            } || (g.qx = g.qy = null);
            switch (b[0]) {
            case "M":
                g.X = b[1];
                g.Y = b[2];
                break;
            case "A":
                b = ["C"][v](Va[c](0, [g.x, g.y][v](b.slice(1))));
                break;
            case "S":
                a = g.x + (g.x - (g.bx || g.x));
                h = g.y + (g.y - (g.by || g.y));
                b = ["C", a, h][v](b.slice(1));
                break;
            case "T":
                g.qx = g.x + (g.x - (g.qx || g.x));
                g.qy = g.y + (g.y - (g.qy || g.y));
                b = ["C"][v](Ua(g.x, g.y, g.qx, g.qy, b[1], b[2]));
                break;
            case "Q":
                g.qx = b[1];
                g.qy = b[2];
                b = ["C"][v](Ua(g.x, g.y, b[1], b[2], b[3], b[4]));
                break;
            case "L":
                b = ["C"][v](ra(g.x, g.y, b[1], b[2]));
                break;
            case "H":
                b = ["C"][v](ra(g.x, g.y, b[1], g.y));
                break;
            case "V":
                b = ["C"][v](ra(g.x, g.y, g.x, b[1]));
                break;
            case "Z":
                b = ["C"][v](ra(g.x, g.y, g.X, g.Y))
            }
            return b
        }
          , d = function(b, g) {
            if (7 < b[g].length) {
                b[g].shift();
                for (var c = b[g]; c.length; )
                    b.splice(g++, 0, ["C"][v](c.splice(0, 6)));
                b.splice(g, 1);
                m = H(h.length, f && f.length || 0)
            }
        }
          , q = function(b, g, c, a, t) {
            b && g && "M" == b[t][0] && "M" != g[t][0] && (g.splice(t, 0, ["M", a.x, a.y]),
            c.bx = 0,
            c.by = 0,
            c.x = b[t][1],
            c.y = b[t][2],
            m = H(h.length, f && f.length || 0))
        }
          , l = 0
          , m = H(h.length, f && f.length || 0);
        for (; l < m; l++) {
            h[l] = r(h[l], k);
            d(h, l);
            f && (f[l] = r(f[l], e));
            f && d(f, l);
            q(h, f, k, e, l);
            q(f, h, e, k, l);
            var p = h[l]
              , C = f && f[l]
              , u = p.length
              , A = f && C.length;
            k.x = p[u - 2];
            k.y = p[u - 1];
            k.bx = U(p[u - 4]) || k.x;
            k.by = U(p[u - 3]) || k.y;
            e.bx = f && (U(C[A - 4]) || e.x);
            e.by = f && (U(C[A - 3]) || e.y);
            e.x = f && C[A - 2];
            e.y = f && C[A - 1]
        }
        f || (a.curve = ea(h));
        return f ? [h, f] : h
    }, null, ea);
    d._parseDots = m(function(b) {
        for (var g = [], c = 0, a = b.length; c < a; c++) {
            var h = {}
              , f = b[c].match(/^([^:]*):?([\d\.]*)/);
            h.color = d.getRGB(f[1]);
            if (h.color.error)
                return null;
            h.color = h.color.hex;
            f[2] && (h.offset = f[2] + "%");
            g.push(h)
        }
        c = 1;
        for (a = g.length - 1; c < a; c++)
            if (!g[c].offset) {
                b = U(g[c - 1].offset || 0);
                f = 0;
                for (h = c + 1; h < a; h++)
                    if (g[h].offset) {
                        f = g[h].offset;
                        break
                    }
                f || (f = 100,
                h = a);
                f = U(f);
                for (f = (f - b) / (h - c + 1); c < h; c++)
                    b += f,
                    g[c].offset = b + "%"
            }
        return g
    });
    var ta = d._tear = function(b, g) {
        b == g.top && (g.top = b.prev);
        b == g.bottom && (g.bottom = b.next);
        b.next && (b.next.prev = b.prev);
        b.prev && (b.prev.next = b.next)
    }
    ;
    d._tofront = function(b, g) {
        g.top !== b && (ta(b, g),
        b.next = null,
        b.prev = g.top,
        g.top.next = b,
        g.top = b)
    }
    ;
    d._toback = function(b, g) {
        g.bottom !== b && (ta(b, g),
        b.next = g.bottom,
        b.prev = null,
        g.bottom.prev = b,
        g.bottom = b)
    }
    ;
    d._insertafter = function(b, g, c) {
        ta(b, c);
        g == c.top && (c.top = b);
        g.next && (g.next.prev = b);
        b.next = g.next;
        b.prev = g;
        g.next = b
    }
    ;
    d._insertbefore = function(b, g, c) {
        ta(b, c);
        g == c.bottom && (c.bottom = b);
        g.prev && (g.prev.next = b);
        b.prev = g.prev;
        g.prev = b;
        b.next = g
    }
    ;
    var ob = d.toMatrix = function(b, g) {
        var c = Ca(b)
          , a = {
            _: {
                transform: ""
            },
            getBBox: function() {
                return c
            }
        };
        Ka(a, g);
        return a.matrix
    }
    ;
    d.transformPath = function(b, g) {
        return Aa(b, ob(b, g))
    }
    ;
    var Ka = d._extractTransform = function(b, g) {
        if (null == g)
            return b._.transform;
        g = f(g).replace(/\.{3}|\u2026/g, b._.transform || "");
        var c = d.parseTransformString(g)
          , a = 0
          , h = 0
          , k = 0
          , e = 1
          , r = 1
          , q = b._
          , k = new z;
        q.transform = c || [];
        if (c)
            for (var h = 0, l = c.length; h < l; h++) {
                var v = c[h], p = v.length, C = f(v[0]).toLowerCase(), m = v[0] != C, u = m ? k.invert() : 0, A, n, G, x, H;
                "t" == C && 3 == p ? m ? (A = u.x(0, 0),
                n = u.y(0, 0),
                G = u.x(v[1], v[2]),
                x = u.y(v[1], v[2]),
                k.translate(G - A, x - n)) : k.translate(v[1], v[2]) : "r" == C ? 2 == p ? (H = H || b.getBBox(1),
                k.rotate(v[1], H.x + H.width / 2, H.y + H.height / 2),
                a += v[1]) : 4 == p && (m ? (G = u.x(v[2], v[3]),
                x = u.y(v[2], v[3]),
                k.rotate(v[1], G, x)) : k.rotate(v[1], v[2], v[3]),
                a += v[1]) : "s" == C ? 2 == p || 3 == p ? (H = H || b.getBBox(1),
                k.scale(v[1], v[p - 1], H.x + H.width / 2, H.y + H.height / 2),
                e *= v[1],
                r *= v[p - 1]) : 5 == p && (m ? (G = u.x(v[3], v[4]),
                x = u.y(v[3], v[4]),
                k.scale(v[1], v[2], G, x)) : k.scale(v[1], v[2], v[3], v[4]),
                e *= v[1],
                r *= v[2]) : "m" == C && 7 == p && k.add(v[1], v[2], v[3], v[4], v[5], v[6]);
                q.dirtyT = 1;
                b.matrix = k
            }
        b.matrix = k;
        q.sx = e;
        q.sy = r;
        q.deg = a;
        q.dx = h = k.e;
        q.dy = k = k.f;
        1 == e && 1 == r && !a && q.bbox ? (q.bbox.x += +h,
        q.bbox.y += +k) : q.dirtyT = 1
    }
      , Wa = function(b) {
        var g = b[0];
        switch (g.toLowerCase()) {
        case "t":
            return [g, 0, 0];
        case "m":
            return [g, 1, 0, 0, 1, 0, 0];
        case "r":
            return 4 == b.length ? [g, 0, b[2], b[3]] : [g, 0];
        case "s":
            return 5 == b.length ? [g, 1, 1, b[3], b[4]] : 3 == b.length ? [g, 1, 1] : [g, 1]
        }
    }
      , ab = d._equaliseTransform = function(b, g) {
        g = f(g).replace(/\.{3}|\u2026/g, b);
        b = d.parseTransformString(b) || [];
        g = d.parseTransformString(g) || [];
        for (var c = H(b.length, g.length), a = [], h = [], k = 0, e, r, q, v; k < c; k++) {
            q = b[k] || Wa(g[k]);
            v = g[k] || Wa(q);
            if (q[0] != v[0] || "r" == q[0].toLowerCase() && (q[2] != v[2] || q[3] != v[3]) || "s" == q[0].toLowerCase() && (q[3] != v[3] || q[4] != v[4]))
                return;
            a[k] = [];
            h[k] = [];
            e = 0;
            for (r = H(q.length, v.length); e < r; e++)
                e in q && (a[k][e] = q[e]),
                e in v && (h[k][e] = v[e])
        }
        return {
            from: a,
            to: h
        }
    }
    ;
    d._getContainer = function(b, g, c, a) {
        var h;
        h = null != a || d.is(b, "object") ? b : u.doc.getElementById(b);
        if (null != h)
            return h.tagName ? null == g ? {
                container: h,
                width: h.style.pixelWidth || h.offsetWidth,
                height: h.style.pixelHeight || h.offsetHeight
            } : {
                container: h,
                width: g,
                height: c
            } : {
                container: 1,
                x: b,
                y: g,
                width: c,
                height: a
            }
    }
    ;
    d.pathToRelative = nb;
    d._engine = {};
    d.path2curve = ma;
    d.matrix = function(b, g, c, a, h, f) {
        return new z(b,g,c,a,h,f)
    }
    ;
    (function(b) {
        function g(b) {
            var g = A.sqrt(c(b));
            b[0] && (b[0] /= g);
            b[1] && (b[1] /= g)
        }
        function c(b) {
            return b[0] * b[0] + b[1] * b[1]
        }
        b.add = function(b, g, c, a, h, t) {
            var f = [[], [], []]
              , k = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]];
            g = [[b, c, h], [g, a, t], [0, 0, 1]];
            b && b instanceof z && (g = [[b.a, b.c, b.e], [b.b, b.d, b.f], [0, 0, 1]]);
            for (b = 0; 3 > b; b++)
                for (c = 0; 3 > c; c++) {
                    for (a = h = 0; 3 > a; a++)
                        h += k[b][a] * g[a][c];
                    f[b][c] = h
                }
            this.a = f[0][0];
            this.b = f[1][0];
            this.c = f[0][1];
            this.d = f[1][1];
            this.e = f[0][2];
            this.f = f[1][2]
        }
        ;
        b.invert = function() {
            var b = this.a * this.d - this.b * this.c;
            return new z(this.d / b,-this.b / b,-this.c / b,this.a / b,(this.c * this.f - this.d * this.e) / b,(this.b * this.e - this.a * this.f) / b)
        }
        ;
        b.clone = function() {
            return new z(this.a,this.b,this.c,this.d,this.e,this.f)
        }
        ;
        b.translate = function(b, g) {
            this.add(1, 0, 0, 1, b, g)
        }
        ;
        b.scale = function(b, g, c, a) {
            null == g && (g = b);
            (c || a) && this.add(1, 0, 0, 1, c, a);
            this.add(b, 0, 0, g, 0, 0);
            (c || a) && this.add(1, 0, 0, 1, -c, -a)
        }
        ;
        b.rotate = function(b, g, c) {
            b = d.rad(b);
            g = g || 0;
            c = c || 0;
            var a = +A.cos(b).toFixed(9);
            b = +A.sin(b).toFixed(9);
            this.add(a, b, -b, a, g, c);
            this.add(1, 0, 0, 1, -g, -c)
        }
        ;
        b.x = function(b, g) {
            return b * this.a + g * this.c + this.e
        }
        ;
        b.y = function(b, g) {
            return b * this.b + g * this.d + this.f
        }
        ;
        b.get = function(b) {
            return +this[f.fromCharCode(97 + b)].toFixed(4)
        }
        ;
        b.toString = function() {
            return d.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }
        ;
        b.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }
        ;
        b.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }
        ;
        b.split = function() {
            var b = {};
            b.dx = this.e;
            b.dy = this.f;
            var a = [[this.a, this.c], [this.b, this.d]];
            b.scalex = A.sqrt(c(a[0]));
            g(a[0]);
            b.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1];
            a[1] = [a[1][0] - a[0][0] * b.shear, a[1][1] - a[0][1] * b.shear];
            b.scaley = A.sqrt(c(a[1]));
            g(a[1]);
            b.shear /= b.scaley;
            var h = -a[0][1]
              , a = a[1][1];
            0 > a ? (b.rotate = d.deg(A.acos(a)),
            0 > h && (b.rotate = 360 - b.rotate)) : b.rotate = d.deg(A.asin(h));
            b.isSimple = !+b.shear.toFixed(9) && (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate);
            b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate;
            b.noRotation = !+b.shear.toFixed(9) && !b.rotate;
            return b
        }
        ;
        b.toTransformString = function(b) {
            b = b || this[k]();
            return b.isSimple ? (b.scalex = +b.scalex.toFixed(4),
            b.scaley = +b.scaley.toFixed(4),
            b.rotate = +b.rotate.toFixed(4),
            (b.dx || b.dy ? "t" + [b.dx, b.dy] : "") + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : "") + (b.rotate ? "r" + [b.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }
    )(z.prototype);
    var ua = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    "Apple Computer, Inc." == navigator.vendor && (ua && 4 > ua[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && ua && 8 > ua[1] ? I.safari = function() {
        var b = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            b.remove()
        })
    }
    : I.safari = kb;
    for (var pb = function() {
        this.returnValue = !1
    }, qb = function() {
        return this.originalEvent.preventDefault()
    }, rb = function() {
        this.cancelBubble = !0
    }, sb = function() {
        return this.originalEvent.stopPropagation()
    }, tb = function() {
        if (u.doc.addEventListener)
            return function(b, g, c, a) {
                var h = C && q[g] ? q[g] : g
                  , f = function(h) {
                    var f = h.clientX + (u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft)
                      , k = h.clientY + (u.doc.documentElement.scrollTop || u.doc.body.scrollTop);
                    if (C && q[D](g))
                        for (var e = 0, r = h.targetTouches && h.targetTouches.length; e < r; e++)
                            if (h.targetTouches[e].target == b) {
                                r = h;
                                h = h.targetTouches[e];
                                h.originalEvent = r;
                                h.preventDefault = qb;
                                h.stopPropagation = sb;
                                break
                            }
                    return c.call(a, h, f, k)
                };
                b.addEventListener(h, f, !1);
                return function() {
                    b.removeEventListener(h, f, !1);
                    return !0
                }
            }
            ;
        if (u.doc.attachEvent)
            return function(b, g, c, a) {
                var h = function(b) {
                    b = b || u.win.event;
                    var g = b.clientX + (u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft)
                      , h = b.clientY + (u.doc.documentElement.scrollTop || u.doc.body.scrollTop);
                    b.preventDefault = b.preventDefault || pb;
                    b.stopPropagation = b.stopPropagation || rb;
                    return c.call(a, b, g, h)
                };
                b.attachEvent("on" + g, h);
                return function() {
                    b.detachEvent("on" + g, h);
                    return !0
                }
            }
    }(), ia = [], Da = function(b) {
        for (var g = b.clientX, c = b.clientY, a = u.doc.documentElement.scrollTop || u.doc.body.scrollTop, h = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft, f, k = ia.length; k--; ) {
            f = ia[k];
            if (C)
                for (var e = b.touches.length, r; e--; ) {
                    if (r = b.touches[e],
                    r.identifier == f.el._drag.id) {
                        g = r.clientX;
                        c = r.clientY;
                        (b.originalEvent ? b.originalEvent : b).preventDefault();
                        break
                    }
                }
            else
                b.preventDefault();
            var e = f.el.node
              , d = e.nextSibling
              , q = e.parentNode
              , v = e.style.display;
            u.win.opera && q.removeChild(e);
            e.style.display = "none";
            r = f.el.paper.getElementByPoint(g, c);
            e.style.display = v;
            u.win.opera && (d ? q.insertBefore(e, d) : q.appendChild(e));
            r && eve("raphael.drag.over." + f.el.id, f.el, r);
            g += h;
            c += a;
            eve("raphael.drag.move." + f.el.id, f.move_scope || f.el, g - f.el._drag.x, c - f.el._drag.y, g, c, b)
        }
    }, Ea = function(b) {
        d.unmousemove(Da).unmouseup(Ea);
        for (var g = ia.length, c; g--; )
            c = ia[g],
            c.el._drag = {},
            eve("raphael.drag.end." + c.el.id, c.end_scope || c.start_scope || c.move_scope || c.el, b);
        ia = []
    }, S = d.el = {}, Xa = r.length; Xa--; )
        (function(b) {
            d[b] = S[b] = function(g, c) {
                d.is(g, "function") && (this.events = this.events || [],
                this.events.push({
                    name: b,
                    f: g,
                    unbind: tb(this.shape || this.node || u.doc, b, g, c || this)
                }));
                return this
            }
            ;
            d["un" + b] = S["un" + b] = function(g) {
                for (var c = this.events || [], a = c.length; a--; )
                    if (c[a].name == b && c[a].f == g) {
                        c[a].unbind();
                        c.splice(a, 1);
                        !c.length && delete this.events;
                        break
                    }
                return this
            }
        }
        )(r[Xa]);
    S.data = function(b, g) {
        var c = na[this.id] = na[this.id] || {};
        if (1 == arguments.length) {
            if (d.is(b, "object")) {
                for (var a in b)
                    b[D](a) && this.data(a, b[a]);
                return this
            }
            eve("raphael.data.get." + this.id, this, c[b], b);
            return c[b]
        }
        c[b] = g;
        eve("raphael.data.set." + this.id, this, g, b);
        return this
    }
    ;
    S.removeData = function(b) {
        null == b ? na[this.id] = {} : na[this.id] && delete na[this.id][b];
        return this
    }
    ;
    S.hover = function(b, g, c, a) {
        return this.mouseover(b, c).mouseout(g, a || c)
    }
    ;
    S.unhover = function(b, g) {
        return this.unmouseover(b).unmouseout(g)
    }
    ;
    var ka = [];
    S.drag = function(b, g, c, a, h, f) {
        function k(e) {
            (e.originalEvent || e).preventDefault();
            var r = u.doc.documentElement.scrollTop || u.doc.body.scrollTop
              , q = u.doc.documentElement.scrollLeft || u.doc.body.scrollLeft;
            this._drag.x = e.clientX + q;
            this._drag.y = e.clientY + r;
            this._drag.id = e.identifier;
            !ia.length && d.mousemove(Da).mouseup(Ea);
            ia.push({
                el: this,
                move_scope: a,
                start_scope: h,
                end_scope: f
            });
            g && eve.on("raphael.drag.start." + this.id, g);
            b && eve.on("raphael.drag.move." + this.id, b);
            c && eve.on("raphael.drag.end." + this.id, c);
            eve("raphael.drag.start." + this.id, h || a || this, e.clientX + q, e.clientY + r, e)
        }
        this._drag = {};
        ka.push({
            el: this,
            start: k
        });
        this.mousedown(k);
        return this
    }
    ;
    S.onDragOver = function(b) {
        b ? eve.on("raphael.drag.over." + this.id, b) : eve.unbind("raphael.drag.over." + this.id)
    }
    ;
    S.undrag = function() {
        for (var b = ka.length; b--; )
            ka[b].el == this && (this.unmousedown(ka[b].start),
            ka.splice(b, 1),
            eve.unbind("raphael.drag.*." + this.id));
        !ka.length && d.unmousemove(Da).unmouseup(Ea)
    }
    ;
    I.circle = function(b, g, c) {
        b = d._engine.circle(this, b || 0, g || 0, c || 0);
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    I.rect = function(b, g, c, a, h) {
        b = d._engine.rect(this, b || 0, g || 0, c || 0, a || 0, h || 0);
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    I.ellipse = function(b, g, c, a) {
        b = d._engine.ellipse(this, b || 0, g || 0, c || 0, a || 0);
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    I.path = function(b) {
        b && !d.is(b, "string") && !d.is(b[0], X) && (b += "");
        var g = d._engine.path(d.format[c](d, arguments), this);
        this.__set__ && this.__set__.push(g);
        return g
    }
    ;
    I.image = function(b, g, c, a, h) {
        b = d._engine.image(this, b || "about:blank", g || 0, c || 0, a || 0, h || 0);
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    I.text = function(b, g, c) {
        b = d._engine.text(this, b || 0, g || 0, f(c));
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    I.set = function(b) {
        !d.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
        var g = new la(b);
        this.__set__ && this.__set__.push(g);
        return g
    }
    ;
    I.setStart = function(b) {
        this.__set__ = b || this.set()
    }
    ;
    I.setFinish = function(b) {
        b = this.__set__;
        delete this.__set__;
        return b
    }
    ;
    I.setSize = function(b, g) {
        return d._engine.setSize.call(this, b, g)
    }
    ;
    I.setViewBox = function(b, g, c, a, h) {
        return d._engine.setViewBox.call(this, b, g, c, a, h)
    }
    ;
    I.top = I.bottom = null;
    I.raphael = d;
    I.getElementByPoint = function(b, g) {
        var c, a, h = this.canvas, f = u.doc.elementFromPoint(b, g);
        if (u.win.opera && "svg" == f.tagName) {
            a = h.getBoundingClientRect();
            c = h.ownerDocument;
            var k = c.body
              , e = c.documentElement;
            c = a.top + (u.win.pageYOffset || e.scrollTop || k.scrollTop) - (e.clientTop || k.clientTop || 0);
            a = a.left + (u.win.pageXOffset || e.scrollLeft || k.scrollLeft) - (e.clientLeft || k.clientLeft || 0);
            k = h.createSVGRect();
            k.x = b - a;
            k.y = g - c;
            k.width = k.height = 1;
            c = h.getIntersectionList(k, null);
            c.length && (f = c[c.length - 1])
        }
        if (!f)
            return null;
        for (; f.parentNode && f != h.parentNode && !f.raphael; )
            f = f.parentNode;
        f == this.canvas.parentNode && (f = h);
        return f = f && f.raphael ? this.getById(f.raphaelid) : null
    }
    ;
    I.getById = function(b) {
        for (var c = this.bottom; c; ) {
            if (c.id == b)
                return c;
            c = c.next
        }
        return null
    }
    ;
    I.forEach = function(b, c) {
        for (var a = this.bottom; a && !1 !== b.call(c, a); )
            a = a.next;
        return this
    }
    ;
    I.getElementsByPoint = function(b, c) {
        var a = this.set();
        this.forEach(function(h) {
            h.isPointInside(b, c) && a.push(h)
        });
        return a
    }
    ;
    S.isPointInside = function(b, c) {
        var a = this.realPath = this.realPath || oa[this.type](this);
        return d.isPointInsidePath(a, b, c)
    }
    ;
    S.getBBox = function(b) {
        if (this.removed)
            return {};
        var c = this._;
        if (b) {
            if (c.dirty || !c.bboxwt)
                this.realPath = oa[this.type](this),
                c.bboxwt = Ca(this.realPath),
                c.bboxwt.toString = y,
                c.dirty = 0;
            return c.bboxwt
        }
        if (c.dirty || c.dirtyT || !c.bbox) {
            if (c.dirty || !this.realPath)
                c.bboxwt = 0,
                this.realPath = oa[this.type](this);
            c.bbox = Ca(Aa(this.realPath, this.matrix));
            c.bbox.toString = y;
            c.dirty = c.dirtyT = 0
        }
        return c.bbox
    }
    ;
    S.clone = function() {
        if (this.removed)
            return null;
        var b = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(b);
        return b
    }
    ;
    S.glow = function(b) {
        if ("text" == this.type)
            return null;
        b = b || {};
        var c = (b.width || 10) + (+this.attr("stroke-width") || 1)
          , a = b.fill || !1
          , h = b.opacity || .5
          , f = b.offsetx || 0
          , k = b.offsety || 0;
        b = b.color || "#000";
        for (var e = c / 2, r = this.paper, d = r.set(), q = this.realPath || oa[this.type](this), q = this.matrix ? Aa(q, this.matrix) : q, v = 1; v < e + 1; v++)
            d.push(r.path(q).attr({
                stroke: b,
                fill: a ? b : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(c / e * v).toFixed(3),
                opacity: +(h / e).toFixed(3)
            }));
        return d.insertBefore(this).translate(f, k)
    }
    ;
    var Fa = function(b, c, a, h, f, k, e, r, q) {
        return null == q ? O(b, c, a, h, f, k, e, r) : d.findDotsAtSegment(b, c, a, h, f, k, e, r, L(b, c, a, h, f, k, e, r, q))
    }
      , Ga = function(b, c) {
        return function(a, h, f) {
            a = ma(a);
            for (var k, e, r, q, v = "", l = {}, p = 0, C = 0, m = a.length; C < m; C++) {
                r = a[C];
                if ("M" == r[0])
                    k = +r[1],
                    e = +r[2];
                else {
                    q = Fa(k, e, r[1], r[2], r[3], r[4], r[5], r[6]);
                    if (p + q > h) {
                        if (c && !l.start) {
                            k = Fa(k, e, r[1], r[2], r[3], r[4], r[5], r[6], h - p);
                            v += ["C" + k.start.x, k.start.y, k.m.x, k.m.y, k.x, k.y];
                            if (f)
                                return v;
                            l.start = v;
                            v = ["M" + k.x, k.y + "C" + k.n.x, k.n.y, k.end.x, k.end.y, r[5], r[6]].join();
                            p += q;
                            k = +r[5];
                            e = +r[6];
                            continue
                        }
                        if (!b && !c)
                            return k = Fa(k, e, r[1], r[2], r[3], r[4], r[5], r[6], h - p),
                            {
                                x: k.x,
                                y: k.y,
                                alpha: k.alpha
                            }
                    }
                    p += q;
                    k = +r[5];
                    e = +r[6]
                }
                v += r.shift() + r
            }
            l.end = v;
            k = b ? p : c ? l : d.findDotsAtSegment(k, e, r[0], r[1], r[2], r[3], r[4], r[5], 1);
            k.alpha && (k = {
                x: k.x,
                y: k.y,
                alpha: k.alpha
            });
            return k
        }
    }
      , Ya = Ga(1)
      , Za = Ga()
      , Ha = Ga(0, 1);
    d.getTotalLength = Ya;
    d.getPointAtLength = Za;
    d.getSubpath = function(b, c, a) {
        if (1E-6 > this.getTotalLength(b) - a)
            return Ha(b, c).end;
        b = Ha(b, a, 1);
        return c ? Ha(b, c).end : b
    }
    ;
    S.getTotalLength = function() {
        if ("path" == this.type)
            return this.node.getTotalLength ? this.node.getTotalLength() : Ya(this.attrs.path)
    }
    ;
    S.getPointAtLength = function(b) {
        if ("path" == this.type)
            return Za(this.attrs.path, b)
    }
    ;
    S.getSubpath = function(b, c) {
        if ("path" == this.type)
            return d.getSubpath(this.attrs.path, b, c)
    }
    ;
    var da = d.easing_formulas = {
        linear: function(b) {
            return b
        },
        "<": function(b) {
            return Y(b, 1.7)
        },
        ">": function(b) {
            return Y(b, .48)
        },
        "<>": function(b) {
            var c = .48 - b / 1.04
              , a = A.sqrt(.1734 + c * c);
            b = a - c;
            b = Y(ba(b), 1 / 3) * (0 > b ? -1 : 1);
            c = -a - c;
            c = Y(ba(c), 1 / 3) * (0 > c ? -1 : 1);
            b = b + c + .5;
            return 3 * (1 - b) * b * b + b * b * b
        },
        backIn: function(b) {
            return b * b * (2.70158 * b - 1.70158)
        },
        backOut: function(b) {
            --b;
            return b * b * (2.70158 * b + 1.70158) + 1
        },
        elastic: function(b) {
            return b == !!b ? b : Y(2, -10 * b) * A.sin(2 * (b - .075) * W / .3) + 1
        },
        bounce: function(b) {
            var c;
            b < 1 / 2.75 ? c = 7.5625 * b * b : b < 2 / 2.75 ? (b -= 1.5 / 2.75,
            c = 7.5625 * b * b + .75) : b < 2.5 / 2.75 ? (b -= 2.25 / 2.75,
            c = 7.5625 * b * b + .9375) : (b -= 2.625 / 2.75,
            c = 7.5625 * b * b + .984375);
            return c
        }
    };
    da.easeIn = da["ease-in"] = da["<"];
    da.easeOut = da["ease-out"] = da[">"];
    da.easeInOut = da["ease-in-out"] = da["<>"];
    da["back-in"] = da.backIn;
    da["back-out"] = da.backOut;
    var M = []
      , La = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b) {
        setTimeout(b, 16)
    }
      , wa = function() {
        for (var b = +new Date, c = 0; c < M.length; c++) {
            var a = M[c];
            if (!a.el.removed && !a.paused) {
                var f = b - a.start, k = a.ms, r = a.easing, q = a.from, l = a.diff, p = a.to, C = a.el, m = {}, u, A = {}, n;
                a.initstatus ? (f = (a.initstatus * a.anim.top - a.prev) / (a.percent - a.prev) * k,
                a.status = a.initstatus,
                delete a.initstatus,
                a.stop && M.splice(c--, 1)) : a.status = (a.prev + f / k * (a.percent - a.prev)) / a.anim.top;
                if (!(0 > f))
                    if (f < k) {
                        var G = r(f / k), x;
                        for (x in q)
                            if (q[D](x)) {
                                switch (va[x]) {
                                case V:
                                    u = +q[x] + G * k * l[x];
                                    break;
                                case "colour":
                                    u = "rgb(" + [Ia(xa(q[x].r + G * k * l[x].r)), Ia(xa(q[x].g + G * k * l[x].g)), Ia(xa(q[x].b + G * k * l[x].b))].join() + ")";
                                    break;
                                case "path":
                                    u = [];
                                    f = 0;
                                    for (r = q[x].length; f < r; f++) {
                                        u[f] = [q[x][f][0]];
                                        p = 1;
                                        for (A = q[x][f].length; p < A; p++)
                                            u[f][p] = +q[x][f][p] + G * k * l[x][f][p];
                                        u[f] = u[f].join(h)
                                    }
                                    u = u.join(h);
                                    break;
                                case "transform":
                                    if (l[x].real)
                                        for (u = [],
                                        f = 0,
                                        r = q[x].length; f < r; f++)
                                            for (u[f] = [q[x][f][0]],
                                            p = 1,
                                            A = q[x][f].length; p < A; p++)
                                                u[f][p] = q[x][f][p] + G * k * l[x][f][p];
                                    else
                                        u = function(b) {
                                            return +q[x][b] + G * k * l[x][b]
                                        }
                                        ,
                                        u = [["m", u(0), u(1), u(2), u(3), u(4), u(5)]];
                                    break;
                                case "csv":
                                    if ("clip-rect" == x)
                                        for (u = [],
                                        f = 4; f--; )
                                            u[f] = +q[x][f] + G * k * l[x][f];
                                    break;
                                default:
                                    for (r = [][v](q[x]),
                                    u = [],
                                    f = C.paper.customAttributes[x].length; f--; )
                                        u[f] = +r[f] + G * k * l[x][f]
                                }
                                m[x] = u
                            }
                        C.attr(m);
                        (function(b, c, a) {
                            setTimeout(function() {
                                eve("raphael.anim.frame." + b, c, a)
                            })
                        }
                        )(C.id, C, a.anim)
                    } else {
                        (function(b, c, a) {
                            setTimeout(function() {
                                eve("raphael.anim.frame." + c.id, c, a);
                                eve("raphael.anim.finish." + c.id, c, a);
                                d.is(b, "function") && b.call(c)
                            })
                        }
                        )(a.callback, C, a.anim);
                        C.attr(p);
                        M.splice(c--, 1);
                        if (1 < a.repeat && !a.next) {
                            for (n in p)
                                p[D](n) && (A[n] = a.totalOrigin[n]);
                            a.el.attr(A);
                            e(a.anim, a.el, a.anim.percents[0], null, a.totalOrigin, a.repeat - 1)
                        }
                        a.next && !a.stop && e(a.anim, a.el, a.next, null, a.totalOrigin, a.repeat)
                    }
            }
        }
        d.svg && C && C.paper && C.paper.safari();
        M.length && La(wa)
    }
      , Ia = function(b) {
        return 255 < b ? 255 : 0 > b ? 0 : b
    };
    S.animateWith = function(b, c, a, h, f, k) {
        if (this.removed)
            return k && k.call(this),
            this;
        a = a instanceof l ? a : d.animation(a, h, f, k);
        e(a, this, a.percents[0], null, this.attr());
        a = 0;
        for (h = M.length; a < h; a++)
            if (M[a].anim == c && M[a].el == b) {
                M[h - 1].start = M[a].start;
                break
            }
        return this
    }
    ;
    S.onAnimation = function(b) {
        b ? eve.on("raphael.anim.frame." + this.id, b) : eve.unbind("raphael.anim.frame." + this.id);
        return this
    }
    ;
    l.prototype.delay = function(b) {
        var c = new l(this.anim,this.ms);
        c.times = this.times;
        c.del = +b || 0;
        return c
    }
    ;
    l.prototype.repeat = function(b) {
        var c = new l(this.anim,this.ms);
        c.del = this.del;
        c.times = A.floor(H(b, 0)) || 1;
        return c
    }
    ;
    d.animation = function(b, c, a, h) {
        if (b instanceof l)
            return b;
        if (d.is(a, "function") || !a)
            h = h || a || null,
            a = null;
        b = Object(b);
        c = +c || 0;
        var f = {}, k, r;
        for (r in b)
            b[D](r) && U(r) != r && U(r) + "%" != r && (k = !0,
            f[r] = b[r]);
        if (!k)
            return new l(b,c);
        a && (f.easing = a);
        h && (f.callback = h);
        return new l({
            100: f
        },c)
    }
    ;
    S.animate = function(b, c, a, h) {
        if (this.removed)
            return h && h.call(this),
            this;
        b = b instanceof l ? b : d.animation(b, c, a, h);
        e(b, this, b.percents[0], null, this.attr());
        return this
    }
    ;
    S.setTime = function(b, c) {
        b && null != c && this.status(b, aa(c, b.ms) / b.ms);
        return this
    }
    ;
    S.status = function(b, c) {
        var a = [], h = 0, f, k;
        if (null != c)
            return e(b, this, -1, aa(c, 1)),
            this;
        for (f = M.length; h < f; h++)
            if (k = M[h],
            k.el.id == this.id && (!b || k.anim == b)) {
                if (b)
                    return k.status;
                a.push({
                    anim: k.anim,
                    status: k.status
                })
            }
        return b ? 0 : a
    }
    ;
    S.pause = function(b) {
        for (var c = 0; c < M.length; c++)
            M[c].el.id != this.id || b && M[c].anim != b || !1 === eve("raphael.anim.pause." + this.id, this, M[c].anim) || (M[c].paused = !0);
        return this
    }
    ;
    S.resume = function(b) {
        for (var c = 0; c < M.length; c++)
            if (M[c].el.id == this.id && (!b || M[c].anim == b)) {
                var a = M[c];
                !1 !== eve("raphael.anim.resume." + this.id, this, a.anim) && (delete a.paused,
                this.status(a.anim, a.status))
            }
        return this
    }
    ;
    S.stop = function(b) {
        for (var c = 0; c < M.length; c++)
            M[c].el.id != this.id || b && M[c].anim != b || !1 === eve("raphael.anim.stop." + this.id, this, M[c].anim) || M.splice(c--, 1);
        return this
    }
    ;
    eve.on("raphael.remove", a);
    eve.on("raphael.clear", a);
    S.toString = function() {
        return "Rapha\u00ebl\u2019s object"
    }
    ;
    var la = function(b) {
        this.items = [];
        this.length = 0;
        this.type = "set";
        if (b)
            for (var c = 0, a = b.length; c < a; c++)
                b[c] && (b[c].constructor == S.constructor || b[c].constructor == la) && (this[this.items.length] = this.items[this.items.length] = b[c],
                this.length++)
    }
      , ca = la.prototype;
    ca.push = function() {
        for (var b, c, a = 0, h = arguments.length; a < h; a++)
            (b = arguments[a]) && (b.constructor == S.constructor || b.constructor == la) && (c = this.items.length,
            this[c] = this.items[c] = b,
            this.length++);
        return this
    }
    ;
    ca.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop()
    }
    ;
    ca.forEach = function(b, c) {
        for (var a = 0, h = this.items.length; a < h && !1 !== b.call(c, this.items[a], a); a++)
            ;
        return this
    }
    ;
    for (var Ja in S)
        S[D](Ja) && (ca[Ja] = function(b) {
            return function() {
                var a = arguments;
                return this.forEach(function(h) {
                    h[b][c](h, a)
                })
            }
        }(Ja));
    ca.attr = function(b, c) {
        if (b && d.is(b, X) && d.is(b[0], "object"))
            for (var a = 0, h = b.length; a < h; a++)
                this.items[a].attr(b[a]);
        else
            for (a = 0,
            h = this.items.length; a < h; a++)
                this.items[a].attr(b, c);
        return this
    }
    ;
    ca.clear = function() {
        for (; this.length; )
            this.pop()
    }
    ;
    ca.splice = function(b, c, a) {
        b = 0 > b ? H(this.length + b, 0) : b;
        c = H(0, aa(this.length - b, c));
        var h = [], f = [], k = [], r;
        for (r = 2; r < arguments.length; r++)
            k.push(arguments[r]);
        for (r = 0; r < c; r++)
            f.push(this[b + r]);
        for (; r < this.length - b; r++)
            h.push(this[b + r]);
        var e = k.length;
        for (r = 0; r < e + h.length; r++)
            this.items[b + r] = this[b + r] = r < e ? k[r] : h[r - e];
        for (r = this.items.length = this.length -= c - e; this[r]; )
            delete this[r++];
        return new la(f)
    }
    ;
    ca.exclude = function(b) {
        for (var c = 0, a = this.length; c < a; c++)
            if (this[c] == b)
                return this.splice(c, 1),
                !0
    }
    ;
    ca.animate = function(b, c, a, h) {
        !d.is(a, "function") && a || (h = a || null);
        var f = this.items.length, k = f, r = this, e;
        if (!f)
            return this;
        h && (e = function() {
            !--f && h.call(r)
        }
        );
        a = d.is(a, "string") ? a : e;
        c = d.animation(b, c, a, e);
        for (b = this.items[--k].animate(c); k--; )
            this.items[k] && !this.items[k].removed && this.items[k].animateWith(b, c, c);
        return this
    }
    ;
    ca.insertAfter = function(b) {
        for (var c = this.items.length; c--; )
            this.items[c].insertAfter(b);
        return this
    }
    ;
    ca.getBBox = function() {
        for (var b = [], a = [], h = [], f = [], k = this.items.length; k--; )
            if (!this.items[k].removed) {
                var r = this.items[k].getBBox();
                b.push(r.x);
                a.push(r.y);
                h.push(r.x + r.width);
                f.push(r.y + r.height)
            }
        b = aa[c](0, b);
        a = aa[c](0, a);
        h = H[c](0, h);
        f = H[c](0, f);
        return {
            x: b,
            y: a,
            x2: h,
            y2: f,
            width: h - b,
            height: f - a
        }
    }
    ;
    ca.clone = function(b) {
        b = new la;
        for (var c = 0, a = this.items.length; c < a; c++)
            b.push(this.items[c].clone());
        return b
    }
    ;
    ca.toString = function() {
        return "Rapha\u00ebl\u2018s set"
    }
    ;
    d.registerFont = function(b) {
        if (!b.face)
            return b;
        this.fonts = this.fonts || {};
        var c = {
            w: b.w,
            face: {},
            glyphs: {}
        }, a = b.face["font-family"], h;
        for (h in b.face)
            b.face[D](h) && (c.face[h] = b.face[h]);
        this.fonts[a] ? this.fonts[a].push(c) : this.fonts[a] = [c];
        if (!b.svg) {
            c.face["units-per-em"] = ga(b.face["units-per-em"], 10);
            for (var f in b.glyphs)
                if (b.glyphs[D](f) && (a = b.glyphs[f],
                c.glyphs[f] = {
                    w: a.w,
                    k: {},
                    d: a.d && "M" + a.d.replace(/[mlcxtrv]/g, function(b) {
                        return {
                            l: "L",
                            c: "C",
                            x: "z",
                            t: "m",
                            r: "l",
                            v: "c"
                        }[b] || "M"
                    }) + "z"
                },
                a.k))
                    for (var k in a.k)
                        a[D](k) && (c.glyphs[f].k[k] = a.k[k])
        }
        return b
    }
    ;
    I.getFont = function(b, c, a, h) {
        h = h || "normal";
        a = a || "normal";
        c = +c || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[c] || 400;
        if (d.fonts) {
            var f = d.fonts[b];
            if (!f) {
                b = new RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)","i");
                for (var k in d.fonts)
                    if (d.fonts[D](k) && b.test(k)) {
                        f = d.fonts[k];
                        break
                    }
            }
            var r;
            if (f)
                for (k = 0,
                b = f.length; k < b && (r = f[k],
                r.face["font-weight"] != c || r.face["font-style"] != a && r.face["font-style"] || r.face["font-stretch"] != h); k++)
                    ;
            return r
        }
    }
    ;
    I.print = function(b, c, a, h, r, e, q) {
        e = e || "middle";
        q = H(aa(q || 0, 1), -1);
        var v = f(a)[k]("")
          , l = 0
          , p = 0
          , C = "";
        d.is(h, a) && (h = this.getFont(h));
        if (h) {
            a = (r || 16) / h.face["units-per-em"];
            var u = h.face.bbox[k](Q);
            r = +u[0];
            var m = u[3] - u[1]
              , A = 0;
            e = +u[1] + ("baseline" == e ? m + +h.face.descent : m / 2);
            for (var u = 0, x = v.length; u < x; u++) {
                if ("\n" == v[u])
                    p = G = l = 0,
                    A += m;
                else
                    var n = p && h.glyphs[v[u - 1]] || {}
                      , G = h.glyphs[v[u]]
                      , l = l + (p ? (n.w || h.w) + (n.k && n.k[v[u]] || 0) + h.w * q : 0)
                      , p = 1;
                G && G.d && (C += d.transformPath(G.d, ["t", l * a, A * a, "s", a, a, r, e, "t", (b - r) / a, (c - e) / a]))
            }
        }
        return this.path(C).attr({
            fill: "#000",
            stroke: "none"
        })
    }
    ;
    I.add = function(b) {
        if (d.is(b, "array"))
            for (var c = this.set(), a = 0, h = b.length, f; a < h; a++)
                f = b[a] || {},
                K[D](f.type) && c.push(this[f.type]().attr(f));
        return c
    }
    ;
    d.format = function(b, c) {
        var a = d.is(c, X) ? [0][v](c) : arguments;
        b && d.is(b, "string") && a.length - 1 && (b = b.replace(E, function(b, c) {
            return null == a[++c] ? "" : a[c]
        }));
        return b || ""
    }
    ;
    d.fullfill = function() {
        var b = /\{([^\}]+)\}/g
          , c = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
          , a = function(b, a, h) {
            var f = h;
            a.replace(c, function(b, c, a, h, k) {
                c = c || h;
                f && (c in f && (f = f[c]),
                "function" == typeof f && k && (f = f()))
            });
            return f = (null == f || f == h ? b : f) + ""
        };
        return function(c, h) {
            return String(c).replace(b, function(b, c) {
                return a(b, c, h)
            })
        }
    }();
    d.ninja = function() {
        R ? u.win.Raphael = T : delete Raphael;
        return d
    }
    ;
    d.st = ca;
    (function(b, c, a) {
        function h() {
            /in/.test(b.readyState) ? setTimeout(h, 9) : d.eve("raphael.DOMload")
        }
        null == b.readyState && b.addEventListener && (b.addEventListener(c, a = function() {
            b.removeEventListener(c, a, !1);
            b.readyState = "complete"
        }
        , !1),
        b.readyState = "loading");
        h()
    }
    )(document, "DOMContentLoaded");
    R ? u.win.Raphael = d : Raphael = d;
    eve.on("raphael.DOMload", function() {
        P = !0
    })
}
)();
window.Raphael.svg && function(a) {
    var e = String
      , l = parseFloat
      , n = parseInt
      , y = Math
      , z = y.max
      , B = y.abs
      , L = y.pow
      , O = /[, ]+/
      , Z = a.eve
      , x = {
        block: "M5,0 0,2.5 5,5z",
        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
        open: "M6,1 1,3.5 6,6",
        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
    }
      , m = {};
    a.toString = function() {
        return "Your browser supports SVG.\nYou are running Rapha\u00ebl " + this.version
    }
    ;
    var p = function(c, d) {
        if (d) {
            "string" == typeof c && (c = p(c));
            for (var l in d)
                d.hasOwnProperty(l) && ("xlink:" == l.substring(0, 6) ? c.setAttributeNS("http://www.w3.org/1999/xlink", l.substring(6), e(d[l])) : c.setAttribute(l, e(d[l])))
        } else
            c = a._g.doc.createElementNS("http://www.w3.org/2000/svg", c),
            c.style && (c.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
        return c
    }
      , d = function(c, d) {
        var u = "linear"
          , h = c.id + d
          , f = .5
          , k = .5
          , r = c.node
          , q = c.paper
          , m = r.style
          , A = a._g.doc.getElementById(h);
        if (!A) {
            d = e(d).replace(a._radial_gradient, function(c, a, h) {
                u = "radial";
                a && h && (f = l(a),
                k = l(h),
                c = 2 * (.5 < k) - 1,
                .25 < L(f - .5, 2) + L(k - .5, 2) && (k = y.sqrt(.25 - L(f - .5, 2)) * c + .5) && .5 != k && (k = k.toFixed(5) - 1E-5 * c));
                return ""
            });
            d = d.split(/\s*\-\s*/);
            if ("linear" == u) {
                A = d.shift();
                A = -l(A);
                if (isNaN(A))
                    return null;
                var n = [0, 0, y.cos(a.rad(A)), y.sin(a.rad(A))]
                  , A = 1 / (z(B(n[2]), B(n[3])) || 1);
                n[2] *= A;
                n[3] *= A;
                0 > n[2] && (n[0] = -n[2],
                n[2] = 0);
                0 > n[3] && (n[1] = -n[3],
                n[3] = 0)
            }
            var x = a._parseDots(d);
            if (!x)
                return null;
            h = h.replace(/[\(\)\s,\xb0#]/g, "_");
            c.gradient && h != c.gradient.id && (q.defs.removeChild(c.gradient),
            delete c.gradient);
            if (!c.gradient)
                for (A = p(u + "Gradient", {
                    id: h
                }),
                c.gradient = A,
                p(A, "radial" == u ? {
                    fx: f,
                    fy: k
                } : {
                    x1: n[0],
                    y1: n[1],
                    x2: n[2],
                    y2: n[3],
                    gradientTransform: c.matrix.invert()
                }),
                q.defs.appendChild(A),
                q = 0,
                n = x.length; q < n; q++)
                    A.appendChild(p("stop", {
                        offset: x[q].offset ? x[q].offset : q ? "100%" : "0%",
                        "stop-color": x[q].color || "#fff"
                    }))
        }
        p(r, {
            fill: "url(#" + h + ")",
            opacity: 1,
            "fill-opacity": 1
        });
        m.fill = "";
        m.opacity = 1;
        return m.fillOpacity = 1
    }
      , P = function(c) {
        var a = c.getBBox(1);
        p(c.pattern, {
            patternTransform: c.matrix.invert() + " translate(" + a.x + "," + a.y + ")"
        })
    }
      , Q = function(c, d, l) {
        if ("path" == c.type) {
            for (var h = e(d).toLowerCase().split("-"), f = c.paper, k = l ? "end" : "start", r = c.node, q = c.attrs, u = q["stroke-width"], n = h.length, H = "classic", z, y, R, E, B, N = 3, D = 3, T = 5; n--; )
                switch (h[n]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    H = h[n];
                    break;
                case "wide":
                    D = 5;
                    break;
                case "narrow":
                    D = 2;
                    break;
                case "long":
                    N = 5;
                    break;
                case "short":
                    N = 2
                }
            "open" == H ? (N += 2,
            D += 2,
            T += 2,
            R = 1,
            E = l ? 4 : 1,
            B = {
                fill: "none",
                stroke: q.stroke
            }) : (E = R = N / 2,
            B = {
                fill: q.stroke,
                stroke: "none"
            });
            c._.arrows ? l ? (c._.arrows.endPath && m[c._.arrows.endPath]--,
            c._.arrows.endMarker && m[c._.arrows.endMarker]--) : (c._.arrows.startPath && m[c._.arrows.startPath]--,
            c._.arrows.startMarker && m[c._.arrows.startMarker]--) : c._.arrows = {};
            if ("none" != H) {
                h = "raphael-marker-" + H;
                n = "raphael-marker-" + k + H + N + D;
                a._g.doc.getElementById(h) ? m[h]++ : (f.defs.appendChild(p(p("path"), {
                    "stroke-linecap": "round",
                    d: x[H],
                    id: h
                })),
                m[h] = 1);
                var I = a._g.doc.getElementById(n), P;
                I ? (m[n]++,
                P = I.getElementsByTagName("use")[0]) : (I = p(p("marker"), {
                    id: n,
                    markerHeight: D,
                    markerWidth: N,
                    orient: "auto",
                    refX: E,
                    refY: D / 2
                }),
                P = p(p("use"), {
                    "xlink:href": "#" + h,
                    transform: (l ? "rotate(180 " + N / 2 + " " + D / 2 + ") " : "") + "scale(" + N / T + "," + D / T + ")",
                    "stroke-width": (1 / ((N / T + D / T) / 2)).toFixed(4)
                }),
                I.appendChild(P),
                f.defs.appendChild(I),
                m[n] = 1);
                p(P, B);
                f = R * ("diamond" != H && "oval" != H);
                l ? (z = c._.arrows.startdx * u || 0,
                y = a.getTotalLength(q.path) - f * u) : (z = f * u,
                y = a.getTotalLength(q.path) - (c._.arrows.enddx * u || 0));
                B = {};
                B["marker-" + k] = "url(#" + n + ")";
                if (y || z)
                    B.d = Raphael.getSubpath(q.path, z, y);
                p(r, B);
                c._.arrows[k + "Path"] = h;
                c._.arrows[k + "Marker"] = n;
                c._.arrows[k + "dx"] = f;
                c._.arrows[k + "Type"] = H;
                c._.arrows[k + "String"] = d
            } else
                l ? (z = c._.arrows.startdx * u || 0,
                y = a.getTotalLength(q.path) - z) : (z = 0,
                y = a.getTotalLength(q.path) - (c._.arrows.enddx * u || 0)),
                c._.arrows[k + "Path"] && p(r, {
                    d: Raphael.getSubpath(q.path, z, y)
                }),
                delete c._.arrows[k + "Path"],
                delete c._.arrows[k + "Marker"],
                delete c._.arrows[k + "dx"],
                delete c._.arrows[k + "Type"],
                delete c._.arrows[k + "String"];
            for (B in m)
                m.hasOwnProperty(B) && !m[B] && (c = a._g.doc.getElementById(B)) && c.parentNode.removeChild(c)
        }
    }
      , K = {
        "": [0],
        none: [0],
        "-": [3, 1],
        ".": [1, 1],
        "-.": [3, 1, 1, 1],
        "-..": [3, 1, 1, 1, 1, 1],
        ". ": [1, 3],
        "- ": [4, 3],
        "--": [8, 3],
        "- .": [4, 3, 1, 3],
        "--.": [8, 3, 1, 3],
        "--..": [8, 3, 1, 3, 1, 3]
    }
      , E = function(c, a, d) {
        if (a = K[e(a).toLowerCase()]) {
            var h = c.attrs["stroke-width"] || "1";
            d = {
                round: h,
                square: h,
                butt: 0
            }[c.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0;
            for (var f = [], k = a.length; k--; )
                f[k] = a[k] * h + (k % 2 ? 1 : -1) * d;
            p(c.node, {
                "stroke-dasharray": f.join(",")
            })
        }
    }
      , D = function(c, l) {
        var m = c.node
          , h = c.attrs
          , f = m.style.visibility;
        m.style.visibility = "hidden";
        for (var k in l)
            if (l.hasOwnProperty(k) && a._availableAttrs.hasOwnProperty(k)) {
                var r = l[k];
                h[k] = r;
                switch (k) {
                case "blur":
                    c.blur(r);
                    break;
                case "href":
                case "title":
                case "target":
                    var q = m.parentNode;
                    if ("a" != q.tagName.toLowerCase()) {
                        var x = p("a");
                        q.insertBefore(x, m);
                        x.appendChild(m);
                        q = x
                    }
                    "target" == k ? q.setAttributeNS("http://www.w3.org/1999/xlink", "show", "blank" == r ? "new" : r) : q.setAttributeNS("http://www.w3.org/1999/xlink", k, r);
                    break;
                case "cursor":
                    m.style.cursor = r;
                    break;
                case "transform":
                    c.transform(r);
                    break;
                case "arrow-start":
                    Q(c, r);
                    break;
                case "arrow-end":
                    Q(c, r, 1);
                    break;
                case "clip-rect":
                    q = e(r).split(O);
                    if (4 == q.length) {
                        c.clip && c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);
                        var x = p("clipPath")
                          , A = p("rect");
                        x.id = a.createUUID();
                        p(A, {
                            x: q[0],
                            y: q[1],
                            width: q[2],
                            height: q[3]
                        });
                        x.appendChild(A);
                        c.paper.defs.appendChild(x);
                        p(m, {
                            "clip-path": "url(#" + x.id + ")"
                        });
                        c.clip = A
                    }
                    !r && (r = m.getAttribute("clip-path")) && ((r = a._g.doc.getElementById(r.replace(/(^url\(#|\)$)/g, ""))) && r.parentNode.removeChild(r),
                    p(m, {
                        "clip-path": ""
                    }),
                    delete c.clip);
                    break;
                case "path":
                    "path" == c.type && (p(m, {
                        d: r ? h.path = a._pathToAbsolute(r) : "M0,0"
                    }),
                    c._.dirty = 1,
                    c._.arrows && ("startString"in c._.arrows && Q(c, c._.arrows.startString),
                    "endString"in c._.arrows && Q(c, c._.arrows.endString, 1)));
                    break;
                case "width":
                    if (m.setAttribute(k, r),
                    c._.dirty = 1,
                    h.fx)
                        k = "x",
                        r = h.x;
                    else
                        break;
                case "x":
                    h.fx && (r = -h.x - (h.width || 0));
                case "rx":
                    if ("rx" == k && "rect" == c.type)
                        break;
                case "cx":
                    m.setAttribute(k, r);
                    c.pattern && P(c);
                    c._.dirty = 1;
                    break;
                case "height":
                    if (m.setAttribute(k, r),
                    c._.dirty = 1,
                    h.fy)
                        k = "y",
                        r = h.y;
                    else
                        break;
                case "y":
                    h.fy && (r = -h.y - (h.height || 0));
                case "ry":
                    if ("ry" == k && "rect" == c.type)
                        break;
                case "cy":
                    m.setAttribute(k, r);
                    c.pattern && P(c);
                    c._.dirty = 1;
                    break;
                case "r":
                    "rect" == c.type ? p(m, {
                        rx: r,
                        ry: r
                    }) : m.setAttribute(k, r);
                    c._.dirty = 1;
                    break;
                case "src":
                    "image" == c.type && m.setAttributeNS("http://www.w3.org/1999/xlink", "href", r);
                    break;
                case "stroke-width":
                    if (1 != c._.sx || 1 != c._.sy)
                        r /= z(B(c._.sx), B(c._.sy)) || 1;
                    c.paper._vbSize && (r *= c.paper._vbSize);
                    m.setAttribute(k, r);
                    h["stroke-dasharray"] && E(c, h["stroke-dasharray"], l);
                    c._.arrows && ("startString"in c._.arrows && Q(c, c._.arrows.startString),
                    "endString"in c._.arrows && Q(c, c._.arrows.endString, 1));
                    break;
                case "stroke-dasharray":
                    E(c, r, l);
                    break;
                case "fill":
                    var H = e(r).match(a._ISURL);
                    if (H) {
                        var x = p("pattern")
                          , y = p("image");
                        x.id = a.createUUID();
                        p(x, {
                            x: 0,
                            y: 0,
                            patternUnits: "userSpaceOnUse",
                            height: 1,
                            width: 1
                        });
                        p(y, {
                            x: 0,
                            y: 0,
                            "xlink:href": H[1]
                        });
                        x.appendChild(y);
                        (function(h) {
                            a._preload(H[1], function() {
                                var a = this.offsetWidth
                                  , f = this.offsetHeight;
                                p(h, {
                                    width: a,
                                    height: f
                                });
                                p(y, {
                                    width: a,
                                    height: f
                                });
                                c.paper.safari()
                            })
                        }
                        )(x);
                        c.paper.defs.appendChild(x);
                        p(m, {
                            fill: "url(#" + x.id + ")"
                        });
                        c.pattern = x;
                        c.pattern && P(c);
                        break
                    }
                    q = a.getRGB(r);
                    if (!q.error)
                        delete l.gradient,
                        delete h.gradient,
                        !a.is(h.opacity, "undefined") && a.is(l.opacity, "undefined") && p(m, {
                            opacity: h.opacity
                        }),
                        !a.is(h["fill-opacity"], "undefined") && a.is(l["fill-opacity"], "undefined") && p(m, {
                            "fill-opacity": h["fill-opacity"]
                        });
                    else if (("circle" == c.type || "ellipse" == c.type || "r" != e(r).charAt()) && d(c, r)) {
                        if ("opacity"in h || "fill-opacity"in h)
                            if (q = a._g.doc.getElementById(m.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) {
                                var R = q.getElementsByTagName("stop");
                                p(R[R.length - 1], {
                                    "stop-opacity": ("opacity"in h ? h.opacity : 1) * ("fill-opacity"in h ? h["fill-opacity"] : 1)
                                })
                            }
                        h.gradient = r;
                        h.fill = "none";
                        break
                    }
                    q.hasOwnProperty("opacity") && p(m, {
                        "fill-opacity": 1 < q.opacity ? q.opacity / 100 : q.opacity
                    });
                case "stroke":
                    q = a.getRGB(r);
                    m.setAttribute(k, q.hex);
                    "stroke" == k && q.hasOwnProperty("opacity") && p(m, {
                        "stroke-opacity": 1 < q.opacity ? q.opacity / 100 : q.opacity
                    });
                    "stroke" == k && c._.arrows && ("startString"in c._.arrows && Q(c, c._.arrows.startString),
                    "endString"in c._.arrows && Q(c, c._.arrows.endString, 1));
                    break;
                case "gradient":
                    "circle" != c.type && "ellipse" != c.type && "r" == e(r).charAt() || d(c, r);
                    break;
                case "opacity":
                    h.gradient && !h.hasOwnProperty("stroke-opacity") && p(m, {
                        "stroke-opacity": 1 < r ? r / 100 : r
                    });
                case "fill-opacity":
                    if (h.gradient) {
                        (q = a._g.doc.getElementById(m.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (R = q.getElementsByTagName("stop"),
                        p(R[R.length - 1], {
                            "stop-opacity": r
                        }));
                        break
                    }
                default:
                    "font-size" == k && (r = n(r, 10) + "px"),
                    q = k.replace(/(\-.)/g, function(c) {
                        return c.substring(1).toUpperCase()
                    }),
                    m.style[q] = r,
                    c._.dirty = 1,
                    m.setAttribute(k, r)
                }
            }
        u(c, l);
        m.style.visibility = f
    }
      , u = function(c, d) {
        if ("text" == c.type && (d.hasOwnProperty("text") || d.hasOwnProperty("font") || d.hasOwnProperty("font-size") || d.hasOwnProperty("x") || d.hasOwnProperty("y"))) {
            var l = c.attrs
              , h = c.node
              , f = h.firstChild ? n(a._g.doc.defaultView.getComputedStyle(h.firstChild, "").getPropertyValue("font-size"), 10) : 10;
            if (d.hasOwnProperty("text")) {
                for (l.text = d.text; h.firstChild; )
                    h.removeChild(h.firstChild);
                for (var k = e(d.text).split("\n"), r = [], q, m = 0, u = k.length; m < u; m++)
                    q = p("tspan"),
                    m && p(q, {
                        dy: 1.2 * f,
                        x: l.x
                    }),
                    q.appendChild(a._g.doc.createTextNode(k[m])),
                    h.appendChild(q),
                    r[m] = q
            } else
                for (r = h.getElementsByTagName("tspan"),
                m = 0,
                u = r.length; m < u; m++)
                    m ? p(r[m], {
                        dy: 1.2 * f,
                        x: l.x
                    }) : p(r[0], {
                        dy: 0
                    });
            p(h, {
                x: l.x,
                y: l.y
            });
            c._.dirty = 1;
            h = c._getBBox();
            (l = l.y - (h.y + h.height / 2)) && a.is(l, "finite") && p(r[0], {
                dy: l
            })
        }
    }
      , R = function(c, e) {
        this[0] = this.node = c;
        c.raphael = !0;
        this.id = a._oid++;
        c.raphaelid = this.id;
        this.matrix = a.matrix();
        this.realPath = null;
        this.paper = e;
        this.attrs = this.attrs || {};
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            deg: 0,
            dx: 0,
            dy: 0,
            dirty: 1
        };
        !e.bottom && (e.bottom = this);
        (this.prev = e.top) && (e.top.next = this);
        e.top = this;
        this.next = null
    }
      , T = a.el;
    R.prototype = T;
    T.constructor = R;
    a._engine.path = function(c, a) {
        var e = p("path");
        a.canvas && a.canvas.appendChild(e);
        e = new R(e,a);
        e.type = "path";
        D(e, {
            fill: "none",
            stroke: "#000",
            path: c
        });
        return e
    }
    ;
    T.rotate = function(c, a, d) {
        if (this.removed)
            return this;
        c = e(c).split(O);
        c.length - 1 && (a = l(c[1]),
        d = l(c[2]));
        c = l(c[0]);
        null == d && (a = d);
        if (null == a || null == d)
            d = this.getBBox(1),
            a = d.x + d.width / 2,
            d = d.y + d.height / 2;
        this.transform(this._.transform.concat([["r", c, a, d]]));
        return this
    }
    ;
    T.scale = function(c, a, d, h) {
        if (this.removed)
            return this;
        c = e(c).split(O);
        c.length - 1 && (a = l(c[1]),
        d = l(c[2]),
        h = l(c[3]));
        c = l(c[0]);
        null == a && (a = c);
        null == h && (d = h);
        if (null == d || null == h)
            var f = this.getBBox(1);
        d = null == d ? f.x + f.width / 2 : d;
        h = null == h ? f.y + f.height / 2 : h;
        this.transform(this._.transform.concat([["s", c, a, d, h]]));
        return this
    }
    ;
    T.translate = function(c, a) {
        if (this.removed)
            return this;
        c = e(c).split(O);
        c.length - 1 && (a = l(c[1]));
        c = l(c[0]) || 0;
        this.transform(this._.transform.concat([["t", c, +a || 0]]));
        return this
    }
    ;
    T.transform = function(c) {
        var e = this._;
        if (null == c)
            return e.transform;
        a._extractTransform(this, c);
        this.clip && p(this.clip, {
            transform: this.matrix.invert()
        });
        this.pattern && P(this);
        this.node && p(this.node, {
            transform: this.matrix
        });
        if (1 != e.sx || 1 != e.sy)
            c = this.attrs.hasOwnProperty("stroke-width") ? this.attrs["stroke-width"] : 1,
            this.attr({
                "stroke-width": c
            });
        return this
    }
    ;
    T.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    }
    ;
    T.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    }
    ;
    T.remove = function() {
        if (!this.removed && this.node.parentNode) {
            var c = this.paper;
            c.__set__ && c.__set__.exclude(this);
            Z.unbind("raphael.*.*." + this.id);
            this.gradient && c.defs.removeChild(this.gradient);
            a._tear(this, c);
            "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var e in this)
                this[e] = "function" == typeof this[e] ? a._removedFactory(e) : null;
            this.removed = !0
        }
    }
    ;
    T._getBBox = function() {
        if ("none" == this.node.style.display) {
            this.show();
            var c = !0
        }
        var a = {};
        try {
            a = this.node.getBBox()
        } catch (e) {} finally {
            a = a || {}
        }
        c && this.hide();
        return a
    }
    ;
    T.attr = function(c, e) {
        if (this.removed)
            return this;
        if (null == c) {
            var d = {}, h;
            for (h in this.attrs)
                this.attrs.hasOwnProperty(h) && (d[h] = this.attrs[h]);
            d.gradient && "none" == d.fill && (d.fill = d.gradient) && delete d.gradient;
            d.transform = this._.transform;
            return d
        }
        if (null == e && a.is(c, "string")) {
            if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient)
                return this.attrs.gradient;
            if ("transform" == c)
                return this._.transform;
            h = c.split(O);
            for (var d = {}, f = 0, k = h.length; f < k; f++)
                c = h[f],
                c in this.attrs ? d[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? d[c] = this.paper.customAttributes[c].def : d[c] = a._availableAttrs[c];
            return k - 1 ? d : d[h[0]]
        }
        if (null == e && a.is(c, "array")) {
            d = {};
            f = 0;
            for (k = c.length; f < k; f++)
                d[c[f]] = this.attr(c[f]);
            return d
        }
        null != e ? (d = {},
        d[c] = e) : null != c && a.is(c, "object") && (d = c);
        for (f in d)
            Z("raphael.attr." + f + "." + this.id, this, d[f]);
        for (f in this.paper.customAttributes)
            if (this.paper.customAttributes.hasOwnProperty(f) && d.hasOwnProperty(f) && a.is(this.paper.customAttributes[f], "function"))
                for (k in h = this.paper.customAttributes[f].apply(this, [].concat(d[f])),
                this.attrs[f] = d[f],
                h)
                    h.hasOwnProperty(k) && (d[k] = h[k]);
        D(this, d);
        return this
    }
    ;
    T.toFront = function() {
        if (this.removed)
            return this;
        "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var c = this.paper;
        c.top != this && a._tofront(this, c);
        return this
    }
    ;
    T.toBack = function() {
        if (this.removed)
            return this;
        var c = this.node.parentNode;
        "a" == c.tagName.toLowerCase() ? c.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : c.firstChild != this.node && c.insertBefore(this.node, this.node.parentNode.firstChild);
        a._toback(this, this.paper);
        return this
    }
    ;
    T.insertAfter = function(c) {
        if (this.removed)
            return this;
        var e = c.node || c[c.length - 1].node;
        e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node);
        a._insertafter(this, c, this.paper);
        return this
    }
    ;
    T.insertBefore = function(c) {
        if (this.removed)
            return this;
        var e = c.node || c[0].node;
        e.parentNode.insertBefore(this.node, e);
        a._insertbefore(this, c, this.paper);
        return this
    }
    ;
    T.blur = function(c) {
        if (0 !== +c) {
            var e = p("filter")
              , d = p("feGaussianBlur");
            this.attrs.blur = c;
            e.id = a.createUUID();
            p(d, {
                stdDeviation: +c || 1.5
            });
            e.appendChild(d);
            this.paper.defs.appendChild(e);
            this._blur = e;
            p(this.node, {
                filter: "url(#" + e.id + ")"
            })
        } else
            this._blur && (this._blur.parentNode.removeChild(this._blur),
            delete this._blur,
            delete this.attrs.blur),
            this.node.removeAttribute("filter")
    }
    ;
    a._engine.circle = function(c, a, e, h) {
        var f = p("circle");
        c.canvas && c.canvas.appendChild(f);
        c = new R(f,c);
        c.attrs = {
            cx: a,
            cy: e,
            r: h,
            fill: "none",
            stroke: "#000"
        };
        c.type = "circle";
        p(f, c.attrs);
        return c
    }
    ;
    a._engine.rect = function(c, a, e, h, f, k) {
        var r = p("rect");
        c.canvas && c.canvas.appendChild(r);
        c = new R(r,c);
        c.attrs = {
            x: a,
            y: e,
            width: h,
            height: f,
            r: k || 0,
            rx: k || 0,
            ry: k || 0,
            fill: "none",
            stroke: "#000"
        };
        c.type = "rect";
        p(r, c.attrs);
        return c
    }
    ;
    a._engine.ellipse = function(a, e, d, h, f) {
        var k = p("ellipse");
        a.canvas && a.canvas.appendChild(k);
        a = new R(k,a);
        a.attrs = {
            cx: e,
            cy: d,
            rx: h,
            ry: f,
            fill: "none",
            stroke: "#000"
        };
        a.type = "ellipse";
        p(k, a.attrs);
        return a
    }
    ;
    a._engine.image = function(a, e, d, h, f, k) {
        var r = p("image");
        p(r, {
            x: d,
            y: h,
            width: f,
            height: k,
            preserveAspectRatio: "none"
        });
        r.setAttributeNS("http://www.w3.org/1999/xlink", "href", e);
        a.canvas && a.canvas.appendChild(r);
        a = new R(r,a);
        a.attrs = {
            x: d,
            y: h,
            width: f,
            height: k,
            src: e
        };
        a.type = "image";
        return a
    }
    ;
    a._engine.text = function(c, e, d, h) {
        var f = p("text");
        c.canvas && c.canvas.appendChild(f);
        c = new R(f,c);
        c.attrs = {
            x: e,
            y: d,
            "text-anchor": "middle",
            text: h,
            font: a._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        };
        c.type = "text";
        D(c, c.attrs);
        return c
    }
    ;
    a._engine.setSize = function(a, e) {
        this.width = a || this.width;
        this.height = e || this.height;
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
        this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this
    }
    ;
    a._engine.create = function() {
        var c = a._getContainer.apply(0, arguments)
          , e = c && c.container
          , d = c.x
          , h = c.y
          , f = c.width
          , c = c.height;
        if (!e)
            throw Error("SVG container not found.");
        var k = p("svg"), r, d = d || 0, h = h || 0, f = f || 512, c = c || 342;
        p(k, {
            height: c,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
        });
        1 == e ? (k.style.cssText = "overflow:hidden;position:absolute;left:" + d + "px;top:" + h + "px",
        a._g.doc.body.appendChild(k),
        r = 1) : (k.style.cssText = "overflow:hidden;position:relative",
        e.firstChild ? e.insertBefore(k, e.firstChild) : e.appendChild(k));
        e = new a._Paper;
        e.width = f;
        e.height = c;
        e.canvas = k;
        e.clear();
        e._left = e._top = 0;
        r && (e.renderfix = function() {}
        );
        e.renderfix();
        return e
    }
    ;
    a._engine.setViewBox = function(a, e, d, h, f) {
        Z("raphael.setViewBox", this, this._viewBox, [a, e, d, h, f]);
        var k = z(d / this.width, h / this.height), r = this.top, q = f ? "meet" : "xMinYMin", l;
        null == a ? (this._vbSize && (k = 1),
        delete this._vbSize,
        l = "0 0 " + this.width + " " + this.height) : (this._vbSize = k,
        l = a + " " + e + " " + d + " " + h);
        for (p(this.canvas, {
            viewBox: l,
            preserveAspectRatio: q
        }); k && r; )
            q = "stroke-width"in r.attrs ? r.attrs["stroke-width"] : 1,
            r.attr({
                "stroke-width": q
            }),
            r._.dirty = 1,
            r._.dirtyT = 1,
            r = r.prev;
        this._viewBox = [a, e, d, h, !!f];
        return this
    }
    ;
    a.prototype.renderfix = function() {
        var a = this.canvas, e = a.style, d;
        try {
            d = a.getScreenCTM() || a.createSVGMatrix()
        } catch (h) {
            d = a.createSVGMatrix()
        }
        a = -d.e % 1;
        d = -d.f % 1;
        if (a || d)
            a && (this._left = (this._left + a) % 1,
            e.left = this._left + "px"),
            d && (this._top = (this._top + d) % 1,
            e.top = this._top + "px")
    }
    ;
    a.prototype.clear = function() {
        a.eve("raphael.clear", this);
        for (var c = this.canvas; c.firstChild; )
            c.removeChild(c.firstChild);
        this.bottom = this.top = null;
        (this.desc = p("desc")).appendChild(a._g.doc.createTextNode("Created with Rapha\u00ebl " + a.version));
        c.appendChild(this.desc);
        c.appendChild(this.defs = p("defs"))
    }
    ;
    a.prototype.remove = function() {
        Z("raphael.remove", this);
        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var c in this)
            this[c] = "function" == typeof this[c] ? a._removedFactory(c) : null
    }
    ;
    var N = a.st, I;
    for (I in T)
        T.hasOwnProperty(I) && !N.hasOwnProperty(I) && (N[I] = function(a) {
            return function() {
                var e = arguments;
                return this.forEach(function(d) {
                    d[a].apply(d, e)
                })
            }
        }(I))
}(window.Raphael);
//^ End of raphael.js
window.Raphael.vml && function(a) {
    var e = String
      , l = parseFloat
      , n = Math
      , y = n.round
      , z = n.max
      , B = n.min
      , L = n.abs
      , O = /[, ]+/
      , Z = a.eve
      , x = {
        M: "m",
        L: "l",
        C: "c",
        Z: "x",
        m: "t",
        l: "r",
        c: "v",
        z: "x"
    }
      , m = /([clmz]),?([^clmz]*)/gi
      , p = / progid:\S+Blur\([^\)]+\)/g
      , d = /-?[^,\s-]+/g
      , P = {
        path: 1,
        rect: 1,
        image: 1
    }
      , Q = {
        circle: 1,
        ellipse: 1
    }
      , K = function(c) {
        var f = /[ahqstv]/ig
          , k = a._pathToAbsolute;
        e(c).match(f) && (k = a._path2curve);
        f = /[clmz]/g;
        if (k == a._pathToAbsolute && !e(c).match(f))
            return c = e(c).replace(m, function(a, c, h) {
                var f = []
                  , k = "m" == c.toLowerCase()
                  , e = x[c];
                h.replace(d, function(a) {
                    k && 2 == f.length && (e += f + x["m" == c ? "l" : "L"],
                    f = []);
                    f.push(y(21600 * a))
                });
                return e + f
            });
        var f = k(c), r;
        c = [];
        for (var q = 0, l = f.length; q < l; q++) {
            k = f[q];
            r = f[q][0].toLowerCase();
            "z" == r && (r = "x");
            for (var u = 1, p = k.length; u < p; u++)
                r += y(21600 * k[u]) + (u != p - 1 ? "," : "");
            c.push(r)
        }
        return c.join(" ")
    }
      , E = function(c, f, k) {
        var e = a.matrix();
        e.rotate(-c, .5, .5);
        return {
            dx: e.x(f, k),
            dy: e.y(f, k)
        }
    }
      , D = function(a, c, k, e, d, l) {
        var m = a._
          , u = a.matrix
          , p = m.fillpos;
        a = a.node;
        var n = a.style
          , x = 1
          , v = ""
          , z = 21600 / c
          , y = 21600 / k;
        n.visibility = "hidden";
        if (c && k) {
            a.coordsize = L(z) + " " + L(y);
            n.rotation = l * (0 > c * k ? -1 : 1);
            if (l) {
                var C = E(l, e, d);
                e = C.dx;
                d = C.dy
            }
            0 > c && (v += "x");
            0 > k && (v += " y") && (x = -1);
            n.flip = v;
            a.coordorigin = e * -z + " " + d * -y;
            if (p || m.fillsize)
                e = (e = a.getElementsByTagName("fill")) && e[0],
                a.removeChild(e),
                p && (C = E(l, u.x(p[0], p[1]), u.y(p[0], p[1])),
                e.position = C.dx * x + " " + C.dy * x),
                m.fillsize && (e.size = m.fillsize[0] * L(c) + " " + m.fillsize[1] * L(k)),
                a.appendChild(e);
            n.visibility = "visible"
        }
    };
    a.toString = function() {
        return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\u00ebl " + this.version
    }
    ;
    var u = function(a, c, k) {
        c = e(c).toLowerCase().split("-");
        k = k ? "end" : "start";
        for (var d = c.length, q = "classic", l = "medium", m = "medium"; d--; )
            switch (c[d]) {
            case "block":
            case "classic":
            case "oval":
            case "diamond":
            case "open":
            case "none":
                q = c[d];
                break;
            case "wide":
            case "narrow":
                m = c[d];
                break;
            case "long":
            case "short":
                l = c[d]
            }
        a = a.node.getElementsByTagName("stroke")[0];
        a[k + "arrow"] = q;
        a[k + "arrowlength"] = l;
        a[k + "arrowwidth"] = m
    }
      , R = function(h, f) {
        h.attrs = h.attrs || {};
        var k = h.node, d = h.attrs, q = k.style, m = P[h.type] && (f.x != d.x || f.y != d.y || f.width != d.width || f.height != d.height || f.cx != d.cx || f.cy != d.cy || f.rx != d.rx || f.ry != d.ry || f.r != d.r), p = Q[h.type] && (d.cx != f.cx || d.cy != f.cy || d.r != f.r || d.rx != f.rx || d.ry != f.ry), n;
        for (n in f)
            f.hasOwnProperty(n) && (d[n] = f[n]);
        m && (d.path = a._getPath[h.type](h),
        h._.dirty = 1);
        f.href && (k.href = f.href);
        f.title && (k.title = f.title);
        f.target && (k.target = f.target);
        f.cursor && (q.cursor = f.cursor);
        "blur"in f && h.blur(f.blur);
        if (f.path && "path" == h.type || m)
            k.path = K(~e(d.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(d.path) : d.path),
            "image" == h.type && (h._.fillpos = [d.x, d.y],
            h._.fillsize = [d.width, d.height],
            D(h, 1, 1, 0, 0, 0));
        "transform"in f && h.transform(f.transform);
        p && (q = +d.cx,
        m = +d.cy,
        p = +d.rx || +d.r || 0,
        n = +d.ry || +d.r || 0,
        k.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", y(21600 * (q - p)), y(21600 * (m - n)), y(21600 * (q + p)), y(21600 * (m + n)), y(21600 * q)));
        "clip-rect"in f && (q = e(f["clip-rect"]).split(O),
        4 == q.length && (q[2] = +q[2] + +q[0],
        q[3] = +q[3] + +q[1],
        m = k.clipRect || a._g.doc.createElement("div"),
        p = m.style,
        p.clip = a.format("rect({1}px {2}px {3}px {0}px)", q),
        k.clipRect || (p.position = "absolute",
        p.top = 0,
        p.left = 0,
        p.width = h.paper.width + "px",
        p.height = h.paper.height + "px",
        k.parentNode.insertBefore(m, k),
        m.appendChild(k),
        k.clipRect = m)),
        f["clip-rect"] || k.clipRect && (k.clipRect.style.clip = "auto"));
        h.textpath && (q = h.textpath.style,
        f.font && (q.font = f.font),
        f["font-family"] && (q.fontFamily = '"' + f["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'),
        f["font-size"] && (q.fontSize = f["font-size"]),
        f["font-weight"] && (q.fontWeight = f["font-weight"]),
        f["font-style"] && (q.fontStyle = f["font-style"]));
        "arrow-start"in f && u(h, f["arrow-start"]);
        "arrow-end"in f && u(h, f["arrow-end"], 1);
        if (null != f.opacity || null != f["stroke-width"] || null != f.fill || null != f.src || null != f.stroke || null != f["stroke-width"] || null != f["stroke-opacity"] || null != f["fill-opacity"] || null != f["stroke-dasharray"] || null != f["stroke-miterlimit"] || null != f["stroke-linejoin"] || null != f["stroke-linecap"]) {
            q = (q = k.getElementsByTagName("fill")) && q[0];
            !q && (q = c("fill"));
            "image" == h.type && f.src && (q.src = f.src);
            f.fill && (q.on = !0);
            if (null == q.on || "none" == f.fill || null === f.fill)
                q.on = !1;
            q.on && f.fill && ((m = e(f.fill).match(a._ISURL)) ? (q.parentNode == k && k.removeChild(q),
            q.rotate = !0,
            q.src = m[1],
            q.type = "tile",
            p = h.getBBox(1),
            q.position = p.x + " " + p.y,
            h._.fillpos = [p.x, p.y],
            a._preload(m[1], function() {
                h._.fillsize = [this.offsetWidth, this.offsetHeight]
            })) : (q.color = a.getRGB(f.fill).hex,
            q.src = "",
            q.type = "solid",
            a.getRGB(f.fill).error && (h.type in {
                circle: 1,
                ellipse: 1
            } || "r" != e(f.fill).charAt()) && T(h, f.fill, q) && (d.fill = "none",
            d.gradient = f.fill,
            q.rotate = !1)));
            if ("fill-opacity"in f || "opacity"in f)
                p = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+a.getRGB(f.fill).o + 1 || 2) - 1),
                p = B(z(p, 0), 1),
                q.opacity = p,
                q.src && (q.color = "none");
            k.appendChild(q);
            q = k.getElementsByTagName("stroke") && k.getElementsByTagName("stroke")[0];
            m = !1;
            !q && (m = q = c("stroke"));
            if (f.stroke && "none" != f.stroke || f["stroke-width"] || null != f["stroke-opacity"] || f["stroke-dasharray"] || f["stroke-miterlimit"] || f["stroke-linejoin"] || f["stroke-linecap"])
                q.on = !0;
            "none" != f.stroke && null !== f.stroke && null != q.on && 0 != f.stroke && 0 != f["stroke-width"] || (q.on = !1);
            p = a.getRGB(f.stroke);
            q.on && f.stroke && (q.color = p.hex);
            p = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+p.o + 1 || 2) - 1);
            n = .75 * (l(f["stroke-width"]) || 1);
            p = B(z(p, 0), 1);
            null == f["stroke-width"] && (n = d["stroke-width"]);
            f["stroke-width"] && (q.weight = n);
            n && 1 > n && (p *= n) && (q.weight = 1);
            q.opacity = p;
            f["stroke-linejoin"] && (q.joinstyle = f["stroke-linejoin"] || "miter");
            q.miterlimit = f["stroke-miterlimit"] || 8;
            f["stroke-linecap"] && (q.endcap = "butt" == f["stroke-linecap"] ? "flat" : "square" == f["stroke-linecap"] ? "square" : "round");
            f["stroke-dasharray"] && (p = {
                "-": "shortdash",
                ".": "shortdot",
                "-.": "shortdashdot",
                "-..": "shortdashdotdot",
                ". ": "dot",
                "- ": "dash",
                "--": "longdash",
                "- .": "dashdot",
                "--.": "longdashdot",
                "--..": "longdashdotdot"
            },
            q.dashstyle = p.hasOwnProperty(f["stroke-dasharray"]) ? p[f["stroke-dasharray"]] : "");
            m && k.appendChild(q)
        }
        if ("text" == h.type) {
            h.paper.canvas.style.display = "";
            k = h.paper.span;
            m = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
            q = k.style;
            d.font && (q.font = d.font);
            d["font-family"] && (q.fontFamily = d["font-family"]);
            d["font-weight"] && (q.fontWeight = d["font-weight"]);
            d["font-style"] && (q.fontStyle = d["font-style"]);
            m = l(d["font-size"] || m && m[0]) || 10;
            q.fontSize = 100 * m + "px";
            h.textpath.string && (k.innerHTML = e(h.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
            k = k.getBoundingClientRect();
            h.W = d.w = (k.right - k.left) / 100;
            h.H = d.h = (k.bottom - k.top) / 100;
            h.X = d.x;
            h.Y = d.y + h.H / 2;
            ("x"in f || "y"in f) && (h.path.v = a.format("m{0},{1}l{2},{1}", y(21600 * d.x), y(21600 * d.y), y(21600 * d.x) + 1));
            k = "x y text font font-family font-weight font-style font-size".split(" ");
            q = 0;
            for (m = k.length; q < m; q++)
                if (k[q]in f) {
                    h._.dirty = 1;
                    break
                }
            switch (d["text-anchor"]) {
            case "start":
                h.textpath.style["v-text-align"] = "left";
                h.bbx = h.W / 2;
                break;
            case "end":
                h.textpath.style["v-text-align"] = "right";
                h.bbx = -h.W / 2;
                break;
            default:
                h.textpath.style["v-text-align"] = "center",
                h.bbx = 0
            }
            h.textpath.style["v-text-kern"] = !0
        }
    }
      , T = function(c, f, k) {
        c.attrs = c.attrs || {};
        var d = Math.pow
          , q = "linear"
          , m = ".5 .5";
        c.attrs.gradient = f;
        f = e(f).replace(a._radial_gradient, function(a, c, h) {
            q = "radial";
            c && h && (c = l(c),
            h = l(h),
            .25 < d(c - .5, 2) + d(h - .5, 2) && (h = n.sqrt(.25 - d(c - .5, 2)) * (2 * (.5 < h) - 1) + .5),
            m = c + " " + h);
            return ""
        });
        f = f.split(/\s*\-\s*/);
        if ("linear" == q) {
            var p = f.shift()
              , p = -l(p);
            if (isNaN(p))
                return null
        }
        f = a._parseDots(f);
        if (!f)
            return null;
        c = c.shape || c.node;
        if (f.length) {
            c.removeChild(k);
            k.on = !0;
            k.method = "none";
            k.color = f[0].color;
            k.color2 = f[f.length - 1].color;
            for (var u = [], x = 0, v = f.length; x < v; x++)
                f[x].offset && u.push(f[x].offset + " " + f[x].color);
            k.colors = u.length ? u.join() : "0% " + k.color;
            "radial" == q ? (k.type = "gradientTitle",
            k.focus = "100%",
            k.focussize = "0 0",
            k.focusposition = m,
            k.angle = 0) : (k.type = "gradient",
            k.angle = (270 - p) % 360);
            c.appendChild(k)
        }
        return 1
    }
      , N = function(c, f) {
        this[0] = this.node = c;
        c.raphael = !0;
        this.id = a._oid++;
        c.raphaelid = this.id;
        this.Y = this.X = 0;
        this.attrs = {};
        this.paper = f;
        this.matrix = a.matrix();
        this._ = {
            transform: [],
            sx: 1,
            sy: 1,
            dx: 0,
            dy: 0,
            deg: 0,
            dirty: 1,
            dirtyT: 1
        };
        !f.bottom && (f.bottom = this);
        (this.prev = f.top) && (f.top.next = this);
        f.top = this;
        this.next = null
    }
      , I = a.el;
    N.prototype = I;
    I.constructor = N;
    I.transform = function(c) {
        if (null == c)
            return this._.transform;
        var f = this.paper._viewBoxShift, k = f ? "s" + [f.scale, f.scale] + "-1-1t" + [f.dx, f.dy] : "", d;
        f && (d = c = e(c).replace(/\.{3}|\u2026/g, this._.transform || ""));
        a._extractTransform(this, k + c);
        var f = this.matrix.clone()
          , q = this.skew;
        c = this.node;
        var k = ~e(this.attrs.fill).indexOf("-")
          , m = !e(this.attrs.fill).indexOf("url(");
        f.translate(-.5, -.5);
        m || k || "image" == this.type ? (q.matrix = "1 0 0 1",
        q.offset = "0 0",
        q = f.split(),
        k && q.noRotation || !q.isSimple ? (c.style.filter = f.toFilter(),
        k = this.getBBox(),
        q = this.getBBox(1),
        f = k.x - q.x,
        k = k.y - q.y,
        c.coordorigin = -21600 * f + " " + -21600 * k,
        D(this, 1, 1, f, k, 0)) : (c.style.filter = "",
        D(this, q.scalex, q.scaley, q.dx, q.dy, q.rotate))) : (c.style.filter = "",
        q.matrix = e(f),
        q.offset = f.offset());
        d && (this._.transform = d);
        return this
    }
    ;
    I.rotate = function(a, c, k) {
        if (this.removed)
            return this;
        if (null != a) {
            a = e(a).split(O);
            a.length - 1 && (c = l(a[1]),
            k = l(a[2]));
            a = l(a[0]);
            null == k && (c = k);
            if (null == c || null == k)
                k = this.getBBox(1),
                c = k.x + k.width / 2,
                k = k.y + k.height / 2;
            this._.dirtyT = 1;
            this.transform(this._.transform.concat([["r", a, c, k]]));
            return this
        }
    }
    ;
    I.translate = function(a, c) {
        if (this.removed)
            return this;
        a = e(a).split(O);
        a.length - 1 && (c = l(a[1]));
        a = l(a[0]) || 0;
        c = +c || 0;
        this._.bbox && (this._.bbox.x += a,
        this._.bbox.y += c);
        this.transform(this._.transform.concat([["t", a, c]]));
        return this
    }
    ;
    I.scale = function(a, c, k, d) {
        if (this.removed)
            return this;
        a = e(a).split(O);
        a.length - 1 && (c = l(a[1]),
        k = l(a[2]),
        d = l(a[3]),
        isNaN(k) && (k = null),
        isNaN(d) && (d = null));
        a = l(a[0]);
        null == c && (c = a);
        null == d && (k = d);
        if (null == k || null == d)
            var q = this.getBBox(1);
        k = null == k ? q.x + q.width / 2 : k;
        d = null == d ? q.y + q.height / 2 : d;
        this.transform(this._.transform.concat([["s", a, c, k, d]]));
        this._.dirtyT = 1;
        return this
    }
    ;
    I.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this
    }
    ;
    I.show = function() {
        !this.removed && (this.node.style.display = "");
        return this
    }
    ;
    I._getBBox = function() {
        return this.removed ? {} : {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        }
    }
    ;
    I.remove = function() {
        if (!this.removed && this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this);
            a.eve.unbind("raphael.*.*." + this.id);
            a._tear(this, this.paper);
            this.node.parentNode.removeChild(this.node);
            this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var c in this)
                this[c] = "function" == typeof this[c] ? a._removedFactory(c) : null;
            this.removed = !0
        }
    }
    ;
    I.attr = function(c, f) {
        if (this.removed)
            return this;
        if (null == c) {
            var k = {}, d;
            for (d in this.attrs)
                this.attrs.hasOwnProperty(d) && (k[d] = this.attrs[d]);
            k.gradient && "none" == k.fill && (k.fill = k.gradient) && delete k.gradient;
            k.transform = this._.transform;
            return k
        }
        if (null == f && a.is(c, "string")) {
            if ("fill" == c && "none" == this.attrs.fill && this.attrs.gradient)
                return this.attrs.gradient;
            d = c.split(O);
            for (var k = {}, e = 0, m = d.length; e < m; e++)
                c = d[e],
                c in this.attrs ? k[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? k[c] = this.paper.customAttributes[c].def : k[c] = a._availableAttrs[c];
            return m - 1 ? k : k[d[0]]
        }
        if (this.attrs && null == f && a.is(c, "array")) {
            k = {};
            e = 0;
            for (m = c.length; e < m; e++)
                k[c[e]] = this.attr(c[e]);
            return k
        }
        null != f && (k = {},
        k[c] = f);
        null == f && a.is(c, "object") && (k = c);
        for (e in k)
            Z("raphael.attr." + e + "." + this.id, this, k[e]);
        if (k) {
            for (e in this.paper.customAttributes)
                if (this.paper.customAttributes.hasOwnProperty(e) && k.hasOwnProperty(e) && a.is(this.paper.customAttributes[e], "function"))
                    for (m in d = this.paper.customAttributes[e].apply(this, [].concat(k[e])),
                    this.attrs[e] = k[e],
                    d)
                        d.hasOwnProperty(m) && (k[m] = d[m]);
            k.text && "text" == this.type && (this.textpath.string = k.text);
            R(this, k)
        }
        return this
    }
    ;
    I.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node);
        this.paper && this.paper.top != this && a._tofront(this, this.paper);
        return this
    }
    ;
    I.toBack = function() {
        if (this.removed)
            return this;
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild),
        a._toback(this, this.paper));
        return this
    }
    ;
    I.insertAfter = function(c) {
        if (this.removed)
            return this;
        c.constructor == a.st.constructor && (c = c[c.length - 1]);
        c.node.nextSibling ? c.node.parentNode.insertBefore(this.node, c.node.nextSibling) : c.node.parentNode.appendChild(this.node);
        a._insertafter(this, c, this.paper);
        return this
    }
    ;
    I.insertBefore = function(c) {
        if (this.removed)
            return this;
        c.constructor == a.st.constructor && (c = c[0]);
        c.node.parentNode.insertBefore(this.node, c.node);
        a._insertbefore(this, c, this.paper);
        return this
    }
    ;
    I.blur = function(c) {
        var f = this.node.runtimeStyle
          , k = f.filter
          , k = k.replace(p, "");
        0 !== +c ? (this.attrs.blur = c,
        f.filter = k + "  progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+c || 1.5) + ")",
        f.margin = a.format("-{0}px 0 0 -{0}px", y(+c || 1.5))) : (f.filter = k,
        f.margin = 0,
        delete this.attrs.blur)
    }
    ;
    a._engine.path = function(a, f) {
        var k = c("shape");
        k.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
        k.coordsize = "21600 21600";
        k.coordorigin = f.coordorigin;
        var e = new N(k,f)
          , d = {
            fill: "none",
            stroke: "#000"
        };
        a && (d.path = a);
        e.type = "path";
        e.path = [];
        e.Path = "";
        R(e, d);
        f.canvas.appendChild(k);
        d = c("skew");
        d.on = !0;
        k.appendChild(d);
        e.skew = d;
        e.transform("");
        return e
    }
    ;
    a._engine.rect = function(c, f, k, e, d, m) {
        var l = a._rectPath(f, k, e, d, m);
        c = c.path(l);
        var p = c.attrs;
        c.X = p.x = f;
        c.Y = p.y = k;
        c.W = p.width = e;
        c.H = p.height = d;
        p.r = m;
        p.path = l;
        c.type = "rect";
        return c
    }
    ;
    a._engine.ellipse = function(c, a, k, e, d) {
        c = c.path();
        c.X = a - e;
        c.Y = k - d;
        c.W = 2 * e;
        c.H = 2 * d;
        c.type = "ellipse";
        R(c, {
            cx: a,
            cy: k,
            rx: e,
            ry: d
        });
        return c
    }
    ;
    a._engine.circle = function(c, a, e, d) {
        c = c.path();
        c.X = a - d;
        c.Y = e - d;
        c.W = c.H = 2 * d;
        c.type = "circle";
        R(c, {
            cx: a,
            cy: e,
            r: d
        });
        return c
    }
    ;
    a._engine.image = function(c, f, e, d, m, p) {
        var l = a._rectPath(e, d, m, p);
        c = c.path(l).attr({
            stroke: "none"
        });
        var u = c.attrs
          , n = c.node
          , x = n.getElementsByTagName("fill")[0];
        u.src = f;
        c.X = u.x = e;
        c.Y = u.y = d;
        c.W = u.width = m;
        c.H = u.height = p;
        u.path = l;
        c.type = "image";
        x.parentNode == n && n.removeChild(x);
        x.rotate = !0;
        x.src = f;
        x.type = "tile";
        c._.fillpos = [e, d];
        c._.fillsize = [m, p];
        n.appendChild(x);
        D(c, 1, 1, 0, 0, 0);
        return c
    }
    ;
    a._engine.text = function(d, f, k, m) {
        var p = c("shape")
          , l = c("path")
          , u = c("textpath");
        f = f || 0;
        k = k || 0;
        m = m || "";
        l.v = a.format("m{0},{1}l{2},{1}", y(21600 * f), y(21600 * k), y(21600 * f) + 1);
        l.textpathok = !0;
        u.string = e(m);
        u.on = !0;
        p.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px";
        p.coordsize = "21600 21600";
        p.coordorigin = "0 0";
        var n = new N(p,d)
          , x = {
            fill: "#000",
            stroke: "none",
            font: a._availableAttrs.font,
            text: m
        };
        n.shape = p;
        n.path = l;
        n.textpath = u;
        n.type = "text";
        n.attrs.text = e(m);
        n.attrs.x = f;
        n.attrs.y = k;
        n.attrs.w = 1;
        n.attrs.h = 1;
        R(n, x);
        p.appendChild(u);
        p.appendChild(l);
        d.canvas.appendChild(p);
        d = c("skew");
        d.on = !0;
        p.appendChild(d);
        n.skew = d;
        n.transform("");
        return n
    }
    ;
    a._engine.setSize = function(c, f) {
        var d = this.canvas.style;
        this.width = c;
        this.height = f;
        c == +c && (c += "px");
        f == +f && (f += "px");
        d.width = c;
        d.height = f;
        d.clip = "rect(0 " + c + " " + f + " 0)";
        this._viewBox && a._engine.setViewBox.apply(this, this._viewBox);
        return this
    }
    ;
    a._engine.setViewBox = function(c, f, d, e, m) {
        a.eve("raphael.setViewBox", this, this._viewBox, [c, f, d, e, m]);
        var p = this.width, l = this.height, u = 1 / z(d / p, e / l), n, x;
        m && (n = l / e,
        x = p / d,
        d * n < p && (c -= (p - d * n) / 2 / n),
        e * x < l && (f -= (l - e * x) / 2 / x));
        this._viewBox = [c, f, d, e, !!m];
        this._viewBoxShift = {
            dx: -c,
            dy: -f,
            scale: u
        };
        this.forEach(function(c) {
            c.transform("...")
        });
        return this
    }
    ;
    var c;
    a._engine.initWin = function(a) {
        var d = a.document;
        d.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !d.namespaces.rvml && d.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
            c = function(c) {
                return d.createElement("<rvml:" + c + ' class="rvml">')
            }
        } catch (e) {
            c = function(c) {
                return d.createElement("<" + c + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }
    ;
    a._engine.initWin(a._g.win);
    a._engine.create = function() {
        var c = a._getContainer.apply(0, arguments)
          , d = c.container
          , e = c.height
          , m = c.width
          , p = c.x
          , c = c.y;
        if (!d)
            throw Error("VML container not found.");
        var l = new a._Paper
          , u = l.canvas = a._g.doc.createElement("div")
          , n = u.style
          , p = p || 0
          , c = c || 0
          , m = m || 512
          , e = e || 342;
        l.width = m;
        l.height = e;
        m == +m && (m += "px");
        e == +e && (e += "px");
        l.coordsize = "21600000 21600000";
        l.coordorigin = "0 0";
        l.span = a._g.doc.createElement("span");
        l.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
        u.appendChild(l.span);
        n.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", m, e);
        1 == d ? (a._g.doc.body.appendChild(u),
        n.left = p + "px",
        n.top = c + "px",
        n.position = "absolute") : d.firstChild ? d.insertBefore(u, d.firstChild) : d.appendChild(u);
        l.renderfix = function() {}
        ;
        return l
    }
    ;
    a.prototype.clear = function() {
        a.eve("raphael.clear", this);
        this.canvas.innerHTML = "";
        this.span = a._g.doc.createElement("span");
        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
        this.canvas.appendChild(this.span);
        this.bottom = this.top = null
    }
    ;
    a.prototype.remove = function() {
        a.eve("raphael.remove", this);
        this.canvas.parentNode.removeChild(this.canvas);
        for (var c in this)
            this[c] = "function" == typeof this[c] ? a._removedFactory(c) : null;
        return !0
    }
    ;
    var v = a.st, C;
    for (C in I)
        I.hasOwnProperty(C) && !v.hasOwnProperty(C) && (v[C] = function(c) {
            return function() {
                var a = arguments;
                return this.forEach(function(d) {
                    d[c].apply(d, a)
                })
            }
        }(C))
}(window.Raphael);
//^ End of raphael.js again
var MapRenderer = function(a, e) {
    function l(a, d) {
        Q[a] = {};
        d.coasts ? $.each(d.coasts, function(d, m) {
            Q[a][d] = D.path(m.path).attr(e.renderAttrs.shape).scaleToCanvas()
        }) : Q[a].all = D.path(d.path).attr(e.renderAttrs.shape).scaleToCanvas()
    }
    function n(a, d) {
        e.scale >= e.MIN_SCALE_FOR_LABELS && (P[a] = D.text((d.center.x + 6) * e.scale, d.center.y * e.scale, a).attr(e.renderAttrs.text).scaleToCanvas(),
        d.coasts && (P[a] = {},
        $.each(d.coasts, function(d, m) {
            P[a][d] = D.text((m.x + 6) * e.scale, m.y * e.scale, d).attr(e.renderAttrs.text).scaleToCanvas()
        })))
    }
    function y(a, e) {
        var l = $("#country_colors ." + a).css("background-color");
        $.each(e, function(a, d) {
            var c = m(a, d);
            if ("A" == d)
                D.circle(c.x, c.y, 6).attr({
                    "fill-opacity": .7,
                    "stroke-width": 2,
                    stroke: l,
                    fill: l
                }).scaleToCanvas();
            else {
                var e = c.x
                  , c = c.y;
                D.path(["M", e - 6, ",", c - 2, " L", e + 6, ",", c - 2, " L", e, ",", c + 5, "Z"]).attr({
                    "fill-opacity": .7,
                    "stroke-width": 2,
                    stroke: l,
                    fill: l
                }).scaleToCanvas()
            }
        });
        d()
    }
    function z(a, d, e) {
        var m = Math.atan2(d.y - a.y, d.x - a.x)
          , l = d.x - 10 * Math.cos(m)
          , c = d.y - 10 * Math.sin(m)
          , p = d.x - 22 * Math.cos(m + .2)
          , n = d.y - 22 * Math.sin(m + .2)
          , h = d.x - 22 * Math.cos(m - .2);
        d = d.y - 22 * Math.sin(m - .2);
        m = ["M", a.x + 10 * Math.cos(m), ",", a.y + 10 * Math.sin(m), "L", l, ",", c].join("");
        a = D.set();
        a.push(D.path(m).attr({
            "stroke-width": "2",
            stroke: e
        }).scaleToCanvas());
        l = ["M", l, ",", c, "L", p, ",", n, "L", h, ",", d, "Z"].join("");
        a.push(D.path(l).attr({
            fill: e,
            "stroke-width": "2",
            "fill-opacity": "0.8",
            stroke: e
        }).scaleToCanvas());
        return a
    }
    function B(a, d) {
        var e = D.set()
          , m = ["M", a.x - 8, ",", a.y - 8, "L", a.x + 8, ",", a.y + 8].join("");
        e.push(D.path(m).attr({
            "stroke-width": "2",
            stroke: "#f00"
        }).scaleToCanvas());
        m = ["M", a.x - 8, ",", a.y + 8, "L", a.x + 8, ",", a.y - 8].join("");
        e.push(D.path(m).attr({
            "stroke-width": "2",
            stroke: "#f00"
        }).scaleToCanvas());
        return e
    }
    function L(a, d) {
        e.territories[a].coasts ? $.each(Q[a], function(a, e) {
            d && d != a || e.highlight()
        }) : Q[a].all.highlight()
    }
    function O(a) {
        e.territories[a].coasts ? $.each(Q[a], function(a, d) {
            d.unhighlight()
        }) : Q[a].all.unhighlight()
    }
    function Z(a) {
        a in e.territories && $.each(Q[a], function(a, d) {
            d.attr(e.renderAttrs.selected_shape)
        })
    }
    function x(a) {
        a in e.territories && $.each(Q[a], function(a, d) {
            d.attr(e.renderAttrs.selected_shape_secondary)
        })
    }
    function m(a, d) {
        if (!d)
            return null;
        if ("A" == d || "F" == d)
            return e.territories[a].unit_center;
        var m = e.territories[a].coasts[d.coast];
        return {
            x: m.x + 6,
            y: m.y + 8
        }
    }
    function p(a, d) {
        return d ? e.territories[a].coasts[d] : e.territories[a].unit_center
    }
    function d() {
        $.each(Q, function(a, d) {
            $.each(d, function(a, d) {
                d.toFront()
            })
        })
    }
    var P = {}
      , Q = {}
      , K = {}
      , E = {};
    Raphael.el.flash = function() {
        this.attr({
            "fill-opacity": .5
        });
        this.animate({
            "fill-opacity": 0
        }, 50);
        return this
    }
    ;
    Raphael.el.highlight = function() {
        this.attr({
            "fill-opacity": .1
        });
        return this
    }
    ;
    Raphael.el.unhighlight = function() {
        this.attr(e.renderAttrs.shape);
        return this
    }
    ;
    Raphael.el.scaleToCanvas = function() {
        this.scale(e.scale, e.scale, 0, 0);
        return this
    }
    ;
    var D = Raphael("map", e.canvasSize.x * e.scale, e.canvasSize.y * e.scale);
    D.setViewBox(0, 0, e.canvasSize.y, e.canvasSize.x);
    D.setSize("99%", "100%");
    D.image("/images/map_background.png", -1, -1, 610, 560).scaleToCanvas();
    $.each(e.territories, function(a, d) {
        d.fill = D.path(d.path).attr(e.renderAttrs[d.type]).scaleToCanvas();
        d.fill.node.id = "ter_" + a
    });
    $.each(e.territories, function(a, d) {
        n(a, d);
        l(a, d)
    });
    $(a).bind("DRAW_UNIT", function(a, d) {
        y(d.player, d.units)
    });
    $(a).bind("DRAW_TERRITORY", function(a, d) {
        var m = d.terName;
        if (e.territories[m].sc) {
            var m = e.territories[m]
              , l = d.player
              , p = "#fff";
            l && (p = $("." + l).css("background-color"));
            D.circle(m.sc.x, m.sc.y, 3).attr({
                fill: p,
                "stroke-width": 1
            }).scaleToCanvas()
        }
    });
    $(a).bind("DRAW_ORDER", function(a, e) {
        a: {
            var l = e.terName
              , n = e.order
              , x = e.fullOrder;
            K[l] && K[l].remove();
            if (n) {
                color = "SUCCEEDS" == n.result ? "#000" : "FAILS" == n.result ? "#f00" : "#000";
                switch (n.type) {
                case "HOLD":
                    var c = m(x.unitTerritory, x.type);
                    if (!c)
                        break a;
                    K[l] = D.circle(c.x, c.y, 10).attr({
                        "stroke-width": 2,
                        stroke: color
                    }).scaleToCanvas();
                    break;
                case "MOVE":
                    c = m(x.unitTerritory, x.type);
                    if (!c)
                        break a;
                    K[l] = z(c, p(n.to, n.to_coast), color);
                    break;
                case "SUPPORT":
                    c = m(x.unitTerritory, x.type);
                    if (n.to) {
                        var v;
                        var y = c
                          , h = m(x.supportedUnitTerritory, x.supportedType)
                          , f = p(n.to, n.to_coast);
                        v = color;
                        if (h && f && y) {
                            var k = (h.x + f.x) / 2, r = (h.y + f.y) / 2, q = (3 * h.x + f.x) / 4, P = (3 * h.y + f.y) / 4, A = (h.x + 3 * f.x) / 4, c = (h.y + 3 * f.y) / 4, O;
                            f.x > h.x ? (O = .05 * (f.y - h.y),
                            h = .05 * (h.x - f.x)) : (O = .05 * (h.y - f.y),
                            h = .05 * (f.x - h.x));
                            y = ["M", y.x, ",", y.y, "C", k, ",", r, " ", q + O, ",", P + h, " ", A, ",", c].join("");
                            k = D.set();
                            k.push(D.path(y).attr({
                                "stroke-dasharray": ".",
                                "stroke-width": "2",
                                stroke: v
                            }).scaleToCanvas());
                            k.push(D.circle(A, c, 5).attr({
                                stroke: v
                            }).scaleToCanvas());
                            v = k
                        } else
                            v = void 0;
                        K[l] = v
                    } else
                        A = m(x.supportedUnitTerritory, x.supportedType),
                        v = color,
                        y = Math.atan2(A.y - c.y, A.x - c.x),
                        A = ["M", c.x + 10 * Math.cos(y), ",", c.y + 10 * Math.sin(y), "L", A.x - 10 * Math.cos(y), ",", A.y - 10 * Math.sin(y)].join(""),
                        c = D.set(),
                        c.push(D.path(A).attr({
                            "stroke-dasharray": ".",
                            "stroke-width": "2",
                            stroke: v
                        }).scaleToCanvas()),
                        K[l] = c;
                    break;
                case "CONVOY":
                    c = m(x.unitTerritory, x.type);
                    if (!c)
                        break a;
                    v = color;
                    A = ["M", c.x - 12, ",", c.y - 6, "L", c.x - 9, ",", c.y - 9, "L", c.x - 6, ",", c.y - 6, "L", c.x - 3, ",", c.y - 9, "L", c.x, ",", c.y - 6, "L", c.x + 3, ",", c.y - 9, "L", c.x + 6, ",", c.y - 6, "L", c.x + 9, ",", c.y - 9, "L", c.x + 12, ",", c.y - 6].join("");
                    c = D.set();
                    c.push(D.path(A).attr({
                        "stroke-width": "2",
                        stroke: v
                    }).scaleToCanvas());
                    K[l] = c;
                    break;
                case "BUILD":
                    if ("A" == n.unit_type || "F" == n.unit_type)
                        v = p(l, n.coast),
                        A = color,
                        c = n.unit_type,
                        "A" == c ? v = D.circle(v.x, v.y, 6).attr({
                            "fill-opacity": 0,
                            "stroke-width": 1.5,
                            "stroke-dasharray": ".",
                            stroke: A
                        }).scaleToCanvas() : "F" == c ? (v = ["M", v.x - 6, ",", v.y - 2, " L", v.x + 6, ",", v.y - 2, " L", v.x, ",", v.y + 5, "Z"],
                        v = D.path(v).attr({
                            "fill-opacity": 0,
                            "stroke-width": 1.5,
                            "stroke-dasharray": ".",
                            stroke: A
                        }).scaleToCanvas()) : v = void 0,
                        K[l] = v;
                    break;
                case "DISBAND":
                    c = m(x.unitTerritory, x.type);
                    if (!c)
                        break a;
                    K[l] = B(c, color)
                }
                n.retreat && (E[l] && (E[l].remove(),
                E[l] = null),
                n.retreat.to ? E[l] = z(m(l, x.type), p(n.retreat.to, n.retreat.to_coast), "#f00") : (n = m(l, x.type),
                E[l] = B(n, "#f00")));
                d()
            }
        }
    });
    $(a).bind("HIGHLIGHT_TERRITORY", function(a, d) {
        L(d.territory.name, d.coast)
    });
    $(a).bind("FADE_TERRITORY", function(a, d) {
        O(d.terName)
    });
    $(a).bind("HIGHLIGHT_PRIMARY_TERRITORY", function(a, d) {
        Z(d.terName)
    });
    $(a).bind("HIGHLIGHT_SECONDARY_TERRITORY", function(a, d) {
        x(d.terName)
    });
    return {
        getMapShapes: function() {
            return Q
        }
    }
};
var MapEventHandler = function(a, e, l) {
    function n(e, l) {
        $.each(e, function(e, n) {
            "createTouch"in document || (n.mouseover(function() {
                y != l && ($(a).trigger("MOUSEOVER_TERRITORY", {
                    terName: l,
                    coast: e
                }),
                y = l)
            }),
            n.mouseout(function() {
                y && $(a).trigger("MOUSEOUT_TERRITORY", {
                    terName: l,
                    coast: e
                });
                $("#status").html("&nbsp;");
                y = null
            }));
            n.click(function() {
                $(a).trigger("CLICK_TERRITORY", {
                    terName: l,
                    coast: e
                })
            })
        })
    }
    var y = null;
    (function() {
        $("#order_buttons").on("click", "input", function() {
            $(a).trigger("SET_STATE", {
                state: this.value.toUpperCase()
            })
        })
    }
    )();
    (function() {
        $.each(e.territories, function(a, e) {
            n(l[a], a)
        })
    }
    )()
};
var KeyboardEventHandler = function(a) {
    $(document).keyup(function(e) {
        if (32 == e.which || 65 <= e.which && 90 >= e.which || 27 == e.keyCode || 97 <= e.which && 122 >= e.which) {
            var l = String.fromCharCode(e.which).toLowerCase();
            "s" == l ? $(a).trigger("SET_STATE", {
                state: "SUPPORT"
            }) : "c" == l ? $(a).trigger("SET_STATE", {
                state: "CONVOY"
            }) : "h" == l ? $(a).trigger("SET_STATE", {
                state: "HOLD"
            }) : "m" == l ? $(a).trigger("SET_STATE", {
                state: "MOVE"
            }) : e.keyCode == KEYCODE_ESC && $(a).trigger("SET_STATE", {
                state: ""
            })
        }
    });
    KEYCODE_ESC = 27
};
var TextEventHandler = function(a) {
    function e(e) {
        e = $(this).attr("name");
        var l = null
          , n = $(this).attr("value");
        if ("sc" == n || "nc" == n)
            l = n,
            n = "F";
        $(a).trigger("CLICK_TERRITORY", {
            terName: e,
            coast: l,
            unitType: n
        })
    }
    function l(e) {
        e = $(this).attr("name");
        var l = $(this).attr("value");
        $(a).trigger("CLICK_TERRITORY", {
            terName: e,
            unitType: l
        })
    }
    function n(e) {
        e = $(this).attr("territory");
        var l = $(this).val();
        $(a).trigger("SET_RETREAT", {
            terName: e,
            retreatTo: l
        })
    }
    (function() {
        $().ready(function() {
            $(".builds_table").on("click", "input", e);
            $(".disbands_table").on("click", "input", l);
            $("#orders").on("change", "select", n)
        })
    }
    )()
};
tilegames = tilegames || {};
tilegames.OrderEventHandler = function(a, e, l, n) {
    this.WAITING = 0;
    this.SELECTED = 1;
    this.SUPPORT = 2;
    this.CONVOY = 3;
    this.events_ = a;
    this.gamestate_ = e;
    this.map_ = l;
    this.activePlayer_ = n;
    this.orders_ = {};
    this.state_ = this.WAITING;
    this.target_ = this.selected_ = null;
    this.unsavedChanges_ = !1;
    this.initialize()
}
;
tilegames.OrderEventHandler.prototype.initialize = function() {
    this.orders_ = this.gamestate_.orders();
    for (var a in this.map_.territories) {
        var e = this.gamestate_.territoryOwnedBy(a);
        $(this.events_).trigger("DRAW_TERRITORY", {
            terName: a,
            player: e
        })
    }
    var l = this.gamestate_.unitsByPlayer()
      , n = this.gamestate_.orders();
    for (e in l)
        if ($(this.events_).trigger("DRAW_UNIT", {
            player: e,
            units: l[e]
        }),
        "NEEDS_BUILDS" !== this.gamestate_.stage() && (!this.activePlayer_ || this.activePlayer_ == e || "SATISFIED" === this.gamestate_.stage() || "NEEDS_RETREATS" === this.gamestate_.stage())) {
            var y = l[e];
            if ("SATISFIED" === this.gamestate_.stage()) {
                var z = n[e];
                for (a in z) {
                    var B = z[a]
                      , L = B.unit_type;
                    B.coast && (L = {
                        type: B.unit_type,
                        coast: B.coast
                    });
                    y[a] = L
                }
            }
            $(this.events_).trigger("DRAW_UNIT_TEXT", {
                player: e,
                units: l[e]
            })
        }
    "NEEDS_BUILDS" === this.gamestate_.stage() && this.initBuilds();
    for (e in n)
        for (a in z = n[e],
        z)
            this.drawOrder_(a, z[a], e);
    this.registerUnloadEvent();
    var O = this;
    $(this.events_).bind("CLICK_TERRITORY", function(a, e) {
        O.handleUpdateOrder(e.terName, e.coast, e.unitType)
    });
    $(this.events_).bind("SET_STATE", function(a, e) {
        O.handleUpdateFooState(e.state)
    });
    $(this.events_).bind("SET_RETREAT", function(a, e) {
        O.handleUpdateRetreatState(e.terName, e.retreatTo)
    });
    $(this.events_).bind("MOUSEOVER_TERRITORY", function(a, e) {
        O.highlightTerritory(e.terName, e.coast)
    });
    $(this.events_).bind("MOUSEOUT_TERRITORY", function(a, e) {
        O.fadeTerritory(e.terName)
    })
}
;
tilegames.OrderEventHandler.prototype.registerUnloadEvent = function() {
    window.onbeforeunload = function() {
        if (this.unsavedChanges_)
            return "You have unsaved changes."
    }
    ;
    var a = this;
    $("#orders_prompt").on("click", "#submit_orders_button", function() {
        a.setUnsavedChanges(!1)
    });
    $("#orders_prompt").on("click", "#early_adjudication", function() {
        a.setUnsavedChanges(!0)
    })
}
;
tilegames.OrderEventHandler.prototype.handleUpdateOrder = function(a, e, l) {
    var n = this.gamestate_.stage();
    "NEEDS_ORDERS" === n && this.handleFooOrders(a, e);
    "NEEDS_BUILDS" === n && this.handleBuildOrders(a, e, l)
}
;
tilegames.OrderEventHandler.prototype.handleBuildOrders = function(a, e, l) {
    var n = this.gamestate_.playerAt(a)
      , y = 0;
    !n || this.activePlayer_ && n != this.activePlayer_ ? (n = this.gamestate_.territoryOwnedBy(a),
    y = this.gamestate_.unitChangeCount()[n],
    0 >= y || (y = this.gamestate_.buildableTerritories(),
    n && -1 != $.inArray(a, y[n]) && this.handleBuild(a, e, l, n))) : (y = this.gamestate_.unitChangeCount()[n],
    0 <= y || this.handleDisband(a, l, n))
}
;
tilegames.OrderEventHandler.prototype.handleDisband = function(a, e, l) {
    var n = null;
    "keep" != e && ("disband" == e ? n = {
        type: "DISBAND"
    } : (e = null,
    this.orders_[l] && this.orders_[l][a] && (e = this.orders_[l][a].type),
    n = "DISBAND" == e ? null : {
        type: "DISBAND"
    }));
    this.updateOrder(l, a, n)
}
;
tilegames.OrderEventHandler.prototype.handleBuild = function(a, e, l, n) {
    var y = "A"
      , z = null;
    "all" != e && (z = e);
    l && (y = l);
    !l && this.orders_[n] && this.orders_[n][a] && (l = this.orders_[n][a].unit_type,
    y = "A" == l ? jQuery.isEmptyObject(this.map_.territories[a].w_neighbors) ? "none" : "F" : "F" == l ? "all" != e ? e == this.orders_[n][a].coast ? "none" : "F" : "none" : "A");
    var B;
    if ("F" == y || "A" == y)
        B = {
            type: "BUILD",
            unit_type: y
        },
        "F" == y && z && (B.coast = z);
    this.updateOrder(n, a, B)
}
;
tilegames.OrderEventHandler.prototype.initBuilds = function() {
    var a = this.gamestate_.unitChangeCount()
      , e = this.gamestate_.buildableTerritories()
      , l = this.gamestate_.unbuildableTerritories();
    if (a)
        for (var n in a) {
            var y = this.gamestate_.playerUnits(n)
              , z = this.eliminatedForBuilds(y, a[n]);
            $(this.events_).trigger("DRAW_BUILD", {
                player: n,
                units: y,
                isDisabled: z,
                playerUnitChangeCount: a[n],
                playerBuildableTerritories: e[n] || [],
                playerUnbuildableTerritories: l[n] || []
            })
        }
}
;
tilegames.OrderEventHandler.prototype.eliminatedForBuilds = function(a, e) {
    if (a) {
        var l = 0, n;
        for (n in a)
            l++;
        if (0 === l + e)
            return !0
    }
    return !1
}
;
tilegames.OrderEventHandler.prototype.handleFooOrders = function(a, e) {
    this.state_ == this.WAITING ? this.handleWaitingStateClick(a, e) && (this.highlightPrimaryTerritory(a),
    $("#hint").html("<p>Selected <strong>" + this.selected_ + "</strong>. You may now:</p><ol><li>Select an adjacent territory to move/attack that territory.</li><li>Click the same territory to issue a hold order.</li><li>Press '<strong>s</strong>' to issue a support order.</li><li>Press '<strong>c</strong>' to issue a convoy order.</li></ol>"),
    $(".order-buttons input").removeAttr("disabled")) : this.state_ == this.SELECTED ? a == this.selected_ ? this.setOrderToHold() : (this.setOrderToMove(a, e),
    $("#hint").html(""),
    $(".order-buttons input").removeClass("active")) : this.state_ == this.SUPPORT ? null == this.target_ ? this.handleSupportStateSourceClick(a, e) && (this.highlightSecondaryTerritory(this.target_),
    $("#hint").html("<p><strong>" + this.selected_ + "</strong> supporting <strong>" + this.target_ + "</strong>.  Click the same territory to support a hold, support, or convoy.  To support a move, click the destination territory.</p>")) : (this.handleSupportStateTargetClick(a, e),
    $("#hint").html(""),
    $(".order-buttons input").removeClass("active")) : this.state_ == this.CONVOY && (null == this.target_ ? this.handleConvoyStateSourceClick(a, e) && (this.highlightSecondaryTerritory(this.target_),
    $("#hint").html("<p><strong>" + this.selected_ + "</strong> convoying <strong>" + this.target_ + "</strong> to ...?</p>")) : (this.handleConvoyStateTargetClick(a, e),
    $("#hint").html(""),
    $(".order-buttons input").removeClass("active")))
}
;
tilegames.OrderEventHandler.prototype.handleUpdateFooState = function(a) {
    $(".order-buttons input").removeClass("active");
    "SUPPORT" == a ? this.state_ != a && this.state_ != this.WAITING && (this.target_ = null,
    this.state_ = this.SUPPORT,
    $("#hint").html("<p>Issuing a support order to <strong>" + this.selected_ + "</strong>.  Select a unit to support."),
    $("#order_button_support").addClass("active")) : "CONVOY" == a ? this.state_ != a && this.state_ != this.WAITING && (this.target_ = null,
    this.state_ = this.CONVOY,
    $("#order_button_convoy").addClass("active"),
    $("#hint").html("<p>Issuing a convoy order to <strong>" + this.selected_ + "</strong>.  Select an army to convoy.")) : "HOLD" == a ? this.state_ != a && this.state_ != this.WAITING && this.setOrderToHold() : "MOVE" == a ? this.state_ != a && this.state_ != this.WAITING && (this.state_ = this.SELECTED,
    $("#order_button_move").addClass("active"),
    $("#hint").html("<p>Selected <strong>" + this.selected_ + "</strong>. You may now:</p><ol><li>Select an adjacent territory to move/attack that territory.</li><li>Click the same territory to issue a hold order.</li><li>Press '<strong>s</strong>' to issue a support order.</li><li>Press '<strong>c</strong>' to issue a convoy order.</li></ol>")) : ($(".order-buttons input").attr("disabled", "disabled"),
    this.resetState())
}
;
tilegames.OrderEventHandler.prototype.handleUpdateRetreatState = function(a, e) {
    var l = this.gamestate_.playerAt(a)
      , n = {};
    if ("DISBAND" == e)
        n.type = "DISBAND";
    else {
        n.type = "MOVE";
        if ("MOVE" == n.type && 3 < e.length) {
            var y = e.substring(3, 5);
            e = e.substring(0, 3);
            n.to_coast = y
        }
        n.to = e
    }
    this.updateOrder(l, a, n)
}
;
tilegames.OrderEventHandler.prototype.setOrderToHold = function() {
    this.updateOrder(this.gamestate_.playerAt(this.selected_), this.selected_, {
        type: "HOLD"
    });
    $("#order_button_hold").effect("highlight", {}, "slow");
    this.resetState()
}
;
tilegames.OrderEventHandler.prototype.setOrderToMove = function(a, e) {
    var l = {
        type: "MOVE",
        to: a
    };
    e && this.doCoastsMatter(a) && (l.to_coast = e);
    this.updateOrder(this.gamestate_.playerAt(this.selected_), this.selected_, l);
    this.resetState();
    $("#order_button_move").effect("highlight", {}, "slow")
}
;
tilegames.OrderEventHandler.prototype.handleSupportStateSourceClick = function(a, e) {
    if (this.selected_ == a || !this.gamestate_.playerAt(a))
        return !1;
    this.target_ = a;
    return !0
}
;
tilegames.OrderEventHandler.prototype.handleSupportStateTargetClick = function(a, e) {
    var l = {
        type: "SUPPORT",
        from: this.target_
    };
    a != this.target_ && (l.to = a);
    e && this.doCoastsMatter(a) && (l.to_coast = e);
    this.updateOrder(this.gamestate_.playerAt(this.selected_), this.selected_, l);
    this.resetState();
    $("#order_button_support").effect("highlight", {}, "slow");
    return !0
}
;
tilegames.OrderEventHandler.prototype.handleConvoyStateSourceClick = function(a, e) {
    if (!this.gamestate_.playerAt(a))
        return !1;
    this.target_ = a;
    return !0
}
;
tilegames.OrderEventHandler.prototype.handleConvoyStateTargetClick = function(a, e) {
    var l = {
        type: "CONVOY",
        from: this.target_,
        to: a
    };
    this.updateOrder(this.gamestate_.playerAt(this.selected_), this.selected_, l);
    this.resetState();
    $("#convoy_button_support").effect("highlight", {}, "slow");
    return !0
}
;
tilegames.OrderEventHandler.prototype.updateOrder = function(a, e, l) {
    this.orders_[a] || (this.orders_[a] = {});
    "NEEDS_RETREATS" === this.gamestate_.stage() ? (this.orders_[a][e].retreat = l,
    this.updateRetreatOrderParam(a)) : (l ? this.orders_[a][e] = l : delete this.orders_[a][e],
    $("#input_orders").val(JSON.stringify(this.orders_)));
    this.drawOrder_(e, this.orders_[a][e], a);
    this.setUnsavedChanges(!0)
}
;
tilegames.OrderEventHandler.prototype.drawOrder_ = function(a, e, l) {
    e = {
        terName: a,
        order: e,
        fullOrder: this.buildFullOrderObj(l, a, e)
    };
    "NEEDS_BUILDS" === this.gamestate_.stage() && (e.unitChangeCount = this.calculateUnitChangeCount(l));
    $(this.events_).trigger("DRAW_ORDER", e)
}
;
tilegames.OrderEventHandler.prototype.calculateUnitChangeCount = function(a) {
    var e = this.gamestate_.unitChangeCount()[a];
    1 > e && (e *= -1);
    this.orders_[a] && $.each(this.orders_[a], function(a, n) {
        e--
    });
    return e
}
;
tilegames.OrderEventHandler.prototype.updateRetreatOrderParam = function(a) {
    var e = JSON.parse($("#input_orders").val());
    e[a] = {};
    var l = this.orders_[a], n;
    for (n in l)
        "retreat"in this.orders_[a][n] && (e[a][n] = this.orders_[a][n].retreat);
    $("#input_orders").val(JSON.stringify(e))
}
;
tilegames.OrderEventHandler.prototype.setUnsavedChanges = function(a) {
    if (a) {
        this.unsavedChanges_ = !0;
        a = [$("#submit_orders_button")];
        for (var e = 0; e < a.length; e++)
            a[e] && a[e].removeAttr("disabled")
    }
}
;
tilegames.OrderEventHandler.prototype.buildFullOrderObj = function(a, e, l) {
    var n = {};
    n.player = a;
    n.unitTerritory = e;
    if (!l)
        return n;
    n.type = this.gamestate_.unitTypeAt(n.unitTerritory);
    n.type && (n.type.coast ? (n.unitType = n.type.type,
    n.unitCoast = n.type.coast) : n.unitType = n.type);
    n.orderType = l.type;
    switch (n.orderType) {
    case "MOVE":
        n.moveTarget = l.to;
        l.to_coast && (n.moveTargetCoast = l.to_coast);
        break;
    case "SUPPORT":
        n.supportedUnitTerritory = l.from;
        n.supportedType = this.gamestate_.unitTypeAt(n.supportedUnitTerritory);
        n.supportedType && n.supportedType.coast && (n.supportedUnitType = n.supportedType.type,
        n.supportedUnitCoast = n.supportedType.coast);
        l.to_coast && (n.supportedUnitMoveOrderCoast = l.to_coast);
        l.to && (n.supportedUnitMoveOrder = l.to);
        break;
    case "CONVOY":
        n.convoyedUnitTerritory = l.from;
        n.convoyedUnitMoveTarget = l.to;
        break;
    case "BUILD":
        n.unitType = l.unit_type,
        n.unitCoast = l.coast
    }
    n.result = l.result;
    "FAILS" == l.result && l.retreat && (n.retreat = l.retreat);
    n.resultReason = l.result_reason;
    n.retreatOptions = this.gamestate_.retreatOptions(e);
    return n
}
;
tilegames.OrderEventHandler.prototype.highlightTerritory = function(a, e) {
    var l = {
        name: a,
        owner: this.gamestate_.territoryOwnedBy(a),
        unit: this.gamestate_.playerAt(a),
        type: this.gamestate_.unitTypeAt(a)
    };
    this.selected_ != a && this.target_ != a && $(this.events_).trigger("HIGHLIGHT_TERRITORY", {
        territory: l,
        coast: this.doCoastsMatter(a) ? e : null
    })
}
;
tilegames.OrderEventHandler.prototype.fadeTerritory = function(a) {
    this.selected_ != a && this.target_ != a && $(this.events_).trigger("FADE_TERRITORY", {
        terName: a
    })
}
;
tilegames.OrderEventHandler.prototype.highlightPrimaryTerritory = function(a) {
    $(this.events_).trigger("HIGHLIGHT_PRIMARY_TERRITORY", {
        terName: a
    })
}
;
tilegames.OrderEventHandler.prototype.highlightSecondaryTerritory = function(a) {
    $(this.events_).trigger("HIGHLIGHT_SECONDARY_TERRITORY", {
        terName: a
    })
}
;
tilegames.OrderEventHandler.prototype.handleWaitingStateClick = function(a, e) {
    if (!this.gamestate_.playerAt(a) || this.activePlayer_ && !(a in this.gamestate_.unitsByPlayer()[this.activePlayer_]))
        return !1;
    this.selected_ = a;
    this.state_ = this.SELECTED;
    return !0
}
;
tilegames.OrderEventHandler.prototype.doCoastsMatter = function(a) {
    return !this.selected_ || this.state_ == this.WAITING || this.state_ == this.CONVOY || a && !this.map_.territories[a].coasts ? !1 : this.state_ == this.SELECTED ? (a = this.gamestate_.unitTypeAt(this.selected_)) && ("F" == a || a.type && "F" == a.type) : this.state_ == this.SUPPORT ? this.target_ ? (a = this.gamestate_.unitTypeAt(this.target_)) && ("F" == a || a.type && "F" == a.type) : !1 : !1
}
;
tilegames.OrderEventHandler.prototype.resetState = function() {
    if (this.selected_) {
        var a = this.selected_;
        this.selected_ = null;
        this.fadeTerritory(a)
    }
    this.target_ && (a = this.target_,
    this.target_ = null,
    this.fadeTerritory(a));
    this.state_ = this.WAITING
}
;
var TextRenderer = function(a, e, l, n) {
    function y(a, l, n, x) {
        var m = l ? ' disabled="disabled"' : ""
          , p = ['<table player="', a, '" id="', a, '_builds_table" class="build_disband_table builds_table">', "<tr><th>&nbsp;</th><th>None</th><th>Army</th><th>Fleet</th></tr>"];
        $.each(n, function(a, l) {
            "Stp" == l ? p = p.concat(['<tr id="', l, '_build_row">', "<td>", l, "</td>", '<td><input type="radio"', m, ' name="', l, '"id="', l, '_none" value="none" checked="checked"></td>', '<td><input type="radio"', m, ' name="', l, '"id="', l, '_A" value="A"></td>', '<td><input type="radio"', m, ' name="', l, '"id="', l, '_F_sc" value="sc">sc</td>', '<td><input type="radio"', m, ' name="', l, '"id="', l, '_F_nc" value="nc">nc</td></tr>']) : (p = p.concat(['<tr id="', l, '_build_row">', "<td>", l, "</td>", '<td><input type="radio"', m, ' name="', l, '"id="', l, '_none" value="none" checked="checked"></td>', '<td><input type="radio"', m, ' name="', l, '"id="', l, '_A" value="A"></td>', '<td><input type="radio"', m, ' name="', l, '"id="', l, '_F" value="F"']),
            jQuery.isEmptyObject(e.territories[l].w_neighbors) && p.push(' disabled="disabled"'),
            p.push("></td></tr>"))
        });
        $.each(x, function(a, e) {
            p = p.concat(['<tr id="', e[0], '_nobuild_row">', "<td>", e[0], "</td>", '<td colspan="4">', e[1], "</td></tr>"])
        });
        p.push("</table>");
        return p.join("")
    }
    function z(a, e, l) {
        var n = e ? ' disabled="disabled"' : ""
          , m = ['<table player="', a, '" id="', a, '_disbands_table" class="build_disband_table disbands_table">', "<tr><th>&nbsp;</th><th>Keep</th><th>Disband</th></tr>"];
        $.each(l, function(a, d) {
            m = m.concat(['<tr id="', a, '_build_row">', "<td><code>", a, "</code></td>", '<td><input type="radio"', n, ' name="', a, '" id="' + a + '_none" value="keep" checked="checked"></td>', '<td><input type="radio"', n, ' name="', a, '" id="disband_' + a + '" value="disband"></td>', "</tr>"])
        });
        m.push("</table>");
        return m.join("")
    }
    function B(a, e, l) {
        var n = '<tr><th><div class="country"><span class="country-icon ' + a + '">&nbsp;</span>' + a + "</div></th><td>";
        $.each(e, function(a, e) {
            var d = n
              , l = a
              , y = e;
            "object" === typeof y && (y = y.type,
            l += "/" + e.coast);
            n = d + ('<p id="order_' + a + '" class="orderstring" ter="' + a + '">' + (y + " " + l) + "</p>")
        });
        n += "</td></tr>";
        $("#orders").append(n)
    }
    (function() {
        $(a).bind("DRAW_BUILD", function(a, e) {
            var B = e.player
              , x = e.units
              , m = e.isDisabled || l
              , p = e.playerUnitChangeCount
              , d = '<tr><th><div class="country"><span class="country-icon ' + B + '">&nbsp;</span>' + B + "</div></th>"
              , d = 0 < p && (void 0 == n || n == B) ? d + ("<td>" + y(B, m, e.playerBuildableTerritories, e.playerUnbuildableTerritories) + "</td>") : 0 > p && (void 0 == n || n == B) ? d + ("<td>" + z(B, m, x) + "</td>") : d + "-"
              , d = d + ("<td>" + (0 < p ? 'Up to <strong id="' + B + '_count" class="build_disband_count">' + p + "</strong> more builds." : 0 > p ? 'Up to <strong id="' + B + '_count" class="build_disband_count">' + -1 * p + "</strong> more disbands." : "") + "</td>") + "</tr>";
            $("#orders").append(d)
        });
        $(a).bind("DRAW_UNIT_TEXT", function(a, e) {
            B(e.player, e.units, !1)
        });
        $(a).bind("DRAW_ORDER", function(a, e) {
            var l = e.terName, n;
            n = e.fullOrder;
            var m = n.unitType + " " + n.unitTerritory;
            n.unitCoast && (m += "/" + n.unitCoast);
            var p = $("#" + n.unitTerritory + "_none");
            0 < p.length && (p[0].checked = !0);
            switch (n.orderType) {
            case "HOLD":
                m += " H";
                break;
            case "MOVE":
                m += " - " + n.moveTarget;
                n.moveTargetCoast && (m += "/" + n.moveTargetCoast);
                break;
            case "SUPPORT":
                m += " S " + n.supportedUnitTerritory;
                n.supportedUnitCoast && (m += "/" + n.supportedUnitCoast);
                n.supportedUnitMoveOrder && (m += " - " + n.supportedUnitMoveOrder,
                n.supportedUnitMoveOrderCoast && (m += "/" + n.supportedUnitMoveOrderCoast));
                break;
            case "CONVOY":
                m += " C " + n.convoyedUnitTerritory + " - " + n.convoyedUnitMoveTarget;
                break;
            case "BUILD":
                p = $("#" + n.unitTerritory + "_" + n.unitType + (n.unitCoast ? "_" + n.unitCoast : ""));
                0 < p.length && (p[0].checked = !0);
                m += " Build";
                break;
            case "DISBAND":
                p = $("#disband_" + n.unitTerritory),
                0 < p.length && (p[0].checked = !0),
                m += " Disband"
            }
            n.result && (m = "FAILS" == n.result ? m + ('<span class="orderproblem"> &#x21d2; ' + n.result + " (" + n.resultReason + ")</span>") : m + (" &#x21d2; " + n.result));
            if (n.retreatOptions) {
                var d = null;
                n.retreat && "MOVE" == n.retreat.type ? d = n.retreat.to : n.retreat && "DISBAND" == n.retreat.type && (d = n.retreat.type);
                var p = n.retreatOptions
                  , y = n.unitTerritory
                  , z = !1
                  , B = "";
                for (i in p) {
                    var E = p[i]
                      , D = E;
                    5 == E.length && (D = E.substring(0, 3) + "/" + E.substring(3, 5));
                    d == E ? (z = !0,
                    B += '<option selected="selected" value="' + E + '">' + D + "</option>") : B += '<option value="' + E + '">' + D + "</option>"
                }
                z || (B = '<option disabled="disabled" selected="selected" value="">Select a retreat option</option>' + B);
                m += "<code>" + y + '</code> <select territory="' + y + '" style="width: auto;">' + B + "</select>"
            }
            n.retreat && ("MOVE" == n.retreat.type ? m += "; Retreat to " + n.retreat.to : "DISBAND" == n.retreat.type && (m += "; Disband"),
            n.retreat.result && (m = "FAILS" == n.retreat.result ? m + ('<span class="orderproblem"> &#x21d2; ' + n.retreat.result + "</span>") : m + (" &#x21d2; " + n.retreat.result)));
            n = m;
            $("#order_" + l).html(n);
            "unitChangeCount"in e && $("#" + e.fullOrder.player + "_count").html(e.unitChangeCount)
        });
        $(a).bind("HIGHLIGHT_TERRITORY", function(a, e) {
            var l = e.territory.name;
            $(".highlight_text_order").removeClass("highlight_text_order");
            $("#order_" + l).addClass("highlight_text_order")
        })
    }
    )()
};
var ToolTipRenderer = function(a, e) {
    (function() {
        $(a).bind("HIGHLIGHT_TERRITORY", function(a, n) {
            var y = n.territory
              , z = y.name
              , B = z + " <em>(" + e.territories[z].name + ")</em><br>";
            e.territories[z].sc && (B = y.owner ? B + e.playerDescriptions[y.owner].possessive : B + "Unowned",
            B += " Supply Center<br>");
            y.unit && (z = y.type,
            "object" === typeof z && (z = z.type),
            B += e.playerDescriptions[y.unit].possessive + " " + e.unitNames[z] + "<br>");
            window.status = B;
            tooltip.html(B).show()
        });
        $(a).bind("FADE_TERRITORY", function(a, e) {
            $("#tooltip").hide()
        });
        tooltip = $("#tooltip");
        0 === tooltip.length && (tooltip = $('<div id="tooltip" style="display:none"></div>').prependTo("body"));
        $(document).mousemove(function(a) {
            $("#tooltip").css({
                left: a.pageX + 10 + "px",
                top: a.pageY + 10 + "px"
            })
        })
    }
    )()
};
this.JSON || (this.JSON = {});
(function() {
    function a(a) {
        return 10 > a ? "0" + a : a
    }
    function e(a) {
        y.lastIndex = 0;
        return y.test(a) ? '"' + a.replace(y, function(a) {
            var e = L[a];
            return "string" === typeof e ? e : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }
    function l(a, n) {
        var m, p, d, y, L = z, K, E = n[a];
        E && "object" === typeof E && "function" === typeof E.toJSON && (E = E.toJSON(a));
        "function" === typeof O && (E = O.call(n, a, E));
        switch (typeof E) {
        case "string":
            return e(E);
        case "number":
            return isFinite(E) ? String(E) : "null";
        case "boolean":
        case "null":
            return String(E);
        case "object":
            if (!E)
                return "null";
            z += B;
            K = [];
            if ("[object Array]" === Object.prototype.toString.apply(E)) {
                y = E.length;
                for (m = 0; m < y; m += 1)
                    K[m] = l(m, E) || "null";
                d = 0 === K.length ? "[]" : z ? "[\n" + z + K.join(",\n" + z) + "\n" + L + "]" : "[" + K.join(",") + "]";
                z = L;
                return d
            }
            if (O && "object" === typeof O)
                for (y = O.length,
                m = 0; m < y; m += 1)
                    p = O[m],
                    "string" === typeof p && (d = l(p, E)) && K.push(e(p) + (z ? ": " : ":") + d);
            else
                for (p in E)
                    Object.hasOwnProperty.call(E, p) && (d = l(p, E)) && K.push(e(p) + (z ? ": " : ":") + d);
            d = 0 === K.length ? "{}" : z ? "{\n" + z + K.join(",\n" + z) + "\n" + L + "}" : "{" + K.join(",") + "}";
            z = L;
            return d
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
    }
    ,
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    }
    );
    var n = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, y = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, z, B, L = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, O;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(a, e, m) {
        var n;
        B = z = "";
        if ("number" === typeof m)
            for (n = 0; n < m; n += 1)
                B += " ";
        else
            "string" === typeof m && (B = m);
        if ((O = e) && "function" !== typeof e && ("object" !== typeof e || "number" !== typeof e.length))
            throw Error("JSON.stringify");
        return l("", {
            "": a
        })
    }
    );
    "function" !== typeof JSON.parse && (JSON.parse = function(a, e) {
        function l(a, n) {
            var p, y, z = a[n];
            if (z && "object" === typeof z)
                for (p in z)
                    Object.hasOwnProperty.call(z, p) && (y = l(z, p),
                    void 0 !== y ? z[p] = y : delete z[p]);
            return e.call(a, n, z)
        }
        var p;
        n.lastIndex = 0;
        n.test(a) && (a = a.replace(n, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return p = eval("(" + a + ")"),
            "function" === typeof e ? l({
                "": p
            }, "") : p;
        throw new SyntaxError("JSON.parse");
    }
    )
}
)();
function remove_sandbox(a) {
    $.ajax({
        url: "/sandbox/" + a.data.id + "/ajax/remove",
        type: "POST",
        data: {
            session_id: $("#session_id").val()
        },
        success: function(e) {
            $("#sandbox_" + a.data.id).remove()
        },
        error: function(a, l, n) {}
    })
}
$("document").ready(function() {
    $(".sandbox_remove").each(function() {
        var a = this.id.replace("sandbox_remove_", "");
        $(this).bind("click", {
            id: a
        }, remove_sandbox)
    })
});
$("#timelineModal").one("show.bs.modal", function(a) {
    $.ajax({
        type: "GET",
        url: $("#timelineModal").data("uri"),
        traditional: !0,
        success: function(a) {
            events = JSON.parse(a);
            for (a = 0; a < events.length; a++) {
                var l = new Date(0);
                l.setUTCSeconds(events[a].date);
                $("#timeline_table tr:last").after("<tr><td>" + l.toLocaleString() + "</td></tr>");
                $("#timeline_table td:last").after("<td><div class='country-icon Game Master'>&nbsp;</div> GM </td>");
                $("#timeline_table td:last").after("<td>" + events[a].content + "</td>")
            }
            $("#timeline_table").show()
        },
        complete: function(a, l) {
            $("#timeline_content").html("")
        },
        error: function(a, l, n) {
            $("#timeline_content").html("Error loading timeline")
        }
    })
});
