import React from 'react';
import { motion } from 'motion/react';

export default function SummaryList({ id, summaries }) {
  return (
    <motion.div
      id={id}
      className='summary-list'
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {
        summaries.map((summary) => {
          return <SummaryCard key={summary.title} experience={summary} />;
        })
      }
    </motion.div>
  );
}

export function SummaryCard({ experience }) {
  return (
    <motion.div
      className='summary-card'
      initial={{ x: 32 }}
      animate={{ x: 0 }}
    >
      <h2>{experience.title}</h2>
      <h3>{experience.company ? experience.company : ' --- '}</h3>
      <p>{experience.description}</p>
    </motion.div>
  );
}
