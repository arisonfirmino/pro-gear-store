import Link from "next/link";

import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import { ChevronLeftIcon } from "lucide-react";

const BackButton = () => {
  return (
    <Button asChild variant="ghost" className={cn("w-fit")}>
      <Link href="/">
        <ChevronLeftIcon />
        Voltar
      </Link>
    </Button>
  );
};

export default BackButton;
