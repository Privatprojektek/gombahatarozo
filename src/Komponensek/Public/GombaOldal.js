import "./GombaOldal.css";
import Galeria from "./Galeria";
import React, { useState } from "react";
function GombaOldal(props) {
    const [aktKep, setaktKep] = useState(props.gomba.src);
    function kivalaszt(element) {
        console.log(element);
        setaktKep(element);
    }
    function bezar() {
        props.bezar();
    }
    function elozo() {
        props.leptet(props.index - 1);
    }
    function kovetkezo() {
        props.leptet(props.index + 1);
    }
    return (
        <div className="gomba">
            <button className="bezar btn btn-danger" onClick={bezar}>
                X
            </button>
            <header>
                <span></span>
                <button className="elozo btn btn-success" onClick={elozo}>
                    Előző
                </button>

                <h3>{props.gomba.nev}</h3>
                <button
                    className="kovetkezo btn btn-success"
                    onClick={kovetkezo}
                >
                    Következő
                </button>
            </header>
            <section>
                <div className="kep">
                    <img src={aktKep} alt={props.gomba.alt} />
                </div>
                <Galeria lista={props.gomba.kepek} kivalaszt={kivalaszt} />
                </section>
                <p>{props.gomba.leiras}</p>
                <section>
                <ul>
                    <li>
                        <span>Kalap</span>
                        <span>{props.gomba.kalap}</span>
                    </li>
                    <li>
                        <span>Termőréteg</span>
                        <span>{props.gomba.termoreteg}</span>
                    </li>
                    <li>
                        <span>Tönk</span>
                        <span>{props.gomba.tonk}</span>
                    </li>
                    <li>
                        <span>Hús</span>
                        <span>{props.gomba.hus}</span>
                    </li>
                    <li>
                        <span>Termőidő</span>
                        <span>{props.gomba.termoido}</span>
                    </li>
                    <li>
                        <span>Kedvelt helyek</span>
                        <span>{props.gomba.hely}</span>
                    </li>
                    <li>
                        <span>Életmód</span>
                        <span>{props.gomba.eletmod}</span>
                    </li>
                    <li>
                        <span>Ehetőség</span>
                        <span>{props.gomba.ehetoseg}</span>
                    </li>
                    <li>
                        <span>Vedettség</span>
                        <span>{props.gomba.vedett}</span>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default GombaOldal;
