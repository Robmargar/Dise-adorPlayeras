import React, { useEffect } from 'react'
import { useState } from 'react'
import"../Style Components/Position.css"



export const Position = () => {
    const desplazamiento=2;
    const [margin, setMargin]=useState({
        marginY:0,
        marginX:0
    });
    // en el eje x no debe pasar el rango entre 50% y -50%
    // en el eje y no debe pasar el rango entre 73% y 0%
    
    function moverArriba(){
        if(margin.marginY>5){
            const newMargin={
                         ...margin,
                          marginY:margin.marginY-desplazamiento
                        };
            setMargin(newMargin);
        }
    };

    function moverAbajo(){
        if(margin.marginY<75){
            const newMargin={
                ...margin,
                marginY:margin.marginY+desplazamiento
            };
            setMargin(newMargin);
        };
    };

    function moverDerecha(){
        if(margin.marginX<60){
            const newMargin={
                        ...margin,
                        marginX:margin.marginX+desplazamiento
                        };
            setMargin(newMargin);
        };
    };

    function moverIzq(){
        if(margin.marginX>-31){
        const newMargin={
                     ...margin,
                      marginX:margin.marginX-desplazamiento
                    };
        setMargin(newMargin);
        };
    };

    function mover(X,Y){
        const newMargin={
            marginX:X,
            marginY:Y
           };
        setMargin(newMargin);
        console.log(margin);
    };
 

    function ChangePosition(e){
        console.log(e.target.name)
        let position=document.getElementById('Img-Personal');
        switch(e.target.name){
            case "arriba":
                    moverArriba();
                    position.style.marginTop= margin.marginY+"%";
                    console.log(margin);
                    break;
            
            case "bajar":
                    moverAbajo();
                    position.style.marginTop= margin.marginY+"%";
                    console.log(margin);
                    break;
                    
            case "izq":
                    moverIzq();
                    position.style.marginLeft=margin.marginX+"%"; 
                    console.log(margin);
                 break;
            case "der":
                    moverDerecha();
                    position.style.marginLeft=margin.marginX+"%";  
                    console.log(margin);
                 break; 
                  
           case "centrar":
                    position.style.marginLeft="0%";  
                    position.style.marginTop="25%"; 
                    mover(0,25);
                 break;

            case "supizq":
                    position.style.marginLeft="-32%";  
                    position.style.marginTop="25%";
                    mover(-32,25);  
                 break;

            case "supder":
                position.style.marginLeft="34%";  
                position.style.marginTop="25%";  
                mover(34,25);
                 break;

            case "infizq":
                position.style.marginLeft="34%";  
                position.style.marginTop="78%";  
                mover(34,78); 
                break;

            case "infder":
                position.style.marginLeft="-32%";  
                position.style.marginTop="78%"; 
                mover(-32,78);
                break;
                
        }
    }
  return (
    <div className='Position-Container'>
                <h3>Posición</h3>
                <div className='Position'>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="supizq"
                        src="/shirt-icon-supizq.svg" alt=""
                        onClick={ChangePosition}/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="supder" 
                        src="/shirt-icon-supder.svg" alt=""
                        onClick={ChangePosition}/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="centrar" 
                        src="/shirt-icon-center.svg" alt="" 
                        onClick={ChangePosition}/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="infizq"
                        src="/shirt-icon-infder.svg" alt=""
                        onClick={ChangePosition}/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="infder"
                        src="/shirt-icon-infizq.svg" alt=""
                        onClick={ChangePosition}/>
                    </button>
                </div>

                <div className='Arrows'>
                    <button  className="Btn-Pos btn-Pos-3"  >
                        <img className='Img-Arrow' name="arriba" src="/arrows-up.svg" alt="" onClick={ChangePosition}/>
                    </button>
                    <button className='Btn-Pos btn-Pos-2'>
                        <img className='Img-Arrow' name="izq" src="/arrows-left.svg" alt="" onClick={ChangePosition}/>
                    </button>
                    <button className='Btn-Pos'>
                        <img className='Img-Arrow' name="centrar" src="/a-center-user.svg" alt="" onClick={ChangePosition}/>
                    </button>
                    <button className='Btn-Pos'>
                        <img className='Img-Arrow' name="der" src="/arrows-right.svg" alt="" onClick={ChangePosition} />
                    </button>
                    <button className='Btn-Pos btn-Pos-3' >
                        <img className='Img-Arrow' name="bajar" src="/arrows-down.svg" alt="" onClick={ChangePosition} />
                    </button>
                </div>
    </div>
  )
}
