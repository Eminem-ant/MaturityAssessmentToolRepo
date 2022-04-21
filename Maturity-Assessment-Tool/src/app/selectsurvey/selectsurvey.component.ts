import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATService } from '../mat.service';

@Component({
  selector: 'app-selectsurvey',
  templateUrl: './selectsurvey.component.html',
  styleUrls: ['./selectsurvey.component.css']
})
export class SelectsurveyComponent implements OnInit {

  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router)  {}
  surveylists:any;
  projectid =this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.surveylist(this.projectid);
  }
  surveylist(id: string | null): void {
    this._matservice.getallsurveydetails(id).subscribe ( (data: any)=>{
      this.surveylists = data;
    console.log(data)})

    }

}
