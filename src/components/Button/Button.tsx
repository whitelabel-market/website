const AppButton = ({ name, href, isSecondary, className, useDark = true }: { name: string, href?: string, isSecondary?: boolean, className?: string, useDark?: boolean }) => {
    const isLink = !!href
    let classes = isSecondary ?  "bg-transparent text-black border-black" : "bg-transparent border-white text-white"
    if(useDark){
        classes += isSecondary ?  "dark:bg-transparent dark:border-white dark:text-white" : "dark:bg-transparent dark:border-black dark:text-black"
    }
    const ButtonComponent = isLink ? "a" : "button"
    return (<ButtonComponent
            className={`relative border overflow-hidden group inline-flex items-center justify-center rounded-full py-3 px-12 text-center capitalize transition-all duration-200 hover:!border-brand hover:!text-white ${classes} ${className}`}
            href={isLink ? href : undefined}
        >
            <span className={"block absolute top-1/2 left-1/2 w-full aspect-square rounded-full bg-brand transition-all duration-300 transform -translate-y-1/2 -translate-x-1/2 scale-0 group-hover:scale-110"}/>
            <span className={"relative z-10"}>{name}</span>
        </ButtonComponent>
    );
};

export default AppButton;
