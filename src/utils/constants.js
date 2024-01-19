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
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
  { field: "address", fieldName: "Адрес" },
  { field: "phone", fieldName: "Телефон" },
  { field: "cadastr_number", fieldName: "Кадастр" },
  { field: "area_land", fieldName: "Площадь м²" },
  { field: "price", fieldName: "Цена" },
  { field: "photo_planirovka", fieldName: "План" },
  { field: "description", fieldName: "Описание" },
];

const colAdd = [
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Директ" },
  { field: "avito", fieldName: "Avito" },
  { field: "category_obj", fieldName: "Тип" },
  { field: "name", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "sq", fieldName: "Площадь м²" },
];

const pageTitle = {
  cian: "Проекты в Cian",
  direct: "Проекты в Я.Директ",
  avito: "Проекты в Avito",
};

export { BASE_URL, Headers, colDashboard, colCian, pageTitle, colAdd };
