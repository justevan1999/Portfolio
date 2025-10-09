import { useState } from "react";
import "./SkillsOrbit.css";

const SkillsOrbit = () => {
  const [hovered, setHovered] = useState(false);

  const subSkills = ["FIGMA", "CSS", "MIRO", "XD", "JS", "SKETCH","FIG-JAM", "ILLUSTRATION", "GIT", "IN-DESIGN", "HTML", "COREL DRAW", "GOOGLE FORM", "PHOTOSHOP"];

  return (
    <div
      className="orbit-container"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="main-circle">MY TECH <br /> SKILSS</div>

      {subSkills.map((skill, index) => (
        <div
          key={index}
          className={`sub-circle ${hovered ? "show" : ""}`}
          style={{
            transform: hovered
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
