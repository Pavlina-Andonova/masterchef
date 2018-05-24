import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { AddressesComponent } from "./addresses/addresses.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { ProfileComponent } from "./profile.component";

const profileRoutes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      { path: "", redirectTo: "/personalInformation", pathMatch: 'full'},
      { path: "personalInformation", component: PersonalInformationComponent },
      { path: "addresses", component: AddressesComponent },
      { path: "favourites", component: FavouritesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutesModule {}
