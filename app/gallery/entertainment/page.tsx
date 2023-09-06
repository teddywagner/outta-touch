import { Gallery } from "@/components";
import { getImages } from "../page";
import { FolderType } from "@/types";

export const dynamic = "force-dynamic";

const page = async () => {
  const images = await getImages();
  return (
    <Gallery
      images={images || []}
      filter={"entertainment" satisfies FolderType}
    />
  );
};

export default page;
