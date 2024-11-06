import React from "react";

function TermsAndConditions() {
  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid max-w-screen-xl mx-auto px-4"
      >
        <div>
          <h3 className="font-sans text-4xl text-orange-200 ">
            Terms And Conditions
          </h3>
          <h3 className="font-sans mt-2 text-2xl text-slate-500">
            Effective Date: 01 May 2024
          </h3>
          <div className="mt-2">
            Welcome to{" "}
            <span className="tracking-wider text-lg text-gradient">Brainz</span>{" "}
            ! These Terms and Conditions govern your use of our services,
            including custom app development, integrations, extensions for SaaS
            tools,
            <br /> and our e-commerce website. By using our services, you agree
            to comply with these terms.
          </div>
          <h3 className="font-sans mt-2 text-2xl text-orange-100">
            Introduction
          </h3>
          <div className="mt-2">
            These Terms and Conditions (“Terms”) form a legal agreement between
            you (“User,” “you,” or “your”) and{" "}
            <span className="tracking-wider text-lg text-gradient">Brainz</span>{" "}
            (“we,” “us,” or “our”). By accessing or using our services, you
            accept and agree to be bound by these Terms.
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">Services</h5>
          <div>
            <p className="mt-2.5">Our services include:</p>
            <ul className="list-disc mt-2 ml-4">
              <li>
                Development of custom applications, integrations, and extensions
                for SaaS tools.
              </li>
              <li>
                Provision of an e-commerce website for purchasing products and
                services.
              </li>
            </ul>
            <p className="mt-2.5">
              We reserve the right to modify or discontinue any service, either
              temporarily or permanently, with or without notice.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            User Responsibilities
          </h5>
          <div>
            <p className="mt-2.5">As a user of our services, you agree to:</p>
            <ul className="list-disc mt-2 ml-4">
              <li>
                Provide accurate, complete, and current information as
                requested.
              </li>
              <li>Not share your access credentials with third parties.</li>
              <li>
                Use our services in compliance with applicable laws and
                regulations.
              </li>
              <li>
                Respect intellectual property rights associated with any
                proprietary technology or code.
              </li>
            </ul>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Data Collection and Privacy
          </h5>
          <div>
            <p className="mt-2.5">
              We collect certain personal and service-related data to provide
              our services effectively. Please review our Privacy Policy for
              information on data collection, usage, and protection. By using
              our services, you consent to the data practices described in our
              Privacy Policy.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Intellectual Property
          </h5>
          <div>
            <p className="mt-2.5">
              All intellectual property rights, including code, design, and
              content created or used in our services, remain the exclusive
              property of{" "}
              <span className="tracking-wider text-lg text-gradient">
                Brainz
              </span>{" "}
              or our licensors. Users are granted a limited, non-exclusive,
              non-transferable right to access and use the services for personal
              or internal business purposes only.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Payment and Refunds
          </h5>
          <div>
            <ul className="list-disc mt-2 ml-4">
              <li>
                <p className="mr-1 font-medium">Payments:</p>
                Users must pay for services as outlined in any specific
                agreement or on our e-commerce site.
              </li>
              <li>
                <p className="mr-1 font-medium">Refunds:</p>
                Refunds may be issued at our discretion, subject to any specific
                terms outlined in your agreement with us.
              </li>
            </ul>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Limitations of Liability
          </h5>
          <div>
            <p className="mt-2.5">
              To the fullest extent permitted by law, [Your Startup Name] shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, data, or goodwill arising from your use of our
              services. Our total liability for any claim arising from or
              related to these Terms shall not exceed the amount you paid for
              our services within the prior six months.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Termination
          </h5>
          <div>
            <p className="mt-2.5">
              We reserve the right to suspend or terminate your access to our
              services at our sole discretion, without prior notice, for any
              conduct that we consider to be in violation of these Terms,
              illegal, or harmful to others.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Changes to These Terms
          </h5>
          <div>
            <p className="mt-2.5">
              We may update these Terms periodically. Any changes will be posted
              on this page with an updated effective date. By continuing to use
              our services after changes are posted, you accept the revised
              Terms.
            </p>
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Contact Us
          </h5>
          <div>
            <p className="mt-2.5">
              If you have questions about these Terms, please contact us at{" "}
              <a
                className="text-sky-400"
                href="mailto:support@brainz.freshdesk.com"
              >
                support@brainz.freshdesk.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
