import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import profileImage from './assets/images/profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const freelancingRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScroll = () => {
    // Update scrolled state for header styling
    setIsScrolled(window.scrollY > 50);
    
    // Update active section based on scroll position
    const scrollPosition = window.scrollY + 100;
    
    const sections = [
      { ref: homeRef, id: 'home' },
      { ref: aboutRef, id: 'about' },
      { ref: skillsRef, id: 'skills' },
      { ref: experienceRef, id: 'experience' },
      { ref: projectsRef, id: 'projects' },
      { ref: freelancingRef, id: 'freelancing' },
      { ref: contactRef, id: 'contact' }
    ];
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
        setActiveSection(section.id);
        break;
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>
              BB
            </a>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
          </button>
          
          <nav className={`nav ${menuOpen ? 'nav-active' : ''}`}>
            <ul className="nav-list">
              <li className={activeSection === 'home' ? 'active' : ''}>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>Home</a>
              </li>
              <li className={activeSection === 'about' ? 'active' : ''}>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>About</a>
              </li>
              <li className={activeSection === 'skills' ? 'active' : ''}>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection(skillsRef); }}>Skills</a>
              </li>
              <li className={activeSection === 'experience' ? 'active' : ''}>
                <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection(experienceRef); }}>Experience</a>
              </li>
              <li className={activeSection === 'projects' ? 'active' : ''}>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection(projectsRef); }}>Projects</a>
              </li>
              <li className={activeSection === 'freelancing' ? 'active' : ''}>
                <a href="#freelancing" onClick={(e) => { e.preventDefault(); scrollToSection(freelancingRef); }}>Services</a>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a>
              </li>
            </ul>
          </nav>
          
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </header>

      <main className="main-content">
        {/* Home Section */}
        <section id="home" ref={homeRef} className="home-section">
          <div className="container">
            <div className="hero">
              <div className="hero-content">
                <h1 className="animate-slide-up">Bhavishya Bhojwani</h1>
                <h2 className="animate-slide-up delay-100">Flutter & Backend Developer</h2>
                <p className="animate-slide-up delay-200">
                  Building innovative mobile and web solutions with modern technologies
                </p>
                <div className="hero-buttons animate-slide-up delay-300">
                  <button className="btn btn-primary" onClick={() => scrollToSection(contactRef)}>Get In Touch</button>
                  <button className="btn btn-secondary" onClick={() => scrollToSection(projectsRef)}>See My Work</button>
                </div>
              </div>
              <div className="hero-image animate-fade-in">
                <img src={profileImage} alt="Bhavishya Bhojwani" className="profile-image" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="about-section section-padding">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm Bhavishya Bhojwani, a passionate Flutter and Backend Developer with expertise in 
                  creating responsive and functional applications. With a strong foundation in mobile and 
                  web development, I bring ideas to life with clean code and intuitive designs.
                </p>
                <p>
                  My journey in software development has equipped me with a diverse skill set, from 
                  creating robust backend APIs to developing engaging user interfaces. I'm constantly 
                  learning and adapting to new technologies to deliver high-quality solutions.
                </p>
                <p>
                  Currently working as a Flutter and IoT Developer at 18M Luxury Pvt Ltd, I focus on 
                  creating seamless user experiences and integrating IoT technologies to build innovative 
                  products.
                </p>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>2+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>5+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="skills-section section-padding">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {[
                {
                  title: "Languages",
                  skills: ["Dart", "HTML/CSS", "JavaScript", "Python"]
                },
                {
                  title: "Databases",
                  skills: ["Firebase", "PostgreSQL", "MySQL"]
                },
                {
                  title: "Frameworks",
                  skills: ["Flutter"]
                },
                {
                  title: "API",
                  skills: ["REST APIs"]
                },
                {
                  title: "Tools & Technologies",
                  skills: ["Git/GitHub", "JIRA", "Postman", "Bitbucket", "Figma"]
                }
              ].map((category, index) => (
                <div key={index} className="skill-category">
                  <h3>{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={experienceRef} className="experience-section section-padding">
          <div className="container">
            <h2 className="section-title">Work Experience</h2>
            <div className="experience-timeline">
              {[
                {
                  title: "Flutter and IoT Developer",
                  company: "18M Luxury Pvt Ltd",
                  location: "Vadodara, Gujarat",
                  period: "October 2024 - Present",
                  responsibilities: [
                    "Followed MVC architecture with GetX for state management",
                    "Developed a Flutter application from scratch with a focus on intuitive UI/UX",
                    "Integrated the application with an ESP32 module for seamless Bluetooth connectivity",
                    "Published a beta version on the Google Play Store for testing and feedback",
                    "Optimized performance and scalability for various devices",
                    "Debugged and enhanced real-time IoT interactions"
                  ]
                },
                {
                  title: "Backend Developer Internship",
                  company: "N10 Technosoft",
                  location: "Ahmedabad, Gujarat",
                  period: "December 2023 - June 2024",
                  responsibilities: [
                    "Developed backend technologies, focusing on API design and implementation",
                    "Created APIs for signup, login, OTP verification, OTP resend, and rating systems",
                    "Managed database structures to ensure efficient data storage and retrieval",
                    "Debugged and maintained admin panels for smooth operations",
                    "Developed responsive UIs using Flutter and Dart"
                  ]
                },
                {
                  title: "IoT Internship",
                  company: "Maharaja Sayajirao University",
                  location: "Vadodara, Gujarat",
                  period: "May 2023",
                  responsibilities: [
                    "Developed and implemented half-duplex & full-duplex IoT communication models",
                    "Utilized protocols for serial communication",
                    "Secured 1st rank for the half-duplex IoT model project"
                  ]
                }
              ].map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                    <span className="period">{exp.period}</span>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="projects-section section-padding">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {[
                {
                  title: "Quiz24",
                  type: "Android Application",
                  description: "An engaging mobile Quiz App with multiple quiz modes and anti-cheating features.",
                  technologies: ["Android", "Figma", "Java", "Google API", "Firebase API"],
                  image: "quiz-app.jpg"
                },
                {
                  title: "ToDoBuddy",
                  type: "Android Application",
                  description: "A task management app built in Flutter, following GetX and MVC architecture. Features include task creation, editing, deleting, priority levels, due dates, live search, task filters, push notifications, and real-time updates.",
                  technologies: ["Flutter", "GetX", "MVC", "Firebase"],
                  image: "todo-app.jpg"
                },
                {
                  title: "Word To Google",
                  type: "VSCode Extension",
                  description: "A VSCode extension to search selected words/phrases directly on Google, utilizing JavaScript and VSCode Package for seamless IDE integration.",
                  technologies: ["JavaScript", "VSCode API"],
                  image: "vscode-extension.jpg"
                }
              ].map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-image">
                    <div className="project-image-placeholder">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <span className="project-type">{project.type}</span>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href="#" className="btn btn-small">Live Demo</a>
                      <a href="#" className="btn btn-small btn-outline">Source Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Freelancing Section */}
        <section id="freelancing" ref={freelancingRef} className="freelancing-section section-padding">
          <div className="container">
            <h2 className="section-title">Freelance Services</h2>
            <div className="services-grid">
              {[
                {
                  title: "Mobile App Development",
                  description: "Custom Flutter applications with responsive designs and seamless functionality.",
                  icon: "📱"
                },
                {
                  title: "Web Development",
                  description: "Responsive websites for local businesses using React.js and modern web technologies.",
                  icon: "💻"},
                  {
                    title: "API Development",
                    description: "Robust backend APIs to power your web and mobile applications.",
                    icon: "🔌"
                  },
                  {
                    title: "IoT Solutions",
                    description: "Custom IoT integrations for smart devices and seamless connectivity.",
                    icon: "🔄"
                  }
                ].map((service, index) => (
                  <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="freelance-cta">
                <h3>Looking for a custom solution?</h3>
                <p>Let's discuss how I can help you achieve your goals.</p>
                <button className="btn btn-primary" onClick={() => scrollToSection(contactRef)}>
                  Get in Touch
                </button>
              </div>
            </div>
          </section>
  
          {/* Contact Section */}
          <section id="contact" ref={contactRef} className="contact-section section-padding">
            <div className="container">
              <h2 className="section-title">Contact Me</h2>
              <div className="contact-content">
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaPhone />
                    </div>
                    <div className="contact-details">
                      <h3>Phone</h3>
                      <a href="tel:+918238858472">+91 8238858472</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-details">
                      <h3>Email</h3>
                      <a href="mailto:bhavishyabhojwani1@gmail.com">bhavishyabhojwani1@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaGithub />
                    </div>
                    <div className="contact-details">
                      <h3>GitHub</h3>
                      <a href="https://github.com/BhavishyaBhojwani" target="_blank" rel="noopener noreferrer">
                        github.com/BhavishyaBhojwani
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon">
                      <FaLinkedin />
                    </div>
                    <div className="contact-details">
                      <h3>LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/bhavishya-bhojwani-956034218/" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/bhavishya-bhojwani
                      </a>
                    </div>
                  </div>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </section>
        </main>
  
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>
                  Bhavishya Bhojwani
                </a>
              </div>
              
              <div className="footer-social">
                <a href="https://github.com/BhavishyaBhojwani" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/bhavishya-bhojwani-956034218/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="mailto:bhavishyabhojwani1@gmail.com">
                  <FaEnvelope />
                </a>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Bhavishya Bhojwani. All rights reserved.</p>
            </div>
          </div>
        </footer>
        
        <button 
          className={`scroll-to-top ${isScrolled ? 'visible' : ''}`} 
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      </div>
    );
  }
  
  // Contact Form Component
  function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    const [formStatus, setFormStatus] = useState({
      submitting: false,
      submitted: false,
      error: false
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormStatus({ submitting: true, submitted: false, error: false });
      
      // Simulate form submission
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    };
    
    return (
      <div className="contact-form-container">
        {formStatus.submitted ? (
          <div className="form-success">
            <h3>Thank you for your message!</h3>
            <p>I'll get back to you as soon as possible.</p>
            <button 
              className="btn btn-secondary"
              onClick={() => setFormStatus({ submitting: false, submitted: false, error: false })}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    );
  }
  
  export default App;