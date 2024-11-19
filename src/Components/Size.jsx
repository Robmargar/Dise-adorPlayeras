import React from 'react'
import "../Style Components/Size.css"


export const Size = () => {

    function ChangeSize(e){
        let sizeimg=document.getElementById('Img-Personal');
        switch(e.target.name){
            case "carta":
                    sizeimg.style.width=200+"px";
                break;
            case "media":
                    sizeimg.style.width=125+"px";
                break;
            case "cuarto":
                    sizeimg.style.width=70+"px";
                break;
        }
    };

    return (
        <section className='Size'>
                {/* Área de Tamaño */}
                <h3>Tamaño</h3>
                <div className='Size-Area'>
                    <button className='Btn-Size carta' name="carta" onClick={ChangeSize}> <br/><br/><br/>Carta
                    </button>
                    <button className='Btn-Size media' name="media" onClick={ChangeSize}><br/><br/>1/2 Carta
                    </button>
                    <button className='Btn-Size cuarto' name="cuarto" onClick={ChangeSize}><br/><br/>1/4 carta
                    </button>
                </div>
        </section>
  )
}
