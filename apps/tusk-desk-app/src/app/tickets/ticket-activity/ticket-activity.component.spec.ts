import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketActivityComponent } from './ticket-activity.component';

describe('TicketActivityComponent', () => {
  let component: TicketActivityComponent;
  let fixture: ComponentFixture<TicketActivityComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TicketActivityComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
