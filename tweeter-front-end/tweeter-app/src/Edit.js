import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
            console.log(props)
            const response = await fetch (`http://localhost:3000/tweets/${props.aTweet.id}`,
            {method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: body,
        });
        const data = await response.json();
        // const filteredTweets = props.allTweets.filter(
        //     (allTweets => allTweets._id !== data.id)
        // )
        props.setATweet(data)
        } catch (err) {
            console.error(err);
        }

    }

    return(
        // <form onSubmit={updateTweet}>
        //     Title: <input type="text" ref={updateTitleRef}/>
        //     Content: <input type="text" ref={updateContentRef}/>
        //     Author: <input type="text" ref={updateAuthorRef}/>
        //     <input type="submit" value="Update Tweet"/>
        // </form>
        <Form onSubmit={updateTweet}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Edit Text Here:</Form.Label>
                <Form.Control as="textarea" rows={3} input type="text" ref={updateContentRef} />
            </Form.Group>
            <Form.Row>
                <Col>
                <Form.Control placeholder="edit username" type="text" ref={updateAuthorRef}/>
                </Col>
                <Col>
                <Form.Control placeholder="edit title" type="text" ref={updateTitleRef}/>
                </Col>
            </Form.Row>
                {/* <input type="text" ref={authorInput}/> */}
                {/* <input type="text" ref={titleInput}/> */}
                {/* <input type="text" ref={contentInput}/> */}
                <Button variant="outline-primary" type="submit" value="Update Tweet">Update Tweet!</Button>
            </Form>
    )
}