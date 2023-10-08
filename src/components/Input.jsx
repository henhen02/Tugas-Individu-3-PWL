import React from "react";
import * as AiIcon from "react-icons/ai";

export const InputWithIcon = ({ name }) => {
  return (
    <>
      <div className="input-field with-icons">
        <AiIcon.AiOutlineUser size={16} />
        <input type="text" name={name} id={name} />
      </div>
    </>
  );
};

export const InputNoIcon = () => {
  return (
    <>
      <div className="input-field">
        <input type="text" name="nama" id="nama" />
      </div>
    </>
  );
};
