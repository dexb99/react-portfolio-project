import React from 'react'
import styles from './Contact.module.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
        <div className={styles.contact_con}>
            <div className={styles.contact_info}>
                <h3>Get in touch</h3>
                <p className={styles.contact_describ}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga eius eligendi in laboriosam delectus ipsum inventore alias dolorem ducimus aliquid.</p>
                <p className={styles.contact_address}>123 Main Street <br /> Bangkok, Thailand</p>
                
                <div className={styles.contact_detail}>
                    <p><FaPhone/> <span>+66 123 456 789</span></p>
                    <p><FaEnvelope/> <span>contact@example.com</span></p>
                </div>
            </div>
            <div className={styles.contact_form}>
                <form action="">
                     <div className={styles.input_group}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" name="first_name" type="text" placeholder='eg. John' />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="last_name" type="text" placeholder='eg. Smith' />
                        </div>
                     </div>
                    <div>
                        <label htmlFor="email address">Email address</label>
                        <input type="email" placeholder='eg. john.smith@example.com' />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Type here'></textarea>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
