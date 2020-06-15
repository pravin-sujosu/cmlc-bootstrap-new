import { Component, OnInit, HostListener } from "@angular/core";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
declare var $: any;

@Component({
  selector: "app-case-mgmt",
  templateUrl: "./case-mgmt.component.html",
  styleUrls: ["./case-mgmt.component.css"],
})
export class CaseMgmtComponent implements OnInit {
  caseMgmt: any | NgbDateStruct = { contract: "Dummy Text", acceptTerms: true };
  placement = "bottom";
  contractTypes: any = ["Dummy Text", "Dummy Text", "Dummy Text"];
  constructor() {}
  statusArr = [
    "Creating",
    "Requesting",
    "Receiving",
    "Corresponding to Legal department",
    "Applicant responding",
    "Responding to Legal department",
    "Contract signed",
    "Completed",
    "Cancelled",
  ];
  statusArray = [
    { name: "CREATING", value: "1", checked: true },
    { name: "REQUESTING", value: "2", checked: false },
    { name: "RECEIVING", value: "3", checked: false },
    { name: "CORRESPONDING_DEPARTMENT", value: "4", checked: false },
    { name: "APPLICANT_RESPONDING", value: "5", checked: false },
    { name: "RESPONDING_DEPARTMENT", value: "6", checked: false },
    { name: "CONTRACT_SIGNED", value: "7", checked: false },
    { name: "COMPLETED", value: "8", checked: false },
    { name: "CANCELLED", value: "9", checked: false },
  ];

  ngOnInit() {
    scrolltodiv();
    function scrolltodiv() {
      var window_width = screen.width;
      if (window_width > 768) {
        var cloneElement = document.getElementsByClassName(
          "clone"
        ) as HTMLCollectionOf<HTMLElement>;
        console.log(cloneElement.length);
        if (cloneElement.length > 0) {
          cloneElement[0].style.display = "table";
        } else {
          var original = document.getElementsByClassName("case-table");
          var clone = original[0].cloneNode(true);
          var appendedSection = document.getElementById("table-scroll");
          appendedSection.appendChild(clone);
          original[1].classList.add("table-responsive");
          original[1].classList.add("clone");
        }
      } else {
        var cloneElement = document.getElementsByClassName(
          "clone"
        ) as HTMLCollectionOf<HTMLElement>;
        cloneElement[0].style.display = "none";
      }
    }
  }
  isAtleastOneItemSelected() {
    const selectedItems = this.statusArray.filter((item) => item.checked);
    if (selectedItems.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  onSubmit() {
    this.isAtleastOneItemSelected();
    console.log("case0-mgmt", this.caseMgmt);
  }
}
