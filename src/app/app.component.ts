import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrendingGiphyService } from './services/trending-giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'giphy-website';

  public gifs: any[] = [];
  public subscription!: Subscription;

 constructor(private trendingGiphyService: TrendingGiphyService) { }

 ngOnInit(): void {
  this.trendingGiphyService.getTrendingGifs();
  this.subscription = this.trendingGiphyService.getGifs()
  .subscribe((response:any) => {
    this.gifs = response;
  })
 }

 search(searchTerm: string) {
  if(searchTerm !== '') {
    this.trendingGiphyService.searchGifs(searchTerm)
  }
 }

 ngOnDestroy(): void {
     this.subscription.unsubscribe();
 }

}
