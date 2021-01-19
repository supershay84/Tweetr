import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
// import Media from 'react-bootstrap/Media';

import NewTweetForm from './NewTweetForm';

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

        <div className="homePage">
            <h2>Make New Tweet!</h2>
            <NewTweetForm updateTweets={setTweets} tweets={tweets}/>
            <div className="indexAllTweets">
                {
                    tweets.map((tweet, index) => {
                        return (
                        <div
                        className="indexTweet"
                        key={tweet.id}
                        >
                            <h2 className="indexTweetAuthor">{tweet.author}</h2>
                             <Link
                            author={tweet.author}
                            title={tweet.title}
                            content={tweet.content}

                            to={`/tweets/${tweet.id}`}
                        >
                            <h3 className="indexTweetTitle">{tweet.title}</h3></Link>
                            <p className="indexTweetContent">{tweet.content}</p>
                                
                            <Button variant="outline-primary" onClick={(event) => {
                                deleteTweet(tweet.id)}}
                            > 

                                Delete Tweet by {tweet.author} 
                                </Button>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Home;