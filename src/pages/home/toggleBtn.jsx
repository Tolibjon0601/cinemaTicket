import { useState } from "react";
import CalendarSwiper from "./date";
import Detail from "./detail";

const ToggleBtn = () => {
  const [selectedBtn, setSelectedBtn] = useState("");

  const handleClick = (btnName) => {
    setSelectedBtn((prevBtn) => (prevBtn === btnName ? "" : btnName));
  };

  return (
    <div className="container text-center pt-10">
      <div className="flex justify-center space-x-4">
        <button
          className={`py-4 px-14 font-bold rounded-xl ${
            selectedBtn === "btn_1"
              ? " text-main_color"
              : "bg-main_bg_color"
          }`}
          onClick={() => handleClick("btn_1")}
        >
          Билеты
        </button>
        <button
          className={`py-4 px-14 font-bold rounded-xl ${
            selectedBtn === "btn_2"
              ? " text-main_color"
              : "bg-main_bg_color"
          }`}
          onClick={() => handleClick("btn_2")}
        >
          О фильме
        </button>
      </div>

      <div className="mt-5">
        {selectedBtn === "btn_1" && <CalendarSwiper />}
        {selectedBtn === "btn_2" && <Detail />}
      </div>
    </div>
  );
};

export default ToggleBtn;
