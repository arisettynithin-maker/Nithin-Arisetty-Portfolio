export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-canvas" />
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.24]" />
      <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_62%)]" />
      <div className="absolute left-[-10rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-white/45 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-accent/10 blur-3xl" />
    </div>
  );
}
