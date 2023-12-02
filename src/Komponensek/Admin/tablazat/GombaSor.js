import "./GombaSor.css"
function GombaSor(props) {
    function torol() {
        console.log(props.index);
        props.torol(props.index);
    }
    function szerkeszt() {
        console.log(props.index);
        props.szerkeszt(props.index);
    }
    function kepek() {
        
        props.kepmegjelenit(props.obj.kepek, props.obj.nev)
       
    }
    return (
        <tr className="sor">
            {Object.keys(props.leiro).map((kulcs, index) => {
                return props.leiro[kulcs].listazhato ? (
                    <td key={index}><span>{props.obj[kulcs]}</span></td>
                ) : (
                    ""
                );
            })}
            <td>
                <button
                    className="btn btn-success kepek"
                    onClick={() => kepek()}
                >
                    Képek
                </button>
            </td>
            <td>
                <button
                    className="btn szerkeszt "
                    onClick={() => szerkeszt()}
                >
                    ✏️
                </button>
            </td>
            <td>
                <button
                    className="btn torol "
                    onClick={() => torol()}
                >
                ❌
                </button>
            </td>
        </tr>
    );
}

export default GombaSor;
