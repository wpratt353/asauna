import React from 'react'

import SEO from '../helpers/seo'
import Header from '../components/Header'
import Hero from '../components/Hero'

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <Header />
      <Hero />
      <div
        style={{
          height: '1000px',
          backgroundColor: '#fff',
          position: 'relative',
          zIndex: '1',
        }}
      >
        test
      </div>
    </div>
  )
}

export default IndexPage
