import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";

function ClothDetails() {

    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state);
    const { isLoggedIn } = useSelector((state) => state?.auth);
  
    return (
        <HomeLayout>
            <div className="min-h-[75vh] pt-12 bg-[#2e3138] px-20 flex flex-col items-center justify-center text-white">
                {/* <button onClick={()=>navigate('/custom-clothing')} className="relative right-80 top-8">Go back</button> */}
                <Link to="/custom-clothing" className="relative right-80 top-8">Go back</Link>
                <div className="grid grid-cols-2 gap-10 py-10 ">
               
                    <div className="space-y-5">
                        <img
                            className="w-full h-64"
                            alt="thumbnail"
                            src={state?.thumbnail?.secure_url}
                        />

                        


                    </div>
                    <div className="flex flex-col gap-4 text-xl">

                        <div>
                        <p className="font-semibold">
                            <span className="text-yellow-500 font-bold">
                                Clothing Category : {" "}
                            </span>
                            {state?.clothing_type}
                        </p>

                        <div className="font-semibold">
                            <span className="text-yellow-500 font-bold">
                                Available Fabrics : {" "}
                            </span>
                            {state.fabrics.map((fabric, index) => {
                                return <p className="ml-4" key={index}>{fabric.fabric_name}:<span className="ml-2">{fabric.fabric_price}</span></p>
                            })}
                        </div>
                        <p className="font-semibold">
                            <span className="text-yellow-500 font-bold">
                                Available Colors : {" "}
                            </span>
                            {state.colors.map((color, index) => {
                                return <span key={index} className="mr-2">{color}</span>
                            })}
                        </p>

                        </div>
                        {
                            isLoggedIn && (<button onClick={()=>navigate('/custom-clothing/order',{state:{...state}})} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">Order Now</button>)
                        }

                    </div>


                </div>
            </div>
        </HomeLayout>
    );
}

export default ClothDetails;