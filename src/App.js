import {useState, useEffect} from "react"
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import ProfilePage from "./components/ProfilePage.js";
import Update from "./components/Update.js";
import {Logout} from "./components/Logout.js"
import {Delete} from "./components/Delete.js"
import {Read} from "./components/Read.js"
import './App.css';


function App() {

  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  

  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <div>
          {/* User Logged in Status */}
        </div>
        <div className="navLinks">
          <Link className="navLinks1" to="/">Home</Link>
        </div>
        <div className="navLinks">
          <Link className="navLinks1" to="/read">Display Users</Link>
        </div>
        <div className="navLinks">
          <Link className="navLinks1" to="/update">Update Profile</Link>
        </div>
        <div className="navLinks">
          <Link className="navLinks1" to="/delete">Delete Account</Link>
        </div>
        <div className="navLinks">
          <Link className="navLinks1" to="/logout">Logout</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element = {<ProfilePage user = {user} setUser = {setUser} loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} />}></Route>
        <Route path="/read" element = {<Read/>}></Route>
        <Route path="/update" element = {<Update/>}></Route>
        <Route path="/delete" element = {<Delete/>}></Route>
        <Route path="/logout" element = {<Logout/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
