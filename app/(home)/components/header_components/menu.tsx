"use client";

import { signOut, useSession } from "next-auth/react";

import { signIn } from "next-auth/react";

import { cn } from "@/app/lib/utils";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/app/components/ui/sheet";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";
import { Button } from "@/app/components/ui/button";

import { CircleUserIcon, LogInIcon, LogOutIcon } from "lucide-react";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className={cn("w-10 text-foreground md:w-auto")}
        >
          {!session?.user ? (
            <CircleUserIcon />
          ) : (
            <Avatar className={cn("h-4 w-4")}>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name}</AvatarFallback>
            </Avatar>
          )}

          <span className="hidden md:flex">Minha conta</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        {!session?.user ? (
          <Button
            onClick={async () => await signIn("google")}
            className={cn("w-full justify-between")}
          >
            Fazer login
            <LogInIcon />
          </Button>
        ) : (
          <Button
            onClick={async () => await signOut()}
            className={cn("w-full justify-between")}
          >
            Sair
            <LogOutIcon />
          </Button>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
