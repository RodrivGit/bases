import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroNames:string[] = ['Spiderman', 'Ironman', 'Rodman','Gal']
  borrado:string | undefined

  removeLastHero():void{
    this.borrado =  this.heroNames.pop()
  }

}
