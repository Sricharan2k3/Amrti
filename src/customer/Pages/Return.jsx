import React from 'react'

const Return = () => {
  return (
    <div className="container mx-auto my-8 p-8  pt-12 rounded-md">

      <section>
        <h1 className="text-4xl font-bold mb-4 text-center">
          Refund & Returns
        </h1>
        <h2 className="text-xl font-bold ">Refund Policy</h2>
        <p>
          Once an order is confirmed with AMRTI, return or refund requests won't
          be accepted. However, we prioritize our customers' satisfaction and
          aim for fair solutions in these cases:
        </p>
        <br />
        <h3 className="text-xl font-bold mb-2">Damaged Product:</h3>
        <p>
          Notify AMRTI of any damaged products within 2 days of delivery via
          email to{" "}
          <a href="mailto:info@amrti.com" className="text-blue-500 underline">
            info@amrti.com
          </a>
          . Share order details, images of the invoice, outer box, damaged
          product, and an opening box video. We promptly replace damaged items
          and assist within 24-48 hours.
        </p>
        <br />
        <h3 className="text-xl font-bold mb-2">Spoiled Product:</h3>
        <p>
          Notify AMRTI of product spoilage within 3 days of delivery via email.
          Include order details, packaging date, and clear images or a video of
          the spoiled product. Refunds aren't accepted due to natural
          variations, but we ensure an amicable solution and replacement after
          investigation, prioritizing fairness. Assistance will be provided
          within 24-48 hours.
        </p>
        <p>
          We are committed to fair resolutions and assisting you promptly.
          Contact us for any assistance regarding these issues.
        </p>
      </section>
    </div>
  );
}

export default Return
