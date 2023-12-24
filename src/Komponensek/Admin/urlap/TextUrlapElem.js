import  { useState,useEffect, } from "react";

export default function TextUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
     useEffect(() => {
        setUrlapAdat(props.adat);
      }, [props.adat]);
    
    function adatValt(event) {
        //setUrlapAdat(event.target.value)
      
        props.adatValt(event.target.value, event.target.id);
    }
    return (
        <div className="mb-3 mt-3" >
            <label htmlFor={props.kulcs} className="form-label">
                {props.obj.megj}
            </label>
            <input
                type={props.obj.tipus}
                className="form-control"
                id={props.kulcs}
                name={props.kulcs}
                value={urlapAdat}
                onChange={adatValt}
            />
        </div>
    );
}
