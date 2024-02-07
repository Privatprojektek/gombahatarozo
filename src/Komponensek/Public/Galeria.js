import "./Galeria.css";
function Galeria(props) {
    function kivalaszt(element) {
        console.log(element);
        props.kivalaszt(element);
    }
    return (
        <div className="kisgaleria">
            {props.lista.map((element, index) => {
                return (
                    <div
                        className="kep rounded"
                        key={index}
                        onClick={() => kivalaszt(element)}
                    >
                        <img
                            src={element}
                            alt="gomba"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Galeria;
