import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link
                            
                            author={tweet.author}
                            title={tweet.title}
                            content={tweet.content}
                            to={`tweets/${tweet.id}`}
                        >
                            <h2 className="indexTweetAuthor">{tweet.author}</h2>
                            <h3 className="indexTweetTitle">{tweet.title}</h3>
                            <p className="indexTweetContent">{tweet.content}</p>
                        </Link>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Home;