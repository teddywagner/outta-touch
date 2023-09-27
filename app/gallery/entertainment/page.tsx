import { Gallery } from "@/components";
import { FolderType } from "@/types";
import { images } from "@/constants/images";

export const dynamic = "force-dynamic";

const page = async () => {
  return (
    <Gallery images={images} filter={"entertainment" satisfies FolderType} />
  );
};

export default page;
