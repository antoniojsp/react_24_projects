import { useEffect, useState } from "react"

export default function LoadMoreData({url}){

    const [loading, setLoading] = useState();
    const [products, setProducts] = useState();
    const [count, setCount] = useState();

    async function fetchProducts(getUrl){
        try{
            const response = await fetch(getUrl);
            const data = await response.json()
            console.log(data);
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if (url != ""){
            fetchProducts(url)
        }}, [])
 

    return (
        <div>

        </div>
    )
}