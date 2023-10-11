import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { SendButton } from "../components/Button";
import InputComponent from "../components/Input";

const Kontak = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <main className={theme}>
        <div
          className="container column full-width minimal-gap"
          style={{
            alignSelf: "flex-start",
          }}
        >
          <h1>Kirim pertanyaan kamu dibawah</h1>
          <div className="container column half-width minimal-gap">
            <InputComponent type={"name"} placeholder={"Nama Lengkap"} />
            <InputComponent type={"email"} placeholder={"Email"} />
            <InputComponent type={"message"} />
          </div>
          <div className="container half-width">
            <SendButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default Kontak;
