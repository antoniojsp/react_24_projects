import { BsNutFill } from "react-icons/bs"
import useFetch from "."
import "./styles.css"


export default function UseFetchHookTest(){

    const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=100", {})
    return (<div className="use-fetch-container">
        <h1>Use Fetch Hook</h1>
        {
            pending ? <h3>Pending...</h3>:null
        }
        {
            error?<h3>Uh oh...</h3>:null
        }
        <ul>
            {
                (data && data.products && data.products.length > 0 )? // data exists, and there is a products key and it has some elements
                data.products.map(
                    (item, index) => {return <li key={index}>{item.title}</li>}
                ):null
            }
        </ul>
        
    </div>)
}