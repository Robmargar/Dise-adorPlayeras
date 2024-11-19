import React from 'react'
import "../Style Components/Color.css"
export const Color = () => {
    function ChangeColor(e){
        let background=document.getElementById('shirt-back');
        console.log(e.target.name)
        background.style.backgroundColor="rgb"+e.target.name; 
    }
  return (
    
    <div>
        <h3>Color</h3>
        <div className='ColorPalet'>
            <button name="(251, 252, 252)" className='Btn-color white' onClick={ChangeColor}/>
            <button name="(88, 88, 138)" className='Btn-color blue' onClick={ChangeColor}/>
            <button name="(154, 0, 0)" className='Btn-color red' onClick={ChangeColor}/>
            <button name="(0, 128, 0)" className='Btn-color green' onClick={ChangeColor}/>
            <button name= "(209, 206, 8)" className='Btn-color yellow' onClick={ChangeColor}/>                
            <button name= "(36, 36, 36)" className='Btn-color black' onClick={ChangeColor}/>                
        </div>
    </div>
   )
}
