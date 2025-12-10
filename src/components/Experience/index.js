import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ExperienceList from "../ExperienceList"
import "../experienceList.scss"
import { motion } from "motion/react"
import PagePill from "../Navigation/PagePill"
import PageSection from "../PageSection"

const roles = [
  {
    title: "Full-Stack Developer",
    categories: ["Web Development"],
    company: "Web Development and Consulting Club",
    location: "Auckland, New Zealand",
    startDate: new Date(2025, 3),
    endDate: "Present",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Payload CMS",
      "Tanstack Query",
      "Vitest",
      "Storybook",
      "Yamada UI",
      "Unit Testing",
      "Integration Testing",
      "Documentation",
    ],
    description: [
      "Enhancing the Auckland University Badminton Club's web app for >1,000 active users utilising a Next.js frontend in Typescript, using Yamada UI styling, and a backend implemented with Payload CMS, and MongoDB.",
      "Building full-stack unit and integration tests using Vitest, and documenting UI components using Storybook.",
      "Collaborating in an Agile environment with 10 team members using GitHub workflows, and CI/CD principles.",
    ],
  },
  {
    title: "Research and Development Intern",
    categories: ["Internship", "Professional", "Research"],
    company: "PGG Wrightson",
    location: "Te Puke, New Zealand",
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    skills: ["Python", "OpenCV", "NumPy", "Research and Development", "Data Analysis", "Excel"],
    description: [
      "Developed an industry-first computer vision program using OpenCV and Python as a proof-of-concept to find kiwifruit size using RGB-D imaging technology.",
      "Conducted a research project, including a literature review, scientific report and presentation.",
      "Performed data analysis on all parts of the project using Excel.",
      "As a part of my project, I also aided in experimental trials for products, such as kiwifruit biostimulants, and spent time in the retail store and with technical representatives.",
    ],
  },
]

const projects = [
  {
    title: "Portfolio Website",
    link: "https://github.com/mikais13/personal-portfolio",
    categories: ["Web Development", "Personal"],
    startDate: new Date(2024, 10),
    endDate: new Date(2025, 1),
    skills: ["React", "JavaScript", "Sass", "React Router", "Motion", "Cloudflare", "HTML", "CSS"],
    description: [
      "Developed this portfolio website to showcase more about myself, my skills, and experiences.",
      "Designed and developed a responsive website using React with React Router, and Sass, along with Motion.",
      "Deployed using Cloudflare Pages with a custom domain.",
    ],
  },
  {
    title: "Premier League Match Predictor",
    link: "https://www.github.com/mikais13/epl-match-predictor",
    categories: ["AI/ML", "Personal"],
    endDate: new Date(2025, 2),
    skills: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "BeautifulSoup",
      "Machine Learning",
      "Web Scraping",
      "Data Analysis",
    ],
    description: [
      "Implemented a Random Forest Machine Learning model through Scikit-learn in Python, to predict the outcome of Premier League matches, improving accuracy to 64%.",
      "Performed web scraping using BeautifulSoup to gather data, captured in Pandas, about Premier League matches.",
    ],
  },
  {
    title: "Web Memories",
    link: "https://github.com/ExceptionHandlersUOA/NostalgiaClient",
    categories: ["Web Development", "Hackathon"],
    endDate: new Date(2025, 7, 3),
    skills: [
      "Typescript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Tanstack Query",
      "shadcn",
      "Motion",
    ],
    description: [
      "Developed in 36 hours for the 2025 WDCC x SESA Hackathon with a group of six developers, and won the 'Most Overengineered' award.",
      "Created a web app to archive and view social media and custom memories, using Next.js with Typescript, and Tailwind CSS.",
    ],
  },
  {
    title: "Partly UI",
    link: "https://github.com/jeffplays2005/partly-hackathon-team-3",
    categories: ["Hackathon", "Web Development"],
    endDate: new Date(2025, 6, 27),
    skills: ["Next.js", "React", "Typescript", "Yamada UI", "Motion"],
    description: [
      "Developed in 8 hours for the 2025 Partly x WDCC Hackathon within a group of four developers, and won the 'Most Production Ready' award.",
      "Created an intuitive UI to visualise the world tree data, using Next.js with Typescript, and Yamada UI, by designing a user-friendly horizontal tree table view and an interactive visualisation from a model of a car.",
      "Implemented production APIs from Partly to get world tree data.",
    ],
  },
  {
    title: "Sequence",
    link: "https://github.com/mikais13/Sequence",
    categories: ["Desktop App", "Academic"],
    endDate: new Date(2024, 9),
    skills: ["Python", "Tkinter"],
    description: [
      "Developed a GUI desktop application for a Connect-4 style game according to the COMPSCI 130 assignment specifications.",
      "Implemented a GUI using Tkinter, and a game engine using Python.",
    ],
  },
  {
    title: "Club Management System",
    link: "https://github.com/mikais13/Club-Management-Dashboard",
    categories: ["Academic", "Web Development"],
    endDate: 2023,
    skills: ["PHP", "SQL", "JavaScript", "HTML", "CSS", "Bootstrap"],
    description: [
      "Built a full-stack web application to manage school clubs, including a database, login system, and CRUD operations.",
      "My project for one of my Year 13 Digital Technology assessments.",
    ],
  },
  {
    title: "Gem Runner",
    link: "https://github.com/mikais13/Gem-Runner",
    categories: ["Desktop App", "Academic"],
    endDate: 2023,
    skills: ["Java", "JavaFX"],
    description: [
      "Developed a desktop game where players navigate through obstacles while collecting gems.",
      "My project for one of my NCEA Level 3 Digital Technology assessments that I did in Year 12.",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
      initial={{ opacity: 0, y: 16 }}
      layoutId="page"
    >
      <PageSection title="Experience">
        <a className="resume-link" href="/Mikai_Somerville_Resume.pdf">
          View Full Resume <FontAwesomeIcon icon={faArrowUp} />
        </a>
        <ExperienceList experiences={roles} id="roles" />
      </PageSection>
      <PageSection title="Projects">
        <ExperienceList experiences={projects} id="projects" />
      </PageSection>
      <PagePill left="about" middle="home" right="home" />
    </motion.div>
  )
}
