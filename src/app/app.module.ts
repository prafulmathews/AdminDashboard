import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotcolorComponent } from './botcolor/botcolor.component';
import { DefaultComponent } from './default/default.component';
import { BoxshapeComponent } from './boxshape/boxshape.component';
import { BotnameComponent } from './botname/botname.component';
import { FormsModule } from '@angular/forms';
import { BotavatarComponent } from './botavatar/botavatar.component';
import { RuleengineComponent } from './ruleengine/ruleengine.component';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
