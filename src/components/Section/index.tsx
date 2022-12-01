import React from 'react';
import SectionRight, {
  SectionRightProps,
} from '@/components/Section/SectionRight';
import SectionTwoCols from '@/components/Section/SectionTwoCols';

interface SectionProps
  extends Omit<React.HTMLProps<HTMLHtmlElement>, 'color'>,
    SectionRightProps {
  variant?: 'right' | 'two-cols';
  parent?: React.ElementType;
  bgColor?: 'black' | 'gray';
}

const Section = React.forwardRef<
  HTMLHtmlElement,
  React.PropsWithChildren<SectionProps>
>(
  (
    {
      title,
      tag,
      description,
      color,
      bgColor,
      children,
      className,
      variant = `right`,
      disableTheme,
      parent: ParentComponent,
      ...props
    },
    ref,
  ) => {
    const colorClass = {
      text: {
        white: `text-neutral-50`,
        yellow: disableTheme
          ? `text-yellow`
          : `text-yellow-900 dark:text-yellow`,
        purple: disableTheme
          ? `text-purple`
          : `text-neutral-900 dark:text-purple`,
        black: `text-black`,
      },
      bg: {
        black: disableTheme ? `bg-black` : `bg-neutral-100 dark:bg-black`,
        gray: disableTheme
          ? `bg-neutral-400`
          : `bg-neutral-200 dark:bg-neutral-400`,
      },
    };

    const variants = {
      right: (
        <SectionRight
          disableTheme={disableTheme}
          title={title}
          tag={tag}
          description={description}
          color={color}
        >
          {children}
        </SectionRight>
      ),
      'two-cols': <SectionTwoCols>{children}</SectionTwoCols>,
    };

    return (
      <section
        ref={ref}
        className={`relative flex flex-col justify-center ${
          !color ? ` ` : colorClass.text[color]
        } ${!bgColor ? ` ` : colorClass.bg[bgColor]} ${className}`}
        {...props}
      >
        {!ParentComponent ? (
          variants[variant]
        ) : (
          <ParentComponent>{variants[variant]}</ParentComponent>
        )}
      </section>
    );
  },
);

Section.displayName = `Section`;

export default Section;
