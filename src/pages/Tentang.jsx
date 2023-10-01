import React, { useEffect, useState } from "react";
import {
  AssetsCode,
  FooterCode,
  HeaderCode,
  NavBarCode,
} from "../components/CodeRenderer";
import { BerandaCapt, TentangCapt } from "../components/Assets";
import { ScrollTop } from "../components/Button";

const Tentang = () => {
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
      <main>
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
        <h1>Tentang Spesifikasi Tugas Individu 3</h1>
        <div className="content">
          <div className="content" id="komponen">
            <h2>Komponen Aplikasi</h2>
            <p>
              Terdapat beberapa komponen yang dibuat dalam tugas kali ini,
              yaitu:
            </p>
            <div className="content about">
              <h3>Assets</h3>
              <p>
                Assets digunakan sebagai modul untuk menampung sumber dari
                gambar yang ditampilkan dalam aplikasi ini
              </p>
              <div className="highlighter">
                <AssetsCode />
              </div>
            </div>
            <div className="content about">
              <h3>NavBar</h3>
              <p>
                NavBar merupakan komponen yang spesial karena komponen ini akan
                terus dipanggil dan diletakkan diatas halaman aplikasi untuk
                membantu pengguna dalam melakukan perpindahan halaman
              </p>
              <div className="highlighter">
                <NavBarCode />
              </div>
            </div>
            <div className="content about">
              <h3>Header</h3>
              <p>
                Komponen ini hanya dipanggil pada halaman beranda dan terletak
                setelah dibawah komponen navbar
              </p>
              <div className="highlighter">
                <HeaderCode />
              </div>
            </div>
            <div className="content about">
              <h3>Footer</h3>
              <p>
                Sama seperti komponen NavBar, Footer tergolong spesial dan akan
                selalu tampil disetiap halaman. Namun Footer hanya bersifat
                sebagai dekorasi pada halaman dan terletak pada bagian bawah
                halaman aplikasi
              </p>
              <div className="highlighter">
                <FooterCode />
              </div>
            </div>
          </div>
          <div className="content" id="halaman">
            <h2>Halaman</h2>
            <p>
              Selain komponen, juga terdapat beberapa halaman yang dibangun
              dalam aplikasi ini
            </p>
            <div className="content about">
              <h3>Beranda</h3>
              <p>
                Halaman Beranda adalah halaman yang akan pertama kali
                ditampilkan ketika pengguna menjalankan aplikasi ini
              </p>
              <div className="highlighter">
                <BerandaCapt />
              </div>
            </div>
            <div className="content about">
              <h3>Tentang</h3>
              <p>
                Halaman Tentang adalah halaman yang saat ini sedang kamu lihat :
                ){" "}
              </p>
              <div className="highlighter">
                <TentangCapt />
              </div>
            </div>
          </div>
          <div className="content" id="librarydanasset">
            <h2>Library & Asset</h2>
            <p>Beberapa libary dan asset yang digunakan dalam tugas ini</p>
            <div className="content about"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tentang;
