import "./Galeria.css";
export default function Galeria(props) {
   
    function bezar() {
        document
            .getElementsByClassName("admingaleria")[0]
            .classList.add("elrejt");
    }
    return (
        <div className="admingaleria row arnyek elrejt  felugro" >
            <header>
                <h2>{props.cim}</h2>
                <button className="bezar btn btn-danger" onClick={bezar}>
                    X
                </button>
            </header>
            <article className=" row  ">
                {props.lista.map((element, index) => {
                    return (
                        <div
                            className="kepdiv g-1 col-sm-4 col-md-3 col-lg-2"
                            key={index}
                        >
                            <img
                                className="img-thumbnail"
                                src={process.env.PUBLIC_URL + "/" + element}
                                alt="gomba"
                            />
                        </div>
                    );
                })}
            </article>
        </div>
    );
}
