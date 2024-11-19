import React from 'react'
import { useState } from 'react'
import"../Style Components/Position.css"



export const Position = () => {
    const desplazamiento=2;
    const [margin, setMargin]=useState({
        marginY:25,
        marginX:31
    });

    function moverArriba(){
        const newMargin={
                     ...margin,
                      marginY:margin.marginY-desplazamiento
                    };
        setMargin(newMargin);
    };

    function moverAbajo(){
        const newMargin={
                     ...margin,
                      marginY:margin.marginY+desplazamiento
                    };
        setMargin(newMargin);
    };

    function moverDerecha(){
        const newMargin={
                     ...margin,
                      marginX:margin.marginX+desplazamiento
                    };
        setMargin(newMargin);
    };

    function moverIzq(){
        const newMargin={
                     ...margin,
                      marginX:margin.marginX-desplazamiento
                    };
        setMargin(newMargin);
    };

    function ChangePosition(e){
        console.log(e.target.name)
        let position=document.getElementById('Img-Personal');
        switch(e.target.name){
            case "arriba":
                    moverArriba();
                    position.style.marginTop= margin.marginY+"%";
                 break;
            case "bajar":
                    moverAbajo();
                    position.style.marginTop= margin.marginY+"%";
                 break;
            case "izq":
                    moverIzq();
                    position.style.marginLeft=margin.marginX+"%"; 
                 break;
            case "der":
                    moverDerecha();
                    position.style.marginLeft=margin.marginX+"%";  
                 break; 
                  
           case "centrar":
                    position.style.margin="25% 31%"; 
                 break;

            case "sup-izq":
                    position.style.margin="25% 31%"; 
                 break;

            case "sup-der":
                    position.style.margin="25% 31%"; 
                 break;

            case "inf-izq":
                    position.style.margin="25% 31%"; 
                 break;

            case "inf-der":
                    position.style.margin="25% 31%"; 
                 break;
                
        }
    }
  return (
    <div className='Position-Container'>
                <h3>Posición</h3>
                <div className='Position'>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" src="/shirt-icon-supizq.svg" alt=""/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" src="/shirt-icon-supder.svg" alt=""/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" name="centrar" src="/shirt-icon-center.svg" alt="" onClick={ChangePosition}/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" src="/shirt-icon-infder.svg" alt=""/>
                    </button>
                    <button className="Btn-Pos-Icon" >
                        <img className="Pos-Icon" src="/shirt-icon-infizq.svg" alt=""/>
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
