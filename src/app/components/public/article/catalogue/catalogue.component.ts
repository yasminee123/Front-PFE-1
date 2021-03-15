import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleVue } from 'src/app/interfaces/article-vue';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  cat: Article[] = [] //from api
  art:ArticleVue[]=[]
  s: Article[] = [] //pour chaque itération
  pre: any //pour le retour
  multi: Article[][] = [];
  parent = true
  previous = false
  constructor(private ser: ArticlesService) { }

  ngOnInit(): void {
   /* this.ser.getAllArticles().subscribe(
      res => {
        this.cat = res;
        this.s = this.cat.filter(item => item.parentId == 0);
        //console.log(this.s)
      },
      err => console.log(err)
    )*/
    this.getParent()

  }
  getChild(i: number) {
    //récuperer la liste des previous
    this.pre = this.s
    //J'enregistre l'historique du catalogue
    this.multi.push(this.s)

    console.log("ahawa el multi1") 
    console.log(this.multi)
    console.log("-------------")

    //parent ces les articles ayant parentId=0
    this.parent = false
    //les fils qu'on va afficher
    this.s = this.cat.filter(item => item.parentId == i);
    this.previous = false
  }

  OnClickPrevious() {
    this.previous = true;
    this.pre = this.multi.pop();
    console.log("ahawa el multi2") 
    console.log(this.multi)
    if(this.multi.length==0)
      this.getParent()
  }

  getParent(){
    this.ser.getAllArticles().subscribe(
      res => {
        this.cat = res;
        this.s = this.cat.filter(item => item.parentId == 0);
        this.parent=true
      },
      err => console.log(err)
    )
    this.ser.getAllArticlesData().subscribe(
      res=>{this.art=res;/*console.log(this.art)*/},
      err=>console.log(err)
    )
  }

}
