import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-7f6a5.firebaseio.com/'
});

export default instance;