import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruititemComponent } from './fruititem.component';

describe('FruititemComponent', () => {
  let component: FruititemComponent;
  let fixture: ComponentFixture<FruititemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruititemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruititemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
