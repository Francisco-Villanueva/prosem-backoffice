import Link from "next/link";
import React from "react";

export default function ConfirmRegistration() {
  return (
    <section className="border w-full p-8 text-white rounded-xl border-light-dark flex flex-col items-center  justify-center flex-grow gap-10">
      <h2>
        Bienvenido a <span className="text-green">Prosem</span> !
      </h2>

      <span className="flex items-center gap-2   p-2 rounded-md border">
        <Link href={"/login"} className="font-semibold text-xl">
          Iniciar Sesión
        </Link>
      </span>
    </section>
  );
}
