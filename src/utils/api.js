import axios from "axios";
import { BASE_URL, Headers } from "./constants";

// export const register = (email, password, name) => (
//     fetch(`${BASE_URL}/signup`, {
//       method: 'POST',
//       headers: Headers,
//       body: JSON.stringify({
//         email,
//         password,
//         name,
//       }),
//     })
//       .then(HandleOriginalResponse)
//       .then((res) => res)
//       .catch((err) => console.log(err))
//   );

export const createProject = async (project) => {
  try {
    const response = await axios.post(`${BASE_URL}index.php`, {
      method: "create",
      data: { ...project },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateProject = async (project) => {
  try {
    const response = await axios.post(`${BASE_URL}index.php`, {
      method: "update",
      data: { ...project },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateFile = (newFileData) => {
  console.log(newFileData);
};

export const getProjects = async (site) => {
  if (site === "cian") {
    const data = [
      {
        id: 1,
        cian: true,
        direct: true,
        avito: true,
        type: "project",
        title: "Проект дома из пеноблоков 1.67",
        floors: 1,
        size: 73,
        town: "nasledie",
      },
      {
        id: 2,
        cian: false,
        direct: true,
        avito: true,
        type: "home",
        title: "Проект дома из пеноблоков 1.67",
        floors: 1,
        size: 73,
      },
      {
        id: 3,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        title: "Проект дома из кирпича 1.67",
        floors: 1,
        size: 73,
      },
      {
        id: 4,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.67",
        floors: 1,
        size: 73,
      },
      {
        id: 5,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.63",
        floors: 1,
        size: 73,
      },
    ];

    return data;
  } else if (site === "direct") {
    //return getDirectData();
  } else if (site === "avito") {
    //return getAvitoData();
  } else {
    try {
      const response = await axios.get(
        `${BASE_URL}index.php?method=getAllOnMain`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
};

export const deleteProjects = async (project) => {
  try {
    const response = await axios.delete(`${BASE_URL}index.php`, {
      data: {
        method: "deleteOnId",
        data: { id: project.id },
      },
    });
  } catch (error) {
    // Обработка ошибки
    console.error(error);
  }
};
