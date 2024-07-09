import React from 'react'
import classes from './page.module.css'

const MainNews = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>The Bright Future of Web 3.0?</h1>
        <div className={classes.descContainer}>
            <p className={classes.desc}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className={classes.btn}>Read more</button>
        </div>
    </div>
  )
}

export default MainNews
