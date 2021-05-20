import axios from 'axios';
// Set config defaults when creating the instance
export const API = axios.create({
	baseURL: 'http://2d743ccc6bd3.ngrok.io/chat'
	//baseURL: 'http://localhost:5000/tapaksuci/v1'
});