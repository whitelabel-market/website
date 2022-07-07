const AppButton = ({
  name,
  href,
  isSecondary,
  className,
  useDark = true,
}: {
  name: string;
  href?: string;
  isSecondary?: boolean;
  className?: string;
  useDark?: boolean;
}) => {
  const isLink = !!href;
  let classes = isSecondary
    ? `bg-transparent text-black border-black`
    : `text-white bg-black border-black dark:bg-white dark:border-white dark:text-black`;
  if (useDark) {
    classes += isSecondary
      ? `dark:bg-transparent dark:border-white dark:text-white`
      : `dark:bg-transparent dark:border-black dark:text-black`;
  }
  const ButtonComponent = isLink ? `a` : `button`;
  return (
    <ButtonComponent
      className={`relative border-2 overflow-hidden group inline-flex items-center justify-center rounded py-4 px-12 text-center text-sm font-serif uppercase transition-all ease-in-out duration-200 hover:!border-brand hover:!text-white hover:!bg-brand ${classes} ${className}`}
      href={isLink ? href : undefined}
    >
      {/*<span className={"block absolute top-1/2 left-1/2 w-full h-full aspect-square rounded-full bg-brand transition-all duration-300 transform -translate-y-1/2 -translate-x-1/2 scale-0 group-hover:scale-150"}/>*/}
      <span className={`relative z-10`}>{name}</span>
    </ButtonComponent>
  );
};

export default AppButton;
