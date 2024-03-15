"use client";
import React, { FormEvent, useState } from "react";
import Input from "../common/Input";
import useInput from "@/hooks/useInput";
import { CompanyServices } from "@/services";
import { ICompany } from "@/types";
import useModal from "@/hooks/useModal";
import Button from "../common/Button";
import { ArrowIcon, SpinnerLoading } from "../icons";
import { useRef } from "react";
import { EmptyCard } from "../common/EmptyCard";

function debounce(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function ModelView({ company }: { company: ICompany }) {
  const { modalStatus, toggleModal } = useModal();
  return (
    <div className=" w-1/3  ">
      <div className="flex border justify-between items-center rounded-md p-2 font-semibold">
        <h2>{company.name}</h2>
        <div>
          <Button variant="dark" onClick={toggleModal}>
            <ArrowIcon />
          </Button>
        </div>
      </div>
      {modalStatus && (
        <div className="border border-light-dark rounded-b-md p-2 bg-light-white text-black">
          <span>Lista de peluqueros</span>
          <div className="flex flex-col gap-2 p-4">
            {company.Users.filter((user) => user.role === "employee").map(
              (user) => (
                <span key={user.id}>
                  {user.name} {user.lastName}
                </span>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default function Searcher() {
  const name = useInput({ validatorType: "no required" });
  const [companies, setCompanies] = useState<ICompany[]>();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm: string) => {
    try {
      const res = await CompanyServices.getByName(searchTerm);

      setCompanies(res);
    } catch (error) {
      console.error("Error al buscar empresas:", error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useRef(debounce(handleSearch, 300)).current;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    name.onChange(e);
    setLoading(true);
    if (searchTerm === "") {
      setLoading(false);

      setCompanies([]); // Establecer el estado de companies a un array vacío si el término de búsqueda está vacío
    } else {
      debouncedSearch(searchTerm);
    }
  };

  return (
    <div className="w-full h-5/6 ">
      <form className="w-1/6">
        <Input {...name} placeholder="Salon .." onChange={handleInputChange} />
      </form>

      <div className="flex gap-2 w-full h-full border-light-dark border rounded-xl p-4">
        {companies?.length ? (
          companies.map((company) => (
            <ModelView key={company.id} company={company} />
          ))
        ) : loading ? (
          <div className="flex flex-col items-center w-full justify-center gap-4 font-extralight text-md">
            <SpinnerLoading className="text-white w-10" />
            <span>Searching</span>
          </div>
        ) : (
          <EmptyCard type="search" />
        )}
      </div>
    </div>
  );
}
