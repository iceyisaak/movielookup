import { useParams } from 'react-router-dom'
import { getCinemaDetail } from '../../apis/movie-api'


export function DetailPage() {
    const { imdbID } = useParams()
    const { data: CinemaDetail } = getCinemaDetail(imdbID, 'full')
    // console.log('CinemaDetail: ', CinemaDetail)
    // const navigate = useNavigate()

    return (
        <section>
            {/* <button onClick={() => navigate(-1)}>
        Back to Results
      </button> */}
            <h1 className='text-4xl'>
                {CinemaDetail?.Title}
            </h1>
            <img
                src={CinemaDetail?.Poster}
                alt={CinemaDetail?.Title}
                className=''
            />
            <div className='text-xl'>
                <span className='font-bold text-xl'>Year:</span> {CinemaDetail?.Year}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Genre:</span> {CinemaDetail?.Genre}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Staring:</span> {CinemaDetail?.Actors}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Director(s):</span> {CinemaDetail?.Director}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Released Date:</span> {CinemaDetail?.Released}
            </div>
            {
                CinemaDetail?.Website === 'N/A' ? null :
                    <div className='text-xl'>
                        <span className='font-bold text-xl'>Website:</span> {CinemaDetail?.Website}
                    </div>
            }
            <div className='text-xl'>
                <span className='font-bold text-xl'>Awards:</span> {CinemaDetail?.Awards}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Writer(s):</span> {CinemaDetail?.Writer}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Rated:</span> {CinemaDetail?.Rated}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Runtime:</span> {CinemaDetail?.Runtime}
            </div>

            <div className='text-xl'>
                <span className='font-bold text-xl'>Meta Score:</span> {CinemaDetail?.Metascore}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Ratings Source:</span> {CinemaDetail?.Ratings[0].Source}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Ratings Earned:</span> {CinemaDetail?.Ratings[0].Value}
            </div>
            {
                CinemaDetail?.Production === 'N/A' ?
                    null :
                    <div className='text-xl'>
                        <span className='font-bold text-xl'>Production</span>{CinemaDetail?.Production}
                    </div>
            }
            <div className='text-xl'>
                <span className='font-bold text-xl'>Box Office:</span> {CinemaDetail?.BoxOffice}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>Language(s):</span> {CinemaDetail?.Language}
            </div>
            <div className='font-bold text-xl'>Summary: </div>
            <div className='w-5/12 text-xl'>
                {CinemaDetail?.Plot}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>IMDb ID: </span> {CinemaDetail?.imdbID}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>IMDb Rating: </span>{CinemaDetail?.imdbRating}
            </div>
            <div className='text-xl'>
                <span className='font-bold text-xl'>IMDb Vote: </span> {CinemaDetail?.imdbVotes}
            </div>
        </section>
    )
}
