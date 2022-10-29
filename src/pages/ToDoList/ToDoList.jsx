import { useState } from 'react';
import './ToDoListStyled';
import { Formulario } from "../ToDoList/form/form"
import { Tarea } from "../ToDoList/tarea/tarea"
import { ContenedorInfoTareas, FormContainerStyled, TareaContainerStyled, ToDoListContainerStyled, ToDoSubtitleStyled, ToDoTitleStyled } from './ToDoListStyled';


function ToDo() {
  const [tarea, setTarea] = useState("")
  const [listadoTareas, setListadoTareas] = useState([])

  const handleSubmit = (e) =>{
    // que no se ejecute por default
    e.preventDefault()
    if(tarea === ""){
      alert("DEBES DE PONER UNA TAREA")
      return
    }
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false
    }

    const tempo = [nuevaTarea, ...listadoTareas]
    setListadoTareas(tempo)
    setTarea("")
    console.log(listadoTareas)


  } 

  const handleChange = (e) => {
    setTarea(e.target.value)
    console.log(tarea)
  }

  const onActualizarTarea = (objEditarTarea) => {
    const {id, tarea} = objEditarTarea

    const temp = [...listadoTareas]
    const elemento = temp.find(item => item.id === id)
    elemento.tarea = tarea
    setListadoTareas(temp)
  }

  const onBorrarTarea = (id) => {
    const temp = listadoTareas.filter(item => item.id !== id)
    setListadoTareas(temp)
  }
  return (
    // fragmentacion
    <>
        <ToDoListContainerStyled>
            <ToDoTitleStyled>To Do List</ToDoTitleStyled>
            <FormContainerStyled>
                <Formulario 
                tarea = {tarea}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                />
            </FormContainerStyled>

            <TareaContainerStyled>
                <ToDoSubtitleStyled>Lista de Tareas</ToDoSubtitleStyled>
                <ContenedorInfoTareas>
                    {
                        listadoTareas.map(tarea => (
                            <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            tarea={tarea}
                            onActualizarTarea={onActualizarTarea}
                            onBorrarTarea={onBorrarTarea}
                            />
                        ))
                    }
                </ContenedorInfoTareas>
            </TareaContainerStyled>
        </ToDoListContainerStyled>
    </>
  );
}

export default ToDo;
