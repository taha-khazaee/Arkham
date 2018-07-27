import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerSearchComponent } from './joker-search.component';

describe('JokerSearchComponent', () => {
  let component: JokerSearchComponent;
  let fixture: ComponentFixture<JokerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
