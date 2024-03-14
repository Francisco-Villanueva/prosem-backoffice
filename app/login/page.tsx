import Image from "next/image";
import { Login } from "../components";

export default function page() {
  return (
    <div className="flex h-[100vh] max-md:flex-col justify-center">
      <section className="w-1/2 h-full  max-md:w-full  max-md:h-1/3 flex flex-col items-center justify-center bg-black">
        <div className="  relative w-5/6 h-2/6  ">
          <Image src={"/svg/Logo.svg"} fill objectFit="contain" alt="logo" />
        </div>
        <div className="w-1/2  max-md:w-5/6  max-xl:font-normal text-center text-green font-thin">
          <span>Your living room, our technology</span>
        </div>
      </section>
      <section className="flex flex-col md:justify-center items-center gap-10 w-1/2  h-full max-md:w-full  max-md:h-3/4  max-md:pt-10 bg-black">
        <h2 className="font-bold text-3xl text-white">Welcome Back</h2>
        <div className="w-1/2 max-xl:w-5/6">
          <Login />
        </div>
      </section>
    </div>
  );
}
