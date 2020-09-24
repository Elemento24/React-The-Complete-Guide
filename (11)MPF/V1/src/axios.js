import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// We can also set Interceptors on our Instance of Axios, just like we did on Axios.
instance.interceptors.request.use(request => {
  // console.log(request);
  // We can also edit the Request, before sending it, but we must return the request, otherwsie we will be blocking the request.
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // console.log(response);
  // We can also edit the Request, before sending it, but we must return the request, otherwsie we will be blocking the request.
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;