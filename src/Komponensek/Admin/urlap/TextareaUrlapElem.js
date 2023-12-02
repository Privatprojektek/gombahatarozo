import React, { useState } from "react";
export default function TextareaUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    function adatValt(event) {
        setUrlapAdat(event.target.value);
        console.log(urlapAdat, event.target.id);
        props.adatValt(urlapAdat, event.target.id);
    }
    return (
        <div class="mb-3 mt-3">
            <label for={props.kulcs} class="form-label">
                {props.obj.megj}
            </label>
            <textarea
                class="form-control"
                id={props.kulcs}
                name={props.kulcs}
                value={urlapAdat}
                onChange={adatValt}
            />
        </div>
    );
}
