import { useRef } from 'react'

const NewTweetForm = (props) => {
    const authorInput = useRef(null);
    const titleInput = useRef(null);
    const contentInput = useRef(null);

    const createTweet = async (event) => {
        event.preventDefault();
        const author = authorInput.current.value;
        const title = titleInput.current.value;
        const content = contentInput.current.value;
        const body = JSON.stringify({
            author, title, content
        });
        event.currentTarget.reset();
        try {
            const response = await fetch('http://localhost:3000/tweets', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
            // console.log("props.tweets", ...props.tweets);
            console.log("response", response);
            const data = await response.json();
            console.log("data", data);
            props.updateTweets([...props.tweets, data])
        } catch(error) {
            console.error(error)
        }


        }

    
    return(
        <div>
            <form onSubmit={createTweet}>
                <input type="text" ref={authorInput}/>
                <input type="text" ref={titleInput}/>
                <input type="text" ref={contentInput}/>
                <input type="submit" value="Post Tweet!"/> 
            </form>
        </div>
    )
}

export default NewTweetForm;