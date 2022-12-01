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
      parent: ParentComponent,
      ...props
    },
    ref,
  ) => {
    const colorClass = {
      text: {
        white: `text-neutral-50`,
        yellow: `text-yellow`,
        purple: `text-purple`,
        black: `text-black`,
      },
      bg: {
        black: `bg-black`,
        gray: `bg-neutral-400`,
      },
    };

    const variants = {
      right: (
        <SectionRight
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
