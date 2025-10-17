import { useEffect, useState, useRef } from "react"
import "./styles.css"
import { TailSpin } from 'react-loader-spinner';


export default function LoadMoreData({ url }) {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const seen = useRef(new Set)
    const limit = 100;

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setProducts(prev => [...prev, ...data.products])
            }
        } catch (e) {
            console.log(e.message);
        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {
        if (!seen.current.has(count)) {
            fetchProducts();
            seen.current.add(count);
        }
    }, [count])

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length > 0
                        ? products.map(productItem => (
                            <div className="product" key={productItem.id}>
                                <img
                                    src={productItem.images[0]}
                                    alt={productItem.title}
                                    title={productItem.description}
                                />
                                <p>{productItem.title}</p>
                            </div>
                        )) : <div>No data availble</div>
                }
            </div>
            {loading && <div className="spinner-container">
                <TailSpin color="#00BFFF" height={40} width={40} />
            </div>}
            <div className="button-container">
                <button
                    id="btn"
                    onClick={() => setCount(prev => prev + 1)}
                    disabled={products.length == limit}
                >
                    Load More pics
                </button>
            </div>
        </div>
    )
}