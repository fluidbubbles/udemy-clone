import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  title = 'My chart';
  LineChart = []
  LineChart1 = []
  LineChart2 = []
  
  ngOnInit(){
    this.LineChart = new Chart('lineChart',{
      type:'line',
      data:{
        labels:["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
          label:'Number of something in Months',
          data:[1,5,3,8,9,4,5,1,7,4,8,2],
          fill:true,
          lineTension:0,
          borderColor:"red",
          borderWidth:1,
       
        }]
      },
      options:{
        title:{
          text:"Line Chart",
          display:true
        },
        yAxes:[{
          ticks:{
            beginAtZero:true
            }
          }]
        
      }
    })
    this.LineChart1 = new Chart('lineChart1',{
      type:'line',
      data:{
        labels:["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
          label:'Number of something in Months',
          data:[1,5,3,8,9,4,5,1,7,4,8,2],
          fill:false,
          lineTension:0,
          borderColor:"red",
          borderWidth:1,
       
        }]
      },
      options:{
        title:{
          text:"Line Chart",
          display:true
        },
        yAxes:[{
          ticks:{
            beginAtZero:true
            }
          }]
        
      }
    })

    this.LineChart2 = new Chart('lineChart2',{
      type:'line',
      data:{
        labels:["Jan","Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
          label:'Number of something in Months',
          data:[1,5,3,8,9,4,5,1,7,4,8,2],
          fill:false,
          lineTension:0,
          borderColor:"red",
          borderWidth:1,
       
        }]
      },
      options:{
        title:{
          text:"Line Chart",
          display:true
        },
        yAxes:[{
          ticks:{
            beginAtZero:true
            }
          }]
        
      }
    })

    
  }

}
