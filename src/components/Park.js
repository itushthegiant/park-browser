import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function Park(props) {

    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.parkData.locationName}</Card.Title>
                    <Card.Subtitle className="mb-2">State: {props.parkData.State}</Card.Subtitle>
                    <Card.Text>Address: {props.parkData.Address} </Card.Text>
                    <Card.Text>City: {props.parkData.City} </Card.Text>
                    <Card.Text>
                    Phone Number: <Card.Link href="#">{props.parkData.phoneNumber}</Card.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
