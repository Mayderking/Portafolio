import { Link } from "react-scroll";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container flex justify-between max-w-6xl mx-auto md-flex">
        <Link href="/">
          <h1 className=" my-3 text-4xl font-bold text-center md:text-left text-primary">
            Santiago Grisales
            <span className="text-secondary">.</span>
          </h1>
        </Link>
        <div className="flex items-center justify-center gap-7">
          <a
            href="https://github.com/Mayderking"
            className="transition-all duration-300 text-primary hover:text-secondary"
            target="_blank"
          >
            <AiOutlineGithub className="size-10" />
          </a>
          <a
            href="https://instagram.com"
            className="transition-all duration-300 text-primary hover:text-secondary"
            target="_blank"
          >
            <AiOutlineInstagram className="size-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
