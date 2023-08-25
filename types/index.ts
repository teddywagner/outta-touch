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
