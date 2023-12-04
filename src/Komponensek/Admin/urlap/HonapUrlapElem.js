import { useState, useEffect } from "react";

export default function HonapUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    const honapLista = [
        {label:"január",stilus:{"background-color":"rgb(250, 250, 250)","color":"darkred"}},
        {label:"február",stilus:{"background-color":"rgb(250, 250, 250)","color":"darkred"}},
        {label:"március.",stilus:{"background-color":"rgba(255, 225, 0, 0.583)","color":"darkred"}},
        {label:"április",stilus:{"background-color":"rgba(255, 225, 0, 0.783)","color":"darkred"}},
        {label:"május",stilus:{"background-color":"rgba(255, 225, 0, 0.983)","color":"darkred"}},
        {label:"június",stilus:{"background-color":"rgba(118, 214, 27, 0.883)","color":"beige"}},
        {label:"július",stilus:{"background-color":"rgba(118, 214, 27, 0.983)","color":"beige"}},
        {label:"augusztus",stilus:{"background-color":"rgba(108, 198, 24, 0.883)","color":"beige"}},
        {label:"szeptember",stilus:{"background-color":"rgba(231, 147, 36, 0.757)","color":"darkred"}},
        {label:"október",stilus:{"background-color":"rgba(231, 147, 36, 0.857)","color":"darkred"}},
        {label:"november",stilus:{"background-color":"rgba(231, 147, 36, 0.957)","color":"darkred"}},
        {label:"december",stilus:{"background-color":"rgb(250, 250, 250)","color":"darkred"}},
    ];
    console.log(props.adat);
    console.log(urlapAdat);
    useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]);

    function adatValt(elem) {
        elem=+" "+elem+","
        let ujAdat = urlapAdat;
        console.log(elem)
        let x=ujAdat.indexOf(elem)
        console.log(x)
        let hossz=elem.toString().length;
        console.log(hossz)
        if (x>=0){
           ujAdat= ujAdat.slice(0,x)+ujAdat.slice(x+hossz)
           console.log(ujAdat)
        }else {
            ujAdat += event.target.value+", ";
            console.log(ujAdat)
        }
       
        console.log(event.target.value, props.kulcs);
        console.log(urlapAdat);
        props.adatValt(ujAdat, props.kulcs);
    }
    return (
        <div >
            <p className=" col-lg-12 m-0  p-0">{props.obj.megj}</p>
            <div className=" m-3  row "> 
            {props.obj.lista.map((elem,index) => {
                
                return (
                    <>
                    <div className=" form-check   col-lg-4" style={honapLista[index].stilus}>
                        <input
                            type="checkbox"
                            className="form-check-input m-1"
                            name={props.kulcs}
                            value={elem}
                            checked={urlapAdat.includes(` ${elem},`.toString())}
                            onChange={()=>adatValt(elem)}
                        />
                        <label for={elem} className="form-check-label">
                            {honapLista[index].label}
                        </label>
                       
                    </div>
                     {(index%3===1)?<span></span>:""}
                     </>
                );
            })}
          
        </div>
        </div>
    );
}
