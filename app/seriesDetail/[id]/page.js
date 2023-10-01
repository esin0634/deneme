import SeriesDetailContainer from "@/containers/seriesDetail"
import { getSeriesDetail } from "@/services/series"

async function SeriesDetailPage ({ params }){

    const seriesDetail = await getSeriesDetail(params.id)

    return(
        <SeriesDetailContainer series = {seriesDetail}/>
    )
}

export default SeriesDetailPage