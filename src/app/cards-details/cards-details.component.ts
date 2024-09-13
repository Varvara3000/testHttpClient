import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import { CardDetails, HttpService} from "../http.service";

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrl: './cards-details.component.css'
})
export class CardsDetailsComponent implements OnInit{
  cardDetails:CardDetails;
  constructor(private httpClient:HttpClient, private activatedRoute:ActivatedRoute,private httpService:HttpService) {
  }

ngOnInit(){
  const id = this.activatedRoute.snapshot.params['id']
  this.httpService.getCardDetail(id).subscribe(data =>{
    this.cardDetails = data;
  })
}


}
