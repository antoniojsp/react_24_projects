import { useState } from "react"
import { FaStar } from "react-icons/fa"
import { clsx } from 'clsx';
import "./styles.css"

export default function StarRating({ numStars = 5 }) {
    const [stars, setStars] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setStars(index); // when clicked, set stars to index
    }
    function handleMouseEnter(index) {
        setHover(index); // set hover to the index
    }
    function handleMouseLeave() {
        setHover(0); // the moment the cursors leaves then starts, set hover to 0
    }
    const starsAray = [...Array(numStars)];

    return (
        <div className="star-rating-container">
            {
                starsAray.map(
                    (_, index) => {
                        const value = index + 1;
                        const classes = clsx({ // when the hover leaves the area, it will be set to zero, then 0 || index would indicate where should set the stars
                            active: value <= (hover || stars),
                            inactive: value > (hover || stars)
                        });
                        return <FaStar key={index}
                            className={classes}
                            onClick={() => handleClick(value)}
                            onMouseEnter={() => handleMouseEnter(value)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    }
                )}
        </div>
    )
}