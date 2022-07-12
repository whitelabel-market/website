import React from 'react';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';

type ButtonProps = ButtonBaseProps;
type ButtonColoredProps = Omit<ButtonProps, 'color'>;

function ButtonRoot(props: ButtonProps) {
  return <ButtonBase {...props} />;
}

export function ButtonPrimary({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`primary`}>
      {children}
    </ButtonRoot>
  );
}

export function ButtonSecondary({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`secondary`}>
      {children}
    </ButtonRoot>
  );
}

export function ButtonOutline({ children, ...props }: ButtonColoredProps) {
  return (
    <ButtonRoot {...props} color={`outline`}>
      {children}
    </ButtonRoot>
  );
}
