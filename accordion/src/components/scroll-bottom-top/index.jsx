import useFetch from "../use-fetch"
import "./styles.css"
export default function ScrollTopBottom() {

    const { data, error, pending } = useFetch("https://dummyjson.com/products?limit=100", {})
    console.log(data)

    function handleScrollTop(){
        window.scrollTo(
            {
                top:0, left:0, behavior:"smooth"
            }
        )
    }

    function handleScrollBottom

    if(error){
        return <div>Please, try again.</div>
    }
    if(pending){
        return <div>Wait...</div>
    }
    return (<div>
        <h1>List of Products</h1>
        <h3>Top section</h3>
        <button>Scroll Bottom</button>
        <ul>
            {
                (data && data.products && data.products.length) ?
                    data.products.map((item, index) =>
                        <li key={index}>{item.title}</li>
                    ) : <div>Luna</div>

            }
        </ul>
        <button onClick={handleScrollTop}>Scroll Top</button>

    </div>)
}