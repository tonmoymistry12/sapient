import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltersComponent } from './views/filters/filters.component';
import { MissionDetailsComponent } from './views/mission-details/mission-details.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './views/loader/loader.component';
import { httpInterceptProviders } from 'src/util/httpInterceptProviders';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    MissionDetailsComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
  ],
  providers: [httpInterceptProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
