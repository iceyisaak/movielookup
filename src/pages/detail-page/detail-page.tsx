import { useParams, useSearchParams } from "react-router-dom"
import { getCinemaDetail } from "../../apis/movie-api"

export const DetailPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchPageString = searchParams.get('id')
    const id = useParams()
    const { data: CinemaDetail } = getCinemaDetail(+id, 'full')

    return (
        <section>

            <span>Search</span> / <span>{CinemaDetail?.Title}</span>

            <img
                src={CinemaDetail?.Poster}
                alt={CinemaDetail?.Title}
                title={CinemaDetail?.Title}
            />

            <h1 className="text-6xl">
                {CinemaDetail?.Title}
            </h1>
            <p>
                {CinemaDetail?.imdbID}
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
