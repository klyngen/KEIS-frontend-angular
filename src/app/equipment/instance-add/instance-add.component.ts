import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'instance-add',
  templateUrl: './instance-add.component.html',
  styleUrls: ['./instance-add.component.css']
})
export class InstanceAddComponent implements OnInit {
    // TODO - this should be an instance type 
    @Output() submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
