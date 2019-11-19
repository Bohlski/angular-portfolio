import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectComponent } from './components/project/project.component';


@NgModule({
  declarations: [PortfolioComponent, ProjectDetailsComponent, ProjectComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
