import * as React from "react"

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Marlon barrios Solano Portfolio" />
    <header className='header'>
      <div className='header_intro'>
      
    <h1>Hola, my name is Marlon barrios Solano and this is my portfolio.</h1>
    <p>I am a software engineer, creative technologist, researcher and educator with passion for complexity, networked systems, arts, social innovation and community development. I have an interdisciplinary background: digital technology, arts and cognitive science. I was always interested in coding and being very hands on and making, creating platforms and establishing collaborations. I have also always been driven by curiosity and my capacity to see the whole and its parts. I have learned to move fast and efficiently from large scale problems, such as networks to the specificities of software implementation. I have lots of collaborative experience envisioning, engineering, coordinating  and passion for deploying cutting edge international projects intersecting software, culture and people.
</p>
</div>
</header>
<section className='projects'>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>CryptoMondrian</h2>
<p>CryptoMondrian is a desktop App that displays the top 10 cryptocurrencies names and prices in dollars using a CSS grid system inspired by the work of Piet Mondrian. The name and the price are placed in descendent order from the largest to the smaller blocks. The data is fetched using the CoinGecko API. User can click button and refresh data or wait until the data is refreshes every 60 seconds.</p>
</div>
<div className='projects__card__links'>
<a target="_blank" href='https://github.com/marlonbarrios/Project1_app_with-API-cryptomondrian/blob/master/README.md'>
  GitHub

GitHub</a>
<a target="_blank"href='https://crypto-mondrian.netlify.app/?'>
 Live</a>
</div>
  </div>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>Hai-QR</h2>
<p>Haikus and QR codes originated in Japan and share a minimalist computational esthetic. Hai-QR allows you to create, store and visulaize Haikus as functional QR codes. Hai-QR is an exploration of the poetics of technologies of composition and transcoding.</p>
</div>
<div className='projects__card__links' >
<a target="_blank" href='https://github.com/marlonbarrios/project2-hai-QR/blob/main/README.md'>
  GitHub
</a>
<a target="_blank" href='https://haiqr2.herokuapp.com/'>
 Live
</a>
</div>
  </div>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>lovethycrypto</h2>
<p>The cryptocurrency ecosystem is vast, fast growing and can be daunting and disorienting. lovethycrypto is a MERN app that offers the users a stream of the main 250 cryptocurrencies sorted by Market Cap.

</p>
</div>
<div className='projects__card__links'>
<a  target="_blank" href='https://github.com/marlonbarrios/project3lovethycrypto/blob/mondrian/README.md'>
  GitHub
</a>
<a target="_blank" href='https://github.com/marlonbarrios/project3lovethycrypto/blob/mondrian/README.md'>
 Live
</a>
</div>
</div>



</section>

<section className='projects'>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>futures-thinking.io</h2>
<p>

We were inspired by the Futures Thinking discipline, as an approach to creative and exploratory process that uses divergent thinking, seeking many possible answers and acknowledging uncertainty. It's a different mind-set to analytical thinking which uses convergent thinking to seek the right answer and reduce uncertainty. In Futures Thinking, the user is prompted to complete the phrase: "In the future...".</p>
</div>
<div className='projects__card__links'>
<a target="_blank" href='https://github.com/tylerrice121/Futures_Thinking'>
 GitHub
</a>
<a target="_blank"href='https://futuresthinking.herokuapp.com/'>
 Live</a>
</div>
  </div>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>MotionDAO</h2>
<p>MotionDAO is an international collective of an artists/researchers  creating contexts of adoption and creative experimentation using Web3 technologies; investigating its impacts on ownership, governance and value creation within local and global communities of practice; it operates supported and supporting the social networks dance-tech.net and movimiento.org.</p>
</div>
<div className='projects__card__links' >
<a target="_blank" href='https://www.dance-tech.net/page/motion-dao'>
MotionDAO
</a>
<a target="_blank" href='https://app.astrodao.com/dao/motiondao.sputnik-dao.near'>
@Near Astro
</a>
</div>
  </div>
  <div className='projects__card'>
  <div className='projects__card__description'>
<h2>Dance-tech Project</h2>
<p>dance-tech project explores the potential of the new Internet technologies for knowledge production and distribution on body based artistic practices and it's intersections with other disciplines such as new media, architecture, philosophy, anthropology and more.
All dance-tech projects attempt to place situated embodiment as a fundamental condition and movement arts as relevant practices to contemporaneity with interdisciplinary framework.</p>
</div>
<div className='projects__card__links'>
<a  target="_blank" href='https://www.dance-tech.net/page/dance-tech-exploring-digital-networks-as-medium'>
 dance-tech.net
</a>
<a target="_blank" href='https://www.movimiento.org'>
movimiento.org
</a>
</div>
</div>



</section>


   
   
  </Layout>
)

export default IndexPage
