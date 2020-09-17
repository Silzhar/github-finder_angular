import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { strict } from 'assert';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { }

    public peticionRepositorios(username: string): Observable<any>{
        const ruta: string = `https://api.github.com/users/${username}/repos `;
        // Observable .
        const resultObservable = this.http.get(ruta);
        const observableMap = resultObservable.pipe(map((data: any[]) => {
            const repositories: Repo[] = [];
            data.forEach((element) => {
                const elementMap: Repo = {
                    name: element.name,
                    url: element.url,
                    description: element.description,
                };
                repositories.push(elementMap);
            });
            return repositories;
        }));
        return observableMap;
    }
}

export interface Repo {
    name: string;
    url: string;
    description: string;
}
