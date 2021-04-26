import axios from 'axios'

const env = 'http://altcheck.org/';
const url = env || 'http://localhost:3009';

export const HTTP = axios.create({
  baseURL: url,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})