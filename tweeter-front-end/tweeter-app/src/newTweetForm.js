import { useRef } from 'react'

const newTweetForm = (props) => {
    const authorInput = useRef(null);
    const titleInput = useRef(null);
    const contentInput = useRef(null);

    const createTweet = async (event) => {
        event.preventDefault();
        const author = authorInput.current.value;
        const title = titleInput.current.value;
        const content = contentInput.current.value;



        }

    
    return(
        <div>
            hello world
        </div>
    )
}

export default newTweetForm;