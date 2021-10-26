import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAanmakenComponent } from './event-aanmaken.component';

describe('EventAanmakenComponent', () => {
  let component: EventAanmakenComponent;
  let fixture: ComponentFixture<EventAanmakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventAanmakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAanmakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
