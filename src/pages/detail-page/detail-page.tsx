import { Link, useParams } from "react-router-dom"
import { getCinemaDetail } from "../../apis/movie-api"

export const DetailPage = () => {

    // const [searchParams, setSearchParams] = useSearchParams()
    // const searchPageString = searchParams.get('id')
    const { cinemaId } = useParams()
    const { data: CinemaDetail } = getCinemaDetail(cinemaId!, 'full')

    // console.log('cinemaId: ', cinemaId)
    // console.log('CinemaDetail: ', CinemaDetail)

    return (
        <section>
            <Link
                to={`/results/?title=${CinemaDetail?.Title}&page=1`}
                className="text-3xl underline cursor-pointer"
            >
                Search
            </Link><span className="text-3xl"> / </span><span className="text-3xl">
                {CinemaDetail?.Title}
            </span>

            <img
                src={CinemaDetail?.Poster}
                alt={CinemaDetail?.Title}
                title={CinemaDetail?.Title}
            />

            <h1 className="text-6xl">
                {CinemaDetail?.Title}
            </h1>
            <p>
                IMDb ID: {CinemaDetail?.imdbID}
            </p>
            <p>
                Plot:
            </p>
            <p className="text-2xl">
                {CinemaDetail?.Plot}
            </p>
            <p>
                Actors: {CinemaDetail?.Actors}
            </p>
            <p>
                Directors: {CinemaDetail?.Director}
            </p>
            <p>
                Country: {CinemaDetail?.Country}
            </p>
            <p>
                Languages: {CinemaDetail?.Language}
            </p>
            <p>
                Rated: {CinemaDetail?.Rated === 'N/A' ? null : CinemaDetail?.Rated}
            </p>
            <p>
                Runtime: {CinemaDetail?.Runtime}
            </p>
            <p>
                Genere: {CinemaDetail?.Genre}
            </p>
            {/* <p>
                {CinemaDetail?.Year}
            </p> */}
            <p>
                Relased Date: {CinemaDetail?.Released}
            </p>
            <p>
                Awards: {CinemaDetail?.Awards}
            </p>
            <p>
                IMDb Rating: {CinemaDetail?.imdbRating}
            </p>
            <p>
                Writers: {CinemaDetail?.Writer}
            </p>
        </section>
    )
}
