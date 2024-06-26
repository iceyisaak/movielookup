import { RiMovie2Line, RiPlayList2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { SearchForm } from '../search-form';


export const Navbar = () => {

    return (
        <nav className='flex items-center justify-between px-3 pt-3'>
            <Link to='/'>
                <div className="flex items-center">
                    <h1 className="text-5xl mb-5 text-yellow-300 flex pt-5 pl-2">
                        MovieLookup<RiMovie2Line />
                    </h1>
                </div>
            </Link>
            <SearchForm />
            <Link to='/watchlist'>
                <RiPlayList2Fill size={30} className='text-gray-600' />
            </Link>
        </nav>
    )
}