import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as ace from "ace-builds";

@Component({
  selector: 'io-area',
  templateUrl: './io-area.component.html',
  styleUrls: ['./io-area.component.css']
})

export class IoAreaComponent implements AfterViewInit {
  inputAceEditor;
  outputAceEditor;
  outputdata="Empty";
  constructor() { }
  
  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  @ViewChild("editor2") private editor2: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "16px");

    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict/');

    this.inputAceEditor = ace.edit(this.editor.nativeElement);
    this.inputAceEditor.setShowPrintMargin(false);
    this.inputAceEditor.setTheme('ace/theme/twilight');

    this.outputAceEditor = ace.edit(this.editor2.nativeElement);
    this.outputAceEditor.setShowPrintMargin(false);
    this.outputAceEditor.setTheme('ace/theme/twilight');
    this.outputAceEditor.setReadOnly(true);
  }

  setOutput($event){
    console.log("event trig: "+$event);
    this.outputdata=$event;
  }

}
