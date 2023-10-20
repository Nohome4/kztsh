import { $host, $authHost } from ".";
import jwtDecode from "jwt-decode";
// news-api
export const fetchNews = async () => {
  try {
    const { data } = await $host.get("api/news");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching news" };
  }
};
export const fetchOneNews = async (id) => {
  try {
    const { data } = await $host.get("api/news/" + id);
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching news" };
  }
};

export const deleteNews = async (id) => {
  try {
    const { data } = await $host.delete("api/news/" + id);
    return data;
  } catch (error) {
    return {
      error: `Error deleting news item with id ${id}: ${error.message}`,
    };
  }
};

export const addNews = async (formData) => {
  try {
    const { data } = await $host.post("api/news/", formData);
    return data;
  } catch (error) {
    return { error: error.message || "Error adding news" };
  }
};

// galery-api
export const fetchGalery = async () => {
  try {
    const { data } = await $host.get("api/galery");
    return data;
  } catch (error) {
    return { error: error.message || "Ошибка подключения" };
  }
};

export const deleteGalery = async (id) => {
  try {
    const { data } = await $host.delete("api/galery/" + id);
    return data;
  } catch (error) {
    return {
      error: `Error deleting gallery item with id ${id}: ${error.message}`,
    };
  }
};

export const addGalery = async (formData) => {
  try {
    const { data } = await $host.post("api/galery/", formData);
    return data;
  } catch (error) {
    return { error: error.message || "Error adding gallery item" };
  }
};

// marketing-contacts-api
export const fetchMarketingContacts = async () => {
  try {
    const { data } = await $host.get("api/marketingContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching marketing contacts" };
  }
};

export const deleteMarketingContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/marketingContacts/" + id);
    return data;
  } catch (error) {
    return {
      error: `Error deleting marketing contact with id ${id}: ${error.message}`,
    };
  }
};

export const addMarketingContacts = async (formData) => {
  try {
    const { data } = await $host.post("api/marketingContacts/", formData);
    return data;
  } catch (error) {
    return { error: error.message || "Error adding marketing contact" };
  }
};

// director-contacts-api
export const fetchDirectorContacts = async () => {
  try {
    const { data } = await $host.get("api/directorContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching director contacts" };
  }
};

export const deleteDirectorContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/directorContacts/" + id);
    return data;
  } catch (error) {
    return {
      error: `Error deleting director contact with id ${id}: ${error.message}`,
    };
  }
};

export const addDirectorContacts = async (formData) => {
  try {
    const { data } = await $host.post("api/directorContacts/", formData);
    return data;
  } catch (error) {
    return { error: error.message || "Error adding director contact" };
  }
};

// director-photo-contacts-api
export const fetchDirectorPhotoContacts = async () => {
  try {
    const { data } = await $host.get("api/directorPhotoContacts");
    return data;
  } catch (error) {
    return { error: error.message || "Error fetching director photo contacts" };
  }
};

export const deleteDirectorPhotoContacts = async (id) => {
  try {
    const { data } = await $host.delete("api/directorPhotoContacts/" + id);
    return data;
  } catch (error) {
    return {
      error: `Error deleting director photo contact with id ${id}: ${error.message}`,
    };
  }
};

export const addDirectorPhotoContacts = async (formData) => {
  const { data } = await $host.post("api/directorPhotoContacts/", formData);
  return data;
};

// reporting and reporting-Links api
export const fetchReporting = async () => {
  const { data } = await $host.get("api/reporting");
  return data;
};

export const deleteReporting = async (id) => {
  const { data } = await $host.delete("api/reporting/" + id);
  return data;
};

export const addReporting = async (formData) => {
  const { data } = await $host.post("api/reporting/", formData);
  return data;
};

export const addReportingLink = async (formData, id) => {
  const { data } = await $host.post("api/reporting/addLink/" + id, formData);
  return data;
};

export const deleteReportingLink = async (id) => {
  const { data } = await $host.delete("api/reporting/deleteLink/" + id);
  return data;
};

// Items-api
export const fetchItems = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteItems = async (id) => {
  const { data } = await $host.delete("api/items/" + id);
  return data;
};

export const addItems = async (formData) => {
  const { data } = await $host.post("api/items/", formData);
  return data;
};

// Category-api
export const fetchCategory = async () => {
  const { data } = await $host.get("api/items");
  return data;
};

export const deleteCategory = async (id) => {
  const { data } = await $host.delete("api/category/" + id);
  return data;
};

export const addCategory = async (formData, id) => {
  const { data } = await $host.post("api/category/" + id, formData);
  return data;
};

export const addTableCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addTableCharacteristics/" + id,
    formData
  );
  return data;
};

export const deleteTableCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteTableCharacteristics/" + id
  );
  return data;
};

export const addCharacteristics = async (formData, id) => {
  const { data } = await $host.post(
    "api/category/addCharacteristics/" + id,
    formData
  );
  return data;
};

export const deleteCharacteristics = async (id) => {
  const { data } = await $host.delete(
    "api/category/deleteCharacteristics/" + id
  );
  return data;
};

export const login = async (formData) => {
  const { data } = await $host.post("api/auth/login", formData);
  return data;
};

export const checkToken = async () => {
  const { data } = await $authHost.get("api/auth/checkToken");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
