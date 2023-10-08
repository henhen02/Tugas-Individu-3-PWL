import React from "react";
import { NavLink } from "react-router-dom";
import * as AiIcon from "react-icons/ai";

export const AddButton = ({ actions }) => {
  return (
    <>
      <button className="add" onClick={actions}>
        <AiIcon.AiOutlinePlus size={24} color="#EEE2DE" />
        Tambah
      </button>
    </>
  );
};

export const MinButton = ({ actions }) => {
  return (
    <>
      <button className="delete" onClick={actions}>
        <AiIcon.AiOutlineMinus size={24} color="#EEE2DE" />
        Kurang
      </button>
    </>
  );
};

export const ResetButton = ({ actions }) => {
  return (
    <>
      <button className="reset" onClick={actions}>
        <AiIcon.AiOutlineReload size={24} color="#EEE2DE" />
        Reset
      </button>
    </>
  );
};

export const ScrollTop = ({ actions }) => {
  return (
    <>
      <button className="back-to-top" onClick={actions}>
        <AiIcon.AiOutlineArrowUp size={32} color="#EEE2DE" />
      </button>
    </>
  );
};
