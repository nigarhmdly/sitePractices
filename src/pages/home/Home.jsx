import React from 'react'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Products from '../../components/products/Products'
import MoreAbout from '../../components/moreAbout/MoreAbout'
import Team from '../../components/team/Team'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
<Products/>
      <MoreAbout/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home