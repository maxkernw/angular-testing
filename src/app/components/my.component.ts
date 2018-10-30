import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    template: `<button (click)="increment()">cick</button> <h1 class="result">{{ title | json }}</h1>`,
    selector: 'my-app'
})
export class MyComponent implements OnInit {
    title: { id: number };

    ngOnInit(): void {
        this.http.getObservable().subscribe(res => this.title = res)
    }
    constructor(private http: HttpService) { }

    increment() {
        this.title.id = this.title.id+ 1;
    }
}