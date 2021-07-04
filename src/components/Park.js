import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Park(props) {

    return (
        <Col md={4}>
            <Card style={{ width: '18rem' }} className='park-card mb-3'>
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={faTree} className="mr-1" />
                        {props.parkData.locationName}
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
                        State: {props.parkData.State}
                    </Card.Subtitle>
                    <Card.Text>
                        <FontAwesomeIcon icon={faLocationArrow} className='mr-2' />
                        {props.parkData.Address} </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarkedAlt} className='mr-2' />
                        City: {props.parkData.City} </Card.Text>
                    <Card.Text>
                        <FontAwesomeIcon icon={faPhone} />: <Card.Link href="#">{props.parkData.phoneNumber}</Card.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
