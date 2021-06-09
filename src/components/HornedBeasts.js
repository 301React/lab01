import React, { Component } from 'react'
import heart from '../assets/hhhh.png';

export class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }

    addVote =()=>{
      let newVotes=this.state.numOfVotes;
      this.setState({
        numOfVotes:newVotes++
      })
    }

    render() {
        return (
            <div onClick={this.addVote}>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
                <p>{this.props.description}</p>
                <img src={heart} width="40px" height="40px" />
                <span>{this.state.numOfVotes}</span>
            </div>
        )
    }
}

export default HornedBeasts
