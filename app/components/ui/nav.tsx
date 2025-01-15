import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";

import {
  CableIcon,
  HeadsetIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SquareIcon,
} from "lucide-react";

const Nav = () => {
  const nav_items = [
    { category: "Mouses", icon: <MouseIcon /> },
    { category: "Teclados", icon: <KeyboardIcon /> },
    { category: "Headsets", icon: <HeadsetIcon /> },
    { category: "Mousepads", icon: <SquareIcon /> },
    { category: "Monitores", icon: <MonitorIcon /> },
    { category: "Acessórios Gamer", icon: <CableIcon /> },
  ];

  return (
    <nav className="flex justify-between md:justify-center md:gap-10">
      {nav_items.map((item) => (
        <Button
          key={item.category}
          variant="ghost"
          className={cn("w-10 uppercase md:w-auto")}
        >
          <span className="hidden xl:flex">{item.category}</span>
          <span className="xl:hidden">{item.icon}</span>
        </Button>
      ))}
    </nav>
  );
};

export default Nav;
