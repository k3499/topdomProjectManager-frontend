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

export const getProjects = () => {
  const data = [
    { id: 1, firstName: "John", lastName: "Doe", role: "Admin" },
    { id: 2, firstName: "John", lastName: "Smith", role: "Editor" },
    { id: 3, firstName: "Kirill", lastName: "Doe", role: "Admin" },
    { id: 4, firstName: "Ivan", lastName: "Smith", role: "Editor" },
  ];
  return data;
};

export const deleteProjects = (project) => {
  console.log(`Типо тут удалили ${project.firstName}`);
};
