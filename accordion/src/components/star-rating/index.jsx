import { FaStar } from "react-icons/fa"
export default function StarRating({ numStars = 5 }) {
    // const stars = []
    function handleClick(){
        console.log("click")
    }
    function handleMouseEnter(){
        console.log("enter")
    }
    function handleMouseLeave(){
        console.log("leave")
    }
    return (
        <div className="start-rating">

            {[...Array(numStars)].map(
                (_, index) => {
                    return <FaStar
                    onClick={() => handleClick()}
                    onMouseMove={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                />
                }

            )}

        </div>
    )
}