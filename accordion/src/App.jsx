// componenets import
import Accordian from "./components/accordian"
import RandomColor from "./components/random-folder"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
import LoadMoreData from "./components/load-more-data"
import TreeView from "./components/tree-view"
import QRcode from "./components/qr-code"
import LightDarkTheme from "./components/light-dark"
import ScrollIndicator from "./components/scroll-indicator"
import CustomTabs from "./components/custom-tabs/tabs"
import ModalTest from "./components/custom-modal-popup/modal-test"
import GithubProfileFinder from "./components/github-profile-finder"
import SearchAutoComplete from "./components/search-autocomplete"
import TicTacToe from "./components/tic-tac-toe"
import FeatureFlagGlobalState from "./components/feature-flag/context"
//data
import data from "./components/tree-view/data"
import TabTest from "./components/custom-tabs/tab-test"
//css
import "./App.css";
import FeatureFlags from "./components/feature-flag"

function App() {
  return (
    <div className="App">
      {/* <Accordian />
      <RandomColor />
      <StarRating numStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMoreData />
      <TreeView list={data}/>
      <QRcode />
      <LightDarkTheme />
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      <TabTest/>
      <ModalTest /> */}
      {/* <GithubProfileFinder/> */}
      {/* <SearchAutoComplete />
      <TicTacToe/> */}
        <FeatureFlagGlobalState>
          <FeatureFlags/>
        </FeatureFlagGlobalState>

    </div>
  )
}

export default App
