import { Link } from 'react-router-dom';
import style from './navbar.module.scss';


export const Navbar = () => {

    return (
        <nav className={`${style.navbar} flex bg-blue-200 w-screen justify-between`}>
            <article className='bg-red-200 px-3 py-2'>
                <Link to='/' className={`${style.navbar__logo} text-4xl`}>
                    Movie Lookup
                </Link>
            </article>
            <div className="flex bg-green-300 w-3/12 justify-around items-center">
                {/* <SearchBar /> */}
                {/* <MenuToggler
                // handleOpenNavbar={handleOpenNavbar}
                // isNavbarOpen={isNavbarOpen}
                /> */}
                {/* <NavMenu
                // handleNavLinkClicked={handleNavLinkClicked}
                // isNavbarOpen={isNavbarOpen}
                /> */}
                {/* <div className='bg-blue-500'>
                    SearchBar
                </div> */}
                {/* <div className='bg-orange-400'> */}
                <span className='mx-5 bg-purple-500'>
                    Watched
                </span>
                <span className='bg-purple-500'>
                    Watchlist
                </span>
                {/* </div> */}
            </div>
        </nav>
    )
}