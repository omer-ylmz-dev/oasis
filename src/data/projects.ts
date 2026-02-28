import { Project } from '@/features/projects/types/project.types';


export const projectsData: Project[] = [
  {
    id: 'prj_001',
    slug: 'azure-towers-baku',

    name: {
      tr: 'Azure Towers Bakü',
      az: 'Azure Towers Bakı',
      en: 'Azure Towers Baku',
      ru: 'Башни Лазурь Баку'
    },

    overview: {
      status: 'under-construction',
      type: 'residential-complex',
      area: 45000,

      commencementDate: new Date('2023-03-15'),
      completionDate: new Date('2025-12-31'),

      priceRange: {
        min: 120000,
        max: 450000,
        currency: 'AZN'
      },
    },



    address: {
      tr: 'Badamdar yolu 45, Bakü',
      az: 'Badamdar yolu 45, Bakı',
      en: 'Badamdar highway 45, Baku',
      ru: 'Бадамдарская дорога 45, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },


    coordinates: {
      lat: 40.3559,
      lng: 49.7945
    },

    nearbyPlaces: [
      {
        name: {
          tr: 'Park Bulvar AVM',
          az: 'Park Bulvar Ticarət Mərkəzi',
          en: 'Park Bulvar Mall',
          ru: 'Торговый центр Парк Бульвар'
        },
        distance: 800,
        type: 'shopping'
      },
      {
        name: {
          tr: 'Metro İstasyonu',
          az: 'Metro Stansiyası',
          en: 'Metro Station',
          ru: 'Станция метро'
        },
        distance: 300,
        type: 'transport'
      },
      {
        name: {
          tr: 'Deniz Kenarı Bulvarı',
          az: 'Dəniz kənarı bulvarı',
          en: 'Seaside Boulevard',
          ru: 'Приморский бульвар'
        },
        distance: 500,
        type: 'landmark'
      },
      {
        name: {
          tr: 'Bravo Süpermarket',
          az: 'Bravo Supermarket',
          en: 'Bravo Supermarket',
          ru: 'Супермаркет Браво'
        },
        distance: 200,
        type: 'shopping'
      }
    ],

    coverPhoto: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080',

    photos: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: '7/24 Güvenlik',
          az: '7/24 Təhlükəsizlik',
          en: '24/7 Security',
          ru: 'Безопасность 24/7'
        },
        description: {
          tr: 'Profesyonel güvenlik ekibi ve modern kamera sistemleri ile tam güvenlik.',
          az: 'Peşəkar təhlükəsizlik komandası və müasir kamera sistemləri ilə tam təhlükəsizlik.',
          en: 'Complete security with professional security team and modern camera systems.',
          ru: 'Полная безопасность с профессиональной командой охраны и современными камерами.'
        }
        
      },
      {
        title: {
          tr: 'Yüzme Havuzu',
          az: 'Üzgüçülük Hovuzu',
          en: 'Swimming Pool',
          ru: 'Бассейн'
        },
        description: {
          tr: 'Kapalı ve açık yüzme havuzları, çocuk havuzu ve jakuzi.',
          az: 'Qapalı və açıq üzgüçülük hovuzları, uşaq hovuzu və cakuzi.',
          en: 'Indoor and outdoor swimming pools, children\'s pool and jacuzzi.',
          ru: 'Крытый и открытый бассейны, детский бассейн и джакузи.'
        }
        
      },
      {
        title: {
          tr: 'Fitness Center',
          az: 'Fitnes Mərkəzi',
          en: 'Fitness Center',
          ru: 'Фитнес-центр'
        },
        description: {
          tr: 'Son teknoloji ekipmanlarla donatılmış fitness salonu ve SPA merkezi.',
          az: 'Ən son texnologiya avadanlıqları ilə təchiz edilmiş fitnes zalı və SPA mərkəzi.',
          en: 'Gym equipped with state-of-the-art equipment and SPA center.',
          ru: 'Тренажерный зал с современным оборудованием и СПА-центр.'
        }
         
      },
      {
        title: {
          tr: 'Kapalı Otopark',
          az: 'Qapalı Avtopark',
          en: 'Indoor Parking',
          ru: 'Крытая парковка'
        },
        description: {
          tr: '3 katlı kapalı otopark, elektrikli araç şarj istasyonları.',
          az: '3 mərtəbəli qapalı avtopark, elektrik avtomobil şarj stansiyaları.',
          en: '3-story indoor parking, electric vehicle charging stations.',
          ru: '3-этажная крытая парковка, станции зарядки электромобилей.'
        }
        
      },
      {
        title: {
          tr: 'Çocuk Oyun Alanı',
          az: 'Uşaq Oyun Sahəsi',
          en: 'Children\'s Playground',
          ru: 'Детская площадка'
        },
        description: {
          tr: 'Güvenli ve modern çocuk oyun alanları, oyun odaları.',
          az: 'Təhlükəsiz və müasir uşaq oyun sahələri, oyun otaqları.',
          en: 'Safe and modern children\'s playgrounds, game rooms.',
          ru: 'Безопасные и современные детские площадки, игровые комнаты.'
        }
      }
    ],

    description: {
      tr: 'Azure Towers, Bakü\'nün en prestijli bölgelerinden birinde, deniz manzaralı modern bir yaşam kompleksidir. 45.000 m² arsa üzerinde inşa edilen proje, çağdaş mimari anlayışı ile öne çıkmaktadır. İki adet 25 katlı kulede toplam 320 konut bulunmaktadır. Her daire, geniş balkonlar, yüksek tavanlar ve panoramik pencereler ile tasarlanmıştır.\n\nProje, sakinlerine üstün bir yaşam kalitesi sunmak için tasarlanmış sosyal olanaklarla donatılmıştır. Kapalı ve açık yüzme havuzları, fitness merkezi, SPA, çocuk oyun alanları ve yeşil bahçeler kompleksin öne çıkan özellikleridir. Ayrıca, 7/24 güvenlik, otopark ve konserj hizmetleri ile tam bir konfor sağlanmaktadır.',
      az: 'Azure Towers, Bakının ən prestijli rayonlarından birində, dəniz mənzərəli müasir yaşayış kompleksidir. 45.000 m² torpaq sahəsində inşa edilən layihə, müasir memarlıq anlayışı ilə fərqlənir. İki ədəd 25 mərtəbəli qüllədə cəmi 320 mənzil yerləşir. Hər mənzil, geniş eyvanlar, hündür tavanlar və panoramik pəncərələrlə dizayn edilmişdir.\n\nLayihə, sakinlərinə yüksək həyat keyfiyyəti təqdim etmək üçün dizayn edilmiş sosial imkanlarla təchiz edilmişdir. Qapalı və açıq üzgüçülük hovuzları, fitnes mərkəzi, SPA, uşaq oyun sahələri və yaşıl bağlar kompleksin əsas xüsusiyyətləridir. Həmçinin, 7/24 təhlükəsizlik, avtopark və konsyerj xidmətləri ilə tam rahatlıq təmin edilir.',
      en: 'Azure Towers is a modern residential complex with sea views in one of Baku\'s most prestigious areas. Built on 45,000 m² of land, the project stands out with its contemporary architectural concept. The two 25-story towers house a total of 320 apartments. Each apartment is designed with spacious balconies, high ceilings, and panoramic windows.\n\nThe project is equipped with social facilities designed to offer residents a superior quality of life. Indoor and outdoor swimming pools, fitness center, SPA, children\'s playgrounds, and green gardens are the highlights of the complex. Additionally, complete comfort is ensured with 24/7 security, parking, and concierge services.',
      ru: 'Azure Towers - это современный жилой комплекс с видом на море в одном из самых престижных районов Баку. Построенный на участке площадью 45 000 м², проект выделяется современной архитектурной концепцией. В двух 25-этажных башнях расположено 320 квартир. Каждая квартира спроектирована с просторными балконами, высокими потолками и панорамными окнами.\n\nПроект оснащен социальными объектами, предназначенными для обеспечения жителям высокого качества жизни. Крытые и открытые бассейны, фитнес-центр, СПА, детские площадки и зеленые сады являются основными особенностями комплекса. Кроме того, полный комфорт обеспечивается круглосуточной охраной, парковкой и услугами консьержа.'
    },

    isFeatured: true,

    createdAt: new Date('2023-01-10'),
    updatedAt: new Date('2024-12-15')
  },

  {
    id: 'prj_002',
    slug: 'crystal-business-center',

    name: {
      tr: 'Crystal İş Merkezi',
      az: 'Crystal Biznes Mərkəzi',
      en: 'Crystal Business Center',
      ru: 'Бизнес-центр Кристалл'
    },

    overview: {
      status: 'completed',
      type: 'business-center',
      area: 28000,

      commencementDate: new Date('2021-06-01'),
      completionDate: new Date('2023-09-30'),

      priceRange: {
        min: 3500,
        max: 5000,
        currency: 'AZN'
      },
    },



    address: {
      tr: 'Nizami Caddesi 88, Bakü',
      az: 'Nizami küçəsi 88, Bakı',
      en: 'Nizami Street 88, Baku',
      ru: 'улица Низами 88, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3777,
      lng: 49.8920
    },

    nearbyPlaces: [
      {
        name: {
          tr: '28 Mall AVM',
          az: '28 Mall Ticarət Mərkəzi',
          en: '28 Mall',
          ru: 'Торговый центр 28 Молл'
        },
        distance: 150,
        type: 'shopping'
      },
      {
        name: {
          tr: 'İçərişəhər Metro',
          az: 'İçərişəhər Metro',
          en: 'Icheri Sheher Metro',
          ru: 'Метро Ичери Шехер'
        },
        distance: 400,
        type: 'transport'
      },
      {
        name: {
          tr: 'Merkez Bankası',
          az: 'Mərkəzi Bank',
          en: 'Central Bank',
          ru: 'Центральный Банк'
        },
        distance: 600,
        type: 'landmark'
      }
    ],

    coverPhoto: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080',

    photos: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&h=1080',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'LEED Sertifikası',
          az: 'LEED Sertifikatı',
          en: 'LEED Certified',
          ru: 'Сертификат LEED'
        },
        description: {
          tr: 'Çevre dostu yeşil bina sertifikası ile enerji tasarrufu.',
          az: 'Ekoloji cəhətdən təmiz yaşıl bina sertifikatı ilə enerji qənaəti.',
          en: 'Energy savings with eco-friendly green building certificate.',
          ru: 'Энергосбережение с экологически чистым сертификатом зеленого здания.'
        }
        
      },
      {
        title: {
          tr: 'Akıllı Bina Sistemi',
          az: 'Ağıllı Bina Sistemi',
          en: 'Smart Building System',
          ru: 'Система умного здания'
        },
        description: {
          tr: 'Otomatik iklim kontrolü, aydınlatma ve güvenlik sistemleri.',
          az: 'Avtomatik iqlim nəzarəti, işıqlandırma və təhlükəsizlik sistemləri.',
          en: 'Automated climate control, lighting and security systems.',
          ru: 'Автоматизированные системы климат-контроля, освещения и безопасности.'
        }
        
      },
      {
        title: {
          tr: 'Konferans Salonları',
          az: 'Konfrans Zalları',
          en: 'Conference Halls',
          ru: 'Конференц-залы'
        },
        description: {
          tr: '5 adet modern toplantı ve konferans salonu, son teknoloji ekipman.',
          az: '5 ədəd müasir toplantı və konfrans zalı, ən son texnologiya avadanlıq.',
          en: '5 modern meeting and conference rooms with state-of-the-art equipment.',
          ru: '5 современных конференц-залов с новейшим оборудованием.'
        }
        
      }
    ],

    description: {
      tr: 'Crystal İş Merkezi, Bakü\'nün finans ve ticaret merkezinde konumlanmış, A+ sınıfı ofis binasıdır. 18 katlı modern yapıda, esnek ofis alanları ve ortak kullanım alanları bulunmaktadır. LEED sertifikalı yeşil bina konsepti ile enerji verimliliği en üst seviyededir.\n\nBina, akıllı sistemler ile donatılmış olup, konferans salonları, iş merkezi, kafe ve restoran gibi tüm ihtiyaçlarınızı karşılamaktadır. 4 katlı kapalı otoparkı ile ulaşım sorunu yaşamadan çalışma imkanı sunmaktadır.',
      az: 'Crystal Biznes Mərkəzi, Bakının maliyyə və ticarət mərkəzində yerləşən A+ sinif ofis binasıdır. 18 mərtəbəli müasir binada çevik ofis sahələri və ümumi istifadə sahələri mövcuddur. LEED sertifikatlı yaşıl bina konsepsiyası ilə enerji səmərəliliyi ən yüksək səviyyədədir.\n\nBina ağıllı sistemlərlə təchiz edilmiş olub, konfrans zalları, biznes mərkəzi, kafe və restoran kimi bütün ehtiyaclarınızı qarşılayır. 4 mərtəbəli qapalı avtopark ilə nəqliyyat problemi olmadan işləmək imkanı təqdim edir.',
      en: 'Crystal Business Center is an A+ class office building located in Baku\'s financial and commercial center. The 18-story modern building features flexible office spaces and common areas. Energy efficiency is at its highest level with the LEED-certified green building concept.\n\nThe building is equipped with smart systems and meets all your needs with conference halls, business center, cafes and restaurants. With its 4-story indoor parking, it offers the opportunity to work without transportation problems.',
      ru: 'Бизнес-центр Кристалл - это офисное здание класса А+, расположенное в финансовом и коммерческом центре Баку. 18-этажное современное здание предлагает гибкие офисные помещения и общие зоны. Энергоэффективность находится на высочайшем уровне благодаря концепции зеленого здания с сертификатом LEED.\n\nЗдание оснащено интеллектуальными системами и удовлетворяет все ваши потребности с конференц-залами, бизнес-центром, кафе и ресторанами. Благодаря 4-этажной крытой парковке предоставляется возможность работать без транспортных проблем.'

    },

    isFeatured: false,

    createdAt: new Date('2021-05-20'),
    updatedAt: new Date('2024-11-10')
  },

  {
    id: 'prj_003',
    slug: 'seaside-residence',

    name: {
      tr: 'Seaside Residence',
      az: 'Seaside Residence',
      en: 'Seaside Residence',
      ru: 'Seaside Residence'
    },

    overview: {
      status: 'under-construction',
      type: 'villa',
      area: 35000,

      commencementDate: new Date('2024-02-01'),
      completionDate: new Date('2026-06-30'),

      priceRange: {
        min: 800000,
        max: 1500000,
        currency: 'AZN'
      },

    },


    address: {
      tr: 'Buzovna, Bakü',
      az: 'Buzovna, Bakı',
      en: 'Buzovna, Baku',
      ru: 'Бузовна, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.5186,
      lng: 50.1667
    },

    nearbyPlaces: [
      {
        name: {
          tr: 'Plaj',
          az: 'Çimərlik',
          en: 'Beach',
          ru: 'Пляж'
        },
        distance: 50,
        type: 'landmark'
      },
      {
        name: {
          tr: 'Deniz Kulübü',
          az: 'Dəniz Klubu',
          en: 'Beach Club',
          ru: 'Пляжный клуб'
        },
        distance: 100,
        type: 'entertainment'
      },
      {
        name: {
          tr: 'Marina',
          az: 'Marina',
          en: 'Marina',
          ru: 'Марина'
        },
        distance: 300,
        type: 'landmark'
      }
    ],

    coverPhoto: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080',

    photos: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Özel Plaj',
          az: 'Xüsusi Çimərlik',
          en: 'Private Beach',
          ru: 'Частный пляж'
        },
        description: {
          tr: 'Her villaya özel plaj alanı ve deniz sporları imkanları.',
          az: 'Hər villaya xüsusi çimərlik sahəsi və dəniz idmanı imkanları.',
          en: 'Private beach area and water sports facilities for each villa.',
          ru: 'Частная пляжная зона и возможности для водных видов спорта для каждой виллы.'
        }
        
      },
      {
        title: {
          tr: 'Özel Havuz',
          az: 'Xüsusi Hovuz',
          en: 'Private Pool',
          ru: 'Частный бассейн'
        },
        description: {
          tr: 'Her villada infinity havuz ve jakuzi.',
          az: 'Hər villada infinity hovuz və cakuzi.',
          en: 'Infinity pool and jacuzzi in each villa.',
          ru: 'Инфинити-бассейн и джакузи в каждой вилле.'
        }
        
      },
      {
        title: {
          tr: 'Akıllı Ev',
          az: 'Ağıllı Ev',
          en: 'Smart Home',
          ru: 'Умный дом'
        },
        description: {
          tr: 'Tam otomatik akıllı ev sistemleri ve ses kontrolü.',
          az: 'Tam avtomatik ağıllı ev sistemləri və səs idarəetməsi.',
          en: 'Fully automated smart home systems and voice control.',
          ru: 'Полностью автоматизированные системы умного дома и голосовое управление.'
        }
        
      }
    ],

    description: {
      tr: 'Seaside Residence, Hazar Denizi kıyısında, özel villalardan oluşan bir lüks yaşam projesidir. Toplam 24 villadan oluşan kompleks, denize sıfır konumuyla benzersiz bir yaşam deneyimi sunmaktadır. Her villa, 400-650 m² arası kullanım alanına sahip olup, özel havuz, bahçe ve denize özel erişim ile tasarlanmıştır.\n\nVillalar, modern minimalist mimari ile Akdeniz estetiğini birleştiren özgün bir tasarıma sahiptir. Geniş teraslar, panoramik camlar ve açık yaşam alanları ile iç-dış mekan bütünlüğü sağlanmıştır. Proje ayrıca beach club, fitness center, SPA ve 7/24 concierge servisi sunmaktadır.',
      az: 'Seaside Residence, Xəzər dənizi sahilində, xüsusi villalardan ibarət lüks yaşayış layihəsidir. Cəmi 24 villadan ibarət kompleks, dənizə sıfır mövqeyi ilə unikal həyat təcrübəsi təqdim edir. Hər villa, 400-650 m² arası istifadə sahəsinə malikdir və xüsusi hovuz, bağça və dənizə xüsusi çıxış ilə dizayn edilmişdir.\n\nVillalar, müasir minimalist memarlıq ilə Aralıq dənizi estetikasını birləşdirən orijinal dizayna malikdir. Geniş terraslar, panoramik şüşələr və açıq yaşayış sahələri ilə daxili-xarici məkan bütünlüyü təmin edilmişdir. Layihə həmçinin beach club, fitnes mərkəzi, SPA və 7/24 concierge xidməti təqdim edir.',
      en: 'Seaside Residence is a luxury living project consisting of private villas on the Caspian Sea coast. The complex of 24 villas offers a unique living experience with its seafront location. Each villa has a usage area of 400-650 m² and is designed with a private pool, garden and private beach access.\n\nThe villas have an original design combining modern minimalist architecture with Mediterranean aesthetics. Integration of indoor and outdoor spaces is achieved with spacious terraces, panoramic glass and open living areas. The project also offers a beach club, fitness center, SPA and 24/7 concierge service.',
      ru: 'Seaside Residence - это роскошный жилой проект, состоящий из частных вилл на побережье Каспийского моря. Комплекс из 24 вилл предлагает уникальный опыт проживания благодаря расположению на берегу моря. Каждая вилла имеет площадь от 400 до 650 м² и спроектирована с частным бассейном, садом и частным выходом к морю.\n\nВиллы имеют оригинальный дизайн, сочетающий современную минималистскую архитектуру со средиземноморской эстетикой. Интеграция внутреннего и внешнего пространства достигается за счет просторных террас, панорамного остекления и открытых жилых зон. Проект также предлагает пляжный клуб, фитнес-центр, СПА и круглосуточный консьерж-сервис.'

    },

    isFeatured: true,

    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-12-20')
  },

  {
    id: 'prj_004',
    slug: 'central-plaza-mall',

    name: {
      tr: 'Central Plaza AVM',
      az: 'Central Plaza Ticarət Mərkəzi',
      en: 'Central Plaza Mall',
      ru: 'Торговый центр Централ Плаза'
    },

    overview: {
      status: 'completed',
      type: 'shopping-mall',
      area: 75000,

      commencementDate: new Date('2020-09-01'),
      completionDate: new Date('2022-11-15'),

      priceRange: {
        min: 2000,
        max: 8000,
        currency: 'AZN'
      },
    },


    address: {
      tr: '28 May metrosu yanı, Bakü',
      az: '28 May metro stansiyası yanı, Bakı',
      en: 'Near 28 May metro station, Baku',
      ru: 'Рядом с метро 28 Мая, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3806,
      lng: 49.8467
    },

    nearbyPlaces: [
      {
        name: {
          tr: '28 May Metro',
          az: '28 May Metro',
          en: '28 May Metro',
          ru: 'Метро 28 Мая'
        },
        distance: 100,
        type: 'transport'
      },
      {
        name: {
          tr: 'Otobüs Durağı',
          az: 'Avtobus Dayanacağı',
          en: 'Bus Stop',
          ru: 'Автобусная остановка'
        },
        distance: 50,
        type: 'transport'
      },
      {
        name: {
          tr: 'Milli Park',
          az: 'Milli Park',
          en: 'National Park',
          ru: 'Национальный парк'
        },
        distance: 800,
        type: 'landmark'
      }
    ],

    coverPhoto: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&h=1080',

    photos: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&h=1080',
      'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?w=1920&h=1080',
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&h=1080',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Sinema Kompleksi',
          az: 'Kino Kompleksi',
          en: 'Cinema Complex',
          ru: 'Кинокомплекс'
        },
        description: {
          tr: '10 salonlu modern sinema kompleksi, IMAX ve 4DX teknolojisi.',
          az: '10 salonlu müasir kino kompleksi, IMAX və 4DX texnologiyası.',
          en: '10-screen modern cinema complex with IMAX and 4DX technology.',
          ru: '10-зальный современный кинокомплекс с технологиями IMAX и 4DX.'
        }
        
      },
      {
        title: {
          tr: 'Food Court',
          az: 'Yemək Zonası',
          en: 'Food Court',
          ru: 'Фуд-корт'
        },
        description: {
          tr: '30+ restoran ve kafe, dünya mutfakları.',
          az: '30+ restoran və kafe, dünya mətbəxləri.',
          en: '30+ restaurants and cafes, world cuisines.',
          ru: '30+ ресторанов и кафе, кухни мира.'
        }
        
      },
      {
        title: {
          tr: 'Oyun Alanı',
          az: 'Oyun Mərkəzi',
          en: 'Entertainment Zone',
          ru: 'Развлекательная зона'
        },
        description: {
          tr: 'Çocuklar için oyun merkezi, bowling ve eğlence alanları.',
          az: 'Uşaqlar üçün oyun mərkəzi, boulinq və əyləncə sahələri.',
          en: 'Children\'s play center, bowling and entertainment areas.',
          ru: 'Детский игровой центр, боулинг и развлекательные зоны.'
        }
        
      }
    ],

    description: {
      tr: 'Central Plaza, Bakü\'nün en büyük alışveriş ve eğlence merkezlerinden biridir. 5 katlı modern yapıda, 200\'den fazla mağaza, restoran ve eğlence alanı bulunmaktadır. Uluslararası markalar ve yerel butikler bir arada, her yaştan ziyaretçiye hitap eden bir alışveriş deneyimi sunmaktadır.\n\nAVM, 10 salonlu modern sinema kompleksi, food court, oyun merkezi ve bowling salonu ile tam bir sosyal yaşam merkezi olarak hizmet vermektedir. 2000 araçlık kapalı otopark ve metro bağlantısı ile ulaşım son derece kolaydır.',
      az: 'Central Plaza, Bakının ən böyük alış-veriş və əyləncə mərkəzlərindən biridir. 5 mərtəbəli müasir binada 200-dən çox mağaza, restoran və əyləncə sahəsi yerləşir. Beynəlxalq brendlər və yerli butiklər bir yerdə, hər yaşdan ziyarətçiyə müraciət edən alış-veriş təcrübəsi təqdim edir.\n\nAVM, 10 salonlu müasir kino kompleksi, food court, oyun mərkəzi və boulinq salonu ilə tam sosial həyat mərkəzi kimi xidmət göstərir. 2000 avtomobil tutumlu qapalı avtopark və metro əlaqəsi ilə nəqliyyat son dərəcə asandır.',
      en: 'Central Plaza is one of Baku\'s largest shopping and entertainment centers. The 5-story modern building houses over 200 stores, restaurants and entertainment areas. International brands and local boutiques together offer a shopping experience that appeals to visitors of all ages.\n\nThe mall serves as a complete social life center with a 10-screen modern cinema complex, food court, game center and bowling alley. Transportation is extremely easy with a 2000-car indoor parking and metro connection.',
      ru: 'Централ Плаза - один из крупнейших торговых и развлекательных центров Баку. В 5-этажном современном здании расположено более 200 магазинов, ресторанов и развлекательных зон. Международные бренды и местные бутики вместе предлагают опыт шопинга, который понравится посетителям всех возрастов.\n\nТорговый центр служит полноценным центром социальной жизни с 10-зальным современным кинокомплексом, фуд-кортом, игровым центром и боулингом. Транспортная доступность чрезвычайно удобна благодаря крытой парковке на 2000 автомобилей и связи с метро.'

    },

    isFeatured: true,

    createdAt: new Date('2020-08-10'),
    updatedAt: new Date('2024-10-05')
  },

  {
    id: 'prj_005',
    slug: 'green-hills-residence',
    name: {
      tr: 'Green Hills Residence',
      az: 'Green Hills Residence',
      en: 'Green Hills Residence',
      ru: 'Green Hills Residence'
    },

    overview: {
      status: 'under-construction',
      type: 'residential-complex',
      area: 52000,
      commencementDate: new Date('2023-09-01'),
      completionDate: new Date('2026-03-31'),
      priceRange: {
        min: 140000,
        max: 380000,
        currency: 'AZN'
      }
    },



    address: {
      tr: 'Masazır, Bakü',
      az: 'Masazır, Bakı',
      en: 'Masazir, Baku',
      ru: 'Масазыр, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4092,
      lng: 49.7321
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Şehir Parkı',
          az: 'Şəhər Parkı',
          en: 'City Park',
          ru: 'Городской парк'
        },
        distance: 400,
        type: 'landmark'
      },
      {
        name: {
          tr: 'Okul Kompleksi',
          az: 'Məktəb Kompleksi',
          en: 'School Complex',
          ru: 'Школьный комплекс'
        },
        distance: 600,
        type: 'education'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080',
      'https://images.unsplash.com/photo-1560185127-6a8c7f8b4d5c?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],


    features: [
      {
        title: {
          tr: 'Yeşil Alanlar',
          az: 'Yaşıl Sahələr',
          en: 'Green Areas',
          ru: 'Зеленые зоны'
        },
        description: {
          tr: 'Geniş peyzaj alanları ve yürüyüş yolları.',
          az: 'Geniş landşaft sahələri və gəzinti yolları.',
          en: 'Large landscaped areas and walking paths.',
          ru: 'Просторные ландшафтные зоны и прогулочные дорожки.'
        }
        
      },
      {
        title: {
          tr: 'Spor Alanları',
          az: 'İdman Sahələri',
          en: 'Sports Areas',
          ru: 'Спортивные зоны'
        },
        description: {
          tr: 'Açık hava spor sahaları ve koşu parkuru.',
          az: 'Açıq hava idman sahələri və qaçış zolağı.',
          en: 'Outdoor sports areas and jogging track.',
          ru: 'Спортивные площадки и беговые дорожки.'
        }
        
      }
    ],
    description: {
      tr: 'Green Hills Residence, şehir hayatını doğa ile buluşturan modern bir yaşam projesidir.',
      az: 'Green Hills Residence, şəhər həyatını təbiətlə birləşdirən müasir yaşayış layihəsidir.',
      en: 'Green Hills Residence is a modern living project that brings city life together with nature.',
      ru: 'Green Hills Residence — современный проект, объединяющий городскую жизнь с природой.'
    },
    isFeatured: false,
    createdAt: new Date('2023-08-10'),
    updatedAt: new Date('2024-12-01')
  },

  {
    id: 'prj_006',
    slug: 'skyline-tower',
    name: {
      tr: 'Skyline Tower',
      az: 'Skyline Tower',
      en: 'Skyline Tower',
      ru: 'Skyline Tower'
    },

    overview: {
      status: 'under-construction',
      type: 'mixed-use',
      area: 61000,
      commencementDate: new Date('2024-01-20'),
      completionDate: new Date('2027-05-30'),
      priceRange: {
        min: 220000,
        max: 950000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Nerimanov, Bakü',
      az: 'Nərimanov, Bakı',
      en: 'Narimanov, Baku',
      ru: 'Нариманов, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4021,
      lng: 49.8723
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Metro İstasyonu',
          az: 'Metro Stansiyası',
          en: 'Metro Station',
          ru: 'Станция метро'
        },
        distance: 250,
        type: 'transport'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&h=1080',
      'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Gök Bahçeleri',
          az: 'Göy Bağlar',
          en: 'Sky Gardens',
          ru: 'Небесные сады'
        },
        description: {
          tr: 'Katlar arası teras bahçeler.',
          az: 'Mərtəbələrarası terras bağları.',
          en: 'Terrace gardens between floors.',
          ru: 'Террасные сады между этажами.'
        }
        
      }
    ],
    description: {
      tr: 'Skyline Tower, konut, ofis ve ticari alanları tek çatı altında sunar.',
      az: 'Skyline Tower yaşayış, ofis və ticarət sahələrini bir araya gətirir.',
      en: 'Skyline Tower brings residential, office and commercial spaces together.',
      ru: 'Skyline Tower объединяет жилые, офисные и коммерческие пространства.'
    },
    isFeatured: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-12-18')
  },

  {
    id: 'prj_007',
    slug: 'marina-bay-apartments',
    name: {
      tr: 'Marina Bay Apartments',
      az: 'Marina Bay Apartments',
      en: 'Marina Bay Apartments',
      ru: 'Marina Bay Apartments'
    },

    overview: {
      status: 'completed',
      type: 'apartment',
      area: 42000,
      commencementDate: new Date('2021-04-01'),
      completionDate: new Date('2024-02-28'),
      priceRange: {
        min: 180000,
        max: 520000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'White City, Bakü',
      az: 'White City, Bakı',
      en: 'White City, Baku',
      ru: 'Уайт Сити, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3954,
      lng: 49.9412
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Marina',
          az: 'Marina',
          en: 'Marina',
          ru: 'Марина'
        },
        distance: 120,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Marina Manzarası',
          az: 'Marina Mənzərəsi',
          en: 'Marina View',
          ru: 'Вид на марину'
        },
        description: {
          tr: 'Tüm dairelerde açık marina manzarası.',
          az: 'Bütün mənzillərdə açıq marina mənzərəsi.',
          en: 'Open marina views from all apartments.',
          ru: 'Открытый вид на марину из всех апартаментов.'
        }
        
      }
    ],
    description: {
      tr: 'Marina Bay Apartments, deniz yaşamını şehir konforu ile birleştirir.',
      az: 'Marina Bay Apartments dəniz həyatını şəhər rahatlığı ilə birləşdirir.',
      en: 'Marina Bay Apartments combines seaside living with urban comfort.',
      ru: 'Marina Bay Apartments сочетает морскую жизнь с городским комфортом.'
    },
    isFeatured: false,
    createdAt: new Date('2021-03-12'),
    updatedAt: new Date('2024-09-22')
  },

  {
    id: 'prj_008',
    slug: 'heritage-office-park',
    name: {
      tr: 'Heritage Office Park',
      az: 'Heritage Office Park',
      en: 'Heritage Office Park',
      ru: 'Heritage Office Park'
    },

    overview: {
      status: 'completed',
      type: 'business-park',
      area: 33000,
      commencementDate: new Date('2019-05-10'),
      completionDate: new Date('2022-08-20'),
      priceRange: {
        min: 2800,
        max: 6200,
        currency: 'AZN'
      }
    },
    address: {
      tr: 'İçerişehir, Bakü',
      az: 'İçərişəhər, Bakı',
      en: 'Icherisheher, Baku',
      ru: 'Ичери Шехер, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3665,
      lng: 49.8352
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Tarihi Merkez',
          az: 'Tarixi Mərkəz',
          en: 'Historic Center',
          ru: 'Исторический центр'
        },
        distance: 80,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Avlu Tasarımı',
          az: 'Həyətyanı Dizayn',
          en: 'Courtyard Design',
          ru: 'Дворовый дизайн'
        },
        description: {
          tr: 'Açık avlular ve sosyal alanlar.',
          az: 'Açıq həyətlər və sosial sahələr.',
          en: 'Open courtyards and social areas.',
          ru: 'Открытые дворы и социальные зоны.'
        }
        
      }
    ],
    description: {
      tr: 'Heritage Office Park, geçmişin ruhunu modern iş hayatı ile buluşturur.',
      az: 'Heritage Office Park keçmişin ruhunu müasir iş həyatı ilə birləşdirir.',
      en: 'Heritage Office Park blends the spirit of history with modern business life.',
      ru: 'Heritage Office Park объединяет дух истории с современной деловой жизнью.'
    },
    isFeatured: false,
    createdAt: new Date('2019-04-01'),
    updatedAt: new Date('2024-06-14')
  },

  {
    id: 'prj_009',
    slug: 'sunset-villas',
    name: {
      tr: 'Sunset Villas',
      az: 'Sunset Villas',
      en: 'Sunset Villas',
      ru: 'Sunset Villas'
    },

    overview: {
      status: 'under-construction',
      type: 'villa',
      area: 29000,
      commencementDate: new Date('2024-05-01'),
      completionDate: new Date('2026-10-15'),
      priceRange: {
        min: 650000,
        max: 1200000,
        currency: 'AZN'
      },
    },
    address: {
      tr: 'Şüvelan, Bakü',
      az: 'Şüvəlan, Bakı',
      en: 'Shuvelan, Baku',
      ru: 'Шувелан, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4978,
      lng: 50.1243
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Sahil',
          az: 'Sahil',
          en: 'Coast',
          ru: 'Побережье'
        },
        distance: 200,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Panoramik Teras',
          az: 'Panoramik Terras',
          en: 'Panoramic Terrace',
          ru: 'Панорамная терраса'
        },
        description: {
          tr: 'Gün batımına bakan geniş teraslar.',
          az: 'Gün batımına baxan geniş terraslar.',
          en: 'Spacious terraces facing the sunset.',
          ru: 'Просторные террасы с видом на закат.'
        },
        
      }
    ],
    description: {
      tr: 'Sunset Villas, huzur ve prestiji bir araya getirir.',
      az: 'Sunset Villas rahatlıq və prestiji birləşdirir.',
      en: 'Sunset Villas brings together tranquility and prestige.',
      ru: 'Sunset Villas объединяет спокойствие и престиж.'
    },
    isFeatured: true,
    createdAt: new Date('2024-04-12'),
    updatedAt: new Date('2024-12-28')
  },

  {
    id: 'prj_010',
    slug: 'urban-life-center',
    name: {
      tr: 'Urban Life Center',
      az: 'Urban Life Center',
      en: 'Urban Life Center',
      ru: 'Urban Life Center'
    },

    overview: {
      status: 'under-construction',
      type: 'mixed-use',
      area: 88000,
      commencementDate: new Date('2023-11-01'),
      completionDate: new Date('2027-12-31'),
      priceRange: {
        min: 160000,
        max: 720000,
        currency: 'AZN'
      }
    },
    address: {
      tr: 'Yasamal, Bakü',
      az: 'Yasamal, Bakı',
      en: 'Yasamal, Baku',
      ru: 'Ясамал, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3874,
      lng: 49.8079
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Üniversite',
          az: 'Universitet',
          en: 'University',
          ru: 'Университет'
        },
        distance: 500,
        type: 'education'
      },
      {
        name: {
          tr: 'Metro',
          az: 'Metro',
          en: 'Metro',
          ru: 'Метро'
        },
        distance: 300,
        type: 'transport'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Yaşam Merkezi',
          az: 'Yaşayış Mərkəzi',
          en: 'Life Hub',
          ru: 'Центр жизни'
        },
        description: {
          tr: 'Kafe, mağaza ve sosyal alanlar.',
          az: 'Kafe, mağaza və sosial sahələr.',
          en: 'Cafes, shops and social spaces.',
          ru: 'Кафе, магазины и социальные зоны.'
        },
        
      }
    ],
    description: {
      tr: 'Urban Life Center, şehir hayatının tüm dinamiklerini tek noktada toplar.',
      az: 'Urban Life Center şəhər həyatının bütün dinamiklərini bir nöqtədə toplayır.',
      en: 'Urban Life Center gathers all dynamics of city life in one place.',
      ru: 'Urban Life Center объединяет все динамики городской жизни в одном месте.'
    },
    isFeatured: true,
    createdAt: new Date('2023-10-05'),
    updatedAt: new Date('2024-12-31')
  },

  {
    id: 'prj_011',
    slug: 'blue-harbor-residence',
    name: {
      tr: 'Blue Harbor Residence',
      az: 'Blue Harbor Residence',
      en: 'Blue Harbor Residence',
      ru: 'Blue Harbor Residence'
    },

    overview: {
      status: 'under-construction',
      type: 'residential-complex',
      area: 48000,
      commencementDate: new Date('2024-03-01'),
      completionDate: new Date('2026-09-30'),
      priceRange: {
        min: 170000,
        max: 420000,
        currency: 'AZN'
      },
    },

    address: {
      tr: 'Bayıl, Bakü',
      az: 'Bayıl, Bakı',
      en: 'Bayil, Baku',
      ru: 'Баил, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3354,
      lng: 49.8212
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Liman',
          az: 'Liman',
          en: 'Harbor',
          ru: 'Порт'
        },
        distance: 200,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Panoramik Balkonlar',
          az: 'Panoramik Balkonlar',
          en: 'Panoramic Balconies',
          ru: 'Панорамные балконы'
        },
        description: {
          tr: 'Her dairede geniş deniz manzaralı balkonlar.',
          az: 'Hər mənzildə geniş dəniz mənzərəli balkonlar.',
          en: 'Large sea-view balconies in every apartment.',
          ru: 'Просторные балконы с видом на море в каждой квартире.'
        },
        
      }
    ],
    description: {
      tr: 'Blue Harbor Residence, şehir merkezine yakınlığı ve deniz manzarası ile ayrıcalıklı bir yaşam sunar.',
      az: 'Blue Harbor Residence şəhər mərkəzinə yaxınlığı və dəniz mənzərəsi ilə xüsusi həyat təqdim edir.',
      en: 'Blue Harbor Residence offers a privileged life with its proximity to the city center and sea views.',
      ru: 'Blue Harbor Residence предлагает привилегированную жизнь благодаря близости к центру города и виду на море.'
    },
    isFeatured: false,
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-12-20')
  },

  {
    id: 'prj_012',
    slug: 'metro-point-offices',
    name: {
      tr: 'Metro Point Ofisleri',
      az: 'Metro Point Ofisləri',
      en: 'Metro Point Offices',
      ru: 'Офисы Метро Поинт'
    },


    overview: {
      status: 'completed',
      type: 'business-center',
      area: 26000,
      commencementDate: new Date('2020-02-01'),
      completionDate: new Date('2023-05-15'),
      priceRange: {
        min: 3000,
        max: 5200,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Gence prospekti, Bakü',
      az: 'Gəncə prospekti, Bakı',
      en: 'Ganja Avenue, Baku',
      ru: 'проспект Гянджа, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4042,
      lng: 49.9031
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Metro İstasyonu',
          az: 'Metro Stansiyası',
          en: 'Metro Station',
          ru: 'Станция метро'
        },
        distance: 30,
        type: 'transport'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Hızlı Erişim',
          az: 'Sürətli Giriş',
          en: 'Fast Access',
          ru: 'Быстрый доступ'
        },
        description: {
          tr: 'Metro bağlantısı ile doğrudan ulaşım.',
          az: 'Metro bağlantısı ilə birbaşa nəqliyyat.',
          en: 'Direct access via metro connection.',
          ru: 'Прямой доступ через метро.'
        },
        
      }
    ],
    description: {
      tr: 'Metro Point, iş dünyası için hız ve erişilebilirlik sunar.',
      az: 'Metro Point biznes dünyası üçün sürət və əlçatanlıq təqdim edir.',
      en: 'Metro Point delivers speed and accessibility for business.',
      ru: 'Metro Point обеспечивает скорость и доступность для бизнеса.'
    },
    isFeatured: false,
    createdAt: new Date('2020-01-10'),
    updatedAt: new Date('2024-07-18')
  },

  {
    id: 'prj_013',
    slug: 'forest-view-homes',
    name: {
      tr: 'Forest View Homes',
      az: 'Forest View Homes',
      en: 'Forest View Homes',
      ru: 'Forest View Homes'
    },


    overview: {
      status: 'under-construction',
      type: 'apartment',
      area: 39000,
      commencementDate: new Date('2024-06-01'),
      completionDate: new Date('2026-12-31'),
      priceRange: {
        min: 150000,
        max: 310000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Binagadi, Bakü',
      az: 'Binəqədi, Bakı',
      en: 'Binagadi, Baku',
      ru: 'Бинагади, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4512,
      lng: 49.7845
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Orman Parkı',
          az: 'Meşə Parkı',
          en: 'Forest Park',
          ru: 'Лесной парк'
        },
        distance: 180,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Sessiz Ortam',
          az: 'Sakit Mühit',
          en: 'Quiet Environment',
          ru: 'Тихая среда'
        },
        description: {
          tr: 'Doğayla çevrili sakin yaşam alanları.',
          az: 'Təbiətlə əhatə olunmuş sakit yaşayış sahələri.',
          en: 'Calm living spaces surrounded by nature.',
          ru: 'Спокойные жилые пространства, окруженные природой.'
        },
        
      }
    ],
    description: {
      tr: 'Forest View Homes, şehir stresinden uzak, dingin bir yaşam sunar.',
      az: 'Forest View Homes şəhər stresindən uzaq, sakit həyat təqdim edir.',
      en: 'Forest View Homes offers a serene life away from city stress.',
      ru: 'Forest View Homes предлагает спокойную жизнь вдали от городского стресса.'
    },
    isFeatured: false,
    createdAt: new Date('2024-05-12'),
    updatedAt: new Date('2024-12-30')
  },

  {
    id: 'prj_014',
    slug: 'golden-gate-mall',
    name: {
      tr: 'Golden Gate AVM',
      az: 'Golden Gate Ticarət Mərkəzi',
      en: 'Golden Gate Mall',
      ru: 'Торговый центр Голден Гейт'
    },


    overview: {
      status: 'under-construction',
      type: 'shopping-mall',
      area: 69000,
      commencementDate: new Date('2023-07-15'),
      completionDate: new Date('2026-05-20'),
      priceRange: {
        min: 2500,
        max: 9000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Hatai, Bakü',
      az: 'Xətai, Bakı',
      en: 'Khatai, Baku',
      ru: 'Хатаи, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3819,
      lng: 49.9554
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Bulvar',
          az: 'Bulvar',
          en: 'Boulevard',
          ru: 'Бульвар'
        },
        distance: 350,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],
    
    features: [
      {
        title: {
          tr: 'Açık Teraslar',
          az: 'Açıq Terraslar',
          en: 'Open Terraces',
          ru: 'Открытые террасы'
        },
        description: {
          tr: 'Şehir manzaralı dinlenme alanları.',
          az: 'Şəhər mənzərəli istirahət sahələri.',
          en: 'Relaxation areas with city views.',
          ru: 'Зоны отдыха с видом на город.'
        },
        
      }
    ],
    description: {
      tr: 'Golden Gate, alışverişi sosyal deneyime dönüştürür.',
      az: 'Golden Gate alış-verişi sosial təcrübəyə çevirir.',
      en: 'Golden Gate transforms shopping into a social experience.',
      ru: 'Golden Gate превращает шопинг в социальный опыт.'
    },
    isFeatured: true,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2024-12-10')
  },

  {
    id: 'prj_015',
    slug: 'cityline-lofts',
    name: {
      tr: 'Cityline Lofts',
      az: 'Cityline Lofts',
      en: 'Cityline Lofts',
      ru: 'Cityline Lofts'
    },


    overview: {
      status: 'completed',
      type: 'apartment',
      area: 24000,
      commencementDate: new Date('2020-03-01'),
      completionDate: new Date('2022-12-15'),
      priceRange: {
        min: 130000,
        max: 260000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Sabayil, Bakü',
      az: 'Səbail, Bakı',
      en: 'Sabail, Baku',
      ru: 'Сабаиль, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3571,
      lng: 49.8274
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Kafe Sokağı',
          az: 'Kafe Küçəsi',
          en: 'Cafe Street',
          ru: 'Улица кафе'
        },
        distance: 90,
        type: 'entertainment'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Loft Mimari',
          az: 'Loft Memarlıq',
          en: 'Loft Architecture',
          ru: 'Лофт-архитектура'
        },
        description: {
          tr: 'Yüksek tavanlı, açık plan daireler.',
          az: 'Hündür tavanlı, açıq planlı mənzillər.',
          en: 'High-ceiling, open-plan apartments.',
          ru: 'Квартиры с высокими потолками и открытой планировкой.'
        },
        
      }
    ],
    description: {
      tr: 'Cityline Lofts, şehir hayatını modern tasarımla buluşturur.',
      az: 'Cityline Lofts şəhər həyatını müasir dizaynla birləşdirir.',
      en: 'Cityline Lofts merges city life with modern design.',
      ru: 'Cityline Lofts объединяет городскую жизнь с современным дизайном.'
    },
    isFeatured: false,
    createdAt: new Date('2020-02-05'),
    updatedAt: new Date('2024-05-22')
  },

  {
    id: 'prj_016',
    slug: 'aqua-park-resort',
    name: {
      tr: 'Aqua Park Resort',
      az: 'Aqua Park Resort',
      en: 'Aqua Park Resort',
      ru: 'Aqua Park Resort'
    },


    overview: {
      status: 'under-construction',
      type: 'resort',
      area: 91000,
      commencementDate: new Date('2024-04-01'),
      completionDate: new Date('2027-06-30'),
      priceRange: {
        min: 190000,
        max: 540000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Novxanı, Bakü',
      az: 'Novxanı, Bakı',
      en: 'Novkhani, Baku',
      ru: 'Новханы, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.5712,
      lng: 49.7751
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Plaj',
          az: 'Çimərlik',
          en: 'Beach',
          ru: 'Пляж'
        },
        distance: 120,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Aqua Park',
          az: 'Aqua Park',
          en: 'Aqua Park',
          ru: 'Аквапарк'
        },
        description: {
          tr: 'Tüm aile için eğlence alanları.',
          az: 'Bütün ailə üçün əyləncə sahələri.',
          en: 'Entertainment areas for the whole family.',
          ru: 'Развлечения для всей семьи.'
        },
        
      }
    ],
    description: {
      tr: 'Aqua Park Resort, her günü tatil gibi yaşatır.',
      az: 'Aqua Park Resort hər günü tətil kimi yaşadır.',
      en: 'Aqua Park Resort makes every day feel like a vacation.',
      ru: 'Aqua Park Resort превращает каждый день в отпуск.'
    },
    isFeatured: true,
    createdAt: new Date('2024-03-18'),
    updatedAt: new Date('2024-12-29')
  },

  {
    id: 'prj_017',
    slug: 'tech-valley-campus',
    name: {
      tr: 'Tech Valley Kampüsü',
      az: 'Tech Valley Kampusu',
      en: 'Tech Valley Campus',
      ru: 'Кампус Тек Вэлли'
    },


    overview: {
      status: 'under-construction',
      type: 'business-park',
      area: 56000,
      commencementDate: new Date('2023-10-01'),
      completionDate: new Date('2026-08-31'),
      priceRange: {
        min: 2600,
        max: 4800,
        currency: 'AZN'
      }
    },


    address: {
      tr: 'Sumgayıt yolu, Bakü',
      az: 'Sumqayıt yolu, Bakı',
      en: 'Sumgait Road, Baku',
      ru: 'Сумгаитское шоссе, Баку'
    },


    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4623,
      lng: 49.7124
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Teknopark',
          az: 'Texnopark',
          en: 'Technopark',
          ru: 'Технопарк'
        },
        distance: 150,
        type: 'business'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080'
    ],

    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Ortak Çalışma Alanları',
          az: 'Birgə İş Sahələri',
          en: 'Co-working Spaces',
          ru: 'Коворкинг-зоны'
        },
        description: {
          tr: 'Esnek ve modern çalışma alanları.',
          az: 'Çevik və müasir iş sahələri.',
          en: 'Flexible and modern workspaces.',
          ru: 'Гибкие и современные рабочие пространства.'
        },
        
      }
    ],
    description: {
      tr: 'Tech Valley, inovasyonu ve işbirliğini destekler.',
      az: 'Tech Valley innovasiyanı və əməkdaşlığı dəstəkləyir.',
      en: 'Tech Valley supports innovation and collaboration.',
      ru: 'Tech Valley поддерживает инновации и сотрудничество.'
    },
    isFeatured: true,
    createdAt: new Date('2023-09-05'),
    updatedAt: new Date('2024-12-26')
  },

  {
    id: 'prj_018',
    slug: 'panorama-heights',
    name: {
      tr: 'Panorama Heights',
      az: 'Panorama Heights',
      en: 'Panorama Heights',
      ru: 'Panorama Heights'
    },


    overview: {
      status: 'under-construction',
      type: 'residential-complex',
      area: 47000,
      commencementDate: new Date('2024-02-15'),
      completionDate: new Date('2026-11-30'),
      priceRange: {
        min: 210000,
        max: 460000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Badamdar, Bakü',
      az: 'Badamdar, Bakı',
      en: 'Badamdar, Baku',
      ru: 'Бадамдар, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3498,
      lng: 49.8011
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Seyir Terası',
          az: 'Baxış Meydançası',
          en: 'Viewpoint',
          ru: 'Смотровая площадка'
        },
        distance: 140,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],


    features: [
      {
        title: {
          tr: 'Manzara Terasları',
          az: 'Mənzərə Terrasları',
          en: 'View Terraces',
          ru: 'Смотровые террасы'
        },
        description: {
          tr: 'Şehir ve deniz manzaralı ortak teraslar.',
          az: 'Şəhər və dəniz mənzərəli ümumi terraslar.',
          en: 'Shared terraces with city and sea views.',
          ru: 'Общие террасы с видом на город и море.'
        },
        
      }
    ],
    description: {
      tr: 'Panorama Heights, şehri ayaklarınızın altına serer.',
      az: 'Panorama Heights şəhəri ayaqlarınızın altına sərir.',
      en: 'Panorama Heights places the city at your feet.',
      ru: 'Panorama Heights кладет город к вашим ногам.'
    },
    isFeatured: false,
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-12-27')
  },

  {
    id: 'prj_019',
    slug: 'riverfront-plaza',
    name: {
      tr: 'Riverfront Plaza',
      az: 'Riverfront Plaza',
      en: 'Riverfront Plaza',
      ru: 'Riverfront Plaza'
    },


    overview: {
      status: 'completed',
      type: 'mixed-use',
      area: 54000,
      commencementDate: new Date('2019-09-01'),
      completionDate: new Date('2023-04-10'),
      priceRange: {
        min: 160000,
        max: 480000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Dernegül, Bakü',
      az: 'Dərnəgül, Bakı',
      en: 'Darnagul, Baku',
      ru: 'Дарнагюль, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.4287,
      lng: 49.8569
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Nehir Yolu',
          az: 'Çay Yolu',
          en: 'Riverside Path',
          ru: 'Набережная'
        },
        distance: 60,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Yürüyüş Yolu',
          az: 'Gəzinti Yolu',
          en: 'Walking Path',
          ru: 'Прогулочная дорожка'
        },
        description: {
          tr: 'Nehir boyunca uzanan peyzajlı yol.',
          az: 'Çay boyunca uzanan landşaftlı yol.',
          en: 'Landscaped path along the river.',
          ru: 'Ландшафтная дорожка вдоль реки.'
        },
        
      }
    ],
    description: {
      tr: 'Riverfront Plaza, doğa ve şehir yaşamını dengeler.',
      az: 'Riverfront Plaza təbiət və şəhər həyatını tarazlayır.',
      en: 'Riverfront Plaza balances nature and city life.',
      ru: 'Riverfront Plaza уравновешивает природу и городскую жизнь.'
    },
    isFeatured: false,
    createdAt: new Date('2019-08-12'),
    updatedAt: new Date('2024-08-30')
  },

  {
    id: 'prj_020',
    slug: 'elite-heights',
    name: {
      tr: 'Elite Heights',
      az: 'Elite Heights',
      en: 'Elite Heights',
      ru: 'Elite Heights'
    },


    overview: {
      status: 'under-construction',
      type: 'residential-complex',
      area: 82000,
      commencementDate: new Date('2024-01-01'),
      completionDate: new Date('2028-03-31'),
      priceRange: {
        min: 260000,
        max: 980000,
        currency: 'AZN'
      }
    },

    address: {
      tr: 'Yasamal, Bakü',
      az: 'Yasamal, Bakı',
      en: 'Yasamal, Baku',
      ru: 'Ясамал, Баку'
    },

    location: {
      city: {
        slug: 'baku',
        label: {
          tr: 'Bakü',
          az: 'Bakı',
          en: 'Baku',
          ru: 'Баку'
        }
      },
      country: {
        slug: 'azerbaijan',
        label: {
          tr: 'Azerbaycan',
          az: 'Azərbaycan',
          en: 'Azerbaijan',
          ru: 'Азербайджан'
        }
      }
    },

    coordinates: {
      lat: 40.3922,
      lng: 49.8156
    },
    nearbyPlaces: [
      {
        name: {
          tr: 'Şehir Merkezi',
          az: 'Şəhər Mərkəzi',
          en: 'City Center',
          ru: 'Центр города'
        },
        distance: 500,
        type: 'landmark'
      }
    ],
    coverPhoto: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&h=1080',
    photos: [
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1920&h=1080'
    ],


    highlights: [
      {
        title: {
          az: "Mimari Estetikanın Zirvəsi",
          tr: "Mimari Estetiğin Zirvesi",
          en: "The Pinnacle of Architectural Aesthetics",
          ru: "Вершина архитектурной эстетики"
        },
        description: {
          az: "Müasir xətlərin zərif detallarla qovuşduğu bu dizayn, sadəcə bir bina deyil, şəhərin yeni simvolu olacaq sənət əsəridir.",
          tr: "Modern hatların zarif detaylarla buluştuğu bu tasarım, sadece bir bina değil, şehrin yeni sembolü olacak bir sanat eseridir.",
          en: "This design, where modern lines meet elegant details, is not just a building, but a work of art that will become the city's new symbol.",
          ru: "Этот дизайн, где современные линии сочетаются с элегантными деталями, — не просто здание, а произведение искусства."
        },
        image: "https://images.unsplash.com/photo-1758448721134-1798533ae917?w=1920&q=80"
      },
      {
        title: {
          az: "İnteryerlərdə Lüks Toxunuşlar",
          tr: "İç Mekanlarda Lüks Dokunuşlar",
          en: "Luxury Touches in Interiors",
          ru: "Люксовые штрихи в интерьере"
        },
        description: {
          az: "Hər kvadratmetrdə hiss olunan keyfiyyət. Seçilmiş mərkəz materialları və incə işçilik, yaşam sahənizə aristokratik bir hava qatır.",
          tr: "Her metrekarede hissedilen kalite. Seçkin mermer dokular ve ince işçilik, yaşam alanınıza aristokratik bir hava katıyor.",
          en: "Quality felt in every square meter. Distinguished textures and fine craftsmanship add an aristocratic flair to your living space.",
          ru: "Качество, ощутимое в каждом квадратном метре. Изысканные текстуры придают вашему пространству аристократическую атмосферу."
        },
        image: "https://images.unsplash.com/photo-1758448756084-c44d73014c07?w=1920&q=80"
      },
      {
        title: {
          az: "Sonsuzluq Hissi Verən Terraslar",
          tr: "Sonsuzluk Hissi Veren Teraslar",
          en: "Terraces with a Sense of Infinity",
          ru: "Террасы с чувством бесконечности"
        },
        description: {
          az: "Geniş və füsunkar mənzərəli terraslarınızda gün batımını izləyərək, şəhərin səs-küyündən uzaq, hüzur dolu anlar yaşayın.",
          tr: "Geniş ve büyüleyici manzaralı teraslarınızda gün batımını izlerken, şehrin gürültüsünden uzak, huzur dolu anlar yaşayın.",
          en: "Watch the sunset on your spacious terraces with captivating views, and experience peaceful moments away from the city noise.",
          ru: "Наслаждайтесь закатом на просторных террасах с захватывающими видами, вдали от городского шума."
        },
        image: "https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?w=1920&q=80"
      },
      {
        title: {
          az: "Fərdi Yaşayış İmtiyazları",
          tr: "Kişiye Özel Yaşam Ayrıcalıkları",
          en: "Personalized Living Privileges",
          ru: "Привилегии персонализированного образа жизни"
        },
        description: {
          az: "Gündəlik qayğıları unudun. Sizin rahatlığınız üçün düşünülmüş fərdi xidmətlər və idarəetmə sistemi ilə evinizdə hər zaman xüsusi olduğunuzu hiss edin.",
          tr: "Günlük telaşları geride bırakın. Konforunuz için düşünülmüş kişiye özel hizmetler ve yönetim sistemiyle, evinizde her an ayrıcalıklı olduğunuzu hissedin.",
          en: "Leave daily hustles behind. With personalized services and a management system designed for your comfort, feel privileged in your home at every moment.",
          ru: "Оставьте повседневные заботы позади. Благодаря персонализированному сервису и системе управления, разработанной для вашего комфорта, чувствуйте себя особенным в своем доме каждый миг."
        },
        image: "https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=1920&q=80"
      }
    ],

    features: [
      {
        title: {
          tr: 'Sky Lounge',
          az: 'Sky Lounge',
          en: 'Sky Lounge',
          ru: 'Скай-лаунж'
        },
        description: {
          tr: 'En üst katta panoramik sosyal alan.',
          az: 'Ən yuxarı mərtəbədə panoramik sosial sahə.',
          en: 'Panoramic social space on the top floor.',
          ru: 'Панорамное общественное пространство на верхнем этаже.'
        },
        
      }
    ],
    description: {
      tr: 'Elite Heights, prestij ve konforu en üst seviyede sunar.',
      az: 'Elite Heights prestij və rahatlığı ən yüksək səviyyədə təqdim edir.',
      en: 'Elite Heights delivers prestige and comfort at the highest level.',
      ru: 'Elite Heights предлагает престиж и комфорт на высшем уровне.'
    },
    isFeatured: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-12-31')
  },

];