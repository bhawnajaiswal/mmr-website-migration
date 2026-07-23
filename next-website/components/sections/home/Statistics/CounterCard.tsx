"use client";

import { useEffect, useState, useRef } from "react";

interface CounterCardProps {
  columnId: string;
  widgetId: string;
  start: number;
  end: number;
  suffix: string;
  title: string;
}

export default function CounterCard({
  columnId,
  widgetId,
  start,
  end,
  suffix,
  title
}: CounterCardProps) {
  const [count, setCount] = useState(start);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds animation duration matches Elementor default

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

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [start, end]);

  return (
    <div
      className={`elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-${columnId}`}
      data-id={columnId}
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className={`elementor-widget elementor-widget-counter elementor-element elementor-element-${widgetId}`}
          data-id={widgetId}
          data-element_type="widget"
          data-widget_type="counter.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-counter">
              <div className="elementor-counter-number-wrapper">
                <span className="elementor-counter-number-prefix" />
                <span
                  ref={elementRef}
                  className="elementor-counter-number"
                  data-duration="2000"
                  data-to-value={end}
                  data-from-value={start}
                >
                  {count.toLocaleString()}
                </span>
                <span className="elementor-counter-number-suffix">{suffix}</span>
              </div>
              <div className="elementor-counter-title">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
