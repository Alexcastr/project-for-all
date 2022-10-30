import { Menu } from '@headlessui/react'
import { AiOutlineArrowDown, AiOutlineLogout, AiFillPlusCircle } from 'react-icons/ai'
import Link from 'next/link'




export default function DropdownB({text, onClick = ()=>{}}) {
  return (
    <Menu>
      <Menu.Button className="cursor-pointer hover:text-gray-700 p-1 hover:bg-cyan-100 rounded-md border border-slate-800">
        <div className="flex justify-between">
          {text}
          <span className="pt-1 pl-[21px]">
            <AiOutlineArrowDown />
          </span>
        </div>
      </Menu.Button>
      <Menu.Items className="border border-slate-800 rounded-md"> 
        <Menu.Item>
          {({ active }) => (
            <li
              className={`${
                active && 'cursor-pointer '
              }hover:text-gray-700 p-1 bg-gray-200 hover:bg-cyan-100 border border-b-slate-500`}
            >
              <div className="flex justify-between">
                <Link href={'/empleado/newnote'}>
                  New ToDo
                </Link>

                <span className="pt-1 ml-2">
                  <AiFillPlusCircle />
                </span>
              </div>
            </li>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <li
              className={`${
                active && 'cursor-pointer '
              }hover:text-gray-700 p-1 bg-gray-200 hover:bg-cyan-100`}
              onClick={onClick}
            >
              <div className="flex justify-between">
                Cerrar sesión
                <span className="pt-1 ml-2">
                  <AiOutlineLogout />
                </span>
              </div>
            </li>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
