import Logos from "@/components/landing/Logos";
import { G2_tag } from "@/components/icons";
import Hero from "@/components/landing/Hero";
import Animation from "@/assets/images/Animation.svg";

const data = {
  mainText: "Power your training program with digital credentials",
  subText:
    "Boost your training business, stay top of mind with program alumni, and turn learning progress into shareable, professional, and branded certificates.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero
        special={G2_tag}
        mainText={data.mainText}
        subText={data.subText}
        bgColor={{
          background:
            "linear-gradient(180deg, #E7F4EB 63.67%, rgba(231, 244, 235, 0.00) 100%)",
        }}
        rightImage={Animation}
      />
      <Logos customText="500+ training providers grow their businesses with Certifier" />
    </main>
  );
}
