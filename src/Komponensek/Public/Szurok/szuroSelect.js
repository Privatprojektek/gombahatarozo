import { useState } from "react";
export default function SzuroSelect(props) {
    let obj = props.obj;
    let kulcs = props.kulcs;
    const [urlapAdat, setUrlapAdat] = useState(obj.lista[0]);

    function adatValt(event) {
        const ujAdat = event.target.value;
        setUrlapAdat(ujAdat);
        props.szuro(event.target.value, props.kulcs);
    }
    return (
        <div className="mb-3 mt-3 col-sm-4">
            <label htmlFor={kulcs} className="form-label">
                {obj.megj}{" "}
            </label>
            <select
                className="form-control"
                value={urlapAdat}
                id={kulcs}
                onChange={adatValt}
            >
                {obj.lista.map((elem, index) => {
                    return (
                        <option value={elem} key={index}>
                            {elem}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}
