import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { HomeInfoComponent } from './home-info/home-info.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { StoryInfoComponent } from './story-info/story-info.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { RsvpInfoComponent } from './rsvp-info/rsvp-info.component';
import { RegistryInfoComponent } from './registry-info/registry-info.component';
import { CrewInfoComponent } from './crew-info/crew-info.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { WeddingInfoComponent } from './wedding-info/wedding-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInfoComponent,
    NavComponentComponent,
    StoryInfoComponent,
    TravelInfoComponent,
    RsvpInfoComponent,
    RegistryInfoComponent,
    CrewInfoComponent,
    InfoComponentComponent,
    WeddingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
