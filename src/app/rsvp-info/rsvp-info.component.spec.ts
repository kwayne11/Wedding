import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpInfoComponent } from './rsvp-info.component';

describe('RsvpInfoComponent', () => {
  let component: RsvpInfoComponent;
  let fixture: ComponentFixture<RsvpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
