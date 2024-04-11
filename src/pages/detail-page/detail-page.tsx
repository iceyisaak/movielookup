import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { RiPlayListAddFill } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'
import { getCinemaDetail } from '../../apis/movie-api'


export function DetailPage() {

    const { imdbID } = useParams()
    const navigate = useNavigate()

    const { data: CinemaDetail } = getCinemaDetail(imdbID, 'full')

    // console.log('CinemaDetail: ', CinemaDetail)

    return (
        <section className='mt-40 px-5 text-gray-300'>
            <div className='
                flex
                flex-col
                items-center
                lg:items-start
                lg:flex-row
                lg:justify-center
                w-full
                flex-wrap
            '>
                <aside className='
                mt-16
                mb-20
                lg:mb-0
                px-5
                flex
                items-center
                flex-col
                w-full
                lg:w-auto
                '>
                    <button
                        onClick={() => navigate(-1)}
                        className='flex items-center my-5'
                    >
                        <IoArrowBackCircleOutline size={20} /> <span className='ml-2'>Back to Results</span>
                    </button>
                    <img
                        src={CinemaDetail?.Poster}
                        alt={CinemaDetail?.Title}
                        title={CinemaDetail?.Title}
                    />
                    <button className='flex flex-col items-center mt-4'>
                        <RiPlayListAddFill size={20} /><span className='my-2'>Add to Watchlist</span>
                    </button>
                </aside>
                <aside
                    className='
                        md:w-9/12
                        lg:w-6/12
                        px-6
                        py-10
                    '>
                    <h1 className='text-5xl mb-6 font-extrabold'>
                        {CinemaDetail?.Title}
                    </h1>
                    <div className='text-xl mb-2'>
                        <span className='font-bold text-xl'>Year:</span> {CinemaDetail?.Year}
                    </div>
                    <div className='text-xl mb-2'>
                        <span className='font-bold text-xl'>Genre:</span> {CinemaDetail?.Genre}
                    </div>
                    {
                        CinemaDetail?.Actors === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Staring:</span> {CinemaDetail?.Actors}
                            </div>
                    }
                    {
                        CinemaDetail?.Director === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Director(s):</span> {CinemaDetail?.Director}
                            </div>
                    }
                    {
                        CinemaDetail?.Writer === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Writer(s):</span> {CinemaDetail?.Writer}
                            </div>
                    }
                    {
                        CinemaDetail?.Runtime === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Runtime:</span> {CinemaDetail?.Runtime}
                            </div>
                    }
                    {
                        CinemaDetail?.Released === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Released Date:</span> {CinemaDetail?.Released}
                            </div>
                    }
                    {
                        CinemaDetail?.Awards === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Awards:</span> {CinemaDetail?.Awards}
                            </div>
                    }
                    {
                        CinemaDetail?.Rated === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Rated:</span> {CinemaDetail?.Rated}
                            </div>
                    }
                    {
                        CinemaDetail?.Production === 'N/A' ?
                            null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Production</span>{CinemaDetail?.Production}
                            </div>
                    }
                    {
                        CinemaDetail?.BoxOffice === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Box Office:</span> {CinemaDetail?.BoxOffice}
                            </div>
                    }
                    {
                        CinemaDetail?.Language === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Language(s):</span> {CinemaDetail?.Language}
                            </div>
                    }
                    {
                        CinemaDetail?.Plot === 'N/A' ? null :
                            <>
                                <div className='font-bold text-xl'>Summary: </div>
                                <div className='text-xl mb-2'>
                                    {CinemaDetail?.Plot}
                                </div>
                            </>
                    }
                    {
                        CinemaDetail?.Metascore === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Meta Score:</span> {CinemaDetail?.Metascore}
                            </div>
                    }
                    <div className='text-xl mb-2'>
                        <span className='font-bold text-xl'>Rating(s):</span> {CinemaDetail?.Ratings.map(
                            (rating) => (
                                <ul className='ml-6'>
                                    <li className='text-xl mb-1'>
                                        {rating.Source}: {rating.Value}
                                    </li>
                                </ul>
                            ))}
                    </div>
                    <div className='text-xl mb-2'>
                        <span className='font-bold text-xl'>IMDb ID: </span> {CinemaDetail?.imdbID}
                    </div>
                    {
                        CinemaDetail?.imdbRating === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>IMDb Rating: </span>{CinemaDetail?.imdbRating}
                            </div>
                    }
                    {
                        CinemaDetail?.imdbVotes === 'N/A' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>IMDb Vote: </span> {CinemaDetail?.imdbVotes}
                            </div>
                    }
                    {
                        CinemaDetail?.Website === 'N/A' || CinemaDetail?.Website === '' ? null :
                            <div className='text-xl mb-2'>
                                <span className='font-bold text-xl'>Website:</span> {CinemaDetail?.Website}
                            </div>
                    }
                </aside>
            </div>


        </section>
    )
}
