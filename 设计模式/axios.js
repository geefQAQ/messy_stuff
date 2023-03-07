function Axios(config) {
  
}

Axios.prototype.request = function request() {
  console.log(this)
}

const axios = new Axios();
Axios.prototype.request.bind(axios);
axios.request();