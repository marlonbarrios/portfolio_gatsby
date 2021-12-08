
import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaGithub, FaLinkedin, FaEnvelope, FaTwitterSquare, FaFileDownload } from "react-icons/fa";
import { BiArrowToTop } from "react-icons/bi";
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     
      <div style={{
        display: "flex",
        flexDirection: "column",
        minHeight: '100vh'
      }}>
       
      
        <main  style={{flexGrow: 1,}}>{children}</main>
       
        <footer className='footer'>
       
        
<div className='footer__socials'>
<a target='_blank' href="#top"> <BiArrowToTop/></a>
<a target='_blank' href="https://github.com/marlonbarrios"><FaGithub/></a>
<a target='_blank' href="https://www.linkedin.com/in/marlon-barrios-solano-98599b205/"><FaLinkedin/></a>
<a target='_blank' href="https://www.facebook.com/marlonbarriossolano"><FaFacebookSquare/></a>
<a target='_blank' href="https://twitter.com/MarlonBarriosS2"><FaTwitterSquare/></a>
<a target='_blank' href="https://storage.ning.com/topology/rest/1.0/file/get/9893404676"><FaFileDownload/></a>
<a href="mailto:marlon@dance-tech.net"><FaEnvelope/></a>

</div>

<div className='footer__attributions'>

  

          © {new Date().getFullYear()}, Built by Marlon Barrios Solano  with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> and  <a href="https://reactjs.org/">REACTJS</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
