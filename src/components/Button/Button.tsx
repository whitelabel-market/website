const Button = (props: { name: string, href: string, isSecondary?: boolean, className?: string }) => {
  return (
    <button
      className={`max-w-[168px] rounded-[7px] py-[13px] px-[47px] text-center text-sm font-medium capitalize  transition-all duration-200 hover:bg-[#666666] hover:text-white dark:bg-white dark:text-black dark:hover:bg-[#666666] dark:hover:text-white ${
          props?.isSecondary ? "bg-black text-white" : "bg-white text-black"
      } ${props.className}`}
    >
      <a href={props.href}>{props.name}</a>
    </button>
  );
};

export default Button;
