import React from 'react'
import styles from './page.module.css'
import Image from 'next/image.js'
import Button from '@/components/Button/Button.jsx'

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg" 
            fill = {true} 
            alt=""
            className={styles.img}
            />
            <div className={styles.imgText}>
              <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
              <h2 className={styles.imgDesc}>
                Handcrafting and award winning digital experiences
              </h2>
            </div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.item}>
            <h1 className={styles.title} >Who are We?</h1>
            <p className={styles.desc}>
            Designer Website is a captivating digital platform that 
            showcases the brilliance of modern design. With a sleek 
            and intuitive interface, it serves as an inspiring hub 
            for creative professionals and design enthusiasts alike.
            Immerse yourself in a curated collection of cutting-edge
            artworks, innovative concepts, and groundbreaking projects
            spanning diverse industries. 
            <br />
            <br />
            From mesmerizing graphics to futuristic architecture, the website celebrates the
            fusion of aesthetics and functionality. Engaging
            articles and interviews with renowned designers provide 
            valuable insights, fostering a sense of community among 
            visitors. Whether seeking fresh inspiration or seeking 
            to elevate one's creative prowess, 
            </p>
          </div>
          <div className={styles.item}>
            <h1 className={styles.title}>What we Do?</h1>
            <p className={styles.desc}>
              A designer website featuring a sleek and modern interface,
              showcasing the latest trends in graphic design, web development,
              and multimedia. Discover an inspiring collection of visually 
              stunning projects, learn from informative design articles, and 
              connect with a vibrant creative community.
              <br />
              <br />
              - Sleek and modern interface
              <br />
              <br />
              - Showcasing graphic design, web development, and multimedia projects
              <br />
              <br />
              - Inspiring design articles and a vibrant creative community.
            </p>
            <Button url="/contact" text="Contact"/>
          </div>
        </div>
    </div>
  )
}

export default About
