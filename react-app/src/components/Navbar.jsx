import { VscAccount, VscBook, VscChecklist } from "react-icons/vsc";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed z-40 flex flex-col items-center justify-center w-full h-max bottom-10 text-primary">
      <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-primary/15 backdrop-blur-sm sm:bg-transparent text-gray-200">
        <ul className="hidden sm:flex md:flex gap-5 z-10 cursor-pointer">
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
            <Link to="habilidades">
              <VscAccount className="size-5" />
            </Link>
          </li>
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
            <Link to="Acerca">
              <VscBook className="size-5" />
            </Link>
          </li>
          <li className="px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary">
            <Link to="contact">
              <VscChecklist className="size-5" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
