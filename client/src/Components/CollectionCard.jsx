import HomeLayout from "../Layouts/HomeLayout";
import Jeans from "../assets/images/Jeans.jpg"
import Shirts from "../assets/images/Shirts.jpg"
import Chinos from "../assets/images/Chinos.jpg"
import PoloShirts from "../assets/images/poloShirts.jpg"
import Suits from "../assets/images/Suits.png"
import Coats from "../assets/images/Coats.jpg"
import { useDispatch, useSelector } from "react-redux";
import { getAllClothings } from "../redux/slices/clothingSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function CollectionCard({ data }) {
    const clothingData  = useSelector((state) => state.clothing.clothingData);
    const navigate=useNavigate();
    const dispatch=useDispatch();
   async function getEveryClothings(){
        await dispatch(getAllClothings())
    }
    useEffect(()=>{
        getEveryClothings()
    },[])
    return (
        <HomeLayout>
            <div className="bg-[#2e3138]">
                <div className="flex p-5 text-5xl text-yellow-500 font-bold">
                    <h1 className="pl-10 pt-10">Custom Clothing</h1>
                </div>

                <div className="flex gap-10 p-5">

                    {
                        clothingData.map((clothing) => {
                            console.log(clothing);
                            return <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                                <img src="https://res.cloudinary.com/dluktmyew/image/upload/v1712854074/lms/nnmstknodeion5f21kcb.jpg" alt={`${clothing.clothing}`} className="h-[70vh]" />
                                <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500" onClick={()=>navigate('/custom-clothing/clothing-categories-list',{state: {...clothing}})}>{clothing.clothing}</button>
                            </div>
                        })
                    }


                </div>



            </div>
        </HomeLayout>
    );
}

export default CollectionCard;