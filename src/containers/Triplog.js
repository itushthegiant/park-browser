import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import GuestForm from '../components/GuestForm'
import GuestReview from '../components/GuestReview'
import Row from 'react-bootstrap/Row'


export default class Triplog extends Component {

    state = {
        logs: []
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




    render() {
        return (
            <div className='triplog'>
                <h1>
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
