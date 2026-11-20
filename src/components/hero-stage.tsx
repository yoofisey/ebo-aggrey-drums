export function HeroStage() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_65%_at_62%_45%,#55555e_0%,#2c2c34_42%,#17171c_78%)]" />

      <video
        className="absolute inset-0 size-full object-cover object-center opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-reel-poster.jpg"
      >
        <source src="/videos/ebo-hero-reel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
