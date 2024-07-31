function CarouselSlide({img,  slideNumber, totalSlides}) {
    
    return (
                <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
            
                        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-20">
                            <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber - 1))}`} className="btn btn-circle">❮</a> 
                            <img src={img} className="w-[100px] rounded-full  border-2 border-gray-400" />
                            <a href={`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle">❯</a>
                        </div>
                    
                    
                </div> 
    );
}

export default CarouselSlide;