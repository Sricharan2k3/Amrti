import about from './about us.jpg'
export const About = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <h2 className=" mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
        About Us
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <p className="text-base text-gray-700 md:text-lg">
              Our journey began with a passion for delivering pure, natural, and wholesome edible products to every home. We believe in the power of nature and strive to bring its essence to your table through our meticulously crafted powders. Our commitment extends beyond quality; we actively source from responsible growers. cultivating relationships rooted in trust and sustainability. 
              </p>
            </div>
            <h1 className=" font-sans font-bold  text-gray-900 sm:text-xl sm:leading-none ">
              Commitment to quality, sourcing, and sustainability:
            </h1>
            <br />
            <div className="max-w-xl mb-6">
              <p className="text-base text-gray-700 md:text-lg">
              Quality is the cornerstone of AMRTI. We pick only the finest quality herbs and seeds ensuring that each product encapsulates both purity and nutritional richness. We stand by local farmers and sustainable farming techniques, safeguarding the environment for future generations.
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={about}
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{height:"100px"}}></div>
    </div>
  );
};
