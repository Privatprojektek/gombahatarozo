import "./GombaOldal.css";
import Galeria from "./Galeria";
import React, { useState } from "react";
function GombaOldal(props) {
    const termoidoLista = props.gomba.termoido.split(",");
   /*  console.log(props.gomba.termoido); */

    const honapLista = [
        {
            label: "január",
            stilus: {
                "backgroundColor": "rgb(250, 250, 250)",
                color: "darkred",
            },
        },
        {
            label: "február",
            stilus: {
                "backgroundColor": "rgb(250, 250, 250)",
                color: "darkred",
            },
        },
        {
            label: "március",
            stilus: {
                "backgroundColor": "rgba(255, 225, 0, 0.583)",
                color: "darkred",
            },
        },
        {
            label: "április",
            stilus: {
                "backgroundColor": "rgba(255, 225, 0, 0.783)",
                color: "darkred",
            },
        },
        {
            label: "május",
            stilus: {
                "backgroundColor": "rgba(255, 225, 0, 0.983)",
                color: "darkred",
            },
        },
        {
            label: "június",
            stilus: {
                "backgroundColor": "rgba(118, 214, 27, 0.883)",
                color: "beige",
            },
        },
        {
            label: "július",
            stilus: {
                "backgroundColor": "rgba(118, 214, 27, 0.983)",
                color: "beige",
            },
        },
        {
            label: "augusztus",
            stilus: {
                "backgroundColor": "rgba(108, 198, 24, 0.883)",
                color: "beige",
            },
        },
        {
            label: "szeptember",
            stilus: {
                "backgroundColor": "rgba(231, 147, 36, 0.757)",
                color: "darkred",
            },
        },
        {
            label: "október",
            stilus: {
                "backgroundColor": "rgba(231, 147, 36, 0.857)",
                color: "darkred",
            },
        },
        {
            label: "november",
            stilus: {
                "backgroundColor": "rgba(231, 147, 36, 0.957)",
                color: "darkred",
            },
        },
        {
            label: "december",
            stilus: {
                "backgroundColor": "rgb(250, 250, 250)",
                color: "darkred",
            },
        },
    ];
   /*  console.log(honapLista[Number(termoidoLista[0])].label); */
    termoidoLista.forEach((elem, index) => {
        /* console.log(index);
        console.log(elem);
        console.log(termoidoLista[index]);
        console.log(honapLista[Number(termoidoLista[4]) - 1]); */
    });
    const [aktKep, setaktKep] = useState(props.gomba.src);

    return (
        <div className="gomba arnyek container">
            <button
                className="bezar btn btn-danger"
                onClick={() => {
                    props.bezar();
                }}
            >
                X
            </button>
            <header>
                <button
                    className="elozo btn btn-success "
                    onClick={() => {
                        props.leptet(props.index - 1);
                    }}
                >
                    &lt;
                </button>

                <h3>{props.gomba.nev}</h3>
                <button
                    className="kovetkezo btn btn-success "
                    onClick={() => {
                        props.leptet(props.index + 1);
                    }}
                >
                    &gt;
                </button>
            </header>
            <section>
                <div className="kep">
                    <img src={aktKep} alt={props.gomba.alt} />
                </div>
                <Galeria
                    lista={props.gomba.kepek}
                    kivalaszt={(element) => {
                        setaktKep(element);
                    }}
                />
            </section>
            <p>{props.gomba.leiras}</p>
            <section>
                <ul>
                   {/*  {Object.keys(props.gomba).map((kulcs) => {
                        return   !(kulcs==="src" || kulcs==="kepek" || kulcs==="termoido")?(<li><span>{kulcs}</span><span>{props.gomba[kulcs]}</span></li>):(
                            ""
                        );
                
                    })} */}
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
                        <span>Gallér</span>
                        <span>{props.gomba.galler}</span>
                    </li>
                    <li>
                        <span>Hús</span>
                        <span>{props.gomba.hus}</span>
                    </li>
                    <li>
                        <span>Termőidő</span>
                        <div className="row">
                            {termoidoLista.map((elem, index) => {
                                return (
                                    <span
                                        className="col-sm-6 col-md-4 col-lg-2"
                                        style={
                                            elem === "" || elem === " "
                                                ? {}
                                                : honapLista[
                                                      Number(
                                                          termoidoLista[index]
                                                      ) - 1
                                                  ].stilus
                                        }
                                    >
                                        {elem === "" || elem === " "
                                            ? ""
                                            : honapLista[
                                                  Number(termoidoLista[index]) -
                                                      1
                                              ].label}
                                    </span>
                                );
                            })}
                        </div>
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
            <footer>
                <button
                    className="elozo btn btn-success "
                    onClick={() => {
                        props.leptet(props.index - 1);
                    }}
                >
                    &lt;
                </button>

                <p>{props.gomba.nev}</p>
                <button
                    className="kovetkezo btn btn-success "
                    onClick={() => {
                        props.leptet(props.index + 1);
                    }}
                >
                    &gt;
                </button>
            </footer>
        </div>
    );
}

export default GombaOldal;
