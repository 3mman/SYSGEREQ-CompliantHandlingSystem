import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { RequestsComponent } from './requests/requests.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'SYSGEREQ';

  constructor(private dialog:MatDialog, private courseDialog:MatDialog, private studentDialog:MatDialog, private requestDialog:MatDialog){

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
     width:"30%"
  }
  opencourseDialog(){
    const coursedialogRef = this.courseDialog.open(CoursesComponent);
    width: "50%"
  }
  openstudentDialog(){
    const studentdialogRef=this.studentDialog.open(StudentsComponent);
    width:"40%"
  }
  openrequestDialog(){
    const requestdialogRef =this.requestDialog.open(RequestsComponent);
    width:"40%"
  }
}
