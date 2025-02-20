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
          return <SummaryCard key={summary.title} experience={summary} parentRef={set} />;
        })
      }
    </motion.div>
  );
}

export function SummaryCard({ experience, parentRef }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { margin: "0px 0px 0px -50px", initial: true, amount: 0.1 });
  useEffect(() => {
    if (isInView) {
      const enterAnimation = async () => {
        await animate(scope.current, { scale: 1, x: 0 });
      }
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { scale: 0, x: -32 });
      }
      exitAnimation();
    }
    // eslint-disable-next-line
  }, [isInView]);

  return (
    <div ref={parentRef} className='outer'>
      <motion.div
        ref={scope}
        className='summary-card'
        initial={{ x: 32, scale: 0 }}
      >
        <div className='title'>
          <h2>{experience.title}</h2>
          <h3>{experience.company && experience.company}</h3>
        </div>
        <p>{experience.description}</p>
      </motion.div>
    </div>
  );
}
