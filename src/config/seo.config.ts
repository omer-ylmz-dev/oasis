import { Locale } from "@/shared/types/common.types";

export interface SEOContent {
    title: string;
    description: string;
    image: string;
    path: string;
  }
  
  export type PageKeys = 'home' | 'about' | 'projects' | 'news' | 'contact';
  
  export const SEO_CONFIG: Record<Locale, Record<PageKeys, SEOContent>> = {
    tr: {
      home: {
        title: "OASIS | Modern Mimari ve Lüks Gayrimenkul Geliştirme",
        description: "OASIS ile hayalinizdeki yaşam alanlarını keşfedin. Modern mimariyi, estetik detaylarla harmanlayarak lüks gayrimenkul projeleri geliştiriyoruz. Sektördeki öncü vizyonumuzla, sadece bir ev değil, sürdürülebilir ve prestijli bir yaşam tarzı sunan ikonik yapılar inşa etmek için tutkuyla çalışıyoruz.",
        image: "/og/home-tr.jpg",
        path: ""
      },
      about: {
        title: "Hakkımızda | Mimari Vizyonumuz ve Değerlerimiz - OASIS",
        description: "OASIS olarak yılların verdiği tecrübeyi, yenilikçi tasarım anlayışıyla birleştiriyoruz. Kalite, dürüstlük ve sürdürülebilirlik ilkelerimizle gayrimenkul geliştirme dünyasında fark yaratıyoruz. Profesyonel ekibimiz ve global standartlardaki iş disiplinimizle, geleceğin şehirlerini inşa eden projelere imza atıyoruz.",
        image: "/og/about-tr.jpg",
        path: "about"
      },
      projects: {
        title: "Projelerimiz | Prestijli Gayrimenkul Portföyü - OASIS",
        description: "OASIS'in imzasını taşıyan lüks konut, ofis ve karma yaşam projelerini detaylıca inceleyin. Estetik ve fonksiyonelliği buluşturan geniş portföyümüzde, lokasyonu ve mimarisiyle öne çıkan yatırımlık projelerimiz sizi bekliyor. Modern yaşamın tüm gereksinimlerini karşılayan seçkin projelerimizi keşfedin.",
        image: "/og/projects-tr.jpg",
        path: "projects"
      },
      news: {
        title: "Haberler | Gayrimenkul Dünyasından Güncel Gelişmeler - OASIS",
        description: "Gayrimenkul sektörü, yeni inşaat teknolojileri ve OASIS'ten en son haberler burada. Projelerimizin ilerleme süreçlerinden, sektördeki yatırım trendlerine kadar her türlü güncel bilgiye ulaşın. Modern yaşam alanlarına dair en yeni duyuruları ve başarı hikayelerimizi takip etmek için doğru yerdesiniz.",
        image: "/og/news-tr.jpg",
        path: "news"
      },
      contact: {
        title: "İletişim | Bizimle Bağlantıya Geçin - OASIS",
        description: "Hayalinizdeki projeyle ilgili detaylı bilgi almak veya yatırım fırsatlarını değerlendirmek için OASIS ekibiyle iletişime geçin. Uzman danışmanlarımız, sorularınızı yanıtlamak ve size en uygun gayrimenkul çözümlerini sunmak için hazırdır. Adres, telefon ve e-posta bilgilerimize buradan ulaşarak randevunuzu hemen oluşturun.",
        image: "/og/contact-tr.jpg",
        path: "contact"
      }
    },
    en: {
      home: {
        title: "OASIS | Modern Architecture and Luxury Real Estate Development",
        description: "Discover your dream living spaces with OASIS. We develop luxury real estate projects by blending modern architecture with aesthetic details. With our pioneering vision in the sector, we work passionately to build iconic structures that offer not just a home, but a sustainable and prestigious lifestyle.",
        image: "/og/home-en.jpg",
        path: ""
      },
      about: {
        title: "About Us | Our Architectural Vision and Values - OASIS",
        description: "At OASIS, we combine years of experience with an innovative design approach. We make a difference in the world of real estate development with our principles of quality, integrity, and sustainability. With our professional team and global business discipline, we deliver projects that build the cities of the future.",
        image: "/og/about-en.jpg",
        path: "about"
      },
      projects: {
        title: "Our Projects | Prestigious Real Estate Portfolio - OASIS",
        description: "Examine in detail the luxury residential, office, and mixed-use projects signed by OASIS. Our extensive portfolio, bringing together aesthetics and functionality, features investment projects that stand out with their location and architecture. Explore our elite projects meeting all requirements of modern living.",
        image: "/og/projects-en.jpg",
        path: "projects"
      },
      news: {
        title: "News | Latest Developments from the Real Estate World - OASIS",
        description: "Real estate industry news, new construction technologies, and the latest updates from OASIS are here. Access all kinds of current information, from the progress of our projects to investment trends in the sector. You are in the right place to follow the newest announcements and our success stories regarding modern living spaces.",
        image: "/og/news-en.jpg",
        path: "news"
      },
      contact: {
        title: "Contact | Get in Touch with Us - OASIS",
        description: "Contact the OASIS team to get detailed information about your dream project or to evaluate investment opportunities. Our expert consultants are ready to answer your questions and offer you the most suitable real estate solutions. Access our address, phone, and e-mail information here to schedule your appointment today.",
        image: "/og/contact-en.jpg",
        path: "contact"
      }
    },
    az: {
      home: {
        title: "OASIS | Müasir Memarlıq və Lüks Daşınmaz Əmlakın İnkişafı",
        description: "OASIS ilə xəyalınızdakı yaşayış sahələrini kəşf edin. Müasir memarlığı estetik detallarla birləşdirərək lüks daşınmaz əmlak layihələri hazırlayırıq. Sektorun qabaqcıl vizyonu ilə təkcə ev deyil, həm də davamlı və nüfuzlu bir həyat tərzi təqdim edən ikonik tikililər inşa etmək üçün ehtirasla çalışırıq.",
        image: "/og/home-az.jpg",
        path: ""
      },
      about: {
        title: "Haqqımızda | Memarlıq Vizyonumuz və Dəyərlərimiz - OASIS",
        description: "OASIS olaraq illərin təcrübəsini innovativ dizayn yanaşması ilə birləşdiririk. Keyfiyyət, dürüstlük və davamlılıq prinsiplərimizlə daşınmaz əmlakın inkişafı dünyasında fərq yaradırıq. Peşəkar komandamız və qlobal iş intizamımızla gələcəyin şəhərlərini quran layihələrə imza atırıq.",
        image: "/og/about-az.jpg",
        path: "about"
      },
      projects: {
        title: "Layihələrimiz | Nüfuzlu Daşınmaz Əmlak Portfeli - OASIS",
        description: "OASIS-in imzası olan lüks yaşayış, ofis və qarışıq tipli layihələri ətraflı nəzərdən keçirin. Estetika və funksionallığı qovuşduran geniş portfelimizdə yerləşməsi və memarlığı ilə seçilən investisiya layihələri sizi gözləyir. Müasir həyatın bütün tələblərinə cavab verən seçkin layihələrimizi kəşf edin.",
        image: "/og/projects-az.jpg",
        path: "projects"
      },
      news: {
        title: "Xəbərlər | Daşınmaz Əmlak Dünyasından Son Yeniliklər - OASIS",
        description: "Daşınmaz əmlak sektoru, yeni inşaat texnologiyaları və OASIS-dən ən son xəbərlər buradadır. Layihələrimizin gedişatından sektordakı investisiya trendlərinə qədər hər cür aktual məlumatı əldə edin. Müasir yaşayış sahələrinə dair ən yeni elanları və uğur hekayələrimizi izləmək üçün doğru yerdəsiniz.",
        image: "/og/news-az.jpg",
        path: "news"
      },
      contact: {
        title: "Əlaqə | Bizimlə Əlaqə Saxlayın - OASIS",
        description: "Xəyalınızdakı layihə haqqında ətraflı məlumat almaq və ya investisiya imkanlarını dəyərləndirmək üçün OASIS komandası ilə əlaqə saxlayın. Ekspert məsləhətçilərimiz suallarınızı cavablandırmağa və sizə ən uyğun əmlak həllərini təqdim etməyə hazırdır. Ünvan, telefon və e-poçt məlumatlarımızı buradan əldə edərək görüşünüzü indi təyin edin.",
        image: "/og/contact-az.jpg",
        path: "contact"
      }
    },
    ru: {
      home: {
        title: "OASIS | Современная Архитектура и Девелопмент Недвижимости",
        description: "Откройте для себя жилое пространство вашей мечты вместе с OASIS. Мы разрабатываем проекты элитной недвижимости, сочетая современную архитектуру с эстетическими деталями. Обладая передовым видением в секторе, мы страстно работаем над созданием знаковых сооружений, предлагающих не просто дом, а престижный стиль жизни.",
        image: "/og/home-ru.jpg",
        path: ""
      },
      about: {
        title: "О Нас | Наше Архитектурное Видение и Ценности - OASIS",
        description: "В OASIS мы сочетаем многолетний опыт с инновационным подходом к дизайну. Мы меняем мир девелопмента недвижимости, придерживаясь принципов качества, честности и устойчивого развития. С нашей профессиональной командой мы реализуем проекты, которые строят города будущего.",
        image: "/og/about-ru.jpg",
        path: "about"
      },
      projects: {
        title: "Наши Проекты | Портфолио Элитной Недвижимости - OASIS",
        description: "Подробно ознакомьтесь с роскошными жилыми, офисными и многофункциональными проектами под эгидой OASIS. В нашем обширном портфолио, сочетающем эстетику и функциональность, вас ждут инвестиционные проекты, выделяющиеся своим расположением и архитектурой. Исследуйте наши эксклюзивные проекты сегодня.",
        image: "/og/projects-ru.jpg",
        path: "projects"
      },
      news: {
        title: "Новости | Актуальные События в Мире Недвижимости - OASIS",
        description: "Новости индустрии недвижимости, новые строительные технологии и последние обновления от OASIS здесь. Получайте актуальную информацию: от прогресса наших проектов до инвестиционных трендов. Вы находитесь в правильном месте, чтобы следить за последними объявлениями и историями успеха современных жилых пространств.",
        image: "/og/news-ru.jpg",
        path: "news"
      },
      contact: {
        title: "Контакты | Свяжитесь с Нами - OASIS",
        description: "Свяжитесь с командой OASIS, чтобы получить подробную информацию о проекте вашей мечты или оценить инвестиционные возможности. Наши эксперты готовы ответить на ваши вопросы и предложить наиболее подходящие решения в сфере недвижимости. Найдите наши контактные данные здесь и запишитесь на встречу.",
        image: "/og/contact-ru.jpg",
        path: "contact"
      }
    }
  };