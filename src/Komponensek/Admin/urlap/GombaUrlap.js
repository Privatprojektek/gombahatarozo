import React, { useState } from "react";

export default function GombaUrlap(props) {
    let aktualisUrlapKomponens;
    const [urlapAdat, setUrlapAdat] = useState(props.adat);

    function submitGomb(event) {
        console.log(urlapAdat);
        event.preventDefault();
        props.submitGomb(urlapAdat);
    }
    function adatValt(event) {
        let a = urlapAdat;
        a[event.target.id] = event.target.value;
        console.log(a);
        setUrlapAdat(a);
    }
    return (
        <form onSubmit={submitGomb}>
            {Object.keys(props.leiro).map((kulcs,index) => {
                return (
                    <div class="mb-3 mt-3" key={index}>
                        <label for={kulcs} class="form-label">
                            {props.leiro[kulcs].megj}
                        </label>
                        <input
                            type={props.leiro[kulcs].tipus}
                            class="form-control"
                            id={kulcs}
                           
                            name={kulcs}
                            value={urlapAdat[kulcs]}
                            onChange={adatValt}
                        />
                    </div>
                );
            })}

            <input type="submit" class="btn btn-success" value="Küld" />
        </form>
    );
}
