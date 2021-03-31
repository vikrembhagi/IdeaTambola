import './App.css';
import {IdeaDisplay} from "./Pages/IdeaDisplay"
import Firebase from "firebase"
import config from "./config"
import {SampleIdea} from "./Data/Utils"
import {useEffect, useState} from "react"

function App() {
  const [masterIdeaList, setMasterIdeaList] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const sampleIdeaData = SampleIdea()
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
}
  

  useEffect(() => {
    readIdeaData()
  }, []);

  function readIdeaData(){
    Firebase
      .database()
      .ref("/ideas")
      .on("value", snapshot => {
        if (snapshot && snapshot.exists()) {
          console.log("SNAPPY")
          setMasterIdeaList(snapshot.val())
          console.log(masterIdeaList)
          setBusy(false)
        }})
  }

  function writeIdeaData() {
    Firebase.database()
      .ref("/ideas")
      .set(sampleIdeaData);
    console.log("DATA SAVED");
  };

  function addIdeaToList() {
    Firebase.database()
      .ref("/ideas").push()
      .set(sampleIdeaData);
    console.log("DATA SAVED");
  };

  return (
    <div className="App">
       {isBusy ?
      <div/> : <IdeaDisplay ideaData={masterIdeaList}/>}
    </div>
  );
}

export default App;
