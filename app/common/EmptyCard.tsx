"use client";
import Image from "next/image";
import ButtonEffect from "./ButtonEffect";
import { useRouter } from "next/navigation";

type EmptyCardType = "team" | "appointmens" | "status";
type TConfig = {
  image: string;
  paragraph: string;
  ButtonIcon?: () => JSX.Element;
  buttonText?: string;
  LinkIcon?: () => JSX.Element;
  linkText?: string;
  link?: string;
};

const Config: Record<EmptyCardType, TConfig> = {
  team: {
    image: "/svg/office.svg",
    paragraph: "You haven't loaded any employees yet.",
    // ButtonIcon: CheckIcon,
    buttonText: "Load Team Members",
    link: "/shop",
    linkText: "Shop Now",
  },
  appointmens: {
    image: "/svg/girl.svg",
    paragraph: "You haven't attached any appoinment.",
    // ButtonIcon: UploadIcon,
    // buttonText: "Load Team Members",
    link: "/home/addTeam",
    linkText: "Add Team Memeber",
  },
  status: {
    image: "/svg/Orders.svg",
    paragraph: "You don't have any status.",
    link: "/shop",
    // buttonText: "Load Team Members",
    linkText: "Shop Now",
  },
};

interface EmptyCardProps {
  type: EmptyCardType;
}

export function EmptyCard({ type }: EmptyCardProps) {
  const { image, paragraph, ButtonIcon, buttonText } = Config[type];
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-4  w-full h-full ">
      <div className="flex flex-col items-center gap-2">
        <div className=" h-32 aspect-square relative">
          <Image src={image} alt={paragraph} fill />
        </div>
        <p className="text-black text-center text-sm">{paragraph}</p>
      </div>
      <div className="flex gap-2  ">
        {buttonText && (
          <ButtonEffect
            preHover={buttonText}
            afterHover={buttonText}
            effect="bg-effect"
            variant="secondary"
            onClick={
              type === "team" ? () => router.push("/home/addMember") : () => {}
            }
          ></ButtonEffect>
        )}
      </div>
    </div>
  );
}
