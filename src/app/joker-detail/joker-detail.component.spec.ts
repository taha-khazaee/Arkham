import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerDetailComponent } from './joker-detail.component';

describe('JokerDetailComponent', () => {
  let component: JokerDetailComponent;
  let fixture: ComponentFixture<JokerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
