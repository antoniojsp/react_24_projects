import useFetch from "."
import "./styles.css"


export default function UseFetchHookTest(){

    const {data, error, pending} = useFetch("https://dummyjson.com/products?limit=100", {})
    console.log(data, error, pending)

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
                data && data.products && data.products.length > 0 &&
                data.products.map(
                    (item, index) => {return <li key={index}>{item.title}</li>}
                )
            }
        </ul>
        
    </div>)
}