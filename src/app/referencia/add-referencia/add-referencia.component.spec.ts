import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferenciaComponent } from './add-referencia.component';

describe('AddReferenciaComponent', () => {
  let component: AddReferenciaComponent;
  let fixture: ComponentFixture<AddReferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
