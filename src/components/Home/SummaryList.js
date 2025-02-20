import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function SummaryList({ id, summaries }) {
  const [hovering, setHovering] = useState(false);
  const carouselRef = useRef(null);
  // const [baseVelocity, setBaseVelocity] = useState(-10);
  // const baseX = useMotionValue(0);
  // const { scrollX } = useScroll({
  //   container: carouselRef,
  //   axis: 'x',
  // });
  // const scrollVelocity = useVelocity(scrollX);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400
  // });
  // const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
  //   clamp: false
  // });
  // const x = useTransform(baseX, (v) => `${wrap(0, -100, v)}%`);
  // // const x = useTransform(baseX, (value) => {
  // //   if (baseX.get() >= 1 || baseX.get() <= -101) {
  // //     setBaseVelocity(-1 * baseVelocity);
  // //   }
  // //   return `${value}%`;
  // // })
  // useAnimationFrame((time, delta) => {
  //   if (hovering) {
  //     baseX.set(baseX.get() + scrollVelocity.get());
  //   } else {
  //     let moveBy = baseVelocity * (delta / 1000);
  //     moveBy += moveBy * velocityFactor.get();
  //     baseX.set(baseX.get() + moveBy);
  //   }
  // });
  const innerWidth = carouselRef.current ? carouselRef.current.scrollWidth : 0;

  return (
    <div
      className='summary-list-container'
    >
      <motion.div
        id={id}
        ref={carouselRef}
        className='summary-list'
        // initial={{ opacity: 0, y: 16 }}
        // animate={{ opacity: 1, y: 0 }}
        // style={{ x }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
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
        ref={carouselRef}
        className='summary-list'
        // initial={{ opacity: 0, y: 16 }}
        // animate={{ opacity: 1, y: 0 }}
        // style={{ x }}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
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
