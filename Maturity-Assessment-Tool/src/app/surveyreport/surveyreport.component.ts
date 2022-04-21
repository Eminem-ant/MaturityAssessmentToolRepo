import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-surveyreport',
  templateUrl: './surveyreport.component.html',
  styleUrls: ['./surveyreport.component.css']
})
export class SurveyreportComponent implements OnInit {
  count=Number(this.route.snapshot.paramMap.get('id'))*20;

  public salesData: ChartData<'line'> = {
    labels: ['Failure percentage','Success percentage'],
    datasets: [
      { label: 'Successs', data: [100-this.count,this.count], tension: 0.5 },

    ],
  };
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}
