import { Route, Routes } from "react-router-dom"
import ClothDetails from "./Components/ClothDetails"
import ClothingCategoryList from "./Components/ClothingCategoryList"
import CollectionCard from "./Components/CollectionCard"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ClothingForm from "./Pages/Admin/ClothingForm"
import ClothingList from "./Pages/Admin/ClothingsList"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
import Measurement from "./Pages/Measurement"
import Order from "./Pages/Order"
import Signup from "./Pages/Signup"
import EditProfile from "./Pages/User/EditProfile"
import Profile from "./Pages/User/Profile"

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/measurement/add" element={<Measurement />} />
      <Route path="/user/profile" element={<Profile />}></Route>
      <Route path="/user/editprofile" element={<EditProfile />}></Route>
      <Route path="/custom-clothing" element={<CollectionCard />}></Route>
      <Route path="/custom-clothing/clothing-categories-list/details" element={<ClothDetails />}></Route>
      <Route path="/admin" element={<AdminDashboard />}></Route>
      <Route path="/admin/clothing" element={<ClothingList/>}></Route>
      <Route path="/admin/clothing/create" element={<ClothingForm/>}></Route>
      <Route path="/custom-clothing/clothing-categories-list" element={<ClothingCategoryList/>}></Route>
      <Route path="/custom-clothing/order" element={<Order />}></Route>
    
    </Routes>
  )
}

export default App