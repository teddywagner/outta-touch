import { dining, entertainment, interior } from "@/constants";
import { CustomButton } from "@/components";

const About = () => (
  <div>
    <div className="flex-center min-h-screen bg-img bg-entertainment bg-blend-darken">
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
        <CustomButton href="/gallery/entertainment" title="See more" />
      </div>
    </div>
    <div
      className={`flex-center min-h-screen padding-y bg-img bg-interior bg-blend-darken`}
    >
      <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
        <h1 className="text-2xl padding-x">{interior.key}</h1>
        <p className="padding-x">{interior.value}</p>
        <p className="padding-x">{interior.description.paragraph1}</p>
        <p className="padding-x">{interior.description.paragraph2}</p>
        <CustomButton href="/gallery/interior" title="See more" />
      </div>
    </div>
    <div className="flex-center min-h-screen bg-img bg-dining bg-blend-darken">
      <div className="flex flex-col items-center gap-5 text-white max-w-[650px]">
        <h1 className="text-2xl padding-x">{dining.key}</h1>
        <p className="padding-x">{dining.value}</p>
        <CustomButton href="/gallery/dining" title="See more" />
      </div>
    </div>
  </div>
);

export default About;
