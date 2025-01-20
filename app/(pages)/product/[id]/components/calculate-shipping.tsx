import { cn } from "@/app/lib/utils";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

const CalculateShipping = () => {
  return (
    <div className="space-y-2.5">
      <p className="text-base font-medium">Calcular frete</p>

      <form className="flex gap-5">
        <Input placeholder="00000-000" />
        <Button className={cn("w-full")}>Calcular</Button>
      </form>
    </div>
  );
};

export default CalculateShipping;
