import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectComponent } from './components/project/project.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PortfolioComponent, ProjectDetailsComponent, ProjectComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
