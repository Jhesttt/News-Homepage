import React from 'react'
import classes from './page.module.css'
import News from '../news/page'

const Latest = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.title}>New</h1>
        <News title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?"/>
        <News title="The Downsides of AI Artistry " description="What are the possible adverse effects of on-demand AI image generation?"/>
        <News title="Is VC Funding Drying Up?" description="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>
    </div>
  )
}

export default Latest   