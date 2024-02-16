import { useEffect, useState } from "react";
import "./App.css";
import "boxicons";
import ScrollReveal from "scrollreveal";
import { techStackData, projectsData } from "./data";
import ichanImg from "./assets/images/ichan.png";
import logoImg from "./assets/images/logo.png";

function App() {
  const [expandedCards, setExpandedCards] = useState([]);
  const toggleExpand = (projectId) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.includes(projectId)
        ? prevExpandedCards.filter((id) => id !== projectId)
        : [...prevExpandedCards, projectId]
    );
  };

  useEffect(() => {
    // -----TOGGLE NAV MENU FUNCTION-----
    function toggleNavMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      // add/toggle class ".active" to trigger the ".nav-menu.active" with a "display: block" style
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    // -----CLOSE NAV MENU FUNCTION-----
    function closeNavMenu() {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");

      // remove the ".active" class to revert to the original state of ".nav-menu" with a "display: none" style
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", toggleNavMenu);

    // Close the nav-menu when a nav-link is clicked
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", closeNavMenu);
    });

    return () => {
      hamburger.removeEventListener("click", toggleNavMenu);
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", closeNavMenu);
      });
    };
  }, []);

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: "50px",
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal(".container, footer", {
      origin: "top",
    });
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logoImg} alt="logo" />
          {/* <h1>Ichan</h1> */}
        </div>
        <nav className="nav-bar">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#techStack" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </header>

      <main>
        {/* -----ABOUT SECTION----- */}
        <section className="container" id="about">
          <div className="content">
            <div className="about">
              <h1>
                Hi, I'm <span>Ichan</span>, Aspiring Web Developer
              </h1>
              <p>
                I create sleek and user-friendly websites that blend form and
                function seamlessly. With a passion for coding and a knack for
                problem-solving, I bring a fresh perspective to web development.
              </p>
            </div>
            <div className="image">
              <img src={ichanImg} alt="ichan" />
            </div>
          </div>
        </section>

        {/* -----TECH STACK SECTION----- */}
        <section className="container" id="techStack">
          <h1 className="title">Tech Stack</h1>
          <div className="skills">
            {techStackData.map((tech) => (
              <div className="tech" key={tech.id}>
                <img src={tech.imgSrc} alt={tech.alt} />
                <h5>{tech.title}</h5>
              </div>
            ))}
          </div>
        </section>

        {/* -----PROJECTS SECTION----- */}
        <section className="container" id="projects">
          <h1 className="title">Projects</h1>
          <div className="wrapper">
            {projectsData.map((proj) => (
              <div
                className={`card ${
                  expandedCards.includes(proj.id) ? "expanded" : ""
                }`}
                key={proj.id}
              >
                <img src={proj.img} alt={proj.alt} />
                <h3>{proj.title}</h3>
                <div className="tech-stack">
                  {proj.techStack.map((techImg, index) => (
                    <img key={index} src={techImg} alt={`tech-${index}`} />
                  ))}
                </div>
                <p>
                  {expandedCards.includes(proj.id)
                    ? proj.desc
                    : `${proj.desc.slice(0, 150)}...`}
                  {proj.desc.length > 150 && (
                    <a onClick={() => toggleExpand(proj.id)}>
                      {expandedCards.includes(proj.id)
                        ? "See less"
                        : "See more"}
                    </a>
                  )}
                </p>
                <a
                  className="btn-link"
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {proj.btnTitle}
                  <box-icon
                    name="link-external"
                    color="white"
                    size="16px"
                  ></box-icon>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* -----FOOTER SECTION----- */}
        <footer id="contact">
          <div className="contact-info">
            <h1 className="title">Get in Touch</h1>
            <p>
              Have a question, want to share thoughts, or just fancy a chat?
              Feel free to drop me a message anytime.
            </p>
            <a href="mailto:banquitocj@gmail.com">
              <box-icon name="send" color="white"></box-icon>Send a message
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/ichan04/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                color="white"
                name="facebook"
                type="logo"
                animation="tada-hover"
                size="35px"
              ></box-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-joel-banquito-28178b262/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                color="white"
                name="linkedin"
                type="logo"
                animation="tada-hover"
                size="35px"
              ></box-icon>
            </a>
            <a
              href="https://github.com/Scroll02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <box-icon
                color="white"
                name="github"
                type="logo"
                animation="tada-hover"
                size="35px"
              ></box-icon>
            </a>
          </div>
          <p className="copyright">2023 | Christian Joel Banquito</p>
        </footer>
      </main>
    </>
  );
}

export default App;
