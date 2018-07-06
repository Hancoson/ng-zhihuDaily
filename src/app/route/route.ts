import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { ItemsComponent } from './../components/items/items.component';
import { DetailComponent } from './../components/detail/detail.component';

const myRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'detail/:id', component: DetailComponent }
];

export const appRoutes = RouterModule.forRoot(
  myRoute,
  { enableTracing: true }
)
