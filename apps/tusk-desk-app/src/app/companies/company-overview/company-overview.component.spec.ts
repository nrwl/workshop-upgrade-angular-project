import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOverviewComponent } from './company-overview.component';

describe('CompanyOverviewComponent', () => {
  let component: CompanyOverviewComponent;
  let fixture: ComponentFixture<CompanyOverviewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CompanyOverviewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
