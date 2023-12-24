import { useState } from "react";
export default function SzuroText(props) {
    let obj = props.obj;
    let kulcs = props.kulcs;
    const [urlapAdat, setUrlapAdat] = useState("");

    function adatValt(event) {
        const ujAdat = event.target.value;
        setUrlapAdat(ujAdat);
        props.szuro(event.target.value,props.kulcs);
    }
    return (
        <div className="mb-3 mt-3 col-sm-4">
            <label htmlFor={kulcs} className="form-label">
                {obj.megj}  </label>
                
            <input
                type="text"
                className="form-control"
                id={kulcs}
                name={kulcs}
                value={urlapAdat}
                placeholder={"pl: "+ props.placeholder}
                onChange={adatValt}
            />
        </div>
    );
}
