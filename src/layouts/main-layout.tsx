import { IoSearchOutline } from "react-icons/io5";
import { RiPlayList2Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

export function MainLayout() {

    return (
        <section className="w-screen bg-green-400 pb-52">
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
            <article className="flex justify-center bg-blue-600 mb-10">
                <div className="w-8/12 bg-red-400 flex">
                    <input
                        // value={'Search Bar'}
                        className="w-10/12 h-16 px-2 rounded-md text-xl"
                        placeholder="e.g. Titanic"
                    />
                    <button className="bg-gray-300 w-2/12 mx-2 rounded-md text-xl flex justify-center items-center">
                        <IoSearchOutline size={15} />
                    </button>
                </div>
            </article>
            <Outlet />
        </section>
    )
}
