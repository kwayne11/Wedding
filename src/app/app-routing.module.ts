import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeInfoComponent } from './home-info/home-info.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { StoryInfoComponent } from './story-info/story-info.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';
import { RsvpInfoComponent } from './rsvp-info/rsvp-info.component';
import { RegistryInfoComponent } from './registry-info/registry-info.component';
import { CrewInfoComponent } from './crew-info/crew-info.component';
import { InfoComponentComponent } from './info-component/info-component.component';
import { WeddingInfoComponent } from './wedding-info/wedding-info.component';

const routes: Routes = [
  { path: 'home',           component: HomeInfoComponent },
  { path: 'our-story',      component: StoryInfoComponent },
  { path: 'travel',         component: TravelInfoComponent },
  { path: 'our-wedding',    component: WeddingInfoComponent },
  { path: 'crew',           component: CrewInfoComponent },
  { path: 'registry',       component: RegistryInfoComponent },
  { path: 'rsvp',           component: RsvpInfoComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
