import { Component, OnInit, ElementRef } from "@angular/core";
import { FileUploader, FileLikeObject } from "ng2-file-upload";
import { Router} from '@angular/router';
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { TranslateService } from "@ngx-translate/core";
import * as moment from "moment";
declare var $: any;


interface contractContent {
  id: number;
  renewal: string;
  contractType: string;
  contractName: string;
  contractItem: string;
  contractor: string;
  beginDofC: string;
  EndDofC: string;
  autoUpd: string;
  alerRelDate: string;
  relateContNum: string;
  isJapan: boolean;
  isUS: boolean;
  isChina: boolean;
  isTaiwan: boolean;
  isIndia: boolean;
  isEurope: boolean;
  isOther: boolean;
  extConsult: string;
  fixVersion: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  contract: any | NgbDateStruct = { selectedStatus: "Creating" };
  placement = "bottom";
  count = 0;
  fixContractFile = [];
  legalDepartFile = [];

  contractContentArr: contractContent[];
  private myScrollContainer: ElementRef;

  statusData: any[] = [
    "Creating",
    "Requesting",
    "Receipt",
    "In response to the legal department",
    "In response to the application",
    "In response to the legal department",
    "Contract signed",
    "Terminated",
    "Suspend",
  ];

  contractorData: any[] = [
    "Select of confidentiality agreement",
    "R&D agreement",
    "Joint application agreement",
    "Intellectual property licensing",
    "Transfer agreement",
    "Other technical contract",
    "Construction contract",
    "Service provision",
    "Movable property",
    "Real estate sales contract",
    "Lease contract",
    "Other",
  ];

  constructor(translate: TranslateService, private calendar: NgbCalendar, private router : Router) {
    this.contractContentArr = [];
    this.addContrcat();

    translate.get("CONTRACT_NAME").subscribe((res: string) => {
      console.log(res);
      //=> 'hello world'
    });

    this.contract["startDate"] = this.addDays(moment.utc(), 0); // current Date
    //  this.contract["endDate"] = this.addDays(moment.utc(), 1); // starting Date of Contract End Date

    console.log("contract", moment.utc().format("YYYY-MM-DD"));
  }
  findIndexAndUpdateData(data, type, index) {
    this.contractContentArr.map((item, i) => {
      if (i == index) {
        item[type] = data; //update the date in array of contract based on index
        console.log("itemOfcontractContentArr", item);
      }
    });
    return this.contractContentArr;
  }

  detectDate(event, name, index?: any) {
    console.log("event", event);
    if (name == "contract") {
      this.contract["conclusion"] = event;
    } else if (name == "EndDofC") {
      let formatDate = this.makeDateTOStringFormat(event); // format date for momentjs compatiblity
      this.contract["beforeContractEndDate"] = this.addDays(formatDate, -1); //just before of Contract End Date

      // find the object as per index and update the data
      this.findIndexAndUpdateData(event, "EndDofC", index);
    } else {
      this.contract["deadline"] = event;
    }
  }

  // convert object date into string date for moment js
  makeDateTOStringFormat(obj) {
    let arr = Object.values(obj);

    let final: any = [arr[0]];

    for (let item = 1; item < arr.length; item++) {
      final.push("-", arr[item]);
    }
    return final.join("");
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

  //Generic method for select file
  onSelectFile(event, type) {
    console.log("type", event.target.files);
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          console.log(event.target.result);
          type == "FIX "
            ? this.fixContractFile.push(event.target.result)
            : this.legalDepartFile.push(event.target.result);
        };
      }
    }
  }

  // Generic method for upload file
  upload() {
    let fd = new FormData();
    this.legalDepartFile.forEach((file) => {
      fd.append("legalDepartFile", file, file.name);
    });
    //post call
    // this.http.post('endpointURI', formData)
    // .subscribe(res => console.log(res));
    //  }

    this.fixContractFile.forEach((file) => {
      fd.append("fixContractFile", file, file.name);
    });

    //post call
    // this.http.post('endpointURI', formData)
    // .subscribe(res => console.log(res));
    //  }
  }

  ngOnInit() {
  }

  addContrcat() {
    this.contractContentArr.push({
      id: Date.now(),
      renewal: "New",
      contractType: "",
      contractName: "",
      contractItem: "",
      contractor: "",
      beginDofC: "",
      EndDofC: "",
      autoUpd: "",
      alerRelDate: "",
      relateContNum: "",
      isJapan: false,
      isUS: false,
      isChina: false,
      isTaiwan: false,
      isIndia: false,
      isEurope: false,
      isOther: false,
      extConsult: "no",
      fixVersion: "",
    });

    this.countmethd();
    setTimeout(()=>{
      let fromTop = 1500 * this.contractContentArr.length;
      console.log('fromTop', fromTop);
      window.scrollTo({ top: fromTop, left: 0, behavior: 'smooth' });
    },100)


  }

  countmethd() {
    this.count += 1;
  }

  removeContract(index: number): void {
    console.log("indexxx", index);
    this.contractContentArr.splice(index, 1);
  }
  changeHandler(event, type, index) {
    this.contract["arrayOfContractContent"] =
      type == "renewal"
        ? this.findIndexAndUpdateData(event.target.value, type, index)
        : this.findIndexAndUpdateData(event.target.value, type, index);
    console.log("target", this.contract);
  }

  existHandler(e) {
    console.log("target---", e.target.value);
  }
  load() {
    this.upload();
    this.contract["arrayOfContractContent"] = this.contractContentArr;
  }
  openPrintPage(){
    event.preventDefault();
    this.router.navigate(['/contractPrint']);
  }

  onSubmit(form) {
    this.contract["arrayOfContractContent"] = this.contractContentArr;
    console.log(this.contract);
    if (
      this.contract.projectName &&
      this.contract.applicant &&
      this.contract.deadline &&
      this.contract.concern &&
      this.contract.selectedStatus &&
      this.contract.arrayOfContractContent[0].renewal &&
      this.contract.arrayOfContractContent[0].contractType &&
      this.contract.arrayOfContractContent[0].contractor &&
      this.contract.arrayOfContractContent[0].alerRelDate
    ) {
      console.log("form is valid");
      this.load();
    } else {
      console.log("form is invalid");
    }
  }
}
