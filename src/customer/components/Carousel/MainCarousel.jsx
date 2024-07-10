import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import "./car.css"
import mustard from "./mustard.jpg"
import sesame from "./sesame.jpg"
import banner from "./banner.jpg";
import groundnut from './groundnut.jpg'
import kombucha from './kombucha.jpg'
import { BannerCollapseButton } from "flowbite-react";
import safflower from "./safflower.jpg";
const MainCarousel = () => {
  return (
    <TECarousel showControls showIndicators ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem
          itemID={1}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={sesame} className="block w-full car" alt="..." />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            {/* <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={2}
          className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={groundnut} className="block w-full car" alt="..." />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            {/* <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p> */}
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={3}
          className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={mustard} className="block w-full car" alt="..." />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            {/* <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p> */}
          </div>
        </TECarouselItem>
        <TECarouselItem
          itemID={4}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={banner} className="block w-full car" alt="..." />
          {/* <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
        </TECarouselItem>

        <TECarouselItem
          itemID={5}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={safflower} className="block w-full car" alt="..." />
        </TECarouselItem>
        <TECarouselItem
          itemID={6}
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
        >
          <img src={kombucha} className="block w-full car" alt="..." />
        </TECarouselItem>
      </div>
    </TECarousel>
  );
}

export default MainCarousel

