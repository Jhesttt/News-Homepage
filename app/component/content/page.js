import React from 'react'
import classes from './page.module.css'
import Heading from '../headings/page'
import Latest from '../latest/page'
import Popular from '../popular/page'
import retro from '../../../public/images/image-retro-pcs.jpg'
import laptop from '../../../public/images/image-top-laptops.jpg'
import gaming from '../../../public/images/image-gaming-growth.jpg'

const Content = () => {

  const popular = [{
    rank:"01",
    title:"Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    img: retro
  },{
    rank:"02",
    title:"Top 10 Laptops of 2022",
    desc:"Our best picks for various needs and budgets.",
    img: laptop
  },{
    rank:"03",
    title:"The Growth of Gaming",
    desc:"How the pandemic has sparked fresh opportunities.",
    img: gaming
  }]

  return (
    <div className={classes.contentCont}>
      <section className={classes.headingsCont}>
        <Heading />
        <Latest />
      </section>
      <section className={classes.popular}>
        <Popular rank={popular[0].rank} title={popular[0].title} desc={popular[0].desc} img={popular[0].img} />
        <Popular rank={popular[1].rank} title={popular[1].title} desc={popular[1].desc} img={popular[1].img} />
        <Popular rank={popular[2].rank} title={popular[2].title} desc={popular[2].desc} img={popular[2].img} />
      </section>
    </div>
  )
}

export default Content
