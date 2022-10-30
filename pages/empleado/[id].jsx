import Card from "../../components/Card";
import { useRouter } from "next/router";
import { useState } from "react";

export default function note({data}) {

  const router = useRouter()
  const [load, setLoad] = useState(false)

   const handleDelete = async () => {
     try {
       setLoad(true)
       const res = await fetch(
         `http://localhost:3000/api/notes/${router.query.id}`,
         {
           method: 'DELETE',
         }
       )
       setLoad(false)
       router.push('/empleado')
       
     } catch (error) {
       console.log(error)
     }
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
        <div className="md:grid md:grid-cols-3 gap-2md:grid md:grid-cols-3 gap-2">
          <Card
            title={data.title}
            description={data.description}
            onClickDelete={handleDelete}
            hideBtnEnter="hidden"
          />
        </div>
      )}
    </>
  )
}

export async function getServerSideProps(context){

  const secure = context.req.connection.encrypted;

  const url = `${secure ? "https" : "http"}://${
    context.req.headers.host
  }/api/notes/${context.params.id}`


  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
     data
    },
  }
}



