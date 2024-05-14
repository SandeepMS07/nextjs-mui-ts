import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  KEY_ACCESS_TOKEN,
  KEY_AZURE_TOKEN,
  KEY_CONFIG_URL,
  KEY_REFRESH_TOKEN,
  REFRESH_URL,
  X_API_KEY,
} from "../constant";

let apiConfig: { apiBaseURL: string; tokenUrl: string } | undefined;
export let axiosInstance: AxiosInstance;
const configUrl = KEY_CONFIG_URL;

export const getAxiosInstance = (
  data: { config?: { apiBaseURL: string; tokenUrl: string } }[]
) => {
  apiConfig = data[0]?.config;
  axiosInstance = axios.create({
    baseURL: apiConfig?.apiBaseURL,
    timeout: 15000,
  });

  axiosInstance.interceptors.request.use((req: AxiosRequestConfig): any => {
    const token = localStorage.getItem(KEY_AZURE_TOKEN);
    req.headers = req.headers || {};
    req.headers["x-api-key"] = X_API_KEY;
    req.headers["Authorization"] = `Bearer ${token}`;

    return req;
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },

    async function (error) {
      if (!error.response?.config && error.response?.status !== 401) {
        return error;
      }
      return axios({
        method: "get",
        baseURL: `${apiConfig?.tokenUrl}`,
      }).then(async (response) => {
        if (
          localStorage.refresh_token &&
          (error.response.status === 402 ||
            error.response.status === 502 ||
            error.response.status === 500)
        ) {
          const url = REFRESH_URL;
          try {
            const res = await axios.post(
              url,
              {
                refrshToken: localStorage.refresh_token,
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.azure_token}`,
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            );
            localStorage.setItem(
              KEY_ACCESS_TOKEN,
              res?.data?.accessToken?.token
            );
            localStorage.setItem(
              KEY_REFRESH_TOKEN,
              res?.data?.refreshToken?.token
            );
            localStorage.setItem(KEY_AZURE_TOKEN, response.data.access_token);
            error.response.config.headers[
              `Authorization`
            ] = `Bearer ${response.data.access_token}`;
            error.response.config.headers[`access-token`] =
              res.data.accessToken.token;
            return axios(error.response.config);
          } catch (err) {
            localStorage.clear();
            window.location.reload();
          }
        } else {
          localStorage.setItem(KEY_AZURE_TOKEN, response.data.access_token);
          error.response.config.headers[
            `Authorization`
          ] = `Bearer ${response.data.access_token}`;
          return axios(error.response.config);
        }
      });
    }
  );
};



export const getOptions = async (objectName: string, fieldName: string) => {
  try {
    const path = `/v1/helper/getDropDownValues?objectName=${objectName}&fieldName=${fieldName}`;
    const res: any = await axiosInstance.get(path);
    return res && res.data ? res.data : res;
  } catch (error) {
    return error;
  }
};


export const getFileUrl = async (data: File) => {
  try {
    const path = `/v1/event/create/publicUrl`;
    const form = new FormData();
    form.append('file', data);
    const res: any = await axiosInstance.post(path, form);
    return res && res.data ? res.data : res;
  } catch (error) {
    return error;
  }
};
