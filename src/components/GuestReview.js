import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function GuestReview(props) {
    return (
        <div>
            <Col>
                <Card className='mb-3 review-card' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <FontAwesomeIcon icon={faUser} className='mr-2' />
                             {props.logData.guestName}
                            </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            <FontAwesomeIcon icon={faClock} className='mr-2' />
                            {props.logData.createdAt}
                            </Card.Subtitle>
                        <Card.Text>{props.logData.content}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
