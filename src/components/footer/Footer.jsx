import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image.js'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        © 2023 Sultan. All rights reserved
      </div>
      <div className={styles.socials}>
        <Image src="/1.png"  width={15} className={styles.icon} height={15} alt="fb img"/>
        <Image src="/2.png"  width={15} className={styles.icon} height={15} alt="insta img"/>
        <Image src="/3.png"  width={15} className={styles.icon} height={15} alt="twitter img"/>
        <Image src="/4.png"  width={15} className={styles.icon} height={15} alt="yt img"/>
      </div>
    </div>
  )
}

export default Footer
