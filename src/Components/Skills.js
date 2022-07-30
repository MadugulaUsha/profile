import React from "react";
import classes from "./Skills.module.css";

let skillSet = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Bootstrap" },
  { id: 5, name: "ReactJS" },
  { id: 6, name: "JEST" },
  { id: 7, name: "RTL" },
  { id: 8, name: "GIT" }
];
function Skills() {
  return (
    <div className={classes.main_skill}>
      <h3>Skills</h3>
      <div className={classes.skil}>
        {skillSet.map((skill) => {
          return (
            <ul>
              <li key={skill.id}>{skill.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
