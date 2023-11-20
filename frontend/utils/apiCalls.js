import { STRAPI_API_URL, STRAPI_API_TOKEN } from "./constants";

export const fetchDataFromEndpoint = async (endpoint) => {
  let options = {
    method: "get",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };
  let response = await fetch(`${STRAPI_API_URL}${endpoint}`, options);
  let data = await response.json();
  return data;
};
