import { ContactFormConfig, OfficeItem, ShowroomItem } from "@/features/contact/types";


export const SHOWROOMS: ShowroomItem[] = [
  {
    title: {
      az: "Greenview Apartments",
      tr: "Greenview Apartmanları",
      en: "Greenview Apartments",
      ru: "Гринвью Апартаменты"
    },
    location: {
      lat: 40.3824,
      lng: 49.8732
    }
  },
  {
    title: {
      az: "Sunset Villas",
      tr: "Sunset Villaları",
      en: "Sunset Villas",
      ru: "Сансет Виллы"
    },
    location: {
      lat: 40.3598,
      lng: 49.8264
    }
  }
];


/* export const OFFICES: OfficeItem[] = [
  {
    title: { az: "First Office", tr: "Birinci Ofis", en: "First Office", ru: "Первый офис" },
    address: {
      az: "1940 El Cajon Blvd, San Diego, CA 92104",
      tr: "1940 El Cajon Blvd, San Diego, CA 92104",
      en: "1940 El Cajon Blvd, San Diego, CA 92104",
      ru: "1940 El Cajon Blvd, Сан-Диего, Калифорния 92104"
    },
    phone: "+1 555 123-45-67"
  },
  {
    title: { az: "Second Office", tr: "İkinci Ofis", en: "Second Office", ru: "Второй офис" },
    address: {
      az: "742 Evergreen Terrace, Springfield",
      tr: "742 Evergreen Terrace, Springfield",
      en: "742 Evergreen Terrace, Springfield",
      ru: "742 Эвергрин Террас, Спрингфилд"
    },
    phone: "+1 555 987-65-43"
  }
]; */



export const OFFICES: OfficeItem[] = [
  {
    title: { 
      az: "Sahil Ofisi", 
      tr: "Sahil Ofisi", 
      en: "Sahil Office", 
      ru: "Офис Сахиль" 
    },
    address: {
      az: "Neftçilər Prospekti 153, Bakı, Azərbaycan",
      tr: "Neftçiler Caddesi 153, Bakü, Azerbaycan",
      en: "153 Neftchilar Avenue, Baku, Azerbaijan",
      ru: "Проспект Нефтяников 153, Баку, Азербайджан"
    },
    location: {
      lat: 40.3758,
      lng: 49.8517
    },
    phone: "+1 555 123-45-67"
  },
  {
    title: { 
      az: "Nizami Ofisi", 
      tr: "Nizami Ofisi", 
      en: "Nizami Office", 
      ru: "Офис Низами" 
    },
    address: {
      az: "Nizami küçəsi 203, Bakı, Azərbaycan",
      tr: "Nizami Caddesi 203, Bakü, Azerbaycan",
      en: "203 Nizami Street, Baku, Azerbaijan",
      ru: "Улица Низами 203, Баку, Азербайджан"
    },
    location: {
      lat: 40.3789,
      lng: 49.8471
    },
    phone: "+1 555 987-65-43"
  }
];





export const CONTACT_FORM_CONFIG: ContactFormConfig = {
  credentials: [
    { name: "name", type: "text", translationKey: "input_name_placeholder" },
    { name: "surname", type: "text", translationKey: "input_surname_placeholder" },
    { name: "phone", type: "tel", translationKey: "input_phone_placeholder" },
    { name: "email", type: "email", translationKey: "input_mail_placeholder" },
  ],
  projects: [
    {
      id: "p1",
      label: { en: "Greenview Apartment", tr: "Yeşilvadi Evleri", ru: "Гринвью Апартаменты", az: "Yaşılvadi Evləri" }
    },
    {
      id: "p2",
      label: { en: "Skyline Tower", tr: "Skyline Kule", ru: "Скайлайн Тауэр", az: "Skyline Qülləsi" }
    },
    {
      id: "p3",
      label: { en: "Ocean Breeze Residance", tr: "Okyanus Esintisi Rezidans", ru: "Океан Бриз Резиденс", az: "Okean Mehri Rezidans" }
    },
    {
      id: "p4",
      label: { en: "Mountain Retreat", tr: "Dağ Evi Konakları", ru: "Маунтин Ретрит", az: "Dağ Evi İqamətgahları" }
    },
    {
      id: "p5",
      label: { en: "City Center Lofts", tr: "Şehir Merkezi Loftları", ru: "Лофты в Центре Города", az: "Şəhər Mərkəzi Loftları" }
    },
    {
      id: "p6",
      label: { en: "Golden Sands Villas", tr: "Altın Kum Villaları", ru: "Виллы Золотые Пески", az: "Qızıl Qum Villaları" }
    },
    {
      id: "p7",
      label: { en: "Heritage Square", tr: "Miras Meydanı", ru: "Площадь Наследия", az: "Miras Meydanı" }
    },
    {
      id: "p8",
      label: { en: "Pine Valley Estate", tr: "Çamlı Vadi Konutları", ru: "Пайн Вэлли Эстейт", az: "Şam Vadisi Yaşayış Kompleksi" }
    }
  ],
  message: {
    name: "message",
    translationKey: "input_message_placeholder",
    rows: 5
  },
  agreement: {
    name: "agreement",
    translationKey: "agreement"
  },
  submit: {
    translationKey: "submit_label"
  }
};