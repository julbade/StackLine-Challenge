import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { fetchData } from '../store/actions/dataAction';
import Chart from './Chart';
import Table from './Table';
import Details from './Details';
import Header from './Header';

import '../styles/homepage.css';


 class HomePage extends Component {


     componentWillMount() {
         this.props.fetchData();
     }
     
    render() {
       
        if (this.props.data[0]) {
            console.log(this.props.data[0].sales[0])
            return (
              <div className="container">
                <Header/>
                <Grid container >
                    <Grid className="details" item sm={4}>
                        <div className="container">
                            <Details 
                            detailsData={this.props.data[0].details} 
                            image={this.props.data[0].image}
                            title={this.props.data[0].title}
                            subtitle={this.props.data[0].subtitle}
                            tags={this.props.data[0].tags}
                            />
                        </div>
                </Grid>
                <Grid  className="sales" item sm={8}>
                        <div className="container">
                             <Chart salesData={this.props.data[0].sales} />
                        </div><br/>
                        <div className="container">
                            <Table tableData={this.props.data[0].sales} />
                        </div>
                    </Grid> 
                </Grid>
              </div>
            );
          } else return null
        }
}

const mapStateToProps = state => ({
    data: state.data.json
})

export default connect(mapStateToProps, { fetchData })(HomePage)