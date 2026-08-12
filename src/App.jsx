import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Download, Menu, X, Server, Database, Network, Shield, Terminal, GraduationCap, GitFork, FolderGit2 } from 'lucide-react'
import './App.css'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
]

const coreSkills = [
  { name: 'UNIX/Linux/Windows Systems Administration', icon: Terminal },
  { name: 'Virtualization & Docker Containerization', icon: Server },
  { name: 'Self-Hosted Deployment & Coolify (PaaS)', icon: Server },
  { name: 'Database Administration', icon: Database },
  { name: 'Cisco Network Administration', icon: Network },
  { name: 'SAN/NAS Storage Infrastructure', icon: Database },
  { name: 'Continuous Application Deployment', icon: Shield },
  { name: 'AI-Powered Dev Tools & Agents (Claude Code, Hermes)', icon: Terminal },
  { name: 'Open-Source Development & GitHub', icon: Database }
]

const workExperience = [
  {
    company: 'Oracle Canada',
    title: 'Systems Support Specialist',
    years: '2010 – 2026',
    achievements: [
      'Installed, configured, and integrated Oracle engineered systems with Oracle Cloud Infrastructure (OCI).',
      'Implemented OS, SAN, NAS, and backup installation and migration projects.',
      'Performed diagnostics, maintenance, repairs, and upgrades for Oracle systems.',
      'Implemented Oracle RAC cluster deployment supporting the 2010 Vancouver Winter Olympics.',
      'Created technical documentation and training materials for customers and partners.'
    ]
  },
  {
    company: 'Sun Microsystems',
    title: 'Systems Support Engineer — Global Services',
    years: '1999 – 2010',
    achievements: [
      'Provided advanced technical support for enterprise customer environments.',
      'Supported enterprise server and storage infrastructure projects for major customers.',
      'Provided onsite enterprise UNIX support for ICBC from 2003–2008, supporting infrastructure used by mission-critical SAP on Sun environments.',
      'Designed and maintained a national inventory monitoring system used by all field engineers across Canada, providing real-time hardware tracking and reporting.',
      'Delivered technical training, mentoring, and documentation for support teams.'
    ]
  },
  {
    company: 'Navigator-Westel Communications',
    title: 'Senior Systems & Network Administrator',
    years: '1997 – 1999',
    achievements: [
      'Managed Cisco-based multi-site infrastructure supporting over 100 users across 3 remote locations.',
      'Administered 20+ enterprise systems including DNS, mail, Sybase databases, Remedy, and authentication services, on Solaris, Linux, Novell, and Windows server environments.',
      'Developed automation scripts for processing thousands of daily telecom CDR records into structured databases supporting enterprise billing and data warehousing systems.',
      'Managed helpdesk operations and coordinated infrastructure relocation projects.'
    ]
  }
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:opacity-80 transition-opacity">
            <h1 className="text-xl font-bold text-foreground" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Patrick Ho
            </h1>
            <p className="text-sm text-muted-foreground">
              Systems Support Specialist
            </p>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handlePrint}
              className="btn btn-sm btn-secondary ml-2 no-print"
            >
              <Download className="mr-2 h-4 w-4" />
              Print Resume
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground no-print"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t no-print">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={handlePrint}
                className="btn btn-sm btn-secondary w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Print Resume
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <section
      id="about"
      className="hero-section relative min-h-[100dvh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${import.meta.env.BASE_URL}hero-bg.jpg')`
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-white mb-4">Patrick Ho</h1>
          <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
            Systems Support Specialist
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Seasoned IT professional with over 20 years of enterprise experience across Oracle technologies,
            UNIX/Linux systems, and mission-critical infrastructure. Passionate about self-hosted deployments,
            Docker containerization, AI-powered developer tooling, and building open-source projects on GitHub.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white/90">
              <Mail className="h-5 w-5" />
              <a href="mailto:ho_p@yahoo.com" className="hover:underline">ho_p@yahoo.com</a>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <MapPin className="h-5 w-5" />
              <span>Vancouver, BC</span>
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="btn btn-lg btn-primary no-print shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
          >
            <Download className="mr-2 h-5 w-5" />
            Print Resume
          </button>
        </motion.div>
      </div>
    </section>
  )
}

function CareerSummary() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center mb-8 text-foreground">Career Summary</h2>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Experienced IT Infrastructure and Systems Specialist with 20+ years supporting enterprise systems,
              UNIX/Linux/Windows environments, networking infrastructure, Oracle engineered systems, and
              customer-facing technical operations. Deeply interested in modern DevOps and self-hosting —
              deploying containerized applications with Docker and Coolify — and actively exploring AI-powered
              developer tooling and agents such as Claude Code and Hermes. Maintains personal open-source projects
              on <a href="https://github.com/hptcode" className="text-primary underline" target="_blank" rel="noopener noreferrer">GitHub</a>,
              demonstrating continuous learning and hands-on engineering outside the day job.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-foreground">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-snug flex-1">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceItem({ company, title, years, achievements, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 pb-8 border-l-2 border-primary/30 last:pb-0 group hover:border-primary/60 transition-all duration-300"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300" />
      <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{company}</h3>
            <p className="text-lg text-primary font-medium">{title}</p>
          </div>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
            {years}
          </span>
        </div>
        <ul className="space-y-2">
          {achievements.map((achievement, idx) => (
            <li key={idx} className="text-sm text-foreground/80 leading-relaxed flex gap-2">
              <span className="text-primary mt-1.5 flex-shrink-0">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12 text-foreground">Work Experience</h2>
          <div className="max-w-4xl mx-auto">
            {workExperience.map((exp, index) => (
              <ExperienceItem key={exp.company} {...exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center mb-12 text-foreground">Education</h2>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Bachelor of Science in Electrical Engineering
                </h3>
                <p className="text-lg text-primary font-medium mb-2">
                  University of Alberta
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="mb-8 text-foreground">Get in Touch</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or technical challenges.
            Feel free to reach out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <p className="text-foreground font-medium">
                <a href="mailto:ho_p@yahoo.com">ho_p@yahoo.com</a>
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-foreground font-medium">Vancouver, BC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const openSourceProjects = [
  {
    name: 'homeXpensify',
    description:
      'A self-hosted, multitenant home expense tracker built as an open-source project. Demonstrates hands-on skills in web application development, multi-user/multi-tenant data modeling, and Docker containerization for deployment.',
    tags: ['Web Development', 'Multitenant', 'Docker', 'Self-Hosted']
  }
]

function OpenSourceSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-center mb-12 text-foreground">Open Source &amp; Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {openSourceProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <FolderGit2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{project.name}</h3>
                    <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-6">
            <a href="https://github.com/hptcode" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
              <GitFork className="h-5 w-5" /> github.com/hptcode
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-muted/50 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:ho_p@yahoo.com" className="hover:text-foreground transition-colors">
                ho_p@yahoo.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Vancouver, BC</span>
            </div>
            <div className="flex items-center gap-2">
              <GitFork className="h-4 w-4" />
              <a href="https://github.com/hptcode" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                github.com/hptcode
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CareerSummary />
        <SkillsSection />
        <ExperienceSection />
        <OpenSourceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App