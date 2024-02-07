const BASE_URL = "https://phpmyadmin.topdom-erp.ru/TopDomApps-Backend/";
const Headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const colDashboard = [
  { field: "id", fieldName: "№" },
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Direct" },
  { field: "avito", fieldName: "Avito" },
  { field: "domclick", fieldName: "DomClick" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "image", fieldName: "Фото" },
  { field: "link", fieldName: "Ссылка" },
];

const colCian = [
  { field: "id", fieldName: "№" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floor", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "address", fieldName: "Адрес" },
  { field: "phone", fieldName: "Телефон" },
  { field: "cadastr_number", fieldName: "Кадастр" },
  { field: "area_land", fieldName: "Земля м²" },
  { field: "price", fieldName: "Цена" },
  { field: "description", fieldName: "Описание" },
  { field: "link", fieldName: "Ссылка" },
];

const colDirect = [
  { field: "id", fieldName: "№" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "address", fieldName: "Адрес" },
  { field: "phone", fieldName: "Телефон" },
  { field: "cadastr_number", fieldName: "Кадастр" },
  { field: "area_land", fieldName: "Земля м²" },
  { field: "price", fieldName: "Цена" },
  { field: "description", fieldName: "Описание" },
  { field: "renovation", fieldName: "Ремонт" },
  { field: "link", fieldName: "Ссылка" },
];

const colAvito = [
  { field: "id", fieldName: "№" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floor", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "address", fieldName: "Адрес" },
  { field: "phone", fieldName: "Телефон" },
  { field: "cadastr_number", fieldName: "Кадастр" },
  { field: "area_land", fieldName: "Земля м²" },
  { field: "price", fieldName: "Цена" },
  { field: "description", fieldName: "Описание" },
  { field: "rooms", fieldName: "Комнаты" },
  { field: "wallsType", fieldName: "Материал" },
  { field: "renovation", fieldName: "Ремонт" },
  { field: "link", fieldName: "Ссылка" },
];

const colDomclick = [
  { field: "id", fieldName: "№" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floor", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "address", fieldName: "Адрес" },
  { field: "phone", fieldName: "Телефон" },
  { field: "cadastr_number", fieldName: "Кадастр" },
  { field: "area_land", fieldName: "Земля м²" },
  { field: "price", fieldName: "Цена" },
  { field: "description", fieldName: "Описание" },
  { field: "link", fieldName: "Ссылка" },
];

const colAdd = [
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Direct" },
  { field: "avito", fieldName: "Avito" },
  { field: "domclick", fieldName: "DomClick" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const pageTitle = {
  cian: "Проекты в Cian",
  direct: "Проекты в Яндекс Недвижимость",
  avito: "Проекты в Avito",
  domclick: "Проекты в DomClick",
};

export {
  BASE_URL,
  Headers,
  colDashboard,
  colCian,
  colDirect,
  colAvito,
  colDomclick,
  pageTitle,
  colAdd,
};
