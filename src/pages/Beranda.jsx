import { Curious } from "../components/Assets";
import { AddButton, MinButton, ResetButton } from "../components/Button";
import Header from "../components/Header";
import { NavigateButton } from "../components/NavigateButton";
import React, { useState } from "react";

const Beranda = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="childern">
            <Curious width={250} />
            <div className="content">
              <h2>Tugas Individu Minggu 3?</h2>
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
        <div
          className="content"
          style={{
            textAlign: "center",
          }}
        >
          <h2>Coba Statefull Component Dibawah!</h2>
          <div
            className="container"
            style={{
              justifySelf: "center",
              alignSelf: "center",
            }}
          >
            <AddButton actions={() => setNumber(number + 1)} />
            <div
              style={{
                minWidth: "150px",
                textAlign: "center",
              }}
            >
              <h1>{number}</h1>
            </div>
            <MinButton
              actions={() =>
                number === 0 ? alert("Number already 0") : setNumber(number - 1)
              }
            />
          </div>
          <ResetButton
            actions={() =>
              number === 0 ? alert("Number already 0") : setNumber(0)
            }
          />
        </div>
      </main>
    </>
  );
};

export default Beranda;
