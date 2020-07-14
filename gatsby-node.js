const axios = require('axios');
const crypto = require('crypto');

// exports.sourceNodes = async ({ boundActionCreators }) => {
exports.sourceNodes = ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;
    const fetchLyrics = () => axios.get(`https://backend.familyharvestchurch.in/api/lyric.json`).then(res => {

        // map into these results and create nodes
        res.data.results.map((user, i) => {

            // Create your node object
            const userNode = {
                // Required fields
                id: `${i}`,
                parent: `__SOURCE__`,
                internal: {
                    type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
                    // contentDigest will be added just after
                    // but it is required
                },
                children: [],

                // Other fields that you want to query with graphQl
                slug: user.slug,
                teluguTitle: user.telugu_name,
                teluguLyrics: user.telugu_lyrics,
                englishTitle: user.english_name,
                englishLyrics: user.english_lyrics,
                date: user.created_date,
                langage: user.language,
                composer: user.composer,
                singer: user.singer,
                youtube: user.youTube_video


                // etc...
            }

            // Get content digest of node. (Required field)
            const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(userNode)).digest(`hex`);
            // add it to userNode
            userNode.internal.contentDigest = contentDigest;

            // Create node with the gatsby createNode() API
            createNode(userNode);
        });

    });

    const fetchChords = () => axios.get(`https://backend.familyharvestchurch.in/api/chords.json`).then(res => {

        // map into these results and create nodes
        res.data.results.map((user, i) => {

            // Create your node object
            const userNode = {
                // Required fields
                id: `${i}`,
                parent: `__SOURCE__`,
                internal: {
                    type: `ChordsData`, // name of the graphQL query --> allRandomUser {}
                    // contentDigest will be added just after
                    // but it is required
                },
                children: [],

                // Other fields that you want to query with graphQl
                slug: user.slug,
                key: user.key,
                teluguTitle: user.telugu_name,
                teluguLyrics: user.telugu_lyrics,
                englishTitle: user.english_name,
                englishLyrics: user.english_lyrics,
                date: user.created_date,
                langage: user.language,
                composer: user.composer,
                singer: user.singer,
                youtube: user.youTube_video


                // etc...
            }

            // Get content digest of node. (Required field)
            const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(userNode)).digest(`hex`);
            // add it to userNode
            userNode.internal.contentDigest = contentDigest;

            // Create node with the gatsby createNode() API
            createNode(userNode);
        });

    });

    const fetchLive = () => axios.get(`https://backend.familyharvestchurch.in/api/live.json`).then(res => {

        // map into these results and create nodes
        res.data.results.map((user, i) => {

            // Create your node object
            const userNode = {
                // Required fields
                id: `${i}`,
                parent: `__SOURCE__`,
                internal: {
                    type: `LiveData`, // name of the graphQL query --> allRandomUser {}
                    // contentDigest will be added just after
                    // but it is required
                },
                children: [],

                // Other fields that you want to query with graphQl
                slug: user.slug,
                videoId: user.video_id,
                title: user.title,
                desc: user.caption_or_description,
                date: user.created_date


                // etc...
            }

            // Get content digest of node. (Required field)
            const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(userNode)).digest(`hex`);
            // add it to userNode
            userNode.internal.contentDigest = contentDigest;

            // Create node with the gatsby createNode() API
            createNode(userNode);
        });

    });

    return Promise.all([fetchLyrics(), fetchChords(), fetchLive()]);

    // fetch raw data from the randomuser api
    // const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=500`);
    // await for results
    // const res = await fetchRandomUser();

    /*
            axios.get(`https://backend.familyharvestchurch.ml/api/lyric/?format=json`).then(res => {
    
                // map into these results and create nodes
                res.data.results.map((user, i) => {
    
                    // Create your node object
                    const userNode = {
                        // Required fields
                        id: `${i}`,
                        parent: `__SOURCE__`,
                        internal: {
                            type: `RandomUser`, // name of the graphQL query --> allRandomUser {}
                            // contentDigest will be added just after
                            // but it is required
                        },
                        children: [],
    
                        // Other fields that you want to query with graphQl
                        slug: user.slug,
                        teluguTitle: user.telugu_name,
                        teluguLyrics: user.telugu_lyrics,
                        englishTitle: user.english_name,
                        englishLyrics: user.english_lyrics,
                        date: user.created_date,
                        langage: user.language,
                        composer: user.composer,
                        singer: user.singer,
                        youtube: user.youTube_video
    
    
                        // etc...
                    }
    
                    // Get content digest of node. (Required field)
                    const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(userNode)).digest(`hex`);
                    // add it to userNode
                    userNode.internal.contentDigest = contentDigest;
    
                    // Create node with the gatsby createNode() API
                    createNode(userNode);
                });
                resolve();
            });
    
    
    
        });
    */
}

const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        const blogPostTemplate = path.resolve(`src/templates/lyricPage.js`)
        const chordsPost = path.resolve(`src/templates/chordPage.js`)
        const chordsPostAmp = path.resolve(`src/templates/chordPage.amp.js`)
        // Query for markdown nodes to use in creating pages.  
        resolve(
            graphql(
                `  
   query {  
          allRandomUser {
          edges {
            node {
                slug
            }
          }
        }
        allChordsData {
            edges {
              node {
              slug
              }
            }
          }
    }
   `
            ).then(result => {


                // Create blog post pages.  
                result.data.allRandomUser.edges.forEach(edge => {
                    createPage({
                        path: `/lyrics/${edge.node.slug}`, // required  
                        component: blogPostTemplate,
                        context: {
                            slug: edge.node.slug // in react this will be the `:slug` part  
                        },
                    })
                })

                result.data.allChordsData.edges.forEach(edge => {
                    createPage({
                        path: `/chords/${edge.node.slug}`, // required  
                        component: chordsPost,
                        context: {
                            slug: edge.node.slug // in react this will be the `:slug` part  
                        },
                    })
                })

                result.data.allChordsData.edges.forEach(edge => {
                    createPage({
                        path: `/chords/${edge.node.slug}/amp/`, // required  
                        component: chordsPostAmp,
                        context: {
                            slug: edge.node.slug // in react this will be the `:slug` part  
                        },
                    })
                })

                return
            })
        )
    })
}

/*
exports.sourceNodes = ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;
    return new Promise((resolve, reject) => {

        // fetch raw data from the randomuser api
        // const fetchRandomUser = () => axios.get(`https://randomuser.me/api/?results=500`);
        // await for results
        // const res = await fetchRandomUser();

        axios.get(`https://backend.familyharvestchurch.ml/api/live/?format=json`).then(res => {

            // map into these results and create nodes
            res.data.results.map((user, i) => {

                // Create your node object
                const userNode = {
                    // Required fields
                    id: `${i}`,
                    parent: `__SOURCE__`,
                    internal: {
                        type: `LiveData`, // name of the graphQL query --> allRandomUser {}
                        // contentDigest will be added just after
                        // but it is required
                    },
                    children: [],

                    // Other fields that you want to query with graphQl
                    slug: user.slug,
                    videoId: user.video_id,
                    title: user.title,
                    desc: user.caption_or_description,
                    date: user.created_date


                    // etc...
                }

                // Get content digest of node. (Required field)
                const contentDigest = crypto.createHash(`md5`).update(JSON.stringify(userNode)).digest(`hex`);
                // add it to userNode
                userNode.internal.contentDigest = contentDigest;

                // Create node with the gatsby createNode() API
                createNode(userNode);
            });
            resolve();
        });

    });

}*/