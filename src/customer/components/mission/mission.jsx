import opportunity from "../../Pages/target.png";

export const Mission = () => {
  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
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
              src={opportunity}
              alt=""
              style={{ objectFit: "cover", height: "100%", width: "100%" }}
            />
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Our Mission
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          To deliver premium, responsibly sourced products to enhance culinary
          experiences while nurturing health and well being.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
    </div>
  );
};
