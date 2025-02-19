import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, useSpring, useVelocity } from 'motion/react';
import { wrap } from 'popmotion';

export default function SummaryList({ id, summaries }) {
  const [hovering, setHovering] = useState(false);
  // const baseX = useMotionValue(0);
  const carouselRef = useRef(null);
  // const { scrollX } = useScroll({
  //   container: carouselRef,
  //   axis: 'x',
  // });
  // const x = useTransform(scrollX, (value) => value + baseX.get());
  // useAnimationFrame(() => {
  //   if (!hovering) {
  //     baseX.set(baseX.get() + 0.5);
  //   }
  // });
  const baseVelocity = 15;
  const baseX = useMotionValue(0);
  const { scrollX } = useScroll({
    container: carouselRef,
    axis: 'x',
  });
  const scrollVelocity = useVelocity(scrollX);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);

  useAnimationFrame((time, delta) => {
    if (hovering) {
      baseX.set(baseX.get() + 0.5);
    } else {
      let moveBy = baseVelocity * (delta / 1000);
      moveBy += moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <div
      className='summary-list-container'
      onHover={() => setHovering(true)} onHoverEnd={() => setHovering(false)}
    >
      <motion.div
        id={id}
        ref={carouselRef}
        className='summary-list'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ x }}
      >
        {
          summaries.map((summary) => {
            return <SummaryCard key={summary.title} experience={summary} />;
          })
        }
        {
          summaries.map((summary) => {
            return <SummaryCard key={summary.title} experience={summary} />;
          })
        }
        {
          summaries.map((summary) => {
            return <SummaryCard key={summary.title} experience={summary} />;
          })
        }
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
      initial={{ x: 32 }}
      animate={{ x: 0 }}
    >
      <div className='title'>
        <h2>{experience.title}</h2>
        <h3>{experience.company && experience.company}</h3>
      </div>
      <p>{experience.description}</p>
    </motion.div>
  );
}
