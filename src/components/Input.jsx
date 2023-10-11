import React from "react";
import * as AiIcon from "react-icons/ai";

export const InputUserWithIcon = ({ name, placeholder }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineUser size={16} />
        <input type="text" name={name} id={name} placeholder={placeholder} />
      </div>
    </>
  );
};

export const InputUserNoIcon = () => {
  return (
    <>
      <div className="input-field">
        <input type="text" name="nama" id="nama" />
      </div>
    </>
  );
};

export const TextArea = () => {
  return <textarea></textarea>;
};
