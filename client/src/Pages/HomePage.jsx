import { Link } from "react-router-dom";

import Measurement from "../assets/images/measurement.jpeg";
import HomeLayout from "../Layouts/HomeLayout";

function HomePage() {
    return (
        <HomeLayout>

            <div className="bg-[#2e3138]">
                <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[100vh]">
                        <div className="w-1/2 space-y-6">
                            <h1 className="text-5xl font-semibold">
                                Discover the art of bespoke tailoring with   
                                <span className="text-yellow-500 font-bold">
                                    Fitness Tailor
                                </span>
                            </h1>
                            <p className="text-xl text-gray-200">
                                Our expert artisans blend craftsmanship with your individuality to create timeless pieces that fit like a dream. Elevate your style to new heights. Explore our world of personalized fashion today.
                            </p>

                            <div className="space-x-6">
                                <Link to="/store">
                                    <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Explore stores
                                    </button>
                                </Link>

                                <Link to="/contact">
                                    <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="w-1/2 flex items-center justify-center">
                            <img alt="homepage image" src={Measurement} />
                        </div>
                </div>

                <div className="flex gap-10 p-5">

                    <div className="">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://www.mykingandbay.com/files/king-and-bay-custom-clothing-groom-suit-tuxedo.png" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Suits</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://ae01.alicdn.com/kf/Saf0f692b28074a4db17f4844d3ba2e2cS.jpg?width=800&height=800&hash=1600" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Shirts</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://media.istockphoto.com/id/511480160/photo/blue-jeans-on-a-brown-wooden-background.jpg?s=612x612&w=0&k=20&c=o1_G3SEkHQs-jnAllsculoNa4t36nPUgQ9vzLpXQHYk=" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Jeans</button>
                        </div>
                    </div>

                </div>

                <div className="flex gap-10 p-5">

                    <div className="">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://www.mykingandbay.com/files/king-and-bay-custom-clothing-groom-suit-tuxedo.png" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Suits</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://ae01.alicdn.com/kf/Saf0f692b28074a4db17f4844d3ba2e2cS.jpg?width=800&height=800&hash=1600" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Shirts</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://media.istockphoto.com/id/511480160/photo/blue-jeans-on-a-brown-wooden-background.jpg?s=612x612&w=0&k=20&c=o1_G3SEkHQs-jnAllsculoNa4t36nPUgQ9vzLpXQHYk=" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Jeans</button>
                        </div>
                    </div>

                </div>                

                <div className="flex gap-10 p-5">

                    <div className="">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://www.mykingandbay.com/files/king-and-bay-custom-clothing-groom-suit-tuxedo.png" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Suits</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://ae01.alicdn.com/kf/Saf0f692b28074a4db17f4844d3ba2e2cS.jpg?width=800&height=800&hash=1600" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Shirts</button>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-80">
                            <img src="https://media.istockphoto.com/id/511480160/photo/blue-jeans-on-a-brown-wooden-background.jpg?s=612x612&w=0&k=20&c=o1_G3SEkHQs-jnAllsculoNa4t36nPUgQ9vzLpXQHYk=" alt="" className="h-[70vh]" />
                            <button className="bg-yellow-500 text-white p-3 text-center hover:bg-yellow-600 transition-all duration-500">Jeans</button>
                        </div>
                    </div>

                </div>
            </div>

        </HomeLayout>
    );
}

export default HomePage;