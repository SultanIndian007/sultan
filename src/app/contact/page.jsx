import React from 'react'
import Image from 'next/image.js'
import styles from './page.module.css'
import Button from '@/components/Button/Button.jsx'
const Contact = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Keep in Touch</h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image 
              src="/contact.png"
              alt=""
              fill = {true}
              className={styles.image}
            />
          </div> 
          <form className={styles.form}>
            <input placeholder="Name" type='text' className={styles.input} />
            <input placeholder="Email" type='text' className={styles.input} />
            <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10"></textarea>
            <Button url="#" text="Send"/>
          </form>
        </div> 
    </div>
  )
}

export default Contact
