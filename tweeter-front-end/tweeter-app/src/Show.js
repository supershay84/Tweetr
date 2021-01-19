import React, {useState, useEffect} from 'react'
import Edit from './Edit'


const Show = (props) => {
    const [aTweet, setATweet] = useState ({});

    const fetchATweet = async () => {
        try {
            const response = await fetch(`http://localhost:3000/tweets/${props.match.params.id}`)
            const data = await response.json();
            setATweet(data.tweet);
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

        <Edit />
        </div>

    )
}

export default Show;