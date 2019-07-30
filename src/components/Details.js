import React, { Component } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faChartBar} from '@fortawesome/free-solid-svg-icons';

import '../styles/details.css';


class Details extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="details">
                <img id="product" src={this.props.image} alt="Shark Ninja"></img>
                <h3>{this.props.title}</h3>
                <p>{this.props.subtitle}</p>
                <hr/>
                {this.props.tags.map((tag, index) => {
                    return (
                        <span style={{ padding: 10}} key={index}>
                            <button style={{ padding: 4}}>{tag}</button>
                        </span>
                    )
                })}
                <h3>Details:</h3>
                {this.props.detailsData.map((detail, index) => {
                    return(
                    <div key={index}>
                        <p>{detail}</p>
                    </div>
                    )
                })}
                <hr/>
                <div className="icon">
                <FontAwesomeIcon style={{marginRight: 10}} icon={faHome}/>    
                   <h2>Overview</h2>
                </div>
                <div className="icon">
                    <FontAwesomeIcon  style={{marginRight: 10}} icon={faChartBar}/>
                    <h2>Sales</h2>
                </div>
                </div>
        </div>
        ) 
    }
}

export default Details;