// import './App.css'
import Accordian from "./components/accordian"
import RandomColor from "./components/random-folder"
import StarRating from "./components/star-rating"
function App() {

  return (
      <div className="App">
        {/* accordian component */}
        {/* <Accordian/> */}
        {/* random color generator */}
        {/* <RandomColor/> */}
        {/* start rating system */}
        <StarRating numStars={10}/>

      </div>
  )
}

export default App
