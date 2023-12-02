import GombaFejlecSor from "./GombaFejlecSor";
import GombaSor from "./GombaSor";

function GombaTabla(props) {
    function torol(index) {
        console.log(index);
    }
    function szerkeszt(index) {
        console.log(index);
    }
    return (
        <div className="tablazat">
            <table class="table table-striped">
                <thead>
                    <GombaFejlecSor obj={props.lista[0]} />
                </thead>
                <tbody>
                    {props.lista.map((element, index) => {
                        return (
                           
                            <GombaSor
                                key={index}
                                obj={element}
                                torol={torol}
                                szerkeszt={szerkeszt}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GombaTabla;
