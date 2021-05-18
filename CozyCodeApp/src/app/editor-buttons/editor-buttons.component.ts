import { Component,Output,EventEmitter,AfterViewInit } from '@angular/core';


@Component({
  selector: 'editor-buttons',
  templateUrl: './editor-buttons.component.html',
  styleUrls: ['./editor-buttons.component.css']
})
export class EditorButtonsComponent implements AfterViewInit {

  constructor() { }

  @Output() clearEvent = new EventEmitter();
  @Output() runEvent = new EventEmitter();
  ngAfterViewInit():void {
    document.getElementById("run").style.backgroundColor="#23D160";
    document.getElementById("run").style.color="#f5f5f5";
    document.getElementById("run").style.borderColor="#23D160";

    document.getElementById("clear").style.backgroundColor="#BD2130";
    document.getElementById("clear").style.borderColor="#BD2130";
    document.getElementById("clear").style.color="#f5f5f5";
  }
  sendClearInst(){
    this.clearEvent.emit(null);
  }
  runCode(){
    document.getElementById("run").innerText = "Running...";
    (<HTMLInputElement> document.getElementById("run")).disabled = true;
    this.runEvent.emit(null);
  }
  
}
