// import axios, { AxiosError, AxiosInstance } from 'axios';

// let serverSession: any;
// let clientSession: any;

// export const setServerSession = (data: any) => {
//   serverSession = data;
// };

// export const setClientSession = (data: any) => {
//   clientSession = data;
// };

// const useRequest = async (config: any) => {
//   let token: string;

//   if (typeof window !== 'undefined') {
//     // Client-side-only code
//     token = clientSession?.secret?.user?.token;
//     config.headers.Platform = clientSession?.platform;
//     config.headers.Locale = clientSession?.locale;
//   } else {
//     token = serverSession?.secret?.user?.token;
//     config.headers.Platform = serverSession?.platform;
//     config.headers.Locale = serverSession?.locale;
//   }
//   if (token) config.headers.Token = token;

//   return config;
// };

// const useRequestError = (error: AxiosError): Promise<AxiosError> => {
//   return Promise.reject(error);
// };

// const useResponse = (response: any) => {
//   return response;
// };

// const useResponseError = async (error: any): Promise<any> => {
//   if (typeof window !== 'undefined' && error.response.status === 401) {
//     // client-side logout
//   }

//   return Promise.reject(error);
// };

// const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
//   axiosInstance.interceptors.request.use(useRequest, useRequestError);
//   axiosInstance.interceptors.response.use(useResponse, useResponseError);
//   return axiosInstance;
// };

// export const HTTP = setupInterceptors(
//   axios.create({
//     baseURL: process.env.NEXT_API_BASE,
//   }),
// );
