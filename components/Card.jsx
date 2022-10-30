
import { Dialog } from "@material-ui/core";
import Link from 'next/link'
import { useRouter } from "next/router";
import { useRef, useState } from 'react';
import { AiFillDelete, AiOutlineFileAdd, AiTwotoneEdit } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Card = ({title, description, showCardId = '', displayBtn = '', hideBtnEnter = '', onClickDelete = ()=>{}}) => {
  const [load, setLoad] = useState(false)
  const [show, setShow]= useState(false)
  const router = useRouter()
  const titleRef = useRef()
  const descriptionRef = useRef()


  const handleUpdateSubmit = (e)=>{
    e.preventDefault()
    setLoad(true)
    const updateTitle = titleRef.current.value
    const updateDescription = descriptionRef.current.value

    const reqBody = { title: updateTitle, description: updateDescription,}

    fetch(`http://localhost:3000/api/notes/${router.query.id}`, {

      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json()
        toast.info("Actualizado con exito") 
        setLoad(false)
        router.push('/empleado')})
      .then((data) => console.log(data))
      .catch(error=>toast.error("Error actualizando toDo", error))
  }

  const handleOpen = ()=>{
    setShow(!show)
  }

  return (
    <>
      {load ? (
        <div className="spinner">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      ) : (
        <article className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 gap-2">
          <div>
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              {title}
            </h4>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              {description}
            </p>
          </div>
          <div>
            <div className="flex justify-end text-gray-800 dark:text-gray-100">
              <div className={displayBtn}>
                <button
                  onClick={onClickDelete}
                  type="button"
                  className="text-3xl text-red-400 hover:text-red-600 mr-3"
                >
                  <AiFillDelete />
                </button>
              </div>
              <Link href={showCardId}>
                <button
                  type="button"
                  className={`${hideBtnEnter} text-3xl text-blue-400 hover:text-blue-600 mr-3`}
                >
                  <AiOutlineFileAdd />
                </button>
              </Link>

              <div className={displayBtn}>
                <button
                  onClick={handleOpen}
                  className="text-3xl text-gray-400 hover:text-gray-600 mr-3"
                  aria-label="edit note"
                  type="button"
                >
                  <AiTwotoneEdit />
                </button>
              </div>
            </div>
            <ToastContainer autoClose={5000} />
          </div>

          <Dialog open={show} onClose={() => setShow(false)}>
            <form className="flex flex-col" onSubmit={handleUpdateSubmit}>
              <input
                className="outline-none bg-gray-50 border border-gray-300 text-center"
                type="text"
                placeholder="Nuevo titulo"
                ref={titleRef}
                required
              />
              <textarea
                required
                className="outline-none bg-gray-50 border border-gray-300 gap-1 text-center"
                rows={5}
                placeholder="Nueva descripción"
                ref={descriptionRef}
              />
              <button
                onClick={() => setShow(false)}
                className="p-1 rounded bg-teal-700 rounded hover:bg-teal-500 hover:text-gray-300"
              >
                Actualizar
              </button>
            </form>
          </Dialog>
        </article>
      )}
    </>
  )
  
};

export default Card;
