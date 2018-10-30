import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { MyComponent } from './components/my.component';
import { AppComponent } from './app.component';

import { routes } from './app-routing.module'
import { HttpServiceMock } from './http.service.mock';
import { HttpService } from './http.service';
import { ThumbComponent } from "./thumb/thumb.component";

describe('Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [
                HomeComponent,
                MyComponent,
                AppComponent,
                ThumbComponent
            ],
            providers: [{ provide: HttpService, useClass: HttpServiceMock }
            ]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    });

    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/home');
    }));

    it('navigate to "search" takes you to /my', fakeAsync(() => {
        router.navigate(['my']);
        tick();
        expect(location.path()).toBe('/my');
    }));
});