import React, { useContext, useEffect, useState } from "react";
import * as AiIcon from "react-icons/ai";
import { ThemeContext } from "../context/themeContext";

const InputName = ({ placeholder, textColor }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineUser size={16} />
        <input
          style={{
            color: textColor,
          }}
          type="text"
          name="name"
          id="name"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

const InputEmail = ({ placeholder, textColor }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineMail size={16} />
        <input
          style={{
            color: textColor,
          }}
          type="text"
          name="name"
          id="name"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

const InputMsg = ({ textColor }) => {
  return (
    <>
      <textarea
        style={{
          color: textColor,
        }}
      ></textarea>
    </>
  );
};

const InputComponent = ({ type, placeholder }) => {
  const { theme } = useContext(ThemeContext);
  const [textColor, setTextColor] = useState("#222831");
  useEffect(() => {
    theme === "light" ? setTextColor("#222831") : setTextColor("#EEE2DE");
  }, [theme]);
  return (
    <>
      {type === "name" ? (
        <InputName placeholder={placeholder} textColor={textColor} />
      ) : type === "email" ? (
        <InputEmail placeholder={placeholder} textColor={textColor} />
      ) : type === "message" ? (
        <InputMsg textColor={textColor} />
      ) : (
        "Input type unspecified"
      )}
    </>
  );
};

export default InputComponent;
