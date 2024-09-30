import React, { useState } from "react";

function Searchpage() {

  const [selectedBtn, setSelectedBtn] = useState("");

  const handleClick = (btnName) => {
    setSelectedBtn(btnName);
  };

  return (
    <div className="container text-center pt-10">
      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          className="py-2 px-4 bg-blue-500 text-white font-bold rounded"
          onClick={() => handleClick("btn_1")}
        >
          btn_1
        </button>
        <button
          className="py-2 px-4 bg-green-500 text-white font-bold rounded"
          onClick={() => handleClick("btn_2")}
        >
          btn_2
        </button>
      </div>

      {/* Conditional rendering of content based on button click */}
      <div className="mt-5">
        {selectedBtn === "btn_1" && (
          <p>Button 1 clicked! Here's the content for btn_1.</p>
        )}
        {selectedBtn === "btn_2" && (
          <p>Button 2 clicked! Here's the content for btn_2.</p>
        )}
      </div>
    </div>
  );
}

export default Searchpage;
