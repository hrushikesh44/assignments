import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(function(){
        async function fetchData(){
            setLoading(true)
            try{
                const response = await fetch(url)
                const json = await response.json()
                setData(json)
            }catch(err){
                setError(err)            
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [url])

    return {
        data: data,
        loading: loading,
        error: error
    }

}