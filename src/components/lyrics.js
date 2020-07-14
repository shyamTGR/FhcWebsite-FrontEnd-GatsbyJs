import React from 'react';
import '../../static/lyric.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import $ from 'jquery'
import ClipLoader from "react-spinners/ClipLoader";
import { Helmet } from "react-helmet";
//import Ad from './ad.js'
//import Link from 'gatsby-link'
//slugblog = {}
import { StaticQuery, graphql } from "gatsby"

export class Lyrics extends React.Component {
    constructor(props) {
        super();
        this.state = {
            lyricData: [],
            orderedData: {},
            alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
            isLoading: false,
            data: props.data
        };
    }

    get = () => {
        /* var data = {}, st = [];
         const axios = require('axios')
 
          axios.get('https://backend.familyharvestchurch.ml/api/lyric/?format=json').then((response) => {
              data = response.data;
  
              for (var i = 0; i < data.count; i++) {
                  st[i] = {
                      author: data.results[i].author,
                      telugu_name: data.results[i].telugu_name,
                      english_name: data.results[i].english_name,
                      slug: data.results[i].slug,
                      telugu_lyrics: data.results[i].telugu_lyrics,
                      english_lyrics: data.results[i].english_lyrics,
                      created: data.results[i].created_date,
                      editing: data.results[i].editing
                  }
                  //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }
  
              }
              this.setState({ lyricData: st })
              console.log(this.state.lyricData[0].english_name[0] === 'N')
          }).then(() => {
              this.setState({ isLoading: false })
          })*/
    }

    orderTitles() {
        // var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    }

    scroll() {

    }

    componentDidMount() {
        //console.log(this.state.lyricData)

        this.get()
        //  console.log()

        //const axios = require('axios')

        /*https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd
        axios.get('https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd').then((response) => {
            const data = response.data;
            console.log(data)
        })
        axios({
            method: 'post',
            url: 'https://firebasestorage.googleapis.com/v0/b/familyharvestchurchlive.appspot.com/o/1%E0%B0%95%E0%B1%8B%E0%B0%B0%E0%B0%BF%E0%B0%82%E0%B0%A5%E0%B1%80%E0%B0%AF%E0%B1%81%E0%B0%B2%E0%B0%95%E0%B1%81.json?alt=media&token=ca966b79-cd30-4ca0-86f8-887f6430abdd',
            data: { "Process": "Success" }
        }).then(console.log("good"));*/
    }
    render() {
        //const users = props.data.allRandomUser.edges;
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Telugu Song Lyrics | Find Unlimited Number of Christian Songs!</title>
                    <meta
                        name="description"
                        content="Telugu Christian Song Lyrics with Amazing Tools and lot more Find Unlimited Number of Christian Songs! - Family Harvest Church"
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

                </Helmet>

                <div className="lyricbody" >

                    <div>
                        <div className="LwelcomeDiv">
                            <h1>Find Lyrics for a Plethora of<br /><span className="Lfhclive">Christian Songs</span></h1>
                        </div>
                        <div className="titles">

                            {this.state.alpha.map((letter, index) => (
                                <div class="lyricNav">
                                    <a className="titleAlphaM" style={{ color: "#000" }} href={"#" + letter}>{letter}</a>
                                </div>
                            ))}
                            <br /><br /><br />
                            <div style={{ margin: "auto" }}> <ClipLoader

                                size={"100%"}
                                color={"#000"}
                                loading={this.state.isLoading}
                            /></div>
                            {this.state.alpha.map((letter, index) => (
                                <div className="titleWrap" id={letter}>
                                    <div onClick={"#" + letter} className="titleAlpha" style={{ color: "#000" }} >{letter}</div>

                                    {this.state.data.map((lyric, index) => (
                                        <div key={index} onClick={this.scroll}>

                                            <a className="titleLink#lyricPage" href={`/lyrics/${lyric.node.slug}`}>
                                                {lyric.node.englishTitle[0] === letter ? <div className="title">

                                                    <div className="titleLink">{lyric.node.englishTitle} | <span className="teluguTitle" style={{ fontSize: "28px" }}>{lyric.node.teluguTitle}</span></div>

                                                </div> : null}

                                            </a>

                                        </div>

                                    ))}</div>))}
                        </div>
                    </div>

                </div >

            </div>
        )
    }
}

/*export const pageQuery = graphql`
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
`;*/

export const LyricPage = (props) => {
    const [content, setCon] = useState()
    const [title, setTitle] = useState()
    const [englishTitle, setETitle] = useState()
    const [englishCon, setECon] = useState()
    const [loading, setLoad] = useState(false)
    useEffect(() => {
        // Update the document title using the browser API

        /*var data = {}, st = {};
         const axios = require('axios')
         axios.get('https://backend.familyharvestchurch.ml/api/lyric/?format=json').then((response) => {
             data = response.data;
 
             for (var i = 0; i < data.count; i++) {
                 st[data.results[i].slug] = {
                     author: data.results[i].author,
                     telugu_name: data.results[i].telugu_name,
                     english_name: data.results[i].english_name,
                     slug: data.results[i].slug,
                     telugu_lyrics: data.results[i].telugu_lyrics,
                     english_lyrics: data.results[i].english_lyrics,
                     created: data.results[i].created_date,
                     editing: data.results[i].editing
                 }
                 //slugblog[data.results[i].slug] = { videoId: data.results[i].video_id, title: data.results[i].title, captionOrDesc: data.results[i].caption_or_description }
 
             }
             st[slug].telugu_lyrics = "<div class='lyricBox'>" + st[slug].telugu_lyrics + "<br />" + '</div>'
             st[slug].english_lyrics = "<div class='lyricBoxE'>" + st[slug].english_lyrics + "<br />" + '</div>'
 */
        setCon(props.data.teluguLyrics)
        setTitle(props.data.teluguTitle)
        setETitle(props.data.englishTitle)
        setECon(props.data.englishLyrics)
    });
    return (<div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>{englishTitle + " | " + title + " | Song Lyrics - FHC"}</title>
            <meta
                name="description"
                content={englishTitle + " | " + title + " Song Lyrics - Telugu Christian Song Lyrics unlimited - Family Harvest Church"}
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

        </Helmet>

        <div className="lyricpage" id="lyricPage">
            <a href='/lyrics' > <button className="back" href="/">&lt; Back</button>

            </a>

            <a href="#english" ><button id="telugu" className="lyriclangButton">Click Here to View English Version</button> </a>
            <div className="lyricDiv">
                <ClipLoader

                    size={50}
                    color={"#000"}
                    loading={loading}
                />
                <div className="l">
                    <h1 className="lyricTitle">{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }} style={{ fontFamily: "'Sree Krushnadevaraya', serif", fontSize: "25px" }}></div>
                </div>
            </div>
       
            <a href="#telugu" ><button id="english" className="lyriclangButton">Click Here to View English Version</button> </a>
            <div className="lyricDiv">
                <ClipLoader

                    size={50}
                    color={"#000"}
                    loading={loading}
                />
                <div className="lyricBox">
                    <h1 className="lyricTitle" style={{ fontFamily: "Girassol", fontSize: "35px" }}>{englishTitle}</h1>
                    <div dangerouslySetInnerHTML={{ __html: englishCon }} style={{ fontFamily: "Georgia", fontSize: "23px" }} className="lyricData"></div>
                </div>
            </div>

            <div className="tools">
                More Lyric Tools Coming Soon!
           
            </div>
        </div>
    </div>
    )

}

export default Lyrics;