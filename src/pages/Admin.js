import GombaTabla from "../Komponensek/Admin/tablazat/GombaTabla.js";
import { gombaAdat } from "../Modell/gombaadat.js";
import { gombaAdatLeiro } from "../Modell/gombaadat.js";
import "./Admin.css";
import Galeria from "../Komponensek/Admin/Galeria";

import React, { useState } from "react";
import GombaUrlap from "../Komponensek/Admin/urlap/GombaUrlap.js";

export default function Admin() {
    const [kepLista, setKepLista] = useState(gombaAdat[0].kepek);
    const [cim, setCim] = useState(gombaAdat[0].nev);
    const [urlapAdat, seturlapAdat] = useState({});

    function kepmegjelenit(kepek, nev) {
        setKepLista(kepek);
        setCim(nev);

        document
            .getElementsByClassName("admingaleria")[0]
            .classList.remove("elrejt");
    }
    function submitGomb(adat) {
        console.log(adat);
    }
    function szerkeszt(adat){
        console.log(adat)
        seturlapAdat(adat)
    }
    function torol(adat){
        console.log(adat)
        seturlapAdat(adat)
    }
    return (
        <main className="Admin">
            <section>
                <GombaUrlap
                    lista={gombaAdatLeiro}
                    adat={urlapAdat}
                    submitGomb={submitGomb}
                />
            </section>
            <section>
                <Galeria lista={kepLista} cim={cim} />
            </section>

            <article>
                <GombaTabla
                    lista={gombaAdat}
                    leirolista={gombaAdatLeiro}
                    kepmegjelenit={kepmegjelenit}
                    torol={torol}
                    szerkeszt={szerkeszt}
                />
            </article>
        </main>
    );
}
