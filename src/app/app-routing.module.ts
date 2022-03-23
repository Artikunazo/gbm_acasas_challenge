import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('@main/dashboard/dashboard.module')
          .then(m => m.DashboardModule)
      },
      {
        path: 'piece-of-cake',
        loadChildren: () => import('@piece-of-cake/piece-of-cake.module')
          .then(m => m.PieceOfCakeModule)
      },
      {
        path: 'lets-rock',
        loadChildren: () => import('@lets-rock/lets-rock.module')
          .then(m => m.LetsRockModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
