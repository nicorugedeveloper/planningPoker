import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteButtonComponent } from './invite-button.component';

describe('InviteButtonComponent', () => {
  let component: InviteButtonComponent;
  let fixture: ComponentFixture<InviteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
