// import React from "react";
// import { TECarousel, TECarouselItem } from "tw-elements-react";
// import "./car.css"
// import mustard from "./mustard.jpg"
// import sesame from "./sesame.jpg"
// import banner from "./banner.jpg";
// import groundnut from './groundnut.jpg'
// import kombucha from './kombucha.jpg'
// import { BannerCollapseButton } from "flowbite-react";
// import safflower from "./safflower.jpg";
// const MainCarousel = () => {
//   return (
//     <TECarousel showControls showIndicators ride="carousel">
//       <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//         <TECarouselItem
//           itemID={1}
//           className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/web-banner-new-amrti.jpg" className="block w-full car" alt="..." />
//           <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//             {/* <h5 className="text-xl">First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p> */}
//           </div>
//         </TECarouselItem>
//         <TECarouselItem
//           itemID={2}
//           className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/web-banner-new-amrti-2.jpg" className="block w-full car" alt="..." />
//           <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//             {/* <h5 className="text-xl">Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p> */}
//           </div>
//         </TECarouselItem>
//         <TECarouselItem
//           itemID={3}
//           className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/web-banner-new-amrti-1.jpg" className="block w-full car" alt="..." />
//           <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//             {/* <h5 className="text-xl">Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p> */}
//           </div>
//         </TECarouselItem>
//         {/* <TECarouselItem
//           itemID={4}
//           className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src={banner} className="block w-full car" alt="..." />
//           {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//               <h5 className="text-xl">Third slide label</h5>
//               <p>
//                 Some representative placeholder content for the third slide.
//               </p>
//             </div> */}
//         {/* </TECarouselItem>

//         <TECarouselItem
//           itemID={5}
//           className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src={safflower} className="block w-full car" alt="..." />
//         </TECarouselItem>
//         <TECarouselItem
//           itemID={6}
//           className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//         >
//           <img src={kombucha} className="block w-full car" alt="..." />
//         </TECarouselItem> */} 
//       </div>
//     </TECarousel>
//   );
// }

// export default MainCarousel

"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from "react-feather"
const MainCarousel = ({ children: slides, autoSlide = false, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div className=' overflow-hidden w-full relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default MainCarousel
