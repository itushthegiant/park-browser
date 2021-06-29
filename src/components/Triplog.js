import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


export default class Triplog extends Component {

    state = {
        name: '',
        createdAt: '',
        content: '',
    }


    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:5000/triplog', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                guestName: this.state.name,
                content: this.state.content
            })
        })
        .then(resp => console.log(resp))
    }




    render() {
        return (
            <div className='triplog'>
                <h1>
                    Triplog
                </h1>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onChange={this.handleNameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tell us about your experience</Form.Label>
                            <Form.Control as="textarea" rows={10} placeholder="Your experience..." onChange={this.handleContentChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
