import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import matter from 'gray-matter-browser';
import { forkJoin } from 'rxjs';
import { Proyect } from '../../Home/models/proyect';
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
                  date = ''
                } = matter(markdownFile).data;
                return {
                  title,
                  description,
                  articleUrl,
                  imageUrl,
                  tags,
                  degree,
                  type,
                  date
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
            date = ''
          } = matter(data).data;
          resolve({
            title,
            description,
            articleUrl,
            imageUrl,
            tags,
            degree,
            type,
            date
          })
        }
      })
    })
  }

  getContent(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.get(url, { responseType: 'text' }).subscribe({
        next: (data) => {
          const content = marked(matter(data).content);
          resolve(content); // Devuelves el contenido procesado
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
