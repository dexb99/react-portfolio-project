import React from 'react'
import styles from './Number.module.css'
import CountUpBase from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { useInView } from 'react-intersection-observer'
const CountUp = CountUpBase.default || CountUpBase;

const VisibilitySensor = ReactVisibilitySensor.default || ReactVisibilitySensor

function Number() {
  return (
    <section className={styles.wrapper}>
        <div className="container">
            <div className={styles.number_con}>

                <div className={styles.number_items}>
                    <VisibilitySensor partialVisibility={true} offset={{bottom:200}}>
                        {({ isVisible }) => (
                            <h3>
                            {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}+
                            </h3>
                        )}
                        </VisibilitySensor>
                    <p>Projects Delivered</p>
                </div>
                <div className={styles.number_items}>
                    <VisibilitySensor partialVisibility={true} offset={{bottom:200}}>
                        {({ isVisible }) => (
                            <h3>
                            {isVisible ? <CountUp start={0} end={50} duration={5} /> : null}+
                            </h3>
                        )}
                        </VisibilitySensor>
                    <p>Companies Helped</p>
                </div>
                <div className={styles.number_items}>
                    <VisibilitySensor partialVisibility={true} offset={{bottom:200}}>
                        {({ isVisible }) => (
                            <h3>
                            {isVisible ? <CountUp start={0} end={10} duration={5} /> : null}+
                            </h3>
                        )}
                        </VisibilitySensor>
                    <p>Years of Experience</p>
                </div>
                <div className={styles.number_items}>
                    <VisibilitySensor partialVisibility={true} offset={{bottom:200}}>
                        {({ isVisible }) => (
                            <h3>
                            {isVisible ? <CountUp start={0} end={200} duration={5} /> : null}+
                            </h3>
                        )}
                    </VisibilitySensor>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Number
