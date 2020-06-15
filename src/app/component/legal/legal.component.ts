import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.css']
})
export class LegalComponent implements OnInit {
  legal:any | NgbDateStruct = {selectedStatus : 'Creating'};
  placement = 'bottom';
  statusData: any[] = ['Creating', 'Requested', 'Receipt', 'In response of the legal department',
                        'In response to the application', 'Answer by legal department',
                      'End of conslusion', 'Suspend'];
  constructor() {
    this.legal["startDate"] = this.addDays(moment.utc(), 0); // current Date
   }

  ngOnInit() {
  }

  detectDate(event, name, index?:any) {
    console.log("event", event);
    if (name == "responseDeadline") {
      this.legal["deadline"] = event;
    } else{
      this.legal["responseDate"] = event;
    }
  }

   // convert object date into string date for moment js
   makeDateTOStringFormat(obj) {
    let arr = Object.values(obj);

    let final: any = [arr[0]];

    for (let item = 1; item < arr.length; item++) {
      final.push("-", arr[item]);
    }
    return (final.join(""));
  }
   // Generic method for add number of days and then format in object form
   addDays(dateInput, addDays?) {
    let customObj = {};
    let makeFormatable = moment(moment(dateInput), "YYYY MM DD")
      .add(addDays, "days")
      .format("YYYY-MM-DD");
    let makeSplitable = makeFormatable.split("-");
    customObj["year"] = +makeSplitable[0];
    customObj["month"] = +makeSplitable[1];
    customObj["day"] = +makeSplitable[2];
    console.log("customObj", customObj);
    return customObj;
  }

  //set Status as per contractpage/legal department action
  setStatus(status){
    switch(status) {
      case "Saved":
        this.legal.selectedStatus = this.statusData[0];
        break;
      case "Submit_Without_Saving":
        this.legal.selectedStatus = this.statusData[1];
        break;
      case "Saved_By_Legal_Dept":
        this.legal.selectedStatus = this.statusData[2];
        break;
        case "Expernal_Approval":
        this.legal.selectedStatus = this.statusData[3];
        break;
        case "Applicant_Responsed":
        this.legal.selectedStatus = this.statusData[4];
        break;
        case "Legal_Dept_Answer":
        this.legal.selectedStatus = this.statusData[5];
        break;
        case "Auto_Alert_Notify":
        this.legal.selectedStatus = this.statusData[6];
        break;
        case "No_Longer_Required":
        this.legal.selectedStatus = this.statusData[7];
        break;
      default:
        this.legal.selectedStatus = "Creating";
    }
  }
  onSelectFile(event, fileName){
    console.log(event, fileName);

  }


  onSubmit(e){
     console.log('legal', this.legal);
  }

}
