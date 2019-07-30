import React, { Component } from 'react';

import '../styles/table.css';


class Table extends Component {
    render() {
        return (
            <div className="container">
            <h3>Table Data</h3>
            <hr/>
              <div>
                <table style={{width: "100%", marginBottom: "50px"}}>
                  <tr id="tableHeader">
                    <th>Week Ending</th>
                    <th>Retail Sales</th>
                    <th>Wholesale Sales</th>
                    <th>Units Sold</th>
                    <th>Retailer Margin</th> 
                  </tr>
                  <tbody>
                   {this.props.tableData.map((table, index) => {
                     return(
                       <tr key={index} className="tableRow">
                        <td>{table.weekEnding}</td>
                        <td>${table.retailSales}</td>
                        <td>${table.wholesaleSales}</td>
                        <td>{table.unitsSold}</td>
                        <td>${table.retailerMargin}</td>
                       </tr>
                     )
                   })}
                  </tbody>
                </table>
              </div>
          </div>
        )
    }
}

export default Table;