import { formatCurrency } from "@/app/helpers/formatCurrency";

interface InfoRowProps {
  title: string;
  value: number;
}

const InfoRow = ({ title, value }: InfoRowProps) => {
  return (
    <div
      className={`flex items-center justify-between text-sm ${title === "Total" && "font-semibold"}`}
    >
      <p>{title}</p>
      <p>{formatCurrency(Number(value))}</p>
    </div>
  );
};

export default InfoRow;
