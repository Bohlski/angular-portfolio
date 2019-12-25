import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'portfolio', pathMatch: 'full', redirectTo: 'portfolio' }, // /?
  { path: 'blog', pathMatch: 'full', redirectTo: 'blog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
