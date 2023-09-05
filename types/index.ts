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

export type FolderType =
  | "all"
  | "dining"
  | "aerials"
  | "entertainment"
  | "interior";

export type Image = {
  id: string;
  folder: string;
  filename: string;
  altText: string;
  isFavorite: boolean;
};
