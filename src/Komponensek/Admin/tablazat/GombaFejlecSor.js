function GombaFejlecSor(props) {
    return (
        <tr className="sor">
            {Object.keys(props.obj).map((kulcs, index) => {
                return   props.obj[kulcs].listazhato ? (
                    <th key={index}><span>{props.obj[kulcs].megj}</span></th>
                ) : (
                    ""
                );;
            })}
            <th></th>
            <th></th>
            <th></th>
        </tr>
    );
}

export default GombaFejlecSor;
