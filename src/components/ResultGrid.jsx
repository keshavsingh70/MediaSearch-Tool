import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import ResultCard from './ResultCard'
import { setQuery, setLoading, setError, setResults } from '../redux/features/searchSlice'
import { useEffect } from 'react'





const ResultGrid = () => {


    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(function () {
       if(!query)  return
       
        const getData = async () => {


            try {
                dispatch(setLoading())
                let data = []
                if (activeTab == 'photos') {
                    let response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url:item.links.html

                    }))
                }
                if (activeTab == 'videos') {
                    let response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link,
                    url:item.url

                    }))
                }

                dispatch(setResults(data))
            } catch (err) {
                dispatch(setError(err.message))
            }

        }
        getData()
    }, [query, activeTab])

    if (error) return <h1>eroor</h1>
    if (loading) return <h1>loading</h1>

    return (
        <div className='flex justify-between overflow-auto px-10 flex-wrap w-full gap-6 rounded '>
            {results.map((item, idx) => {
                return <div key={idx}>
                 <ResultCard item={item}/>
                </div> 
            })}

        </div>
    )
}

export default ResultGrid