import Image from "next/image"
import Link from "next/link"
//para imprimir isto basta fazer "rafce" que isto ira fazer automatico
const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container 
    padding-container relative z-30 py-5">
      <link href="/">
        <Image src = "/hilink-logo.svg" alt="logo" width={74} height={29}/>
      </link>
    </nav>
  )
}

export default Navbar
