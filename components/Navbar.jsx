/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import DropdownB from "./DropdownB";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

const Navbar = () => {
  const { data: session } = useSession()
  

  return (
    <nav className="bg-gray-200 py-2 relative">
      <ul className="container mx-auto grid grid-cols-2">
        <Link href="/">
          <li className="cursor-pointer mr-auto pt-2 lg:pl-8">Home</li>
        </Link>

        <div className="flex justify-between ml-auto gap-2">
          {session ? (
            <div className="flex flex-col absolute right-10 top-2">
              <DropdownB text={session.user.name} onClick={() => signOut()} />
            </div>
          ) : (
            <>
              <Link href="/login">
                <li
                  onClick={() => signIn()}
                  className=" cursor-pointer hover:text-gray-700 hover:bg-cyan-100 py-2 px-2 rounded-md"
                >
                  <div className="flex justify-between">
                    Iniciar Sesión
                    <span className="pt-1 ml-2">
                      <AiOutlineLogin />
                    </span>
                  </div>
                </li>
              </Link>
              <Link href="/signUp">
                <li className=" cursor-pointer hover:text-gray-700 hover:bg-cyan-100 py-2 px-2 rounded-md">
                  <div className="flex justify-between">
                    Registrarse
                    <span className="pt-1 ml-2">
                      <AiOutlineUserAdd />
                    </span>
                  </div>
                </li>
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
