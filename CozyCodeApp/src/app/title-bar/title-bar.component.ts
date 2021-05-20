import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  braces = "{ }";
  aboutView:boolean = true;
  @Output() aboutEvent = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  aboutBoxToggle($event){
    this.aboutEvent.emit(this.aboutView);
    this.aboutView = !this.aboutView;
  }
}
