import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ComponentPropsWithoutRef } from "react";

interface CustomButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  children?: React.ReactNode;
  className?: string;
}

export default function CustomButton({
  children,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "h-auto py-[10px] px-[15px] rounded-[8px] text-[16px] leading-6 font-medium cursor-pointer bg-[#1565D8] text-white hover:bg-[#005bb5] hover:translate-y-[-2px]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
