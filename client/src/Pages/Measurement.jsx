import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import { createMeasurement } from "../redux/slices/measurementSlice";
function Measurement(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data}=useSelector((state)=>state?.auth);
    const [measurementData, setMeasurementData] = useState({
        neck: "",
        sleevesLength: "",
        shoulderWidth: "",
        chestAround: "",
        stomach: "",
        legLength: "",
        pantsWaist: "",
        hips: "",
        bicepAround: "",
        thigh: "",
        userId:useSelector((state)=>state?.auth?.data?._id)
    });

    const handleUserInput = (e) => {
        const {name, value} = e.target;
        setMeasurementData({
            ...measurementData,
            [name] : value
        })
    }
    console.log(measurementData)

    async function createNewMeasurement(event){
        console.log('Hi');
        event.preventDefault();
        // if(!measurementData.neck || !measurementData.sleevesLength || !measurementData.shoulderWidth || !measurementData.chestAround || !measurementData.stomach || !measurementData.legLength || !measurementData.pantsWaist || !measurementData.hips || !measurementData.bicepAround || !measurementData.thigh){
        //     toast.error("Please fill all the details");
        //     return
        // }
        const response = await dispatch(createMeasurement(measurementData));
        if(response?.payload?.success){
            setMeasurementData({
                neck: "",
                sleevesLength: "",
                shoulderWidth: "",
                chestAround: "",
                stomach: "",
                legLength: "",
                pantsWaist: "",
                hips: "",
                bicepAround: "",
                thigh: ""
            })

        }
        navigate("/user/profile")
    }

    
    
    return (
        <HomeLayout>
            <div className="flex py-20 px-16 bg-[#2e3138] text-white">
                <form noValidate onSubmit={createNewMeasurement} className="grid grid-cols-3 ">
                    <div className="ml-20 grid grid-cols-2">
                        <label htmlFor="neck">NECK</label><br />
                        <input 
                            className="text-black rounded-sm pl-1"
                            type="text" 
                            required
                            name="neck"
                            id="neck"
                            onChange={handleUserInput}
                            value={measurementData.neck}
                        /> <br />
                        <label htmlFor="sleeves_length" className="mt-2">SLEEVES LENGTH</label><br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="sleevesLength"
                            id="sleeves_length"
                            onChange={handleUserInput}
                            value={measurementData.sleevesLength}
                        /> <br />
                        <label htmlFor="shoulder_width" className="mt-2">SHOULDER WIDTH</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="shoulderWidth"
                            id="shoulder_width"
                            onChange={handleUserInput}
                            value={measurementData.shoulderWidth}
                        /> <br />
                        <label htmlFor="chest_around" className="mt-2">CHEST AROUND</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="chestAround"
                            id="chest_around"
                            onChange={handleUserInput}
                            value={measurementData.chestAround}
                        /> <br />
                        <label htmlFor="stomach" className="mt-2">STOMACH</label> <br />
                        <input 
                            type="text"
                            required
                            name="stomach"
                            className="text-black rounded-sm pl-1"
                            id="stomach"
                            onChange={handleUserInput}
                            value={measurementData.stomach}
                        />
                    </div>
                    <div>
                        
                    </div>
                    <div className="grid grid-cols-2">
                        <label htmlFor="leg_length" className="mt-2">LEG LENGTH</label> <br />
                        <input className="text-black rounded-sm pl-1"
                            type="text"
                            required
                            name="legLength"
                            id="leg_length"
                            onChange={handleUserInput}
                            value={measurementData.legLength}
                        /> <br />
                        <label htmlFor="pants_waist" className="mt-2">PANTS WAIST</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="pantsWaist"
                            id="pants_waist"
                            onChange={handleUserInput}
                            value={measurementData.pantsWaist}
                        /> <br />
                        <label htmlFor="hips">HIPS</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="hips"
                            id="hips"
                            onChange={handleUserInput}
                            value={measurementData.hips}
                        /> <br />
                        <label htmlFor="bicep_around" className="mt-2">BICEP AROUND</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="bicepAround"
                            id="bicep_around"
                            onChange={handleUserInput}
                            value={measurementData.bicepAround}
                        /> <br />
                        <label htmlFor="thigh" className="mt-2">THIGH</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black rounded-sm pl-1"
                            name="thigh"
                            id="thigh"
                            onChange={handleUserInput}
                            value={measurementData.thigh}
                        /> 
                    </div>
                    <button type="submit" className="mt-8 ml-20 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded px-2 py-2 font-semibold text-lg cursor-pointer">Confirm Measurement</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Measurement;