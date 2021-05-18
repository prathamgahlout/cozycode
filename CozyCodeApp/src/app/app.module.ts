import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditorButtonsComponent } from './editor-buttons/editor-buttons.component';
import { LangBarComponent } from './lang-bar/lang-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { IoAreaComponent } from './io-area/io-area.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditorButtonsComponent,
    LangBarComponent,
    TitleBarComponent,
    IoAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
