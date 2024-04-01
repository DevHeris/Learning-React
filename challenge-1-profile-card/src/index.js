import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import skills from "./skills";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpg" alt="devheris" />;
}
function Intro() {
  return (
    <>
      <h1>DevHeris</h1>
      <p>
        I'm a frontend developer and biochemistry student at Obafemi Awolowo
        University. By day, I'm crafting awesome websites, and by night, I'm
        diving into the fascinating world of biochemistry. Let's connect the
        dots between tech and science!
      </p>
    </>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => {
        return <Skill {...skill} key={skill.skillName} />;
      })}

      {/* <Skill skillName="HTML " emoji="&#128508;" color="red" />
      <Skill skillName="CSS " emoji="&#128509;" color="blue" />
      <Skill skillName="Git & GitHub " emoji="&#128510;" color="grey" />
      <Skill skillName="JavaScript " emoji=" &#128511;" color="yellow" />
      <Skill skillName="React " emoji="&#128507;" color="lightblue" /> */}
    </ul>
  );
}

function Skill({ skillName, color, level }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
      </span>
    </li>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
