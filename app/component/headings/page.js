import React from 'react'
import Image from 'next/image'
import classes from './page.module.css'
import headlineImage from '../../../public/images/image-web-3-desktop.jpg'
import MainNews from '../mainNews/page'

const Heading = () => {
  return (
    <div>
        <Image className={classes.headlineImage} src= {headlineImage} alt="Headline Image" priority={true}/>
        <MainNews/>
    </div>
  )
}

export default Heading
