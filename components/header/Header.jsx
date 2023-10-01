import Link from "next/link"
import {FaPlayCircle} from "react-icons/fa"

const Header = () => {
    const style = {
        header: `w-full lg:flex justify-center md:justify-between md:items-center p-5 flex-wrap space-y-5 md:space-y-0 backdrop-blur-sm `,
        logo: `flex justify-center items-center space-x-2 `,
        nav: `flex justify-center items-center space-x-10 text-sm font-bold tracking-widest	 `,
    }
  return (
    <header className={style.header}>
        <Link href="/">
        <div className={style.logo}>
            <FaPlayCircle className="w-5 h-5" /> 
            <div className="font-bold text-lg">LETSFINDMOVIES</div>
        </div>
        </Link>
        <nav className={style.nav} >
            <Link href="/">MOVIES</Link>
            <Link href="/series">SERIES</Link>
            <Link href="/about">ABOUT</Link>
        </nav>
    </header>
  )
}

export default Header