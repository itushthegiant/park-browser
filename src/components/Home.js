import React, { Component } from 'react'
import Parks from '../containers/Parks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'

export default class Home extends Component {

    render() {
        return (
            <div className="home-page">
                <h1>
                    <FontAwesomeIcon icon={faCampground}/>
                    Parks
                </h1>
                <Parks />
            </div>
        )
    }
}