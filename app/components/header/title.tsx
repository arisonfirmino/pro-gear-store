import Image from "next/image";
import Link from "next/link";

const Title = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="ProGear Store"
          height={500}
          width={500}
          className="min-h-10 min-w-10 max-w-10 rounded-full"
        />

        <h1 className="hidden text-nowrap text-2xl font-bold xl:flex">
          ProGear Store
        </h1>
      </div>
    </Link>
  );
};

export default Title;
