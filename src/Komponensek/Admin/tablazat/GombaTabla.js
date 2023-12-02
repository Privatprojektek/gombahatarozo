import GombaFejlecSor from "./GombaFejlecSor";
import GombaSor from "./GombaSor";

function GombaTabla(props) {
    function torol(index) {
        console.log(index);
        props.torol(index)
    }
    function szerkeszt(index) {
        console.log(index);
        props.szerkeszt(index)
    }
    function kepmegjelenit(kepek, nev){
        props.kepmegjelenit(kepek, nev)
    }
    return (
        <div className="tablazat table-responsive">
            <table className="table table-striped">
                <thead>
                    <GombaFejlecSor obj={props.leirolista}  />
                </thead>
                <tbody>
                    {props.lista.map((element, index) => {
                        return (
                           
                            <GombaSor
                                key={index}
                                obj={element}
                                leiro={props.leirolista}
                                torol={torol}
                                szerkeszt={szerkeszt}
                                kepmegjelenit={kepmegjelenit}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GombaTabla;
