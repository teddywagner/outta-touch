"use client";
import { useMemo, useState } from "react";
import { BlurImage, Carousel } from ".";
import { galleryFilters } from "@/constants";
import { FolderType, Image as ImageType } from "@/types";
import { Add, ArrowUpward } from "@mui/icons-material";
import Modal from "react-modal";

const limit = 24;

const Gallery = ({
  images,
  filter,
}: {
  images: ImageType[];
  filter?: FolderType;
}) => {
  const [folder, setFolder] = useState<FolderType>(
    filter || ("all" satisfies FolderType),
  );
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(images.length);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectedIndex = (index: number) => {
    setSelectedIndex(index);
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const filteredImages = useMemo(() => {
    const filtered = images.filter((image) =>
      folder === "all" ? true : image.folder === folder,
    );
    setTotalImages(filtered.length);

    return filtered.slice(0, page * limit);
  }, [folder, page, images]);

  return (
    <div id="gallery" className="bg-boat bg-repeat-y bg-center">
      <div className="backdrop-blur-2xl px-16 pt-28">
        <div className="flex justify-between flex-col sm:flex-row  text-white w-full padding-y mx-auto max-w-xl">
          {galleryFilters.map((filter) => (
            <span
              key={filter.value}
              className={`hover:underline hover:cursor-pointer w-fit ${
                filter.value === folder && "font-bold underline"
              }`}
              onClick={() => {
                setPage(1);
                setFolder(filter.value);
              }}
            >
              {filter.label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-gallery gap-y-10 gap-x-6 py-3">
          {filteredImages &&
            filteredImages.map(({ id, folder, filename, altText }, i) => (
              <BlurImage
                key={id}
                src={`${folder}/${filename}`}
                alt={altText}
                priority={i < 5}
                onClick={() => handleSelectedIndex(i)}
              />
            ))}
        </div>
        <div className="flex-center w-full gap-10">
          {totalImages > page * limit && (
            <button
              className="flex-center items-center hover:underline text-white py-3 text-lg"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <Add />
              See more
            </button>
          )}
          <button
            className="flex-center items-center hover:underline text-white py-3 text-lg"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Back to top
            <ArrowUpward />
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc
        contentLabel="Image"
        appElement={
          typeof window !== "undefined"
            ? (document.getElementById("root") as HTMLElement)
            : undefined
        }
        style={{
          overlay: {
            background: "rgba(0,0,0,0.75)",
            zIndex: 1000,
          },
          content: {
            background: "transparent",
            border: "none",
            padding: "0px",
            margin: "auto",
            zIndex: 1001,
          },
        }}
      >
        <Carousel
          images={images.filter((i) =>
            folder === "all" ? true : i.folder === folder,
          )}
          index={selectedIndex}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
};

export default Gallery;
