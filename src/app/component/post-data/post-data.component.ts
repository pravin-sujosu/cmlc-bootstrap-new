import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

  importCaseData :any = {};
  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event, fileName){
    console.log(event, fileName);

  }
  onSubmit(e){
    console.log(e);

  }

}
