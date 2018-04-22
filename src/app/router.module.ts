import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";



import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


const appRouter: Routes = [
];


@NgModule({
  imports: [RouterModule.forRoot(appRouter)],

  exports: [RouterModule]
})
export class AppRouterModule {}
