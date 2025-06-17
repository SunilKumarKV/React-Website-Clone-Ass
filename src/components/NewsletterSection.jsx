"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", { email, consent });
  };

  return (
    <section className="px-4 md:px-8 py-32 first-of-type:pt-16 last-of-type:pb-16">
      <div className="container">
        <div className="" style={{ opacity: "1", transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold text-white">
                  The Design Declares Newsletter and Toolkit
                </h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <figure className="flex h-auto w-full flex-col items-center justify-center">
                  <div className="relative h-full w-full">
                    <img
                      alt=""
                      loading="lazy"
                      width="3840"
                      height="2160"
                      decoding="async"
                      className="block object-cover object-center"
                      style={{ color: "transparent" }}
                      sizes="(max-width: 640px) 100vw, 100vw"
                      srcSet=""
                      src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png%3Fmax-w%3D1440&w=3840&q=75"
                    />
                  </div>
                </figure>
                <p className="font-p-lg text-white">
                  Subscribe to the Design Declares UK newsletter to receive the
                  latest news and updates. By signing up you will also gain
                  access to The Design Declares Toolkit, a live and evolving
                  Notion site co-created with our community. It is filled with
                  the latest resources and methods to help you on your journey
                  to climate-positive design.
                </p>
                <p className="text-white">
                  Every signatory to Design Declares will receive an access link
                  to the Toolkit. If you are unable to declare emergency quite
                  yet, you can still access the Toolkit – just register below.
                </p>
              </div>

              <form
                className="flex flex-col gap-y-4 md:gap-y-8 text-brand-gray-400"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Your form logic here
                }}
              >
                {/* Email input */}
                <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                  <label
                    className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white"
                    htmlFor="email-input"
                    id="react-aria-:R1lb9udjsqH1:"
                  >
                    Email:*
                  </label>
                  <input
                    className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-gray-400"
                    type="email"
                    autoComplete="email"
                    required
                    id="email-input"
                    aria-labelledby="react-aria-:R1lb9udjsqH1:"
                    name="email"
                  />
                </div>

                {/* Consent Checkbox */}
                <div
                  aria-label="Which of the following options do you consent to?"
                  role="group"
                  id="react-aria-:R2lb9udjsq:"
                  aria-labelledby="react-aria-:R2lb9udjsq: react-aria-:R2lb9udjsqH1:"
                  className="flex flex-row flex-wrap gap-4 font-p-sm"
                >
                  <label className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-brand-white [&_.box]:border-brand-gray-400">
                    <span className="sr-only">
                      <input
                        type="checkbox"
                        required
                        name="newsletterConsent"
                        value="true"
                      />
                    </span>
                    <span
                      className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border"
                      aria-hidden="true"
                    >
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-12 rotate-45 scale-0 transition-transform group-data-[selected]:scale-100"
                      >
                        <path
                          strokeLinecap="square"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </span>
                    <span
                      className="max-w-full transition-colors md:py-3.5 text-brand-gray-400 group-data-[selected]:text-brand-white whitespace-normal !py-0"
                      id="react-aria-:R2lb9udjsqH1:"
                    >
                      I would like to be added to the Design Declares!
                      newsletter and receive further updates.
                    </span>
                  </label>
                </div>

                {/* Privacy Link */}
                <a
                  className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
                  href="/privacy-policy"
                  target="_self"
                >
                  View our Privacy Policy
                </a>

                {/* Submit Button */}
                <div className="flex items-center gap-x-4">
                  <button
                    type="submit"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
