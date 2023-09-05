import { entertainment, interior, dining } from "@/constants";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

const About = () => (
  <div>
    <div
      className={`flex-center h-[100vh] bg-img bg-entertainment bg-blend-darken`}
    >
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
        <Link
          href="/gallery/entertainment"
          className="flex-center border-2 border-white rounded-md w-[15rem] hover:bg-[rgba(255,255,255,0.2)] py-3"
        >
          <span className="font-mont font-[100]">
            See more <ArrowForward />
          </span>
        </Link>
      </div>
    </div>
    <div
      className={`flex-center h-[100vh] bg-img bg-interior`}
    >
      <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
        <h1 className="text-2xl padding-x">{interior.key}</h1>
        <p className="padding-x">{interior.value}</p>
        <p className="padding-x">{interior.description.paragraph1}</p>
        <p className="padding-x">{interior.description.paragraph2}</p>
        <Link
          href="/gallery/interior"
          className="flex-center border-2 border-white rounded-md w-[15rem] hover:bg-[rgba(255,255,255,0.2)] py-3"
        >
          <span className="font-mont font-[100]">
            See more <ArrowForward />
          </span>
        </Link>
      </div>
    </div>
    <div
      className={`flex-center h-[100vh] bg-img bg-dining`}
    >
      <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
        <h1 className="text-2xl padding-x">{dining.key}</h1>
        <p className="padding-x">{dining.value}</p>
        <Link
          href="/gallery/dining"
          className="flex-center border-2 border-white rounded-md w-[15rem] hover:bg-[rgba(255,255,255,0.2)] py-3"
        >
          <span className="font-mont font-[100]">
            See more <ArrowForward />
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default About;
