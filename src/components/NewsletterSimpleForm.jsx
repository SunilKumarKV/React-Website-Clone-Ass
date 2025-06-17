import React, { useState } from "react";

export default function SubscribeForm() {
  const [formData, setFormData] = useState({
    email: "",
    newsletterConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.newsletterConsent) {
      alert("Please consent to receive newsletters.");
      return;
    }

    // Simulate submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 text-brand-black"
    >
      <div className="focus-border relative -mt-px flex flex-col gap-x-2 border px-4 py-4 md:flex-row md:py-0 border-brand-black">
        <label
          className="max-w-full whitespace-nowrap transition-colors md:py-3.5"
          htmlFor="email"
        >
          Email:*
        </label>
        <input
          className="no-focus w-full bg-transparent md:py-3.5 placeholder:text-brand-black"
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-4">
          <div
            role="group"
            aria-label="Newsletter consent"
            className="flex flex-row flex-wrap gap-4 font-p-sm"
          >
            <label className="group/focus group flex items-center gap-x-2 transition-colors">
              <input
                type="checkbox"
                name="newsletterConsent"
                value="true"
                checked={formData.newsletterConsent}
                onChange={handleChange}
                required
                className="sr-only"
              />
              <span
                className="box focus-border mb-auto mt-0 flex size-12 flex-shrink-0 items-center justify-center border border-brand-black"
                aria-hidden="true"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`size-12 transition-transform transform ${
                    formData.newsletterConsent
                      ? "scale-100 rotate-45"
                      : "scale-0"
                  }`}
                >
                  <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
              <span className="max-w-full transition-colors md:py-3.5 whitespace-normal !py-0">
                I would like to be added to the Design Declares! newsletter and
                receive further updates.
              </span>
            </label>
          </div>

          <a
            className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] font-p-sm block"
            href="/privacy-policy"
            target="_self"
            rel="noopener noreferrer"
          >
            View our Privacy Policy
          </a>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            type="submit"
            className="focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-black hocus:text-brand-white"
          >
            Subscribe
          </button>
        </div>
      </div>

      {submitted && (
        <p className="text-green-600 font-semibold">
          Thank you for subscribing!
        </p>
      )}
    </form>
  );
}
