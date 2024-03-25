import React from "react";
import { SpinnerLoading } from "../icons";

export default function Loader() {
  return (
    <div className="h-full w-full flex justify-center items-center gap-2   rounded-lg">
      <SpinnerLoading /> loading
    </div>
  );
}
