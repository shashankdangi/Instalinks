// import { FaSearch } from "react-icons/fa";
import AddLink from "./AddLink";
import { CardType } from "../App";

interface Props {
  onSetLink: (item: CardType) => void;
  link: CardType[];
}

const Navbar = ({ onSetLink, link }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-7">
      <h1 className="text-6xl  lg:text-9xl uppercase font-bold">InstaLinks</h1>
      <p className="lg:text-2xl capitalize ">All the useful Instagram Links</p>
      {/*  <div className="mt-5  flex gap-2 w-full justify-center">
        <input
          className="w-full max-w-4xl p-3 pl-5 focus:outline-none rounded-full bg-transparent ring-1 text-lg font-semibold "
          type="text"
          name="search"
          id=""
          placeholder="Search..."
        />
        <button className="btn btn-outline btn-circle text-2xl">
          <FaSearch />
        </button>
      </div> */}
      <AddLink onSetLink={onSetLink} link={link} />
    </div>
  );
};

export default Navbar;
