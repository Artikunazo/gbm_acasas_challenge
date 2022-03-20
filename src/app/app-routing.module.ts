import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PiceOfCakeModule } from './pice-of-cake/pice-of-cake.module';

const routes: Routes = [
  {
    path: '',
    // Cal to main component
    children: [
      {
        path: 'pice-of-cake',
        loadChildren: () => import('@pice-of-cake/pice-of-cake.module')
          .then(m => m.PiceOfCakeModule)
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
    // Show bad request page
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
