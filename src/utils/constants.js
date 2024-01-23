const BASE_URL = "https://phpmyadmin.topdom-erp.ru/TopDomApps-Backend/";
const Headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const colDashboard = [
  { field: "id", fieldName: "ID" },
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Директ" },
  { field: "avito", fieldName: "Avito" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const colCian = [
  { field: "id", fieldName: "ID" },
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
];

const colAvito = [
  { field: "id", fieldName: "ID" },
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
  { field: "rooms", fieldName: "Комнаты" },
  { field: "wallsType", fieldName: "Материал" },
  { field: "renovation", fieldName: "Ремонт" },
  { field: "description", fieldName: "Описание" },
];

const colAdd = [
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Direct" },
  { field: "avito", fieldName: "Avito" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const pageTitle = {
  cian: "Проекты в Cian",
  direct: "Проекты в Я.Директ",
  avito: "Проекты в Avito",
};

export {
  BASE_URL,
  Headers,
  colDashboard,
  colCian,
  colAvito,
  pageTitle,
  colAdd,
};
