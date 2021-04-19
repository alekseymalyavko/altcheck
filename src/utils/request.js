import axios from 'axios'

const env = 'http://178.63.97.194:4000/';
const url = env || 'http://localhost:3009';

export const HTTP = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})