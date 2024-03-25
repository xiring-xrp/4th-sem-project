import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className='relative left-0 bottom-0 h-[25vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-red'>
                    <div>
                        <p className='text-[20px] mb-1'>Contact Info</p>
                        <div className='flex pl-3 m-0'>
                            <BsEnvelope className='relative top-2 h-4 w-4' /> <p className='text-[14px] ml-2'>fitnesstailor21@gmail.com</p>
                        </div>
                        <div className='flex pl-3 m-0'>
                            <BsGeoAlt className='relative h-4 w-4 top-2'/> <p className='text-[14px] ml-2'>Chabahil, Kathmandu, Nepal</p>
                        </div>
                        <div className='flex pl-3 m-0'>
                            <BsTelephone className='relative h-4 w-4 top-2'/> <p className='text-[14px] ml-2'>9823647181</p>
                        </div>
                    </div>
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsFacebook />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsInstagram />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsLinkedin />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    );

}

export default Footer;