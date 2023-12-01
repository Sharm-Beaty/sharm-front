import fetchClient from "./fetchClient";

const categoriesClient = {
  getAll: () => fetchClient.get("/categories/").then((res) => res.data),
};

export default categoriesClient;
