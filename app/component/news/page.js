import React from 'react'
import classes from './page.module.css'

const News = (props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
    </div>
  )
}

export default News
