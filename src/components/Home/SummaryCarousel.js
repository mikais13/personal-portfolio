import { SmartTicker } from "react-smart-ticker"

export default function SummaryCarousel({ summaries }) {
  return (
    <div className="summary-carousel-container">
      <SmartTicker autoFill isText={false} pauseOnHover smart={false} speed={70}>
        {summaries.map((summary) => (
          <SummaryCard experience={summary} key={summary.title} />
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
