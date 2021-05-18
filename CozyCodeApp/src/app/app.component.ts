import { EditorComponent } from './editor/editor.component';
import { IoAreaComponent } from './io-area/io-area.component';
import { Component, ViewChild } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService:Title){
    this.titleService.setTitle("cozyCODE");
  }
  title = 'CozyCode';
  @ViewChild(IoAreaComponent,{static:false})
  private ioareacomp: IoAreaComponent;
  @ViewChild(EditorComponent,{static:false})
  private editorComp: EditorComponent;
  setOutput($event){
    document.getElementById("run").innerText = "RUN";
    (<HTMLInputElement> document.getElementById("run")).disabled = false;
    this.ioareacomp.outputAceEditor.session.setValue($event);
    
  }
  getInput($event){
    var s =this.ioareacomp.inputAceEditor.getValue();
    if(s=='')return;
    this.editorComp.cmd_input=s;
  }
}
