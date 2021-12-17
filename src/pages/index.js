import * as React from "react"

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { FaPython, FaReact, FaNode,  FaFileDownload, FaEnvelope, FaGithub} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

import { SiDjango, SiNetlify, SiPostman, SiPostgresql, SiExpress } from "react-icons/si";


import { DiJavascript, DiCss3, DiHtml5, DiMongodb, DiHeroku, DiJqueryLogo, DiFirebase, DiMaterializecss} from "react-icons/di";

const IndexPage = () => (
  <Layout>
    <Seo title="Marlon Barrios Solano Portfolio | Software Engineering | Online Communities | Blockchain | Art +
Technology" />
   <div className='container'>
    <header className='header-t'>
   


      <div className='header_intro'>
        
   
      
  
    <p>I am a software engineer, creative technologist, researcher and educator with passion for complexity, networked systems, arts, social innovation and community development. I have an interdisciplinary background: digital technology, arts and cognitive science. I was always interested in coding and being very hands on and making, creating platforms and establishing collaborations. I have also always been driven by curiosity and my capacity to see the whole and its parts. I have learned to move fast and efficiently from large scale problems, such as networks to the specificities of software implementation. I have lots of collaborative experience envisioning, engineering, coordinating  and passion for deploying cutting edge international projects intersecting software, culture and people.
I am fascinated by the potential of the blockchain for financial inclusion and innovation.</p>

<p><a href="#portfolio"><GrProjects/> Projects</a></p>
<p><a target='_blank' href="https://storage.ning.com/topology/rest/1.0/file/get/9900427266"><FaFileDownload/> Download my resume</a></p>
<p><a href="mailto:marlon@dance-tech.net"><FaEnvelope/> Interested in working together? Contact me</a></p>
</div>

<div className='headshot'>   


<a target="_blank" href='https://storage.ning.com/topology/rest/1.0/file/get/9904991889/'><img width='150px' src='https://storage.ning.com/topology/rest/1.0/file/get/9015983657'/></a>

</div>
<div class="headshot2">
     
    </div>

<h3 >Hola, my name is Marlon Barrios Solano and this is my portfolio:</h3>
</header>
<section id='portfolio' className='projects'>
<div className='projects__card'>
  <div className='projects__card__description'>
  <div className='tech_icons'>
<a target="_blank" alt="Python" href='https://www.python.org/'><FaPython/></a>
<a target="_blank" href='https://www.djangoproject.com/'><SiDjango/></a>
<a target="_blank" href='https://www.heroku.com/'><DiHeroku/></a>
<a target="_blank" href='https://www.postgresql.org/'><SiPostgresql/></a>
<a target="_blank" href='https://en.wikipedia.org/wiki/HTML5'><DiHtml5/></a>
<a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><DiCss3/></a>
<a target="_blank" href='https://www.javascript.com/'><DiJavascript/></a>
<a target="_blank" href='https://materializecss.com/'><DiMaterializecss/></a>


</div>
  <img src='  https://github.com/tylerrice121/Futures_Thinking/raw/master/main_app/static/images/home.png'/>



<h2>futures-thinking.io</h2>
<p>

We were inspired by the Futures Thinking discipline, as an approach to 
creative and exploratory process that uses divergent thinking, seeking 
many possible answers and acknowledging uncertainty. It's a different 
mind-set to analytical thinking which uses convergent thinking to seek 
the right answer and reduce uncertainty. In Futures Thinking, the user 
is prompted to complete the phrase: "In the future...".</p>
</div>
<div className='projects__card__links'>

<a target='_blank' href="https://github.com/marlonbarrios"><FaGithub/></a>

<a target="_blank"href='https://futuresthinking.herokuapp.com/'>
 Live</a>
</div>


  </div>
  <div className='projects__card'>
  <div className='projects__card__description'>
  <div className='tech_icons'>
<a target="_blank" href='https://en.wikipedia.org/wiki/HTML5'><DiHtml5/></a>
<a target="_blank" href='https://en.wikipedia.org/wiki/CSS'><DiCss3/></a>
<a target="_blank" href='https://www.javascript.com/'><DiJavascript/></a>
<a target="_blank" href='https://jquery.com/'><DiJqueryLogo/></a>
<a target="_blank" href='https://www.netlify.com/'><SiNetlify/></a>
</div>
    <img src='https://github.com/marlonbarrios/Project1_app_with-API-cryptomondrian/raw/master/assets/final_look.png'/>
<h2>CryptoMondrian</h2>
<p>CryptoMondrian is a desktop App that displays the top 10 cryptocurrencies names and prices in dollars using a CSS grid system inspired by the work of Piet Mondrian. The name and the price are placed in descendent order from the largest to the smaller blocks. The data is fetched using the CoinGecko API. User can click button and refresh data or wait until the data is refreshes every 60 seconds.</p>
</div>

<div className='projects__card__links'>


<a target="_blank" href='https://github.com/marlonbarrios/Project1_app_with-API-cryptomondrian/blob/master/README.md'>
<FaGithub/>
</a>
<a target="_blank"href='https://crypto-mondrian.netlify.app/?'>
 Live</a>
</div>

  </div>
  
  <div className='projects__card'>
  <div className='projects__card__description'>
  <div className='tech_icons'>
<a target="_blank" href='https://reactjs.org/'><FaReact/></a>
<a target="_blank" href='http://expressjs.com/'><SiExpress/></a>
<a target="_blank" href='https://nodejs.org/en/'><FaNode/></a>
<a target="_blank" href='https://www.postman.com/'><SiPostman/></a>
<a target="_blank" href='https://www.mongodb.com/'><DiMongodb/></a>
<a target="_blank" href='https://firebase.google.com/'><DiFirebase/></a>
<a target="_blank" href='https://www.heroku.com/'><DiHeroku/></a>
<a target="_blank" href='https://www.netlify.com/'><SiNetlify/></a>





</div>

  <img src='https://github.com/marlonbarrios/project3lovethycrypto/raw/mondrian/src/images/home.png'/>


<h2>lovethycrypto</h2>
<p>The cryptocurrency ecosystem is vast, fast growing and can be daunting and disorienting. lovethycrypto is a MERN app that offers the users a stream of the main 250 cryptocurrencies sorted by Market Cap.

After logged in, the user is able to select a set of currencies to a personal list with links to a currency page with more information and external links to global news and Youtube searches about the showcased currency.

All data is updated dynamically; app was deployed using Google Firebase authentication and consumes a third party API.



</p>
</div>

<div className='projects__card__links'>
<a  target="_blank" href='https://github.com/marlonbarrios/project3lovethycrypto/blob/mondrian/README.md'>
<FaGithub/>
</a>
<a target="_blank" href='https://lovethycrypto.netlify.app/'>
 Live
</a>
</div>

</div>

</section>

<section className='projects'>
<div className='projects__card'>
  <div className='projects__card__description'>
  <div className='tech_icons'>
<a target="_blank" href='https://nodejs.org/en/'><FaNode/></a>
<a target="_blank" href='https://www.mongodb.com/'><DiMongodb/></a>
<a target="_blank" href='https://www.postman.com/'><SiPostman/></a>
<a target="_blank" href='https://www.heroku.com/'><DiHeroku/></a>
</div>
  <img src='https://storage.ning.com/topology/rest/1.0/file/get/9890327258'/>

<h2>Hai-QR</h2>
<p>Create, store, edit Haikus and generate QR codes.

The structure of a traditional haiku is always the same, following these basic rules or a basic algorithm:
Punctuation and capitalization are up to the poet. A haiku does not have to rhyme, in fact usually it does not rhyme at all.

Haikus and QR codes originated in Japan and share a minimalist computational esthetic. Hai-QR allows you to create, store and visulaize Haikus as functional QR codes. Hai-QR is an exploration of the poetics of technologies of composition and transcoding.</p>
</div>


<div className='projects__card__links' >
<a target="_blank" href='https://github.com/marlonbarrios/project2-hai-QR/blob/main/README.md'>
<FaGithub/>
</a>
<a target="_blank" href='https://haiqr2.herokuapp.com/'>
 Live
</a>
</div>

  </div>
  
  <div className='projects__card'>
  <div className='projects__card__description'>
  <img src='https://storage.ning.com/topology/rest/1.0/file/get/8688552671'/>

<h2>MotionDAO</h2>
<p>MotionDAO is an international collective of artists/researchers, creating contexts of adoption and creative experimentation using Web3 technologies; investigating its impacts on ownership, governance and value creation within local and global communities of practice; it operates supported and supporting the social networks dance-tech.net and movimiento.org.</p>
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
  <img src='https://storage.ning.com/topology/rest/1.0/file/get/9890324268?profile=original'/>
 
<h2>Dance-tech Project</h2>
<p>dance-tech project explores the potential of the new Internet technologies for knowledge production and distribution on body based artistic practices and it's intersections with other disciplines such as new media, architecture, philosophy, anthropology and more.
All dance-tech projects attempt to place situated embodiment as a fundamental condition and movement arts as relevant practices to contemporaneity with interdisciplinary framework.</p>
</div>
<div className='projects__card__links'>
<a  target="_blank" href='https://storage.ning.com/topology/rest/1.0/file/get/9890324268'>
 dance-tech.net
</a>
<a target="_blank" href='https://www.movimiento.org'>
movimiento.org
</a>
</div>
</div>



</section>


   
</div>
  </Layout>
)

export default IndexPage
