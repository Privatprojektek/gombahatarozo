export const gombaAdat = [
    {
        nev: "Óriás csiperke",
        src: "kepek/oriascsiperke/0.jpeg",
        leiras: "Látványos, nagytermetű gomba, kellemesen mandulaillatú. ehető, Kellemes ízű, de kímélendő, ritka faj. Ha megtalálnánk, hagyjuk termőhelyén!",
        kalap: "Halvány okkeresbarna vagy krémszínű alapon koncentrikusan elhelyezkedő, sötétbarna pikkelyekkel sűrűn borított; közepén sötétbarna; szélén nyomásra sárguló; fiatalon kissé szögletesen félgömb alakú, majd domború, kiterülő kalap.",
        termoreteg:
            "Sűrű, szabadon álló, csak fiatalon fehéres, később szürkés, sötétbarnás lemezek",
        tonk: "A gallér alatt pelyhes, pikkelyes, fehéres, nagyra növő tönk.",
        galler: "Fejlett, hártyás, lelógó, nagy gallér ",
        hus: "Kellemes mandula- vagy ánizsillatú; vastag, fehéres, vágásra többnyire nem színeződő vagy csak nagyon enyhén sárguló hús.",
        termoido: " 6, 7, 8, 9, 10,",
        hely: "Lomb- és fenyőerdőben, főként humuszos talajon, erdőszélen, erdei utak mentén nő.",
        eletmod: "talajlakó szaprotróf",
        ehetoseg:
            "ehető, finom gomba",
        vedett: "ritka, védett gomba",
        kepek: [
            "kepek/oriascsiperke/0.jpeg",
            "kepek/oriascsiperke/1.jpeg",
            "kepek/oriascsiperke/2.jpeg",
            "kepek/oriascsiperke/3.jpeg",
            "kepek/oriascsiperke/0.jpeg",
            "kepek/oriascsiperke/1.jpeg",
            "kepek/oriascsiperke/2.jpeg",
            "kepek/oriascsiperke/3.jpeg",
        ],
    },
    {
        nev: "Nagy őzlábgomba",
        src: "kepek/nagyozlab/0.jpeg",
        leiras: "Látványos, nagytermetű gomba, kellemesen mogyoró illatú és ízű.",
        kalap: "Fehéres alapszínű kalapját koncentrikus, durva, barna pikkelyek borítják, míg a kalap közepe barna. A tönkkel együtt fiatalon dobverőszerű, később esernyő formájú.",
        termoreteg:
            "Fehér színű, sűrűn és szabadon álló lemezei a tönk körül gyűrűszerűen összenőttek (kollárium).",
        tonk: "Tönkje kígyóbőrszerűen mintázott, hosszú, szívós, üreges, alja gumós. A kalapból csuklósan kifordítható.",
        galler: "Fejlett, kétrétegű, pelyhes, eltolható gallér.",
        hus: "Mogyoróillatú, nem színeződő húsa a kalapban puha, a tönkben szívós, fás állagú.",
        termoido: " 5, 6, 7, 8, 9, 10, 11",
        hely: "Lomberdőben, fenyvesben és füves területeken is előfordul; gyakran a ligetes, világos részeken, illetve erdőszéleken. Gyakran található például tölgy, bükk, akác, kéttűs fenyők és/vagy lucfenyő alkotta erdőkben, de erdőn kívül is.",
        eletmod: "talajlakó szaprotróf",
        ehetoseg: "ehető, kellemes ízű",
        vedett: "nem védett",
        kepek: ["kepek/nagyozlab/0.jpeg", "kepek/nagyozlab/1.jpeg"],
    },
];
export const gombaAdatLeiro = {
    nev: {
        megj: "Név",
        tipus: "text",
        listazhato: true,
    },
    src: {
        megj: "Kiemelet kép",
        tipus: "file",
        listazhato: false,
    },
    leiras: {
        megj: "Leírás",
        tipus: "textarea",
        listazhato: true,
    },
    kalap: {
        megj: "Kalap",
        tipus: "textarea",
        listazhato: true,
    },
    termoreteg: {
        megj: "Termőréteg",
        tipus: "textarea",
        listazhato: true,
    },
    tonk: {
        megj: "Tönk",
        tipus: "textarea",
        listazhato: true,
    },
    galler: {
        megj: "Gallér",
        tipus: "textarea",
        listazhato: true,
    },
    hus: {
        megj: "Hús",
        tipus: "textarea",
        listazhato: true,
    },

    termoido: {
        megj: "Termőidő",
        tipus: "honap",
        lista:[1,2,3,4,5,6,7,8,9,10,11,12],
        listazhato: true,
    },
    hely: {
        megj: "Élőhely",
        tipus: "textarea",
        listazhato: true,
    },
    eletmod: {
        megj: "Életmód",
        tipus: "select",
        lista:["Válassz...","talajlakó szaprotróf","korhadékbontó szaprotróf","gyökérkapcsolt (mikorrhizás)","parazita"],
        listazhato: true,
    },
    ehetoseg: {
        megj: "Ehetőség",
        tipus: "radio",
        lista:["ehető, finom gomba","ehető","feltételesen ehető","nem ehető","mérgező","halálosan mérgező"],
        listazhato: true,
    },
    vedett: {
        megj: "Védettség",
        tipus: "radio",
        lista:["nem védett","védett","ritka, védett gomba"],
        listazhato: true,
    },
    kepek: {
        megj: "Képek",
        tipus: "filelist",
        listazhato: false,
    },
};
