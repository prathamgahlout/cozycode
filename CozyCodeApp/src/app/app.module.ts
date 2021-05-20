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
import { Ace } from 'ace-builds';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

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
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    //RouterModule.forRoot([
      //{path: 'about',component:AboutComponent},
      //{path: '/',component:AppComponent}
    //]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
