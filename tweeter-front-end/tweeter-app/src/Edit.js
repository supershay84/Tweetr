import { useRef } from 'react';

export default (props) => {
    const updateTitleRef = useRef(null);
    const updateContentRef = useRef(null);
    const updateAuthorRef = useRef(null);

    const updateTweet = async (event) => {
        event.preventDefault();
        const title = updateTitleRef.current.value;
        const content = updateContentRef.current.value;
        const author = updateAuthorRef.current.value;

        const body = JSON.stringify({
            title, content, author
        });
        event.currentTarget.reset();
        try {
            const response = await fetch (`https://lcoalhost:3000/tweets/${props.match.params.id}`,
            {method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: body,
        });
        const data = await response.json();
        const filteredTweets = props.allTweets.filter(
            (allTweets => allTweets._id !== data.id)
        )
        props.updatedTweets([...filteredTweets, data])
        } catch (err) {
            console.error(err);
        }

    }

    return(
        <form onSubmit={updateTweet}>
            Title: <input type="text" ref={updateTitleRef}/>
            Content: <input type="text" ref={updateContentRef}/>
            Author: <input type="text" ref={updateAuthorRef}/>
            <input type="sumbit" value= "Update Tweet"/>
        </form>
    )
}