export const BackgroundSVG = () => (
  <svg
    data-aos="zoom-in-left"
    className="absolute top-10 md:right-0 w-40 h-40 text-slate-400 pointer-events-none"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="dottedPatternMain"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dottedPatternMain)" />
  </svg>
);

export const DottedSVG = () => (
  <svg
    className="absolute right-0 -bottom-10 md:-right-10 w-40 h-40 text-slate-400 pointer-events-none z-10"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="dottedPattern"
        x="0"
        y="0"
        width="10"
        height="10"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dottedPattern)" />
  </svg>
);
