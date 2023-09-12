import http from "./base-service";

export const countryList = () => http.get("/countries");

export const countryDetail = (alpha3Code) => {
    const url = `/countries/${alpha3Code}`;
    return http.get(url);
  };