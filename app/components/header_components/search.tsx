import { Input } from "@/app/components/ui/input";

import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form className="relative flex w-full items-center">
      <Input placeholder="Buscar" />
      <button type="submit" className="absolute right-3">
        <SearchIcon size={16} />
      </button>
    </form>
  );
};

export default Search;
