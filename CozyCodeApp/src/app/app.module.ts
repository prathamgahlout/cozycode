import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditorButtonsComponent } from './editor-buttons/editor-buttons.component';
import { LangBarComponent } from './lang-bar/lang-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { IoAreaComponent } from './io-area/io-area.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditorButtonsComponent,
    LangBarComponent,
    TitleBarComponent,
    IoAreaComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    //RouterModule.forRoot([
      //{path: 'about',component:AboutComponent},
      //{path: '/',component:AppComponent}
    //]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
