import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <h1>Inioluwa Badairo</h1>
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
      <Skill skillName="HTML &#128508;" color="red" />
      <Skill skillName="CSS &#128509;" color="blue" />
      <Skill skillName="Git & GitHub &#128510;" color="yellow" />
      <Skill skillName="JavaScript &#128511;" color="green" />
      <Skill skillName="React &#128507;" color="purple" />
    </ul>
  );
}

function Skill({ skillName, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {skillName}
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
