import React, { Component } from 'react';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

class Calculator extends Component {
    state={
        v1:0,
        v2:0,
        v3:0,
        v4:0,
        v5:0
    }
    render() {
        const a1= parseInt(this.state.v1)|| 0
        const a2= parseInt(this.state.v2)|| 0
        const a3= parseInt(this.state.v3)|| 0
        const a4= parseInt(this.state.v4)|| 0
        const a5= parseInt(this.state.v5)|| 0
        
        var total=a1+a2+a3+a4-a5
        var newTotal =(isNaN(total) ? 0 : total);
        
        
        console.log(total)
        const chartData = [
            {
              label: "Estimated Cost",
              value: newTotal
            },
            {
              label: "Estimated Cost after 10 years",
              value: (newTotal)*1.3
            }
          ];
          
          
          const chartConfigs = {
            type: "column2d", 
            width: "100%", 
            height: "350",
            dataFormat: "json", 
            dataSource: {
              chart: {
               
                caption: "Insurance Calculator",
                
                theme: "fusion"
              },
            
              data: chartData
            }
          };
        return (
            <div className="container">
                <div className="inputs">
                    <h4>Desired replacement income (after-tax)</h4>
                    <input  placeholder="Enter Amount in $"
                     onChange={(e)=>setTimeout(()=>{this.setState({v1:e.target.value})},3000)}/>
                    <h4>Out-of-pocket healthcare expenses</h4>
                    <input  placeholder="Enter Amount in $" 
                     onChange={(e)=>setTimeout(()=>{this.setState({v2:e.target.value})},3000)}/>
                    <h4>Home modification expenses</h4>
                    <input  placeholder="Enter Amount in $"
                    onChange={(e)=>setTimeout(()=>{this.setState({v3:e.target.value})},3000)}/>
                    <h4>Medical homecare expenses</h4>
                    <input placeholder="Enter Amount in $"
                    onChange={(e)=>setTimeout(()=>{this.setState({v4:e.target.value})},3000)}/>
                    <h4>Other expenses (transport, childcare, etc)</h4>
                    <input placeholder="Enter Amount in $"
                    onChange={(e)=>setTimeout(()=>{this.setState({v5:e.target.value})},3000)}/>
                </div>
                <div className="graph">
                    <div className="modal">
                        <h4>Recovery Period</h4>
                    </div>
                <ReactFC {...chartConfigs} />
                <p style={{color:"#49DCFA",textAlign:"center"}}>Assumptions</p>
                {newTotal!==0 ? <h3 style={{fontWeight:"normal"}}>A serious illness with recovery lasting <span style={{color:"#49DCFA"}}>12 months</span> could put your
                    finances down by <span style={{color:"#49DCFA"}}>${newTotal}</span> today and by <span style={{color:"#49DCFA"}}>${newTotal*1.3}</span> in 10 years.</h3>:null}
                     <a href="#" class="btn">Start Comparing Quotes</a>
                </div>
                
            </div>
        );
    }
}

export default Calculator;