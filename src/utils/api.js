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

export const updateProject = (project) => {
  console.log(project);
};

export const updateFile = (newFileData) => {
  console.log(newFileData);
};

export const getProjects = (site) => {
  if (site === "cian") {
    const data = [
      {
        id: 1,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.67",
        floors: 1,
        size: 73,
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
    const data = [
      {
        id: 1,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.67",
        floors: 1,
        size: 73,
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
      {
        id: 6,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.64",
        floors: 1,
        size: 73,
      },
      {
        id: 7,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        title: "Проект дома из кирпича 1.37",
        floors: 1,
        size: 73,
      },
      {
        id: 8,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        title: "Проект дома из пеноблоков 1.27",
        floors: 1,
        size: 73,
      },
    ];
    return data;
  }
};

export const deleteProjects = (project) => {
  console.log(`Типо тут удалили ${project.firstName}`);
};
