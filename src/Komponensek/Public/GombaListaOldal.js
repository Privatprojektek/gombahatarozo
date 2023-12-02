import "./GombaListaOldal.css";
function GombaListaOldal(props) {
    function kivalaszt(index) {
      
        props.kivalaszt(index);
    }
    return (
        <div className="galeria row">
            {props.lista.map((element, index) => {
                return (
                    <div className="card col-lg-3 col-md-4 col-sm-6"    onClick={() => kivalaszt(index)}>
                        <div
                            className="card-body "
                            key={index}
                         
                        >
                            <img src={element.src} alt={element.alt} className="rounded" />
                        </div>
                        <span className="nev card-footer">{element.nev}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default GombaListaOldal;
