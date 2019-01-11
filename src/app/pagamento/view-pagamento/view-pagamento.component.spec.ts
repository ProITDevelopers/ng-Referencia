import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPagamentoComponent } from './view-pagamento.component';

describe('ViewPagamentoComponent', () => {
  let component: ViewPagamentoComponent;
  let fixture: ComponentFixture<ViewPagamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPagamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
