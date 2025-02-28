import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { motion, useInView, useAnimate } from 'motion/react';
export default function SummaryCarousel({ summaries }) {
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
  }, [set]);

  return (
    <motion.div
      id={id}
      ref={set}
      className='summary-list'
      initial={{ x: 0 }}
      animate={{ x: -width }}
      transition={{ duration: 17.5, delay: 2.5, ease: [0.36, 0.05, 0.425, 0.85], repeat: Infinity, repeatDelay: 1.25 }}
      layoutId={id}
    >
      {
        summaries.map((summary) => {
          return <SummaryCard key={summary.title} experience={summary} parentRef={set} />;
        })
      }
    </motion.div>
  );
}

export function SummaryCard({ experience, parentRef }) {
  const [loaded, setLoaded] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { initial: true, amount: 0.5 });
  useEffect(() => {
    const exitAnimation = async () => {
      await animate(scope.current, { opacity: [null, 0.2, 1, 1], scale: [null, 0.5, 1, 1], x: [null, -100, -100, 0] }, { times: [0, 0.1, 0.9, 1], duration: 5 });
    }
    if (loaded && !isInView) {
      exitAnimation();
    }
    setLoaded(true);
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <div ref={parentRef} className='outer'>
      <motion.div
        ref={scope}
        className='summary-card'
        initial={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, type: 'tween', ease: 'easeOut' }}
      >
        <div className='title'>
          <h2>{experience.title}</h2>
          <h3>{experience.company && experience.company}</h3>
        </div>
        <p>{experience.description}</p>
      </motion.div>
    </div >
  );
}
