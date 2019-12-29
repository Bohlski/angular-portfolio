import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './modules/blog/blog.module';
import { CoreModule } from './core/core.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { ProjectsService } from './core/services/projects.service';
import { BlogService } from './core/services/blog.service';

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
  providers: [ProjectsService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
