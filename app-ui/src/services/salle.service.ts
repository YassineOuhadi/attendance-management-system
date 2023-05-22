import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from 'src/app/classes/salle';

@Injectable({
  providedIn: 'root',
})
export class SalleService {
  constructor(private http: HttpClient) {}

  addSalle(salle: Salle): Observable<Salle> {
    return this.http.post<Salle>('http://localhost:9090/salle/add', salle);
  }

  getAllSalles(): Observable<Array<Salle>> {
    return this.http.get<Array<Salle>>('http://localhost:9090/salle/get');
  }

  delete(id: number): Observable<any> {
    return this.http.delete('http://localhost:9090/salle/delete/' + id, {});
  }
}
