import { Gallery } from "@/components";
import { FolderType } from "@/types";
import { getImages } from "@/app/api/get-images";

export const dynamic = "force-dynamic";

const page = async () => {
  const images = await getImages();
  return (
    <Gallery images={images || []} filter={"dining" satisfies FolderType} />
  );
};

export default page;
