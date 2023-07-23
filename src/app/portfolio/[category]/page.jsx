import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button.jsx';
import Image from 'next/image.js';
const Category = ({params}) => {
  console.log(params);
  return ( 
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image 
                className={styles.img}
                fill={true}
                src="https://images.pexels.com/photos/14918400/pexels-photo-14918400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
                alt=''  
              />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image 
                className={styles.img}
                fill={true}
                src="https://images.pexels.com/photos/14918400/pexels-photo-14918400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
                alt=''  
              />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Desc</p>
            <Button text="See More" url="#" />
            </div>
            <div className={styles.imgContainer}>
              <Image 
                className={styles.img}
                fill={true}
                src="https://images.pexels.com/photos/14918400/pexels-photo-14918400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
                alt=''  
              />
          </div>
        </div>
    </div>
  )
}

export default Category
