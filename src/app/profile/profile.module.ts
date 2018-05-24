import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutesModule } from "./profile-routes.module";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { AddressesComponent } from "./addresses/addresses.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    AddressesComponent,
    FavouritesComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,SharedModule, ProfileRoutesModule],
  providers: []
})
export class ProfileModule {}
