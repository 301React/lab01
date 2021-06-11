import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
// import data from './data.json';

export class Main extends Component {
    constructor(props){
       super(props);
    }


    render() {
        return (
            <div  >
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
