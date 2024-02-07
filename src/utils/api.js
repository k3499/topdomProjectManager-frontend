import axios from "axios";
import { BASE_URL } from "./constants";

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
    try {
      const response = await axios.get(
        `${BASE_URL}index.php?method=getAllCIan`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else if (site === "direct") {
    try {
      const response = await axios.get(
        `${BASE_URL}index.php?method=getAllDirect`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else if (site === "avito") {
    try {
      const response = await axios.get(
        `${BASE_URL}index.php?method=getAllAvito`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  } else if (site === "domclick") {
    try {
      const response = await axios.get(
        `${BASE_URL}index.php?method=getAllDomclick`
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
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
export const getImage = async (id, type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}index.php?method=getPhoto&id=${id}&img_type=${type}`
    );

    const data = response.data;
    return data;
  } catch (error) {
    // Обработка ошибки
    console.error(error);
    return [];
  }
};

export const deleteImage = async (uid) => {
  try {
    const response = await axios.delete(`${BASE_URL}index.php`, {
      data: {
        method: "deletePhoto",
        data: { id: uid },
      },
    });
  } catch (error) {
    // Обработка ошибки
    console.error(error);
  }
};
