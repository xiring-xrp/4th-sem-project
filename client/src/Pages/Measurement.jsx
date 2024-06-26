import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import { createMeasurement } from "../redux/slices/measurementSlice";

function Measurement() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state?.auth);
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
        userId: useSelector((state) => state?.auth?.data?._id)
    });

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setMeasurementData({
            ...measurementData,
            [name]: value
        });
    };
    console.log(measurementData);

    async function createNewMeasurement(event) {
        console.log('Hi');
        event.preventDefault();
        // if(!measurementData.neck || !measurementData.sleevesLength || !measurementData.shoulderWidth || !measurementData.chestAround || !measurementData.stomach || !measurementData.legLength || !measurementData.pantsWaist || !measurementData.hips || !measurementData.bicepAround || !measurementData.thigh){
        //     toast.error("Please fill all the details");
        //     return
        // }
        const response = await dispatch(createMeasurement(measurementData));
        if (response?.payload?.success) {
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
            });
        }
        navigate("/user/profile");
    }

    return (
        <HomeLayout>
            <div className="py-20 px-16  bg-[#2e3138] text-white">
                <div className="">
                <form noValidate onSubmit={createNewMeasurement} className="grid grid-cols-2 mt-[50px] ml-[250px]">
                    <div className="ml-20 grid grid-cols-2">
                        <div>
                            <div>
                                <label htmlFor="neck">NECK</label><br />
                                <input
                                    className="text-black rounded-sm pl-1 w-16"
                                    type="text"
                                    required
                                    name="neck"
                                    id="neck"
                                    onChange={handleUserInput}
                                    value={measurementData.neck}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="sleeves_length" className="mt-2">SLEEVES LENGTH</label><br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="sleevesLength"
                                    id="sleeves_length"
                                    onChange={handleUserInput}
                                    value={measurementData.sleevesLength}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>
                            <div>
                                <label htmlFor="shoulder_width" className="mt-2">SHOULDER WIDTH</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="shoulderWidth"
                                    id="shoulder_width"
                                    onChange={handleUserInput}
                                    value={measurementData.shoulderWidth}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="chest_around" className="mt-2">CHEST AROUND</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="chestAround"
                                    id="chest_around"
                                    onChange={handleUserInput}
                                    value={measurementData.chestAround}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="stomach" className="mt-2">STOMACH</label> <br />
                                <input
                                    type="text"
                                    required
                                    name="stomach"
                                    className="text-black rounded-sm pl-1 w-16"
                                    id="stomach"
                                    onChange={handleUserInput}
                                    value={measurementData.stomach}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <div>
                                <label htmlFor="leg_length" className="mt-2">LEG LENGTH</label> <br />
                                <input className="text-black rounded-sm pl-1 w-16"
                                    type="text"
                                    required
                                    name="legLength"
                                    id="leg_length"
                                    onChange={handleUserInput}
                                    value={measurementData.legLength}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="pants_waist" className="mt-2">PANTS WAIST</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="pantsWaist"
                                    id="pants_waist"
                                    onChange={handleUserInput}
                                    value={measurementData.pantsWaist}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="hips">HIPS</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="hips"
                                    id="hips"
                                    onChange={handleUserInput}
                                    value={measurementData.hips}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="bicep_around" className="mt-2">BICEP AROUND</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="bicepAround"
                                    id="bicep_around"
                                    onChange={handleUserInput}
                                    value={measurementData.bicepAround}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>

                            <div>
                                <label htmlFor="thigh" className="mt-2">THIGH</label> <br />
                                <input
                                    type="text"
                                    required
                                    className="text-black rounded-sm pl-1 w-16"
                                    name="thigh"
                                    id="thigh"
                                    onChange={handleUserInput}
                                    value={measurementData.thigh}
                                />
                                <p className="text-black font-bold relative bottom-6 left-10">cm</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="ml-[200px] mt-10 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded px-2 py-2 font-semibold text-lg cursor-pointer">Confirm Measurement</button>
                    </div>
                </form>
                </div>
                
            </div>
        </HomeLayout>
    );
}

export default Measurement;
