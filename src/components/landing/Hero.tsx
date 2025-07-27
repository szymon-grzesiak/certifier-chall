import { cn } from "@/lib/utils";
import Header from "../shared/Header";
import { ComponentType, SVGProps } from "react";
import Image from "next/image";
import CustomButton from "../shared/Button";
import Link from "next/link";
import { CustomArrow } from "../icons";

interface HeaderProps {
  special?: string | ComponentType<SVGProps<SVGSVGElement>>;
  mainText?: string;
  subText?: string;
  rightImage: string;
  bgColor?: string | React.CSSProperties;
}

export default function Hero({
  special,
  mainText,
  subText,
  rightImage,
  bgColor = "bg-white",
}: HeaderProps) {
  const isStyle = typeof bgColor === "object";

  const renderSpecial = () => {
    if (!special) return null;

    if (typeof special === "string") {
      return <span className="text-sm">{special}</span>;
    } else {
      const SpecialComponent = special;
      return <SpecialComponent />;
    }
  };

  return (
    <div
      className={cn(
        !isStyle && bgColor,
        "w-full flex flex-col justify-between items-center pb-[60px] gap-[60px] self-stretch"
      )}
      style={isStyle ? bgColor : undefined}
    >
      <Header />
      <div className="w-full flex-col 2xl:flex-row xl:max-w-xl 2xl:max-w-2xl flex justify-between items-center md:px-[10%] xl:px-0 px-[25px]">
        <div
          id="content"
          className="flex flex-col xl:w-[500px] gap-10 shrink-0 items-start justify-center mb-[45px]"
        >
          <div
            id="h1+p1"
            className="flex flex-col gap-[15px] w-full items-center 2xl:items-start text-center 2xl:text-left"
          >
            {renderSpecial()}
            <h1 className="text-[48px] leading-[56px] font-medium">{mainText}</h1>
            <p className="text-[20px] leading-[28px]">
              {subText}
            </p>
          </div>
          <div id="btns" className="w-full flex flex-col 2xl:flex-row gap-[25px] items-center">
            <CustomButton className="w-full xl:w-auto px-5 py-[10px] text-[20px] leading-7 font-medium">
              Book a demo
            </CustomButton>
            <Link
              href="/sign-up"
              className="p-0 flex items-center gap-[10px] text-[#1565D8] group"
            >
              <p className="leading-7 text-[20px] font-medium">Sign up free</p>
              <CustomArrow className="w-[14px] h-[14px] group-hover:translate-x-1 ease-in-out duration-200" />
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={rightImage}
            alt="Hero Image"
            width={560}
            height={504}
            className="shrink-0"
          />
        </div>
      </div>
    </div>
  );
}
