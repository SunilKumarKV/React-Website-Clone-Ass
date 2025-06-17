import React from "react";
import NewsletterSimpleForm from "./NewsletterSimpleForm";

const Footer = () => {
  return (
    <footer
      className="px-base md:px-md border-t-2 border-brand-red bg-brand-red py-lg text-brand-black 
                 [--focus-color:theme(colors.brand.white)] md:sticky md:bottom-0"
    >
      <div className="container">
        <div className="grid grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-16">
          <div className="col-span-12 row-span-2 md:col-span-4">
            <span className="font-display block w-min text-[5rem] text-current">
              Design Declares
            </span>
          </div>
          <div className="col-span-12 md:col-span-4">
            <nav
              className="grid grid-cols-2 flex-col items-start gap-x-8 gap-y-2"
              aria-label="Menu"
            >
              <div className="col-span-1 sm:col-span-2">
                <a
                  className="focus-ring group relative w-fit transition-colors hover:underline focus:underline"
                  href="/contact"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  className="focus-ring group relative w-fit transition-colors hover:underline focus:underline"
                  href="https://www.instagram.com/design_declares/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  className="focus-ring group relative w-fit transition-colors hover:underline focus:underline"
                  href="https://www.linkedin.com/groups/12699995/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <a
                  className="focus-ring group relative w-fit transition-colors hover:underline focus:underline"
                  href="/privacy-policy"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </div>
            </nav>
          </div>
          <div className="col-span-12 space-y-4 md:col-span-4">
            <p className="font-bold">Sign up to the D! Newsletter</p>
            <NewsletterSimpleForm />
          </div>
          <div className="col-span-12 space-y-4 md:col-span-8">
            <div className="*:my-12 first:*:mt-0 last:*:mb-0 [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-4 [&_p]:my-6 [&_ul]:list-disc [&_ul]:pl-4">
              <p className="font-p-sm">
                This website has been built following low-carbon principles of
                web development and hosted using serverless computing, by only
                allocating energy when needed and on demand.{" "}
                <a
                  className="focus-ring group relative w-fit inline underline transition-colors hover:text-[--focus-color] focus:text-[--focus-color]"
                  href="https://digitalbeacon.co/report/designdeclares-com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more about our carbon footprint
                </a>
                .
              </p>
              <p className="font-p-sm">
                Empowered by{" "}
                <a
                  className="focus-ring group relative w-fit inline underline transition-colors hover:text-[--focus-color] focus:text-[--focus-color]"
                  href="https://driftime.media"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Driftime®
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
