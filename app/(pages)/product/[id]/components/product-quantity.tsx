import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/app/components/ui/select";

interface ProductQuantityProps {
  value: number;
  setValue: (value: number) => void;
}

const ProductQuantity = ({ value, setValue }: ProductQuantityProps) => {
  return (
    <Select onValueChange={(value) => setValue(Number(value))}>
      <SelectTrigger>Quantidade: {value}</SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ProductQuantity;
