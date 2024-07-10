import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto my-8 p-8  pt-12 rounded-md">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p>
          AMRTI is dedicated to safeguarding your privacy. This policy outlines
          how we use and protect any information you provide while using our
          website. We may update this policy periodically, so please revisit
          this page to stay informed. This is effective from _________________.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
        <p>We may gather:</p>
        <ul className="list-disc ml-8">
          <li>Name and date of birth</li>
          <li>Contact details like email address</li>
          <li>Demographic data and preferences</li>
          <li>Other information for surveys or offers</li>
        </ul>
        <br />
        <h2 className="text-xl font-bold mb-4">How We Use Your Information</h2>
        <p>We utilize this data to:</p>
        <ul className="list-disc ml-8">
          <li>Improve our services</li>
          <li>Send promotional emails about new products or offers</li>
          <li>Contact you for market research</li>
          <li>Personalize your website experience</li>
        </ul>
        <br />
        <h2 className="text-xl font-bold mb-4">Security Measures</h2>
        <p>
          Your information's security is crucial. We've implemented suitable
          measures to prevent unauthorized access or disclosure.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-4">Cookie Usage</h2>
        <p>
          Cookies help tailor website operations to your preferences. We use
          them for statistical analysis to enhance our site's functionality. You
          can manage cookie settings in your browser preferences.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-4">Links to Other Websites</h2>
        <p>
          We may link to other sites; however, we are not responsible for their
          privacy practices. Exercise caution and review their privacy
          statements.
        </p>
        <br />
        <h2 className="text-xl font-bold mb-4">
          Your Control Over Information
        </h2>
        <p>You can:</p>
        <ul className="list-disc ml-8">
          <li>Opt-out of direct marketing</li>
          <li>Request information held about you</li>
          <li>Correct any inaccuracies in your information</li>
        </ul>
        <p>
          We don’t sell your information to third parties without consent unless
          required by law. For any queries or corrections, contact us at{" "}
          <a href="mailto:info@amrti.com" className="text-blue-500 underline">
            info@amrti.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Privacy;
