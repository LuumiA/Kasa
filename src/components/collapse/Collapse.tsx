import React, { ReactNode, useRef, useState } from "react";
import "./Collapse.scss";

interface CollapseProps {
  title: string;
  content: ReactNode; // We use ReactNode here to select any element in React
}

export const Collapse: React.FC<CollapseProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [divHeight, setDivHeight] = useState(5.5);
  const pRef = useRef<HTMLParagraphElement | null>(null);
  // With this function we use setters and states to change the style of <p> when it is active or not (!isActive)
  const toggleCollapse = () => {
    setIsActive(!isActive);
    if (!isActive) {
      setDivHeight(
        ((pRef.current?.offsetHeight || 0) / window.innerHeight) * 100 + 5
      );
    } else {
      setDivHeight(5.5);
    }
  };

  return (
    // We use a 'ternary expression' to applicate style on true response
    <div
      className={`collapse-element ${isActive ? "active" : ""}`}
      style={{ height: `${divHeight}vh` }}
    >
      <h3>
        {/* on <i> click, we call the function toggleCollapse */}
        {title}{" "}
        <i onClick={toggleCollapse} className="fa-solid fa-chevron-up"></i>
      </h3>
      <p ref={pRef}>{content}</p>{" "}
      {/* ref="" we use this attribute to call a ref from the DOM */}
    </div>
  );
};
