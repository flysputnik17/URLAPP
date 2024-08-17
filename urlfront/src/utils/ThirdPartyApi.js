import { APIkey } from "./constants";

export const getSearchResults = (data) => {
  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  };

  return fetch(`https://api.linkpreview.net/?q=${encodeURIComponent(data)}`, {
    headers: {
      "X-Linkpreview-Api-Key": APIkey,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
