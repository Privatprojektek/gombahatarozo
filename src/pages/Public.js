import { gombaAdat } from "../Modell/gombaadat.js";

import GombaOldal from "../Komponensek/Public/GombaOldal.js";
import GombaListaOldal from "../Komponensek/Public/GombaListaOldal.js";
import React, { useState } from "react";
import Szuro from "../Komponensek/Public/Szurok/Szuro.js";

export default function Public() {
    const [szuresiFeltetel, setszuresiFeltetel] = useState({});
    const [allapot, setAllapot] = useState(false);
    const [index, setIndex] = useState(0);
    const [szurtLista, setSzurtLista] = useState([...gombaAdat]);
    function kivalaszt(index) {
        setAllapot(true);
        setIndex(index);
    }
    function szuro(ertek, kulcs) {
        let szf = szuresiFeltetel;
        szf[kulcs] = ertek;
        setszuresiFeltetel({ ...szf });
        let ujlista = [];
        ujlista = gombaAdat.filter((elem) => {
            let felt = true;
            for (const key in szuresiFeltetel) {
                const szuresiErtek = szuresiFeltetel[key];
                if (szuresiErtek !== "Válassz...") {
                    if (key in ["ehetoseg", "vedett", "eletmod"]) {
                        felt = felt && elem[key] === szuresiErtek;
                    } else {
                        felt = felt && elem[key].indexOf(szuresiErtek) >= 0;
                        console.log(elem[key].indexOf(szuresiErtek));
                    }
                }
            }
            return felt;
        });

        console.log(ujlista);
        setSzurtLista(ujlista);
    }
    function bezar() {
        setAllapot(false);
    }
    function leptet(index) {
        index = index % gombaAdat.length;
        if (index < 0) {
            index = gombaAdat.length - 1;
        }
        setIndex(index);
        setAllapot(true);
    }
    return (
        <main className="Public container">
            <aside>
                <Szuro szuro={szuro} />
            </aside>
            <article>
                {allapot ? (
                    <GombaOldal
                        key={index}
                        gomba={gombaAdat[index]}
                        index={index}
                        bezar={bezar}
                        leptet={leptet}
                    />
                ) : (
                    <GombaListaOldal
                        lista={szurtLista}
                        kivalaszt={kivalaszt}
                        key={index}
                    />
                )}
            </article>
        </main>
    );
}
