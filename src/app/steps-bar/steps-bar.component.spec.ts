import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsBarComponent } from './steps-bar.component';

describe('NavBarComponent', () => {
  let component: StepsBarComponent;
  let fixture: ComponentFixture<StepsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
