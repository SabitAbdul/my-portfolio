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
          <h2>Software Engineer | Network Engineer | Data Scientist | AI/ML Engineer | Full Stack Developer</h2>
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
          I am a passionate and hardworking Software Engineer with a strong background in software engineering, computer science, network engineering, data science, 
          artificial intelligence, machine learning, and full stack development.

          I hold a BSc in Information Science, a BSc in Software Engineering, and an MSc in Computer Science. 
          I am currently pursuing an MSc in Software Engineering with a focus on Artificial Intelligence at the University of St. Thomas.

          My experience includes over six years as a Network Engineer at Haramaya University and over two years as a Medical Device Specialist at Boston Scientific. 
          I enjoy building practical software systems, data-driven applications, 
          AI solutions, and responsive web applications that solve real-world problems.
        </p>
          
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>Programming Languages:
Python, Java, C#, JavaScript, SQL

Frontend Development:
HTML, CSS, JavaScript, React, Vite, Responsive Design

Backend & Full Stack Development:
Java, Spring, C#, REST APIs, Database Integration

Data Science & Analytics:
Data Preparation, Data Analysis, Data Visualization, Python, SQL, MySQL

AI & Machine Learning:
Machine Learning, Deep Learning, Natural Language Processing, Machine Translation, AI Applications

Database Technologies:
SQL, MySQL, Database Design, Query Optimization, Data Management

Networking:
Network Administration, Network Engineering, Infrastructure Support, Troubleshooting, System Support

Tools & Platforms:
Git, GitHub, GitHub Pages, VS Code, Coursera, Codecademy, freeCodeCamp, Udemy.</p>
        <div className="grid skillsGrid">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Python</div>
          <div>C++</div>
          <div>C#</div>
          <div>Java</div>
          <div>Data Analytics and Visualization</div>
          <div>SQL</div>
          <div>AWS</div>
          <div>Azure</div>
          <div>Dock and Kubernet</div>
          <div>Tableau and PowerBI</div>
          <div>ML and AI</div>
          <div>Networking e.g. Cisco</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>VS Code</div>
          <div>Responsive Web Design</div>
        </div>
      </section>

      <section id="education" className="section lightSection">
        <h2>Education</h2>

        <div className="card">
          <h5>MSc in Software Engineering, Artificial Intelligence Focus
University of St. Thomas
September 2025 – September 2027
Currently pursuing advanced studies in software engineering with a focus on artificial intelligence, machine learning, and modern software development.

MSc in Computer Science
Graduated: June 2023
Focused on computer science, data analytics, data preparation, visualization, Python programming, natural language processing, and machine learning-related projects.

BSc in Software Engineering
Graduated: January 2023
Completed software engineering studies with hands-on projects in system design, software development, programming, databases, and application development.

BSc in Information Science
Graduated: July 2010
Built a strong foundation in information systems, technology, data organization, and computing principles.</h5>
          <p>University of St. Thomas, St. Paul, MN</p>
          <p>September 2025 - September 2027</p>
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <div className="card">
          <h3>Software Engineer</h3>
          <p>I have hands-on experience building frontend projects using HTML, CSS, JavaScript, React, Git, and GitHub. 
            Through personal projects, I have practiced creating responsive layouts, organizing code, using components, and deploying websites online.
          </p>
            <p> My experience includes working with VS Code, creating React applications with Vite, managing source code with Git, pushing projects to GitHub, and publishing websites using GitHub Pages.</p>
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
  <p>
    Let’s connect! You can reach me through LinkedIn, GitHub, Facebook,
    Instagram, or email. I am open to networking, collaboration, software
    engineering opportunities, data science projects, AI/ML work, and full stack
    development roles.
  </p>

  <div className="contactLinks">
    <a href="mailto:mthabit.ab@gmail.com">Email</a>

    <a href="https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME" target="_blank">
      LinkedIn
    </a>

    <a href="https://github.com/SabitAbdul" target="_blank">
      GitHub
    </a>

    <a href="https://www.facebook.com/YOUR-FACEBOOK-USERNAME" target="_blank">
      Facebook
    </a>

    <a href="https://www.instagram.com/YOUR-INSTAGRAM-USERNAME" target="_blank">
      Instagram
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