import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCongeComponent } from './demande-conge.component';

describe('DemandeCongeComponent', () => {
  let component: DemandeCongeComponent;
  let fixture: ComponentFixture<DemandeCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
