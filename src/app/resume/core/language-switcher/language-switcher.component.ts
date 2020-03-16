import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'cv-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(private readonly translate: TranslateService) {
  }

  ngOnInit() {
  }

  onFlagClick(fr: string) {
    this.translate.use(fr);
  }
}
