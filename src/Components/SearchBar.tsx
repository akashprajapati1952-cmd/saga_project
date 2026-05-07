import { FC } from "react";
import { BsSearch } from "react-icons/bs";
interface Porps{
  query: string;
  handleChange: (even: React.ChangeEvent<HTMLInputElement>)=> void
}

const SearchBar: FC<Porps> = ({query, handleChange})=> {
  return (
    <div className="relative">
      <input value={query} onChange={handleChange} className="px-2 py-1 w-full rounded-full border border-black" type="text" placeholder="Search" />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
