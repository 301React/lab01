import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
import dataHorns from './data.json';
import Form from 'react-bootstrap/Form';

export class Main extends Component {
    constructor(props) {
        super(props);
    }

    filter = (event) => {
        let numOfHorns = parseInt(event.target.value)
        let allData = dataHorns;
        let filteredHorns ;
            if (numOfHorns) {
                filteredHorns= allData.filter((item) => {
                if (item.horns == numOfHorns) {
                    return item;
                }
            })
            } else {
                filteredHorns = dataHorns;
            }
   

        this.props.filtered(filteredHorns)
    }


    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Select number of horns</Form.Label>
                        <Form.Control as="select" onChange={this.filter}>
                            <option value="">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                </Form>

                {this.props.data.map((val, idx) => {
                    return (
                        <HornedBeasts
                            title={val.title}
                            imageUrl={val.image_url}
                            description={val.description}
                            key={idx}
                            modalOn={this.props.chosenBeast}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Main
