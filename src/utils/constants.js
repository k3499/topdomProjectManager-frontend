const BASE_URL = "http://phpmyadmin.topdom-erp.ru/TopDomApps-Backend/";
const Headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const colDashboard = [
  { field: "id", fieldName: "ID" },
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Директ" },
  { field: "avito", fieldName: "Avito" },
  { field: "type", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "size", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const columns = [
  { field: "id", fieldName: "ID" },
  { field: "type", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "size", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const colAdd = [
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Директ" },
  { field: "avito", fieldName: "Avito" },
  { field: "type", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "size", fieldName: "Площадь м²" },
  { field: "town", fieldName: "Поселок" },
];

const pageTitle = {
  cian: "Проекты в Cian",
  direct: "Проекты в Я.Директ",
  avito: "Проекты в Avito",
};

export { BASE_URL, Headers, colDashboard, columns, pageTitle, colAdd };
