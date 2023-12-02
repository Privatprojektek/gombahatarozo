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
        console.log(props.index);
       
    }
    return (
        <tr className="sor">
            {Object.keys(props.obj).map((kulcs, index) => {
                return (kulcs !== "src" && kulcs !== "kepek" ) ? (
                    <td key={index}>{props.obj[kulcs]}</td>
                ) : (
                    ""
                );
            })}
            <td>
                <button className="btn kepek" onClick={() => kepek()}>
                    Képek megtekintése
                </button>
            </td>
            <td>
                <button className="btn torol" onClick={() => torol()}>
                    Töröl
                </button>
            </td>
            <td>
                <button className="btn szerkeszt" onClick={() => szerkeszt()}>
                    Szerkeszt
                </button>
            </td>
        </tr>
    );
}

export default GombaSor;
