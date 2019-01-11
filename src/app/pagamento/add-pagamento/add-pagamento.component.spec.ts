import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPagamentoComponent } from './add-pagamento.component';

describe('AddPagamentoComponent', () => {
  let component: AddPagamentoComponent;
  let fixture: ComponentFixture<AddPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
