export const ProgressBar = () => {
  return (
    <div className="fixed top-0 z-10 h-2 w-full">
      <div
        className="h-full w-full origin-left bg-brand-red will-change-transform"
        style={{ transform: "scaleX(0) translateZ(0px)" }}
      ></div>
    </div>
  );
};
