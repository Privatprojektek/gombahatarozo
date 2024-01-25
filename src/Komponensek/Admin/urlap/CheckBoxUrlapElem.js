import { useState, useEffect } from "react";

export default function CheckBoxUrlapElem(props) {
    const [urlapAdat, setUrlapAdat] = useState(props.adat);
   
    console.log(props.adat);
    console.log(urlapAdat);
    useEffect(() => {
        setUrlapAdat(props.adat);
    }, [props.adat]);

    function adatValt(event, elem) {
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
       
       
        props.adatValt(ujAdat, props.kulcs);
    }
    return (
        <div >
            <p className=" col-lg-12 m-0  p-0">{props.obj.megj}</p>
            <div className=" m-3  row "> 
            {props.obj.lista.map((elem,index) => {
                
                return (
                    <div className=" form-check   col-lg-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name={props.kulcs}
                            id={elem}
                            value={elem}
                            checked={urlapAdat.includes(` ${elem},`.toString())}
                            onChange={()=>adatValt(elem)}
                        />
                        <label htmlFor={elem} className="form-check-label">
                            {elem}
                        </label>
                    </div>
                );
            })}
          
        </div>
        </div>
    );
}
