import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Music",
  "Movie",
  "Telugu Cinema",
  "Trending",
  "C++",
  "JavaScript",
  "Java",
  "Tamil",
  "Kannada"
];

const ButtonList = () => {
  return (
    <div>
      {buttonList.map((btn) => (
        <Button key={btn} value={btn} />
      ))}
    </div>
  );
};

export default ButtonList;
