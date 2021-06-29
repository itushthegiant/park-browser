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

    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }


    handleStateChange = (event) => {
        this.setState({
            state: event.target.value
        })
    }



    handleAddressChange = (event) => {
        this.setState({
            address: event.target.value
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
                                <Form.Control placeholder="Address" onChange={this.handleAddressChange} />
                            </Col>
                            <Col >
                                <Form.Control placeholder="City" onChange={this.handleCityChange} />
                            </Col>
                            <Col>
                                <Form.Control placeholder="State" onChange={this.handleStateChange} />
                            </Col>
                        </Row>
                        <Button variant="success" type="submit">Search</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}