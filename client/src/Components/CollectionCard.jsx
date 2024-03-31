import HomeLayout from "../Layouts/HomeLayout";
import Jeans from "../assets/images/Jeans.jpg"
import Shirts from "../assets/images/Shirts.jpg"
import Chinos from "../assets/images/Chinos.jpg"
import PoloShirts from "../assets/images/poloShirts.jpg"
import Suits from "../assets/images/Suits.png"
import Coats from "../assets/images/Coats.jpg"


function CollectionCard({ data }) {

    return (
        <HomeLayout>
        <div className="bg-[#2e3138]">
            <div className="flex p-5 text-5xl text-yellow-500 font-bold">
                <h1 className="pl-10 pt-10">Custom Clothing</h1>
            </div>

            <div className="flex gap-10 p-5">
                <div className="">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={Suits} alt="suits" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Suits</button>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={Shirts} alt="shirts" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Shirts</button>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={Jeans} alt="jeans" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Jeans</button>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 p-5">
                <div className="">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={Coats} alt="cpats" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Coats</button>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={PoloShirts} alt="polo-shirts" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Polo Shirts</button>
                    </div>
                </div>

                <div className="flex">
                    <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                        <img src={Chinos} alt="chinos" className="h-[70vh]" />
                        <button className="bg-yellow-500 text-white p-3 font-bold text-center hover:bg-yellow-600 transition-all duration-500">Chinos</button>
                    </div>
                </div>
            </div>

        </div>
        </HomeLayout>
    );
}

export default CollectionCard;