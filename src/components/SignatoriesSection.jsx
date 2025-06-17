export default function Signatories() {
  const ukSignatories = [
    "21–87",
    "216 Signs",
    "31% Wool",
    "400",
    "A–Side.",
    "Aalia Ahamed",
    "Abbie Williams",
    "ACRE – A Creative Endeavour Ltd",
    "Active Matter",
    "ACX",
    "Adele Kelly",
    "AdesignStorie",
    "Advocate Design Agency",
    "Aetha Design",
    "Aileron Design Ltd",
    "Alan Pitchforth",
    "Alex Kimber Design",
    "Alexander Miller",
    "Alexandra Lunn Studio",
    "Alexie Sommer",
  ];

  const globalSupport = {
    Australia: [
      "Alena Smith Interior Design",
      "Andrew Sloan",
      "Andrew Vaughan",
      "Andy Marks",
    ],
    Brazil: [
      "Adriana Tamashiro",
      "Agatha Martins",
      "Alexander Ângelo Guazzelli",
      "Alexandre de Oliveira Lot",
    ],
    Canada: [
      "À Hauteur d'homme",
      "Ardeshir Amini",
      "Cense Ltd.",
      "Eliane Bowden",
    ],
    Germany: [
      "Amarjith Sreekumar",
      "andreas popp",
      "Ashley Scarborough",
      "Bendcircular",
    ],
    Spain: ["Alberto Carnero", "Banda", "Blackbot", "Catalina Estrada"],
  };

  return (
    <section className="px-4 md:px-8 py-32 first-of-type:pt-16 last-of-type:pb-16">
      <div className="container">
        <div className="" style={{ opacity: "1", transform: "none" }}>
          <div className="">
            <div className="space-y-12">
              <div>
                <span className="block max-w-fit text-6xl text-white">
                  #514
                </span>
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-h3 text-white">
                    Signatories and counting in{" "}
                    <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold transition-colors bg-brand-red text-brand-black">
                      D! UK
                    </span>
                  </span>
                  <span className="inline-block max-w-fit rounded-full px-3 py-1 text-xs font-semibold bg-red-500 text-black">
                    D! UK
                  </span>
                </span>
              </div>

              <div className="columns-3 sm:columns-4 lg:columns-6 container:columns-9 text-white">
                {ukSignatories.map((signatory, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block max-w-fit text-xs font-medium text-gray-400 hover:text-white hover:underline mb-2 break-inside-avoid"
                  >
                    {signatory}
                  </a>
                ))}
              </div>

              <div>
                <span className="block max-w-fit text-6xl text-white">
                  #663
                </span>
                <h2 className="font-h3 text-white">Global Supporters</h2>
              </div>

              <div className="columns-3 sm:columns-4 lg:columns-6 gap-4">
                {Object.entries(globalSupport).map(([country, supporters]) => (
                  <div key={country} className="mb-6 break-inside-avoid">
                    <h3 className="text-xs font-bold text-white mb-2">
                      {country}
                    </h3>
                    {supporters.map((supporter, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block max-w-fit text-xs font-medium text-gray-400 hover:text-white hover:underline mb-1"
                      >
                        {supporter}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
