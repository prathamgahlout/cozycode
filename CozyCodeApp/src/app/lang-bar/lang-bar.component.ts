import { Component, OnInit,Output, EventEmitter,AfterViewInit } from '@angular/core';

@Component({
  selector: 'lang-bar',
  templateUrl: './lang-bar.component.html',
  styleUrls: ['./lang-bar.component.css']
})
export class LangBarComponent implements OnInit,AfterViewInit {
  supportedLangs: string[] = ["JAVA","C","C++","JavaScript","Python","Ruby","C#"];
  constructor() { }

  @Output() modeEvent = new EventEmitter<String>();

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    setTimeout(()=>this.setLangMode(this.supportedLangs[0]),500);
  }
  setLangMode(lang:string){
    this.supportedLangs.forEach(element => {
      if(element==lang){
        document.getElementById(lang).style.backgroundColor = "#FF4141";
        document.getElementById(lang).style.color = "#f5f5f5";
        document.getElementById(lang).style.borderColor = "#FF4141";
      }else{
        document.getElementById(element).style.backgroundColor = "#222222";
        document.getElementById(element).style.color = "#f5f5f5";
        document.getElementById(element).style.borderColor = "#222222";
      }
    });
    let s = lang.toLowerCase();
    if(s=="c++")
    s="cpp";
    this.modeEvent.emit(s);
    
  }
}
