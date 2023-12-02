import React, { useState } from "react";
export default function TextUrlapElem(props) {
    //const [urlapAdat, setUrlapAdat] = useState(props.adat);
    function adatValt(event) {
        //setUrlapAdat(event.target.value)
        console.log(event.target.value, event.target.id);
        props.adatValt(event.target.value, event.target.id);
    }
    return (
        <div class="mb-3 mt-3" >
            <label for={props.kulcs} class="form-label">
                {props.obj.megj}
            </label>
            <input
                type={props.obj.tipus}
                class="form-control"
                id={props.kulcs}
                name={props.kulcs}
                value={props.adat}
                onChange={adatValt}
            />
        </div>
    );
}
