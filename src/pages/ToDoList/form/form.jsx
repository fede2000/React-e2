import React from 'react';
import { InputForm, SubmitForm } from './formStyled';
export const Formulario = (props) => {
    // desestructuracion
    const {tarea, handleSubmit, handleChange} = props

    return(
        <form onSubmit={handleSubmit}>
            <InputForm type="text" placeholder="Introduce la tarea" onChange={handleChange}
            value= {tarea}/> 
            
            <SubmitForm type="submit" value="AGREGAR" onClick={handleSubmit}/>
            
            </form>
    )
}

