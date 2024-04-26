import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilUserComponent } from './acceuil-user.component';

describe('AcceuilUserComponent', () => {
  let component: AcceuilUserComponent;
  let fixture: ComponentFixture<AcceuilUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
