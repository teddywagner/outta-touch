import Link from "next/link";
import { CustomButton } from ".";

const Hero = () => {
  return (
    <div className="flex-center bg-img bg-[url('/landing-page.jpg')] pt-[112px]">
      <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
        <h1 className="text-[3.2rem] padding-x">Come sail with us</h1>
        <div className="border-t-2 border-white w-full"></div>
        <p className="padding-x">
          The Outta Touch is a Custom 105′ foot Superyacht capable of
          entertaining up to 8 guests within its cabins. Built by Intermarine
          Savannah it provides a large main lounge area, featuring a bar,
          spacious seating with a view. It hosts a vast selection of amenities
          and features that come ready to go. With its twin 1800 HP M90 diesel
          engines, it can cruise at 20 knots and a max speed of 22 knots, the
          perfect combination of performance and luxury.
        </p>
        <Link href="/about">
          <CustomButton
            title="LEARN MORE"
            containerStyles="border-2 border-white rounded-md w-[23rem] hover:bg-[rgba(255,255,255,0.2)] py-5 mt-10"
            textStyles="font-mont font-[100]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
