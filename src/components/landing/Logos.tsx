import Image from "next/image";
import Wortell from "@/assets/images/wortell.svg";
import Society from "@/assets/images/society.svg";
import Keepit from "@/assets/images/keepit.svg";
import Verkada from "@/assets/images/verkada.svg";
import HultPrize from "@/assets/images/hultprize.svg";

interface LogosProps {
  customText?: string;
}
export default function Logos({ customText }: LogosProps) {
  return (
    <section
      id="logos"
      className="w-full mx-auto flex items-center self-stretch mt-[40px] gap-[10px] xl:max-w-[1020px] 2xl:max-w-[1170px] px-[25px] xl:px-2 2xl:px-0"
    >
      <div className="w-full flex flex-col xl:flex-row justify-between items-center border-1 border-white" >
        <p className="shrink-0 leading-6 text-[16px] w-full max-w-[240px] mb-[30px] xl:mb-0">
          {customText}
        </p>
        <div className="h-[40px] w-[1px] bg-transparent border-l border-[#ccc] hidden xl:block" />
        <div className="flex items-center justify-center 2xl:justify-between flex-1 flex-wrap shrink-0 h-[66px] w-full max-w-[865px] gap-[10px] xl:w-[calc(100%-240px)]">
          <div className="flex justify-center items-center w-[141px] h-[40px]">
            <Image src={Society} alt="Society" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[40px]">
            <Image src={Keepit} alt="Keepit" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[40px]">
            <Image src={Verkada} alt="Verkada" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[40px]">
            <Image src={Wortell} alt="Wortell" />
          </div>
          <div className="flex justify-center items-center w-[141px] h-[40px]">
            <Image src={HultPrize} alt="Hult Prize" />
          </div>
        </div>
      </div>
    </section>
  );
}
