import React, { useState } from "react";
import TextUrlapElem from "./TextUrlapElem";
import TextareaUrlapElem from "./TextareaUrlapElem";

export default function GombaUrlap(props) {
    const [urlapAdat, setUrlapAdat] = useState({...props.adat});
    console.log(props.adat)
    console.log(urlapAdat)
    //setUrlapAdat(props.adat)
    const inputElemList = [];
    {
        console.log(urlapAdat);
        Object.keys(props.leiro).forEach((kulcs, index) => {
            let tipus = props.leiro[kulcs].tipus;
            let elem;
            console.log(props.adat);
            console.log(props.adat["nev"]);
            switch (tipus) {
                case "text":
                    elem = (
                        <TextUrlapElem
                            key={index}
                            kulcs={kulcs}
                            obj={props.leiro[kulcs]}
                            adatValt={adatValt}
                            /* adat={urlapAdat[kulcs]} */
                            adat={props.adat[kulcs]}
                        />
                    );
                    break;
                case "textarea":
                    elem = (
                        <TextareaUrlapElem
                            key={index}
                            kulcs={kulcs}
                            obj={props.leiro[kulcs]}
                            adatValt={adatValt}
                            adat={props.adat[kulcs]}
                        />
                    );
                    break;
                default:
                    /*  elem = (
                        <TextUrlapElem
                            key={index}
                            kulcs={kulcs}
                            obj={props.leiro[kulcs]}
                            adatValt={adatValt}
                            adat={props.adat[kulcs]}
                        />
                    );  */
                    break;
            }

            inputElemList.push(elem);
        });
    }
    function submitGomb(event) {
        console.log(urlapAdat);
        event.preventDefault();
        props.submitGomb(urlapAdat);
    }
    function adatValt(adat, id) {
        let a = urlapAdat;
        a[id] = adat;
        console.log(a);
        /*  setUrlapAdat(a); */

        setUrlapAdat({
            ...urlapAdat,
            a,
        });
        console.log(urlapAdat);
    }
    return (
        <form onSubmit={submitGomb}>
            {inputElemList.map((elem) => {
                return elem;
            })}

            <input type="submit" class="btn btn-success" value="Küld" />
        </form>
    );
}
