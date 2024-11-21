import React from 'react'
import { Position } from './Position';
import { Size } from './Size';
import { Color } from './Color';
import '../Style Components/Designer.css'
import { useState } from 'react';

export const Designer = () => {
    const[image,setImage]=useState(null)
    const[file,setFile]=useState();
 

  return (
    <section className='Contenedor'>
        {/* Área de Vista Previa */}
        <article className='Shirt-Area'>
            <h2>Diseño</h2> 
            <div className='Shirt-Rectangle'>
                <div id="shirt-back" className='Shirt'/>
               {image?
                <img id="Img-Personal" className="Img-mobil"src={image} alt="avatar" />
                :
                <img  className="Img-mobil" src="honor.svg" alt="avatar"/>
                }
               
            <img className='Shirt-mask' src="/shirt-mask5.png" alt="" />
            </div>
        </article>    
        {/* Área de Edición */}
        <section className='Edit-Area'>
            {/* {Área de subir imagenes} */}
                <h3>Subir imagen</h3>
            <form >
                <label className='Img-Select-Butn' onClick={()=>document.querySelector(".foto").click()} >Selecciona Imagen</label>
                <input type="file" className="foto" accept="image/*" hidden 
                onChange={({target:{files}})=>{
                    if(files){
                        setImage(URL.createObjectURL(files[0]));
                    }
                }}
                />
            </form>
            <Size/>
            <Color/>
            <Position/>
        </section>
    </section>
  )
}
