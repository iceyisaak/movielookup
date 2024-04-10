import { RiPlayList2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <nav className='flex items-center justify-between px-2'>
            <Link to='/'>
                <div className=" flex items-center">
                    <img
                        src={'../../../src/assets/movielookup_favicon.svg'}
                        alt="logo"
                        className='w-20'
                    />
                    <span className='text-4xl'>MovieLookup</span>
                </div>
            </Link>
            <RiPlayList2Fill size={30} />
        </nav>
    )
}