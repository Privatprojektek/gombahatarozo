import { useState, useEffect } from "react";

export default function SelectUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
      useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]); 

    function adatValt(event) {
        const ujAdat=event.target.value        
        console.log(event.target.value, props.kulcs);
        console.log(urlapAdat);
        props.adatValt(ujAdat, props.kulcs);
    }
    return (
        <div className="mb-3 mt-3">
            <label htmlFor={props.kulcs} className="form-label">
                {props.obj.megj}     
            <select className="form-control"                           
                value={urlapAdat}
                onChange={adatValt}
            >
                {props.obj.lista.map((elem, index) => {
                    return <option value={elem} key={index}>{elem}</option>;
                })}
            </select>
            </label>
        </div>
    );
}
