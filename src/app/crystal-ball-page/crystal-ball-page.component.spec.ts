import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrystalBallPageComponent } from './crystal-ball-page.component';

describe('CrystalBallPageComponent', () => {
  let component: CrystalBallPageComponent;
  let fixture: ComponentFixture<CrystalBallPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrystalBallPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrystalBallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
