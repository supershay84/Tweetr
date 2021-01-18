import { useState, useEffect } from 'react';

const Home = () => {
    const [tweets, setTweets] =  useState([]);

    const fetchTweets = async () => {
        try {
            const response = await fetch('http://localhost:3000/tweets');
            const data = await response.json();
            setTweets(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Puts placeholder data on the page. Need to set up CORS.
    const addTemporaryHardDataWithoutCors = () => {
        setTweets([
            {
            "id": 1,
            "title": "Just found this",
            "content": "the square of the hypotenuse is equal to the sum of the squares of the other two sides",
            "author": "Pythagoras570",
            "created_at": "2021-01-17T21:26:04.309Z",
            "updated_at": "2021-01-17T21:26:04.309Z"
            },
            {
            "id": 2,
            "title": "I'm walkin' here",
            "content": "Hey, I'm walkin' here!",
            "author": "Nicky62",
            "created_at": "2021-01-17T21:26:04.315Z",
            "updated_at": "2021-01-17T21:26:04.315Z"
            },
            {
            "id": 3,
            "title": "Banh mi bushwick art party plaid iphone.",
            "content": "Chuck Norris doesn't need a java compiler, he goes straight to .war",
            "author": "Morlun the Fated",
            "created_at": "2021-01-17T21:26:05.730Z",
            "updated_at": "2021-01-17T21:26:05.730Z"
            },
            {
            "id": 4,
            "title": "Gastropub carry venmo cardigan vice.",
            "content": "Chuck Norris' beard is immutable.",
            "author": "Longshot X",
            "created_at": "2021-01-17T21:26:05.742Z",
            "updated_at": "2021-01-17T21:26:05.742Z"
            }
        ])
    }

    useEffect(() => {
        // fetchTweets();
        addTemporaryHardDataWithoutCors();
    }, [])

    return(
        <div className="indexAllTweets">
            {
                tweets.map(tweet => {
                    return (
                    <div
                    className="indexTweet"
                    key={tweet.id}
                    >
                        <h2 className="indexTweetAuthor">{tweet.author}</h2>
                        <h3 className="indexTweetTitle">{tweet.title}</h3>
                        <p className="indexTweetContent">{tweet.content}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Home;