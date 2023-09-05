import { Gallery } from "@/components";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";
import { Image } from "@/types";

export const getImages = async (): Promise<Image[]> => {
  const supabase = createServerComponentClient<Database>({ cookies });

  let { data: images } = await supabase
    .from("images")
    .select("*")
    .neq("folder", "main")
    .neq("folder", "video")
    .order("folder", { ascending: true });

  return images || [];
};

const page = async () => {
  const images = await getImages();
  return <Gallery images={images || []} />;
};

export default page;
