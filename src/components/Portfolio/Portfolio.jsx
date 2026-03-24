import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.portfolio_con}>
      <h3 className={styles.portfolio_title}>Portfolio</h3>
      <div className={styles.portfolio_list}>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
        <div className={styles.portfolio_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </Tilt>
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
