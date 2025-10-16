// import './App.css'
import Accordian from "./components/accordian"
import RandomColor from "./components/random-folder"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
import LoadMoreData from "./components/load-more-data"
function App() {

  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating numStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      <LoadMoreData url="https://dummyjson.com/products"/>

    </div>
  )
}

export default App
