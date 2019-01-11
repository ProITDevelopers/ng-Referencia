import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReferenciaComponent } from './view-referencia.component';

describe('ViewReferenciaComponent', () => {
  let component: ViewReferenciaComponent;
  let fixture: ComponentFixture<ViewReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
