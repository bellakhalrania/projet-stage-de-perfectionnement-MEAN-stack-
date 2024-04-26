import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDemandeComponent } from './consult-demande.component';

describe('ConsultDemandeComponent', () => {
  let component: ConsultDemandeComponent;
  let fixture: ComponentFixture<ConsultDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
