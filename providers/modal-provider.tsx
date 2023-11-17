"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";
import AuthModal from "@/components/auth-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
      <AuthModal />
    </>
  );
};

export default ModalProvider;
