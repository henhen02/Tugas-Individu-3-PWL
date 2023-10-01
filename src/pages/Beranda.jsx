import { Curious } from "../components/Assets";
import Header from "../components/Header";
import { NavigateButton } from "../components/NavigateButton";

const Beranda = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="childern">
            <Curious width={250} />
            <div className="content">
              <h2>Tugas Individu 3?</h2>
              <p>
                Ditugas individu ke-3 ini, kita diajak untuk membuat aplikasi
                web kita sendiri menggunakan{" "}
                <a href="https://www.javascript.com/">Javascript</a> dengan
                bantuan library <a href="https://react.dev/">React JS</a>.
              </p>
            </div>
          </div>
          <div className="childern">
            <div className="content">
              <h2>Spesifikasi Tugas Individu 3</h2>
              <p>
                Intip spesifikasi dari tugas Pemrograman Web Lanjut kali ini
                yuk!
              </p>
              <NavigateButton text={"Tentang Tugas 3"} target={"about"} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
