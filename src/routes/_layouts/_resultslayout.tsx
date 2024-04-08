import { Outlet, createFileRoute } from '@tanstack/react-router'
import { IoSearchOutline } from 'react-icons/io5'

export const Route = createFileRoute('/_layouts/_resultslayout')({
    component: ResultsLayout
})


function ResultsLayout() {

    return (
        <section className="w-screen bg-green-400 pt-32 pb-52">
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