import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class BookService{
  private url = 'https://sheet.best/api/sheets/335085f2-2e2d-4af3-b442-62a42b666874';

  httpOptions = {
    Headers: new HttpHeaders({'content-type': 'aplication/json'})
  }

  constructor(private http:HttpClient) { }

  getBook(){
    return this.http.get(this.url)
  }
}
