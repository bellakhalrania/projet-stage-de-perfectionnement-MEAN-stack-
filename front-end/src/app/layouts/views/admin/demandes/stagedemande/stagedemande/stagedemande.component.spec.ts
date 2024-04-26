import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagedemandeComponent } from './stagedemande.component';

describe('StagedemandeComponent', () => {
  let component: StagedemandeComponent;
  let fixture: ComponentFixture<StagedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StagedemandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StagedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
