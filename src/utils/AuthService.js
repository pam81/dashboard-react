import axios from 'axios';
import qs from 'qs';


const CLIENT_ID = 'cE4H37jUWoEMP4fWz5vVcR9vX4GAsVi8O4fbMkTg';
const CLIENT_SECRET = 'mA6pNTzPPsDSmdBWrYW4YYVxfabNs1M8IXjJ96UNbj2iJrcfIwhZnorrrWwqjihIHB8RRwaXSPWH8j5V8zBiglR0uXhN3VeAh0vkwQdAqyXHEgp04THPJTnB7kYWem8e';
const ACCESS_TOKEN_KEY = 'lawiq_token';
const APIURL = 'https://auth-dev.lawiq.com/';

export function login(username, password){
  const params = {'grant_type': 'password', 'username': username, 'password': password };
  return axios.post(APIURL+'o/token/', qs.stringify(params),
  {
    headers: {
      'content-type': "application/x-www-form-urlencoded",
      'cache-control': "no-cache",
      'Authorization': 'Basic '+ btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }
    
  });
}

export function logout(){
  clearAccessToken();
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}


function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(accessToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

export function isLoggedIn() {
  const token = getAccessToken();
  return token;
}

