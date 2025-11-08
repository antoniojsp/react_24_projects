import { useEffect, useState, useRef } from "react"
import "./styles.css"

export default function ScrollIndicator({ url }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const containerRef = useRef(null);
    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                console.log(data)
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setErrorMessage(error);
        }
    }

    function handleScrollPercentage() {
        const howMuchScrolled = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);


    }

    useEffect(x => {
        fetchData(url)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage)
        return () => {
            window.removeEventListener("scroll", handleScrollPercentage)
        }
    }, [])

    if (errorMessage) {
        return <div>Error ! {errorMessage}</div>;
    }

    if (loading) {
        return <div>Loading data ! Pleaae wait</div>;
    }


    return (<div>
        <div
            className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div
                    className="current-progress-bar"
                    style={{ width: `${scrollPercentage}%` }}
                ></div>
            </div>
        </div>
        <div className="data-container">
            {data && data.length > 0 ?
                data.map((item, index) => <p key={index}>{item.title}</p>)
                : null
            }
        </div>
    </div>)
}