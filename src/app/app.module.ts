import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { RandomMoldServiceService } from './services/random-mold-service.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFweyUfI7ZqBnsQE2GOfwusX5HzbaU7mk',
    }),
  ],
  providers: [RandomMoldServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
