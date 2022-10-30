import Link from "next/link"
import {AiOutlineWechat, AiFillSnippets, AiTwotonePhone, AiTwotoneContainer} from "react-icons/ai";
import { useSession } from 'next-auth/react'


const Sidebar = () => {

  const { data: session } = useSession()


  return (
    <div className="w-60 h-full shadow-md bg-gray-700 px-1 absolute">
      <ul className="relative">
        <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-cyan-100 transition duration-300 ease-in-out">
          <Link href="/">
            <div className="flex justify-between cursor-pointer">
              <AiOutlineWechat className="text-xl" />
              <span className="ml-2">Quienes somos</span>
            </div>
          </Link>
        </li>
        <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-cyan-100 transition duration-300 ease-in-out">
          <Link href="/contacto">
            <div className="flex justify-between cursor-pointer">
              <AiTwotonePhone className="text-xl" />
              <span className="ml-2"> Contáctanos</span>
            </div>
          </Link>
        </li>
        <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-cyan-100 transition duration-300 ease-in-out">
          <Link href="/empleado">
            <div className="flex justify-between cursor-pointer">
              <AiFillSnippets className="text-xl" />
              <span className="ml-2">ToDo</span>
            </div>
          </Link>
        </li>
        {session?.user?.role === 'admon' ? (
          <li className="relative flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-200 text-ellipsis whitespace-nowrap rounded hover:text-gray-700 hover:bg-cyan-100 transition duration-300 ease-in-out">
            <Link href="/administrador/dashboard">
              <div className="flex justify-between cursor-pointer">
                <AiTwotoneContainer className="text-xl" />
                <span className="ml-2"> Dashboard</span>
              </div>
            </Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  )
}

export default Sidebar

