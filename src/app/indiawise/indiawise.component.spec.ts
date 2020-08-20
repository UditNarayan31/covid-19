import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiawiseComponent } from './indiawise.component';

describe('IndiawiseComponent', () => {
  let component: IndiawiseComponent;
  let fixture: ComponentFixture<IndiawiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiawiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiawiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
