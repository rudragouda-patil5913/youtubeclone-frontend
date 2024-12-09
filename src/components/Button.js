import React from "react";

const Button = ({ value }) => {
  return (
    <button className="bg-slate-300 opacity-90 text-md text-slate-800 font-semibold px-4 m-2 rounded-xl">
      {value}
    </button>
  );
};

export default Button;
