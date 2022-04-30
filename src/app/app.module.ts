import { NavigationService } from 'src/app/services/navigation.service';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { RandomSlideGeneratorService } from './services/random-slide-generator.service';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { RouterModule } from '@angular/router';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { CorporateInfoComponent } from './components/corporate-info/corporate-info.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { MachineParkourComponent } from './components/machine-parkour/machine-parkour.component';
import { DownloadableContentComponent } from './components/downloadable-content/downloadable-content.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaviComponent,
    FooterComponent,
    AboutUsComponent,
    GalleryComponent,
    ReferencesComponent,
    ContactComponent,
    OurServicesComponent,
    AccountInfoComponent,
    CorporateInfoComponent,
    CookiePolicyComponent,
    MachineParkourComponent,
    DownloadableContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RandomSlideGeneratorService, NavigationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
