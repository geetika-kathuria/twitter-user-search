import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';

const routes: Routes = [{
  path: '',
  component: UserSearchComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
