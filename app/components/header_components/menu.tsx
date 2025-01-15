import { cn } from "@/app/lib/utils";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";

import { CircleUserIcon } from "lucide-react";

const Menu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={cn("w-10 md:w-auto")}>
          <CircleUserIcon />
          <span className="hidden md:flex">Minha conta</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
