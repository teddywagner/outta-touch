"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

type BlurImageProps = {
  src: string;
  alt: string;
  priority: boolean;
  onClick: () => void;
};

const BlurImage: FunctionComponent<BlurImageProps> = ({
  src,
  alt,
  priority,
  onClick,
}) => {
  const [loading, isLoading] = useState<boolean>(true);

  return (
    <div
      className="group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
      onClick={onClick}
    >
      <Image
        alt={alt}
        src={`https://nicholas-e-wagner.com/${src}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`object-cover group-hover:opacity-75 cursor-pointer ${
          loading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }`}
        onLoadingComplete={() => isLoading(false)}
        priority={priority}
      />
    </div>
  );
};

export default BlurImage;
