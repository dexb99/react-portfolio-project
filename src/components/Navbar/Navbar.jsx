import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isToggled, setIsToggled] = useState(false);

  function handleToggle(){
    console.log("isToggled", isToggled);
    setIsToggled(!isToggled);
  }
  return (
    <nav>
      <div className="container">
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">JD PORT</a>
            <FaBars className={`${styles.bars} ${styles.mobile_display}`} onClick={handleToggle} />
          </div>
          <ul className={`${styles.non_mobile}`}>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={`${styles.non_mobile}`}>
            <a className={`${styles.button} `} href="#">hire me</a>
          </div>
        
          {/* Mobile Menu */}
          {isToggled ? (
            <>
            <ul className={`${styles.mobile_menu} ${styles.mobile_display}`}>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className={`${styles.mobile_display} ${styles.mobile_button}`}>
              <a className={`${styles.button}`} href="#">hire me</a>
            </div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
