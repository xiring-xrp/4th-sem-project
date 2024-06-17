import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { getUserData } from "../../redux/slices/authSlice";

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector((state) => state?.auth?.data);
    const [isMount,setIsMount]=useState(false);
    async function getDetails() {
        await dispatch(getUserData());
    }
    useEffect(() => {
        getDetails();
        setIsMount(true);
        console.log(isMount);
        console.log("Hello");
    }, [dispatch]);

    console.log(userData);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] bg-[#2e3138] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <img
                        src={userData?.avatar?.secure_url}
                        className="w-40 m-auto rounded-full border border-black"
                        alt={`${userData?.fullName}'s avatar`}
                    />
                    <h3 className="text-xl font-semibold text-center capitalize">
                        {userData?.fullName}
                    </h3>
                    <div className="grid grid-cols-2">
                        <p>Email: </p><p>{userData?.email}</p>
                        <p>Role: </p><p>{userData?.role}</p>
                        {userData?.measurementId && (
                            <div>
                                <p>Measurement:</p>
                                <p>Neck: {userData.measurementId.neck}</p>
                                <p>Sleeves Length: {userData.measurementId.sleevesLength}</p>
                                <p>Shoulder Width: {userData.measurementId.shoulderWidth}</p>
                                <p>Chest Around: {userData.measurementId.chestAround}</p>
                                <p>Stomach: {userData.measurementId.stomach}</p>
                                <p>Leg Length: {userData.measurementId.legLength}</p>
                                <p>Pants Waist: {userData.measurementId.pantsWaist}</p>
                                <p>Hips: {userData.measurementId.hips}</p>
                                <p>Bicep Around: {userData.measurementId.bicepAround}</p>
                                <p>Thigh: {userData.measurementId.thigh}</p>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        {!userData?.measurementId ? (
                            <Link
                                to="/measurement/add"
                                className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
                            >
                                <button>Add Measurement</button>
                            </Link>
                        ) : (
                            <Link
                                to="/edit-measurement"
                                className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
                            >
                                <button>Edit Measurement</button>
                            </Link>
                        )}
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <Link
                            to="/user/editprofile"
                            className="w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
                        >
                            <button>Edit profile</button>
                        </Link>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Profile;
