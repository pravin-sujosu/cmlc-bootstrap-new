import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMLC';

  constructor(private translateService: TranslateService) {

    // dafault language
    translateService.setDefaultLang('en');

    //check the current browser language
    let browserLang = translateService.getBrowserLang();
    console.log("browser lang : " + browserLang);

    // translate language based on browser language setting
    translateService.use(browserLang)


   }
}
