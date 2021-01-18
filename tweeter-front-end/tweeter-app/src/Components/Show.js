import React, {useState, useEffect} from 'react'

const OneTweet = (props) => {
    const [aTweet, setATweet] = useState ({});

    const fetchATweet = async () => {
        try {
            const response = await fetch(`https://lcoalhost:3000/tweets/${id}`)
            const data = await response.json();
            setATweet(data);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchATweet();
    }, []);

    return (
        <div>
        <h3 className="TweetAuthor"> {aTweet.author}</h3>
        <h3 className="TweetTitle"> {aTweet.title}</h3>
        <p className="TweetContent">{aTweet.content}</p>
        </div>
        
    )
}