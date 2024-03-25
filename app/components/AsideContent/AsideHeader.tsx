import { XIcon } from "@/app/icons";
import { asideStore } from "@/store";
import React from "react";

export default function AsideHeader() {
  const { type, setAside } = asideStore();
  switch (type) {
    case "EditMember":
      return (
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-sans text-black font-semibold">
            Edit Member
          </h2>
          <button onClick={() => setAside(null)}>
            <XIcon size={6} />
          </button>
        </header>
      );
  }
}
