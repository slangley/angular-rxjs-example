// https://jsonplaceholder.typicode.com/posts?userId=3


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( protected httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
