import { Route, Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import HomePage from "./Pages/HomePage"
import Profile from "./Pages/User/Profile"
import EditProfile from "./Pages/User/EditProfile"
import CollectionCard from "./Components/CollectionCard"

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/user/profile" element={<Profile />}></Route>
      <Route path="/user/editprofile" element={<EditProfile />}></Route>
      <Route path="/store" element={<CollectionCard />}></Route>
    </Routes>
  )
}

export default App