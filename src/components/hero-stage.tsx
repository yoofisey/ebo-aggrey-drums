export function HeroStage() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_65%_at_62%_45%,#55555e_0%,#2c2c34_42%,#17171c_78%)]" />

      <svg
        className="glow-drift absolute inset-0 size-full"
        viewBox="0 0 1000 760"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          <radialGradient id="hero-glow" cx="50%" cy="44%" r="52%">
            <stop offset="0%" stopColor="#d4d4da" stopOpacity="0.72" />
            <stop offset="45%" stopColor="#9a9aa4" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#17171c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hero-figure" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#101015" />
            <stop offset="100%" stopColor="#1c1c22" />
          </linearGradient>
          <linearGradient id="hero-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b9b9c2" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4c4c56" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <ellipse cx="610" cy="350" rx="430" ry="330" fill="url(#hero-glow)" />

        <g fill="url(#hero-figure)">
          <ellipse cx="742" cy="232" rx="118" ry="17" />
          <ellipse cx="470" cy="206" rx="98" ry="14" />
          <ellipse cx="855" cy="300" rx="92" ry="13" />
          <path d="M742 214v-70M470 194v-58M855 286v-52" stroke="#101015" strokeWidth="7" />

          <rect x="560" y="430" width="200" height="128" rx="26" />
          <ellipse cx="660" cy="430" rx="100" ry="32" />
          <rect x="770" y="466" width="122" height="94" rx="20" />
          <ellipse cx="831" cy="466" rx="61" ry="20" />
          <rect x="404" y="458" width="126" height="98" rx="20" />
          <ellipse cx="467" cy="458" rx="63" ry="20" />

          <circle cx="628" cy="292" r="44" />
          <path d="M584 340c-18 26-22 74-10 126h108c10-50 6-98-12-126Z" />
          <path d="M598 336 492 398l16 28 108-58Z" />
          <path d="M664 340 786 388l-12 34-112-52Z" />
          <path d="M600 462l-26 162h44l34-152Z" />
          <path d="M660 462l30 162h44l-26-166Z" />
        </g>

        <g fill="none" stroke="url(#hero-metal)" strokeWidth="3">
          <ellipse cx="742" cy="232" rx="118" ry="17" />
          <ellipse cx="470" cy="206" rx="98" ry="14" />
          <ellipse cx="855" cy="300" rx="92" ry="13" />
          <ellipse cx="660" cy="430" rx="100" ry="32" />
          <ellipse cx="831" cy="466" rx="61" ry="20" />
          <ellipse cx="467" cy="458" rx="63" ry="20" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
