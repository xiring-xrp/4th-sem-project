import HomeLayout from "../Layouts/HomeLayout";
import Suit from "../assets/images/about-suit.jpg"

function AboutUs(){

    return(
        <HomeLayout>
            <div className="bg-[#2e3138]">
                <div className="flex justify-center p-5 text-5xl text-yellow-500 font-bold">
                    <h1 className="pl-10 pt-10">About Us</h1>
                </div>

                <div className="grid grid-cols-2 mt-10">
                    <div className="flex justify-center pl-20 pr-10">
                        <img src={Suit} alt="" />
                    </div>
                    {/* <div className="flex text-white pl-10 pr-20">

                    </div> */}
                    <div className="pl-10 pr-20 w-[520px] h-[520px] p-5 border border-gray-300 overflow-y-scroll bg-white rounded-lg shadow-lg">
                        <p className="mb-4">Fitness tailoring is an intricate art that combines traditional craftsmanship with modern technology to create bespoke clothing designed to fit an individual’s exact measurements and preferences. This project involves a detailed process where skilled tailors and designers collaborate to produce garments that are not only aesthetically pleasing but also perfectly fitted to the wearer’s body shape and personal style. The initial phase of a custom tailoring project typically involves consultations with the client to understand their style preferences, fabric choices, and specific needs. Measurements are meticulously taken to ensure precision, and any unique requirements or special features the client desires are noted.</p>

                        <p className="mb-4">Following the consultation, the tailor begins the design process, creating patterns that serve as the blueprint for the garment. This stage requires a deep understanding of fabric behavior, pattern-making techniques, and sewing skills. The selected fabric is then carefully cut according to the pattern, ensuring that each piece aligns perfectly. At this point, the tailor might create a mock-up or muslin version of the garment to test the fit and make any necessary adjustments before cutting the final fabric. This step is crucial in achieving the flawless fit that custom tailoring promises.</p>

                        <p className="mb-4">As the project progresses, the garment is sewn together with painstaking attention to detail. Every stitch is placed with precision, and elements such as linings, pockets, and buttonholes are crafted with care. Custom tailoring often incorporates hand-sewn elements, adding to the garment's uniqueness and quality. The tailor also ensures that the garment’s construction allows for durability and comfort, using techniques that might be overlooked in mass-produced clothing. During this phase, multiple fittings with the client may be conducted to ensure the garment fits perfectly and to make any last-minute adjustments.</p>

                        <p className="mb-4">The final stage of the custom tailoring project involves finishing touches and quality checks. The tailor examines the garment for any imperfections, ensuring that seams are smooth, hems are even, and all details are perfect. The finished product is then presented to the client, embodying a perfect blend of style, fit, and personal expression. Custom tailoring projects not only result in unique and high-quality clothing but also foster a deeper appreciation for the craftsmanship involved in creating such bespoke pieces.</p>

                        <p className="mb-4">In today’s fast-paced fashion industry, custom tailoring stands out as a testament to the value of slow fashion and personalized service. It offers clients an opportunity to invest in timeless pieces that are made to last and tailored to their exact specifications. This project emphasizes the importance of skilled artisanship and the joy of owning clothing that truly fits and flatters. Through custom tailoring, both the tailor and the client participate in a creative journey that celebrates individuality and the art of fashion.</p>
                    </div>
                </div>


                <div className="flex justify-center p-5 text-4xl text-yellow-500 font-bold">
                    <h1 className="pl-10 pt-20">Our Experts</h1>
                </div>
                

                <div className="grid grid-cols-3 pt-5 pb-20">
                    <div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <a href="#">
                                    <img className="rounded-full w-[150px]" src={Suit} alt="" />
                                </a>
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Naresh Shahi Thakuri</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <a href="#">
                                    <img className="rounded-full w-[150px]" src={Suit} alt="" />
                                </a>
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Naresh Shahi Thakuri</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <a href="#">
                                    <img className="rounded-full w-[150px]" src={Suit} alt="" />
                                </a>
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Naresh Shahi Thakuri</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                </div>


                                
            </div>
        </HomeLayout>
    )
}

export default AboutUs;