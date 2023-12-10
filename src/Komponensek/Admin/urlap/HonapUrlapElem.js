import { useState, useEffect } from "react";

export default function HonapUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
    const honapLista = [
        {label:"január",stilus:{"backgroundColor":"rgb(250, 250, 250)","color":"darkred"}},
        {label:"február",stilus:{"backgroundColor":"rgb(250, 250, 250)","color":"darkred"}},
        {label:"március.",stilus:{"backgroundColor":"rgba(255, 225, 0, 0.583)","color":"darkred"}},
        {label:"április",stilus:{"backgroundColor":"rgba(255, 225, 0, 0.783)","color":"darkred"}},
        {label:"május",stilus:{"backgroundColor":"rgba(255, 225, 0, 0.983)","color":"darkred"}},
        {label:"június",stilus:{"backgroundColor":"rgba(118, 214, 27, 0.883)","color":"beige"}},
        {label:"július",stilus:{"backgroundColor":"rgba(118, 214, 27, 0.983)","color":"beige"}},
        {label:"augusztus",stilus:{"backgroundColor":"rgba(108, 198, 24, 0.883)","color":"beige"}},
        {label:"szeptember",stilus:{"backgroundColor":"rgba(231, 147, 36, 0.757)","color":"darkred"}},
        {label:"október",stilus:{"backgroundColor":"rgba(231, 147, 36, 0.857)","color":"darkred"}},
        {label:"november",stilus:{"backgroundColor":"rgba(231, 147, 36, 0.957)","color":"darkred"}},
        {label:"december",stilus:{"backgroundColor":"rgb(250, 250, 250)","color":"darkred"}},
    ];
    useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]);

    function adatValt(elem) {
        elem=+" "+elem+","
        let ujAdat = urlapAdat;
      
        let x=ujAdat.indexOf(elem)
        console.log(x)
        let hossz=elem.toString().length;
      
        if (x>=0){
           ujAdat= ujAdat.slice(0,x)+ujAdat.slice(x+hossz)
        
        }else {
            ujAdat += event.target.value+", ";
          
        }
       
      
        props.adatValt(ujAdat, props.kulcs);
    }
    return (
        <div >
            <p className=" col-lg-12 m-0  p-0">{props.obj.megj}</p>
            <div className=" m-3  row "> 
            {props.obj.lista.map((elem,index) => {
                
                return (
                    
                    <div className=" form-check   col-lg-4" style={honapLista[index].stilus} key={index}>
                        <input
                            type="checkbox"
                            className="form-check-input m-1"
                            name={props.kulcs}
                            value={elem}
                            checked={urlapAdat.includes(` ${elem},`.toString())}
                            onChange={()=>adatValt(elem)}
                        />
                        <label htmlFor={elem} className="form-check-label">
                            {honapLista[index].label}
                        </label>
                       
                    </div>
                  
                    
                );
            })}
          
        </div>
        </div>
    );
}
