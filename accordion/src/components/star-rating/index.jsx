import { useState } from "react"
import { FaStar } from "react-icons/fa"
export default function StarRating({ numStars = 5 }) {
    const [stars, setStars] = useState(0);
    const [tempStars, setTempStars] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setStars(index);
    }
    function handleMouseEnter(index) {
        setTempStars(stars);
        setStars(0);
        setHover(index);
    }

    function handleMouseLeave() {
        setStars(tempStars);
        setTempStars(0)
    }

    const starsAray = [...Array(numStars)];

    return (
        <div className="start-rating">

            {
                starsAray.map(
                    (_, index) => {
                        index += 1;
                        return <FaStar key={index}
                            style={{
                                "color": (index <= stars || index <= hover)
                                    ?
                                    "#FFD700" : "black"
                            }}

                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    }

                )}

        </div>
    )
}