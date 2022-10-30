import { doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'
import { database } from '../../../database'

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req

  switch (method) {
    case 'DELETE':
      try {
        const note = await deleteDoc(doc(database, 'thingstodo', id))

        return res.json(note.data())
      } catch (error) {
        return res.status(400).json({ message: error.message })
      }
    case 'GET':
      try {
        const note = await getDoc(doc(database, 'thingstodo', id))
        return res.json(note.data())
      } catch (error) {
        console.log(error)
      }
    case 'PUT':
      try {
        const updateNote = await updateDoc(
          doc(database, 'thingstodo', id),
          body
        )
        return res.json({ message: 'tarea recibida' })
      } catch (error) {
        console.log(error)
      }
    default:
      return res.status(400).json({ message: 'Method are not supported' })
  }
}
