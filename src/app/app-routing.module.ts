import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { ContactComponent } from './components/contact/contact.component';
import { CookiePolicyComponent } from './components/cookie-policy/cookie-policy.component';
import { CorporateInfoComponent } from './components/corporate-info/corporate-info.component';
import { DownloadableContentComponent } from './components/downloadable-content/downloadable-content.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { MachineParkourComponent } from './components/machine-parkour/machine-parkour.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { ReferencesComponent } from './components/references/references.component';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy-service.service';

export const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  useHash: true,
  preloadingStrategy: CustomPreloadingStrategyService
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    data: {preload: true}
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'references',
    component: ReferencesComponent,
  },
  {
    path: 'our-services/:elementId',
    component: OurServicesComponent,
  },
  {
    path: 'our-services',
    component: OurServicesComponent,
  },
  {
    path: 'account-info',
    component: AccountInfoComponent,
  },
  {
    path: 'cookie-policy',
    component: CookiePolicyComponent,
  },
  {
    path: 'corporate-info',
    component: CorporateInfoComponent,
  },
  {
    path: 'machine-parkour',
    component: MachineParkourComponent,
  },
  {
    path: 'downloadable-content',
    component: DownloadableContentComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
