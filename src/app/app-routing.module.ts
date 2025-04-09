import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TalkerComponent } from './talker/talker.component';
import { CookingComponent } from './cooking/cooking.component';
import { PeopleComponent } from './people/people.component';
import { EventsComponent } from './events/events.component';
import { LifeComponent } from './life/life.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'talker', component: TalkerComponent },
  { path: 'cooking', component: CookingComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'events', component: EventsComponent },
  { path: 'life', component: LifeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
