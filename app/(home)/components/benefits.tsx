import { cn } from "@/app/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import {
  ArrowRightLeftIcon,
  BadgePercentIcon,
  CreditCardIcon,
  TruckIcon,
} from "lucide-react";

const Benefits = () => {
  const card_items = [
    {
      title: "Entrega em todo Brasil",
      description: "Garantimos o melhor envio de todo o Brasil",
      icon: <TruckIcon size={24} />,
    },
    {
      title: "Melhores Preços",
      description: "Tenha o melhor preço do mercado e, suas mãos",
      icon: <BadgePercentIcon size={24} />,
    },
    {
      title: "Troca e devolução",
      description: "Confira nossa politica de trocas e devoluções",
      icon: <ArrowRightLeftIcon size={24} />,
    },
    {
      title: "Parcelamento",
      description: "Parcelamento em até 12x sem juros",
      icon: <CreditCardIcon size={24} />,
    },
  ];

  return (
    <div className="grid grid-cols-2 items-center gap-5 xl:flex">
      {card_items.map((item) => (
        <Card
          key={item.title}
          className={cn(
            "flex flex-col items-center gap-2.5 border-none bg-muted p-2.5 md:flex-row",
          )}
        >
          <CardHeader
            className={cn(
              "flex max-h-14 min-h-14 min-w-14 max-w-14 items-center justify-center rounded-md bg-secondary text-primary",
            )}
          >
            {item.icon}
          </CardHeader>

          <CardContent>
            <CardTitle
              className={cn("line-clamp-1 text-center text-sm md:text-start")}
            >
              {item.title}
            </CardTitle>
            <CardDescription
              className={cn("line-clamp-2 text-center text-xs md:text-start")}
            >
              {item.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Benefits;
