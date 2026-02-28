import { Languages } from "@/config/languages.config";
import { InfoSectionData } from "@/shared/components/common/InfoSection/types";
import { LocalizedString, SliderDataItem } from "@/shared/types/common.types";
import { IconType } from "react-icons";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";


export type HOME_SECTION_CONTENT = {
    title: Record<Languages, string>;
    content: Record<Languages, string>;
};

export interface StatItem {
    value: string;
    label: Record<Languages, string>;
}

export interface FeatureItem {
    title: LocalizedString | string;
    description: LocalizedString | string;
    icon?: IconType;
  }

export interface FeatureSectionData {
    title?: LocalizedString | string;
    description?: LocalizedString | string;
    items: FeatureItem[];
  }






export const HOME_CONTENT: HOME_SECTION_CONTENT = {
    title: {
        az: "Gələcəyin yaşayış standartlarını bu gün inşa edirik",
        tr: "Geleceğin yaşam standartlarını bugün inşa ediyoruz",
        en: "Building future living standards today",
        ru: "Строим стандарты жизни будущего уже сегодня",
    },
    content: {
        az: `Bizim üçün hər bir layihə sadəcə binalardan ibarət deyil, həm də insanların həyat keyfiyyətini yüksəldən yeni bir dünyadır. Müasir memarlıq prinsipləri və dayanıqlı tikinti texnologiyaları ilə paytaxtın simasını dəyişən yaşayış kompleksləri yaradırıq. Müştərilərimizin etimadı bizim ən böyük dəyərimizdir.\n\nİllərin təcrübəsini innovasiya ilə birləşdirərək, təhlükəsiz, estetik və hər bir detalın incəliklə düşünüldüyü mkanlar təqdim edirik. Şəhərin mərkəzində və ya təbiətin qoynunda – harada olmasından asılı olmayaraq, bizimlə hər ünvan yeni bir başlanğıcdır.`,
        tr: `Bizim için her bir proje sadece binalardan ibaret değil, aynı zamanda insanların yaşam kalitesini yükselten yeni bir dünyadır. Modern mimari prensipleri ve sürdürülebilir inşaat teknolojileri ile şehrin çehresini değiştiren yaşam kompleksleri hayata geçiriyoruz. Müşterilerimizin güveni, bizim en büyük sermayemizdir.\n\nBirikimimizi inovasyonla birleştirerek; güvenli, estetik ve her detayın incelikle düşünüldüğü mekanlar sunuyoruz. Şehrin merkezinde veya doğanın kucağında – nerede olursa olsun, bizimle her adres yeni bir başlangıçtır.`,
        en: `For us, every project is more than just buildings; it is a new world that enhances people's quality of life. We create residential complexes that transform the city's landscape with modern architectural principles and sustainable construction technologies. Our clients' trust is our greatest asset.\n\nBy combining years of expertise with innovation, we offer safe, aesthetic spaces where every detail is meticulously considered. Whether in the heart of the city or in the embrace of nature, every address with us is a new beginning.`,
        ru: `Для нас каждый проект — это не просто здания, а новый мир, повышающий качество жизни людей. Мы создаем жилые комплексы, меняющие облик столицы, используя принципы современной архитектуры и устойчивые строительные технологии. Доверие наших клиентов — наша главная ценность.\n\nСочетая многолетний опыт с инновациями, мы предлагаем безопасные и эстетичные пространства, где продумана каждая деталь. Будь то в центре города или в объятиях природы – каждый адрес с нами становится новым началом.`
    },
}




export const COMPANY_STATS: StatItem[] = [
    {
        value: "80+",
        label: {
            az: "Şöbə",
            tr: "Şube",
            en: "Branches",
            ru: "Филиалы",
        },
    },
    {
        value: "50K+",
        label: {
            az: "Məmnun Müştəri",
            tr: "Memnun Müşteri",
            en: "Satisfied Clients",
            ru: "Довольные клиенты",
        },
    },
    {
        value: "120+",
        label: {
            az: "Layihələr",
            tr: "Projeler",
            en: "Projects",
            ru: "Проекты",
        },
    },
    {
        value: "25",
        label: {
            az: "İllik Təcrübə",
            tr: "Yıllık Deneyim",
            en: "Years Experience",
            ru: "Лет опыта",
        },
    },
];



export const FEATURE_SECTION: FeatureSectionData = {
    title: {
        az: "Neyi Fərqləndiririk",
        tr: "Bizi Farklı Kılan Nedir",
        en: "What Makes Us Different",
        ru: "Что делает нас отличными",
    },
    description: {
        az: "Yalnız yaxşı bir şey yaratmaqdan ibarət deyil; dizayn etmək, yenilik etmək və diqqət çəkici təcrübələr yaratmaqdır.",
        tr: "Sadece iyi bir şey yaratmakla ilgili değil; tasarlamak, yenilik yapmak ve olağanüstü deneyimler yaratmakla ilgilidir.",
        en: "It’s not just about creating something good; it’s about designing, innovating, and collaborating to forge remarkable and unparalleled experiences.",
        ru: "Дело не только в создании чего-то хорошего; речь идет о проектировании, инновациях и сотрудничестве для создания выдающихся и уникальных впечатлений.",
    },
    items: [
        {
            title: {
                az: "Korporativ Məsuliyyət",
                tr: "Kurumsal Sorumluluk",
                en: "Corporate Responsibility",
                ru: "Корпоративная ответственность",
            },
            description: {
                az: "Məqsədimiz sıfır hadisə və sənayedə lider itki vaxtı nisbətidir.",
                tr: "Amacımız sıfır olay ve sektörde lider kayıp süre oranıdır.",
                en: "Our goal is zero incidents and our lost time frequency rate is industry leading.",
                ru: "Наша цель — ноль инцидентов, и наш коэффициент потери времени лидирует в отрасли.",
            },
            icon: FaHandsHelping
        },
        {
            title: {
                az: "Davamlı İnnovasiya",
                tr: "Sürekli İnovasyon",
                en: "Continuous Innovation",
                ru: "Непрерывные инновации",
            },
            description: {
                az: "Hər zaman yeni ideyalar və həll yolları axtarırıq.",
                tr: "Her zaman yeni fikirler ve çözümler arıyoruz.",
                en: "We constantly seek new ideas and solutions.",
                ru: "Мы постоянно ищем новые идеи и решения.",
            },
            icon: FaLightbulb
        },
        {
            title: {
                az: "Keyfiyyət Standartları",
                tr: "Kalite Standartları",
                en: "Quality Standards",
                ru: "Стандарты качества",
            },
            description: {
                az: "Bütün layihələrimiz yüksək keyfiyyət standartlarına uyğun həyata keçirilir.",
                tr: "Tüm projelerimiz yüksek kalite standartlarına göre yürütülür.",
                en: "All our projects are executed according to the highest quality standards.",
                ru: "Все наши проекты выполняются в соответствии с высокими стандартами качества.",
            },
            icon: HiOutlineBadgeCheck
        },
        {
            title: {
                az: "Müştəri Məmnuniyyəti",
                tr: "Müşteri Memnuniyeti",
                en: "Customer Satisfaction",
                ru: "Удовлетворенность клиентов",
            },
            description: {
                az: "Müştərilərimizin məmnuniyyəti bizim əsas prioritetimizdir.",
                tr: "Müşteri memnuniyeti bizim en önemli önceliğimizdir.",
                en: "Customer satisfaction is our top priority.",
                ru: "Удовлетворенность клиентов — наш главный приоритет.",
            },
            icon: MdOutlineSentimentSatisfiedAlt
        },
        {
            title: {
                az: "Dayanıqlı İnkişaf",
                tr: "Sürdürülebilir Gelişim",
                en: "Sustainable Development",
                ru: "Устойчивое развитие",
            },
            description: {
                az: "Ətraf mühitə və icmalara hörmət edərək inkişaf edirik.",
                tr: "Çevreye ve topluluklara saygı göstererek gelişiyoruz.",
                en: "We grow respecting the environment and communities.",
                ru: "Мы развиваемся с уважением к окружающей среде и сообществам.",
            },
            icon: RiLeafLine
        },
        {
            title: {
                az: "Təhlükəsizlik və Sağlamlıq",
                tr: "Güvenlik ve Sağlık",
                en: "Safety & Health",
                ru: "Безопасность и здоровье",
            },
            description: {
                az: "Bütün layihələrimizdə işçi və müştəri təhlükəsizliyi prioritetdir.",
                tr: "Tüm projelerimizde çalışan ve müşteri güvenliği önceliktir.",
                en: "Worker and customer safety is prioritized in all our projects.",
                ru: "Безопасность работников и клиентов является приоритетом во всех наших проектах.",
            },
            icon: AiOutlineSafetyCertificate
        },
    ],
};





export const HOME_SLIDER_DATA: SliderDataItem[] = [
    {
        image: 'https://images.unsplash.com/photo-1561321698-40ae82a47b9e?w=1920&h=1080',
        title: {
            az: 'Şəhərin Yeni Nəfəsi',
            tr: 'Şehrin Yeni Soluğu',
            en: 'The New Breath of the City',
            ru: 'Новое дыхание города'
        },
        description: {
            az: 'Biz yalnız binalar inşa etmirik, biz şəhərin ritmi ilə harmoniyada olan yeni yaşam mədəniyyəti yaradırıq. Hər bir kərpicdə estetikaya olan bağlılığımız, hər bir layihədə isə insanın rahatlığını əsas götürən fəlsəfəmiz dayanır. Sizin üçün sadəcə bir ünvan deyil, illər keçsə də dəyərini itirməyən bir həyat hekayəsi hazırlayırıq.',
            tr: 'Biz sadece bina inşa etmiyoruz; şehrin ritmiyle uyum içinde olan yeni bir yaşam kültürü kurguluyoruz. Her tuğlada estetiğe olan tutkumuz, her projede ise insan konforunu merkeze alan felsefemiz yatıyor. Sizin için sadece bir adres değil, yıllar geçse de eskimeyecek bir hayat hikayesi tasarlıyoruz.',
            en: 'We don’t just build structures; we curate a new living culture in harmony with the city’s rhythm. At the heart of every brick lies our passion for aesthetics, and in every project, a philosophy centered on human comfort. We aren’t just creating an address for you; we are crafting a life story that remains timeless.',
            ru: 'Мы не просто строим здания, мы создаем новую культуру жизни в гармонии с ритмом города. В каждом кирпиче — наша страсть к эстетике, в каждом проекте — философия, ориентированная на комфорт человека. Мы создаем для вас не просто адрес, а историю жизни, которая не подвластна времени.'
        }
    },
    {
        image: 'https://images.unsplash.com/photo-1653310193870-fb3171c00c17?w=1920&h=1080',
        title: {
            az: 'Məkanın Ruhuna Toxunuş',
            tr: 'Mekanın Ruhuna Dokunuş',
            en: 'Touching the Soul of Space',
            ru: 'Прикосновение к душе пространства'
        },
        description: {
            az: 'Dəbdəbə bizim üçün şatafat deyil, detalların mükəmməlliyidir. Layihələrimizdə innovasiyanı memarlıq sənəti ilə birləşdirərək, hər küncdə özünüzü xüsusi hiss edəcəyiniz məkanlar yaradırıq. Mühəndislik zərgər dəqiqliyi ilə birləşəndə ortaya çıxan nəticə sadədir: Sizin layiq olduğunuz o qüsursuz yaşam standartı.',
            tr: 'Lüks bizim için gösteriş değil, detayların mükemmeliyetidir. Projelerimizde inovasyonu mimari sanatla harmanlayarak, her köşesinde kendinizi özel hissedeceğiniz alanlar açıyoruz. Mühendislik zanaatla birleştiğinde ortaya çıkan sonuç oldukça net: Sizin hak ettiğiniz o kusursuz yaşam standartı.',
            en: 'For us, luxury isn’t about opulence; it’s about the perfection of details. By blending innovation with architectural art, we create spaces where you feel special in every corner. When engineering meets craftsmanship, the result is clear: the flawless standard of living you deserve.',
            ru: 'Для нас роскошь — это не пафос, а совершенство деталей. Сочетая инновации с архитектурным искусством, мы создаем пространства, где в каждом уголке вы будете чувствовать себя особенным. Результат слияния инженерии и искусства очевиден: тот безупречный стандарт жизни, которого вы достойны.'
        }
    },
    {
        image: 'https://images.unsplash.com/photo-1699608029850-ac73636021c3?w=1920&h=1080',
        title: {
            az: 'Sabaha Atılan İmza',
            tr: 'Yarına Atılan İmza',
            en: 'A Signature for Tomorrow',
            ru: 'Подпись в завтрашний день'
        },
        description: {
            az: 'Doğru investisiya bu günü deyil, gələcəyi qazanmaqdır. Biz strateji baxışımızla həm şəhərin ən perspektivli nöqtələrini seçir, həm də kapitalınızı etibarlı limana çeviririk. Peşəkarlığımız və şəffaflığımızla hər bir addımda yanınızdayıq, çünki biz sadəcə tərəfdaş deyil, sizin gələcəyinizin memarıyıq.',
            tr: 'Doğru yatırım bugünü değil, geleceği kazanmaktır. Stratejik bakış açımızla hem şehrin en umut verici noktalarını seçiyor hem de sermayenizi güvenli bir limana dönüştürüyoruz. Şeffaflığımız ve profesyonelliğimizle her adımda yanınızdayız; çünkü biz sadece bir ortak değil, geleceğinizin mimarıyız.',
            en: 'The right investment isn’t about winning today; it’s about securing tomorrow. With our strategic vision, we select the city’s most promising locations while turning your capital into a safe harbor. We stand by you with transparency and professionalism at every step, because we aren’t just partners—we are the architects of your future.',
            ru: 'Правильная инвестиция — это вклад не в сегодняшний день, а в будущее. Благодаря нашему стратегическому видению мы выбираем самые перспективные локации города, превращая ваш капитал в надежную гавань. Мы рядом на каждом этапе, ведь мы не просто партнеры, мы — архитекторы вашего будущего.'
        }
    }
];





export const FEATURE_INFO_SECTION: InfoSectionData = {
    type: "home",
    items: [
        {
            direction: "ltr",
            category: {
                az: "İcma",
                tr: "Topluluk",
                en: "Community",
                ru: "Сообщество",
            },
            title: {
                az: "Rahatlıq və Zəriflik Bir Arada",
                tr: "Konfor ve Zarafet Bir Arada",
                en: "Where Comfort Meets Elegance",
                ru: "Где комфорт встречается с элегантностью",
            },
            content: {
                az: "İstifadəçilərimiz rahatlıq və keyfiyyətli həyat təcrübəsi axtarır. Biz layihələrimizdə hər detalı diqqətlə nəzərdən keçirir, interyer dizaynından, material seçiminə, məkanın funksionallığına qədər hər şeyi optimize edirik. Məqsədimiz, hər bir müştərinin öz evində və ya ofisində maksimum rahatlığı və estetikanı yaşamasını təmin etməkdir. Yaradıcı yanaşmamız və innovativ həllərimizlə hər layihəmiz unikal və istifadəyə hazır olur.",
                tr: "Kullanıcılarımız konfor ve kaliteli yaşam deneyimi arıyor. Projelerimizde her detayı titizlikle inceliyor, iç mekan tasarımından, malzeme seçimlerine, alanın fonksiyonelliğine kadar her şeyi optimize ediyoruz. Amacımız, her müşterimizin evinde veya ofisinde maksimum rahatlığı ve estetiği deneyimlemesini sağlamaktır. Yaratıcı yaklaşımımız ve yenilikçi çözümlerimizle her projemiz benzersiz ve kullanıma hazırdır.",
                en: "Our users seek comfort and a high-quality living experience. In our projects, we meticulously consider every detail—from interior design, material selection, to spatial functionality. Our goal is to ensure that every client enjoys maximum comfort and aesthetic appeal in their home or office. Through our creative approach and innovative solutions, each project becomes unique and ready for immediate use.",
                ru: "Наши пользователи ищут комфорт и качественный жизненный опыт. В наших проектах мы тщательно продумываем каждую деталь — от дизайна интерьера, выбора материалов до функциональности пространства. Наша цель — обеспечить максимальный комфорт и эстетическое удовольствие для каждого клиента в его доме или офисе. Благодаря нашему креативному подходу и инновационным решениям, каждый проект становится уникальным и готовым к использованию."
            },
            image: "https://images.unsplash.com/photo-1620206299258-ac415ce0f7d3?w=1920&h=1080",
        },
        {
            direction: "rtl",
            category: {
                az: "Təcrübə",
                tr: "Deneyim",
                en: "Experience",
                ru: "Опыт",
            },
            title: {
                az: "Dizayn və Yenilik ilə Öndə",
                tr: "Tasarım ve Yenilik ile Önde",
                en: "Leading with Design & Innovation",
                ru: "Лидерство через дизайн и инновации",
            },
            content: {
                az: "Hər layihəmiz yaradıcı yanaşma və texniki mükəmməlliyi birləşdirir. Dizayn prosesi boyunca estetik və funksionallığı balanslaşdırır, hər detala xüsusi diqqət yetiririk. Məqsədimiz, müştərilərimizin hər zaman öz layihələrindən məmnun qalması və uzunmüddətli istifadəyə uyğun həllər təqdim etməkdir. Biz həmçinin ətraf mühitə hörmətlə yanaşır və davamlılıq prinsiplərini hər bir layihəmizə tətbiq edirik.",
                tr: "Her projemiz yaratıcı yaklaşım ve teknik mükemmeliyeti birleştirir. Tasarım süreci boyunca estetik ve fonksiyonelliği dengeler, her detaya özel dikkat gösteririz. Amacımız, müşterilerimizin her zaman projelerimizden memnun kalması ve uzun vadeli kullanıma uygun çözümler sunmaktır. Ayrıca çevreye saygı gösterir ve sürdürülebilirlik prensiplerini her projemize uygularız.",
                en: "Each of our projects combines creative approach and technical excellence. Throughout the design process, we balance aesthetics with functionality, paying attention to every detail. Our aim is to ensure that our clients are always satisfied with our projects and that we provide long-lasting, practical solutions. We also respect the environment and apply sustainability principles to each project.",
                ru: "Каждый наш проект сочетает творческий подход и техническое совершенство. В процессе проектирования мы балансируем эстетику и функциональность, уделяя внимание каждой детали. Наша цель — чтобы клиенты всегда оставались довольны нашими проектами и чтобы мы предоставляли долговечные и практичные решения. Мы также уважаем окружающую среду и применяем принципы устойчивого развития в каждом проекте."
            },
            image: "https://images.unsplash.com/photo-1557243962-0a093922933f?w=1920&h=1080",
        },
        {
            direction: "ltr",
            category: {
                az: "Keyfiyyət",
                tr: "Kalite",
                en: "Quality",
                ru: "Качество",
            },
            title: {
                az: "Yüksək Standartlı Həyat",
                tr: "Yüksek Standartlı Yaşam",
                en: "Living with High Standards",
                ru: "Жизнь по высоким стандартам",
            },
            content: {
                az: "Müştərilərimizin məmnuniyyəti bizim əsas prioritetimizdir. Layihələrimizdə şəffaf ünsiyyət və hər zaman dəstək təmin etmək bizim prinsiplərimizdəndir. Məqsədimiz, yalnız estetik və funksional məkanlar yaratmaq deyil, həm də müştəri təcrübəsini mükəmməl etməkdir. Biz həmçinin texnoloji yeniliklərdən istifadə edərək layihələrin keyfiyyətini və davamlılığını artırırıq.",
                tr: "Müşteri memnuniyeti bizim en önemli önceliğimizdir. Projelerimizde şeffaf iletişim ve her zaman destek sağlamak prensiplerimizdendir. Amacımız sadece estetik ve fonksiyonel alanlar yaratmak değil, aynı zamanda müşteri deneyimini mükemmelleştirmektir. Ayrıca teknolojik yenilikleri kullanarak projelerin kalitesini ve sürdürülebilirliğini artırıyoruz.",
                en: "Customer satisfaction is our top priority. In our projects, transparent communication and consistent support are our core principles. Our aim is not only to create aesthetically and functionally excellent spaces but also to perfect the customer experience. We also leverage technological innovations to enhance the quality and sustainability of our projects.",
                ru: "Удовлетворенность клиентов — наш главный приоритет. В наших проектах прозрачная коммуникация и постоянная поддержка являются нашими ключевыми принципами. Наша цель — не только создавать эстетически и функционально превосходные пространства, но и совершенствовать клиентский опыт. Мы также используем технологические инновации для повышения качества и устойчивости наших проектов."
            },
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080",
        },
        {
            direction: "rtl",
            category: {
                az: "Dəstək",
                tr: "Destek",
                en: "Support",
                ru: "Поддержка",
            },
            title: {
                az: "Hər Addımda Yanınızdayıq",
                tr: "Her Adımda Yanınızdayız",
                en: "Supporting You Every Step",
                ru: "Поддержка на каждом шагу",
            },
            content: {
                az: "Bütün layihələrimizdə işçi və müştəri təhlükəsizliyi prioritetdir. Həmçinin layihələrimizin hər mərhələsində yüksək keyfiyyət standartlarına riayət edirik. Məqsədimiz, müştərilərimizin və işçilərimizin maksimum təhlükəsizliyini təmin etmək, layihələri uzunmüddətli və etibarlı etməkdir.",
                tr: "Tüm projelerimizde çalışan ve müşteri güvenliği önceliktir. Ayrıca projelerimizin her aşamasında yüksek kalite standartlarına uyarız. Amacımız, müşterilerimizin ve çalışanlarımızın maksimum güvenliğini sağlamak, projeleri uzun vadeli ve güvenilir hale getirmektir.",
                en: "Worker and customer safety is prioritized in all our projects. Additionally, we adhere to high-quality standards at every stage of the project. Our goal is to ensure maximum safety for our clients and staff while making the projects long-lasting and reliable.",
                ru: "Безопасность работников и клиентов является приоритетом во всех наших проектах. Кроме того, мы соблюдаем высокие стандарты качества на каждом этапе проекта. Наша цель — обеспечить максимальную безопасность для клиентов и сотрудников, делая проекты долговечными и надежными."
            },
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080",
        },
    ],
};