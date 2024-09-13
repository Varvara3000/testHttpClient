import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsDetailsComponent} from "./cards-details/cards-details.component";
import {CardsComponent} from "./cards/cards.component";

const routes: Routes = [
  {path:'',redirectTo:'cards',pathMatch:'full'},
  {path:'cards',component:CardsComponent},
  {path:'cards/:id',component:CardsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
