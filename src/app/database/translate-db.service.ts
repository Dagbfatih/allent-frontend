import { Injectable } from '@angular/core';
import { DbServiceRepositoryBase } from '../core/database/db.service.repository.base';
import { Translate } from '../models/entities/translate';

@Injectable({
  providedIn: 'root',
})
export class TranslateDbService extends DbServiceRepositoryBase<Translate> {
  data: Translate[] = [
    {
      id: 1,
      languageId: 1,
      key: 'home',
      value: 'Anasayfa',
    },
    {
      id: 2,
      languageId: 2,
      key: 'home',
      value: 'Home',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUs',
      value: 'Hakkımızda',
    },
    {
      id: 4,
      languageId: 2,
      key: 'aboutUs',
      value: 'About Us',
    } /* --------------------- */,
    {
      id: 5,
      languageId: 1,
      key: 'gallery',
      value: 'Galeri',
    },
    {
      id: 6,
      languageId: 2,
      key: 'gallery',
      value: 'Gallery',
    } /* --------------------- */,
    {
      id: 7,
      languageId: 1,
      key: 'references',
      value: 'Referanslar',
    },
    {
      id: 8,
      languageId: 2,
      key: 'references',
      value: 'References',
    } /* --------------------- */,
    {
      id: 9,
      languageId: 1,
      key: 'contact',
      value: 'İletişim',
    },
    {
      id: 10,
      languageId: 2,
      key: 'contact',
      value: 'Contact',
    } /* --------------------- */,
    {
      id: 9,
      languageId: 1,
      key: 'contactUs',
      value: 'Bize Ulaşın',
    },
    {
      id: 10,
      languageId: 2,
      key: 'contactUs',
      value: 'Contact Us',
    } /* --------------------- */,
    {
      id: 11,
      languageId: 1,
      key: 'settings',
      value: 'Ayarlar',
    },
    {
      id: 12,
      languageId: 2,
      key: 'settings',
      value: 'Settings',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'language',
      value: 'Dil',
    },
    {
      id: 14,
      languageId: 2,
      key: 'language',
      value: 'Language',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'languages',
      value: 'Diller',
    },
    {
      id: 14,
      languageId: 2,
      key: 'languages',
      value: 'Languages',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'selectLanguage',
      value: 'Dil Seçin',
    },
    {
      id: 14,
      languageId: 2,
      key: 'selectLanguage',
      value: 'Select Language',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'whoAreWe',
      value: 'Biz Kimiz',
    },
    {
      id: 14,
      languageId: 2,
      key: 'whoAreWe',
      value: 'Who Are We',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'ourServices',
      value: 'Hizmetlerimiz',
    },
    {
      id: 14,
      languageId: 2,
      key: 'ourServices',
      value: 'Our Services',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'founder',
      value: 'Kurucu',
    },
    {
      id: 14,
      languageId: 2,
      key: 'founder',
      value: 'Founder',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'ourTeam',
      value: 'Takımımız',
    },
    {
      id: 14,
      languageId: 2,
      key: 'ourTeam',
      value: 'Our Team',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'coFounders',
      value: 'Kurucular',
    },
    {
      id: 14,
      languageId: 2,
      key: 'coFounders',
      value: 'Co-Founders',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'goCompanyWebsite',
      value: 'Şirkete Git',
    },
    {
      id: 14,
      languageId: 2,
      key: 'goCompanyWebsite',
      value: 'Go Company',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'learnMore',
      value: 'Daha Fazla',
    },
    {
      id: 14,
      languageId: 2,
      key: 'learnMore',
      value: 'Learn More',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'social',
      value: 'Sosyal',
    },
    {
      id: 14,
      languageId: 2,
      key: 'social',
      value: 'Social',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'links',
      value: 'Linkler',
    },
    {
      id: 14,
      languageId: 2,
      key: 'links',
      value: 'Links',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'address',
      value: 'Adres',
    },
    {
      id: 14,
      languageId: 2,
      key: 'address',
      value: 'Address',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'phone',
      value: 'Telefon',
    },
    {
      id: 14,
      languageId: 2,
      key: 'phone',
      value: 'Phone',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'gsm',
      value: 'GSM',
    },
    {
      id: 14,
      languageId: 2,
      key: 'gsm',
      value: 'GSM',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'email',
      value: 'Email',
    },
    {
      id: 14,
      languageId: 2,
      key: 'email',
      value: 'Email',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'location',
      value: 'Konum',
    },
    {
      id: 14,
      languageId: 2,
      key: 'location',
      value: 'Location',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePage',
      value: 'Ana Sayfa',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePage',
      value: 'Home Page',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'menu',
      value: 'Menü',
    },
    {
      id: 14,
      languageId: 2,
      key: 'menu',
      value: 'Menu',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'ourCoFounder',
      value: 'Kurucumuz',
    },
    {
      id: 14,
      languageId: 2,
      key: 'ourCoFounder',
      value: 'Our Co-Founder',
    } /* --------------------- */,
  ];
}
