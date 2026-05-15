import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          Mohammed
        </a>

        <nav className="navLinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="section hero">
        <div className="heroContent">
          <p className="smallTitle">Welcome to my portfolio</p>
          <h1>Hello, I am Mohammed Ahmed</h1>
          <h2>Frontend Developer</h2>
          <p>
            I build responsive and modern websites using HTML, CSS, JavaScript,
            and React.
          </p>

          <div className="heroButtons">
            <a href="#projects" className="btn primaryBtn">
              View Projects
            </a>
            <a href="#contact" className="btn secondaryBtn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section lightSection">
        <h2>About Me</h2>
        <p>
          I am learning web development and building real projects to improve my
          skills. My goal is to become confident in building professional
          websites and applications with clean code and responsive design.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid skillsGrid">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>VS Code</div>
          <div>Responsive Design</div>
        </div>
      </section>

      <section id="education" className="section lightSection">
        <h2>Education</h2>

        <div className="card">
          <h3>Your Degree or Program</h3>
          <p>Your School or University Name</p>
          <p>Year - Year</p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Frontend Developer / Student Developer</h3>
          <p>
            Built practice projects using HTML, CSS, JavaScript, React, Git, and
            GitHub.
          </p>
        </div>
      </section>

      <section id="projects" className="section lightSection">
        <h2>Projects</h2>

        <div className="grid projectsGrid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio built with React and deployed using GitHub
              Pages.
            </p>
            <a href="#contact">View Project</a>
          </div>

          <div className="card">
            <h3>Landing Page</h3>
            <p>
              A responsive landing page built using HTML, CSS, and JavaScript.
            </p>
            <a href="#contact">View Project</a>
          </div>

          <div className="card">
            <h3>React Practice App</h3>
            <p>
              A simple React app created to practice components and styling.
            </p>
            <a href="#contact">View Project</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <h2>Contact</h2>
        <p>You can contact me by email or visit my GitHub profile.</p>

        <div className="contactLinks">
          <a href="mailto:mthabit.ab@gmail.com">Email Me</a>
          <a href="https://github.com/YOUR-GITHUB-USERNAME" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Mohammed Ahmed. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;