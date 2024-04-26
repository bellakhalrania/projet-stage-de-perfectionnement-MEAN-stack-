import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTravailleComponent } from './demande-travaille.component';

describe('DemandeTravailleComponent', () => {
  let component: DemandeTravailleComponent;
  let fixture: ComponentFixture<DemandeTravailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeTravailleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeTravailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
