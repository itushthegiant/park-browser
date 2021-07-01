import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function GuestReview(props) {
    return (
        <div>
            <Col>
                <Card className='mb-3' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Name: {props.logData.guestName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Posted at: {props.logData.createdAt}</Card.Subtitle>
                        <Card.Text>{props.logData.content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
