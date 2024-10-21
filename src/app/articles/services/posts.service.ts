import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import matter from 'gray-matter-browser';
import { error } from 'node:console';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { Proyect } from '../../Home/models/proyect';
import { resolve } from 'node:path';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  

  constructor(private http: HttpClient) { }

  posts: Array<Proyect> = []

  getAllPosts(): Promise<Proyect[]> {
    return new Promise((resolve, reject) => {
      const pathPosts = 'assets/posts/posts.json'
      this.http.get<{ posts: string[] }>(pathPosts).subscribe({
        next: data => {
          const requests = data.posts.map(slug => //extraemos en el map todos los strings dentro del array "posts"
            this.http.get( //vamos a extraer los posts
              `assets/posts/${slug}/post.md`, { responseType: 'text' }
            ))
          forkJoin(requests).subscribe({
            next: allPostDetails => {
              this.posts = allPostDetails.map(markdownFile => {
                const {
                  title = '',
                  description = '',
                  articleUrl = '',
                  imageUrl = '',
                  tags = [],
                  degree = '',
                  type = '',
                } = matter(markdownFile).data;
                return {
                  title,
                  description,
                  articleUrl,
                  imageUrl,
                  tags,
                  degree,
                  type
                }
              })
            },
            error: error => console.error(error)
          }).add(() => resolve(this.posts))
        },
        error: error => console.error(error)
      })
    })
  }

  getPost(slug: string): Promise<Proyect> {
    return new Promise((resolve, reject) => {
      this.http.get(`assets/posts/${slug}/post.md`, { responseType: 'text' }).subscribe({
        next: data => {
          const {
            title = '',
            description = '',
            articleUrl = '',
            imageUrl = '',
            tags = [],
            degree = '',
            type = '',
          } = matter(data).data;
          resolve({
            title,
            description,
            articleUrl,
            imageUrl,
            tags,
            degree,
            type
          })
        }
      })
    })
  }

  getContent(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(url, { responseType: 'text' }).subscribe({
        next: data => {
          resolve(marked(matter(data).content))
        }
      })
    })
  }
}
