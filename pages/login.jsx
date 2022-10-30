import {getCsrfToken} from 'next-auth/react'
import { AiOutlineGoogle } from "react-icons/ai";

import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'



const login = ({csrfToken}) => {

  const { data: session, status } = useSession()
  const router = useRouter()
    if(status === 'loading'){
      return <div className="spinner">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
    }

    if (session?.user) {
      router.replace('/') 
    }

  return (

    <div className="h-screen flex flex-col justify-center">
      <h1 className="flex justify-center mt-5 text-xl">Ingresa aquí</h1>
      
      <form className='flex flex-col mx-auto mt-3 bg-gray-500 p-8 rounded-md '>
          <input className='outline-none text-center' type="email" placeholder='Email'/>
          <input className='outline-none text-center my-2' type="password" placeholder='Password'/>
        <button className='p-3 rounded bg-red-700 rounded hover:bg-red-500 hover:text-gray-300'>Log in</button>
      </form>
      
      <p className='text-xl font-bold text-center my-2'>Or</p>
      <form
        className="flex justify-center"
        action="/api/auth/signin/google"
        method="POST"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken}/>
        <button
          className="p-3 rounded bg-teal-700 rounded hover:bg-teal-500 hover:text-gray-300"
          type="submit"
        >
          <AiOutlineGoogle className="w-10 h-10 inline-block" /> Inicia sesión
          con Google
        </button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    
    return {
      props: { csrfToken },
    }
}


export default login