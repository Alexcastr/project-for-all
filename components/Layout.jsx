import Navbar from "./Navbar";
import Sidebar from '../components/Sidebar'
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";


const Layout = ({children} ) => {

  const {data: session} = useSession()
  const router = useRouter()


  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="ml-60 mr-auto pl-2">{children}</main>
      <footer>footer</footer>
    </>
  )
};

export default Layout;
