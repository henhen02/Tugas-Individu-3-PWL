import { useContext, useState } from "react";
import { Curious } from "../components/Assets";
import { AddButton, MinButton, ResetButton } from "../components/Button";
import Header from "../components/Header";
import { ThemeContext } from "../context/themeContext";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };
  const decrement = () => {
    number > 0 ? setNumber(number - 1) : alert(`Number already ${number}`);
  };
  const resetNumber = () => {
    number === 0 ? alert(`Number already ${number}`) : setNumber(0);
  };
  return (
    <>
      <Header />
      <main className={theme}>
        <div className="container row">
          <div className="container row half item-center">
            <Curious />
            <div className="container column">
              <h1>Apa itu TIM 3?</h1>
              <p>
                Tugas individu minggu 3 atau TIM 3, adalah ajang bagi mahasiswa
                kelas Pemrograman Web Lanjut untuk mengembangkan bakat dan
                keahlianya dalam dunia pemrograman web
              </p>
            </div>
          </div>
          <div className="container row half item-center">
            <Curious />
            <div className="container column">
              <h1>Apa itu TIM 3?</h1>
              <p>
                Tugas individu minggu 3 atau TIM 3, adalah ajang bagi mahasiswa
                kelas Pemrograman Web Lanjut untuk mengembangkan bakat dan
                keahlianya dalam dunia pemrograman web
              </p>
            </div>
          </div>
        </div>
        <div className="container column half-width full-height center item-center item-auto-space">
          <div className="container row half-width item-auto-space">
            <AddButton actions={increment} />
            <MinButton actions={decrement} />
          </div>
          <div className="container columg half-width full-height center item-center">
            <h1>{number}</h1>
          </div>
          <ResetButton actions={resetNumber} />
        </div>
      </main>
    </>
  );
};

export default Beranda;
