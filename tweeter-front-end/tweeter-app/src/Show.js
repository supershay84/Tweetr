import React, {useState, useEffect} from 'react'

const Show = (props) => {
    const [aTweet, setATweet] = useState ({});

    const fetchATweet = async () => {
        try {
            const response = await fetch(`https://lcoalhost:3000/tweets/${props.match.params.id}`)
            const data = await response.json();
            setATweet(data.tweets);
        } catch(error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchATweet();
    }, []);

    return (
        <div>
        <h3 className="TweetAuthor"> {aTweet.author.id}</h3>
        <h3 className="TweetTitle"> {aTweet.title.id}</h3>
        <p className="TweetContent">{aTweet.content.id}</p>
        </div>

    )
}

export default Show;