import styles from "@/app/Home.module.css";
import { useEffect, useState, useRef } from "react";

interface CounterCardProps {
  start: number;
  end: number;
  suffix: string;
  title: string;
  index: number;
  animate: boolean;
}

export default function CounterCard({
  start,
  end,
  suffix,
  title,
  index,
  animate
}: CounterCardProps) {
  const [count, setCount] = useState(start);
  const countStartedRef = useRef(false);

  useEffect(() => {
    if (!animate || countStartedRef.current) return;
    countStartedRef.current = true;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation duration

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [animate, start, end]);

  return (
    <div
      className={`${styles.statsCard} ${animate ? styles.statsCardVisible : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={styles.statsNumberWrapper}>
        <span className={styles.statsNumber}>
          {count.toLocaleString()}
        </span>
        <span className={styles.statsSuffix}>{suffix}</span>
      </div>
      <h4 className={styles.statsCardTitle}>{title}</h4>
    </div>
  );
}
