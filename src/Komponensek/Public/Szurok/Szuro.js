import { gombaAdatLeiro } from "../../../Modell/gombaadat";

import SzuroSelect from "./szuroSelect";
import SzuroText from "./szuroText";
export default function Szuro(props) {
    if (gombaAdatLeiro.vedett.lista[0] !== "Válassz...") {
        gombaAdatLeiro.vedett.lista.unshift("Válassz...");
    }
    if (gombaAdatLeiro.ehetoseg.lista[0] !== "Válassz...") {
        gombaAdatLeiro.ehetoseg.lista.unshift("Válassz...");
    }

    function szuro(ertek, kulcs) {
        props.szuro(ertek, kulcs);
    }

    return (
        <article className="szuro">
            Szűrők
            <div className="row">
                <SzuroText
                    obj={gombaAdatLeiro.nev}
                    kulcs="nev"
                    placeholder="gomba neve"
                    szuro={szuro}
                />
                <SzuroSelect
                    obj={gombaAdatLeiro.eletmod}
                    kulcs="eletmod"
                    szuro={szuro}
                />
                <SzuroSelect
                    obj={gombaAdatLeiro.vedett}
                    kulcs="vedett"
                    szuro={szuro}
                />
                <SzuroSelect
                    obj={gombaAdatLeiro.ehetoseg}
                    kulcs="ehetoseg"
                    szuro={szuro}
                />
            </div>
        </article>
    );
}
