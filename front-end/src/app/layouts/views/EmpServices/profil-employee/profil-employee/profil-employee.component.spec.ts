import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilEmployeeComponent } from './profil-employee.component';

describe('ProfilEmployeeComponent', () => {
  let component: ProfilEmployeeComponent;
  let fixture: ComponentFixture<ProfilEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
