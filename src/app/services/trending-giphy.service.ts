import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingGiphyService {
  gifs = new BehaviorSubject<any>([]);


  constructor(private http:HttpClient) {}
  
  getTrendingGifs() {
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=100`)
  .subscribe((response: any)=> {
    this.gifs.next(response.data)
  });
  }

  searchGifs(gifName:string) {
  return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&limit=100`)
  .subscribe((response: any)=> {
    this.gifs.next(response.data)
  });
  }

  getGifs() {
    return this.gifs.asObservable();
  }
    
}  

