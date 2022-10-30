import { collection, addDoc } from 'firebase/firestore'
import { database } from '../../../database'

export default async function contacto(req, res) {
  const doc = await addDoc(collection(database, 'thingstodo'), req.body)

  return res.json({ message: 'tarea recibida' })
}
