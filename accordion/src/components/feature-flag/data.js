const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: false,
  showRandomColorGenerator: false,
  showAccordian: false,
  showTreeView: true,
  showTabs : false
};

export default function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse){
      setTimeout(resolve(dummyApiResponse), 500);
    }else {
      reject("Some error occured! Please try again");
    }
  });
}

