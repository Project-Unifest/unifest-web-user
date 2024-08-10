import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://ec2-43-200-72-31.ap-northeast-2.compute.amazonaws.com:9090/',
  timeout: 1000,
  headers: { accept: 'application/json' },
});

export { axiosInstance };
