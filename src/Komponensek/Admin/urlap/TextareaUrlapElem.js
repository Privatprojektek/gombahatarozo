import React, { useState, useEffect } from "react";
export default function TextareaUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    console.log(props.adat);
    console.log(urlapAdat);
    useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]);

    function adatValt(event) {
        props.adatValt(event.target.value, event.target.id);
    }
    return (
        <div class="mb-3 mt-3">
            <label for={props.kulcs} className="form-label">
                {props.obj.megj}
            </label>
            <textarea
                className="form-control"
                id={props.kulcs}
                name={props.kulcs}
                value={urlapAdat}
                onChange={adatValt}
            />
        </div>
    );
}
