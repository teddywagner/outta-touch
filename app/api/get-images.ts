import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "@/types/database.types";

const supabase = createServerComponentClient<Database>({ cookies });

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  if (folder === "all") {
    const { data, error } = await supabase.from("images").select("*");

    if (error) {
      throw error;
    }

    return data;
  }

  const { data, error } = await supabase
    .from("images")
    .select("*")
    .eq("Folder", folder ?? "");

  if (error) {
    throw error;
  }

  return data;
}
