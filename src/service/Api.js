import axios from "axios";
import { BASE_URL } from "../config/config";
export default function callApi (endpoint, method = "GET", body) {
    return axios({
      method: method,
      url: `${BASE_URL}/${endpoint}`,
      data: body
    }).catch(err => {
      console.log(err);
    });
  }