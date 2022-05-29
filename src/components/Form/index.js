import React, { useState } from 'react';
import './style.css'

 function Form (props){
     const [formText,setFormText] = useState("")
     const [formPriority,setFormPriority] = useState
     ("high")
     const handleFormSubmit = e =>{
         e.preventDefault();
         const newTodo = {
             text:formText,
             priority:formPriority
         }
         props.addTodo(newTodo)
         setFormText("");
         setFormPriority("low");
     }
    return (
        <form className='Form'onSubmit={handleFormSubmit}>
           <input placeholder='text' name='text' type='text' value={formText} onChange={(e)=>(setFormText(e.target.value))}></input>
           <select name='priority'value={formPriority} onChange={(e)=>(setFormPriority(e.target.value))}>
               <option value='high'>high pri</option>
               <option value='med'>med pri</option>
               <option value='low'>low pri</option>
           </select>
           <button>Add new item!</button>
        </form>
    )
}
export default Form;