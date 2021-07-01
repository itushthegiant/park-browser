import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default class SearchBar extends Component {

    state = {
        city: '',
        state: '',
        address: ''
    }

ß

    handleOnChange = (event) => {
        const  { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }





    handleSubmit = (event) => {
        event.preventDefault()
        const filters = {
            city: this.state.city,
            state: this.state.state,
            address: this.state.address,
        };
        this.props.selectedParks(filters)
    }
    


    render() {
        return (
           <div className="search-bar">
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Control placeholder="Address" name='address' onChange={this.handleOnChange} />
                            </Col>
                            <Col >
                                <Form.Control placeholder="City" name='city' onChange={this.handleOnChange} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="State" name='state' onChange={this.handleOnChange} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit" className='mb-5 mt-2'>Search</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
