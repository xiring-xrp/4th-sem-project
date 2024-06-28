import AdminLayout from "../../Layouts/AdminLayout";
import { Link } from "react-router-dom";
import Tailors from "../../assets/images/Tailors.png"

function AdminDashboard(){
    return(
        <AdminLayout>
            <div className="bg-[#2e3138]">
                <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[100vh]">
                        <div className="w-1/2 space-y-6">
                            <h1 className="text-5xl font-semibold">
                                  
                                <span className="text-yellow-500 font-bold">
                                    Fitness Tailor
                                </span>
                            </h1>
                            <p className="text-xl text-gray-200">
                                Our expert artisans blend craftsmanship with your individuality to create timeless pieces that fit like a dream. Elevate your style to new heights. Explore our world of personalized fashion today.
                            </p>

                            <div className="space-x-6">
                                <Link to="/admin/clothing/create">
                                    <button className="bg-yellow-500 px-7 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Create Clothing
                                    </button>
                                </Link>


                            </div>
                        </div>
                        <div className="w-1/2 flex items-center justify-center">
                            <img className="rounded-full" alt="" src={Tailors} />
                        </div>

                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard;