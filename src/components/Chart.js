import React, { Component } from 'react';
import { Line  } from'react-chartjs-2';



class Chart extends Component {
    render() {
        const sales = {
            labels: this.props.salesData.map(chart => chart.weekEnding),
            datasets: [
              {
                label: 'Retail Sales',
                type: 'line',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#45A7F5',
                borderColor: '#45A7F5',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                data: this.props.salesData.map(retail   => retail.retailSales
                ),
                
              },
              {
                label: 'Wholesale Sales',
                type: 'line',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#98A4BE',
                borderColor: '#98A4BE',
                borderCapStyle: 'butt',
                borderJoinStyle: 'miter',
                data: this.props.salesData.map(whole   => whole.wholesaleSales
                ),
                
              },

            ]
          };
          const options = {
              responsive: true,
              tooltips: {
                mode: 'label'
              },
              scales: {
                xAxes: [{
                    type: 'time',
                    time: {
                        unit: 'month',
                        unitStepSize: 0.5,
                        displayFormats: {
                            'month': 'MMM'
                        },
                    },
                    ticks:{
                        maxTicksLimit: 20,
                    },
                }],
                yAxes: [{
                    ticks: {
                        display: false 
                    }
                }]
            }
              
          }
        return (
            <div className="container">
                 <div className="chart">
                    <Line 
                        data={sales}
                        options={options}
                        height={60}
                        width={150}
                
                    />
                    </div>
            </div>
        )
    }
}


export default Chart;