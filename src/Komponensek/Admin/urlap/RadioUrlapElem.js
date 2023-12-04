import { useState, useEffect } from "react";

export default function RadioUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    console.log(props.adat);
    console.log(urlapAdat);
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
            {props.obj.lista.map((elem) => {
                return (
                    <div className=" form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name={props.kulcs}
                            value={elem}
                            checked={urlapAdat === elem}
                            onChange={adatValt}
                        />
                        <label for={elem} className="form-check-label">
                            {" "}
                            {elem}{" "}
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
