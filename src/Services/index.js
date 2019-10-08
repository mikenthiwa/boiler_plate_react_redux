import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const { create } = axios;
const baseURL = process.env.REACT_APP_BACK_END_URL;

export default create({
  baseURL,
  headers: {
    'Authorization': 'application/json'
  }
});

