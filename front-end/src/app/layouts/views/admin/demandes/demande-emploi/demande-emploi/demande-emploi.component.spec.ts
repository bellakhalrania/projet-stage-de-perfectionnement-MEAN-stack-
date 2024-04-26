import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeEmploiComponent } from './demande-emploi.component';

describe('DemandeEmploiComponent', () => {
  let component: DemandeEmploiComponent;
  let fixture: ComponentFixture<DemandeEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeEmploiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
