import {Component, OnInit} from '@angular/core';
import {Card} from "../http.service";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent  implements OnInit{
  cards:Card[] = [];
  filteredCards:Card[]  = []
  constructor( private httpService:HttpService) {
  }
  ngOnInit() {
    this.httpService.addCards().subscribe(cards =>{
      this.filteredCards = cards.results
      this.cards = cards.results
    })

  }

  getIdByUrl(card: Card) : string {
    const id = card.url.replace('https://swapi.dev/api/people/','')[0]
    return id;
  }



  showFirstTwoElements() {
    this.filteredCards = this.cards.slice(0,2)
  }

  showLastTwoElements() {
    this.filteredCards = this.cards.slice(this.cards.length - 2)
  }
}
