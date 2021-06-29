import React, { Component } from 'react'
import Parks from '../containers/Parks'


export default class Home extends Component {

    render() {
        return (
            <div className="home-page">
                <h1>
                    Park Browser
                </h1>
                <Parks />
            </div>
        )
    }
}