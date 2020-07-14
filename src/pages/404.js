import React from "react"

//import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const NotFoundPage = () => (
  <>
    <Helmet>
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
    </Helmet>
    <SEO title="404: Not found | Family Harvest Church" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... or atleast does,nt anymore</p>
    <p>Family Harvest Church</p>

  </>
)

export default NotFoundPage
