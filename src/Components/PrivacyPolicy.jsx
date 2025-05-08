import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Tastycrate | Privacy Policy";
  }, []);

  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl text-base leading-relaxed text-gray-700">
      <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          This Privacy Policy explains how Tastycrate collects, uses, and
          protects your personal information when you use our website or
          services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>
          We may collect information such as your name, email address, and usage
          data when you interact with our platform or register for an account.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <p>
          Your information is used to provide and improve our services, send
          updates, respond to inquiries, and personalize your experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>
          We implement security measures to protect your information, but no
          system is 100% secure. Use our services at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <p>
          Our website may use cookies to enhance your experience. You can manage
          or disable cookies through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. We encourage you
          to review it periodically for any changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>
          If you have questions or concerns about this Privacy Policy, please
          contact us at
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

export default PrivacyPolicy;
