import { AboutComponent } from './about/about.component';
import { EditorComponent } from './editor/editor.component';
import { IoAreaComponent } from './io-area/io-area.component';
import { Component, ViewChild,EventEmitter,Output } from '@angular/core';
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
  @ViewChild(AboutComponent,{static:false})
  private aboutComp: AboutComponent;
  
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
  setIOTheme($event){
    this.ioareacomp.inputAceEditor.setTheme('ace/theme/'+$event);
    this.ioareacomp.outputAceEditor.setTheme('ace/theme/'+$event);
  }
  toggleAboutPanel($event){
    this.aboutComp.setToggle($event);
  }
  
}
