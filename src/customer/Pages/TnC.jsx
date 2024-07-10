import React from "react";

const TnC = () => {
  return (
    <div className="container mx-auto my-8 p-8  rounded-md" style={{paddingTop:"50px"}}>
      <h1 className="text-4xl font-bold mb-4 text-center">Terms of Service</h1>
   
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Terms of Use</h2>
        <p>
          Accessing and using amrti.com, including its products and services,
          are governed by these Terms of Service. By using our website
          (www.amrti.com), you agree to these terms, including our Privacy
          Policy, which may be updated periodically. Please check this page
          regularly for any changes.
        </p>
        <p>
          We reserve the right to review, modify, or withdraw services without
          notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Services</h2>
        <p>
          AMRTI is an online retailer specializing in edible oils. Placing an
          order means we will ship the product to you and expect payment for the
          service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Third-Party Websites and Content
        </h2>
        <p>
          We offer links for content sharing on third-party sites like Facebook
          and Instagram. We are not responsible for third-party sites listed on
          our website or their content. We also disclaim liability for content
          posted by users on our site or social media platforms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Messaging Consent</h2>
        <p>
          By using our services, customers agree to receive communications via
          SMS or calls from AMRTI.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Product Accuracy</h2>
        <p>
          Images on the site are for illustration; colors may vary on different
          screens. We strive for accuracy in item sizes, measurements,
          descriptions, and prices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Pricing</h2>
        <p>
          While we aim for accurate pricing, errors may occur. We will notify
          you of any pricing errors and cancel orders if necessary. Prices may
          change without notice, but dispatched orders will not be affected. The
          prices listed apply only to website purchases.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Payment</h2>
        <p>
          We perform a pre-authorization check on your payment card upon order
          receipt. Your card will be charged upon order acceptance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Delivery</h2>
        <p>
          Various delivery options are available during checkout, with estimated
          delivery times. Delays may occur due to unforeseen circumstances, and
          while we will keep you informed, we cannot compensate for the
          resulting inconveniences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Returns & Refund</h2>
        <p>Items can be returned based on our Return Policy.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Law and Jurisdiction</h2>
        <p>
          These terms are governed by Indian laws, and disputes will be subject
          to the exclusive jurisdiction of Hyderabad courts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Indemnification</h2>
        <p>
          You agree to indemnify us from any third-party claims arising from
          your website use, breaching these terms, or infringing on intellectual
          property rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Violation & Termination</h2>
        <p>
          We reserve the right to terminate your website access without notice
          if we believe you have violated these terms. You remain liable for
          ordered services up to termination.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <p>
          For inquiries about our Terms of Service or the website, contact us at{" "}
          <a href="mailto:info@amrti.com" className="text-blue-500 underline">
            info@amrti.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TnC;
