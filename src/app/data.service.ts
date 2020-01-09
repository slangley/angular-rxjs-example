// https://jsonplaceholder.typicode.com/posts?userId=3


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number,
  title: string,
  body: string,
  userid: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( protected httpClient: HttpClient) { }

  getPosts(id: string | null): Observable<Post[]> {
    let url = 'https://jsonplaceholder.typicode.com/posts'
    if (id) {
      url += `/${id}`;
    }
    return this.httpClient.get<Post[]>(url);
  }
}
