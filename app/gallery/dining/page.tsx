import { Gallery } from "@/components";
import { FolderType } from "@/types";
import { images } from "@/constants/images";

const page = async () => {
  return <Gallery images={images} filter={"dining" satisfies FolderType} />;
};

export default page;
