"use client";

import { RequestModel } from "@/app/api/contact-us/request.model";
import CSS from "csstype";
import { RefObject, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const [firstName, updateFirstName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [email, updateEmail] = useState("");
  const [companyName, updateCompanyName] = useState("");
  const [message, updateMessage] = useState("");
  const [recaptchaToken, updateToken] = useState("");
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);

  const headerStyle: CSS.Properties = {
    color: "rgb(93 93 255 / var(--tw-text-opacity))",
    WebkitTextStroke: "1px aquamarine",
    fontFamily: "Roboto Slab,sans-serif",
  };

  const formBackground: CSS.Properties = {
    backgroundColor: "rgb(93 93 255)",
  };

  function updateFormFirstName(event: any) {
    console.log(firstName);
    updateFirstName(event.target.value);
  }

  function updateFormLastName(event: any) {
    updateLastName(event.target.value);
  }

  function updateFormEmail(event: any) {
    updateEmail(event.target.value);
  }

  function updateFormCompanyName(event: any) {
    updateCompanyName(event.target.value);
  }

  function updateFormMessage(event: any) {
    updateMessage(event.target.value);
  }

  const onCaptchaChange = (token: string | null) => {
    // Set the captcha token when the user completes the reCAPTCHA
    if (token) {
      updateToken(token);
    } else {
      updateToken("");
    }
  };

  async function submitForm() {
    const model = new RequestModel();
    model.firstName = firstName;
    model.lastName = lastName;
    model.email = email;
    model.companyName = companyName;
    model.message = message;
    model.recaptchaToken = recaptchaToken;

    console.log("In SubmitForm Method");
    console.log("Email: ", email);

    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify(model),
    });

    console.log("Response: ", response);

    if (response.status === 202) {
      try {
        toast.success(
          "Thank you for requesting information to see how we can assist.  We will be reaching out shortly."
        );
      } catch (error) {
        console.log("Error Below:");
        console.log(error);
      }
    }
  }

  return (
    <section className="relative">
      <ToastContainer position="top-right" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="relative pb-10">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 className="h1 mb-4" data-aos="fade-up" style={headerStyle}>
                Contact Us
              </h1>
              <p
                className="text-xl text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                For information on pricing and how we can help you out, please
                fill out the form below and we will reach out to you at our
                earliest convenience.
              </p>
            </div>
            <div className="justify-center w-full items-center">
              <div
                className="w-full p-8 my-4 md:px-12 mr-auto rounded-2xl shadow-2xl"
                style={formBackground}
              >
                <div className="w-full flex">
                  <h1 className="font-bold uppercase text-4xl">
                    Request Information
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={updateFormFirstName}
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={updateFormLastName}
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={updateFormEmail}
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Company Name"
                    onChange={updateFormCompanyName}
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    value={message}
                    onChange={updateFormMessage}
                  ></textarea>
                </div>

                <div className="md:flex w-full">
                  <div className="md:w-full lg:w-3/4">
                    <ReCAPTCHA
                      size="normal"
                      sitekey="6LfoSQkqAAAAAFnv41-Vf6wftvsenG5qkoqYpVnL"
                      onChange={onCaptchaChange}
                      ref={recaptcha}
                    />
                  </div>
                  <div className="my-5 md:w-full lg:w-1/4 justify-end">
                    <button
                      disabled={recaptchaToken == ""}
                      className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                      onClick={submitForm}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
