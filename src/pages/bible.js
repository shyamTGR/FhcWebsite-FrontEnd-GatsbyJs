import React from "react"
import { Link } from "gatsby"
import Bible from "../components/bible"
import Contact from "../components/contact"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import { Navbar } from '../components/app'

const BiblePage = () => (
    <div>
        <SEO title="Telugu Bible Fast | Family Harvest Church" />
        <Helmet>
            <meta
                name="description"
                content="Telugu Bible Online Lightning Fast | తెలుగు బైబిల్ ఆన్‌లైన్ మెరుపు వేగంగా | Christian Bible Language: Telugu | Family Harvest Church"
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
            <script data-ad-client="ca-pub-9850595882156546" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

        </Helmet>
        <Navbar />
        <Bible />
        <Contact />
    </div>
)

export default BiblePage
