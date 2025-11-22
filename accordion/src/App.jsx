// componenets import
import Accordian from "./components/accordian"
import RandomColor from "./components/random-color"
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
import FeatureFlagGlobal from "./components/feature-flag/context"
import UseFetchHookTest from "./components/use-fetch/testing"
import TestUseOutsideClick from "./components/use-outside-click/test"
import FeatureFlags from "./components/feature-flag"
import TestWindowResize from "./components/use-window-resize/testUseWindowResize"
import ScrollTopBottom from "./components/scroll-bottom-top"

//data
import data from "./components/tree-view/data"
import TabTest from "./components/custom-tabs/tab-test"
//css
import "./App.css";

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
      {/* <FeatureFlagGlobal>
          <FeatureFlags/>
        </FeatureFlagGlobal> */}
      {/* <UseFetchHookTest /> */}
        {/* <TestUseOutsideClick /> */}
        {/* <TestWindowResize/> */}
        <ScrollTopBottom />
    </div>
  )
}

export default App
