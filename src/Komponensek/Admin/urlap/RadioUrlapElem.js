import { useState, useEffect } from "react";

export default function RadioUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
      useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]);

    function adatValt(event) {
        const ujAdat = event.target.value;
        console.log(event.target.value, props.kulcs);
        console.log(urlapAdat);
        props.adatValt(ujAdat, props.kulcs);
    }
    return (
        <div className=" mb-3 mt-3">
            {props.obj.megj}
            {props.obj.lista.map((elem,index) => {
                return (
                    <div className=" form-check" key={index}>
                        <input
                            type="radio"
                            className="form-check-input"
                            name={props.kulcs}
                            value={elem}
                            checked={urlapAdat === elem}
                            onChange={adatValt}
                        />
                        <label htmlFor={elem} className="form-check-label">
                            {" "}
                            {elem}{" "}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
