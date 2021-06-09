import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts';
import data from './data.json';

export class Main extends Component {


    render() {
        return (
            <div>
                {data.map((val, idx) => {
                    return (
                        <HornedBeasts
                            title={val.title}
                            imageUrl={val.image_url}
                            description={val.description}
                            key={idx}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Main
