import { useEffect, useState } from "react"

export default function LoadMoreData({url}){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0 );

    async function fetchProducts(){
        try{
            const response = await fetch();
            const data = await response.json()
            console.log(data);
             if(data){
                setProducts(data.results)
             }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
            fetchProducts()
        }, [])
 

    return (
        <div>

        </div>
    )
}