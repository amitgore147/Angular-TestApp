import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  getData(): Observable<string> {
    // Simulate fetching data from a server
    return of('Data from the server');
  }
}
