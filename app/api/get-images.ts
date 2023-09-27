import { FolderType, Image } from "@/types";

export const getImagesXML = async () => {
  const res = await fetch("https://nicholas-e-wagner.com");
  // This response will be a xml
  // We need to convert it to text
  const text = await res.text();
  // Now we can parse the xml
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");
  // Now we can get the images
  const contents = xml.getElementsByTagName("Contents");
  const images: Image[] = [];
  for (let i = 0; i < contents.length; i++) {
    const content = contents[i];
    const id = content.getElementsByTagName("Key")[0].innerHTML;
    const folder = id.split("/")[0] as FolderType;
    const filename = id.split("/")[1];

    const image = {
      id,
      folder: folder satisfies FolderType,
      filename,
      altText: "",
      isFavorite: false,
    };
    images.push(image);
  }
  return images;
};
