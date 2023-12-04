import  { useState,useEffect, } from "react";

export default function TextUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    console.log(props.adat)
    console.log(urlapAdat)
    useEffect(() => {
        setUrlapAdat(props.adat);
      }, [props.adat]);
    
    function adatValt(event) {
        //setUrlapAdat(event.target.value)
        console.log(event.target.value, event.target.id);
        console.log(urlapAdat, event.target.id);
        props.adatValt(event.target.value, event.target.id);
    }
    return (
        <div className="mb-3 mt-3" >
            <label for={props.kulcs} className="form-label">
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
