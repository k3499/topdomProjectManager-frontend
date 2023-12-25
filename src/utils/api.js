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
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
      },
      {
        id: 2,
        cian: false,
        direct: true,
        avito: true,
        type: "home",
        firstName: "John",
        lastName: "Smith",
        role: "Editor",
      },
      {
        id: 3,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        firstName: "Kirill",
        lastName: "Doe",
        role: "Admin",
      },
      {
        id: 4,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        firstName: "Ivan",
        lastName: "Smith",
        role: "Editor",
      },
      {
        id: 5,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        firstName: "Kirill",
        lastName: "Doe",
        role: "Admin",
      },
      {
        id: 6,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        firstName: "Ivan",
        lastName: "Smith",
        role: "Editor",
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
        firstName: "John",
        lastName: "Doe",
        role: "Admin",
      },
      {
        id: 2,
        cian: false,
        direct: true,
        avito: true,
        type: "home",
        firstName: "John",
        lastName: "Smith",
        role: "Editor",
      },
      {
        id: 3,
        cian: true,
        direct: false,
        avito: true,
        type: "plot",
        firstName: "Kirill",
        lastName: "Doe",
        role: "Admin",
      },
      {
        id: 4,
        cian: true,
        direct: true,
        avito: true,
        type: "plot",
        firstName: "Ivan",
        lastName: "Smith",
        role: "Editor",
      },
    ];
    return data;
  }
};

export const deleteProjects = (project) => {
  console.log(`Типо тут удалили ${project.firstName}`);
};
