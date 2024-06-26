import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAdminComponent } from './message-admin.component';

describe('MessageAdminComponent', () => {
  let component: MessageAdminComponent;
  let fixture: ComponentFixture<MessageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
