import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home/Home";

function App() {
  const currentUser = true;
  return (
    <>
    <Router>
    <Topbar/>
  <Route exact path="/">
  <Home/>
  </Route>

  <Route path="/post">
  <Home/>
  </Route>

  <Route path="/login">
  {currentUser ? <Home/> : <Login/>}
  </Route>

  <Route path="/post/:id">
  <Single/>
  </Route>

  <Route path="/write">
  {currentUser ? <Write/> : <Login/>}
  </Route>

  <Route path="/setting">
  {currentUser ? <Settings/> : <Login/>}
  </Route>

      
    </Router>
    </>
  );
}

export default App;
