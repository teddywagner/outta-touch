import { CustomButton } from "@/components";

const Hero = () => {
  return (
    <div className="flex-center w-full h-[100vh]">
      <div className="darken"></div>
      <video
        src={`https://nicholas-e-wagner.com/video/full-video.mp4`}
        autoPlay
        loop
        muted
      />
      <div className="absolute">
        <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
          <h1 className="text-[3.2rem] padding-x">Come sail with us</h1>
          <div className="border-t-2 border-white w-full"></div>
          <p className="padding-x">
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
