import Link from "next/link";

const Title = () => {
  return (
    <Link href="/">
      <h1 className="hidden text-nowrap text-2xl font-bold lg:flex">
        ProGear Store
      </h1>
    </Link>
  );
};

export default Title;
