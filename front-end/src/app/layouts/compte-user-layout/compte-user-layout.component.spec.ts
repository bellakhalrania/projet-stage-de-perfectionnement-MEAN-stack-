import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteUserLayoutComponent } from './compte-user-layout.component';

describe('CompteUserLayoutComponent', () => {
  let component: CompteUserLayoutComponent;
  let fixture: ComponentFixture<CompteUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteUserLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompteUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
