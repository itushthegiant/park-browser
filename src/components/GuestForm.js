import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ToggleParkName from './ToggleParkName';


export default class GuestForm extends Component {

    state = {
        name: '',
        createdAt: '',
        content: '',
    }

    
    handleOnChange = (event) => {
        const  { name, value } = event.target
        this.setState({
            [name]: value,
            createdAt: moment().format('ll')

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
                createdAt: this.state.createdAt,
                content: this.state.content
            })
        })
        .then(resp => resp.json())
        .then(data => this.props.addNewLog(data))
    }




    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name='name' onChange={this.handleOnChange} />
                        </Form.Group>
                        <ToggleParkName />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Tell us about your experience</Form.Label>
                            <Form.Control as="textarea" name='content' rows={7} placeholder="Your experience..." onChange={this.handleOnChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        )
    }
}
