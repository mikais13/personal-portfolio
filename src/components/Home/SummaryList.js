import React, { useRef } from 'react';
import { motion } from 'motion/react';

export default function SummaryList({ id, summaries }) {
  const firstSet = useRef(null);
  const secondSet = useRef(null);
  const innerWidth = firstSet.current ? firstSet.current.scrollWidth : 0;

  return (
    <div
      className='summary-list-container'
    >
      <motion.div
        id={id}
        ref={firstSet}
        className='summary-list'
        initial={{ x: 0 }}
        animate={{ x: -innerWidth }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      >
        {
          summaries.map((summary) => {
            return <SummaryCard key={summary.title} experience={summary} />;
          })
        }
      </motion.div>
      <motion.div
        id={id}
        ref={secondSet}
        className='summary-list'
        initial={{ x: 0 }}
        animate={{ x: -innerWidth }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
      >
        {
          summaries.map((summary) => {
            return <SummaryCard key={summary.title} experience={summary} />;
          })
        }
      </motion.div>
    </div>
  );
}

export function SummaryCard({ experience }) {
  return (
    <motion.div
      className='summary-card'
      initial={{ x: 32, y: 16, scale: 0.8 }}
      animate={{ x: 0 }}
      whileInView={{ x: 0, y: 0, scale: 1 }}
    >
      <div className='title'>
        <h2>{experience.title}</h2>
        <h3>{experience.company && experience.company}</h3>
      </div>
      <p>{experience.description}</p>
    </motion.div>
  );
}
