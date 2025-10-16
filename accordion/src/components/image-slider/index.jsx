import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import clsx from "clsx";
import "./styles.css"

export default function ImageSlider({ url, page, limit }) {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false)

    async function imageFetcher(getUrl) { // gets the images
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => { // fecth images
        if (url != "") {
            imageFetcher(url);
        }
    }, []); // empty parametes [] so it only run once

    function handlePrevious() {
        setCurrentImage(prev => prev === 0 ? images.length - 1 : prev - 1);
    }

    function handleNext() {
        setCurrentImage(prev => prev === images.length - 1 ? 0 : prev + 1)
    }

    function handleCircleIndicators(index) {
        setCurrentImage(index);
    }

    if (loading) {
        return <div>Loading Data</div>
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
    }

    return (
        <div className="container_image">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {
                images && images.length ?
                    images.map((image, index) => {
                        const isHidden = index === currentImage
                        const className = clsx({
                            "current-image": isHidden,
                            "hide-current-image": !isHidden
                        })
                        return <img
                            src={image.download_url}
                            key={image.id}
                            alt={image.download_url}
                            className={className}
                        />
                    }
                    )
                    : <div>No Data</div>
            }
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => {
                        const currentIndicator = currentImage === index;
                        const className = clsx({"indicators active":currentIndicator,
                                                "indicators inactive":!currentIndicator});
                        console.log(typeof className)
                        console.log( className)

                        return <button
                                    key={index}
                                    className={className}
                                    onClick={() => handleCircleIndicators(index)}
                                >
                                </button>}

                    ) : <div>No Data</div>
            }
            </span>
        </div>
    )
}