import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyComponent } from './my.component';
import { HttpService } from '../http.service';
import { HttpServiceMock } from '../http.service.mock';

describe('MyComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MyComponent
      ],
      providers: [
        { provide: HttpService, useClass: HttpServiceMock }
      ]
    }).compileComponents();
  }));
  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('"id": 1');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    fixture.debugElement.nativeElement.querySelector('button').click();
    fixture.debugElement.nativeElement.querySelector('button').click();

    fixture.detectChanges();

    expect(compiled.querySelector('h1').textContent).toContain('3');
  });
});
