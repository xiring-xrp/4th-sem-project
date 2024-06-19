import { Route, Router, Routes } from "react-router-dom"
import ClothDetails from "./Components/ClothDetails"
import ClothingCategoryList from "./Components/ClothingCategoryList"
import CollectionCard from "./Components/CollectionCard"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ClothingForm from "./Pages/Admin/ClothingForm"
import ClothingList from "./Pages/Admin/ClothingsList"
import Ordered from "./Pages/Admin/ordered"
import HomePage from "./Pages/HomePage"
import Login from './Pages/Login'
import Measurement from './Pages/Measurement'
import Order from "./Pages/Order"
import OrderHistory from "./Pages/OrderHistory/OrderHistory"
import Signup from "./Pages/Signup"
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'
import AboutUs from "./Pages/AboutUs"
import EditClothing from "./Pages/Admin/EditClothing"
import RequireAuth from "./Components/RequireAuth"
import Denied from "./Pages/Denied"
import NotFound from "./Pages/NotFound"
function App() {
 
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/custom-clothing" element={<CollectionCard />}></Route>
        <Route path="/custom-clothing/clothing-categories-list" element={<ClothingCategoryList/>}></Route>
        <Route path="/custom-clothing/clothing-categories-list/details/:clothing" element={<ClothDetails />}></Route>
      <Route element={<RequireAuth allowedRoles={["USER"]}/>}>
        <Route path="/custom-clothing/order/:clothing" element={<Order />}></Route>
        <Route path="/user/order-history" element={<OrderHistory />} />
        <Route path="/measurement/add" element={<Measurement />} />
        <Route path="/user/profile" element={<Profile />}></Route>
        <Route path="/user/editprofile" element={<EditProfile />}></Route>
      </Route>
      <Route path="/denied" element={<Denied/>}>

      </Route>
      <Route path="*" element={<NotFound/>}>

      </Route>
      <Route element = {<RequireAuth  allowedRoles={["ADMIN"]} />}>
        <Route path="/admin/profile" element={<Profile />}></Route>
        <Route path="/admin/editprofile" element={<EditProfile />}></Route>
        <Route path="/admin" element={<AdminDashboard />}></Route>
        <Route path="/admin/clothing" element={<ClothingList/>}></Route>
        <Route path="/admin/clothing/create" element={<ClothingForm/>}></Route>
        <Route path="/admin/ordered" element={<Ordered />} />
        <Route path="/admin/clothing/edit/:id" element={<EditClothing/>}></Route>
        {/* <Route path="/order" element={<Order />} /> */}
      </Route>
    </Routes>
  )
}

export default App