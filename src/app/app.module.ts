import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { SlidderComponent } from './slidder/slidder.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { PlantsComponent } from './cards/plants/plants.component';
import { SeedsComponent } from './cards/seeds/seeds.component';
import { FertilizersComponent } from './cards/fertilizers/fertilizers.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { Agriculture1Component } from './agriculture1/agriculture1.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Slidder1Component } from './slidder1/slidder1.component';
import { FarmingComponent } from './agriculture1/farming/farming.component';

@NgModule({
  declarations: [
    AppComponent,
    AgricultureComponent,
    PagenotfoundComponent,
    NavbarComponent,
    BannerComponent,
    CardsComponent,
    SlidderComponent,
    FaqComponent,
    FooterComponent,
    PlantsComponent,
    SeedsComponent,
    FertilizersComponent,
    SignupComponent,
    Agriculture1Component,
    Navbar1Component,
    Slidder1Component,
    FarmingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
