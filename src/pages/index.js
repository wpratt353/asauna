import React, { useEffect } from 'react'
// import locomotiveScroll from "locomotive-scroll"

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const IndexPage = () => {
  // const scrollRef = React.createRef()

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   })
  // })

  return (
    // <div className="scroll" ref={scrollRef}>
    <div>
      <SEO title="Home" />
      <Header />
      <Hero />
      <Banner />
      {/* <h1 data-scroll data-scroll-speed="3" data-scroll-position="top">
        Hi
      </h1> */}
    </div>
  )
}

export default IndexPage
