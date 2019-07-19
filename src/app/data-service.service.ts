import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/*
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/

export class DataService {

  
  
  constructor(private http: HttpClient) { }

  public getData(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiUrl + 'all/engines');
  }
}
