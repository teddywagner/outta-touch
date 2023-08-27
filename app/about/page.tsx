"use client";
import { entertainment, interior, dining } from "@/constants";
import Fragment from "react";

const About = () => {
  return (
    <div>
      <div className="flex-center bg-img bg-[url('/about_1.jpg')]">
        <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
          <h1 className="text-2xl padding-x">{entertainment.key}</h1>
          <div>
            There is plenty of great gear to have fun with while on the Outta
            Touch. The yacht houses:
            <ul className="padding-x">
              {entertainment.value.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-center bg-img bg-[url('/about_2.jpg')]">
        <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
          <h1 className="text-2xl padding-x">{interior.key}</h1>
          <p className="padding-x">{interior.value}</p>
        </div>
      </div>
      <div className="flex-center bg-img bg-[url('/about_3.jpg')]">
        <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
          <h1 className="text-2xl padding-x">{dining.key}</h1>
          <p className="padding-x">{dining.value}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
