const Info = () => {
  return (
    <header>
      <img className="info-img" src="images/me123.jpg" />
      <h1> Ankit Verma</h1>
      <h3>Frontend Developer</h3>
      <div className="button-container">
        <button className="info-email-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto: ankitv78389@gmail.com"
          >
            <img className="info-email-image" src="images/Mail.png" />
            Email
          </a>
        </button>
        <button className="info-linkedin-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ankit-verma03/"
          >
            <img className="info-linkedin-image" src="images/linkedin.png" />
            LinkedIn
          </a>
        </button>
      </div>
      <a
        className="info-portfolio-link"
        href="https://ankit-verma-portfolio.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        ankitverma.portfolio
      </a>
    </header>
  );
};

export default Info;
