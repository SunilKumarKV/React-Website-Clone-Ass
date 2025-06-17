export default function ActsOfEmergency() {
  const acts = [
    {
      number: 1,
      title: "Sound the Alarm",
      description:
        "Acknowledge and raise awareness of the climate and ecological crisis - including its roots in systems of oppression - in our organisations and our practice.",
    },
    {
      number: 2,
      title: "Start the Journey",
      description:
        "Invest in educating ourselves and our teams on methods of sustainable and regenerative design, and show leadership by making measurable change to our practice. The Design Declares Toolkit is a great place to start.",
    },
    {
      number: 3,
      title: "Bring Clients with Us",
      description:
        "Meaningfully consider environmental and social impacts as part of every pitch, proposal and production process. Not every design output will be carbon neutral or fully climate friendly, but every project is an opportunity to make real progress.",
    },
    {
      number: 4,
      title: "Measure What We Make",
      description:
        "Measure the environmental and social impact of our businesses and design projects, and hold ourselves to account for what we find out.",
    },
    {
      number: 5,
      title: "Redefine 'Good'",
      description:
        "Encourage, recognise and reward sustainable and regenerative design excellence in our industry through media and awards.",
    },
    {
      number: 6,
      title: "Educate, Accelerate",
      description:
        "Build and foster intra- and cross-discipline knowledge networks to share tools, resources and best practice to accelerate progress in our industry.",
    },
    {
      number: 7,
      title: "Design for Justice",
      description:
        "Create with and for the people who are disproportionately affected both by climate change and by the transition to a lower-carbon world.",
    },
    {
      number: 8,
      title: "Amplify Voices for Change",
      description:
        "Enable systemic change by working alongside policymakers, campaigners, ecologists, scientists, activists and others to strengthen local and national movements for change.",
    },
  ];

  return (
    <section className="px-4 md:px-8 py-32 first-of-type:pt-16 last-of-type:pb-16">
      <div className="container">
        <div className="" style={{ opacity: "1", transform: "none" }}>
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-16">
            <div className="col-span-12 lg:col-span-4">
              <div className="md:sticky md:top-8">
                <h2 className="font-h3 font-semibold text-white">
                  8 Acts of Emergency
                </h2>
              </div>
            </div>
            <div className="col-span-12 space-y-12 lg:col-span-7 lg:col-start-6">
              <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4 text-white">
                <p className="font-p-lg">
                  What does it take to Declare? It’s accepting we are in an
                  emergency of climate and nature, and a commitment to do
                  something about it. Here are eight places to start:
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-brand-white text-brand-black">
                  {acts.map((act, index) => (
                    <div key={act.number} className="group">
                      <div className="flex items-center border border-brand-black">
                        <h3 className="font-h1 flex w-full leading-none text-brand-black">
                          <span className="flex size-[3rem] md:size-[4.5rem] flex-shrink-0 items-center justify-center tabular-nums">
                            {act.number}
                          </span>
                          <span className="flex w-full items-center border-l border-black p-2">
                            {act.title}
                          </span>
                        </h3>
                      </div>
                      <div
                        className={`flex border-x border-brand-black p-2 pb-10 group-last:border-b md:p-4 ${
                          index === acts.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
                          <p>{act.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
