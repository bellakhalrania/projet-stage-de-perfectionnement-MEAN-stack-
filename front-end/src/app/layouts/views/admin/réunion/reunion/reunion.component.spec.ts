import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionComponent } from './reunion.component';

describe('ReunionComponent', () => {
  let component: ReunionComponent;
  let fixture: ComponentFixture<ReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
