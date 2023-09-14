"use client";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

const Carousel = ({
  images,
  index,
  closeModal,
}: {
  images: ImageType[];
  index: number | 0;
  closeModal: () => void;
}) => {
  const [i, setI] = useState(index);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [image, setImage] = useState<ImageType>(images[i]);

  useEffect(() => {
    // Update the image and reset isLoading when the index changes
    setImage(images[i]);
    setIsLoading(true);
  }, [i, images]);

  const next = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (i !== images.length - 1) {
      setI(i + 1);
    }
  };

  const prev = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (i !== 0) {
      setI(i - 1);
    }
  };

  return (
    <div className="absolute w-full h-full" onClick={closeModal}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`${
            !isLoading ? "hidden" : "block"
          } text-white loading-spinner`}
        >
          <span className={"sr-only"}>Loading...</span>
        </div>
        <Image
          id={image.id}
          src={`https://nicholas-e-wagner.com/${image.folder}/${image.filename}`}
          alt={image.altText}
          fill
          priority
          blurDataURL="/outoftouch.png"
          onLoadingComplete={() => {
            console.log("k");
            setIsLoading(false);
          }}
          style={{ objectFit: "contain" }}
          loading="eager"
          className={`${isLoading ? "hidden" : "block"}`}
        />
      </div>

      <div className="absolute inset-5 flex flex-col justify-between gap-1">
        <div className="flex items-end justify-between gap-1">
          <button
            className="bg-white text-white hover:bg-gold border-gold border font-bold bg-opacity-50 rounded-full p-2"
            onClick={() => {
              closeModal();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-7"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </div>
        <div className="flex gap-2">
          {i !== 0 && (
            <button
              className="flex bg-white text-white flex-1 bg-opacity-50 border border-gold hover:bg-gold justify-center p-2"
              onClick={(e) => prev(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6 font-bold"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M11.5 8a.5.5 0 0 0-.5-.5H5.207l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11a.5.5 0 0 0 .5-.5z"
                />
              </svg>
            </button>
          )}
          {i !== images.length - 1 && (
            <button
              className="flex bg-white text-white flex-1 bg-opacity-50 border border-gold hover:bg-gold justify-center p-2"
              onClick={(e) => next(e)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
