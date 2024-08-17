import { baseUrl, headers } from "./constants";

export default class Api {
  constructor() {
    this.headers = headers;
    this.baseUrl = baseUrl;
  }
  checkResponse(res) {
    if (res.ok) {
      return res.json(); //returning the JSON objet in case the res is ok
    }
    console.error(res.status);
    return Promise.reject(`Error:${res.status}`); //returning Error status
  }

  getItems() {
    return fetch(`${this.baseUrl}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this.checkResponse);
  }
}
