import './App.css'

const contact = {
  name: 'Patrick Ho',
  title: 'Systems Support Specialist',
  items: [
    <a key="email" href="mailto:ho_p@yahoo.com">ho_p@yahoo.com</a>,
    '778-828-8810',
    'Vancouver, BC',
    <a key="github" href="https://github.com/hptcode" target="_blank" rel="noopener noreferrer">github.com/hptcode</a>,
  ],
}

const summary = [
  'IT Infrastructure and Systems Specialist with 20+ years supporting enterprise systems, UNIX/Linux/Windows environments, networking infrastructure, Oracle engineered systems, and customer-facing technical operations. Work has covered systems integration, troubleshooting, cloud infrastructure integration, and enterprise deployments, along with mission-critical environments, infrastructure projects, and technical training and documentation.',
  'Interested in modern DevOps and self-hosting, with experience deploying containerized applications using Docker and Coolify and exploring AI-powered developer tooling and agents such as Claude Code and Hermes Agent. Also maintains personal open-source projects on GitHub.',
]

const skillGroups = [
  {
    label: 'Systems & Platforms',
    items: [
      'UNIX/Linux Administration',
      'Windows Server',
      'Solaris',
      'Shell Scripting',
    ],
  },
  {
    label: 'Network & Infrastructure',
    items: [
      'Cisco Multi-site Networks',
      'SAN/NAS Storage',
      'DNS & Mail Services',
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
      'Database Support (Sybase, Oracle)',
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
  'Oracle RAC Cluster Deployment for the 2010 Vancouver Winter Olympics — delivered critical database infrastructure supporting real-time operations during a high-profile international event.',
  'National Inventory Monitoring System (Sun Microsystems) — designed and maintained a real-time hardware tracking system used by all field engineers across Canada, improving visibility and response times.',
  'Enterprise Onsite Support for ICBC (2003–2008) — supported mission-critical SAP infrastructure on Sun environments for one of BC’s largest enterprises.',
  'Telecom Billing Automation (Navigator-Westel) — developed scripts processing thousands of daily CDR records into structured databases for enterprise billing and data warehousing.',
]

const experience = [
  {
    company: 'Oracle Canada',
    title: 'Systems Support Specialist',
    years: '2010 – 2026',
    points: [
      'Installed, configured, and integrated Oracle engineered systems with Oracle Cloud Infrastructure (OCI), enabling seamless hybrid cloud deployments.',
      'Implemented OS, SAN, NAS, and backup installation and migration projects for enterprise customers, minimizing downtime and ensuring data integrity.',
      'Performed diagnostics, maintenance, repairs, and upgrades for Oracle systems, maintaining 99.9%+ uptime for mission-critical environments.',
      'Deployed Oracle RAC cluster infrastructure supporting the 2010 Vancouver Winter Olympics, delivering real-time database availability under high-load conditions.',
      'Created comprehensive technical documentation and training materials for customers and partners, improving self-service resolution rates.',
    ],
  },
  {
    company: 'Sun Microsystems',
    title: 'Systems Support Engineer — Global Services',
    years: '1999 – 2010',
    points: [
      'Provided advanced technical support for enterprise customer environments across Canada, resolving complex hardware, software, and infrastructure issues.',
      'Supported enterprise server and storage infrastructure projects for major customers, including provincial crown corporations and financial institutions.',
      'Delivered onsite enterprise UNIX support for ICBC (2003–2008), maintaining infrastructure for mission-critical SAP applications on Sun Solaris environments.',
      'Designed and maintained a national inventory monitoring system providing real-time hardware tracking and reporting for all Canadian field engineers.',
      'Delivered technical training, mentoring, and documentation for support teams, elevating team capability and knowledge retention.',
    ],
  },
  {
    company: 'Navigator-Westel Communications',
    title: 'Senior Systems & Network Administrator',
    years: '1997 – 1999',
    points: [
      'Managed Cisco-based multi-site infrastructure supporting 100+ users across 3 remote locations, ensuring reliable connectivity and services.',
      'Administered 20+ enterprise systems including DNS, mail servers, Sybase databases, Remedy ITSM, and authentication services on Solaris, Linux, Novell, and Windows platforms.',
      'Developed automation scripts for processing thousands of daily telecom CDR (Call Detail Record) entries into structured databases, supporting enterprise billing and data warehousing operations.',
      'Managed helpdesk operations and coordinated infrastructure relocation projects, maintaining service continuity throughout transitions.',
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