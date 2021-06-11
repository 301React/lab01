import React, { Component } from 'react'
import heart from '../assets/hhhh.png';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


export class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numOfVotes: 0
        }
    }

    addVote = () => {
        let newVotes = this.state.numOfVotes;
        this.setState({
            numOfVotes: newVotes + 1
        })
    }

    modalOn = ()=>{
       this.props.modalOn(this.props.title)
    }

    render() {
        return (
            // <div >
            //     <h2>{this.props.title}</h2>
            //     <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
            //     <p>{this.props.description}</p>
            //     <span onClick={this.addVote}> 
            //      <img src={heart} width="40px" height="40px" />
            //       {this.state.numOfVotes}
            //     </span>
            // </div>
            <Card style={{ width: '18rem', margin: '8px' ,     display: 'inline-block' }}>
                <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title}  style={{ width: '250px', height: '270px' }}  onClick={this.modalOn} />
                <Card.Body>
                    <Card.Title> {this.props.title} </Card.Title>
                    <Card.Text> {this.props.description} </Card.Text>
                    <Card.Img src={heart} onClick={this.addVote} style={{ width: '2rem' }}/>
                    <Card.Text> {this.state.numOfVotes} </Card.Text>
                    {/* <Button variant="primary" onClick={this.addVote} >Vote</Button> */}
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts
