import target from '../../Pages/opportunity.png'
export const Vision = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div
            className="flex items-center justify-center w-20 h-20 mb-4 rounded-full "
            style={{ padding: "10px" }}
          >
            <img
              src={target}
              alt=""
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Our Vision
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          To be a trusted global leader renowned for delivering premium-quality
          natural products that enrich lives, honour traditions, and inspire
          sustainable future.
        </p>
        <hr className="w-full border-gray-300" />
      </div>
    </div>
  );
};