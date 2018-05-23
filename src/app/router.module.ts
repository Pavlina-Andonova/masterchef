import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';


const appRouter: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu',component: MenuComponent},
  // { path: 'menu/:id', component: MenuItemDetailComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'myProfile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],

  exports: [RouterModule]
})
export class AppRouterModule {}
