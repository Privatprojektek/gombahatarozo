import React, { useState } from "react";
import TextUrlapElem from "./TextUrlapElem";

export default function GombaUrlap(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat); 
    const inputElemList=[]
    {Object.keys(props.leiro).forEach((kulcs, index) => {
       
        inputElemList.push( <TextUrlapElem
                key={index}
                kulcs={kulcs}
                obj={props.leiro[kulcs]}
                adatValt={adatValt}
                adat={urlapAdat[kulcs]}
            />)
      

    
    })}
    function submitGomb(event) {
        console.log(urlapAdat);
        event.preventDefault();
        props.submitGomb(urlapAdat);
    }
    function adatValt(adat, id) {
        let a = urlapAdat;
        a[id] = adat;
        console.log(a);
        setUrlapAdat(a);
    }
    return (
        <form onSubmit={submitGomb}>
            {Object.keys(props.leiro).map((kulcs, index) => {
                return (
                    <TextUrlapElem
                        key={index}
                        kulcs={kulcs}
                        obj={props.leiro[kulcs]}
                        adatValt={adatValt}
                        adat={urlapAdat[kulcs]}
                    />
                );

            
            })}

            <input type="submit" class="btn btn-success" value="Küld" />
        </form>
    );
}
