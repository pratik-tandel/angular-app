import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListTwoComponent } from './user/user-list-two/user-list-two.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-list-two',
    component: UserListTwoComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-detail',
        pathMatch: 'full'
      },
      {
        path: 'user-detail',
        component: UserDetailComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
