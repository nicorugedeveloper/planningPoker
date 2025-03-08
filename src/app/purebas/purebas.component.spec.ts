import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurebasComponent } from './purebas.component';

describe('PurebasComponent', () => {
  let component: PurebasComponent;
  let fixture: ComponentFixture<PurebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurebasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
