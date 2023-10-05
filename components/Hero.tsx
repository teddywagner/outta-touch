"use client";
import { CustomButton } from "@/components";

const Hero = () => {
  return (
    <div className="flex-center w-full h-screen">
      <div className="darken"></div>
      <video
        id="video"
        src={`https://nicholas-e-wagner.com/video/mobile-video.mp4`}
        autoPlay
        loop
        muted
        playsInline
        onLoad={() => {
          const video = document.getElementById("video") as HTMLVideoElement;
          video.play();
        }}
        poster={"https://nicholas-e-wagner.com/main/wide-boat.jpg"}
      />
      <div className="absolute">
        <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
          <h1 className="text-3xl sm:text-[3.2rem] padding-x">
            Come sail with us
          </h1>
          <div className="hidden sm:block border-t-2 border-white w-full mx-3"></div>
          <p className="hidden sm:block padding-x">
            The Outta Touch is a Custom 105’ Superyacht capable of entertaining
            up to 8 guests within its cabins. Built by Intermarine Savannah it
            provides a large main lounge area, featuring a bar, spacious seating
            with a view. It hosts a vast selection of amenities and features
            that come ready to go. With its twin 1800 HP M90 diesel engines, it
            can cruise at 20 knots and a max speed of 22 knots, the perfect
            combination of performance and luxury.
          </p>
          <CustomButton href="/about" title="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
