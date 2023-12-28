const BASE_URL = "https://";
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
];

const columns = [
  { field: "id", fieldName: "ID" },
  { field: "type", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "size", fieldName: "Площадь м²" },
];

const colAdd = [
  { field: "cian", fieldName: "Cian" },
  { field: "direct", fieldName: "Директ" },
  { field: "avito", fieldName: "Avito" },
  { field: "type", fieldName: "Тип" },
  { field: "title", fieldName: "Название" },
  { field: "floors", fieldName: "Этажей" },
  { field: "size", fieldName: "Площадь м²" },
];

const pageTitle = {
  cian: "Проекты в Cian",
  direct: "Проекты в Я.Директ",
  avito: "Проекты в Avito",
};

export { BASE_URL, Headers, colDashboard, columns, pageTitle, colAdd };
