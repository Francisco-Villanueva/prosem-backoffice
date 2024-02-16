"use client";
import { useState } from "react";

export default function useModal() {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  const toggleModal = () => setModalStatus(!modalStatus);
  return {
    modalStatus,
    toggleModal,
  };
}
