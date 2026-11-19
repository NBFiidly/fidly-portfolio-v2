import { useEffect } from "react";
import RataLogo from "../../assets/rata-in-logo.jpeg";
import RataBanner from "../../assets/rata-in-banner.jpg";
import ScrollUp from "../scrollup/ScrollUp";
import "./case-study.css";

const RataInCaseStudy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    document.title = "Studi Kasus Rata.in | Portofolio Fidly";
    document.documentElement.lang = "id";

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
    };
  }, []);

  return (
    <div className="case-study" id="top">
      <header className="case-study__header">
        <a className="case-study__brand" href="/#home">
          Fidly
        </a>
        <nav className="case-study__nav" aria-label="Navigasi studi kasus">
          <a href="/#portfolio">Proyek</a>
          <a href="/#contact">Kontak</a>
        </nav>
      </header>

      <main>
        <div className="case-study__container">
          <div className="case-study__eyebrow">
            <span>Studi Kasus</span>
            <span>01 / 01</span>
          </div>

          <div className="case-study__title-row">
            <div>
              <h1>Rata.in</h1>
              <p className="case-study__lead">
                Mengubah desain Figma menjadi tampilan Rata.in yang nyaman
                digunakan di berbagai perangkat.
              </p>
            </div>
            <img className="case-study__logo" src={RataLogo} alt="Logo Rata.in" />
          </div>

          <dl className="case-study__details">
            <div>
              <dt>Peran saya</dt>
              <dd>Pengembang frontend</dd>
            </div>
            <div>
              <dt>Kontribusi</dt>
              <dd>Menerapkan desain Figma dengan React</dd>
            </div>
            <div>
              <dt>Teknologi</dt>
              <dd>React, Vite, Tailwind CSS</dd>
            </div>
            <div>
              <dt>Tahap</dt>
              <dd>Sedang dikembangkan</dd>
            </div>
          </dl>

          <figure className="case-study__cover">
            <img
              src={RataBanner}
              alt="Tampilan Rata.in pada ponsel, laptop, dan komputer desktop"
            />
            <figcaption>
              Tampilan Rata.in pada ponsel dan komputer desktop.
            </figcaption>
          </figure>

          <section className="case-study__overview">
            <div>
              <p className="case-study__eyebrow">Tentang Rata.in</p>
              <h2>
                Melaporkan jalan rusak jadi lebih mudah, progresnya pun bisa
                dipantau.
              </h2>
            </div>
            <div className="case-study__copy">
              <p>
                Rata.in membantu warga melaporkan jalan rusak dan mengikuti
                perkembangan penanganannya. Alur pelaporannya mencakup unggah
                foto, memilih lokasi, melihat hasil analisis, lalu memantau
                status laporan. Saat ini, layanan Rata.in berfokus di Batam.
              </p>
              <p>
                Sebagai pengembang frontend, tugas saya menerjemahkan rancangan
                Figma ke dalam tampilan web menggunakan React, Vite, dan
                Tailwind CSS. Saya memastikan hasil implementasinya tetap dekat
                dengan desain sekaligus nyaman digunakan.
              </p>
              <p>
                Saya juga menyesuaikan tata letak dan elemen antarmuka agar
                tampil konsisten di berbagai ukuran layar, dari ponsel hingga
                desktop. Fokus saya adalah menghadirkan rancangan visual ke
                dalam produk web yang terasa rapi dan mudah dipahami.
              </p>
            </div>
          </section>

          <section className="case-study__approach">
            <p className="case-study__eyebrow">Peran saya di frontend</p>
            <h2>Dari rancangan Figma hingga tampilan web yang siap digunakan.</h2>
            <div className="case-study__steps">
              <article>
                <span>01</span>
                <h3>Mewujudkan desain</h3>
                <p>
                  Saya menyusun rancangan Figma menjadi komponen React yang
                  rapi dan bisa digunakan kembali.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Menyesuaikan di berbagai layar</h3>
                <p>
                  Saya memastikan halaman tetap nyaman dilihat, baik di ponsel
                  maupun komputer.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Merangkai alur pelaporan</h3>
                <p>
                  Saya mengerjakan tampilan untuk unggah foto, memilih lokasi,
                  melihat hasil analisis, dan memantau status laporan.
                </p>
              </article>
            </div>
          </section>

          <section className="case-study__workflow">
            <p className="case-study__eyebrow">Alur pelaporan</p>
            <h2>Laporkan kondisi jalan, lalu pantau tindak lanjutnya.</h2>
            <ol className="case-study__workflow-list">
              <li>
                <span>01</span>
                <i className="case-study__workflow-icon bx bx-camera" aria-hidden="true"></i>
                <strong>Unggah foto</strong>
              </li>
              <li>
                <span>02</span>
                <i className="case-study__workflow-icon bx bx-map-pin" aria-hidden="true"></i>
                <strong>Pilih lokasi</strong>
              </li>
              <li>
                <span>03</span>
                <i className="case-study__workflow-icon bx bx-search-alt-2" aria-hidden="true"></i>
                <strong>Lihat hasil analisis</strong>
              </li>
              <li>
                <span>04</span>
                <i className="case-study__workflow-icon bx bx-list-check" aria-hidden="true"></i>
                <strong>Pantau perkembangan</strong>
              </li>
            </ol>
          </section>

          <section className="case-study__footer">
            <p className="case-study__eyebrow">Lihat lebih lanjut</p>
            <h2>Rata.in masih terus dikembangkan.</h2>
            <div className="case-study__action-list">
              <a
                className="case-study__repo"
                href="https://github.com/NBFiidly/rata-in-web"
                target="_blank"
                rel="noreferrer"
              >
                Kunjungi repositori
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a
                className="case-study__repo"
                href="https://www.figma.com/proto/OP61VP8XYKbbtxvhTlUyux/Kotanesia?node-id=497-1533&t=oX6xQNnd8XQsm8jH-0&scaling=min-zoom&content-scaling=fixed&page-id=117%3A305&starting-point-node-id=1009%3A982"
                target="_blank"
                rel="noreferrer"
              >
                Kunjungi prototype desktop
                <i className="bx bx-right-arrow-alt"></i>
              </a>
              <a
                className="case-study__repo"
                href="https://www.figma.com/proto/OP61VP8XYKbbtxvhTlUyux/Kotanesia?node-id=1079-2214&t=oX6xQNnd8XQsm8jH-0&scaling=min-zoom&content-scaling=fixed&page-id=247%3A201"
                target="_blank"
                rel="noreferrer"
              >
                Kunjungi prototype mobile
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
            <a className="case-study__back" href="/#portfolio">
              <i className="bx bx-left-arrow-alt"></i>
              Kembali ke portofolio
            </a>
          </section>

          <section className="case-study__collab">
            <div className="case-study__collab-content">
              <p className="case-study__eyebrow">Kolaborasi berikutnya</p>
              <h2>Mari berkarya bersama.</h2>
              <p className="case-study__collab-copy">
                Punya ide atau ingin membicarakan proyek? Saya senang mendengar
                ceritanya.
              </p>
              <div className="case-study__collab-links">
                <a href="mailto:nbfidly@gmail.com">
                  <i className="bx bx-envelope" aria-hidden="true"></i>
                  <span>nbfidly@gmail.com</span>
                  <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                </a>
                <a
                  href="https://github.com/NBFiidly"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-github" aria-hidden="true"></i>
                  <span>GitHub</span>
                  <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                </a>
                <a
                  href="https://www.instagram.com/fiiddlly/?__pwa=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram" aria-hidden="true"></i>
                  <span>Instagram</span>
                  <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="case-study__collab-art" aria-hidden="true">
              <div className="case-study__collab-node">
                <i className="bx bx-pencil"></i>
                <span>Desain</span>
              </div>
              <i className="bx bx-right-arrow-alt case-study__collab-arrow"></i>
              <div className="case-study__collab-node case-study__collab-node--accent">
                <i className="bx bx-code-alt"></i>
                <span>Frontend</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <ScrollUp href="#top" />
    </div>
  );
};

export default RataInCaseStudy;
