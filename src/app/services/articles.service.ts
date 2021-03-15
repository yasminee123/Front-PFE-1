import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private Url = 'http://localhost:5000';
  constructor(private http: HttpClient) { }

  getAllArticles() {
    let data = this.http.get<any>(this.Url+'/api/CatalogueVue/all');
    return data;
  }

  getAllArticlesData() {
    let data = this.http.get<any>(this.Url+'/api/ArticleVue');
    return data;
  }
}
