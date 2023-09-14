"use client";
import { Image as ImageType } from "@/types";
import Image from "next/image";
import { useState } from "react";

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
  const next = () => {
    if (i !== images.length - 1) {
      setIsLoading(true);
      setI(i + 1);
      setImage(images[i + 1]);
    }
  };

  const prev = () => {
    if (i !== 0) {
      setIsLoading(true);
      setI(i - 1);
      setImage(images[i - 1]);
    }
  };
  return (
    <div className="absolute w-full h-full ">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={`https://nicholas-e-wagner.com/${image.folder}/${image.filename}`}
          alt={image.altText}
          fill
          priority
          onLoadingComplete={() => setIsLoading(false)}
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="absolute inset-5 flex items-center justify-between">
        {index !== 0 && (
          <button
            className={`bg-white  bg-opacity-50 rounded-full p-2`}
            disabled={isLoading}
            onClick={prev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.5 8a.5.5 0 0 0-.5-.5H5.207l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </button>
        )}
        {index !== images.length - 1 && (
          <button
            className="bg-white bg-opacity-50 rounded-full p-2"
            onClick={next}
            disabled={isLoading}
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
  );
};

export default Carousel;
