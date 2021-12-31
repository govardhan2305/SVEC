import React, { Component } from 'react'

export default class Corporationbank extends Component {
    render(props) {
        return (
            <div>
                <h1>Corporationbank is located @{this.props.location}</h1>
            </div>
        )
    }
}
