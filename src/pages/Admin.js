import GombaTabla from "../Komponensek/Admin/GombaTabla.js";
import { gombaAdat } from "../Modell/gombaadat.js";
import { gombaAdatLeiro } from "../Modell/gombaadat.js";
import "./Admin.css";
import Galeria from "../Komponensek/Admin/Galeria";

import React, { useState } from "react";

  

export default function Admin() {
  const [kepLista, setKepLista] = useState(gombaAdat[0].kepek);
  const [cim, setCim] = useState(gombaAdat[0].nev);
  const [rejtett, setRejtett] = useState(true);

    function kepmegjelenit(kepek, nev) {
     setKepLista(kepek)
     setCim(cim)
     setRejtett(false)
     document.getElementsByClassName("admingaleria")[0].classList.remove("elrejt")
    }

    return (
        <main className="Admin">
            <section>
                <Galeria lista={kepLista} cim={cim} rejtett={rejtett} />
            </section>

            <article>
                <GombaTabla lista={gombaAdat} leirolista={gombaAdatLeiro} kepmegjelenit={kepmegjelenit} />
            </article>
        </main>
    );
}
