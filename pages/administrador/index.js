import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const index = () => {
  const { data: session } = useSession()
  const router = useRouter()

  if (session?.user?.role === 'admon') {
    return <div> eres admin tienes permiso</div>
  } else {
    return <div> no puedes seguir</div>
  }
}

export default index
