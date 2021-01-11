import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCartComponent } from './simple-cart.component';

describe('SimpleCartComponent', () => {
  let component: SimpleCartComponent;
  let fixture: ComponentFixture<SimpleCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
