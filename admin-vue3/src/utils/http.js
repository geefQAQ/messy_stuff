import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://localhost:3000';

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";

// axios.defaults.withCredentials = true;

axios.defaults.timeout = 2000;

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    return Promise.reject(error);
  }
)

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: qs.stringify(data),
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
}

const get = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: data,
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
}

const remove = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url,
      params: data,
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    })
  })
}

export {
  post,
  get,
  remove
};