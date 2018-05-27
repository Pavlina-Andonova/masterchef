import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { MenuComponent } from "./menu/menu.component";
import { AuthGuardService } from "./auth/auth-guard.service";
import { PersonalInformationComponent } from "./profile/personal-information/personal-information.component";
import { AddressesComponent } from "./profile/addresses/addresses.component";
import { FavouritesComponent } from "./profile/favourites/favourites.component";
import { MenuListItemDetailComponent } from "./menu/menu-list/menu-list-item/menu-list-item-detail/menu-list-item-detail.component";
import { OrdersComponent } from "./orders/orders.component";


const appRouter: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "menu", component: MenuComponent },
  { path: 'menu/:id', component: MenuListItemDetailComponent },
  { path: 'orders', component: OrdersComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  // { path: 'myProfile', component: ProfileComponent, canActivate: [AuthGuardService]}
  { path: 'myProfile', component: ProfileComponent, canActivate: ['AuthGuard'], children: [
    { path: "", redirectTo: "/personalInformation", pathMatch: 'full'},
    { path: "personalInformation", component: PersonalInformationComponent },
    { path: "addresses", component: AddressesComponent },
    { path: "favourites", component: FavouritesComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],

  exports: [RouterModule]
})
export class AppRouterModule {}
