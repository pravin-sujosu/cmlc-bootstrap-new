import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-access-log',
  templateUrl: './access-log.component.html',
  styleUrls: ['./access-log.component.css']
})
export class AccessLogComponent implements OnInit {
  accessLog:any | NgbDateStruct = {};
  placement = 'bottom';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('legal', this.accessLog);
 }

}
