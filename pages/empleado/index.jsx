
import Card from "../../components/Card"

const index = ({data}) => {

  return (
    <ul className="md:grid md:grid-cols-3 gap-2">
      {data.map((note) => {
        return (
          <Card
            key={note.id}
            title={note.title}
            description={note.description}
            displayBtn={'hidden'}
            showCardId={`/empleado/${note.id}`}
          />
        )
      })}
    </ul>
  )
}

export async function getServerSideProps(context){

  const secure = context.req.connection.encrypted;

  const url = `${secure ? "https" : "http"}://${
    context.req.headers.host
  }/api/notes`;

  const res = await fetch(url)
  const data = await res.json()

  return {
    props: {
     data,
    },
  }
}

export default index