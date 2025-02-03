"use client";
import { useEffect, useState } from "react";
import classNames from "classnames"; // Import classNames utility

const Meteors = ({ number = 20, meteorWidth = 50, ...props }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    // Adjusting calculation to ensure the meteor and its tail fit inside the screen width
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      // Ensure the full width of the meteor (head + tail) is within the screen width
      left: Math.floor(Math.random() * (window.innerWidth - meteorWidth)) + "px", 
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number, meteorWidth]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={classNames(
            "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
          )}
          style={style}
          {...props}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
