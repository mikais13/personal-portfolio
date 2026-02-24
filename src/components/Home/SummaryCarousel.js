import { SmartTicker } from "react-smart-ticker"

export default function SummaryCarousel({ professional, personal }) {
  return (
    <div className="summary-carousel-container">
      <SmartTicker autoFill direction="left" isText={false} pauseOnHover smart={false} speed={25}>
        {professional.map((s) => (
          <SummaryCard experience={s} key={s.title} />
        ))}
      </SmartTicker>
      <SmartTicker autoFill direction="right" isText={false} pauseOnHover smart={false} speed={20}>
        {personal.map((s) => (
          <SummaryCard experience={s} key={s.title} />
        ))}
      </SmartTicker>
    </div>
  )
}

function SummaryCard({ experience }) {
  return (
    <div className="summary-card">
      <div className="title">
        <h2>{experience.title}</h2>
        {experience.company && <h3>{experience.company}</h3>}
      </div>
      <p>{experience.description}</p>
    </div>
  )
}
