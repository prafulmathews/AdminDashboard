import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotcolorComponent } from './botcolor/botcolor.component';
import { DefaultComponent } from './default/default.component';
import { BoxshapeComponent } from './boxshape/boxshape.component';
import { BotnameComponent } from './botname/botname.component';
import { BotavatarComponent } from './botavatar/botavatar.component';
import { RuleengineComponent } from './ruleengine/ruleengine.component';
const routes: Routes = [
  
  {path: '', redirectTo:'default', pathMatch:'full'},
  {path:'botcolor', component: BotcolorComponent},
  {path:'default', component:DefaultComponent},
  {path:'botshape', component:BoxshapeComponent},
  {path: 'botname', component:BotnameComponent},
  {path: 'botavatar', component:BotavatarComponent},
  {path: 'ruleengine', component:RuleengineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
