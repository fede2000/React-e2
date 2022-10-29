import React from 'react';
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { AiFillCheckCircle } from "react-icons/ai"
import { ContenedorTarea } from '../ToDoListStyled';
import { TareaButtonEditarStyled, TareaButtonEliminarStyled } from './tareaStyles';



export function Tarea(props) {

    const {tarea, onActualizarTarea, onBorrarTarea} = props

    const [editando, setEditando] = useState(false)

    const [completado, setCompletado] = useState(false)

    const ModoEdicionActivado = () => {

        const [valor, setValor] = useState(tarea.tarea)

        const handleChange = (e) => {
            const text = e.target.value
            setValor(text)
        }

        const handleClick = (e) => {
            e.preventDefault()

            onActualizarTarea(
                {
                id: tarea.id,
                tarea: valor,
                completado: false
                }
            )

            setEditando(false)
        }
        
        return(
            <>
             
                <input type="text" value={valor} onChange={handleChange}/>

                <div className="modify">
                    <TareaButtonEditarStyled onClick={handleClick}>
                        <AiFillCheckCircle size="20px"/>
                    </TareaButtonEditarStyled>
                    
                    <TareaButtonEliminarStyled onClick={() => onBorrarTarea(tarea.id)}>
                        <AiFillDelete size="20px"/>
                    </TareaButtonEliminarStyled>
                </div>



            </>
        )
    }
    const ModoEdicionDesactivado = () =>{
        return(
            <>
                <span className={completado ? "todoTarea spanSubrayada" : "todoTarea"} onClick={() => setCompletado(!completado)}>{tarea.tarea}</span>

                <div className="modify">
                    <TareaButtonEditarStyled onClick={() => setEditando(true)}>
                        <AiFillEdit size="20px"/>
                    </TareaButtonEditarStyled>

                    <TareaButtonEliminarStyled onClick={() => onBorrarTarea(tarea.id)}>
                        <AiFillDelete size="20px"/>
                    </TareaButtonEliminarStyled>
                </div>

            </>
        )
    }

    return (
        <>

            <ContenedorTarea id={tarea.id}>
                {
                    editando ? <ModoEdicionActivado/> : <ModoEdicionDesactivado/>
                }
            </ContenedorTarea>
        </>
    )
}