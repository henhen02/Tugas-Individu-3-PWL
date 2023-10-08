import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Kontak = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={theme}></main>
    </>
  );
};

export default Kontak;
