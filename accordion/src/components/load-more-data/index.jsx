import { useEffect, useState } from "react"
import "./styles.css"
export default function LoadMoreData({url}){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count * 20}`);
            const data = await response.json();
             if(data && data.products && data.products.length > 0){
                setLoading(false);
                setProducts((prev)=> [...prev, ...data.products.filter(p => !prev.some(existing => existing.id === p.id))]);
             }
        }catch(e){
            setLoading(false);
        }
    }
    console.log(products)
    useEffect(() => {
            fetchProducts();
        },[count])
 
    if (loading == true){
        return <div> Loading data.</div>
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
            {
                products && products.length > 0 
                ? products.map(productItem =>(
                         <div className="product" key={productItem.id}>
                                    <img
                                        src={productItem.images[0]}
                                        alt={productItem.title}
                                    />
                                    <p>{productItem.title}</p>
                                </div>
                )) : null
            }
            </div>
            <div className="button-container">
                <button onClick={() => setCount(prev => prev + 1)}>Load More pics</button>
            </div>
        </div>
    )
}