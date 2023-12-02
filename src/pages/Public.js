import { gombaAdat } from "../Modell/gombaadat.js";

import GombaOldal from "../Komponensek/Public/GombaOldal.js";
import GombaListaOldal from "../Komponensek/Public/GombaListaOldal.js";
import React, { useState } from "react";
import Szuro from "../Komponensek/Public/Szuro.js";

export default function Public() {
    const [allapot, setAllapot] = useState(false);
    const [index, setIndex] = useState(0);
    function kivalaszt(index) {
        setAllapot(true);
        setIndex(index);
    }
    function bezar() {
        setAllapot(false);
    }
    function leptet(index) {
        index = index % gombaAdat.length;
        if (index<0){
            index=gombaAdat.length-1
        }
        setIndex(index);
        setAllapot(true);
    }
    return (
        <main className="Public">
        <aside>
        <Szuro />
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
                    <GombaListaOldal lista={gombaAdat} kivalaszt={kivalaszt} />
                )}
            </article>
        </main>
    );
}
