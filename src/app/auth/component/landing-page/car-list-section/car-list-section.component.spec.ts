import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListSectionComponent } from './car-list-section.component';

describe('CarListSectionComponent', () => {
  let component: CarListSectionComponent;
  let fixture: ComponentFixture<CarListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
