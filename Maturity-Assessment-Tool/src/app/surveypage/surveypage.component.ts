import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATService } from '../mat.service';
import { ChartData, ChartOptions } from 'chart.js';




@Component({
  selector: 'app-surveypage',
  templateUrl: './surveypage.component.html',
  styleUrls: ['./surveypage.component.css']
})
export class SurveypageComponent implements OnInit {
  counter=0;
  checkCheckBoxvalue(event:any){
    this.counter++;
    console.log(this.counter)
  }

  checked=false;








  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router)
  {



  }
  questions:any;
  surveyid =this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {
    this.questionandanswer(this.surveyid)
  }

  questionandanswer(id: string | null): void {
    this._matservice.getselectedquestionandanswer(id).subscribe ( (data: any)=>{
      this.questions = data;
    console.log(data)})

    }







}


