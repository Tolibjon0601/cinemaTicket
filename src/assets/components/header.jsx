import { useState } from "react";

const Header = () => {

  const [button,setbutton] = useState(false);

  const changebutton=()=>{
    setbutton(true);
  }
  return (
    <>
      <header className="py-[22px] flex  items-center justify-between">
        <div className="ml-20">
          <img src="./image/header_logo.svg" alt="" />
        </div>
        <div>
          <ul className="flex">
            <li>
              <img src="./image/header_afisha.svg" alt="" />
            </li>
            <li>
              <img src="./image/header_seans.svg" alt="" />
            </li>
            <li>
              <img src="./image/header_bilet.svg" alt="" />
            </li>
            <li>
              <img src="./image/header_search.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className=" gap-20 flex">
          <select name="lang" className="my-2 px-8 text-lg rounded-xl text-black" >
            <option  value="">Ру</option>
            <option  value="">Uz</option>
          </select>

        </div>
      <button onClick={changebutton} className="py-[22px] px-[66px] bg-main_color rounded-xl font-medium text-lg text-white">Войти</button>?

      </header>
    </>
  );
};

export default Header;
