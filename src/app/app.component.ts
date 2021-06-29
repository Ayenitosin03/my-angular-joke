import { Component} from '@angular/core';
import { Comments } from './classes/comments';
// import { Observable,timer} from 'rxjs';
import { jokeApiService } from './services/jokeapi.service';

;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [jokeApiService]
})
export class AppComponent {
  interval: any;
  title = "Hello";
  data:any;
  counter:number=20;
  counterInterval: any


  constructor(private _jokeApiService: jokeApiService){

}

listcomments:Array<Comments>=[];

ngOnInit() {

  this.startCounter()
}

fetchJoke(){
  this._jokeApiService.getcomments()
    .subscribe(data => {
      this.listcomments.push(data);
      this.counter = 20;
      this.startCounter()
    })
}

  startCounter() {
    this.counterInterval = setInterval(() => {
      if (this.counter === 0) {
        this.fetchJoke()
        clearInterval(this.counterInterval)
      } else {
        this.counter = this.counter - 1
      }

    }, 1000)
}

ngOnDestroy() {
  if (this.interval) {
    clearInterval(this.interval);
  }

  if (this.counterInterval) {
    clearInterval(this.counterInterval);
  }
}}

