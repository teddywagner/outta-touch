import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit" | "reset" | undefined;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ImageContainerProps {
  src: string;
  styles?: string;
  children?: React.ReactNode;
}
