export default function ScrollIndicator() {
  return (
    <div
      className={`transform -rotate-90 origin-bottom-left translate-x-full flex items-center space-x-3`}
    >
      <span
        className={`block text-xs leading-none font-semibold tracking-widest uppercase text-neutral-600 dark:text-neutral-300`}
      >
        Scroll
      </span>

      <div
        className={`relative block w-20 h-px bg-neutral-600/50 dark:bg-neutral-300/50 mb-0.5 overflow-hidden`}
      >
        <span
          className={`block absolute top-0 -left-2 w-1/3 h-full bg-neutral-600 dark:bg-neutral-300 animate-bounce-full`}
        />
      </div>
    </div>
  );
}
