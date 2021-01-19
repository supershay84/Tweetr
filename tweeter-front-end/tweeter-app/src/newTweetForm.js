import { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
        <div class="tweetform">
            <Form onSubmit={createTweet}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What's going on?</Form.Label>
                <Form.Control as="textarea" rows={3} input type="text" ref={contentInput} />
            </Form.Group>
            <Form.Row>
                <Col>
                <Form.Control placeholder="username" type="text" ref={authorInput} />
                </Col>
                <Col>
                <Form.Control placeholder="title" type="text" ref={titleInput}/>
                </Col>
            </Form.Row>
                {/* <input type="text" ref={authorInput}/> */}
                {/* <input type="text" ref={titleInput}/> */}
                {/* <input type="text" ref={contentInput}/> */}
                <Button variant="outline-primary" type="submit">Tweet!</Button>
            </Form>
        </div>
    )
}

export default NewTweetForm;