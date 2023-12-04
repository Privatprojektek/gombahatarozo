import { useState,useEffect } from "react";
import TextUrlapElem from "./TextUrlapElem";
import TextareaUrlapElem from "./TextareaUrlapElem";

export default function GombaUrlap({ adat, leiro, submitGomb }) {
    const [urlapAdat, setUrlapAdat] = useState(JSON.parse(JSON.stringify(adat)));
    console.log(adat);
    console.log(urlapAdat);
    //setUrlapAdat(adat)

    useEffect(() => {
        setUrlapAdat(adat);
      }, [adat]);
   
    const inputElemList = [];
    {
        Object.keys(leiro).forEach((kulcs, index) => {
            let tipus = leiro[kulcs].tipus;
            let elem;
            switch (tipus) {
                case "text":
                    console.log(urlapAdat[kulcs])
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
    }
    function submitGomb(event) {
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
        <form onSubmit={submitGomb}>
            {inputElemList.map((elem) => {
                return elem;
            })}

            <input type="submit" class="btn btn-success" value="Küld" />
        </form>
    );
}
