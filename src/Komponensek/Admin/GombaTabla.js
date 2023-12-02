import GombaFejlecSor from "./GombaFejlecSor";
import GombaSor from "./GombaSor";

function GombaTabla(props) {
    function torol(index) {
        console.log(index);
    }
    function szerkeszt(index) {
        console.log(index);
    }
    function kepmegjelenit(kepek, nev){
        props.kepmegjelenit(kepek, nev)
    }
    return (
        <div className="tablazat">
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
