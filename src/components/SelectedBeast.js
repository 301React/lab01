import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap/';


export class SelectedBeast extends Component {
  
    modalOff=()=>{
        this.props.modalOff();
    } 


    render() {
        return (
            <Modal show={this.props.visibility} onHide={this.modalOff}>

            <Modal.Header closeButton>
              <Modal.Title>{this.props.modalBeast.title}</Modal.Title>
            </Modal.Header>

            <Card.Img style={{width:'300px'}} variant="top" alt={this.props.modalBeast.title} src={this.props.modalBeast.image_url} />

            <Modal.Body> {this.props.modalBeast.description}</Modal.Body>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.modalOff}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}

export default SelectedBeast
