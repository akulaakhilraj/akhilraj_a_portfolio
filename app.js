const { useMemo, useState, useEffect } = React;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}


function Navbar() {
  return (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">AR</div>
        <div className="nav-links">
          {["home", "about", "skills", "experience", "projects", "contact"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(id);
                }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}



function Hero() {
 // const FILE_ID = "https://drive.google.com/file/d/1Arv1iC7u7UuOffYp1qR1UVkRgMJGmASW/view?usp=drive_link"; // your drive photo
  //const profileUrl = `https://drive.google.com/uc?export=view&id=${FILE_ID}`;
const FILE_ID = "13kRibuvDJVXFJ1mue34dRFChyHNl7Mqy"; // ONLY the ID

const profileUrl = `https://drive.google.com/uc?export=view&id=${FILE_ID}`;

  const roles = [
    "Full-Stack Software Engineer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 1500); 
    return () => clearInterval(id);
  }, []);

  const currentRole = roles[roleIndex];
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-left">
          <h2 className="hero-pre">Hi, I'm</h2>
          <h1 className="hero-name">Akhil Raj Akula</h1>
          <div className="hero-ml-line">
            <span className="hero-ml">{currentRole}</span>
          </div>
          <p className="hero-desc">
            I build AI-powered analytics tools and scalable full-stack applications using Node.js, React, Python, SQL, and OpenAI APIs.
          </p>
          <div className="btn-row">
            <button
              className="btn hero-btn primary"
              type="button"
              onClick={() => scrollToId("projects")}>
              View My Work
            </button>
            {/* <a
              className="btn hero-btn outline"
              href="https://drive.google./file/d/1WlUdfgJGamDO4U_jHHEyCw2Z5Hreezji/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a> */}
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">3 +</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5 +</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7 +</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-orbit">
            <div className="photo-circle">
              <img
                src={profileUrl}
                alt="Akhil Raj Akula"
                className="photo-img"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = `https://lh3.googleusercontent.com/d/${FILE_ID}`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <div className="line"></div>
    </div>
  );
}

// function About() {
//   return (
//     <section className="section" id="about">
//       <div className="container">
//         <SectionTitle title="Meet Akhil" />
//         <div className="card">
//           <p>
//             I’m Akhil Raj — a data scientist who doesn’t just build models, but
//             builds momentum. I specialize in transforming raw, high-dimensional
//             data into clear, actionable intelligence that drives decisions,
//             reduces risk, and unlocks opportunity.
//           </p>
//           <p>
//             My work lives at the intersection of machine learning and data
//             engineering. From predictive modeling and anomaly detection to
//             scalable pipelines and real-time dashboards, I bring both technical
//             depth and clarity to every project, working end-to-end with Python,
//             SQL, TensorFlow, and cloud platforms.
//           </p>
//         </div>
//       </div>
//     </section>
    
//   );
// }


function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle title="Meet Akhil" />

        <div className="card">
          <p>
            I’m a software engineer and Generative AI enthusiast who builds full-stack, data-driven applications that deliver actionable insights and scalable solutions. 
            I specialize in creating AI-powered tools, analytics platforms, and backend services that transform raw data into real-world results.
        </p>
        <p>
            My work sits at the intersection of full-stack development, cloud engineering, and Generative AI. From building REST APIs and scalable backend pipelines to integrating LLM-powered workflows and AI-driven analytics, I bring both technical depth and practical implementation skills to every project. 
          I work end-to-end using Node.js, React.js, Python, SQL, LangChain, OpenAI API, Docker, and AWS, ensuring solutions are production-ready, maintainable, and optimized for performance.
          </p>
        </div>

        {/* --- Info Cards --- */}
        <div className="info-cards">
          <div className="info-card">
            <h4>Education</h4>
            <p>MS in Data Science & Analytics</p>
            <p>(Focus: AI, Analytics & Software System)</p>
          </div>
          <div className="info-card">
            <h4>Core Strength</h4>
            <p>Full-Stack Engineering, Generative AI (LLMs), Backend & Analytics Systems</p>
          </div>

          <div className="info-card">
            <h4>Career Goal</h4>
            <p>Build scalable full-stack and AI-powered systems that solve real business problems</p>
          </div>

          <div className="info-card">
            <h4>Passion</h4>
            <p>Tech Innovation, AI, Science & Sports</p>
          </div>
        </div>
      </div>
    </section>
  );
}





function Skills() {
  const groups = useMemo(
    () => [
      {
        title: "Programming & Backend",
        items: [
          "JavaScript",
          "Node.js",
          "Express.js",
          "TypeScipt",
          "Python (data processing & AI workflows)",
          "RESTful APIs, Authentication & Authorization (JWT)"
        ],
      },
      {
        title: "Data & Analytics",
        items: [
          "Data Modeling",
        "ETL Pipelines",
        "Data Validation & Aggregation",
        "Pandas", "NumPy",
        "Exploratory Data Analysis (EDA)",
        ],
      },
      {
        title: "Generative AI & LLMs",
        items: ["OpenAI API (GPT)",

"LangChain",

"Retrieval-Augmented Generation (RAG)",

"Prompt Engineering",

"Vector Databases",
"AI API Integration"],
      },
      
      {
        title: "Cloud & DevOps",
        items: ["AWS", "Docker", "CI/CD","Git", "Postman" ],
      },
      {
        title: "Visualization & Tools",
        items: ["Tableau", "Power BI"],
      },
    ],
    []
  );

  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionTitle title="Technical Skills" />
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="card skills-card" key={g.title}>
              <h3 className="skills-title">{g.title}</h3>
              <div className="badges">
                {g.items.map((x) => (
                  <span className="badge" key={x}>
                    {x}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle title="Experience" />
        <div className="card experience-card">
          <div className="experience-left">
            <div className="exp-logo-circle">
              <span className="exp-logo-text">DT</span>
            </div>
          </div>
          <div className="experience-right">
            <h3 className="exp-role">Software Engineer</h3>
            <div className="exp-meta">
              Digient Technology Private Limited, Chennai, India &nbsp;|&nbsp; Jan 2020 – Dec 2023
            </div>
            <p>Worked on building scalable full-stack applications and backend services for data-driven business workflows.</p>
            <ul className="exp-list">
              <li>
                Designed and developed scalable backend services using Node.js and Express, handling REST APIs for authentication, data ingestion, and business logic.
              </li>
              <li>
                Delivered end-to-end full-stack features using React.js and Node.js, improving page load performance by 30–40% through optimized APIs and state management.
                </li>
              <li>
                Implemented JWT-based authentication and role-based access control, securing APIs and reducing unauthorized access issues.
              </li>
              <li>
                
                Integrated MySQL with optimized queries and indexing, improving database response times by 35%.
              </li>
              <li>
                Containerized services using Docker and deployed applications on cloud infrastructure for consistent environments.
              </li>
              <li>Collaborated with product and engineering teams in agile sprints to ship reliable, production-ready features.</li>
              
            </ul>
            <div className="exp-tags">
  <span className="badge">Node.js</span>
  <span className="badge">Express.js</span>
  <span className="badge">React.js</span>
  <span className="badge">Python</span>
  <span className="badge">JavaScript</span>
  <span className="badge">REST APIs</span>
  <span className="badge">JWT Auth</span>
  <span className="badge">SQL</span>
  <span className="badge">Docker</span>
  <span className="badge">AWS</span>
</div>

          </div>
        </div>
         
      </div>
    </section>
  );
}


// function Projects() {
//   const projects = [
//     {
//       title: "ETL and Analytics Pipeline for Retail Data",
//       desc: "Developed an end-to-end ETL and analytics pipeline to process retail sales, customer, and product data, enabling faster reporting, analytics, and business insights. The project focused on data extraction, transformation, quality validation, and automation of pipelines",
//       tags: ["Python", "SQL","Pyspark", "Airflow", "DDT", "ETL","Data Modeling",'Docker',"GitHub Actions","AWS"],
//     },
//     {
//       title: "Real-Time Gaming Event Pipeline",
//       desc: "It focused on streaming ingestion, data transformation, monitoring, and automation of batch and streaming workflows",
//       tags: ["SQL", "Hive", "Tableau", "Python"],
//     },
//     {
//   title: "Enterprise Data Warehouse & SQL ETL System",
//   desc: "Designed bronze–silver–gold warehouse with SQL ETL from CRM/ERP sources; built star schema models and documented pipelines with Git.",
//   tags: ["SQL", "ETL Pipelines", "Data Warehouse","Star Schema", "Git"]
// }, 



//   ];

//   return (
//     <section className="section" id="projects">
//       <div className="container">
//         <SectionTitle title="Projects" />
//         <div className="projects">
//           {projects.map((p) => (
//             <div className="card project-card" key={p.title}>
//               <h3 className="project-title">{p.title}</h3>
//               <p className="sub">{p.desc}</p>
//               <div className="badges">
//                 {p.tags.map((t) => (
//                   <span className="badge" key={t}>
//                     {t}
//                   </span>
                
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Projects() {
  const projects = [
    {
      title: "Generative AI Powered Analytics Assistant",
      desc: "Built a full-stack Generative AI application that enables natural-language querying over structured datasets. Implemented Retrieval-Augmented Generation (RAG) workflows to provide context-aware, accurate responses for business analytics use cases.",
      tags: [
        "Node.js",
        "React.js",
        "Python",
        "LangChain",
        "OpenAI API",
        "RAG",
        "Vector DB",
        "SQL",
        "Docker",
        "AWS"
      ],
    },
    {
      title: "Full-Stack Analytics Platform",
      desc: "Developed a full-stack analytics platform to ingest, process, and visualize structured data from CSV, JSON, and relational sources, enabling self-service reporting and faster decision-making.",
      tags: [
        "Node.js",
        "React.js",
        "Python",
        "PostgreSQL",
        "REST APIs",
        "Data Modeling",
        "ETL Pipelines",
        "Docker"
      ],
    },
    {
      title: "Enterprise Data Warehouse & SQL ETL System",
      desc: "Designed a scalable data warehouse using bronze silver–gold layers and built SQL-based ETL pipelines to transform CRM and ERP data into analytics-ready star schema models.",
      tags: [
        "SQL",
        "ETL Pipelines",
        "Data Warehouse",
        "Star Schema",
        "Data Modeling",
        "Git"
      ],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle title="Projects" />
        <div className="projects">
          {projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <h3 className="project-title">{p.title}</h3>
              <p className="sub">{p.desc}</p>
              <div className="badges">
                {p.tags.map((t) => (
                  <span className="badge" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q2dow3l", 
        "template_ndlxbaf", 
        e.target,
        "nUbifAO69q1ke2_bG" 
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionTitle title="Contact Me" />
        <div className="card">
          <form className="form" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button className="btn primary" type="submit">
              Send Message
            </button>
            {status && (
              <div className="small" style={{ marginTop: 10 }}>
                {status}
              </div>
            )}
          </form>
          <div style={{ marginTop: 16 }} className="small">
            Or email me directly at <b>akulaakhilraj@gmail.com</b>
          </div>
        </div>
      </div>
    </section>
  );
}

// function Footer() {
//   return (
//     <div className="footer">
//       <div className="container small">
//         <span> Boca Raton, FL</span>
//         © {new Date().getFullYear()} Akhil Raj Akula
//       </div>
//     </div>
//   );
// }





function Footer() {
  return (
    <div className="footer">
      <div className="container small">
        <span>Boca Raton, FL • </span>
        {/* <a href="tel:+1XXXXXXXXXX">+1 (XXX) XXX-XXXX</a> •{" "} */}
        <a
          href="https://www.linkedin.com/in/akhil789123a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        © {new Date().getFullYear()} Akhil Raj Akula
      </div>
    </div>
  );
}



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
