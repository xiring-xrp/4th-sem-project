import { useState } from "react";
import toast from "react-hot-toast";
import HomeLayout from "../Layouts/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    }
    
    return (
        <HomeLayout>
            <div className="flex py-14 px-16 bg-[#2e3138] text-white">
                <form noValidate onSubmit={createNewMeasurement} className="grid grid-cols-3 ">
                    <div className="">
                        <label htmlFor="neck">NECK</label><br />
                        <input 
                            className="text-black"
                            type="text" 
                            required
                            name="neck"
                            id="neck"
                            onChange={handleUserInput}
                            value={measurementData.neck}
                        /> <br />
                        <label htmlFor="sleeves_length">SLEEVES LENGTH</label><br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="sleevesLength"
                            id="sleeves_length"
                            onChange={handleUserInput}
                            value={measurementData.sleevesLength}
                        /> <br />
                        <label htmlFor="shoulder_width">SHOULDER WIDTH</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="shoulderWidth"
                            id="shoulder_width"
                            onChange={handleUserInput}
                            value={measurementData.shoulderWidth}
                        /> <br />
                        <label htmlFor="chest_around">CHEST AROUND</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="chestAround"
                            id="chest_around"
                            onChange={handleUserInput}
                            value={measurementData.chestAround}
                        /> <br />
                        <label htmlFor="stomach">STOMACH</label> <br />
                        <input 
                            type="text"
                            required
                            name="stomach"
                            className="text-black"
                            id="stomach"
                            onChange={handleUserInput}
                            value={measurementData.stomach}
                        />
                    </div>
                    <div>
                        
                    </div>
                    <div className="">
                        <label htmlFor="leg_length">LEG LENGTH</label> <br />
                        <input className="text-black"
                            type="text"
                            required
                            name="legLength"
                            id="leg_length"
                            onChange={handleUserInput}
                            value={measurementData.legLength}
                        /> <br />
                        <label htmlFor="pants_waist">PANTS WAIST</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="pantsWaist"
                            id="pants_waist"
                            onChange={handleUserInput}
                            value={measurementData.pantsWaist}
                        /> <br />
                        <label htmlFor="hips">HIPS</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="hips"
                            id="hips"
                            onChange={handleUserInput}
                            value={measurementData.hips}
                        /> <br />
                        <label htmlFor="bicep_around">BICEP AROUND</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="bicepAround"
                            id="bicep_around"
                            onChange={handleUserInput}
                            value={measurementData.bicepAround}
                        /> <br />
                        <label htmlFor="thigh">THIGH</label> <br />
                        <input 
                            type="text"
                            required
                            className="text-black"
                            name="thigh"
                            id="thigh"
                            onChange={handleUserInput}
                            value={measurementData.thigh}
                        /> 
                    </div>
                    <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm px-5 py-2 font-semibold text-lg cursor-pointer">CONFIRM MEASUREMENT</button>
                </form>
            </div>
        </HomeLayout>
    )
}

export default Measurement;