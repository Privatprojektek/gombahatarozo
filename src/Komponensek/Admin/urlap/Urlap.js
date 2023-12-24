import { useState, useEffect } from "react";
import TextUrlapElem from "./TextUrlapElem";
import TextareaUrlapElem from "./TextareaUrlapElem";
import FileUrlapElem from "./FileUrlapElem";
import SelectUrlapElem from "./SelectUrlapElem";
import RadioUrlapElem from "./RadioUrlapElem";
import CheckBoxUrlapElem from "./CheckBoxUrlapElem";
import HonapUrlapElem from "./HonapUrlapElem";

export default function Urlap({ adat, leiro, submitGomb }) {
    const [urlapAdat, setUrlapAdat] = useState(adat);

    console.log(urlapAdat);
    useEffect(() => {
        setUrlapAdat(adat);
    }, [adat]);

    const inputElemList = [];

    Object.keys(leiro).forEach((kulcs, index) => {
        let tipus = leiro[kulcs].tipus;
        console.log(urlapAdat[kulcs]);
        let elem;
        switch (tipus) {
            case "text":
                elem = (
                    <TextUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "file":
                elem = (
                    <FileUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "select":
                elem = (
                    <SelectUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "radio":
                elem = (
                    <RadioUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "checkbox":
                elem = (
                    <CheckBoxUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "honap":
                elem = (
                    <HonapUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            case "textarea":
                elem = (
                    <TextareaUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );
                break;
            default:
                /*  elem = (
                        <TextUrlapElem
                            key={index}
                            kulcs={kulcs}
                            obj={leiro[kulcs]}
                            adatValt={adatValt}
                            adat={adat[kulcs]}
                        />
                    );  */
                break;
        }

        inputElemList.push(elem);
    });

    function submitGomb1(event) {
        //event.preventDefault();
        console.log(urlapAdat);
        submitGomb(urlapAdat);
        let a = {};
        setUrlapAdat({
            ...a,
        });
    }
    function adatValt(adat, id) {
        let a = urlapAdat;
        a[id] = adat;
        console.log(a);
        setUrlapAdat({
            ...a,
        });
        console.log(urlapAdat);
    }
    return (
        <form onSubmit={submitGomb1}>
            {inputElemList.map((elem) => {
                return elem;
            })}

            <input type="submit" className="btn btn-success" value="Küld" />
        </form>
    );
}
