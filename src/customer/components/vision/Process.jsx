import sesame from "../../Pages/process.svg";
import story from "../../Pages/our story png.png";
import trace from "../../Pages/traceability.jpg";
export const Process = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Traceability Assurance
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                At AMRTI, we prioritize transparency and authenticity. Each
                product in our collection is equipped with a distinctive QR
                code, ensuring an enhanced traceability experience for our
                customers. This unique code allows you to trace the origins of
                the raw materials used in your product, providing insights into
                the journey from farm to your hands.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-full rounded shadow-lg"
              src={trace}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Our Process
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Our process of extracting and producing oils harmoniously combines
            conventional wisdom with modern advancements. By integrating
            cutting-edge technology with age-old techniques, we delicately
            extract these oils to preserve their inherent goodness and
            nutritional richness. Rigorous quality control measures are
            implemented at every stage to ensure that each bottle meets our
            stringent standards for purity and excellence. We take pride in
            delivering oils that not only elevate flavors but also promote a
            healthier lifestyle for our consumers.
          </p>
        </div>
        <div className="mx-auto ">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img src={sesame} className="block w-full car" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};
