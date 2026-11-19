const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/fiddlly/?__pwa=1"
        className="home__social-icon"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.facebook.com/share/1BhiUo8cAK/"
        className="home__social-icon"
        aria-label="Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-meta"></i>
      </a>
      <a
        href="https://github.com/NBFiidly"
        className="home__social-icon"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;