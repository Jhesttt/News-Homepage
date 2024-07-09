import React from 'react'
import classes from './page.module.css'
import Image from 'next/image'


const Popular = (props) => {
  return (
    <div className={classes.container}>
        <Image src={props.img} alt="Retro PC" className={classes.img}/>
        <div className={classes.info}>
            <h4 className={classes.rank}>{props.rank}</h4>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.desc}>{props.desc}</p>
        </div>
    </div>
  )
}

export default Popular
