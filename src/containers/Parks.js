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



    capitalize = (word) =>  {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }


    /// Credits for Narendra Jadhav from Stackoverflow for this method

    filterParks = (filters) => {
        const showedParks = this.state.parks.filter(park => {
            for (const filter in filters) {
                if (!filters[filter]) {
                    continue
                }
                
                if (park[this.capitalize(filter)] !== filters[filter]) {
                    return false
                }
            }
            return true
        })

        this.setState({
            showedParks: showedParks
        })
    }
    /// Credits for Narendra Jadhav from Stackoverflow for this method


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
