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
  folder: FolderType;
  filename: string;
  altText: string;
  isFavorite: boolean;
};
