import { baseUrl } from "./constants";
export const getSearchResults = async (urls) => {
  const response = await fetch(`${baseUrl}/fetch-metadata`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ urls }), // Sending an array of URLs
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Error fetching metadata from backend");
  }
};
