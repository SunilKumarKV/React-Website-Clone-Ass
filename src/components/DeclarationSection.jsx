"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Declaration() {
  const [formData, setFormData] = useState({
    entity: "",
    website: "",
    country: "United Kingdom",
    discipline: "",
    email: "",
    message: "",
    dataConsent: false,
    newsletterConsent: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Declaration submitted:", formData);
  };

  return (
    <section
      className="px-4 md:px-8 py-32 first-of-type:pt-16 last-of-type:pb-16"
      id="declaration"
    >
      <div className="container">
        <div className="" style={{ opacity: "1", transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold text-white">
                  Declare Emergency Now
                </h2>
              </div>
            </div>

            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4 text-white">
                <p className="font-p-lg">
                  Design Declares is open to individuals and institutions
                  working in industrial, digital, graphic, communication and
                  service design. To declare here, you must be a company with an
                  office in the UK employing at least one full-time designer. We
                  also welcome declarations from practising freelance designers
                  who are registered as self-employed in the UK, and global
                  supporters from other countries. All declarations will be
                  named and published on this site.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-y-8 border p-4 md:p-10 border-brand-gray-400"
              >
                <h2 className="font-h1 text-white">I am Declaring Emergency</h2>

                <div
                  aria-label="What type of entity are you declaring as?"
                  role="radiogroup"
                  aria-required="true"
                  aria-orientation="horizontal"
                  id="react-aria-:R2l79udjsq:"
                  aria-labelledby="react-aria-:R2l79udjsq react-aria-:R2l79udjsqH1:"
                  className="flex flex-row flex-wrap gap-4"
                  data-rac=""
                  data-orientation="horizontal"
                  data-required="true"
                >
                  {[
                    { label: "As a business", value: "Business" },
                    { label: "As an individual", value: "Individual" },
                    { label: "As a public institution", value: "Institution" },
                    { label: "As a team or department", value: "Team" },
                  ].map((option, index) => (
                    <label
                      key={option.value}
                      className="group/focus group flex items-center gap-x-2 transition-colors [&[data-selected]_.box]:!border-brand-white [&_.box]:border-brand-gray-400"
                      data-rac=""
                      data-required="true"
                    >
                      <span className="sr-only">
                        <input
                          tabIndex={0}
                          type="radio"
                          required
                          name="entity"
                          value={option.value}
                          title=""
                        />
                      </span>
                      <span
                        className="box focus-border flex size-12 flex-shrink-0 items-center justify-center border"
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
                        id={`react-aria-:R2l79udjsqH1:${index}`}
                      >
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>

                <div>
                  {/* Website Field */}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400"
                      id="website-label"
                      htmlFor="website"
                    >
                      Website:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-gray-400"
                      type="url"
                      required
                      id="website"
                      name="website"
                      aria-labelledby="website-label"
                    />
                  </div>

                  {/* Country Field */}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400"
                      id="country-label"
                      htmlFor="country"
                    >
                      Country:*
                    </label>
                    <select
                      className="w-full bg-transparent no-focus md:py-3.5"
                      required
                      id="country"
                      name="country"
                      aria-labelledby="country-label"
                      defaultValue="United Kingdom"
                    >
                      <option value="">Select a country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      {/* ...you can continue or import the country list dynamically */}
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>

                  {/* Discipline Field */}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400"
                      id="discipline-label"
                      htmlFor="discipline"
                    >
                      Discipline:*
                    </label>
                    <select
                      className="w-full bg-transparent no-focus md:py-3.5"
                      required
                      id="discipline"
                      name="discipline"
                      aria-labelledby="discipline-label"
                    >
                      <option value="">Select a discipline</option>
                      <option value="Communication Design">
                        Communication Design
                      </option>
                      <option value="Digital Design">Digital Design</option>
                      <option value="Service Design">Service Design</option>
                      <option value="Product Design">Product Design</option>
                    </select>
                  </div>

                  {/* Email Field */}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-gray-400 text-brand-white">
                    <label
                      className="max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400"
                      id="email-label"
                      htmlFor="email"
                    >
                      Email:*
                    </label>
                    <input
                      className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-gray-400"
                      type="email"
                      autoComplete="email"
                      required
                      id="email"
                      name="email"
                      aria-labelledby="email-label"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="focus-border relative -mt-px flex flex-col gap-x-2 border md:flex-row md:py-0 border-brand-gray-400 text-brand-white p-0">
                    <label
                      className="sr-only max-w-full whitespace-nowrap transition-colors md:py-3.5 text-brand-gray-400"
                      id="message-label"
                      htmlFor="message"
                    >
                      Why are you declaring? In a sentence or two, tell us why
                      you’re joining Design Declares.
                    </label>
                    <textarea
                      className="focus-ring w-full bg-transparent placeholder:text-brand-gray-400 px-4 py-3.5"
                      rows={8}
                      name="message"
                      required
                      id="message"
                      placeholder="Why are you declaring? In a sentence or two, tell us why you’re joining Design Declares."
                      aria-labelledby="message-label"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Data Consent Group */}
                  <div
                    aria-label="Which of the following options do you consent to?"
                    role="group"
                    id="data-consent-group"
                    aria-labelledby="data-consent-group data-consent-label"
                    className="flex flex-row flex-wrap gap-4 font-p-sm"
                    data-required="true"
                  >
                    <label className="group/focus group flex items-center gap-x-2 transition-colors [&_[data-selected]_.box]:!border-brand-white [&_.box]:border-brand-gray-400">
                      <span className="sr-only">
                        <input
                          type="checkbox"
                          name="dataConsent"
                          value="true"
                          required
                          title=""
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
                        id="data-consent-label"
                      >
                        I consent for my data to be used for the purpose of the
                        Declaration, and for my name and reason for joining to
                        be used in the promotion of the Declaration on this site
                        and across our social channels.
                      </span>
                    </label>
                  </div>

                  {/* Newsletter Consent Group */}
                  <div
                    aria-label="Which of the following do options you consent to?"
                    role="group"
                    id="newsletter-consent-group"
                    aria-labelledby="newsletter-consent-group newsletter-consent-label"
                    className="flex flex-row flex-wrap gap-4 font-p-sm"
                  >
                    <label className="group/focus group flex items-center gap-x-2 transition-colors [&_[data-selected]_.box]:!border-brand-white [&_.box]:border-brand-gray-400">
                      <span className="sr-only">
                        <input
                          type="checkbox"
                          name="newsletterConsent"
                          value="true"
                          title=""
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
                        id="newsletter-consent-label"
                      >
                        I would like to be added to the Design Declares!
                        newsletter and receive further updates.
                      </span>
                    </label>
                  </div>
                </div>

                <a
                  class="text-white focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
                  data-rac=""
                  href="/privacy-policy"
                  target="_self"
                >
                  View our Privacy Policy
                </a>

                <div className="flex items-center gap-x-4">
                  <Button
                    type="submit"
                    className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red"
                    data-rac
                  >
                    Declare Emergency Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
