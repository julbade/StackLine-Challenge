import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/dataAction';
import Chart from './Chart';
import Table from './Table';
import Details from './Details';



 class HomePage extends Component {


     componentWillMount() {
         this.props.fetchData();
     }
     
    render() {
       
        if (this.props.data[0]) {
            console.log(this.props.data[0].sales[0])
            return (
              <div className="App">
                <Chart salesData={this.props.data[0].sales} />
                <Table tableData={this.props.data[0].sales}/>
                <Details detailsData={this.props.data[0].details} image={this.props.data[0].image}/>
              </div>
            );
          } else return null
        }
}

const mapStateToProps = state => ({
    data: state.data.json
})

export default connect(mapStateToProps, { fetchData })(HomePage)