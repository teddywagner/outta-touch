import { Gallery } from "@/components";
import { images } from "@/constants/images";
import { FolderType, Image } from "@/types";

const reorderImages = (images: Image[]): Image[] => {
  let options: FolderType[] = [
    "aerials",
    "entertainment",
    "interior",
    "dining",
  ];
  const folderIndices = new Map<string, number[]>();
  images.forEach((image) => {
    const folder = image.folder;
    const id = parseInt(image.id);
    if (!folderIndices.has(folder)) {
      folderIndices.set(folder, [id]);
    } else {
      folderIndices.get(folder)?.push(id);
    }
  });

  const reorderedImages: Image[] = [];

  for (let i = 0; i < images.length; i++) {
    let folder = options[i % options.length];
    while (folderIndices.get(folder)?.length === 0) {
      options = options.filter((option) => option !== folder);
      folder = options[i % options.length];
    }

    const ids = folderIndices.get(folder);
    if (!ids) {
      console.log("Ids not found:", folder);
      continue;
    }

    const id = ids.shift();
    if (id === undefined) {
      console.log("Empty ids:", folder, i, id);
      continue;
    }
    const image = images.find((i) => i.id === id.toString());
    if (!image) {
      console.log("image not found for id: " + id.toString());
    }

    reorderedImages.push(image as Image);
    folderIndices.set(folder, ids);
  }

  return reorderedImages;
};

const page = async () => {
  const reorderedImages = reorderImages(images);

  return (
    <>
      <Gallery images={reorderedImages} />
    </>
  );
};

export default page;
