import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <section className={styles.wrapper}>
        <div className="container">
            <div className={styles.testimonials_con}>
                <h3 className={styles.testimonials_title}>Testimonials</h3>
                <div className={styles.testimonials_list}>
                    <div className={styles.testimonials_items}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <div className={styles.testimonials_customers}>
                            <img src="https://plus.unsplash.com/premium_photo-1723770023600-8083358720aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                            <h4>John Doe</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className={styles.testimonials_items}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <div className={styles.testimonials_customers}>
                            <img src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww" alt="" />
                            <h4>John Doe</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className={styles.testimonials_items}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet in optio architecto expedita amet possimus laudantium. Magni eaque soluta voluptas.</p>
                        <div className={styles.testimonials_customers}>
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V29tYW58ZW58MHx8MHx8fDA%3D" alt="" />
                            <h4>Jane Smith</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default Testimonials
