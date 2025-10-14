import { useState, useEffect, useRef } from "react";
import "./SkillsOrbit.css";

const SkillsOrbit = () => {
  const [visible, setVisible] = useState(false);
  const orbitRef = useRef(null);

  const subSkills = [
    "FIGMA",
    "CSS",
    "MIRO",
    "XD",
    "JS",
    "SKETCH",
    "FIG-JAM",
    "ILLUSTRATION",
    "GIT",
    "IN-DESIGN",
    "HTML",
    "COREL DRAW",
    "GOOGLE FORM",
    "PHOTOSHOP",
  ];

  // 🔹 Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 } // 40% of section visible triggers animation
    );

    if (orbitRef.current) observer.observe(orbitRef.current);
    return () => {
      if (orbitRef.current) observer.unobserve(orbitRef.current);
    };
  }, []);

  return (
    <div ref={orbitRef} className="orbit-container">
      <div className="main-circle">MY TECH<br />SKILLS</div>

      {subSkills.map((skill, index) => (
        <div
          key={index}
          className={`sub-circle ${visible ? "show" : ""}`}
          style={{
            transform: visible
              ? `rotate(${(360 / subSkills.length) * index}deg) translate(130px) rotate(-${
                  (360 / subSkills.length) * index
                }deg)`
              : "none",
          }}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillsOrbit;
