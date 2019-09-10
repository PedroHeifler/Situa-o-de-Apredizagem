import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinhoComponent } from './carinho.component';

describe('CarinhoComponent', () => {
  let component: CarinhoComponent;
  let fixture: ComponentFixture<CarinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
