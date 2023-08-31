import { BlurImage } from ".";

type Image = {
  id: string;
  Folder: string;
  FileName: string;
  AltText: string;
};

const Gallery = async ({ images }: { images: Image[] }) => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid gap-y-10 gap-x-6 grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images &&
          images.map(({ id, Folder, FileName, AltText }) => (
            <BlurImage key={id} src={`${Folder}/${FileName}`} alt={AltText} />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
