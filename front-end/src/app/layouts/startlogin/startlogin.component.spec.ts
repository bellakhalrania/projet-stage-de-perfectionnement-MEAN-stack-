import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartloginComponent } from './startlogin.component';

describe('StartloginComponent', () => {
  let component: StartloginComponent;
  let fixture: ComponentFixture<StartloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
