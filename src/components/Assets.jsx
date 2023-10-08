import React from "react";
import RafikiCurious from "../assets/curiosity search-rafiki.png";
import SSBeranda from "../assets/beranda.png";
import SSTentang from "../assets/tentang.png";

export const Curious = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/curiosity-search/rafiki#222831FF&hide=&hide=simple"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={RafikiCurious}
          alt="curiosity search-rafiki.png"
        />
      </a>
    </>
  );
};

export const BerandaCapt = () => {
  return (
    <>
      <img
        src={SSBeranda}
        alt="beranda.png"
        style={{
          width: "100%",
        }}
      />
    </>
  );
};

export const TentangCapt = () => {
  return (
    <>
      <img
        src={SSTentang}
        alt="tentang.png"
        style={{
          width: "100%",
        }}
      />
    </>
  );
};
