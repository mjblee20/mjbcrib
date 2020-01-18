import React from 'react';
import Chart from "chart.js";
import classes from "./VisualData.module.css";

export default class VisualData extends React.Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "doughnut",

            data: {
                //Bring in data
                labels: ["Focus", "Learning", "Job Search", "Project Time"],
                datasets: [
                    {
                        data: function() {
                            // ToDo: Grab the amount of time spent on each category from database
                        },
                        backgroundColor: function() {
                            // ToDo: Read from the database what color of category was picked and add to this
                        }
                            
                        
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }

    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

