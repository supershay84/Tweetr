import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

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

    const deleteTweet = async (id) => {
        try {
            const response = await fetch
            (
                `http://localhost:3000/tweets/${id}`, 
                {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            )
            const data = await response;
            const filteredTweets = tweets.filter(tweet => tweet.id !== data.id);
            setTweets(filteredTweets);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchTweets();
    // }, [])
    }, [tweets])


    return(
        <div className="indexAllTweets">
            {
                tweets.map((tweet, index) => {
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
                            <h4 className="indexTweetAuthor">{tweet.author}</h4>
                            <h3 className="indexTweetTitle">{tweet.title}</h3>
                            <p className="indexTweetContent">{tweet.content}</p>
                        </Link>
                        <Button variant="outline-primary" onClick={(event) => {
                            deleteTweet(tweet.id)}}
                        >Delete Tweet by {tweet.author}</Button>
                    </div>
                    )
                })
            }
        </div>
    )
}


export default Home;