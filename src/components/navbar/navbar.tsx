import { Link } from 'react-router-dom'
import style from './navbar.module.scss'


export const Navbar = () => {

    return (
        <nav className={`${style.navbar}`}>
            <article>
                <Link to='/' className={`${style.navbar__logo} text-4xl p-5`}>
                    CineVerse
                </Link>
            </article>
            <div className="flex">
                {/* <SearchBar /> */}
                {/* <MenuToggler
                // handleOpenNavbar={handleOpenNavbar}
                // isNavbarOpen={isNavbarOpen}
                /> */}
                {/* <NavMenu
                // handleNavLinkClicked={handleNavLinkClicked}
                // isNavbarOpen={isNavbarOpen}
                /> */}
            </div>
        </nav>
    )
}