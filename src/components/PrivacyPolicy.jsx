import React from "react";
import styles from "../style";
function PrivacyPolicy() {
  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="grid max-w-screen-xl mx-auto px-4"
      >
        <div>
          <h3 className="font-sans text-3xl text-orange-200 ">
            Privacy Policy
          </h3>
          <div className="mt-2">
            This Privacy Policy explains how{" "}
            <span className="tracking-wider text-lg text-gradient">Brainz</span>{" "}
            ("we," "us," or "our") collects, uses, and protects your information
            when you use our services, including custom apps, integrations,
            extensions for SaaS tools, and our e-commerce website.
          </div>
          <h5 className="font-sans text-2xl mt-2 text-orange-100">
            Information We Collect
          </h5>
          <div>
            <p className="mt-2.5">
              We collect the following information to provide and improve our
              services:
            </p>
            <ul className=" mt-2">
              <li>
                <b className=" pr-1">Personal Information:</b>Name, email
                address, and physical address.
              </li>
              <li>
                <b className=" pr-1 mt-1">Integration Credentials: </b>API keys,
                access tokens, and other credentials required to connect to the
                software tools you use.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">
              How We Use Your Information
            </h3>
            <p className="mt-2.5">
              We use the information we collect for purposes such as:
            </p>
            <ul className=" mt-2">
              <li>
                <b className=" pr-1">Service Provision:</b>To enable app
                integrations, customizations, and functionality within the
                software tools you use.
              </li>
              <li>
                <b className=" pr-1 mt-1">Communication: </b>To respond to
                inquiries, provide updates, and communicate essential
                information regarding your account or usage of our services.
              </li>
              <li>
                <b className=" pr-1 mt-1">Product Enhancement: </b>To understand
                user needs better, improve product quality, and develop new
                features or tools.
              </li>
              <li>
                <b className=" pr-1 mt-1">Feedback and Ideas: </b>To gather
                suggestions for new app ideas and features.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">
              Data Security
            </h3>
            <p className="mt-2.5">
              We implement industry-standard security measures to protect your
              data, including:
            </p>
            <ul className=" mt-2 ">
              <li>
                <b className=" pr-1">Data Encryption:</b>We encrypt sensitive
                data such as API keys and access tokens.
              </li>
              <li>
                <b className=" pr-1 mt-1">Access Control: </b>Access to your
                data is restricted to authorized personnel only.
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">
              Sharing and Disclosure of Information
            </h3>
            <p className="mt-2.5">
              We do not share, sell, or disclose your information to any third
              parties. All data collected is solely for internal purposes and is
              kept strictly confidential.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">Your Rights</h3>
            <p className="mt-2.5">You have the right to:</p>
            <ul className=" mt-2 list-disc ml-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request corrections to inaccurate information.</li>
              <li>Request deletion of your data under certain conditions.</li>
            </ul>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">
              Updates to This Privacy Policy
            </h3>
            <p className="mt-2.5">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="font-sans text-2xl text-orange-100">Contact Us</h3>
            <p className="mt-2.5">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                className="text-sky-400"
                href="mailto:support@brainz.freshdesk.com"
              >
                support@brainz.freshdesk.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
