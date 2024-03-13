import axios, { AxiosError } from "axios";
import { FirebaseError } from "firebase/app";
import Constants from "../constants";
import Utils from "./index";

class Api {
  constructor() {
    const baseURL = import.meta.env.VITE_PUBLIC_API_BASE_URL;
    const timeout = import.meta.env.VITE_PUBLIC_API_TIMEOUT;
    this.instance = axios.create({ baseURL: baseURL, timeout: timeout });
  }

  async request(url, method, params, data, configs, loading) {
    try {
      if (loading) Utils.Bus.emit(Constants.Event.BUS.openNotification, true);
      const requestConfigs = { ...configs, url, method, params, data };
      return this.instance.request(requestConfigs);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      Utils.Bus.emit(Constants.Event.BUS.openNotification, false);
    }
  }

  async get(url, params, configs = {}) {
    return this.request(url, "get", params, {}, configs);
  }

  async getInSilence(url, params, configs = {}) {
    return this.request(url, "get", params, {}, configs, false);
  }

  async post(url, data, configs = {}) {
    return this.request(url, "post", {}, data, configs);
  }

  async postInSilence(url, data, configs = {}) {
    return this.request(url, "post", {}, data, configs, false);
  }

  async put(url, data, configs = {}) {
    return this.request(url, "put", {}, data, configs);
  }

  async putInSilence(url, data, configs = {}) {
    return this.request(url, "put", {}, data, configs, false);
  }

  async patch(url, data, configs = {}) {
    return this.request(url, "patch", {}, data, configs);
  }

  async patchInSilence(url, data, configs = {}) {
    return this.request(url, "patch", {}, data, configs, false);
  }

  async delete(url, data, configs = {}) {
    return this.request(url, "delete", {}, data, configs);
  }

  async deleteInSilence(url, data, configs = {}) {
    return this.request(url, "delete", {}, data, configs, false);
  }

  default() {
    this.instance.interceptors.request.clear();
    this.instance.interceptors.response.clear();
    this.instance.interceptors.request.use(
      (configs) => this.handleDefaultRequestSuccess(configs),
      (error) => this.handleDefaultRequestError(error),
    );
    this.instance.interceptors.response.use(
      (response) => this.handleDefaultResponseSuccess(response),
      (error) => this.handleDefaultResponseError(error),
    );
    return this;
  }

  async handleDefaultRequestSuccess(configs) {
    return configs;
  }

  async handleDefaultRequestError(error) {
    return Promise.reject(error);
  }

  async handleDefaultResponseSuccess(response) {
    return response;
  }

  async handleDefaultResponseError(error) {
    return Promise.reject(error);
  }
}

const api = new Api();

function responseSuccess(data) {
  return {
    status: 200,
    data: data,
    ok: true,
    message: null,
  };
}

function responseError(error) {
  console.error(error);

  if (error instanceof AxiosError && error.response) {
    return {
      status: error.response.status,
      data: error.response.data,
      ok: false,
      message: error.response.statusText,
    };
  }

  if (error instanceof AxiosError && error.request) {
    return {
      status: Constants.Api.HTTPS_STT_CODE.internalServerError,
      data: null,
      ok: false,
      message: "The request was made but no response was received",
    };
  }

  if (error instanceof FirebaseError) {
    return {
      status: Constants.Api.HTTPS_STT_CODE.firebaseError,
      data: error.code,
      ok: false,
      message: `${error.name} - ${error.message}`,
    };
  }

  return {
    status: Constants.Api.HTTPS_STT_CODE.internalServerError,
    data: null,
    ok: false,
    message: error.message,
  };
}

export { api, responseError, responseSuccess };
