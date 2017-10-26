import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-activity',
  templateUrl: './company-activity.component.html',
  styleUrls: ['./company-activity.component.css']
})
export class CompanyActivityComponent implements OnInit, OnChanges {
  @Input() tuskCompany;
  activityVisible = false;
  companyActivity;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.companyActivity = this.companyService.getActivity(this.tuskCompany.id);
  }

  toggleActivity() {
    this.activityVisible = !this.activityVisible;
  }
}
