function GombaFejlecSor(props) {
    return (
        <tr className="sor">
            {Object.keys(props.obj).map((kulcs, index) => {
                return <th>{kulcs}</th>;
            })}
            <th></th>
            <th></th>
        </tr>
    );
}

export default GombaFejlecSor;
