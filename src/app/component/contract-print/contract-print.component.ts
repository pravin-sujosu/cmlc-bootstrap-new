import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contract-print',
  templateUrl: './contract-print.component.html',
  styleUrls: ['./contract-print.component.css']
})
export class ContractPrintComponent implements OnInit, AfterViewInit {

  ja : boolean = false;
  en:boolean = false;
  constructor(private translateService: TranslateService) {
      //check the current browser language
      let browserLang = translateService.getBrowserLang();
      console.log("browser lang : " + browserLang);
      browserLang == 'ja' ? (this.ja = true) : (this.en=true);

   }

  ngOnInit() {

  }
  ngAfterViewInit(){
    window.print();
  }

}
