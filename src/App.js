import {useState, useEffect} from "react"
import SignUp from "./components/SignUp.js"
import ProfilePage from "./components/ProfilePage.js";
import {Login} from "./components/Login.js"
import './App.css';

function App() {

  const [user, setUser] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  const [imgs, setImgs] = useState([])
  const [displayImages, setDisplay] = useState(false)

    const fetchImg = async () => {
      const response = await fetch("https://picsum.photos/v2/list")
      const data = await response.json()
      setImgs(data)
    }

  useEffect(() => {
      fetchImg()
      console.log()
    }, [])

  return (
    <div className="App">
      
        {loggedIn ? <div className="App">
          <h2>{user} logged In</h2>    
        
        <ProfilePage/>
        <br></br>
        <button onClick = {(event) => setDisplay(!displayImages)}>Activity Feed</button>
        {displayImages &&
          imgs.map((item, index) => {
            return (
              <div className="imageIndex">
              <div>
                <h2>{item.author}</h2>
                <img src = {item.download_url} alt = "from a Random API"/>
                </div>
                </div>
            )
          })}
        </div>
        : <div><p>sign up or login to access your account</p>
        <h2>Sign up here:</h2>
      <br></br>
      <SignUp setUser = {setUser} setLoggedIn = {setLoggedIn}/>
      <br></br>
      <h2>Or</h2>
      <Login setUser = {setUser} setLoggedIn = {setLoggedIn}/></div>
      }
     
    </div>
  );
}

export default App;
