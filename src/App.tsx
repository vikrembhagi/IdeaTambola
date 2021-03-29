import './App.css';
import {IdeaDisplay} from "./Pages/IdeaDisplay"
import Firebase from "firebase"
import config from "./config"
import {SampleIdea} from "./Data/Utils"
import {useEffect} from "react"

function App() {
  const sampleIdeaData = SampleIdea()
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
}
  

  useEffect(() => {
    console.log(sampleIdeaData)
    writeIdeaData()
  }, []);

  function writeIdeaData() {
    Firebase.database()
      .ref("/ideas")
      .set(sampleIdeaData);
    console.log("DATA SAVED");
  };

  return (
    <div className="App">
      <IdeaDisplay />
    </div>
  );
}

export default App;
