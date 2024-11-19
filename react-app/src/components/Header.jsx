import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="container justify-between max-w-6xl mx-auto md-flex">
        <Link href="/">
          <h1 className=" my-3 text-4xl font-bold text-center md:text-left text-primary">
            Santiago Grisales
            <span className="text-secondary">.</span>
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
