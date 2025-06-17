export default function Latest() {
  const articles = [
    {
      category: "Events",
      location: "D! UK",
      date: "24.04.2025, 15:30",
      title:
        "SD4P Collective: How can Service Design drive meaningful sustainability impact",
      description: "Recap: SD4P Collective working session – 28th March 2025",
      link: "#",
    },
    {
      category: "Events",
      location: "D! UK",
      date: "06.12.2024, 14:30",
      title: "Designing Tomorrow: Speculative Thinking Shapes Our Present",
      description:
        "Design Declares' November Event Challenges Perspectives on Sustainability and Innovation",
      link: "#",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-32 first-of-type:pt-16 last-of-type:pb-16">
      <div className="container">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
          <div className="col-span-12 lg:col-span-4">
            <div className="md:sticky md:top-8">
              <h2 className="font-h3 font-semibold text-white">Latest</h2>
            </div>
          </div>
          <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
            <div
              className="space-y-12"
              style={{ opacity: "1", transform: "none" }}
            >
              <div className="space-y-16">
                {/* Article 1 */}
                <div style={{ opacity: 1, transform: "none" }}>
                  <article
                    className="grid grid-cols-12 gap-x-8 space-y-4 @container"
                    lang="en-GB"
                  >
                    <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                      <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">
                        Events
                      </span>
                      <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">
                        D! UK
                      </span>
                      <span className="text-xs font-semibold">
                        24.04.2025, 15:30
                      </span>
                    </div>

                    <div className="col-span-12 @2xl:col-span-6">
                      <h2 className="transition-colors group-hocus:text-brand-red">
                        SD4P Collective: How can Service Design drive meaningful
                        sustainability impact
                      </h2>
                    </div>

                    <div className="col-span-12 space-y-4 @2xl:col-span-6">
                      <p className="text-brand-gray-400">
                        Recap: SD4P Collective working session – 28th March 2025
                      </p>
                      <a
                        className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block text-white"
                        href="https://designdeclares.com/latest/sd4p-collective-how-can-service-design-drive-meaningful-sustainability-impact"
                      >
                        Read story
                      </a>
                    </div>
                  </article>
                </div>

                {/* Article 2 */}
                <div style={{ opacity: 1, transform: "none" }}>
                  <article
                    className="grid grid-cols-12 gap-x-8 space-y-4 @container"
                    lang="en-GB"
                  >
                    <div className="col-span-12 flex flex-wrap items-center gap-2 text-sm text-brand-gray-400">
                      <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">
                        Events
                      </span>
                      <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-gray-800 text-brand-gray-400">
                        D! UK
                      </span>
                      <span className="text-xs font-semibold">
                        06.12.2024, 14:30
                      </span>
                    </div>

                    <div className="col-span-12 @2xl:col-span-6">
                      <h2 className="transition-colors group-hocus:text-brand-red">
                        Designing Tomorrow: Speculative Thinking Shapes Our
                        Present
                      </h2>
                    </div>

                    <div className="col-span-12 space-y-4 @2xl:col-span-6">
                      <p className="text-brand-gray-400">
                        Design Declares' November Event Challenges Perspectives
                        on Sustainability and Innovation
                      </p>
                      <a
                        className="focus-ring group relative w-fit underline transition-colors hocus:text-[--focus-color] inline-block text-white"
                        href="https://designdeclares.com/latest/designing-tomorrow-speculative-thinking-shapes-our-present"
                      >
                        Read story
                      </a>
                    </div>
                  </article>
                </div>
              </div>

              <div style={{ opacity: 1, transform: "none" }}>
                <a
                  class="focus-ring group h-full focus-ring font-button group relative flex max-h-fit w-full items-center justify-center rounded-full px-6 py-3 text-center transition-colors md:max-w-fit md:py-4 border border-transparent bg-brand-white text-brand-black hocus:bg-brand-red"
                  data-rac=""
                  href="/latest"
                >
                  See all the latest
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
