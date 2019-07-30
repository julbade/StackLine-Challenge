import React, { Component } from 'react';

import '../styles/details.css';


class Details extends Component {
    render() {
        return (
            <div className="container">
            <h3>Product Details</h3>
            <hr/>
                <div>
                <img id="product" src={this.props.image} alt="Shark Ninja"></img>
                <h3 style={{textAlign: 'center'}}>{this.props.title}</h3>
                <p style={{textAlign: 'center'}}>{this.props.subtitle}</p>
                <h3>Details:</h3>
                {this.props.detailsData.map((detail, index) => {
                    return(
                    <div key={index}>
                        <p>{detail}</p>
                    </div>
                    )
                })}
                <hr/>
                </div>
        </div>
        ) 
    }
}

export default Details;