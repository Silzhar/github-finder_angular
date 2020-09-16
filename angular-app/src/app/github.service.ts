import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { }

    public peticionRepositorios(username: string): Observable<any>{
        const ruta: string = `https://api.github.com/users/${username}/repos `;
        // Observable .
        return this.http.get(ruta);
    }
}
