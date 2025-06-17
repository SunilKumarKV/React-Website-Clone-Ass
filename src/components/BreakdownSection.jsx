"use client";

import { useState } from "react";

export default function Breakdown() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="px-base md:px-md py-2xl first-of-type:pt-md last-of-type:pb-md">
      <div className="container">
        <div className="" style={{ opacity: "1", transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold">This is Breakdown</h2>
              </div>
            </div>

            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                <h2 className="font-h1">
                  The science is settled. We are in an emergency of climate and
                  nature. The world is past breaking point; the breakdown has
                  begun...
                </h2>

                {/* Accordion: The Role of Design */}
                <div className="border-t border-brand-gray-400">
                  <button
                    id="accordion-role"
                    type="button"
                    aria-expanded={openAccordion === "role"}
                    aria-controls="accordion-role-panel"
                    className="focus-ring mt-4 flex w-full items-center justify-between"
                    onClick={() => toggleAccordion("role")}
                  >
                    <h3 className="text-brand-gray-400">The Role of Design</h3>
                    <span aria-hidden="true">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-6 transition-transform duration-300 ${
                          openAccordion === "role" ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="square"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {openAccordion === "role" && (
                  <div
                    id="accordion-role-panel"
                    role="region"
                    aria-labelledby="accordion-role"
                    aria-hidden={false}
                    className="overflow-hidden"
                    style={{ height: "auto" }}
                  >
                    <div className="space-y-4 pt-8">
                      <p>
                        As designers working within an industry that relies on
                        production and powers global consumption, we must
                        acknowledge that we have had a role in bringing us to
                        where we are now, and that we have an important role in
                        what comes next.
                      </p>
                      <p>
                        Because designers are makers. We make ideas real. We
                        generate solutions. We build the world – dreaming up new
                        futures and bringing them to life in ways that are
                        beautiful, vital and impossible to resist. It’s not
                        quite magic, but it feels like it.
                      </p>
                    </div>
                  </div>
                )}

                {/* Accordion: Time for Change */}
                <div className="border-t border-brand-gray-400">
                  <button
                    id="accordion-change"
                    type="button"
                    aria-expanded={openAccordion === "change"}
                    aria-controls="accordion-change-panel"
                    className="focus-ring mt-4 flex w-full items-center justify-between"
                    onClick={() => toggleAccordion("change")}
                  >
                    <h3 className="text-brand-gray-400">Time for Change</h3>
                    <span aria-hidden="true">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-6 transition-transform duration-300 ${
                          openAccordion === "change" ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="square"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {openAccordion === "change" && (
                  <div
                    id="accordion-change-panel"
                    role="region"
                    aria-labelledby="accordion-change"
                    aria-hidden={false}
                    className="overflow-hidden"
                    style={{ height: "auto" }}
                  >
                    <div className="space-y-4 pt-8">
                      <p>
                        The systems and structures that brought us here are no
                        longer fit for purpose. The climate and ecological
                        crisis requires systemic change – and design must lead
                        that transformation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Accordion: Act with Urgency */}
                <div className="border-t border-brand-gray-400">
                  <button
                    id="accordion-urgency"
                    type="button"
                    aria-expanded={openAccordion === "urgency"}
                    aria-controls="accordion-urgency-panel"
                    className="focus-ring mt-4 flex w-full items-center justify-between"
                    onClick={() => toggleAccordion("urgency")}
                  >
                    <h3 className="text-brand-gray-400">Act with Urgency</h3>
                    <span aria-hidden="true">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`size-6 transition-transform duration-300 ${
                          openAccordion === "urgency"
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      >
                        <path
                          strokeLinecap="square"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </div>

                {openAccordion === "urgency" && (
                  <div
                    id="accordion-urgency-panel"
                    role="region"
                    aria-labelledby="accordion-urgency"
                    aria-hidden={false}
                    className="overflow-hidden"
                    style={{ height: "auto" }}
                  >
                    <div className="space-y-4 pt-8">
                      <p>
                        We are out of time. Every decision from here on must be
                        made with urgency and responsibility. Designers must act
                        boldly and decisively, in solidarity with people and
                        planet.
                      </p>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-2 mt-8">
                  <button className="bg-white text-black hover:bg-red-500 rounded-full px-6 py-3">
                    <a
                      href="https://youtu.be/XpnOe94eXdM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View our D! Intro Video
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
