import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Tastycrate | Terms & Conditions";
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl text-base leading-relaxed text-gray-700">
      <h1 className="text-3xl font-bold text-primary mb-6">
        Terms & Conditions
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By accessing or using our website and services, you agree to be bound
          by these terms. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p>
          You agree to provide accurate information and not misuse our services.
          You are responsible for maintaining the confidentiality of your login
          credentials.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Privacy</h2>
        <p>
          We value your privacy. Please refer to our Privacy Policy to
          understand how we collect and use your personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Modifications</h2>
        <p>
          We reserve the right to update or change these terms at any time.
          Changes will be effective immediately upon posting.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Contact</h2>
        <p>
          For any questions regarding these terms, please contact us at
          <a
            href="mailto:naimur.wd@gmail.com"
            className="text-primary underline ml-1"
          >
            naimur.wd@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
