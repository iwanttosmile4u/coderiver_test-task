import axios, { AxiosResponse } from 'axios';
import { User } from '../types/types';

const baseURL = 'https://jsonplaceholder.typicode.com';

export function getAllUsers(): Promise<AxiosResponse<User[]>> {
  return axios.get(`${baseURL}/users`);
}

export function getUser(id: number): Promise<AxiosResponse<User>> {
  return axios.get(`${baseURL}/users/${id}`);
}
