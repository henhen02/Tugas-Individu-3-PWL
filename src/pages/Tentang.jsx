import React, { useContext, useEffect, useState } from "react";
import { ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";

const Tentang = () => {
  const { theme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    });
  }, []);
  return (
    <>
      <main className={theme}>
        {showScrollButton && (
          <ScrollTop
            actions={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        )}
      </main>
    </>
  );
};

export default Tentang;
