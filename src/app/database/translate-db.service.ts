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
      key: 'ourFounder',
      value: 'Kurucumuz',
    },
    {
      id: 14,
      languageId: 2,
      key: 'ourFounder',
      value: 'Our Founder',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'addressFromDb',
      value: 'Fevzi Çakmak Mh. 10644 Sk. No:46/G Karatay/Konya',
    },
    {
      id: 14,
      languageId: 2,
      key: 'addressFromDb',
      value: ' Fevzi Cakmak Dist. 10644 St. No:46/G Karatay/Konya',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'gsmFromDb',
      value: '+90 542 519 09 40',
    },
    {
      id: 14,
      languageId: 2,
      key: 'gsmFromDb',
      value: '90 555 481 6282',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'phoneNumberFromDb',
      value: '+90 332 345 06 95',
    },
    {
      id: 14,
      languageId: 2,
      key: 'phoneNumberFromDb',
      value: '+90 332 345 06 95',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'email1FromDb',
      value: 'dagbulent@hotmail.com',
    },
    {
      id: 14,
      languageId: 2,
      key: 'email1FromDb',
      value: 'dagbulent@hotmail.com',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'email2FromDb',
      value: 'info@allentplastik.com',
    },
    {
      id: 14,
      languageId: 2,
      key: 'email2FromDb',
      value: 'export@allentplastik.com',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1Lead',
      value: 'Plastik Enjeksiyon Kalıpçılığı',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1Lead',
      value: 'Manufacture of Plastic Products',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1LeadTextMuted',
      value: 've Yılların Tecrübesi',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1LeadTextMuted',
      value: 'and Years of Experience',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1',
      value:
        'Müşterilerimizin ihtiyaç duyduğu plastik enjeksiyon kalıplarını mühendislik yaklaşımıyla ve kaliteden ödün vermeden yapıyoruz. Sahip olduğumuz ürün geliştirme tecrübesi sayesinde talep edilen kalıpların üretiminden önce müşterilerimizi olası sorunlar hakkında bilgilendiriyoruz ve yönlendiriyoruz. Uzun yıllar başarıyla yaptığımız kalıp türleri;',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1',
      value:
        'We make the plastic injection molds requested by our customers with an engineering approach and without compromising high quality standards. Thanks to our product development experience, we inform and direct our customers about possible problems before the production of the requested molds. The mold types we have successfully made for many years are as follow: ',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1/l1',
      value: 'Plastik su filtrelerine ait parçalar',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1/l1',
      value: 'Parts of plastic water filters',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1/l2',
      value: 'Plastik boru ek parçaları',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1/l2',
      value: 'Fittings and attachments for plastic pipes',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP1/l3',
      value: 'İnce cidarlı rijit plastik ambalajlar',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP1/l3',
      value: 'Thin-walled rigid plastic packages',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2Lead',
      value: 'Endüstriyel Ürün Geliştirme',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2Lead',
      value: 'Industrial Product Development',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2',
      value:
        'Üretilebilir, uygun maliyetli, kullanışlı, estetik, mukavemetli, işlevsel, uzun ömürlü, ergonomik, farklı ve özgün ürün tasarımlarına ihtiyacınız varsa bizimle iletişime geçebilirsiniz. Bugüne kadar tecrübe etme imkânı bulduğumuz birkaç örnek; ',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2',
      value:
        'You can contact us if you need producible, cost-effective, useful, aesthetic, strong, functional, durable, ergonomic, different and unique product designs. A few examples from our work so far as follow: ',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2/l1',
      value: 'Plastik hidrosiklon tasarımı ve akış analizleri',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2/l1',
      value: 'Plastic hydrocyclone design and flow analysis',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2/l2',
      value: 'Plastik venturi tasarımı ve akış analizleri',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2/l2',
      value: 'Plastic venturi (diffuser) design and flow analysis',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2/l3',
      value:
        'Büyük hacimli, basınca dayanıklı, enjeksiyonluk plastik tank tasarımı ve mukavemet analizleri',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2/l3',
      value:
        'Large volume, pressure resistant, plastic injection tank design and its strength analysis',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP2/l4',
      value: 'Plastik kelepçe tasarımı ve mukavemet analizleri',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP2/l4',
      value: 'Plastic clamp design and its strength analysis',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP3Lead',
      value: 'Plastik Ürün Üretimi',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP3Lead',
      value: 'Manufacture of Plastic Products',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP3LeadTextMuted',
      value: 'Siz Hayal Edin Biz Yapalım.',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP3LeadTextMuted',
      value: 'You Dream We Do',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'homePageP3',
      value:
        'Sadece ürün tasarımı veya ürünün kalıplanması değil de nihai ürün ihtiyacınız varsa bizimle iletişime geçebilirsiniz. Siz hayal edin biz yapalım.',
    },
    {
      id: 14,
      languageId: 2,
      key: 'homePageP3',
      value:
        'Manufacture of Plastic Products If you need a final product, not just product design or molding, you can still contact us. You imagine it, we realize it!',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'footerDescriptionFromDb',
      value:
        "Allent Plastik Kalıp Sanayi Ticaret Limited Şirketi, 2019 yılında Konya' da Mak. Müh. Bülent Dağ tarafından iki ortaklı olarak kurulmuştur.",
    },
    {
      id: 14,
      languageId: 2,
      key: 'footerDescriptionFromDb',
      value:
        'Allent Plastic Mold Industry Trade Limited Company, in 2019 in Konya, Mak. Eng. It was established by Bülent Dağ as two partners.',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsPFromDb',
      value:
        "Allent Plastik Kalıp Sanayi Ticaret Limited Şirketi, 2019 yılında Konya' da Mak. Müh. Bülent Dağ tarafından iki ortaklı olarak kurulmuştur. 2002 yılından bu yana plastik ürün tasarımı ve bu ürünlerin kalıplanması konularında faaliyet göstermenin kazandırdığı iş tecrübesini siz değerli müşterilerimizin istifadesine sunuyoruz.",
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsPFromDb',
      value:
        'Allent Plastic Molding Industry and Trade Limited Company was established in Konya in 2019 by Mechanical Engineer Bülent Dağ with two partners. We offer the business experience gained by working in the fields of plastic product design and molding of these products since 2002, to the benefit of our valued customers.',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsOurServices',
      value:
        'Tecrübelerimize dayanarak müşterilerimize sunduğumuz hizmetlerimiz; ',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsOurServices',
      value: 'The services we offer to our customers based on our experience:',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsOurServices/l1',
      value: 'İnce cidarlı rijit plastik ambalajların tasarımı ve kalıplanması',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsOurServices/l1',
      value: 'Design and molding of thin-walled rigid plastic packages',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsOurServices/l2',
      value:
        'Plastik ve/veya metal manuel/yarı otomatik/otomatik filtrelerin tasarımı ve kalıplanması',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsOurServices/l2',
      value:
        'Design and molding of plastic and / or metal manual / semi-automatic / automatic filters',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsOurServices/l3',
      value:
        'Her türden plastik parçaların mühendislik yaklaşımıyla tasarlanması/analizlerinin yapılması',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsOurServices/l3',
      value:
        'Designing / analyzing all kinds of plastic parts with an engineering approach',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsOurServices/l4',
      value: 'İnnovatif ürün geliştirme',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsOurServices/l4',
      value: 'Innovative product development',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsVisionAndMissionLead',
      value: 'Vizyonumuz & Misyonumuz ',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsVisionAndMissionLead',
      value: 'Vision & Mission',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsVisionAndMissionP1',
      value:
        'Plastik malzeme ve kalıp imalatında kalite ve teknik açıdan dünyanın önde gelen firmalarıyla aynı statüyü yakalayarak sektörün önde gelen isimleri arasında yer almak, uluslararası pazarlarda faaliyet gösteren bir şirket olmak.',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsVisionAndMissionP1',
      value:
        "To be among the leading companies of the sector by achieving the same position as the world's leading companies in terms of quality and technique in plastic material and mold manufacturing, to be a company operating in international markets.",
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'aboutUsVisionAndMissionP2',
      value:
        'Kaliteli hizmet anlayışı ve müşteri memnuniyetini esas alan bir yönetim anlayışı ile uygun fiyat/performans oranına sahip ürünler üretmek, çevreye ve topluma saygılı bir üretim tesisiyle firmamızı sektörde en üst düzeye taşımak. ',
    },
    {
      id: 14,
      languageId: 2,
      key: 'aboutUsVisionAndMissionP2',
      value:
        'To design / manufacture products with reasonable price / performance ratio with a management approach based on high quality service and customer satisfaction, to carry our company to the highest level in the sector with a production facility that respects the natural environment and the society. ',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'plasticInjectionMolding',
      value: 'Plastik Enjeksiyon Kalıpçılığı',
    },
    {
      id: 14,
      languageId: 2,
      key: 'plasticInjectionMolding',
      value: 'Plastic Injection Molding',
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
      key: 'industrialProductDevelopment',
      value: 'Endüstriyel Ürün Geliştirme',
    },
    {
      id: 14,
      languageId: 2,
      key: 'industrialProductDevelopment',
      value: 'Industrial Product Development',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'manufactureOfPlasticProducts',
      value: 'Plastik Ürün Üretimi',
    },
    {
      id: 14,
      languageId: 2,
      key: 'manufactureOfPlasticProducts',
      value: 'Manufacture of Plastic Products',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'personal',
      value: 'Şahıs',
    },
    {
      id: 14,
      languageId: 2,
      key: 'personal',
      value: 'Personal',
    } /* --------------------- */,
    {
      id: 3,
      languageId: 1,
      key: 'company',
      value: 'Şirket',
    },
    {
      id: 14,
      languageId: 2,
      key: 'company',
      value: 'Company',
    } /* --------------------- */,
  ];
}
