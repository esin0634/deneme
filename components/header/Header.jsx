import Link from "next/link"
import {FaPlayCircle} from "react-icons/fa"

const Header = () => {
    const style = {
        header: `w-full flex justify-center md:justify-between md:items-center p-5 flex-wrap space-y-5 md:space-y-0 bg-gradient-tr from-gray-500 to-gray-300`,
        logo: `flex justify-center items-center space-x-2 `,
        nav: `flex justify-center items-center space-x-5 `,
    }
  return (
    <header className="w-full flex justify-center md:justify-between md:items-center p-5 flex-wrap space-y-5 md:space-y-0 bg-gradient-to-b from-gray-800 to-gray-900/0 rounded-xl">
        <Link href="/">
        <div className={style.logo}>
            <FaPlayCircle className="w-5 h-5" /> 
            <div className="font-bold text-lg">LETSFINDMOVIES</div>
        </div>
        </Link>
        <nav className={style.nav}>
            <Link href="/">Movies</Link>
            <Link href="/">Series</Link>
            <Link href="/">Kids</Link>
        </nav>
    </header>
  )
}

export default Header