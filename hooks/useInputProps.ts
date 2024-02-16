import { IconsProps } from "@/interfaces";

export default function useIconsProps({
  fill,
  className,
  stroke,
  strokeWidth,
}: IconsProps) {
  const obj = {
    fill: fill ? fill : "black",
    className: className ? className : "w-6",
    strokeWidth: strokeWidth ? strokeWidth : 0.5,
    stroke: stroke ? stroke : "black",
  };

  return obj;
}
