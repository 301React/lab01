import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class HornedBeasts extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts
