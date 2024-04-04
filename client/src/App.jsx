import { Route, Routes } from "react-router-dom"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import HomePage from "./Pages/HomePage"
import Profile from "./Pages/User/Profile"
import EditProfile from "./Pages/User/EditProfile"
import CollectionCard from "./Components/CollectionCard"
import ClothDetails from "./Components/ClothDetails"
import AdminLayout from "./Layouts/AdminLayout"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ClothingList from "./Pages/Admin/ClothingsList"
import ClothingForm from "./Pages/Admin/ClothingForm"
import ClothingCategoryList from "./Components/ClothingCategoryList"
import ClothingOrder from "./Components/ClothingOrder"

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/user/profile" element={<Profile />}></Route>
      <Route path="/user/editprofile" element={<EditProfile />}></Route>
      <Route path="/custom-clothing" element={<CollectionCard />}></Route>
      <Route path="/custom-clothing/clothing-categories-list/details" element={<ClothDetails />}></Route>
      <Route path="/admin" element={<AdminDashboard />}></Route>
      <Route path="/admin/clothing" element={<ClothingList/>}></Route>
      <Route path="/admin/clothing/create" element={<ClothingForm/>}></Route>
      <Route path="/custom-clothing/clothing-categories-list" element={<ClothingCategoryList/>}></Route>
      <Route path="/custom-clothing/order" element={<ClothingOrder />}></Route>
    </Routes>
  )
}

export default App