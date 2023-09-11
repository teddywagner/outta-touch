import { Gallery } from "@/components";
import { getImages } from "@/app/api/get-images";

export const dynamic = "force-dynamic";

const page = async () => {
  const images = await getImages();
  return <Gallery images={images || []} />;
};

export default page;
