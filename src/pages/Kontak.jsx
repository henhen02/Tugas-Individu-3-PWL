import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { InputUserWithIcon, TextArea } from "../components/Input";
import { SendButton } from "../components/Button";

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
            <InputUserWithIcon name={"nama"} placeholder={"Nama Lengkap"} />
            <InputUserWithIcon name={"nama"} placeholder={"Nama Lengkap"} />
            <TextArea />
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
