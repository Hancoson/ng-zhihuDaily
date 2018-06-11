import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { ItemsComponent } from './../components/items/items.component';

const myRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent }
];

export const appRoutes = RouterModule.forRoot(
  myRoute,
  { enableTracing: true }
)
