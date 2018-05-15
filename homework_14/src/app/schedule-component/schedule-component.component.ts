import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-schedule-component',
  templateUrl: './schedule-component.component.html',
  styleUrls: ['./schedule-component.component.css']
})
export class ScheduleComponentComponent implements OnInit {
	title = 'Epam FE Lab #8';
  schedule = [
  	{
  		id : 1,
  		topic : 'CSS',
  		date : '13/03/2018',
  		lecture : 'John Doe',
      isEdit : true
  	}
  ]  
  ngOnInit() {
  	console.log(this)
  }
  add(){
    let obj = {
      id : this.schedule.length + 1,
      topic: '',
      date: '',
      lecture: '',
      isEdit : false
    }
    this.schedule.push(obj);
  }
  remove = (index: number) =>{
    this.schedule.splice(index, 1)
  }
}
