import './App.css';
import {IdeaDisplay} from "./Pages/IdeaDisplay"
import Firebase from "firebase"
import config from "./config"
import {SampleIdea} from "./Data/Utils"
import {NewIdea} from "./Pages/NewIdea"
import {useEffect, useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [masterIdeaList, setMasterIdeaList] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const sampleIdeaData = SampleIdea()


  const appHeader = {
    display: "flex",
    fontSize: "48px",
    height:"10vh",
    justifyContent: "center",
    margin: "48px"
  };

  const appContainer = {
    display:"flex"
  }

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
          setMasterIdeaList(snapshot.val())
          console.log(masterIdeaList)
          setBusy(false)
        }})
  }

  function writeIdeaData() {
    Firebase.database()
      .ref("/ideas")
      .set(sampleIdeaData)
  };

  function addIdeaToList() {
    Firebase.database()
      .ref("/ideas").push()
      .set(sampleIdeaData)
    console.log("DATA SAVED")
  };

  return (
    <Router>
    <div className="App">
    <div style={appHeader}>Idea Tambola</div>
      <Switch>
      <Route path="/newidea">
            <NewIdea/>
          </Route>

      <Route path="/">
       {isBusy ?
      <div/> : <IdeaDisplay ideaData={masterIdeaList}/>}
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
