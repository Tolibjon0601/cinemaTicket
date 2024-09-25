import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-[22px] flex items-center justify-between">
      <div className="ml-20">
        <img src="./image/header_logo.svg" alt="Company Logo" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <img src="./image/header_afisha.svg" alt="Afisha" />
          </li>
          <li>
            <img src="./image/header_seans.svg" alt="Seans" />
          </li>
          <li>
            <img src="./image/header_bilet.svg" alt="Bilet" />
          </li>
          <li>
            <img src="./image/header_search.svg" alt="Search" />
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <select name="lang" className="py-2 px-4 text-lg rounded-xl text-black">
          <option value="">Ру</option>
          <option value="">Uz</option>
        </select>
        <Link to="/login">
          <button className="py-[22px] px-[66px] bg-main_color rounded-xl font-medium text-lg text-white">
            Войти
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
