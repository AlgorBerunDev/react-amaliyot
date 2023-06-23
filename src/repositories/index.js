import axios from "axios";


export const baseDomain = "http://localhost:8080";


const client = axios.create({
  baseUrl: baseDomain
});

export default client;
