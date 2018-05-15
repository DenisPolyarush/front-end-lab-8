import { Component, OnInit, Input} from '@angular/core';
import { ISchedule } from '../schedule'

@Component({
  selector: '[app-class-component]',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {
	@Input() item : ISchedule;
  @Input() index;
	@Input() remove;

	schedule : ISchedule;

  ngOnInit() {
  }
 	edit(){
    this.item.isEdit = !this.item.isEdit;
    this.schedule = { ...this.item}
  }
  save = () => {
  	this.item = { ...this.schedule }
  	this.item.isEdit = !this.item.isEdit;
  	this.schedule = null; 
  }
  cancel(){
  	this.item.isEdit = !this.item.isEdit;
  }
}
