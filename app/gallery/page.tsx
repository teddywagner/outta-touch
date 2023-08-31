import { Gallery } from "@/components";
import Link from "next/link";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";

const page = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  let { data: images, error } = await supabase
    .from("images")
    .select("id, Folder, FileName, AltText")
    .eq("Folder", "entertainment")
    .range(1, 6);

  return (
    <div className="flex-center">
      <Gallery images={images || []} />
      <div className="flex text-white justify-between items-end padding-x padding-y">
        <Link href="/gallery" className="hover:underline">
          All
        </Link>
        <Link href="/gallery#entertainment" className="hover:underline">
          Entertainment
        </Link>
        <Link href="/gallery#interior" className="hover:underline">
          Interior
        </Link>
        <Link href="/gallery#dining" className="hover:underline">
          Food & Dining
        </Link>
      </div>
    </div>
  );
};

export default page;
