import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "motion/react"

export default function ExperienceCard({ experience }) {
  var date = ""
  if (experience.endDate != null) {
    date = experience.endDate
    if (date instanceof Date) {
      date = date.toLocaleString("default", {
        month: "short",
        year: "numeric",
      })
    }
    if (experience.startDate != null) {
      if (experience.startDate instanceof Date) {
        date =
          experience.startDate.toLocaleString("default", {
            month: "short",
            year: "numeric",
          }) +
          " - " +
          date
      } else {
        date = `${experience.startDate} - ${experience.endDate}`
      }
    }
  }

  const random = Math.random() > 0.5 ? 1 : -1

  const skillShake = {
    initial: {
      y: 0,
      rotate: 0,
    },
    rest: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.75,
      },
    },
    hover: {
      y: [0, -4, 2, 0],
      rotate: [0, 1.5 * random, -1 * random, 0],
      transition: {
        duration: 0.75,
        type: "tween",
        ease: "easeInOut",
      },
    },
  }

  const backgroundEffects = {
    initial: {
      opacity: 0,
      y: 16,
    },
    rest: {
      opacity: 1,
      y: 0,
      backgroundColor: "var(--black)",
      boxShadow: "0 20px 25px -5px var(--black), 0 8px 10px -6px var(--black)",
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      backgroundColor: "var(--grey)",
      boxShadow: "0 20px 25px -5px var(--shadow), 0 8px 10px -6px var(--shadow)",
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeInOut",
        staggerChildren: 0.075,
      },
    },
  }

  return (
    <motion.div
      animate="rest"
      className="experience-card"
      initial="initial"
      key={experience.title}
      variants={backgroundEffects}
      whileHover="hover"
    >
      <div className="header">
        {experience.link == null
          ? <p className="title">{experience.title}</p>
          : <a className="title" href={experience.link}>
              {experience.title} <FontAwesomeIcon icon={faArrowUp} />
            </a>}
        <div className="date">
          <p>{date}</p>
        </div>
      </div>
      <div className="info">
        <p className="company">{experience.company}</p>
        <p className="location">{experience.location}</p>
        <div className="skills">
          {experience.skills.map((skill) => {
            return (
              <motion.p
                className="skill"
                id={skill}
                key={skill}
                style={{ transformOrigin: "50% 50%" }}
                variants={skillShake}
              >
                {skill}
              </motion.p>
            )
          })}
        </div>
        <ul className="description">
          {typeof experience.description === "string"
            ? <li>{experience.description}</li>
            : experience.description.map((paragraph) => {
                return <li key={paragraph}>{paragraph}</li>
              })}
        </ul>
      </div>
    </motion.div>
  )
}
