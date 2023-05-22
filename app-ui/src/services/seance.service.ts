import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seance } from '../app//classes/seance';
import { SeanceDto } from '../app//classes/seanceDto';

@Injectable({
  providedIn: 'root',
})
export class SeanceService {
  constructor(private http: HttpClient) {}

  addSeance(seance: Seance): Observable<Seance> {
    return this.http.post<Seance>('http://localhost:9090/seance/add', seance);
  }

  updateSeance(seance: Seance): Observable<Seance> {
    return this.http.post<Seance>(
      'http://localhost:9090/seance/update',
      seance
    );
  }

  getAllSeances(): Observable<Array<SeanceDto>> {
    return this.http.get<Array<SeanceDto>>('http://localhost:9090/seance/get');
  }

  delete(id: number): Observable<any> {
    return this.http.post('http://localhost:9090/seance/delete/' + id, {});
  }
}
