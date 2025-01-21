"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ChevronLeftIcon } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Button variant="ghost" onClick={handleBack} className={cn("w-fit")}>
      <ChevronLeftIcon />
      Voltar
    </Button>
  );
};

export default BackButton;
