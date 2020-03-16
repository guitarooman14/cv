import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'cv-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.scss']
})
export class ToolbarContainerComponent implements OnInit {
  @Input() isOpened;

  constructor() {
  }

  ngOnInit() {
  }

}
