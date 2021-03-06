import React from "react"
//import { Link } from "gatsby"
//import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import Live from "../components/live"
import { Navbar } from "../components/app"
import Contact from "../components/contact"
import { Helmet } from "react-helmet"
import "../styles/global.css"

const LivePage = (props) => {
  const users = props.data.allLiveData.edges;
  return (
    /* <div>
         {users.map((user, i) => {
             const userData = user.node;
             return (*/

    <div style={{
      scrollBehavior: "smooth",

    }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sunday Service Live | Family Harvest Church</title>
        <meta
          name="description"
          content="Sunday Service Live | Family Harvest Church | సండే సర్వీస్ లైవ్ | ఫ్యామిలీ హార్వెస్ట్ చర్చి"
        />
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-135051271-5'></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-135051271-5');
        `}
        </script>


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script data-ad-client="ca-pub-9850595882156546" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Helmet>
      <Navbar />
      <Live data={users} />
      <Contact />
    </div>
    /* )
 })}*/
  )

}


export default LivePage;

export const pageQuery = graphql`
query LiveQuery {
allLiveData{
    edges{
      node{
        videoId
        title
      }
    }
  }
  }
`;