import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './modules/blog/blog.module';
import { CoreModule } from './core/core.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ProjectsService } from './core/services/projects.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BlogModule,
    PortfolioModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
