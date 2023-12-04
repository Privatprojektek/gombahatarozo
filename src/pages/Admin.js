import GombaTabla from "../Komponensek/Admin/tablazat/GombaTabla.js";
import { gombaAdat } from "../Modell/gombaadat.js";
import { gombaAdatLeiro } from "../Modell/gombaadat.js";
import "./Admin.css";
import Galeria from "../Komponensek/Admin/Galeria";

import { useState, /* useEffect */ } from "react";
import Urlap from "../Komponensek/Admin/urlap/Urlap.js";

export default function Admin() {
    const [kepLista, setKepLista] = useState(gombaAdat[0].kepek);
    const [cim, setCim] = useState(gombaAdat[0].nev);

    const [urlapAdat, setUrlapAdat] = useState(initUresUrlap());
   
    function initUresUrlap(){
        let a={}
        Object.keys(gombaAdatLeiro).forEach((kulcs, index) => {
            a[kulcs]=""
         })
         return {...a}
    }
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

    function szerkeszt(index) {
        console.log(gombaAdat[index]);
        setUrlapAdat({ ...gombaAdat[index] });
        console.log(urlapAdat);
        document.getElementById("urlap").classList.remove("elrejt");
    }
    function torol(adat) {
        console.log(adat);
    }
    function bezar() {
        document.getElementById("urlap").classList.add("elrejt");
    }
    function uj() {       
        setUrlapAdat(initUresUrlap());
        console.log(urlapAdat);
        document.getElementById("urlap").classList.remove("elrejt");
    }
    return (
        <main className="Admin">
            <section>
                <button className="uj btn btn-success" onClick={uj}>
                    🍄 Új gomba rögzítése
                </button>
            </section>
            <section id="urlap" className="arnyek felugro elrejt">
                <header>
                    {" "}
                    <h2>Kérem adja meg az adatokat! </h2>{" "}
                    <button className="bezar btn btn-danger" onClick={bezar}>
                        X
                    </button>
                </header>
                <Urlap
                    leiro={gombaAdatLeiro}
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
