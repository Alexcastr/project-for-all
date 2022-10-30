import {AiFillEdit, AiOutlineDelete} from 'react-icons/ai'
import { useSession } from 'next-auth/react'

const index = ({dataUsers}) => {

  const {data: session, status} = useSession()

  if(status === 'loading'){
    return <div className="loader"></div>
  }

  return (
    <>
      {session?.user?.role !== 'admon' ? (
        <div> No puedes entrar a esta ruta</div>
      ) : (
        <div className=" overflow-y-scroll text-center border border-gray-800 my-0 bg-[#31376998] h-[98vh] w-full rounded p-2 my-1 mx-1">
          <div className="mt-1 bg-gray-100">
            <table className="border-separate border border-blue-500 mx-auto">
              <thead className="border-b">
                <tr className="">
                  <th className="w-1/5 font-bold text-gray-700 border border-slate-600">
                    ID
                  </th>
                  <th className="w-1/5 font-bold text-gray-700 border border-slate-600">
                    Name
                  </th>
                  <th className="w-1/5 font-bold text-gray-700 border border-slate-600">
                    Email
                  </th>
                  <th className="w-1/5 font-bold text-gray-700 border border-slate-600">
                    rol
                  </th>
                  <th className="w-1/5 font-bold text-gray-700 border border-slate-600">
                    estado
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataUsers.map((user) => {
                  return (
                    <tr key={user.id}>
                      <th className="w-1/5 border text-gray-500 border-slate-600">
                        {user.id}
                      </th>
                      <th className="w-1/5 border text-gray-500 border-slate-600">
                        {user.name}
                      </th>
                      <th className="w-1/5 border text-gray-500 border-slate-600">
                        {user.email}
                      </th>
                      <th className="w-1/5 border text-gray-500 border-slate-600">
                        {user.role}
                      </th>
                      <th className="w-1/5 border text-gray-500 border-slate-600">
                        <div className="flex justify-center">
                          Activo
                          <div className="flex"></div>
                          <button className="my-auto">
                            <AiFillEdit className="text-green-700 cursor-pointer mx-2" />
                          </button>
                          <button className="my-auto">
                            <AiOutlineDelete className="text-red-400 cursor-pointer" />
                          </button>
                        </div>
                      </th>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  )

}

export async function getServerSideProps(context){

  const secure = context.req.connection.encrypted;
  const url = `${secure ? "https" : "http"}://${
    context.req.headers.host
  }/api/users`;

  const res = await fetch(url)
  const dataUsers = await res.json()
  return {
    props: {
     dataUsers,
    },
  }
}

export default index

