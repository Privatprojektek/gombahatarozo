import React, { useState } from "react";

export default function Urlap(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    function adatValt(event) {
        setUrlapAdat(event.target.value);
        console.log(urlapAdat, event.target.id);
        // props.adatValt(urlapAdat, event.target.id);
    }
    function submitGomb(event) {
        console.log(urlapAdat);
        event.preventDefault();
        props.submitGomb(urlapAdat);
    }
    return (
        <>
            <header>
                <h2>Kérem adja meg az adatokat! </h2>
                <button className="bezar btn btn-danger" onClick={()=> {
                    document.getElementById("urlap").classList.add("elrejt");
                }}>
                    X
                </button>
            </header>
            <form onSubmit={submitGomb}>
                {Object.keys(props.leiro).map((kulcs, index) => {
                    return (
                        <div class="mb-3 mt-3" key={index}>
                            <label for={kulcs} class="form-label">
                                {props.leiro[kulcs].megj}
                            </label>
                            <input
                                type={"text" /* props.leiro[kulcs].tipus */}
                                class="form-control"
                                id={kulcs}
                                name={kulcs}
                                value={props.adat[kulcs]}
                                onChange={adatValt}
                            />
                        </div>
                    );
                })}

                <input type="submit" class="btn btn-success" value="Küld" />
            </form>
        </>
    );
}
