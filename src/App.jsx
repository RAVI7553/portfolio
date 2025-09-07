import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import raviImage from "./image/raviImage.webp";
import ravi2 from "./image/ravi2.jpeg";
import "bootstrap-icons/font/bootstrap-icons.css";
import portfolio from "./image/portfolio.png";
import social from "./image/social.png";
const App = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="container big-container">
        <div className="left">
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
          </nav>
          <div className="role">SOFTWARE DEVELOPER</div>
          <h1>
            Hello, My Name is <b>Ravi Chandra Yadav</b>
          </h1>
          <p>
            Computer Science graduate (<b>B.Tech, 2025</b>) with strong skills
            in <b>React</b> ,<b> HTML</b> , <b> CSS</b> , and <b>JavaScript</b>.
            I enjoy building responsive, user-friendly web applications and
            continuously improving my problem-solving abilities. Passionate
            about frontend development, I aim to grow as a{" "}
            <b>React developer</b> and contribute to impactful projects. Outside
            of tech, I enjoy playing cricket, which keeps me focused and
            motivated.
          </p>
          <div className="buttons">
            <button
              className="btn-primary"
              onClick={() => handleButtonClick("https://github.com/RAVI7553")}
            >
              <i className="bi bi-github" style={{ marginRight: "8px" }}></i>
              GitHub
            </button>
            <button
              className="btn-outline"
              onClick={() =>
                handleButtonClick(
                  "https://www.linkedin.com/in/ravi-chandra-yadav/"
                )
              }
            >
              <i className="bi bi-linkedin" style={{ marginRight: "8px" }}></i>
              LinkedIn
            </button>
            <button
              className="btn-outline"
              onClick={() =>
                handleButtonClick(
                  "https://www.instagram.com/the_ravi_chandra_yadav?igsh=dHR4bmZtNms4eXR3"
                )
              }
            >
              <i className="bi bi-instagram"> </i>
              Instagram
            </button>
          </div>
        </div>
        <div className="right">
          <img src={raviImage} alt="Ravi Photo" />
        </div>
      </div>
      <section className="about-section " id="about">
        <div className="about-container">
          <div className="about-text-content">
            <h2>About me</h2>
            <p>
              Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis
              tortor neque auctor dis ipsum. Pretium cras amet odio amet
              eleifend id sed cras sed. Aliquet risus posuere aliquet imperdiet
              sit.
            </p>
            <a
              href="#resume"
              className="resume-button"
              onClick={() =>
                handleButtonClick(
                  "https://drive.google.com/file/d/1DzUxmYjG13QjWHb71TcfYXqvri-BfsTN/view?usp=sharing"
                )
              }
            >
              Resume
            </a>
          </div>

          <div className="about-image-frame">
            <img src={ravi2} alt="Portrait of a woman wearing a hat" />
          </div>
        </div>
      </section>
      <section id="skills" className="skill-section">
        <div className="skill-container">
          <div className="skill-text-content">
            <h2>Skills</h2>
            <p>
              Here are some of my core technical skills that I use to build
              responsive and modern web applications.
            </p>
          </div>

          <div className="skill-cards">
            <div className="skill-card">
              <h3>Frontend</h3>
              <p>React, HTML, CSS, JavaScript, Bootstrap</p>
            </div>

            <div className="skill-card">
              <h3>Backend</h3>
              <p>Node.js, Express, MongoDB</p>
            </div>

            <div className="skill-card">
              <h3>Tools</h3>
              <p>Git, GitHub, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="projects-container">
          <h2>Projects</h2>
          <p className="projects-intro">
            Here are some of the projects I’ve worked on, showcasing my skills
            in frontend and backend development.
          </p>

          <div className="project-cards">
            <div className="project-card">
              <img src={portfolio} alt="Project 1" />
              <div className="project-content">
                <h3>Portfolio Website</h3>
                <p>
                  A personal portfolio built with React, showcasing my skills
                  and projects.
                </p>
                <a
                  href="https://github.com/RAVI7553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <img src={social} alt="Project 2" />
              <div className="project-content">
                <h3>Social-Media App</h3>
                <p>
                  A React based on people can post their views and others can
                  like and comment on it.
                </p>
                <a
                  href="https://github.com/RAVI7553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
