import { useParams } from 'react-router-dom'
import { getCinemaDetail } from '../../apis/movie-api'


export function DetailPage() {
    const { imdbID } = useParams()
    const { data: CinemaDetail } = getCinemaDetail(imdbID, 'full')
    // console.log('CinemaDetail: ', CinemaDetail)
    // const navigate = useNavigate()

    return (
        <section className='mt-40 px-5 text-gray-300'>
            {/* <button onClick={() => navigate(-1)}>
        Back to Results
      </button> */}
            {/* <h1 className='text-4xl'>
                {CinemaDetail?.Title}
            </h1> */}

            <div className='
            flex flex-col
            items-center
            lg:flex-row  lg:justify-center
            w-full flex-wrap
            '>

                <aside className='mb-20 px-5 flex items-center '>
                    <img
                        src={CinemaDetail?.Poster}
                        alt={CinemaDetail?.Title}
                        className=''
                    />
                </aside>
                <aside className='md:w-9/12 lg:w-6/12 px-6 py-10 '>
                    <h1 className='text-5xl mb-5 font-extrabold'>
                        {CinemaDetail?.Title}
                    </h1>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Year:</span> {CinemaDetail?.Year}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Genre:</span> {CinemaDetail?.Genre}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Staring:</span> {CinemaDetail?.Actors}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Director(s):</span> {CinemaDetail?.Director}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Released Date:</span> {CinemaDetail?.Released}
                    </div>
                    {
                        CinemaDetail?.Website === 'N/A' ? null :
                            <div className='text-xl mb-1'>
                                <span className='font-bold text-xl'>Website:</span> {CinemaDetail?.Website}
                            </div>
                    }
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Awards:</span> {CinemaDetail?.Awards}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Writer(s):</span> {CinemaDetail?.Writer}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Rated:</span> {CinemaDetail?.Rated}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Runtime:</span> {CinemaDetail?.Runtime}
                    </div>

                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Meta Score:</span> {CinemaDetail?.Metascore}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Ratings Source:</span> {CinemaDetail?.Ratings[0].Source}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Ratings Earned:</span> {CinemaDetail?.Ratings[0].Value}
                    </div>
                    {
                        CinemaDetail?.Production === 'N/A' ?
                            null :
                            <div className='text-xl mb-1'>
                                <span className='font-bold text-xl'>Production</span>{CinemaDetail?.Production}
                            </div>
                    }
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Box Office:</span> {CinemaDetail?.BoxOffice}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>Language(s):</span> {CinemaDetail?.Language}
                    </div>
                    <div className='font-bold text-xl'>Summary: </div>
                    <div className='text-xl mb-1'>
                        {CinemaDetail?.Plot}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>IMDb ID: </span> {CinemaDetail?.imdbID}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>IMDb Rating: </span>{CinemaDetail?.imdbRating}
                    </div>
                    <div className='text-xl mb-1'>
                        <span className='font-bold text-xl'>IMDb Vote: </span> {CinemaDetail?.imdbVotes}
                    </div>
                </aside>
            </div>


        </section>
    )
}
