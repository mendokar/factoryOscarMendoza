import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPedidosComponent } from './checkout-pedidos.component';

describe('CheckoutPedidosComponent', () => {
  let component: CheckoutPedidosComponent;
  let fixture: ComponentFixture<CheckoutPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
