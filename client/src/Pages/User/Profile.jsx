import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getUserData } from "../../redux/slices/authSlice";
import { useEffect } from "react";
import { getMeasurementData } from "../../redux/slices/measurementSlice";

function Profile() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state?.auth?.data);
    const measurementData = useSelector((state) => state?.measurement.measureData);

    // async function handleCancellation() {
    //     toast("Initiating cancellation");
    //     await dispatch(cancelCourseBundle());
    //     await dispatch(getUserData());
    //     toast.success("Cancellation completed!");
    //     navigate("/");

    async function getDetails(){
        await dispatch(getUserData());
        await dispatch(getMeasurementData());
    }
    console.log(userData);
    console.log(measurementData)
    useEffect(()=>{
        
        getDetails();
    },[])
   
    return (
        <HomeLayout>
            <div className="min-h-[90vh] bg-[#2e3138] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <img
                        src={userData?.avatar?.secure_url}
                        className="w-40 m-auto rounded-full border border-black"
                    />
                    <h3 className="text-xl font-semibold text-center capitalize">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2">
                        <p>Email: </p><p>{userData?.email}</p>
                        <p>Role: </p><p>{userData?.role}</p>
                        <p>Measurement: </p><p>
                            <p>Neck:{userData.measurementId.neck}</p>
                            <p>Sleeves Length:{userData.measurementId.sleevesLength}</p>
                            <p>Shoulder Width: {userData.measurementId.shoulderWidth}</p>
                            <p>Chest Around: {userData.measurementId.chestAround}</p>
                            <p>Stomach {userData.measurementId.stomach}</p>
                            <p>Leg Length {userData.measurementId.legLength}</p>
                            <p>Pants Waist {userData.measurementId.pantsWaist}</p>
                            <p>Hips: {userData.measurementId.hips}</p>
                            <p>Bicep Around: {userData.measurementId.bicepAround}</p>
                            <p>Thigh: {userData.measurementId.thigh}</p>
                        </p>
                        {/* <p>Subscription: </p>
                        <p>{userData?.subscription?.status === "active" ? "Action" : "Inactive"}</p> */}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      {measurementData.length === 0?(
                          <Link 
                          to="/measurement/add" 
                          className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                              <button>Add Measurement</button>

                      </Link>
                      ):(
                        <Link 
                            to="/edit-measurement" 
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                                <button>Edit Measurement</button>

                        </Link>)}
                    </div>
                    <div className="flex items-center justify-between gap-2">

                        <Link 
                            to="/changepassword" 
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                                <button>Change password</button>

                        </Link>
                        <Link 
                            to="/user/editprofile" 
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                                <button>Edit profile</button>

                        </Link>
                    </div>
                    {/* {userData?.subscription?.status === "active" && (
                        <button onClick={handleCancellation} className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center">
                            Cancel Subscription
                        </button>
                    )} */}
                </div>
            </div>
        </HomeLayout>
    );

}

export default Profile;