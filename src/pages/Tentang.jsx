import React, { useContext, useEffect, useState } from "react";
import { DirectButton, ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";
import {
  LayoutOFBeranda,
  LayoutOFTK,
  PPGithubHendri,
} from "../components/Assets";
import {
  AssetsCode,
  FooterCode,
  HeaderCode,
  NavBarCode,
} from "../components/CodeRenderer";

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
        <h1>Spesifikasi Tugas Individu Minggu 3</h1>
        <div className="container column minimal-gap">
          <div className="container column half-width minimal-gap">
            <h3 id="komponenhalaman">Komponen Halaman</h3>
            <p>
              Komponen adalah serangkaian kecil yang disusun sedemikian rupa
              menggunakan <i>style</i> menjadi <i>layout</i> yang lebih rapih
              dan nyaman untuk dilihat oleh pengguna. Pada tugas kali ini,
              terdapat 3 halaman yang memiliki susunan <i>layout</i> berbeda.
              Hal ini didasarkan pada kebutuhan akan konten halaman yang akan
              dimuat, sehingga setiap halaman memiliki jumlah komponen
              tersendiri.
            </p>
            <section>
              <h4>Halaman Beranda</h4>
              <p>
                Halaman beranda tersusun dari 4 komponen. Untuk <i>layout</i>{" "}
                pada halaman beranda dapat dilihat pada gambar berikut.
              </p>
              <div>
                <LayoutOFBeranda />
              </div>
            </section>
            <section>
              <h4>Halaman Tentang & Kontak</h4>
              <p>
                Halaman tentang dan kontak menggunakan lebih sedikit komponen
                jika dibandingkan dengan halaman beranda. Pasalnya pada kedua
                halaman ini konten yang dimuat hanya berfokus pada isi dari
                halaman, sehingga komponen header tidak akan ikut ditampilkan.
              </p>
              <div>
                <LayoutOFTK />
              </div>
            </section>
          </div>
          <div className="container column half-width minimal-gap">
            <h3 id="komponenhalaman">Source Code</h3>
            <section>
              <h4>Komponen NavBar</h4>
              <p>
                Komponen navbar adalah komponen yang berada paling atas pada
                halaman. Komponen ini terus ditampilkan untuk membantu pengguna
                dalam melakukan navigasi antar halaman.
              </p>
              <div className="syntax-container">
                <NavBarCode />
              </div>
            </section>
            <section>
              <h4>Komponen Header</h4>
              <p>
                Komponen Header hanya dipanggil pada halaman beranda dan
                terletak di bawah komponen Navbar.
              </p>
              <div className="syntax-container">
                <HeaderCode />
              </div>
            </section>
            <section>
              <h4>Komponen Footer</h4>
              <p>
                Sama dengan komponen NavBar, komponen footer akan selalu
                dipanggil disetiap halaman, namun komponen footer akan terletak
                pada posisi paling bawah setelah main
              </p>
              <div className="syntax-container">
                <FooterCode />
              </div>
            </section>
            <section>
              <h4>Komponen Assets</h4>
              <p>
                Komponen assets digunakan untuk menyimpan daftar assets dalam
                halaman berupa gambar. Komponen ini akan dipanggil dengan
                menyesuaikan kebutuhan terhadap konten pada halaman.
              </p>
              <div className="syntax-container">
                <AssetsCode />
              </div>
            </section>
            <section>
              <p>
                Beberapa komponen diatas hanya sebagian dari komponen yang
                dijelaskan dalam halaman ini. Untuk lebih lengkapnya, kamu dapat
                mengunjungi repositori berikut<sup>{`[2]`}</sup>.
              </p>
              <div
                className="container row minimal-gap item-center"
                style={{
                  marginTop: 10,
                }}
              >
                <PPGithubHendri />
                <div className="container column item-center">
                  <div className="container column">
                    <h3>henhen02</h3>
                    <h4>Tugas-Individu-3-PWL</h4>
                  </div>
                  <div className="container column">
                    <DirectButton
                      text={"Kunjungi Repositori"}
                      to_page={
                        "https://github.com/henhen02/Tugas-Individu-3-PWL"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tentang;
