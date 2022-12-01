export default function ScrollIndicator() {
  return (
    <div
      className={`transform -rotate-90 origin-bottom-left translate-x-full flex items-center space-x-3`}
    >
      <span
        className={`block text-[0.55rem] leading-none font-semibold tracking-widest uppercase text-neutral-50`}
      >
        Scroll
      </span>

      <div
        className={`relative block w-20 h-px bg-neutral-400/50 mb-0.5 overflow-hidden`}
      >
        <span
          className={`block absolute top-0 left-0 w-1/3 h-full bg-neutral-50 animate-bounce-full`}
        />
      </div>
    </div>
  );
}
