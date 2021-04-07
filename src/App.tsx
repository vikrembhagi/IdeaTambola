import './App.css';
import { IdeaDisplay } from "./Pages/IdeaDisplay"
import Firebase from "firebase"
import config from "./config"
import { SampleIdea } from "./Data/Utils"
import { NewIdea } from "./Pages/NewIdea"
import { useEffect, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";

function App() {

  //Styles 
  const appHeader = {
    display: "flex",
    height: "10vh",
    justifyContent: "center",
    flexDirection: "column" as "column",
    margin: "48px"
  };

  const appTitle = {
    fontSize: "48px"
  }

  const navItemContainer = {
    padding: 16,
  }

  const navItem = {
    color: "white"
  }

  const navItemSelected = {
    color: "yellow",
    textDecoration: "underline"
  }

  const navHeader = {
    display: "flex",
    flexDirection: "row" as "row",
    width: "100%",
    justifyContent: "center",
    fontSize: 20
  }

  const appContainer = {
    display: "flex"
  }

  //Firebase functions 
  if (!Firebase.apps.length) {
    Firebase.initializeApp(config)
  }
  useEffect(() => {
    readIdeaData()
  }, []);

  function readIdeaData() {
    Firebase
      .database()
      .ref("/")
      .on("value", snapshot => {
        if (snapshot && snapshot.exists()) {
          setMasterIdeaList(snapshot.val())
          setLoadingIdeas(false)
        }
      })

  }

  function writeIdeaData() {
    Firebase.database()
      .ref("/")
      .set(sampleIdeaData)
  };


  function addIdeaToList(newIdeaForList: any) {
    Firebase.database()
      .ref("/").push()
      .set(newIdeaForList)
    console.log("DATA SAVED")
  };

  //Helper functions  
  function getLocation() {
    let pathLocation = window.location.pathname
    console.log(pathLocation)
    return pathLocation
  }

  function setAppPageState() {
    const activePath = getLocation()
    console.log(activePath)
    setActivePage(activePath)
  }

  function formSubmission(ideaForm: any) {
    addIdeaToList(ideaForm)
    console.log(ideaForm)
  }

  //Component stuff 
  const sampleIdeaData = SampleIdea()
  const [masterIdeaList, setMasterIdeaList] = useState([]);
  const [loadingIdeas, setLoadingIdeas] = useState(true);
  const [activePage, setActivePage] = useState("")



  return (
    <Router>
      <div className="App">
        <div style={appHeader}>
          <div style={appTitle}>Idea Tambola</div>
          <div style={navHeader}>
            <div style={navItemContainer}>
              <NavLink exact to="/" className="navItemUnselected" activeClassName="navItemSelected">View</NavLink>
            </div>
            <div style={navItemContainer}>
              <NavLink to="/newidea" activeClassName="navItemSelected">New</NavLink>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/newidea">
            <NewIdea formSubmissionHook={formSubmission} />
          </Route>
          <Route path="/">
            {loadingIdeas ? <div /> : <IdeaDisplay ideaData={masterIdeaList} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
