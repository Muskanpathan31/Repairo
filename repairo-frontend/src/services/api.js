import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Matches AuthController.java
export const loginUser = (username, password) => 
  API.post(`/auth/login?username=${username}&password=${password}`);

// Matches ServiceController.java
export const getServices = () => API.get('/services');

// Matches CartController.java
export const addToCart = (cartItem) => API.post('/cart/add', cartItem);

// Matches OrderController.java
export const placeOrder = (orderData) => API.post('/order/place', orderData);

export default API;