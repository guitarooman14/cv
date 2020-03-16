import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {
  isOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isOpened = !this.isOpened;
  }

}
