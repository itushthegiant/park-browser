import React, { Component } from 'react'
import Park from '../components/Park'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchBar from '../components/SearchBar'


export default class Parks extends Component {

    state = {
        parks: [],
        showedParks: []

    }



    componentDidMount() {
        fetch('http://localhost:5000/parks')
            .then(resp => resp.json())
            .then(data => this.setState({
                parks: data,
                showedParks: data
            }))
    }


    parksToShow = () => {
        return this.state.showedParks.map(park => {
            return <Park parkData={park} />
        })
    }


    filterParks = (city, state) => {
        let showedParks = this.state.parks.map(park => {
            if (city === park.City) {
                return park
            }
        })

        this.setState({
            showedParks: showedParks
        })
    }



    render() {
        return (
            <div>
                <SearchBar selectedParks={this.filterParks} />
                <Container>
                    <Row>
                        {this.parksToShow()}
                    </Row>
                </Container>
            </div>
        )
    }
}
