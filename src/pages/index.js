import React, { useEffect } from 'react'
import locomotiveScroll from 'locomotive-scroll'

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Featured from '../components/Product/Featured'

const IndexPage = ({ data }) => {
    const scrollRef = React.createRef()
    useEffect(() => {
      const scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      })
    })

    return (
      <>
        <SEO title="Home" />
        <Header />
        <div className="scroll" ref={scrollRef}>
          <Hero />
          <Featured />
        </div>
      </>
    )
}

export default IndexPage
