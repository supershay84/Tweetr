import { useState, useEffect } from 'react';

const Home = () => {
    const [tweets, setTweets] =  useState([]);

    const fetchTweets = async () => {
        try {
            const response = await fetch('http://localhost:3000/tweets');
            const data = await response.json();
            setTweets(data.tweets);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTweets();
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