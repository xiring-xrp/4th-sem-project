import { Link } from "react-router-dom";
import Tailors from "../assets/images/Tailors.png"
import Chinos from "../assets/images/Chinos.jpg";
import Coats from "../assets/images/Coats.jpg";
import Jeans from "../assets/images/Jeans.jpg";
import HomeLayout from "../Layouts/HomeLayout";
import CarouselSlide from "../Components/CarouselSlide";

function HomePage() {
    const images=[Chinos, Coats, Jeans]
    
    return (
        <HomeLayout>

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
                                <Link to="/custom-clothing">
                                    <button className="bg-yellow-500 px-7 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Custom
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
                            <img className="rounded-full" alt="homepage image" src={Tailors} />
                        </div>
                </div>

                <div className="carousel flex h-[550px] ">
                {images.map((image,index)=>{
                    // return <img src={image} key={index}/>
                    return <CarouselSlide img={image} key={index} slideNumber={index+1} totalSlides={images.length}/>
                })}  
            </div>  
            </div>

        </HomeLayout>
    );
}

export default HomePage;