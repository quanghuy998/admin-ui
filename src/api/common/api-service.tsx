import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IAxiosRetryConfig } from 'axios-retry';

interface IHttpResponse {
    error: boolean;
    data?: any;
}

interface IAxiosRequestRetryConfig extends AxiosRequestConfig {
    'axios-retry'?: IAxiosRetryConfig;
}

interface IAxiosError {
    response: AxiosResponse;
}

export const getAsync = async (link: string, headers?: any, retry: boolean = true) => {
    try {
        return parseResponse(await axios.get(link, buildRequestConfig(headers, retry)));
    } catch (error) {
        return await handleErrorResponse(error as IAxiosError);
    }
};

export const postAsync = async (link: string, data: any, headers?: any, retry: boolean = true) => {
    try {
        return parseResponse(await axios.post(link, data, buildRequestConfig(headers, retry)));
    } catch (error) {
        return await handleErrorResponse(error as IAxiosError);
    }
};

export const putAsync = async (link: string, data: any, headers?: any, retry: boolean = true) => {
    try {
        return parseResponse(await axios.put(link, data, buildRequestConfig(headers, retry)));
    } catch (error) {
        return await handleErrorResponse(error as IAxiosError);
    }
};

const parseResponse = (response: AxiosRequestConfig): IHttpResponse => ({
    error: false,
    data: response.data,
});

const buildRequestConfig = (headers: any, retry: boolean): IAxiosRequestRetryConfig => {
    const config: IAxiosRequestRetryConfig = { headers, withCredentials: true };
    if (!retry) config['axios-retry'] = { retries: 0 };
    return config;
};

const handleErrorResponse = async (error: IAxiosError) => {
    return parseErrorResponse(error);
};

const parseErrorResponse = (error: IAxiosError): IHttpResponse => {
    const response: IHttpResponse = { error: true };
    if (error.response) {
        response.data = error.response.data;
    }
    return response;
};
