import React from "react";
import styles from "./Skills.module.css";
import { FaSquareJs,  FaGitAlt,  FaPhp } from "react-icons/fa6";
import { BiLogoJquery } from "react-icons/bi";

function Skill() {
  return (
    <section className={styles.wrapper}>
    <div className="container">
      <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
          <li>
              <FaSquareJs />
          </li>
          <li>
              <BiLogoJquery />
          </li>
          <li>
              <FaGitAlt />
          </li>
          <li>
              <FaPhp />
          </li>
        </ul>
      </div>
    </div>
    </section>
  );
}

export default Skill;
