import React from "react";
import { graphql } from "gatsby"
//import { ChordPage } from "../components/chords"
//import Contact from "../components/contact"
import "../styles/chordAmp.css"
import { Helmet } from "react-helmet";
class chordPostAmp extends React.Component {
    render() {
        const post = this.props.data.chordsData;
        return (
            <>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css2?family=Dhurjati&family=Girassol&family=Sree+Krushnadevaraya&display=swap" rel="stylesheet" />
                </Helmet>
                <div className="head">Family Harvest Church | Lyrics</div>
                <div class="dropdown">
                    <span>Menu</span>
                    <div class="dropdown-content">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/live">Live</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/lyrics">Lyrics</a></li>
                            <li><a href="/chords">Chords</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>


                <section className="amppage">
                    <div className="norm"><a href={"/chords/" + post.slug}>
                        This is an Accelerated Mobile Page (AMP)<br />Click Here to View the Original Page
                    </a></div>
                    <br /><br />
                    <a href="/chords" className="engB" style={{ backgroundColor: "#000", color: "#fff", border: "black" }}>&lt; Back</a>
                    <a href="#Aenglish" className="engB">Click Here for English Version</a>
                    <section id="Atelugu">
                        <h1 className="teluguName">{post.teluguTitle}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.teluguLyrics }} className="teluguLyrics" ></div>
                    </section>
                    <div className="norm" style={{ paddingBottom: "80px" }} ><a href={"/chords/" + post.slug}>
                        This is an Accelerated Mobile Page (AMP)<br />Click Here to View the Original Page
                    </a></div>

                    <a href="#Atelugu" className="telB">Click Here for Telugu Version</a>
                    <section id="Aenglish" >
                        <h1 className="englishName">{post.englishTitle}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.englishLyrics }} className="englishLyrics" ></div>
                    </section>
                    <br /><a href="/chords" className="engB" style={{ backgroundColor: "#000", color: "#fff", border: "black", fontSize: "20px" }}>Contact</a>
                </section>
            </>
        );
    }
}

export default chordPostAmp;

export const query = graphql`
 query ($slug: String!) {  
    chordsData(slug: { eq: $slug } ) {  
        slug
        teluguTitle
        teluguLyrics
        englishTitle
        englishLyrics
        date
        langage
        composer
        singer 
        youtube

   }  
 }  
`