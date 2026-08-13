import './App.css'

const contact = {
  name: 'Patrick Ho',
  title: 'Systems Support Specialist',
  items: [
    <a key="email" href="mailto:ho_p@yahoo.com">ho_p@yahoo.com</a>,
    'Vancouver, BC',
    <a key="github" href="https://github.com/hptcode" target="_blank" rel="noopener noreferrer">github.com/hptcode</a>,
  ],
}

const summary = [
  'A systems specialist with over 20 years keeping enterprise IT running—UNIX, Linux, and Windows environments, networking and storage, and Oracle engineered systems. I have worked across systems integration, infrastructure projects, and mission-critical environments, and I enjoy solving hard problems, writing clear documentation, and helping others get up to speed.',
  'More recently I have focused on modern DevOps and self-hosting, deploying my own containerized apps with Docker and Coolify, experimenting with AI developer tooling like Claude Code, and maintaining open-source projects on GitHub.',
]

const skillGroups = [
  {
    label: 'Systems & Platforms',
    items: [
      'UNIX/Linux Administration',
      'Windows Server',
      'Shell Scripting',
    ],
  },
  {
    label: 'Network & Infrastructure',
    items: [
      'Cisco Multi-site Networks',
      'SAN/NAS Storage',
      'Telecom CDR Processing',
    ],
  },
  {
    label: 'Virtualization & Containers',
    items: [
      'Docker Containerization',
      'Virtualization (VMware, KVM, Oracle VM)',
      'Hypervisor Management',
      'CI/CD Pipelines',
    ],
  },
  {
    label: 'Cloud & Databases',
    items: [
      'Oracle Cloud (OCI)',
      'Oracle RAC Clusters',
      'Oracle Engineered Systems',
      'Database Support (Postgres, Oracle)',
    ],
  },
  {
    label: 'Self-Hosted & Dev Tools',
    items: [
      'Self-Hosted Deployment & Coolify (PaaS)',
      'AI-Powered Dev Tools & Agents (Claude Code, Hermes)',
      'Open-Source Development & GitHub',
    ],
  },
  {
    label: 'Professional Skills',
    items: [
      'Technical Documentation',
      'Training & Mentoring',
      'Customer-Facing Support',
      'Problem Diagnosis & Resolution',
      'Change Management',
    ],
  },
]

const achievements = [
  'Deployed Oracle RAC clusters for the 2010 Vancouver Winter Olympics, delivering database infrastructure that stayed reliable under real-time, high-load conditions during an international event.',
  'Designed a national inventory monitoring system at Sun Microsystems—a real-time hardware tracker used by every field engineer across Canada, cutting response times and improving visibility.',
  'Supported mission-critical SAP infrastructure for ICBC (2003–2008), one of BC’s largest enterprises, on Sun environments.',
  'Automated telecom billing at Navigator-Westel, processing thousands of daily CDR records into structured databases for enterprise billing and data warehousing.',
]

const experience = [
  {
    company: 'Oracle Canada',
    title: 'Systems Support Specialist',
    years: '2010 – 2026',
    points: [
      'Integrated Oracle engineered systems with Oracle Cloud Infrastructure (OCI), standing up seamless hybrid cloud deployments for customers.',
      'Led OS, SAN, NAS, and backup install and migration projects for enterprise customers, keeping downtime minimal and data intact.',
      'Triaged and resolved issues across Oracle systems, sustaining 99.9%+ uptime for mission-critical environments.',
      'Deployed Oracle RAC cluster infrastructure for the 2010 Vancouver Winter Olympics, keeping databases available in real time under heavy load.',
      'Wrote technical documentation and ran training sessions so customers and partners resolved more issues on their own.',
    ],
  },
  {
    company: 'Sun Microsystems',
    title: 'Systems Support Engineer — Global Services',
    years: '1999 – 2010',
    points: [
      'Resolved complex hardware, software, and infrastructure issues for enterprise customers across Western Canada as a second level escalation resource.',
      'Delivered server and storage infrastructure projects for crown corporations, telecommunication companies, retail chains like Best Buy, and many small and mid-sized businesses.',
      'Provided onsite enterprise UNIX support for ICBC (2003–2008), keeping mission-critical SAP applications on Solaris running smoothly.',
      'Designed and maintained a national inventory monitoring system giving every Canadian field engineer real-time hardware tracking and reporting.',
      'Trained and mentored support teams and wrote documentation that raised the team’s overall capability and knowledge.',
    ],
  },
  {
    company: 'Navigator-Westel Communications',
    title: 'Senior Systems & Network Administrator',
    years: '1997 – 1999',
    points: [
      'Managed Cisco multi-site infrastructure for 100+ users across three remote locations, keeping connectivity and services reliable.',
      'Administered 20+ enterprise systems—DNS, mail, Sybase databases, Remedy ITSM, and authentication—across Solaris, Linux, Novell, and Windows.',
      'Automated the processing of thousands of daily telecom CDR records into structured databases for enterprise billing and data warehousing.',
      'Ran helpdesk operations and coordinated infrastructure relocations, keeping services continuous through every transition.',
    ],
  },
]

const openSource = [
  {
    name: 'homeXpensify',
    description:
      'A self-hosted, multitenant home expense tracker built as an open-source project. Demonstrates hands-on skills in web application development, multi-user/multi-tenant data modeling, and Docker containerization for deployment.',
    tags: ['Web Development', 'Multitenant', 'Docker', 'Self-Hosted'],
  },
]

const education = {
  degree: 'Bachelor of Science in Electrical Engineering',
  school: 'University of Alberta',
}

const additional = [
  'Languages: English, Cantonese, Mandarin',
  'Location: Vancouver, British Columbia (open to remote/hybrid opportunities)',
  'References available upon request',
]

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-heading">{title}</h2>
      {children}
    </section>
  )
}

function Header() {
  return (
    <header className="header">
      <h1 className="name">{contact.name}</h1>
      <p className="title">{contact.title}</p>
      <ul className="contact">
        {contact.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </header>
  )
}

function ExperienceItem({ company, title, years, points }) {
  return (
    <article className="job">
      <div className="job-header">
        <div className="job-left">
          <h3 className="job-title">{title}</h3>
          <p className="job-company">{company}</p>
        </div>
        <span className="job-dates">{years}</span>
      </div>
      <ul className="job-details">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </article>
  )
}

function App() {
  return (
    <div className="resume">
      <div className="resume-card">
        <Header />

        <Section title="Career Summary">
          {summary.map((paragraph, i) => (
            <p key={i} className="summary">{paragraph}</p>
          ))}
        </Section>

        <Section title="Core Skills">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <span className="skill-group-label">{group.label}</span>
              <ul className="skills">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Key Achievements">
          <ul className="achievements">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Professional Experience">
          {experience.map((job) => (
            <ExperienceItem key={job.company} {...job} />
          ))}
        </Section>

        <Section title="Open Source &amp; Projects">
          <div className="project">
            <p className="project-name">
              {openSource[0].name}
            </p>
            <p className="project-desc">{openSource[0].description}</p>
            <p className="project-tags">{openSource[0].tags.join(' · ')}</p>
          </div>
        </Section>

        <Section title="Education">
          <div className="edu-degree">{education.degree}</div>
          <div className="edu-school">{education.school}</div>
        </Section>

        <Section title="Additional Information">
          <ul className="section-list">
            {additional.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>

        <footer className="footer">
          <p>&copy; 2026 Patrick Ho</p>
        </footer>
      </div>
    </div>
  )
}

export default App