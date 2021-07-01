import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import GuestForm from './GuestForm'


export default class Triplog extends Component {

    state = {
        logs: []
    }

    
    addNewLog = (log) => {
        this.setState({
            logs: [...this.state.logs, log]
        })
    }




    render() {
        return (
            <div className='triplog'>
                <h1>
                    Triplog
                </h1>
                <Container>
                    <GuestForm addNewLog={this.addNewLog} />
                </Container>

                <Container>

                </Container>
            </div>
        )
    }
}
