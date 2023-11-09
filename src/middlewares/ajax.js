import axios from 'axios';

// set the baseURl
const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const ajax = (store) => (next) => (action) => {
  switch(action.type) {
    default:
      next(action);
    break;
  }
};

export default ajax;
