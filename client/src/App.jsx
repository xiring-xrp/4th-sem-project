import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Footer from "./Components/Footer"


function App() {
 
  return (
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/footer" element={<Footer />}></Route>
    </Routes>
  )
}

export default App