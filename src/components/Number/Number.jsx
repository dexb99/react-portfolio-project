import React from 'react'
import styles from './Number.module.css'
import CountUpBase from 'react-countup'
import ReactVisibilitySensor from 'react-visibility-sensor'
console.log("type of ReactVisibilitySensor", typeof ReactVisibilitySensor, ReactVisibilitySensor);
import { useInView } from 'react-intersection-observer'
const CountUp = CountUpBase.default || CountUpBase;

const VisibilitySensor = ReactVisibilitySensor.default || ReactVisibilitySensor
const StatItem = ({ end, suffix, label }) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

    return (
        <div className={styles.number_items}>
            <h3 ref={ref}>
                {inView ? <CountUp start={0} end={end} duration={5} /> : null}{suffix}
            </h3>
            <p>{label}</p>
        </div>
    );
};

function Number() {
    const stats = [
        { end: 100, suffix: '+', label: 'Projects Delivered' },
        { end: 50,  suffix: '+', label: 'Companies Helped'   },
        { end: 10,  suffix: '+', label: 'Years of Experience' },
        { end: 200, suffix: '+', label: 'Happy Clients'      },
    ];
  return (
    
    <div className={styles.number_con}>
            
            {/* {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
            ))} */}

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
  )
}

export default Number
