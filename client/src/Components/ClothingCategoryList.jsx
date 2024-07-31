import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

function ClothingCategoryList() {
    const { state } = useLocation();
    const navigate=useNavigate();
    console.log(state);
    return <HomeLayout>
        <div className="bg-[#2e3138]">
            <div className="flex p-5 text-5xl text-yellow-500 font-bold">
                <h1 className="pl-10 pt-10">{state.clothing} Types</h1>
            </div>

            <div className="flex gap-10 p-5">

                {
                    state.clothing_category.map((clothing) => {
                        return <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src={clothing.thumbnail.secure_url} alt={`${clothing.clothing_type} image`} className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500" onClick={() => navigate(`/custom-clothing/clothing-categories-list/details/${state.clothing}`, { state: { ...clothing } })}>{clothing.clothing_type}</button>
                        </div>
                    })
                }


            </div>



        </div>
    </HomeLayout>
}
export default ClothingCategoryList;