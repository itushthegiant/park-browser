import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import GuestForm from '../components/GuestForm'
import GuestReview from '../components/GuestReview'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'


export default class Triplog extends Component {

    state = {
        logs: [],
    }


    addNewLog = (log) => {
        this.setState({
            logs: [...this.state.logs, log]
        })
    }

    mapLogs = () => {
        return this.state.logs.map(log => {
            return <GuestReview logData={log} />
        })
    }

    componentDidMount() {
        fetch('http://localhost:5000/triplog')
            .then(resp => resp.json())
            .then(data => this.setState({
                logs: data
            }))
    }




    render() {
        return (
            <div className='triplog'>
                <h1>
                    <FontAwesomeIcon icon={faBookOpen} />
                    Triplog
                </h1>
                <Container className='mb-5'>
                    <GuestForm addNewLog={this.addNewLog} />
                </Container>
                <Row>
                    {this.mapLogs()}
                </Row>
            </div>
        )
    }
}
