import  { useState,useEffect, } from "react";

export default function FileUrlapElem(props) {
   

    
    function adatValt(event) {            
        props.adatValt(event.target.value, event.target.id);
    }
    return (
        <div class="mb-3 mt-3" >
            <label for={props.kulcs} class="form-label">
                {props.obj.megj}
            </label>
            <input
                type={props.obj.tipus}
                className="form-control"
                id={props.kulcs}
                name={props.kulcs}
              
                onChange={adatValt}
            />
        </div>
    );
}
