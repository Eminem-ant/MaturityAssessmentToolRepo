import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MATService } from '../mat.service';
import { createsurvey } from './createsurvey';
import { projectmemberdetails } from './projectmemberdetails';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  constructor(private _matservice:MATService , private route: ActivatedRoute,private router: Router)  {}
  role=localStorage.getItem("usertype");
  users:any;
  surveylists:any;
  projectmember:projectmemberdetails={
    projectMemberId: 0,
    projectId: 0,
    userId: 0
  }
  createsurvey:createsurvey={
    surveyId: 0,
    surveyname: '',
    surveyStartDate:new Date(),
    surveyEndDate:new Date()
  }

  membersofproject:any;
  projectid =this.route.snapshot.paramMap.get('id');


  ngOnInit(): void {
  this.getAllusers();
  this.getmembersoftheproject(this.projectid)
  this.surveylist(this.projectid);
  }

  // to get the user details for adding in the project
  getAllusers(){
    this._matservice.getuser().subscribe ( (data: any)=>{
      this.users = data;
    console.log(data)})
    }

    //to the details of users who are in the project
  getmembersoftheproject(id: string | null): void {
    this._matservice.getprojectmemberbyid(id)
      .subscribe(
        (data: null) => {
          this.membersofproject = data;
          console.log(data);


        },
        (error: any) => {
          console.log(error);
        });
  }

//to get the survey details
surveylist(id: string | null): void {
  this._matservice.getallsurveydetails(id).subscribe ( (data: any)=>{
    this.surveylists = data;
  console.log(data)})

  }

//adding new members to the project
  addmember(): void {
    const data = {
      projectId: Number(this.route.snapshot.paramMap.get('id')),
      userId: Number(this.projectmember.userId)
    };
    this._matservice.addmemberstotheproject(data).
    subscribe((data) => {
      console.log(data);
      alert("new Member is been added");
      this.ngOnInit();
      },
      error => {
        console.log(error);
      });
    }

 // to add a new survey
addsurvey(): void {
  const data = {
    surveyname:this.createsurvey.surveyname,
    surveyStartDate:this.createsurvey.surveyStartDate,
    surveyEndDate:this.createsurvey.surveyEndDate,
    projectId:Number(this.route.snapshot.paramMap.get('id'))
  };

  this._matservice.createsurvey(data).
  subscribe((data) => {
    console.log(data);
    alert("New Survey is been added");
    this.ngOnInit();
    },
    error => {
      console.log(error);
    });
  }
}
