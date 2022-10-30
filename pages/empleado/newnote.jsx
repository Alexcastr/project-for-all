import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const newnote = () => {


  const titleInputRef = useRef()
  const descriptionInputRef = useRef()
  const router = useRouter()


  function handleNoteSubmit(event) {
  
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const reqBody = { title: enteredTitle, description: enteredDescription }

    fetch('/api/notes/newnote', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json()
        toast.info("ToDo creado con exito")
      
        router.push('/empleado')
      })
      .then((data) => console.log(data))
      .catch(error=> toast.error("Error creando ToDo", error))
  }
 
  return (

    <div className="h-screen flex flex-col justify-center">
      <form
        className="flex flex-col mx-auto border border-gray-700 rounded-md bg-gray-400"
        onSubmit={handleNoteSubmit}
      >
        <label className="text-center" htmlFor="title">Titulo</label>
        <input  className='outline-none bg-gray-50' type="text" id="title" ref={titleInputRef} required/>
        <label className="text-center" htmlFor="description">Descripción</label>
        <textarea
        required
         className='outline-none bg-gray-50'
          id="description"
          ref={descriptionInputRef}
          cols="40"
          rows="6"
        ></textarea>
        <button className="p-3 rounded bg-teal-700 rounded hover:bg-teal-500 hover:text-gray-300">Crear toDo</button>
      </form>
      <ToastContainer autoClose={5000}/>
    </div>
  )
}


export default newnote