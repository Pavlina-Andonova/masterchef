import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutesModule } from "./profile-routes.module";
import { PersonalInformationComponent } from "./personal-information/personal-information.component";
import { AddressesComponent } from "./addresses/addresses.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { SharedModule } from "../shared/shared.module";
import { FavouritesService } from "./favourites/favourites.service";
import { ProfileService } from "./profile.service";
import { FavouriteItemComponent } from './favourites/favourite-item/favourite-item.component';
import { AddressFormComponent } from './addresses/address-form/address-form.component';
import { SingleAddressComponent } from "./addresses/single-address/single-address.component";

@NgModule({
  declarations: [
    ProfileComponent,
    PersonalInformationComponent,
    FavouritesComponent,
    FavouriteItemComponent,
    AddressesComponent,
    AddressFormComponent,
    SingleAddressComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,SharedModule, ProfileRoutesModule],
  providers: [FavouritesService, ProfileService]
})
export class ProfileModule {}
