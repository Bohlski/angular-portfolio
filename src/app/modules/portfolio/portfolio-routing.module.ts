import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', pathMatch: 'full', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
