import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRouterModule } from "./router.module";
import { AuthModule } from "./auth/auth.module";
import { MenuModule } from "./menu/menu.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SharedModule } from "./shared/shared.module";
import { ProfileModule } from "./profile/profile.module";
import { OrdersModule } from "./orders/orders.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    AppRouterModule,
    AuthModule,
    MenuModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProfileModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
