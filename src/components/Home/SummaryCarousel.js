import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function SummaryListCarousel({ summaries }) {

  return (
    <div className='summary-list-container'>
      <SummarySet id='set-1' summaries={summaries} />
      <SummarySet id='set-2' summaries={summaries} />
    </div>
  );
}

export function SummarySet({ id, summaries }) {
  const set = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (set.current) {
      setWidth(set.current.scrollWidth);
    }
  }, []);

  return (
    <motion.div
      id={id}
      ref={set}
      className='summary-list'
      initial={{ x: 0 }}
      animate={{ x: -width }}
      transition={{ duration: 10, ease: 'linear', repeat: Infinity }}
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
