import React from 'react'

const r6 = require('../assets/imgs/r6.jpg').default
const logo2 = require('../assets/imgs/logo2.svg') as string

 const Home = () => {
   
 

  return (
    <div>Home
<img src={r6} height={200} width={200} alt=""/>
<img src={logo2} height={200} width={200} alt=""/>
    </div>
  )
}

export default Home