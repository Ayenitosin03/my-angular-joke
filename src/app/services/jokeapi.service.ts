import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class jokeApiService
{
  constructor(private httpclient: HttpClient) {}
getcomments(): Observable<any> {
   return this.httpclient.get("https://official-joke-api.appspot.com/random_joke")
}

}
