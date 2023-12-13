import { useSearchParams } from "react-router-dom"
import { getCinemaDetail } from "../../apis/movie-api"

export const DetailPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const searchPageString = searchParams.get('id')
    const { data: CinemaDetail } = getCinemaDetail(id, 'full')

    return (
        <section>
            DetailPage
        </section>
    )
}
