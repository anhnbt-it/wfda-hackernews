import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar-primary',
  templateUrl: './toolbar-primary.component.html',
  styleUrls: ['./toolbar-primary.component.css']
})
export class ToolbarPrimaryComponent implements OnInit {

  @ViewChild('drawer', {static: false}) drawer: MatDrawer;

  isOpen = true;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.drawer);
  }

}
