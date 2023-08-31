"use client";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

type BlurImageProps = {
  src: string;
  alt: string;
};

const BlurImage: FunctionComponent<BlurImageProps> = ({ src, alt }) => {
  const [loading, isLoading] = useState<boolean>(true);

  return (
    <div className="group w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt={alt}
        src={`http://34.107.197.90/${src}`}
        fill
        className={`object-cover group-hover:opacity-75 ${
          loading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        }`}
        onLoadingComplete={() => isLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
