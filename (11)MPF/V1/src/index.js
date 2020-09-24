import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// We can set some common default parameters in all our Axios Requests
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// We can also set some common headers to all our Axios requests. One very common example is setting the Authorization Header, which is usually the same for all the requests.
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// We can also add some default settings on certain type of requests, like 'GET', 'POST', etc...
// The one we are using in the below example is by default. We don't need to set it Manually.
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request);
  // We can also edit the Request, before sending it, but we must return the request, otherwsie we will be blocking the request.
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  console.log(response);
  // We can also edit the Request, before sending it, but we must return the request, otherwsie we will be blocking the request.
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
