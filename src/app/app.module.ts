import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {Routes, RouterModule} from "@angular/router";
import {PlanningOverviewComponent} from "./Components/planning/planning-overview/planning-overview.component";
import { HomeComponent } from './Components/home/home/home.component';
import { PlanningHomeComponent } from './Components/planning/planning-home/planning-home.component';
import { EventAanmakenComponent } from './Components/planning/event-aanmaken/event-aanmaken.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { EventListComponent } from './Components/planning/event-list/event-list.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path: 'planning', component: PlanningHomeComponent,
    children: [
      {path: 'overview', component:PlanningOverviewComponent},
      {path: 'eventlijst', component:EventListComponent},
      {path: 'nieuwevent', component: EventAanmakenComponent}
    ]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanningHomeComponent,
    PlanningOverviewComponent,
    EventAanmakenComponent,
    ToolbarComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
