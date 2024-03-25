import { ErroIcon } from "../icons";
import { asideStore } from "@/store";
import AsideContent from "./AsideContent";

export default function Aside() {
  const { type, setAside } = asideStore();

  return type ? (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 backdrop-blur-[1px] bg-grey bg-opacity-50`}
      ></div>

      <aside
        className={`flex flex-col fixed top-0 right-0 h-full w-[35%] min-w-[600px] shadow-md shadow-gray-400 px-14 py-10 bg-white z-20 transform transition-transform duration-300 "translate-x-full`}
      >
        <AsideContent />
      </aside>
    </>
  ) : null;
}
