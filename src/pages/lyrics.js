import React from "react"
import { Link } from "gatsby"
import Lyrics from "../components/lyrics"
//import Layout from "../components/layout"
import { Navbar } from "../components/app"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Contact from "../components/contact"

const LyricPage = (props) => {
  const users = props.data.allRandomUser.edges;
  return (
    /* <div>
         {users.map((user, i) => {
             const userData = user.node;
             return (*/

    <div >
      <Helmet>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script data-ad-client="ca-pub-9850595882156546" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <Navbar />
      <Lyrics data={users} />
      <Contact />
    </div>
    /* )
 })}*/
  )

}

export default LyricPage

export const pageQuery = graphql`
query RandomUserQuery {
    allRandomUser {
      edges {
        node {
            slug
            teluguTitle
            teluguLyrics
            englishTitle
            englishLyrics
            date
            langage
            composer
            singer: 
            youtube
        }
      }
    }
  }
`;