import {
  Component,
  OnInit,
  AfterViewInit,
  HostBinding,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  


  constructor() { }

  ngOnInit() {
  }

  setToggle(val){
    if(val)
    document.getElementById("aboutbox").style.display="block";
    else
    document.getElementById("aboutbox").style.display="none";
  }

}