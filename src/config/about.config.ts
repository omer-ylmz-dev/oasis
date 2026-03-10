import { ABOUT_SECTION_CONTENT, ABOUT_SECTION_QUOTE, ExpertSectionData } from "@/features/about/types";
import { StatItem } from "@/shared/types/content.types";



export const ABOUT_CONTENT: ABOUT_SECTION_CONTENT = {
  title: {
    az: "30 illik rəhbərlik daşınmaz əmlak sektorunda",
    tr: "30 yıllık liderlik gayrimenkul sektöründe",
    en: "30 years of leadership in real estate sector",
    ru: "30 лет лидерства в сфере недвижимости",
  },
  content: {
    az: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nunc faucibus euismod suscipit, purus diam pharetra augue, eget consequat ex massa ac ligula. In ullamcorper neque vestibulum nunc dignissim luctus. Phasellus placerat rhoncus volutpat. Praesent sed risus id est interdum commodo. Cras rhoncus, dolor eget gravida vulputate, risus libero tincidunt metus, eget auctor justo sapien in dui. Mauris placerat metus ut magna porta, quis convallis felis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed fermentum dolor. Sed maximus placerat ultricies. Nulla facilisi. Morbi convallis consequat nulla et rutrum. Cras porttitor ex vitae velit commodo eleifend et mollis nisl.\n\nPraesent aliquet sagittis turpis. Suspendisse nisi tellus, vestibulum sit amet hendrerit id, ullamcorper non lorem. Mauris porttitor eu nulla a finibus. Vestibulum sed sapien porta, sollicitudin tortor eget, vestibulum leo. Suspendisse placerat vestibulum ultrices. Aenean varius iaculis luctus. Ut pretium, ante fringilla tincidunt posuere, ex tellus efficitur ex, dictum pellentesque lectus elit quis orci. Nulla commodo interdum urna, sit amet viverra dolor.`,
    tr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nunc faucibus euismod suscipit, purus diam pharetra augue, eget consequat ex massa ac ligula. In ullamcorper neque vestibulum nunc dignissim luctus. Phasellus placerat rhoncus volutpat. Praesent sed risus id est interdum commodo. Cras rhoncus, dolor eget gravida vulputate, risus libero tincidunt metus, eget auctor justo sapien in dui. Mauris placerat metus ut magna porta, quis convallis felis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed fermentum dolor. Sed maximus placerat ultricies. Nulla facilisi. Morbi convallis consequat nulla et rutrum. Cras porttitor ex vitae velit commodo eleifend et mollis nisl.\n\nPraesent aliquet sagittis turpis. Suspendisse nisi tellus, vestibulum sit amet hendrerit id, ullamcorper non lorem. Mauris porttitor eu nulla a finibus. Vestibulum sed sapien porta, sollicitudin tortor eget, vestibulum leo. Suspendisse placerat vestibulum ultrices. Aenean varius iaculis luctus. Ut pretium, ante fringilla tincidunt posuere, ex tellus efficitur ex, dictum pellentesque lectus elit quis orci. Nulla commodo interdum urna, sit amet viverra dolor.`,
    en: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nunc faucibus euismod suscipit, purus diam pharetra augue, eget consequat ex massa ac ligula. In ullamcorper neque vestibulum nunc dignissim luctus. Phasellus placerat rhoncus volutpat. Praesent sed risus id est interdum commodo. Cras rhoncus, dolor eget gravida vulputate, risus libero tincidunt metus, eget auctor justo sapien in dui. Mauris placerat metus ut magna porta, quis convallis felis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed fermentum dolor. Sed maximus placerat ultricies. Nulla facilisi. Morbi convallis consequat nulla et rutrum. Cras porttitor ex vitae velit commodo eleifend et mollis nisl.\n\nPraesent aliquet sagittis turpis. Suspendisse nisi tellus, vestibulum sit amet hendrerit id, ullamcorper non lorem. Mauris porttitor eu nulla a finibus. Vestibulum sed sapien porta, sollicitudin tortor eget, vestibulum leo. Suspendisse placerat vestibulum ultrices. Aenean varius iaculis luctus. Ut pretium, ante fringilla tincidunt posuere, ex tellus efficitur ex, dictum pellentesque lectus elit quis orci. Nulla commodo interdum urna, sit amet viverra dolor.`,
    ru: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, nunc faucibus euismod suscipit, purus diam pharetra augue, eget consequat ex massa ac ligula. In ullamcorper neque vestibulum nunc dignissim luctus. Phasellus placerat rhoncus volutpat. Praesent sed risus id est interdum commodo. Cras rhoncus, dolor eget gravida vulputate, risus libero tincidunt metus, eget auctor justo sapien in dui. Mauris placerat metus ut magna porta, quis convallis felis congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sed fermentum dolor. Sed maximus placerat ultricies. Nulla facilisi. Morbi convallis consequat nulla et rutrum. Cras porttitor ex vitae velit commodo eleifend et mollis nisl.\n\nPraesent aliquet sagittis turpis. Suspendisse nisi tellus, vestibulum sit amet hendrerit id, ullamcorper non lorem. Mauris porttitor eu nulla a finibus. Vestibulum sed sapien porta, sollicitudin tortor eget, vestibulum leo. Suspendisse placerat vestibulum ultrices. Aenean varius iaculis luctus. Ut pretium, ante fringilla tincidunt posuere, ex tellus efficitur ex, dictum pellentesque lectus elit quis orci. Nulla commodo interdum urna, sit amet viverra dolor.`,
  },
  images: [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920&h=1080",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1920&h=1080",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1920&h=1080"
  ],
};






export const ABOUT_QUOTE: ABOUT_SECTION_QUOTE = {
  quote: {
    az: "HƏR HANSI BÖYÜK BİNANIN ƏN VACİB XÜSUSİYYƏTİ ONUN MÜKƏMMƏL PROPORTİYONDA OLMASIDIR.",
    tr: "HERHANGİ BÜYÜK BİNANIN EN ÖNEMLİ ÖZELLİĞİ MÜKEMMEL ORANTILARA SAHİP OLMASIDIR.",
    en: "THE MOST IMPORTANT CHARACTERISTIC OF ANY GREAT BUILDING IS THAT IT'S WELL PROPORTIONED.",
    ru: "САМОЕ ВАЖНОЕ ХАРАКТЕРИСТИКИ ЛЮБОГО ВЕЛИКОГО ЗДАНИЯ — ЕГО ПРАВИЛЬНЫЕ ПРОПОРЦИИ.",
  },
  author: {
    az: "Jane MADISON",
    tr: "Jane MADISON",
    en: "Jane MADISON",
    ru: "Jane MADISON",
  },
  role: {
    az: "Memar",
    tr: "Mimar",
    en: "Architect",
    ru: "Архитектор",
  },
};




export const ABOUT_STATS: StatItem[] = [
  {
    value: "450K+",
    label: {
      az: "İnşa Edilmiş Sahə (m²)",
      tr: "İnşa Edilmiş Alan (m²)",
      en: "Built Area (m²)",
      ru: "Построенная площадь (м²)",
    },
  },
  {
    value: "350+",
    label: {
      az: "Peşəkar Komanda",
      tr: "Profesyonel Ekip",
      en: "Professional Team",
      ru: "Профессиональная команда",
    },
  },
  {
    value: "15",
    label: {
      az: "Beynəlxalq Mükafat",
      tr: "Uluslararası Ödül",
      en: "International Awards",
      ru: "Международные награды",
    },
  },
  {
    value: "98%",
    label: {
      az: "Vaxtında Təhvil",
      tr: "Zamanında Teslimat",
      en: "On-time Delivery",
      ru: "Своевременная сдача",
    },
  },
];





export const EXPERT_SECTION: ExpertSectionData = {
  title: {
    az: "MÜTƏXƏSSİSLƏRİMİZLƏ TANIŞ OLUN",
    tr: "UZMANLARIMIZI TANIYIN",
    en: "MEET OUR EXPERTS",
    ru: "ПОЗНАКОМЬТЕСЬ С НАШИМИ ЭКСПЕРТАМИ",
  },
  description: {
    az: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, sapien vel pharetra varius, odio nunc pretium ante, in pulvinar ipsum quam sed nunc.",
    tr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, sapien vel pharetra varius, odio nunc pretium ante, in pulvinar ipsum quam sed nunc.",
    en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, sapien vel pharetra varius, odio nunc pretium ante, in pulvinar ipsum quam sed nunc.",
    ru: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales, sapien vel pharetra varius, odio nunc pretium ante, in pulvinar ipsum quam sed nunc.",
  },
  items: [
    {
      name: {
        az: "John DOE",
        tr: "John DOE",
        en: "John DOE",
        ru: "John DOE",
      },
      role: {
        az: "SEO",
        tr: "SEO",
        en: "SEO",
        ru: "SEO",
      },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "Jane SMITH", tr: "Jane SMITH", en: "Jane SMITH", ru: "Jane SMITH" },
      role: { az: "Architect", tr: "Mimar", en: "Architect", ru: "Архитектор" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "Michael BROWN", tr: "Michael BROWN", en: "Michael BROWN", ru: "Michael BROWN" },
      role: { az: "Engineer", tr: "Mühendis", en: "Engineer", ru: "Инженер" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "Emily DAVIS", tr: "Emily DAVIS", en: "Emily DAVIS", ru: "Emily DAVIS" },
      role: { az: "Designer", tr: "Tasarımcı", en: "Designer", ru: "Дизайнер" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "William JOHNSON", tr: "William JOHNSON", en: "William JOHNSON", ru: "William JOHNSON" },
      role: { az: "Manager", tr: "Yönetici", en: "Manager", ru: "Менеджер" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "Olivia MARTIN", tr: "Olivia MARTIN", en: "Olivia MARTIN", ru: "Olivia MARTIN" },
      role: { az: "Consultant", tr: "Danışman", en: "Consultant", ru: "Консультант" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "David WILSON", tr: "David WILSON", en: "David WILSON", ru: "David WILSON" },
      role: { az: "Planner", tr: "Planlayıcı", en: "Planner", ru: "Планировщик" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "Sophia LEE", tr: "Sophia LEE", en: "Sophia LEE", ru: "Sophia LEE" },
      role: { az: "Coordinator", tr: "Koordinatör", en: "Coordinator", ru: "Координатор" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
    {
      name: { az: "James KING", tr: "James KING", en: "James KING", ru: "James KING" },
      role: { az: "Analyst", tr: "Analist", en: "Analyst", ru: "Аналитик" },
      image: "https://images.unsplash.com/photo-1667821399946-ae0bce59aa22?w=1920&h=1080",
    },
  ],
};